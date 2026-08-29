/**
 * FiscalLink for ANAF — dashboard settings view.
 *
 * State machine required by the app spec:
 *   loading   → spinner while fetching /api/status
 *   error     → Banner with message + Retry button
 *   empty     → connection form (FiscalLink API key + optional ANAF SPV credentials)
 *   connected → status summary + "Enable webhook" + Disconnect
 */
import { useEffect, useState } from 'react';
import {
  Banner,
  Box,
  Button,
  Inline,
  Spinner,
  TextField,
} from '@stripe/ui-extension-sdk/ui';
import type { ExtensionContextValue } from '@stripe/ui-extension-sdk/context';
import { signedRequest } from '../helpers/backend';

interface Status {
  installed: boolean;
  fiscalLinkConnected: boolean;
  anafConfigured: boolean;
  webhookEnabled: boolean;
}

type ViewState =
  | { kind: 'loading' }
  | { kind: 'error'; message: string }
  | { kind: 'empty' }
  | { kind: 'connected'; status: Status };

export const Setup = ({ userContext }: ExtensionContextValue) => {
  const [state, setState] = useState<ViewState>({ kind: 'loading' });
  const [apiKey, setApiKey] = useState('');
  const [anafCif, setAnafCif] = useState('');
  const [anafClientId, setAnafClientId] = useState('');
  const [anafClientSecret, setAnafClientSecret] = useState('');
  const [saving, setSaving] = useState(false);
  const [actionError, setActionError] = useState('');

  const loadStatus = async () => {
    setState({ kind: 'loading' });
    setActionError('');
    try {
      const status = await signedRequest<Status>('/api/status', userContext);
      const hasAnyConfig = status.fiscalLinkConnected || status.anafConfigured;
      setState(hasAnyConfig ? { kind: 'connected', status } : { kind: 'empty' });
    } catch (e) {
      setState({ kind: 'error', message: (e as Error).message });
    }
  };

  useEffect(() => {
    void loadStatus();
  }, []);

  const handleConnect = async () => {
    setSaving(true);
    setActionError('');
    try {
      await signedRequest('/api/connect', userContext, {
        apiKey,
        ...(anafCif ? { anafCif } : {}),
        ...(anafClientId ? { anafClientId } : {}),
        ...(anafClientSecret ? { anafClientSecret } : {}),
      });
      await loadStatus();
    } catch (e) {
      setActionError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleEnableWebhook = async () => {
    setSaving(true);
    setActionError('');
    try {
      await signedRequest('/api/enable', userContext, {});
      await loadStatus();
    } catch (e) {
      setActionError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  const handleDisconnect = async () => {
    setSaving(true);
    setActionError('');
    try {
      await signedRequest('/api/disconnect', userContext, {});
      setApiKey('');
      setAnafCif('');
      setAnafClientId('');
      setAnafClientSecret('');
      setState({ kind: 'empty' });
    } catch (e) {
      setActionError((e as Error).message);
    } finally {
      setSaving(false);
    }
  };

  if (state.kind === 'loading') {
    return (
      <Box css={{ padding: 'medium' }}>
        <Spinner size="small">Loading status…</Spinner>
      </Box>
    );
  }

  if (state.kind === 'error') {
    return (
      <Box css={{ padding: 'medium' }}>
        <Banner type="critical" title="Unable to load">
          {state.message}
        </Banner>
        <Box css={{ marginTop: 'small' }}>
          <Button onPress={() => void loadStatus()}>Retry</Button>
        </Box>
      </Box>
    );
  }

  if (state.kind === 'empty') {
    return (
      <Box css={{ padding: 'medium' }}>
        <Box css={{ fontWeight: 'bold' }}>Connect FiscalLink for ANAF</Box>
        <Box css={{ marginTop: 'small' }}>
          Turn completed checkouts into Romanian ANAF e-invoices (EN 16931 / CIUS-RO UBL)
          automatically. Your credentials are stored in Stripe&apos;s Secret Store — never in
          your browser or on our servers.
        </Box>

        <Box css={{ marginTop: 'medium' }}>
          <TextField
            label="FiscalLink API key"
            description="From your FiscalLink dashboard → API keys (fl_…)"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder="fl_…"
            autoComplete="off"
          />
        </Box>
        <Box css={{ marginTop: 'small' }}>
          <TextField
            label="ANAF SPV CIF (company tax ID)"
            description="The issuer CIF that has SPV access (e.g. RO12345678)"
            value={anafCif}
            onChange={(e) => setAnafCif(e.target.value)}
            placeholder="RO…"
          />
        </Box>
        <Box css={{ marginTop: 'small' }}>
          <TextField
            label="ANAF SPV OAuth client ID (optional)"
            value={anafClientId}
            onChange={(e) => setAnafClientId(e.target.value)}
            autoComplete="off"
          />
        </Box>
        <Box css={{ marginTop: 'small' }}>
          <TextField
            label="ANAF SPV OAuth client secret (optional)"
            type="password"
            value={anafClientSecret}
            onChange={(e) => setAnafClientSecret(e.target.value)}
            autoComplete="off"
          />
        </Box>

        {actionError && (
          <Box css={{ marginTop: 'small' }}>
            <Banner type="critical" title="Connection failed">
              {actionError}
            </Banner>
          </Box>
        )}

        <Box css={{ marginTop: 'medium' }}>
          <Button
            type="primary"
            onPress={() => void handleConnect()}
            disabled={saving || !apiKey.trim()}
          >
            {saving ? 'Connecting…' : 'Connect'}
          </Button>
        </Box>
      </Box>
    );
  }

  // ── connected ────────────────────────────────────────────────────────
  const { status } = state;
  return (
    <Box css={{ padding: 'medium' }}>
      <Box css={{ fontWeight: 'bold' }}>FiscalLink for ANAF — connected</Box>

      <Box css={{ marginTop: 'small' }}>
        <Inline>
          <Dot ok={status.fiscalLinkConnected} />
          <Box>FiscalLink API key: {status.fiscalLinkConnected ? 'configured' : 'missing'}</Box>
        </Inline>
      </Box>
      <Box css={{ marginTop: 'xsmall' }}>
        <Inline>
          <Dot ok={status.anafConfigured} />
          <Box>ANAF SPV credentials: {status.anafConfigured ? 'configured' : 'missing'}</Box>
        </Inline>
      </Box>
      <Box css={{ marginTop: 'xsmall' }}>
        <Inline>
          <Dot ok={status.webhookEnabled} />
          <Box>
            Checkout webhook:{' '}
            {status.webhookEnabled
              ? 'enabled — invoices are generated automatically'
              : 'not enabled'}
          </Box>
        </Inline>
      </Box>

      {actionError && (
        <Box css={{ marginTop: 'small' }}>
          <Banner type="critical" title="Action failed">
            {actionError}
          </Banner>
        </Box>
      )}

      <Box css={{ marginTop: 'medium' }}>
        <Inline>
          {!status.webhookEnabled && (
            <Button
              type="primary"
              onPress={() => void handleEnableWebhook()}
              disabled={saving}
            >
              {saving ? 'Enabling…' : 'Enable checkout webhook'}
            </Button>
          )}
          <Button onPress={() => void handleDisconnect()} disabled={saving}>
            Disconnect
          </Button>
        </Inline>
      </Box>

      <Box css={{ marginTop: 'medium' }}>
        New invoices appear in your FiscalLink dashboard; ANAF submission and answer polling
        run there. Quota and metering follow your FiscalLink plan.
      </Box>
    </Box>
  );
};

const Dot = ({ ok }: { ok: boolean }) => (
  <Box css={{ color: ok ? 'success' : 'critical', fontWeight: 'bold' }}>●</Box>
);
