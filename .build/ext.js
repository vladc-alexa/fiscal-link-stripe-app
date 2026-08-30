"use strict";
var __StripeExtExports = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined")
      return require.apply(this, arguments);
    throw new Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // node_modules/invariant/browser.js
  var require_browser = __commonJS({
    "node_modules/invariant/browser.js"(exports, module) {
      "use strict";
      var invariant3 = function(condition, format, a, b, c, d, e, f) {
        if (true) {
          if (format === void 0) {
            throw new Error("invariant requires an error message argument");
          }
        }
        if (!condition) {
          var error;
          if (format === void 0) {
            error = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          } else {
            var args = [a, b, c, d, e, f];
            var argIndex = 0;
            error = new Error(
              format.replace(/%s/g, function() {
                return args[argIndex++];
              })
            );
            error.name = "Invariant Violation";
          }
          error.framesToPop = 1;
          throw error;
        }
      };
      module.exports = invariant3;
    }
  });

  // .build/manifest.js
  var manifest_exports = {};
  __export(manifest_exports, {
    BUILD_TIME: () => BUILD_TIME,
    SDK_VERSION: () => SDK_VERSION,
    Setup: () => Setup_default,
    default: () => manifest_default
  });

  // src/views/Setup.tsx
  var import_react12 = __require("react");

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var import_jsx_runtime = __require("react/jsx-runtime");
  var import_react = __require("@remote-ui/react");

  // node_modules/@stripe/ui-extension-sdk/version.js
  var SDK_VERSION = "9.3.0";

  // node_modules/@stripe/ui-extension-sdk/ui/index.js
  var withSdkProps = (Component) => {
    const wrappedComponentName = Component.displayName || Component.toString();
    const WithSdkProps = (props) => (0, import_jsx_runtime.jsx)(Component, { ...props, wrappedComponentName, sdkVersion: SDK_VERSION, schemaVersion: "v9" });
    WithSdkProps.wrappedComponentName = wrappedComponentName;
    return WithSdkProps;
  };
  var defineComponent = (name, fragmentProps, wrapWithSdkProps) => {
    const remoteComponent = (0, import_react.createRemoteReactComponent)(name, {
      fragmentProps
    });
    if (!wrapWithSdkProps) {
      return remoteComponent;
    }
    return withSdkProps(remoteComponent);
  };
  var AccordionItem = defineComponent("AccordionItem", ["title", "actions", "media", "subtitle"], true);
  var Accordion = defineComponent("Accordion", [], true);
  var Badge = defineComponent("Badge", [], true);
  var Banner = defineComponent("Banner", ["actions", "description", "title"], true);
  var BarChart = defineComponent("BarChart", [], true);
  var Box = defineComponent("Box", [], true);
  var ButtonGroup = defineComponent("ButtonGroup", ["menuTrigger"], true);
  var Button = defineComponent("Button", [], true);
  var Checkbox = defineComponent("Checkbox", ["label"], true);
  var ChipList = defineComponent("ChipList", [], true);
  var Chip = defineComponent("Chip", [], true);
  var ContextView = defineComponent("ContextView", ["actions", "banner", "footerContent", "primaryAction", "secondaryAction"], true);
  var CurrencyField = defineComponent("CurrencyField", ["label"], true);
  var DataTable = defineComponent("DataTable", [], true);
  var DateField = defineComponent("DateField", ["label"], true);
  var DateRangePicker = defineComponent("DateRangePicker", [], true);
  var DetailPagePropertyList = defineComponent("DetailPagePropertyList", [], true);
  var DetailPage = defineComponent("DetailPage", ["primaryColumn", "secondaryColumn"], true);
  var DetailPageTable = defineComponent("DetailPageTable", [], true);
  var Divider = defineComponent("Divider", [], true);
  var FocusView = defineComponent("FocusView", ["footerContent", "primaryAction", "secondaryAction"], true);
  var FormFieldGroup = defineComponent("FormFieldGroup", [], true);
  var FullPageView = defineComponent("FullPageView", [], true);
  var Icon = defineComponent("Icon", [], true);
  var Img = defineComponent("Img", [], true);
  var Inline = defineComponent("Inline", [], true);
  var LineChart = defineComponent("LineChart", [], true);
  var Link = defineComponent("Link", [], true);
  var ListItem = defineComponent("ListItem", ["icon", "image", "secondaryTitle", "title", "value"], true);
  var List = defineComponent("List", [], true);
  var MenuGroup = defineComponent("MenuGroup", ["title"], true);
  var MenuItem = defineComponent("MenuItem", [], true);
  var Menu = defineComponent("Menu", ["trigger"], true);
  var OnboardingView = defineComponent("OnboardingView", ["error"], true);
  var OverviewPage = defineComponent("OverviewPage", ["primaryColumn", "secondaryColumn"], true);
  var PageModule = defineComponent("PageModule", [], true);
  var PlatformConfigurationView = defineComponent("PlatformConfigurationView", [], true);
  var PropertyListItem = defineComponent("PropertyListItem", ["label", "value"], true);
  var PropertyList = defineComponent("PropertyList", [], true);
  var Radio = defineComponent("Radio", ["label"], true);
  var SearchField = defineComponent("SearchField", [], true);
  var Select = defineComponent("Select", ["label"], true);
  var SettingsView = defineComponent("SettingsView", [], true);
  var SignInView = defineComponent("SignInView", ["descriptionActionContents", "footerContent"], true);
  var Sparkline = defineComponent("Sparkline", [], true);
  var Spinner = defineComponent("Spinner", [], true);
  var StripeFileUploader = defineComponent("StripeFileUploader", [], true);
  var Switch = defineComponent("Switch", ["label"], true);
  var TabList = defineComponent("TabList", [], true);
  var TabPanel = defineComponent("TabPanel", [], true);
  var TabPanels = defineComponent("TabPanels", [], true);
  var Tab = defineComponent("Tab", [], true);
  var TableBody = defineComponent("TableBody", [], true);
  var TableCell = defineComponent("TableCell", [], true);
  var TableFooter = defineComponent("TableFooter", [], true);
  var TableHead = defineComponent("TableHead", [], true);
  var TableHeaderCell = defineComponent("TableHeaderCell", [], true);
  var Table = defineComponent("Table", [], true);
  var TableRow = defineComponent("TableRow", [], true);
  var Tabs = defineComponent("Tabs", [], true);
  var TaskListItem = defineComponent("TaskListItem", [], true);
  var TaskList = defineComponent("TaskList", [], true);
  var TextArea = defineComponent("TextArea", ["label"], true);
  var TextField = defineComponent("TextField", ["label"], true);
  var Tooltip = defineComponent("Tooltip", ["trigger"], true);

  // node_modules/@stripe/ui-extension-sdk/utils/_endpoint.js
  var import_invariant = __toESM(require_browser());
  var getHostEndpoint = () => {
    const hostEndpoint = globalThis.__StripeExtExports?.endpoint;
    (0, import_invariant.default)(hostEndpoint, "hostEndpoint has not been initialized");
    return hostEndpoint;
  };

  // node_modules/@stripe/ui-extension-sdk/utils/api/supportsFetchAppEmbeddedKey.js
  var supportsFetchAppEmbeddedKey = async () => getHostEndpoint().call.supportsFetchAppEmbeddedKey().then((supported) => supported).catch(() => false);

  // node_modules/@stripe/ui-extension-sdk/utils/api/fetchAppEmbeddedKey.js
  var fetchAppEmbeddedKey = async () => {
    const apiKey = await getHostEndpoint().call.fetchAppEmbeddedKey();
    if (!apiKey) {
      throw new Error("Unable to fetch app embedded key");
    }
    return apiKey;
  };

  // node_modules/@stripe/ui-extension-sdk/utils/api/fetchViaFrame.js
  var fetchViaFrame = async (url, options = {}) => {
    const apiKey = await fetchAppEmbeddedKey();
    const init = {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${apiKey}`
      }
    };
    const response = await fetch(url, init);
    const headers = {};
    response.headers.forEach((value, key) => {
      headers[key] = value;
    });
    const serializableResponse = {
      json: void 0,
      arrayBuffer: void 0,
      headers,
      ok: response.ok,
      redirected: response.redirected,
      status: response.status,
      statusText: response.statusText,
      type: response.type,
      url: response.url
    };
    switch (response.headers.get("Content-Type")) {
      case "application/json":
        serializableResponse.json = await response.json();
        break;
      default:
        serializableResponse.arrayBuffer = await response.arrayBuffer();
        break;
    }
    return serializableResponse;
  };

  // node_modules/@stripe/ui-extension-sdk/utils/api/fetchViaHost.js
  var fetchViaHost = async (encodedUrl, options = {}) => {
    const url = new URL(encodedUrl);
    return getHostEndpoint().call.stripeApiFetch(url.pathname + url.search, options);
  };

  // node_modules/@stripe/ui-extension-sdk/utils/api/selectPreferredStripeApiFetch.js
  var selectedStripeApiFetch = null;
  var selectPreferredStripeApiFetch = async () => {
    if (!selectedStripeApiFetch) {
      selectedStripeApiFetch = await supportsFetchAppEmbeddedKey() ? fetchViaFrame : fetchViaHost;
    }
    return selectedStripeApiFetch;
  };

  // node_modules/@stripe/ui-extension-sdk/utils/apiFetch.js
  var stripeApiFetch = async (path, options) => {
    const preferredFetchMethod = await selectPreferredStripeApiFetch();
    return preferredFetchMethod(path, options);
  };

  // node_modules/@stripe/ui-extension-sdk/utils/context.js
  var React = __toESM(__require("react"));

  // node_modules/@stripe/ui-extension-sdk/utils/httpClient.js
  var import_invariant2 = __toESM(require_browser());
  var matchesStripeKey = /[ps]k_(test|live)_[A-Za-z0-9]+/;
  var StripeAppsHttpResponse = class {
    constructor(resp) {
      this._resp = resp;
    }
    getHeaders() {
      return this._resp.headers;
    }
    getStatusCode() {
      return this._resp.status;
    }
    getRawResponse() {
      return this._resp;
    }
    toStream() {
      throw new Error("Streams have not been implemented in the Stripe HTTP client");
    }
    toJSON() {
      const { json } = this._resp;
      if (json === void 0) {
        return Promise.reject(new Error("Response body undefined"));
      } else {
        return Promise.resolve(json);
      }
    }
  };
  var StripeAppsHttpClient = class {
    constructor(fetch2) {
      this._fetch = fetch2;
    }
    getClientName() {
      return "stripe-ui-extension";
    }
    async makeRequest(host, port, path, method, headers, requestData, protocol, _timeout) {
      (0, import_invariant2.default)(protocol === "https", "Must use https connections in UI extensions");
      const fetchOptions = {
        method,
        headers
      };
      if (requestData) {
        fetchOptions.body = requestData;
      }
      const authHeader = headers.Authorization;
      if (authHeader && matchesStripeKey.test(authHeader)) {
        throw new Error("Do not use actual stripe keys when using the Stripe JS API client with UI extesions.\n\n Instead, use `STRIPE_API_KEY` from `@stripe/ui-extension-sdk/http_client` as a placeholder.");
      }
      const url = new URL(path, `${protocol}://${host}`);
      const resp = await this._fetch(url.toString(), fetchOptions);
      return new StripeAppsHttpResponse(resp);
    }
  };
  var STRIPE_API_KEY = "DO_NOT_PASS_A_REAL_API_KEY";
  var createHttpClient = () => new StripeAppsHttpClient(stripeApiFetch);
  var AUTHORIZATION_VALUE = `Bearer ${STRIPE_API_KEY}`;

  // node_modules/@stripe/ui-extension-sdk/utils/signature/createFetchStripeSignatureDirectly.js
  var createFetchStripeSignatureDirectly = ({ host, port }) => async (payload) => {
    const url = new URL(`https://${host}:${port}/v1/apps/app_embedded_backend_signature`);
    url.searchParams.set("payload", JSON.stringify({ ...payload }));
    url.searchParams.set("include_only[]", "signature");
    const client = createHttpClient();
    const response = client.makeRequest(host, port, url.pathname + url.search, "GET", {}, null, "https");
    return response.then((r) => r.toJSON()).then((data) => data.signature);
  };

  // node_modules/@stripe/ui-extension-sdk/utils/signature/connectionSettings.js
  var defaultConnectionSettings = {
    host: "api.stripe.com",
    port: 443
  };
  var connectionSettings = defaultConnectionSettings;

  // node_modules/@stripe/ui-extension-sdk/utils/signature.js
  var fetchStripeSignature = async (additionalPayload) => {
    if (await supportsFetchAppEmbeddedKey()) {
      const fetchStripeSignatureDirectly = createFetchStripeSignatureDirectly(connectionSettings);
      return fetchStripeSignatureDirectly(additionalPayload);
    } else {
      return getHostEndpoint().call.fetchStripeSignature(additionalPayload);
    }
  };

  // node_modules/@stripe/ui-extension-sdk/navigation/AppRouter.js
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  var import_react5 = __require("react");

  // node_modules/@stripe/ui-extension-sdk/navigation/internal/AppRouterContext.js
  var import_react2 = __require("react");
  var AppRouterContext = (0, import_react2.createContext)(null);

  // node_modules/@stripe/ui-extension-sdk/navigation/internal/useRoutesConfig.js
  var import_react4 = __require("react");

  // node_modules/@stripe/ui-extension-sdk/navigation/internal/RoutesConfigContext.js
  var import_react3 = __require("react");
  var RoutesConfigContext = (0, import_react3.createContext)(null);

  // node_modules/@stripe/ui-extension-sdk/navigation/NavigationProvider.js
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  var import_react6 = __require("react");

  // node_modules/@stripe/ui-extension-sdk/navigation/Redirect.js
  var import_react7 = __require("react");

  // node_modules/@stripe/ui-extension-sdk/navigation/internal/useAppRouterState.js
  var import_react8 = __require("react");

  // node_modules/@stripe/ui-extension-sdk/navigation/useNavigation.js
  var import_react9 = __require("react");

  // node_modules/@stripe/ui-extension-sdk/navigation/useAllSearchParams.js
  var import_react10 = __require("react");

  // node_modules/@stripe/ui-extension-sdk/navigation/useSearchParam.js
  var import_react11 = __require("react");

  // src/helpers/backend.ts
  var API_BASE = typeof window !== "undefined" && window.__FL_APP_API_BASE__ || "https://stripe-app.autoanaf.ro";
  async function signedRequest(path, userContext, body) {
    const signaturePayload = {
      account_id: userContext.account.id,
      user_id: userContext.account.id === userContext.id ? void 0 : userContext.id
    };
    const signature = await fetchStripeSignature();
    const payload = { ...signaturePayload, ...body ?? {} };
    const res = await fetch(`${API_BASE}${path}`, {
      method: body ? "POST" : "GET",
      headers: {
        "Content-Type": "application/json",
        "Stripe-Signature": signature
      },
      body: body ? JSON.stringify(payload) : void 0
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Request failed (${res.status})`);
    }
    return res.json();
  }

  // src/views/Setup.tsx
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  var Setup = ({ userContext }) => {
    const [state, setState] = (0, import_react12.useState)({ kind: "loading" });
    const [apiKey, setApiKey] = (0, import_react12.useState)("");
    const [anafCif, setAnafCif] = (0, import_react12.useState)("");
    const [anafClientId, setAnafClientId] = (0, import_react12.useState)("");
    const [anafClientSecret, setAnafClientSecret] = (0, import_react12.useState)("");
    const [saving, setSaving] = (0, import_react12.useState)(false);
    const [actionError, setActionError] = (0, import_react12.useState)("");
    const loadStatus = async () => {
      setState({ kind: "loading" });
      setActionError("");
      try {
        const status2 = await signedRequest("/api/status", userContext);
        const hasAnyConfig = status2.fiscalLinkConnected || status2.anafConfigured;
        setState(hasAnyConfig ? { kind: "connected", status: status2 } : { kind: "empty" });
      } catch (e) {
        setState({ kind: "error", message: e.message });
      }
    };
    (0, import_react12.useEffect)(() => {
      void loadStatus();
    }, []);
    const handleConnect = async () => {
      setSaving(true);
      setActionError("");
      try {
        await signedRequest("/api/connect", userContext, {
          apiKey,
          ...anafCif ? { anafCif } : {},
          ...anafClientId ? { anafClientId } : {},
          ...anafClientSecret ? { anafClientSecret } : {}
        });
        await loadStatus();
      } catch (e) {
        setActionError(e.message);
      } finally {
        setSaving(false);
      }
    };
    const handleEnableWebhook = async () => {
      setSaving(true);
      setActionError("");
      try {
        await signedRequest("/api/enable", userContext, {});
        await loadStatus();
      } catch (e) {
        setActionError(e.message);
      } finally {
        setSaving(false);
      }
    };
    const handleDisconnect = async () => {
      setSaving(true);
      setActionError("");
      try {
        await signedRequest("/api/disconnect", userContext, {});
        setApiKey("");
        setAnafCif("");
        setAnafClientId("");
        setAnafClientSecret("");
        setState({ kind: "empty" });
      } catch (e) {
        setActionError(e.message);
      } finally {
        setSaving(false);
      }
    };
    if (state.kind === "loading") {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
        css: { padding: "medium" },
        children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Spinner, {
          size: "small",
          children: "Loading status\u2026"
        })
      });
    }
    if (state.kind === "error") {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Box, {
        css: { padding: "medium" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Banner, {
            type: "critical",
            title: "Unable to load",
            children: state.message
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { marginTop: "small" },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
              onPress: () => void loadStatus(),
              children: "Retry"
            })
          })
        ]
      });
    }
    if (state.kind === "empty") {
      return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Box, {
        css: { padding: "medium" },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { fontWeight: "bold" },
            children: "Connect FiscalLink for ANAF"
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { marginTop: "small" },
            children: "Turn completed checkouts into Romanian ANAF e-invoices (EN 16931 / CIUS-RO UBL) automatically. Your credentials are stored in Stripe's Secret Store \u2014 never in your browser or on our servers."
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { marginTop: "medium" },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextField, {
              label: "FiscalLink API key",
              description: "From your FiscalLink dashboard \u2192 API keys (fl_\u2026)",
              value: apiKey,
              onChange: (e) => setApiKey(e.target.value),
              placeholder: "fl_\u2026",
              autoComplete: "off"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { marginTop: "small" },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextField, {
              label: "ANAF SPV CIF (company tax ID)",
              description: "The issuer CIF that has SPV access (e.g. RO12345678)",
              value: anafCif,
              onChange: (e) => setAnafCif(e.target.value),
              placeholder: "RO\u2026"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { marginTop: "small" },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextField, {
              label: "ANAF SPV OAuth client ID (optional)",
              value: anafClientId,
              onChange: (e) => setAnafClientId(e.target.value),
              autoComplete: "off"
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { marginTop: "small" },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TextField, {
              label: "ANAF SPV OAuth client secret (optional)",
              type: "password",
              value: anafClientSecret,
              onChange: (e) => setAnafClientSecret(e.target.value),
              autoComplete: "off"
            })
          }),
          actionError && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { marginTop: "small" },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Banner, {
              type: "critical",
              title: "Connection failed",
              children: actionError
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
            css: { marginTop: "medium" },
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
              type: "primary",
              onPress: () => void handleConnect(),
              disabled: saving || !apiKey.trim(),
              children: saving ? "Connecting\u2026" : "Connect"
            })
          })
        ]
      });
    }
    const { status } = state;
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Box, {
      css: { padding: "medium" },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { fontWeight: "bold" },
          children: "FiscalLink for ANAF \u2014 connected"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "small" },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Inline, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Dot, {
                ok: status.fiscalLinkConnected
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Box, {
                children: [
                  "FiscalLink API key: ",
                  status.fiscalLinkConnected ? "configured" : "missing"
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "xsmall" },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Inline, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Dot, {
                ok: status.anafConfigured
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Box, {
                children: [
                  "ANAF SPV credentials: ",
                  status.anafConfigured ? "configured" : "missing"
                ]
              })
            ]
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "xsmall" },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Inline, {
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Dot, {
                ok: status.webhookEnabled
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Box, {
                children: [
                  "Checkout webhook:",
                  " ",
                  status.webhookEnabled ? "enabled \u2014 invoices are generated automatically" : "not enabled"
                ]
              })
            ]
          })
        }),
        actionError && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "small" },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Banner, {
            type: "critical",
            title: "Action failed",
            children: actionError
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "medium" },
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(Inline, {
            children: [
              !status.webhookEnabled && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
                type: "primary",
                onPress: () => void handleEnableWebhook(),
                disabled: saving,
                children: saving ? "Enabling\u2026" : "Enable checkout webhook"
              }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
                onPress: () => void handleDisconnect(),
                disabled: saving,
                children: "Disconnect"
              })
            ]
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "medium" },
          children: "New invoices appear in your FiscalLink dashboard; ANAF submission and answer polling run there. Quota and metering follow your FiscalLink plan."
        })
      ]
    });
  };
  var Dot = ({ ok }) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
    css: { color: ok ? "success" : "critical", fontWeight: "bold" },
    children: "\u25CF"
  });
  var Setup_default = Setup;

  // .build/manifest.js
  var BUILD_TIME = "2026-08-30 11:34:17.941852568 +0000 UTC m=+4.763520947";
  var manifest_default = {
    "$schema": "https://stripe.com/stripe-app.schema.json",
    "allowed_redirect_uris": [
      "https://stripe-app.autoanaf.ro/oauth/callback"
    ],
    "constants": {
      "API_BASE": "https://stripe-app.autoanaf.ro"
    },
    "distribution_type": "public",
    "icon": "./icons/fiscallink_icon_32.png",
    "id": "com.fiscallink.anaf",
    "name": "FiscalLink for ANAF",
    "permissions": [
      {
        "permission": "webhook_write",
        "purpose": "Creates a webhook endpoint on the merchant's Stripe account so completed checkouts are forwarded to FiscalLink for Romanian ANAF e-invoicing."
      },
      {
        "permission": "checkout_session_read",
        "purpose": "Reads checkout session details (customer, line items, totals) to generate the EN 16931 / CIUS-RO UBL e-invoice."
      }
    ],
    "post_install_action": {
      "type": "external",
      "url": "https://stripe-app.autoanaf.ro/installed"
    },
    "sandbox_install_compatible": true,
    "stripe_api_access_type": "oauth",
    "ui_extension": {
      "content_security_policy": {
        "connect-src": [
          "https://stripe-app.autoanaf.ro/api/"
        ],
        "purpose": "The FiscalLink extension calls the FiscalLink Stripe App backend to save credentials, provision the webhook and report connection status."
      },
      "views": [
        {
          "component": "Setup",
          "viewport": "stripe.dashboard.drawer.default"
        }
      ]
    },
    "version": "0.1.0"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9TZXR1cC50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aS9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9fZW5kcG9pbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2ZldGNoQXBwRW1iZWRkZWRLZXkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvZmV0Y2hWaWFGcmFtZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2FwaS9mZXRjaFZpYUhvc3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGlGZXRjaC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2NvbnRleHQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9odHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvbmF2aWdhdGlvbi9BcHBSb3V0ZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL2ludGVybmFsL0FwcFJvdXRlckNvbnRleHQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL2ludGVybmFsL3VzZVJvdXRlc0NvbmZpZy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vaW50ZXJuYWwvUm91dGVzQ29uZmlnQ29udGV4dC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vTmF2aWdhdGlvblByb3ZpZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvbmF2aWdhdGlvbi9SZWRpcmVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vaW50ZXJuYWwvdXNlQXBwUm91dGVyU3RhdGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL3VzZU5hdmlnYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL3VzZUFsbFNlYXJjaFBhcmFtcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vdXNlU2VhcmNoUGFyYW0uanMiLCAiLi4vc3JjL2hlbHBlcnMvYmFja2VuZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5cbi8vIFZpZXcgY29tcG9uZW50IGltcG9ydHMgXHUyMDE0IG9uZSBwZXIgdmlld3BvcnQgZGVjbGFyZWQgaW4gdWlfZXh0ZW5zaW9uLnZpZXdzXG5pbXBvcnQgU2V0dXAgZnJvbSAnLi4vc3JjL3ZpZXdzL1NldHVwJztcblxuLy8gRXhwb3NlcyB0aGUgU0RLIHZlcnNpb24gc28gdGhlIERhc2hib2FyZCBjYW4gdmVyaWZ5IGNvbXBhdGliaWxpdHlcbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcblxuLy8gTmFtZWQgZXhwb3J0cyBtYWtlIGVhY2ggdmlldyBjb21wb25lbnQgYWNjZXNzaWJsZSB0byB0aGUgRGFzaGJvYXJkIHJ1bnRpbWVcblxuZXhwb3J0IHsgXG4gIFNldHVwXG4gfTtcblxuLy8gVGltZXN0YW1wIGNoYW5nZXMgb24gZXZlcnkgZXhwb3J0LCBlbnN1cmluZyB0aGUgZGV2IHNlcnZlciBkZXRlY3RzIGEgcmVidWlsZFxuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wOC0zMCAxMTozNDoxNy45NDE4NTI1NjggKzAwMDAgVVRDIG09KzQuNzYzNTIwOTQ3JztcblxuLy8gQXBwIG1hbmlmZXN0IFx1MjAxNCBjb25zdW1lZCBieSB0aGUgRGFzaGJvYXJkIHRvIGNvbmZpZ3VyZSB0aGUgYXBwXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vc3RyaXBlLmNvbS9zdHJpcGUtYXBwLnNjaGVtYS5qc29uXCIsXG4gIFwiYWxsb3dlZF9yZWRpcmVjdF91cmlzXCI6IFtcbiAgICBcImh0dHBzOi8vc3RyaXBlLWFwcC5hdXRvYW5hZi5yby9vYXV0aC9jYWxsYmFja1wiXG4gIF0sXG4gIFwiY29uc3RhbnRzXCI6IHtcbiAgICBcIkFQSV9CQVNFXCI6IFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvXCJcbiAgfSxcbiAgXCJkaXN0cmlidXRpb25fdHlwZVwiOiBcInB1YmxpY1wiLFxuICBcImljb25cIjogXCIuL2ljb25zL2Zpc2NhbGxpbmtfaWNvbl8zMi5wbmdcIixcbiAgXCJpZFwiOiBcImNvbS5maXNjYWxsaW5rLmFuYWZcIixcbiAgXCJuYW1lXCI6IFwiRmlzY2FsTGluayBmb3IgQU5BRlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJ3ZWJob29rX3dyaXRlXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJDcmVhdGVzIGEgd2ViaG9vayBlbmRwb2ludCBvbiB0aGUgbWVyY2hhbnQncyBTdHJpcGUgYWNjb3VudCBzbyBjb21wbGV0ZWQgY2hlY2tvdXRzIGFyZSBmb3J3YXJkZWQgdG8gRmlzY2FsTGluayBmb3IgUm9tYW5pYW4gQU5BRiBlLWludm9pY2luZy5cIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJwZXJtaXNzaW9uXCI6IFwiY2hlY2tvdXRfc2Vzc2lvbl9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWFkcyBjaGVja291dCBzZXNzaW9uIGRldGFpbHMgKGN1c3RvbWVyLCBsaW5lIGl0ZW1zLCB0b3RhbHMpIHRvIGdlbmVyYXRlIHRoZSBFTiAxNjkzMSAvIENJVVMtUk8gVUJMIGUtaW52b2ljZS5cIlxuICAgIH1cbiAgXSxcbiAgXCJwb3N0X2luc3RhbGxfYWN0aW9uXCI6IHtcbiAgICBcInR5cGVcIjogXCJleHRlcm5hbFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvL2luc3RhbGxlZFwiXG4gIH0sXG4gIFwic2FuZGJveF9pbnN0YWxsX2NvbXBhdGlibGVcIjogdHJ1ZSxcbiAgXCJzdHJpcGVfYXBpX2FjY2Vzc190eXBlXCI6IFwib2F1dGhcIixcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBbXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvL2FwaS9cIlxuICAgICAgXSxcbiAgICAgIFwicHVycG9zZVwiOiBcIlRoZSBGaXNjYWxMaW5rIGV4dGVuc2lvbiBjYWxscyB0aGUgRmlzY2FsTGluayBTdHJpcGUgQXBwIGJhY2tlbmQgdG8gc2F2ZSBjcmVkZW50aWFscywgcHJvdmlzaW9uIHRoZSB3ZWJob29rIGFuZCByZXBvcnQgY29ubmVjdGlvbiBzdGF0dXMuXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlNldHVwXCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmRyYXdlci5kZWZhdWx0XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjAuMS4wXCJcbn07XG4iLCAiLyoqXG4gKiBGaXNjYWxMaW5rIGZvciBBTkFGIFx1MjAxNCBkYXNoYm9hcmQgc2V0dGluZ3Mgdmlldy5cbiAqXG4gKiBTdGF0ZSBtYWNoaW5lIHJlcXVpcmVkIGJ5IHRoZSBhcHAgc3BlYzpcbiAqICAgbG9hZGluZyAgIFx1MjE5MiBzcGlubmVyIHdoaWxlIGZldGNoaW5nIC9hcGkvc3RhdHVzXG4gKiAgIGVycm9yICAgICBcdTIxOTIgQmFubmVyIHdpdGggbWVzc2FnZSArIFJldHJ5IGJ1dHRvblxuICogICBlbXB0eSAgICAgXHUyMTkyIGNvbm5lY3Rpb24gZm9ybSAoRmlzY2FsTGluayBBUEkga2V5ICsgb3B0aW9uYWwgQU5BRiBTUFYgY3JlZGVudGlhbHMpXG4gKiAgIGNvbm5lY3RlZCBcdTIxOTIgc3RhdHVzIHN1bW1hcnkgKyBcIkVuYWJsZSB3ZWJob29rXCIgKyBEaXNjb25uZWN0XG4gKi9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCYW5uZXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbmxpbmUsXG4gIFNwaW5uZXIsXG4gIFRleHRGaWVsZCxcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuaW1wb3J0IHsgc2lnbmVkUmVxdWVzdCB9IGZyb20gJy4uL2hlbHBlcnMvYmFja2VuZCc7XG5cbmludGVyZmFjZSBTdGF0dXMge1xuICBpbnN0YWxsZWQ6IGJvb2xlYW47XG4gIGZpc2NhbExpbmtDb25uZWN0ZWQ6IGJvb2xlYW47XG4gIGFuYWZDb25maWd1cmVkOiBib29sZWFuO1xuICB3ZWJob29rRW5hYmxlZDogYm9vbGVhbjtcbn1cblxudHlwZSBWaWV3U3RhdGUgPVxuICB8IHsga2luZDogJ2xvYWRpbmcnIH1cbiAgfCB7IGtpbmQ6ICdlcnJvcic7IG1lc3NhZ2U6IHN0cmluZyB9XG4gIHwgeyBraW5kOiAnZW1wdHknIH1cbiAgfCB7IGtpbmQ6ICdjb25uZWN0ZWQnOyBzdGF0dXM6IFN0YXR1cyB9O1xuXG5leHBvcnQgY29uc3QgU2V0dXAgPSAoeyB1c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KHsga2luZDogJ2xvYWRpbmcnIH0pO1xuICBjb25zdCBbYXBpS2V5LCBzZXRBcGlLZXldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYW5hZkNpZiwgc2V0QW5hZkNpZl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthbmFmQ2xpZW50SWQsIHNldEFuYWZDbGllbnRJZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthbmFmQ2xpZW50U2VjcmV0LCBzZXRBbmFmQ2xpZW50U2VjcmV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGlvbkVycm9yLCBzZXRBY3Rpb25FcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgbG9hZFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTdGF0ZSh7IGtpbmQ6ICdsb2FkaW5nJyB9KTtcbiAgICBzZXRBY3Rpb25FcnJvcignJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHNpZ25lZFJlcXVlc3Q8U3RhdHVzPignL2FwaS9zdGF0dXMnLCB1c2VyQ29udGV4dCk7XG4gICAgICBjb25zdCBoYXNBbnlDb25maWcgPSBzdGF0dXMuZmlzY2FsTGlua0Nvbm5lY3RlZCB8fCBzdGF0dXMuYW5hZkNvbmZpZ3VyZWQ7XG4gICAgICBzZXRTdGF0ZShoYXNBbnlDb25maWcgPyB7IGtpbmQ6ICdjb25uZWN0ZWQnLCBzdGF0dXMgfSA6IHsga2luZDogJ2VtcHR5JyB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRTdGF0ZSh7IGtpbmQ6ICdlcnJvcicsIG1lc3NhZ2U6IChlIGFzIEVycm9yKS5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZvaWQgbG9hZFN0YXR1cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgc2V0QWN0aW9uRXJyb3IoJycpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzaWduZWRSZXF1ZXN0KCcvYXBpL2Nvbm5lY3QnLCB1c2VyQ29udGV4dCwge1xuICAgICAgICBhcGlLZXksXG4gICAgICAgIC4uLihhbmFmQ2lmID8geyBhbmFmQ2lmIH0gOiB7fSksXG4gICAgICAgIC4uLihhbmFmQ2xpZW50SWQgPyB7IGFuYWZDbGllbnRJZCB9IDoge30pLFxuICAgICAgICAuLi4oYW5hZkNsaWVudFNlY3JldCA/IHsgYW5hZkNsaWVudFNlY3JldCB9IDoge30pLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBsb2FkU3RhdHVzKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0QWN0aW9uRXJyb3IoKGUgYXMgRXJyb3IpLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVFbmFibGVXZWJob29rID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFNhdmluZyh0cnVlKTtcbiAgICBzZXRBY3Rpb25FcnJvcignJyk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNpZ25lZFJlcXVlc3QoJy9hcGkvZW5hYmxlJywgdXNlckNvbnRleHQsIHt9KTtcbiAgICAgIGF3YWl0IGxvYWRTdGF0dXMoKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRBY3Rpb25FcnJvcigoZSBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZURpc2Nvbm5lY3QgPSBhc3luYyAoKSA9PiB7XG4gICAgc2V0U2F2aW5nKHRydWUpO1xuICAgIHNldEFjdGlvbkVycm9yKCcnKTtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc2lnbmVkUmVxdWVzdCgnL2FwaS9kaXNjb25uZWN0JywgdXNlckNvbnRleHQsIHt9KTtcbiAgICAgIHNldEFwaUtleSgnJyk7XG4gICAgICBzZXRBbmFmQ2lmKCcnKTtcbiAgICAgIHNldEFuYWZDbGllbnRJZCgnJyk7XG4gICAgICBzZXRBbmFmQ2xpZW50U2VjcmV0KCcnKTtcbiAgICAgIHNldFN0YXRlKHsga2luZDogJ2VtcHR5JyB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRBY3Rpb25FcnJvcigoZSBhcyBFcnJvcikubWVzc2FnZSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldFNhdmluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIGlmIChzdGF0ZS5raW5kID09PSAnbG9hZGluZycpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScgfX0+XG4gICAgICAgIDxTcGlubmVyIHNpemU9XCJzbWFsbFwiPkxvYWRpbmcgc3RhdHVzXHUyMDI2PC9TcGlubmVyPlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChzdGF0ZS5raW5kID09PSAnZXJyb3InKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nIH19PlxuICAgICAgICA8QmFubmVyIHR5cGU9XCJjcml0aWNhbFwiIHRpdGxlPVwiVW5hYmxlIHRvIGxvYWRcIj5cbiAgICAgICAgICB7c3RhdGUubWVzc2FnZX1cbiAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9eygpID0+IHZvaWQgbG9hZFN0YXR1cygpfT5SZXRyeTwvQnV0dG9uPlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cblxuICBpZiAoc3RhdGUua2luZCA9PT0gJ2VtcHR5Jykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkNvbm5lY3QgRmlzY2FsTGluayBmb3IgQU5BRjwvQm94PlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgVHVybiBjb21wbGV0ZWQgY2hlY2tvdXRzIGludG8gUm9tYW5pYW4gQU5BRiBlLWludm9pY2VzIChFTiAxNjkzMSAvIENJVVMtUk8gVUJMKVxuICAgICAgICAgIGF1dG9tYXRpY2FsbHkuIFlvdXIgY3JlZGVudGlhbHMgYXJlIHN0b3JlZCBpbiBTdHJpcGUmYXBvcztzIFNlY3JldCBTdG9yZSBcdTIwMTQgbmV2ZXIgaW5cbiAgICAgICAgICB5b3VyIGJyb3dzZXIgb3Igb24gb3VyIHNlcnZlcnMuXG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJGaXNjYWxMaW5rIEFQSSBrZXlcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJGcm9tIHlvdXIgRmlzY2FsTGluayBkYXNoYm9hcmQgXHUyMTkyIEFQSSBrZXlzIChmbF9cdTIwMjYpXCJcbiAgICAgICAgICAgIHZhbHVlPXthcGlLZXl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFwaUtleShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cImZsX1x1MjAyNlwiXG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJBTkFGIFNQViBDSUYgKGNvbXBhbnkgdGF4IElEKVwiXG4gICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlRoZSBpc3N1ZXIgQ0lGIHRoYXQgaGFzIFNQViBhY2Nlc3MgKGUuZy4gUk8xMjM0NTY3OClcIlxuICAgICAgICAgICAgdmFsdWU9e2FuYWZDaWZ9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuYWZDaWYoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJST1x1MjAyNlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ3NtYWxsJyB9fT5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBsYWJlbD1cIkFOQUYgU1BWIE9BdXRoIGNsaWVudCBJRCAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgIHZhbHVlPXthbmFmQ2xpZW50SWR9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldEFuYWZDbGllbnRJZChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJBTkFGIFNQViBPQXV0aCBjbGllbnQgc2VjcmV0IChvcHRpb25hbClcIlxuICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXthbmFmQ2xpZW50U2VjcmV0fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmFmQ2xpZW50U2VjcmV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Cb3g+XG5cbiAgICAgICAge2FjdGlvbkVycm9yICYmIChcbiAgICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgICA8QmFubmVyIHR5cGU9XCJjcml0aWNhbFwiIHRpdGxlPVwiQ29ubmVjdGlvbiBmYWlsZWRcIj5cbiAgICAgICAgICAgICAge2FjdGlvbkVycm9yfVxuICAgICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgICAgPC9Cb3g+XG4gICAgICAgICl9XG5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBvblByZXNzPXsoKSA9PiB2b2lkIGhhbmRsZUNvbm5lY3QoKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtzYXZpbmcgfHwgIWFwaUtleS50cmltKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3NhdmluZyA/ICdDb25uZWN0aW5nXHUyMDI2JyA6ICdDb25uZWN0J31cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgLy8gXHUyNTAwXHUyNTAwIGNvbm5lY3RlZCBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgY29uc3QgeyBzdGF0dXMgfSA9IHN0YXRlO1xuICByZXR1cm4gKFxuICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nIH19PlxuICAgICAgPEJveCBjc3M9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PkZpc2NhbExpbmsgZm9yIEFOQUYgXHUyMDE0IGNvbm5lY3RlZDwvQm94PlxuXG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgIDxJbmxpbmU+XG4gICAgICAgICAgPERvdCBvaz17c3RhdHVzLmZpc2NhbExpbmtDb25uZWN0ZWR9IC8+XG4gICAgICAgICAgPEJveD5GaXNjYWxMaW5rIEFQSSBrZXk6IHtzdGF0dXMuZmlzY2FsTGlua0Nvbm5lY3RlZCA/ICdjb25maWd1cmVkJyA6ICdtaXNzaW5nJ308L0JveD5cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ3hzbWFsbCcgfX0+XG4gICAgICAgIDxJbmxpbmU+XG4gICAgICAgICAgPERvdCBvaz17c3RhdHVzLmFuYWZDb25maWd1cmVkfSAvPlxuICAgICAgICAgIDxCb3g+QU5BRiBTUFYgY3JlZGVudGlhbHM6IHtzdGF0dXMuYW5hZkNvbmZpZ3VyZWQgPyAnY29uZmlndXJlZCcgOiAnbWlzc2luZyd9PC9Cb3g+XG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICA8SW5saW5lPlxuICAgICAgICAgIDxEb3Qgb2s9e3N0YXR1cy53ZWJob29rRW5hYmxlZH0gLz5cbiAgICAgICAgICA8Qm94PlxuICAgICAgICAgICAgQ2hlY2tvdXQgd2ViaG9vazp7JyAnfVxuICAgICAgICAgICAge3N0YXR1cy53ZWJob29rRW5hYmxlZFxuICAgICAgICAgICAgICA/ICdlbmFibGVkIFx1MjAxNCBpbnZvaWNlcyBhcmUgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHknXG4gICAgICAgICAgICAgIDogJ25vdCBlbmFibGVkJ31cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cblxuICAgICAge2FjdGlvbkVycm9yICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxCYW5uZXIgdHlwZT1cImNyaXRpY2FsXCIgdGl0bGU9XCJBY3Rpb24gZmFpbGVkXCI+XG4gICAgICAgICAgICB7YWN0aW9uRXJyb3J9XG4gICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPElubGluZT5cbiAgICAgICAgICB7IXN0YXR1cy53ZWJob29rRW5hYmxlZCAmJiAoXG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gdm9pZCBoYW5kbGVFbmFibGVXZWJob29rKCl9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXtzYXZpbmd9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIHtzYXZpbmcgPyAnRW5hYmxpbmdcdTIwMjYnIDogJ0VuYWJsZSBjaGVja291dCB3ZWJob29rJ31cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEJ1dHRvbiBvblByZXNzPXsoKSA9PiB2b2lkIGhhbmRsZURpc2Nvbm5lY3QoKX0gZGlzYWJsZWQ9e3NhdmluZ30+XG4gICAgICAgICAgICBEaXNjb25uZWN0XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG5cbiAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+XG4gICAgICAgIE5ldyBpbnZvaWNlcyBhcHBlYXIgaW4geW91ciBGaXNjYWxMaW5rIGRhc2hib2FyZDsgQU5BRiBzdWJtaXNzaW9uIGFuZCBhbnN3ZXIgcG9sbGluZ1xuICAgICAgICBydW4gdGhlcmUuIFF1b3RhIGFuZCBtZXRlcmluZyBmb2xsb3cgeW91ciBGaXNjYWxMaW5rIHBsYW4uXG4gICAgICA8L0JveD5cbiAgICA8L0JveD5cbiAgKTtcbn07XG5cbmNvbnN0IERvdCA9ICh7IG9rIH06IHsgb2s6IGJvb2xlYW4gfSkgPT4gKFxuICA8Qm94IGNzcz17eyBjb2xvcjogb2sgPyAnc3VjY2VzcycgOiAnY3JpdGljYWwnLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XHUyNUNGPC9Cb3g+XG4pO1xuXG4vLyBTdHJpcGUgQXBwcyBDTEkgaW1wb3J0cyB2aWV3IGNvbXBvbmVudHMgYXMgZGVmYXVsdCBleHBvcnRzLlxuZXhwb3J0IGRlZmF1bHQgU2V0dXA7XG4iLCAiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50IH0gZnJvbSAnQHJlbW90ZS11aS9yZWFjdCc7XG5pbXBvcnQgeyBTREtfVkVSU0lPTiB9IGZyb20gJy4uL3ZlcnNpb24nO1xuY29uc3Qgd2l0aFNka1Byb3BzID0gKENvbXBvbmVudCkgPT4ge1xuICAgIGNvbnN0IHdyYXBwZWRDb21wb25lbnROYW1lID0gQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvbmVudC50b1N0cmluZygpO1xuICAgIGNvbnN0IFdpdGhTZGtQcm9wcyA9IChwcm9wcykgPT4gKF9qc3goQ29tcG9uZW50LCB7IC4uLnByb3BzLCB3cmFwcGVkQ29tcG9uZW50TmFtZTogd3JhcHBlZENvbXBvbmVudE5hbWUsIHNka1ZlcnNpb246IFNES19WRVJTSU9OLCBzY2hlbWFWZXJzaW9uOiBcInY5XCIgfSkpO1xuICAgIFdpdGhTZGtQcm9wcy53cmFwcGVkQ29tcG9uZW50TmFtZSA9IHdyYXBwZWRDb21wb25lbnROYW1lO1xuICAgIHJldHVybiBXaXRoU2RrUHJvcHM7XG59O1xuY29uc3QgZGVmaW5lQ29tcG9uZW50ID0gKG5hbWUsIGZyYWdtZW50UHJvcHMsIHdyYXBXaXRoU2RrUHJvcHMpID0+IHtcbiAgICBjb25zdCByZW1vdGVDb21wb25lbnQgPSBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudChuYW1lLCB7XG4gICAgICAgIGZyYWdtZW50UHJvcHMsXG4gICAgfSk7XG4gICAgaWYgKCF3cmFwV2l0aFNka1Byb3BzKSB7XG4gICAgICAgIHJldHVybiByZW1vdGVDb21wb25lbnQ7XG4gICAgfVxuICAgIHJldHVybiB3aXRoU2RrUHJvcHMocmVtb3RlQ29tcG9uZW50KTtcbn07XG5leHBvcnQgY29uc3QgQWNjb3JkaW9uSXRlbSA9IGRlZmluZUNvbXBvbmVudCgnQWNjb3JkaW9uSXRlbScsIFsndGl0bGUnLCAnYWN0aW9ucycsICdtZWRpYScsICdzdWJ0aXRsZSddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBBY2NvcmRpb24gPSBkZWZpbmVDb21wb25lbnQoJ0FjY29yZGlvbicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBCYWRnZSA9IGRlZmluZUNvbXBvbmVudCgnQmFkZ2UnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQmFubmVyID0gZGVmaW5lQ29tcG9uZW50KCdCYW5uZXInLCBbJ2FjdGlvbnMnLCAnZGVzY3JpcHRpb24nLCAndGl0bGUnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQmFyQ2hhcnQgPSBkZWZpbmVDb21wb25lbnQoJ0JhckNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEJveCA9IGRlZmluZUNvbXBvbmVudCgnQm94JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbkdyb3VwID0gZGVmaW5lQ29tcG9uZW50KCdCdXR0b25Hcm91cCcsIFsnbWVudVRyaWdnZXInXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQnV0dG9uID0gZGVmaW5lQ29tcG9uZW50KCdCdXR0b24nLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQ2hlY2tib3ggPSBkZWZpbmVDb21wb25lbnQoJ0NoZWNrYm94JywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBDaGlwTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnQ2hpcExpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQ2hpcCA9IGRlZmluZUNvbXBvbmVudCgnQ2hpcCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBDb250ZXh0VmlldyA9IGRlZmluZUNvbXBvbmVudCgnQ29udGV4dFZpZXcnLCBbJ2FjdGlvbnMnLCAnYmFubmVyJywgJ2Zvb3RlckNvbnRlbnQnLCAncHJpbWFyeUFjdGlvbicsICdzZWNvbmRhcnlBY3Rpb24nXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQ3VycmVuY3lGaWVsZCA9IGRlZmluZUNvbXBvbmVudCgnQ3VycmVuY3lGaWVsZCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRGF0YVRhYmxlID0gZGVmaW5lQ29tcG9uZW50KCdEYXRhVGFibGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRGF0ZUZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdEYXRlRmllbGQnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IERhdGVSYW5nZVBpY2tlciA9IGRlZmluZUNvbXBvbmVudCgnRGF0ZVJhbmdlUGlja2VyJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IERldGFpbFBhZ2VQcm9wZXJ0eUxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VQcm9wZXJ0eUxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRGV0YWlsUGFnZSA9IGRlZmluZUNvbXBvbmVudCgnRGV0YWlsUGFnZScsIFsncHJpbWFyeUNvbHVtbicsICdzZWNvbmRhcnlDb2x1bW4nXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRGV0YWlsUGFnZVRhYmxlID0gZGVmaW5lQ29tcG9uZW50KCdEZXRhaWxQYWdlVGFibGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRGl2aWRlciA9IGRlZmluZUNvbXBvbmVudCgnRGl2aWRlcicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBGb2N1c1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0ZvY3VzVmlldycsIFsnZm9vdGVyQ29udGVudCcsICdwcmltYXJ5QWN0aW9uJywgJ3NlY29uZGFyeUFjdGlvbiddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBGb3JtRmllbGRHcm91cCA9IGRlZmluZUNvbXBvbmVudCgnRm9ybUZpZWxkR3JvdXAnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRnVsbFBhZ2VWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdGdWxsUGFnZVZpZXcnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgSWNvbiA9IGRlZmluZUNvbXBvbmVudCgnSWNvbicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBJbWcgPSBkZWZpbmVDb21wb25lbnQoJ0ltZycsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBJbmxpbmUgPSBkZWZpbmVDb21wb25lbnQoJ0lubGluZScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBMaW5lQ2hhcnQgPSBkZWZpbmVDb21wb25lbnQoJ0xpbmVDaGFydCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBMaW5rID0gZGVmaW5lQ29tcG9uZW50KCdMaW5rJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IExpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdMaXN0SXRlbScsIFsnaWNvbicsICdpbWFnZScsICdzZWNvbmRhcnlUaXRsZScsICd0aXRsZScsICd2YWx1ZSddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IE1lbnVHcm91cCA9IGRlZmluZUNvbXBvbmVudCgnTWVudUdyb3VwJywgWyd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBNZW51SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnTWVudUl0ZW0nLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgTWVudSA9IGRlZmluZUNvbXBvbmVudCgnTWVudScsIFsndHJpZ2dlciddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBPbmJvYXJkaW5nVmlldyA9IGRlZmluZUNvbXBvbmVudCgnT25ib2FyZGluZ1ZpZXcnLCBbJ2Vycm9yJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IE92ZXJ2aWV3UGFnZSA9IGRlZmluZUNvbXBvbmVudCgnT3ZlcnZpZXdQYWdlJywgWydwcmltYXJ5Q29sdW1uJywgJ3NlY29uZGFyeUNvbHVtbiddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBQYWdlTW9kdWxlID0gZGVmaW5lQ29tcG9uZW50KCdQYWdlTW9kdWxlJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFBsYXRmb3JtQ29uZmlndXJhdGlvblZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ1BsYXRmb3JtQ29uZmlndXJhdGlvblZpZXcnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgUHJvcGVydHlMaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnUHJvcGVydHlMaXN0SXRlbScsIFsnbGFiZWwnLCAndmFsdWUnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgUHJvcGVydHlMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdQcm9wZXJ0eUxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgUmFkaW8gPSBkZWZpbmVDb21wb25lbnQoJ1JhZGlvJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBTZWFyY2hGaWVsZCA9IGRlZmluZUNvbXBvbmVudCgnU2VhcmNoRmllbGQnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgU2VsZWN0ID0gZGVmaW5lQ29tcG9uZW50KCdTZWxlY3QnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFNldHRpbmdzVmlldyA9IGRlZmluZUNvbXBvbmVudCgnU2V0dGluZ3NWaWV3JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFNpZ25JblZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ1NpZ25JblZpZXcnLCBbJ2Rlc2NyaXB0aW9uQWN0aW9uQ29udGVudHMnLCAnZm9vdGVyQ29udGVudCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBTcGFya2xpbmUgPSBkZWZpbmVDb21wb25lbnQoJ1NwYXJrbGluZScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBTcGlubmVyID0gZGVmaW5lQ29tcG9uZW50KCdTcGlubmVyJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFN0cmlwZUZpbGVVcGxvYWRlciA9IGRlZmluZUNvbXBvbmVudCgnU3RyaXBlRmlsZVVwbG9hZGVyJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFN3aXRjaCA9IGRlZmluZUNvbXBvbmVudCgnU3dpdGNoJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYlBhbmVsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJQYW5lbCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJQYW5lbHMgPSBkZWZpbmVDb21wb25lbnQoJ1RhYlBhbmVscycsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWIgPSBkZWZpbmVDb21wb25lbnQoJ1RhYicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJsZUJvZHkgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlQm9keScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJsZUNlbGwgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlQ2VsbCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJsZUZvb3RlciA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVGb290ZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFibGVIZWFkID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUhlYWQnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFibGVIZWFkZXJDZWxsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUhlYWRlckNlbGwnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFibGUgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYmxlUm93ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZVJvdycsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJzID0gZGVmaW5lQ29tcG9uZW50KCdUYWJzJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhc2tMaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnVGFza0xpc3RJdGVtJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhc2tMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdUYXNrTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUZXh0QXJlYSA9IGRlZmluZUNvbXBvbmVudCgnVGV4dEFyZWEnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRleHRGaWVsZCA9IGRlZmluZUNvbXBvbmVudCgnVGV4dEZpZWxkJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUb29sdGlwID0gZGVmaW5lQ29tcG9uZW50KCdUb29sdGlwJywgWyd0cmlnZ2VyJ10sIHRydWUpO1xuIiwgImV4cG9ydCBjb25zdCBTREtfVkVSU0lPTiA9ICc5LjMuMCc7XG4iLCAiaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGdldEhvc3RFbmRwb2ludCA9ICgpID0+IHtcbiAgICAvLyBUaGlzIGlzIGVuZHBvaW50IGlzIGNyZWF0ZWQgZnJvbSB0aGUgTWVzc2FnZVBvcnQgdHJhbnNmZXJyZWQgZnJvbSB0aGUgaG9zdCBlbnZcbiAgICAvLyBhcyBhIHBhcnQgb2YgdGhlIGBpbml0X2V4dGVuc2lvbmAgbWVzc2FnZS5cbiAgICBjb25zdCBob3N0RW5kcG9pbnQgPSBnbG9iYWxUaGlzLl9fU3RyaXBlRXh0RXhwb3J0cz8uZW5kcG9pbnQ7XG4gICAgaW52YXJpYW50KGhvc3RFbmRwb2ludCwgJ2hvc3RFbmRwb2ludCBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWQnKTtcbiAgICByZXR1cm4gaG9zdEVuZHBvaW50O1xufTtcbiIsICJpbXBvcnQgeyBnZXRIb3N0RW5kcG9pbnQgfSBmcm9tICcuLi9fZW5kcG9pbnQnO1xuZXhwb3J0IGNvbnN0IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSA9IGFzeW5jICgpID0+IGdldEhvc3RFbmRwb2ludCgpXG4gICAgLmNhbGwuc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KClcbiAgICAudGhlbigoc3VwcG9ydGVkKSA9PiBzdXBwb3J0ZWQpXG4gICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcbiIsICJpbXBvcnQgeyBnZXRIb3N0RW5kcG9pbnQgfSBmcm9tICcuLi9fZW5kcG9pbnQnO1xuZXhwb3J0IGNvbnN0IGZldGNoQXBwRW1iZWRkZWRLZXkgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gYXdhaXQgZ2V0SG9zdEVuZHBvaW50KCkuY2FsbC5mZXRjaEFwcEVtYmVkZGVkS2V5KCk7XG4gICAgaWYgKCFhcGlLZXkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmFibGUgdG8gZmV0Y2ggYXBwIGVtYmVkZGVkIGtleScpO1xuICAgIH1cbiAgICByZXR1cm4gYXBpS2V5O1xufTtcbiIsICJpbXBvcnQgeyBmZXRjaEFwcEVtYmVkZGVkS2V5IH0gZnJvbSAnLi9mZXRjaEFwcEVtYmVkZGVkS2V5JztcbmV4cG9ydCBjb25zdCBmZXRjaFZpYUZyYW1lID0gYXN5bmMgKHVybCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgYXBpS2V5ID0gYXdhaXQgZmV0Y2hBcHBFbWJlZGRlZEtleSgpO1xuICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIC4uLm9wdGlvbnMuaGVhZGVycyxcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthcGlLZXl9YCxcbiAgICAgICAgfSxcbiAgICB9O1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICBjb25zdCBoZWFkZXJzID0ge307XG4gICAgcmVzcG9uc2UuaGVhZGVycy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgICAgIGhlYWRlcnNba2V5XSA9IHZhbHVlO1xuICAgIH0pO1xuICAgIGNvbnN0IHNlcmlhbGl6YWJsZVJlc3BvbnNlID0ge1xuICAgICAgICBqc29uOiB1bmRlZmluZWQsXG4gICAgICAgIGFycmF5QnVmZmVyOiB1bmRlZmluZWQsXG4gICAgICAgIGhlYWRlcnMsXG4gICAgICAgIG9rOiByZXNwb25zZS5vayxcbiAgICAgICAgcmVkaXJlY3RlZDogcmVzcG9uc2UucmVkaXJlY3RlZCxcbiAgICAgICAgc3RhdHVzOiByZXNwb25zZS5zdGF0dXMsXG4gICAgICAgIHN0YXR1c1RleHQ6IHJlc3BvbnNlLnN0YXR1c1RleHQsXG4gICAgICAgIHR5cGU6IHJlc3BvbnNlLnR5cGUsXG4gICAgICAgIHVybDogcmVzcG9uc2UudXJsLFxuICAgIH07XG4gICAgc3dpdGNoIChyZXNwb25zZS5oZWFkZXJzLmdldCgnQ29udGVudC1UeXBlJykpIHtcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XG4gICAgICAgICAgICBzZXJpYWxpemFibGVSZXNwb25zZS5qc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBzZXJpYWxpemFibGVSZXNwb25zZS5hcnJheUJ1ZmZlciA9IGF3YWl0IHJlc3BvbnNlLmFycmF5QnVmZmVyKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIHNlcmlhbGl6YWJsZVJlc3BvbnNlO1xufTtcbiIsICJpbXBvcnQgeyBnZXRIb3N0RW5kcG9pbnQgfSBmcm9tICcuLi9fZW5kcG9pbnQnO1xuZXhwb3J0IGNvbnN0IGZldGNoVmlhSG9zdCA9IGFzeW5jIChlbmNvZGVkVXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGVuY29kZWRVcmwpO1xuICAgIHJldHVybiBnZXRIb3N0RW5kcG9pbnQoKS5jYWxsLnN0cmlwZUFwaUZldGNoKHVybC5wYXRobmFtZSArIHVybC5zZWFyY2gsIG9wdGlvbnMpO1xufTtcbiIsICJpbXBvcnQgeyBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgfSBmcm9tICcuL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSc7XG5pbXBvcnQgeyBmZXRjaFZpYUZyYW1lIH0gZnJvbSAnLi9mZXRjaFZpYUZyYW1lJztcbmltcG9ydCB7IGZldGNoVmlhSG9zdCB9IGZyb20gJy4vZmV0Y2hWaWFIb3N0JztcbmxldCBzZWxlY3RlZFN0cmlwZUFwaUZldGNoID0gbnVsbDtcbmV4cG9ydCBjb25zdCBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCA9IGFzeW5jICgpID0+IHtcbiAgICBpZiAoIXNlbGVjdGVkU3RyaXBlQXBpRmV0Y2gpIHtcbiAgICAgICAgc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCA9IChhd2FpdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkoKSlcbiAgICAgICAgICAgID8gZmV0Y2hWaWFGcmFtZVxuICAgICAgICAgICAgOiBmZXRjaFZpYUhvc3Q7XG4gICAgfVxuICAgIHJldHVybiBzZWxlY3RlZFN0cmlwZUFwaUZldGNoO1xufTtcbiIsICJpbXBvcnQgeyBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCB9IGZyb20gJy4vYXBpJztcbi8qKlxuICogTWFrZXMgYW4gYXV0aGVudGljYXRlZCBBUEkgcmVxdWVzdCB0byB0aGUgU3RyaXBlIEFQSSB0aHJvdWdoIHRoZSBEYXNoYm9hcmQgc2Vzc2lvbi5cbiAqIEF1dG9tYXRpY2FsbHkgc2VsZWN0cyB0aGUgYmVzdCBhdmFpbGFibGUgdHJhbnNwb3J0IG1lY2hhbmlzbS5cbiAqXG4gKiBAcGFyYW0gcGF0aCAtIFRoZSBBUEkgcGF0aCBvciBmdWxsIFVSTCB0byByZXF1ZXN0LlxuICogQHBhcmFtIG9wdGlvbnMgLSBPcHRpb25hbCByZXF1ZXN0IGNvbmZpZ3VyYXRpb24uXG4gKiBAcmV0dXJucyBBIHByb21pc2UgcmVzb2x2aW5nIHRvIHRoZSBzZXJpYWxpemVkIHJlc3BvbnNlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3Qgc3RyaXBlQXBpRmV0Y2ggPSBhc3luYyAocGF0aCwgb3B0aW9ucykgPT4ge1xuICAgIGNvbnN0IHByZWZlcnJlZEZldGNoTWV0aG9kID0gYXdhaXQgc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2goKTtcbiAgICByZXR1cm4gcHJlZmVycmVkRmV0Y2hNZXRob2QocGF0aCwgb3B0aW9ucyk7XG59O1xuIiwgImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEhvc3RFbmRwb2ludCB9IGZyb20gJy4vX2VuZHBvaW50Jztcbi8qKlxuICogQSBSZWFjdCBob29rIHRoYXQgcmV0dXJucyBhIGNhbGxiYWNrIHRvIHJlZnJlc2ggdGhlIERhc2hib2FyZCBkYXRhIHN1cnJvdW5kaW5nIHRoZSBleHRlbnNpb24uXG4gKlxuICogQHJldHVybnMgQSBzdGFibGUgY2FsbGJhY2sgZnVuY3Rpb24gdGhhdCB0cmlnZ2VycyBhIERhc2hib2FyZCBkYXRhIHJlZnJlc2ggd2hlbiBpbnZva2VkLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgdXNlUmVmcmVzaERhc2hib2FyZERhdGEgPSAoKSA9PiB7XG4gICAgcmV0dXJuIFJlYWN0LnVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICAgICAgcmV0dXJuIGdldEhvc3RFbmRwb2ludCgpLmNhbGwucmVmcmVzaERhc2hib2FyZERhdGEoKTtcbiAgICB9LCBbXSk7XG59O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIG1heC1jbGFzc2VzLXBlci1maWxlICovXG5pbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG5pbXBvcnQgeyBzdHJpcGVBcGlGZXRjaCB9IGZyb20gJy4vYXBpRmV0Y2gnO1xuY29uc3QgbWF0Y2hlc1N0cmlwZUtleSA9IC9bcHNda18odGVzdHxsaXZlKV9bQS1aYS16MC05XSsvO1xuLyoqIEBpbnRlcm5hbCAqL1xuY2xhc3MgU3RyaXBlQXBwc0h0dHBSZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IocmVzcCkge1xuICAgICAgICB0aGlzLl9yZXNwID0gcmVzcDtcbiAgICB9XG4gICAgZ2V0SGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3AuaGVhZGVycztcbiAgICB9XG4gICAgZ2V0U3RhdHVzQ29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3Auc3RhdHVzO1xuICAgIH1cbiAgICBnZXRSYXdSZXNwb25zZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Jlc3A7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgdG9TdHJlYW0oKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RyZWFtcyBoYXZlIG5vdCBiZWVuIGltcGxlbWVudGVkIGluIHRoZSBTdHJpcGUgSFRUUCBjbGllbnQnKTtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby13cmFwcGVyLW9iamVjdC10eXBlc1xuICAgIHRvSlNPTigpIHtcbiAgICAgICAgY29uc3QgeyBqc29uIH0gPSB0aGlzLl9yZXNwO1xuICAgICAgICBpZiAoanNvbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdSZXNwb25zZSBib2R5IHVuZGVmaW5lZCcpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoanNvbik7XG4gICAgICAgIH1cbiAgICB9XG59XG4vKipcbiAqIEFuIEhUVFAgY2xpZW50IGNvbXBhdGlibGUgd2l0aCBgc3RyaXBlLW5vZGVgIHRoYXQgcm91dGVzIEFQSSByZXF1ZXN0cyB0aHJvdWdoIHRoZSBEYXNoYm9hcmQgc2Vzc2lvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNsYXNzIFN0cmlwZUFwcHNIdHRwQ2xpZW50IHtcbiAgICBjb25zdHJ1Y3RvcihmZXRjaCkge1xuICAgICAgICB0aGlzLl9mZXRjaCA9IGZldGNoO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIGdldENsaWVudE5hbWUoKSB7XG4gICAgICAgIHJldHVybiAnc3RyaXBlLXVpLWV4dGVuc2lvbic7XG4gICAgfVxuICAgIGFzeW5jIG1ha2VSZXF1ZXN0KGhvc3QsIHBvcnQsIHBhdGgsIG1ldGhvZCwgaGVhZGVycywgcmVxdWVzdERhdGEsIHByb3RvY29sLCBfdGltZW91dCkge1xuICAgICAgICBpbnZhcmlhbnQocHJvdG9jb2wgPT09ICdodHRwcycsICdNdXN0IHVzZSBodHRwcyBjb25uZWN0aW9ucyBpbiBVSSBleHRlbnNpb25zJyk7XG4gICAgICAgIGNvbnN0IGZldGNoT3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgIGhlYWRlcnMsXG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZXF1ZXN0RGF0YSkge1xuICAgICAgICAgICAgZmV0Y2hPcHRpb25zLmJvZHkgPSByZXF1ZXN0RGF0YTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhdXRoSGVhZGVyID0gaGVhZGVycy5BdXRob3JpemF0aW9uO1xuICAgICAgICBpZiAoYXV0aEhlYWRlciAmJiBtYXRjaGVzU3RyaXBlS2V5LnRlc3QoYXV0aEhlYWRlcikpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRG8gbm90IHVzZSBhY3R1YWwgc3RyaXBlIGtleXMgd2hlbiB1c2luZyB0aGUgU3RyaXBlIEpTIEFQSSBjbGllbnQgd2l0aCBVSSBleHRlc2lvbnMuXFxuXFxuIEluc3RlYWQsIHVzZSBgU1RSSVBFX0FQSV9LRVlgIGZyb20gYEBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9odHRwX2NsaWVudGAgYXMgYSBwbGFjZWhvbGRlci4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHBhdGgsIGAke3Byb3RvY29sfTovLyR7aG9zdH1gKTtcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IHRoaXMuX2ZldGNoKHVybC50b1N0cmluZygpLCBmZXRjaE9wdGlvbnMpO1xuICAgICAgICAvLyBUT0RPOiBBZGQgc3VwcG9ydCBmb3IgdGltZW91dHMuXG4gICAgICAgIHJldHVybiBuZXcgU3RyaXBlQXBwc0h0dHBSZXNwb25zZShyZXNwKTtcbiAgICB9XG59XG4vKipcbiAqIEEgcGxhY2Vob2xkZXIgQVBJIGtleSB0byBwYXNzIHRvIGBzdHJpcGUtbm9kZWAgd2hlbiB1c2luZyB0aGUgZXh0ZW5zaW9uIEhUVFAgY2xpZW50LlxuICogVGhlIGFjdHVhbCBhdXRoZW50aWNhdGlvbiBpcyBoYW5kbGVkIGJ5IHRoZSBEYXNoYm9hcmQgc2Vzc2lvbi5cbiAqXG4gKiAqKkRvIE5PVCBjaGFuZ2UgdGhpcyBzdHJpbmcqKiB3aXRob3V0IGEgZGVwcmVjYXRpb24gcGxhbiBcdTIwMTQgdGhlIERhc2hib2FyZCBydW50aW1lIHZhbGlkYXRlc1xuICogdGhpcyBleGFjdCB2YWx1ZSBhbmQgd2lsbCB0aHJvdyBpZiBpdCBkaWZmZXJzLlxuICogQHNlZSBtYW5hZ2UvZnJvbnRlbmQvc3JjL3RhaWxvci9leHRlbnNpb25zL2hvc3QvYXBpX2ZldGNoLmpzXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBTVFJJUEVfQVBJX0tFWSA9ICdET19OT1RfUEFTU19BX1JFQUxfQVBJX0tFWSc7XG4vKipcbiAqIENyZWF0ZXMgYSBwcmUtY29uZmlndXJlZCB7QGxpbmsgU3RyaXBlQXBwc0h0dHBDbGllbnR9IGluc3RhbmNlIHVzaW5nIHRoZSBkZWZhdWx0IEFQSSBmZXRjaC5cbiAqXG4gKiBAcmV0dXJucyBBIG5ldyBgU3RyaXBlQXBwc0h0dHBDbGllbnRgIGluc3RhbmNlLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgY3JlYXRlSHR0cENsaWVudCA9ICgpID0+IG5ldyBTdHJpcGVBcHBzSHR0cENsaWVudChzdHJpcGVBcGlGZXRjaCk7XG4vKipcbiAqIFRoZSBzdGFuZGFyZCBIVFRQIGhlYWRlciBuYW1lIHVzZWQgZm9yIGF1dGhvcml6YXRpb24uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBBVVRIT1JJWkFUSU9OX0hFQURFUiA9ICdBdXRob3JpemF0aW9uJztcbi8qKlxuICogVGhlIHByZS1idWlsdCBhdXRob3JpemF0aW9uIGhlYWRlciB2YWx1ZSB1c2luZyB7QGxpbmsgU1RSSVBFX0FQSV9LRVl9LlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9WQUxVRSA9IGBCZWFyZXIgJHtTVFJJUEVfQVBJX0tFWX1gO1xuIiwgImltcG9ydCB7IGNyZWF0ZUh0dHBDbGllbnQgfSBmcm9tICcuLi9odHRwQ2xpZW50Jztcbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gKHsgaG9zdCwgcG9ydCB9KSA9PiBhc3luYyAocGF5bG9hZCkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoYGh0dHBzOi8vJHtob3N0fToke3BvcnR9L3YxL2FwcHMvYXBwX2VtYmVkZGVkX2JhY2tlbmRfc2lnbmF0dXJlYCk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3BheWxvYWQnLCBKU09OLnN0cmluZ2lmeSh7IC4uLnBheWxvYWQgfSkpO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdpbmNsdWRlX29ubHlbXScsICdzaWduYXR1cmUnKTtcbiAgICBjb25zdCBjbGllbnQgPSBjcmVhdGVIdHRwQ2xpZW50KCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjbGllbnQubWFrZVJlcXVlc3QoaG9zdCwgcG9ydCwgdXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCwgJ0dFVCcsIHt9LCBudWxsLCAnaHR0cHMnKTtcbiAgICByZXR1cm4gcmVzcG9uc2VcbiAgICAgICAgLnRoZW4oKHIpID0+IHIudG9KU09OKCkpXG4gICAgICAgIC50aGVuKChkYXRhKSA9PiBkYXRhLnNpZ25hdHVyZSk7XG59O1xuIiwgImNvbnN0IGRlZmF1bHRDb25uZWN0aW9uU2V0dGluZ3MgPSB7XG4gICAgaG9zdDogJ2FwaS5zdHJpcGUuY29tJyxcbiAgICBwb3J0OiA0NDMsXG59O1xuLyoqIEBpbnRlcm5hbCAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmV4cG9ydCBsZXQgY29ubmVjdGlvblNldHRpbmdzID0gZGVmYXVsdENvbm5lY3Rpb25TZXR0aW5ncztcbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBzZXRDb25uZWN0aW9uU2V0dGluZ3MgPSAoc2V0dGluZ3MpID0+IHtcbiAgICBjb25uZWN0aW9uU2V0dGluZ3MgPSB7XG4gICAgICAgIC4uLmRlZmF1bHRDb25uZWN0aW9uU2V0dGluZ3MsXG4gICAgICAgIC4uLnNldHRpbmdzLFxuICAgIH07XG59O1xuIiwgImltcG9ydCB7IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgfSBmcm9tICcuL3NpZ25hdHVyZS9jcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5JztcbmltcG9ydCB7IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSB9IGZyb20gJy4vYXBpL3N1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSc7XG5pbXBvcnQgeyBjb25uZWN0aW9uU2V0dGluZ3MgfSBmcm9tICcuL3NpZ25hdHVyZS9jb25uZWN0aW9uU2V0dGluZ3MnO1xuaW1wb3J0IHsgZ2V0SG9zdEVuZHBvaW50IH0gZnJvbSAnLi9fZW5kcG9pbnQnO1xuLyoqIEBwdWJsaWMgKi9cbmV4cG9ydCBjb25zdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSA9IGFzeW5jIChhZGRpdGlvbmFsUGF5bG9hZCkgPT4ge1xuICAgIGlmIChhd2FpdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkoKSkge1xuICAgICAgICBjb25zdCBmZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5ID0gY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseShjb25uZWN0aW9uU2V0dGluZ3MpO1xuICAgICAgICByZXR1cm4gZmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseShhZGRpdGlvbmFsUGF5bG9hZCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZ2V0SG9zdEVuZHBvaW50KCkuY2FsbC5mZXRjaFN0cmlwZVNpZ25hdHVyZShhZGRpdGlvbmFsUGF5bG9hZCk7XG4gICAgfVxufTtcbiIsICJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcFJvdXRlckNvbnRleHQgfSBmcm9tICcuL2ludGVybmFsL0FwcFJvdXRlckNvbnRleHQnO1xuaW1wb3J0IHsgZ2V0RXh0Um91dGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9nZXRFeHRSb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9pbnRlcm5hbC91c2VSb3V0ZXNDb25maWcnO1xuLyoqXG4gKiBSZW5kZXJzIHRoZSB2aWV3IGRlZmluZWQgYnkgdGhlIGByb3V0ZWAgZW50cnkgd2hvc2UgcGF0aCBwYXR0ZXJuIG1hdGNoZXNcbiAqIHRoZSBjdXJyZW50IFVSTC5cbiAqXG4gKiBQbGFjZSBpdCBpbiB5b3VyIGNvbXBvbmVudCBpbXBsZW1lbnRpbmcgdGhlIGBzdHJpcGUuZGFzaGJvYXJkLmZ1bGxwYWdlYCB2aWV3cG9ydC5cbiAqXG4gKiBSZXF1aXJlcyBhIE5hdmlnYXRpb25Qcm92aWRlciBoaWdoZXIgdXAgaW4gdGhlIFJlYWN0IHRyZWUuXG4gKlxuICogQHNlZSBodHRwczovL2RvY3Muc3RyaXBlLmNvbS9zdHJpcGUtYXBwcy9yb3V0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBBcHBSb3V0ZXIoeyBjb250ZXh0LCByZWRpcmVjdE9uTm90Rm91bmQgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldEV4dFJvdXRlcigpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHVzZVJvdXRlc0NvbmZpZygpO1xuICAgIGNvbnN0IGhyZWYgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShyb3V0ZXIubGlzdGVuVG9IcmVmLCByb3V0ZXIuZ2V0SHJlZik7XG4gICAgY29uc3QgaXNIcmVmS25vd24gPSBocmVmICE9PSB1bmRlZmluZWQ7XG4gICAgY29uc3QgbWF0Y2hlZFJvdXRlID0gaXNIcmVmS25vd25cbiAgICAgICAgPyByb3V0ZXIuZ2V0TWF0Y2hlZFJvdXRlKGNvbmZpZywgaHJlZilcbiAgICAgICAgOiBudWxsO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmICghaXNIcmVmS25vd24pXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGlmICghbWF0Y2hlZFJvdXRlICYmIHJlZGlyZWN0T25Ob3RGb3VuZCkge1xuICAgICAgICAgICAgcm91dGVyLnNldFJvdXRlKGNvbmZpZywgcmVkaXJlY3RPbk5vdEZvdW5kLCB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZTogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW2lzSHJlZktub3duLCBtYXRjaGVkUm91dGUsIHJvdXRlciwgY29uZmlnLCByZWRpcmVjdE9uTm90Rm91bmRdKTtcbiAgICBpZiAoIWlzSHJlZktub3duIHx8ICFtYXRjaGVkUm91dGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHsga2V5OiBuYW1lLCByb3V0ZVBhcmFtcywgcm91dGVEZWZpbml0aW9uIH0gPSBtYXRjaGVkUm91dGU7XG4gICAgY29uc3QgeyByZW5kZXIgfSA9IHJvdXRlRGVmaW5pdGlvbjtcbiAgICByZXR1cm4gKF9qc3goQXBwUm91dGVyQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogeyBuYW1lLCByb3V0ZVBhcmFtcyB9LCBjaGlsZHJlbjogcmVuZGVyKHJvdXRlUGFyYW1zLCBjb250ZXh0KSB9KSk7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBBcHBSb3V0ZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vUm91dGVzQ29uZmlnQ29udGV4dCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVzQ29uZmlnKCkge1xuICAgIGNvbnN0IGNvbmZpZyA9IHVzZUNvbnRleHQoUm91dGVzQ29uZmlnQ29udGV4dCk7XG4gICAgaWYgKCFjb25maWcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYXZpZ2F0aW9uUHJvdmlkZXIgaXMgbm90IGluaXRpYWxpc2VkLicpO1xuICAgIH1cbiAgICByZXR1cm4gY29uZmlnO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgUm91dGVzQ29uZmlnQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG4iLCAiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlTWVtbyB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEV4dFJvdXRlciB9IGZyb20gJy4vaW50ZXJuYWwvZ2V0RXh0Um91dGVyJztcbmltcG9ydCB7IFJvdXRlc0NvbmZpZ0NvbnRleHQgfSBmcm9tICcuL2ludGVybmFsL1JvdXRlc0NvbmZpZ0NvbnRleHQnO1xuLyoqXG4gKiBOYXZpZ2F0aW9uUHJvdmlkZXIgaXMgdGhlIHJvb3QgY29tcG9uZW50IHJlcXVpcmVkIGJ5IGFsbCBBUElzIGV4cG9zZWRcbiAqIGZyb20gQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24uIEl0IGFjY2VwdHMgdGhlIHJvdXRlIGNvbmZpZyBwcm9kdWNlZFxuICogYnkgYGNyZWF0ZVJvdXRlc2AuXG4gKlxuICogUGxhY2UgaXQgYWJvdmUgQXBwUm91dGVyIGFuZC9vciBhbnkgY29tcG9uZW50cyB0aGF0IHVzZSB0aGUgbmF2aWdhdGlvbiBBUElzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kb2NzLnN0cmlwZS5jb20vc3RyaXBlLWFwcHMvcm91dGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gTmF2aWdhdGlvblByb3ZpZGVyKHByb3BzKSB7XG4gICAgY29uc3QgeyByb3V0ZXMsIGNoaWxkcmVuIH0gPSBwcm9wcztcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRFeHRSb3V0ZXIoKTtcbiAgICBjb25zdCBjb25maWcgPSB1c2VNZW1vKCgpID0+IHJvdXRlci52YWxpZGF0ZVJvdXRlcyhyb3V0ZXMpLCBbcm91dGVyLCByb3V0ZXNdKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4gcm91dGVyLnJlZ2lzdGVyUm91dGVzKGNvbmZpZyksIFtyb3V0ZXIsIGNvbmZpZ10pO1xuICAgIHJldHVybiAoX2pzeChSb3V0ZXNDb25maWdDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiBjb25maWcsIGNoaWxkcmVuOiBjaGlsZHJlbiB9KSk7XG59XG4iLCAiaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RXh0Um91dGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9nZXRFeHRSb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9pbnRlcm5hbC91c2VSb3V0ZXNDb25maWcnO1xuLyoqXG4gKiBQZXJmb3JtcyBhbiBpbW1lZGlhdGUgbmF2aWdhdGlvbiB0byBhIHNwZWNpZmllZCByb3V0ZSBieSByZXBsYWNpbmdcbiAqIHRoZSBVUkwgaW4gaGlzdG9yeSBzbyB0aGUgdXNlciBuZXZlciBzZWVzIHRoZSBpbnRlcm1lZGlhdGUgcm91dGUuXG4gKlxuICogUmVxdWlyZXMgYSBOYXZpZ2F0aW9uUHJvdmlkZXIgaGlnaGVyIHVwIGluIHRoZSBSZWFjdCB0cmVlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kb2NzLnN0cmlwZS5jb20vc3RyaXBlLWFwcHMvcm91dGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gUmVkaXJlY3QoeyByb3V0ZSB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0RXh0Um91dGVyKCk7XG4gICAgY29uc3QgY29uZmlnID0gdXNlUm91dGVzQ29uZmlnKCk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgcm91dGVyLnNldFJvdXRlKGNvbmZpZywgcm91dGUsIHsgcmVwbGFjZTogdHJ1ZSB9KTtcbiAgICB9LCBbcm91dGUsIHJvdXRlciwgY29uZmlnXSk7XG4gICAgcmV0dXJuIG51bGw7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEFwcFJvdXRlckNvbnRleHQgfSBmcm9tICcuL0FwcFJvdXRlckNvbnRleHQnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFwcFJvdXRlclN0YXRlKCkge1xuICAgIGNvbnN0IHN0YXRlID0gdXNlQ29udGV4dChBcHBSb3V0ZXJDb250ZXh0KTtcbiAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignQXBwUm91dGVyIGlzIG5vdCBpbml0aWFsaXNlZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0YXRlO1xufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RXh0Um91dGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9nZXRFeHRSb3V0ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVzQ29uZmlnIH0gZnJvbSAnLi9pbnRlcm5hbC91c2VSb3V0ZXNDb25maWcnO1xuLyoqXG4gKiBTdG9yZXMgdGhlIG9yaWdpbmFsIHJvdXRlIGRlc2NyaXB0b3IgZm9yIGVhY2ggQXBwUm91dGUgY3JlYXRlZCBieSBjcmVhdGVBcHBSb3V0ZSxcbiAqIGVuYWJsaW5nIG5hdmlnYXRlVG9BcHBSb3V0ZSB0byByZXNvbHZlIGFuIEFwcFJvdXRlIGJhY2sgdG8gaXRzIGtleSArIHBhcmFtc1xuICovXG5jb25zdCByb3V0ZURlc2NyaXB0b3JzID0gbmV3IFdlYWtNYXAoKTtcbi8qKlxuICogUmV0dXJucyBtZXRob2RzIGZvciBuYXZpZ2F0aW5nIHRvIGZ1bGwtcGFnZSByb3V0ZXMuXG4gKlxuICogQHNlZSBodHRwczovL2RvY3Muc3RyaXBlLmNvbS9zdHJpcGUtYXBwcy9yb3V0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VOYXZpZ2F0aW9uKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldEV4dFJvdXRlcigpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHVzZVJvdXRlc0NvbmZpZygpO1xuICAgIGNvbnN0IG5hdmlnYXRlVG9BcHBSb3V0ZSA9IHVzZUNhbGxiYWNrKChyb3V0ZU9yQXBwUm91dGUsIG9wdGlvbnMpID0+IHtcbiAgICAgICAgY29uc3Qgcm91dGUgPSBga2V5YCBpbiByb3V0ZU9yQXBwUm91dGVcbiAgICAgICAgICAgID8gcm91dGVPckFwcFJvdXRlXG4gICAgICAgICAgICA6IHJvdXRlRGVzY3JpcHRvcnMuZ2V0KHJvdXRlT3JBcHBSb3V0ZSk7XG4gICAgICAgIGlmICghcm91dGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIHJvdXRlci5zZXRSb3V0ZShjb25maWcsIHJvdXRlLCBvcHRpb25zKTtcbiAgICB9LCBbcm91dGVyLCBjb25maWddKTtcbiAgICBjb25zdCBjcmVhdGVBcHBSb3V0ZSA9IHVzZUNhbGxiYWNrKChyb3V0ZUNvbmZpZykgPT4ge1xuICAgICAgICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gcm91dGVDb25maWc7XG4gICAgICAgIGNvbnN0IGdsb2IgPSByb3V0ZXIuY3JlYXRlUGF0aFNlZ21lbnRzKGNvbmZpZywgcm91dGVDb25maWcpO1xuICAgICAgICBjb25zdCByb3V0ZSA9IHtcbiAgICAgICAgICAgIG5hbWU6ICdmdWxsUGFnZUdsb2InLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgICAgZ2xvYixcbiAgICAgICAgICAgICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByb3V0ZURlc2NyaXB0b3JzLnNldChyb3V0ZSwgcm91dGVDb25maWcpO1xuICAgICAgICByZXR1cm4gcm91dGU7XG4gICAgfSwgW2NvbmZpZywgcm91dGVyXSk7XG4gICAgcmV0dXJuIHsgbmF2aWdhdGVUb0FwcFJvdXRlLCBjcmVhdGVBcHBSb3V0ZSB9O1xufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrLCB1c2VTeW5jRXh0ZXJuYWxTdG9yZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEV4dFJvdXRlciB9IGZyb20gJy4vaW50ZXJuYWwvZ2V0RXh0Um91dGVyJztcbmNvbnN0IEVNUFRZX1NFQVJDSF9QQVJBTVMgPSB7fTtcbmZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgcmV0dXJuIGdldEV4dFJvdXRlcigpLmdldFNlYXJjaFBhcmFtcygpID8/IEVNUFRZX1NFQVJDSF9QQVJBTVM7XG59XG5mdW5jdGlvbiB3cml0ZShzZWFyY2hQYXJhbXMsIHJlcGxhY2UpIHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRFeHRSb3V0ZXIoKTtcbiAgICBjb25zdCBocmVmID0gcm91dGVyLmdldEhyZWYoKTtcbiAgICAvLyBUaGUgaHJlZiBjYW4gYmUgdW5kZWZpbmVkIGJlZm9yZSBpdHMgdmFsdWUgaXMgcmVjZWl2ZWQgZnJvbSBIb3N0LlxuICAgIC8vIEl0J3Mgc2FmZSB0byBleGl0LCBhcyBBcHBSb3V0ZXIgZGVmZXJzIHJvdXRlIG1hdGNoaW5nIHVudGlsIHRoZSBocmVmIGlzIGtub3duLlxuICAgIGlmICghaHJlZilcbiAgICAgICAgcmV0dXJuO1xuICAgIHJvdXRlci5zZXRIcmVmKGhyZWYsIHtcbiAgICAgICAgcmVwbGFjZSxcbiAgICAgICAgc2VhcmNoUGFyYW1zLFxuICAgIH0pO1xufVxuZnVuY3Rpb24gc3Vic2NyaWJlKGxpc3RlbmVyKSB7XG4gICAgcmV0dXJuIGdldEV4dFJvdXRlcigpLmxpc3RlblRvSHJlZihsaXN0ZW5lcik7XG59XG5jb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICByZXBsYWNlOiB0cnVlLFxufTtcbi8qKlxuICogUmVhZHMgYW5kIHdyaXRlcyB0aGUgY3VycmVudCByb3V0ZSdzIHNlYXJjaCBwYXJhbWV0ZXJzLlxuICpcbiAqIFdvcmtzIGxpa2UgYHVzZVN0YXRlYDogaXQgcmV0dXJucyBhIGBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdYCB0dXBsZS5cbiAqIFRoZSBzZXR0ZXIgYWNjZXB0cyBlaXRoZXIgdGhlIG5leHQgc2VhcmNoIHBhcmFtcyBvciBhbiB1cGRhdGVyIGZ1bmN0aW9uIHRoYXRcbiAqIHJlY2VpdmVzIHRoZSBjdXJyZW50IG9uZXMuIFVwZGF0ZWQgc2VhcmNoIHBhcmFtcyBhcmUgYXBwZW5kZWQgdG8gdGhlIGN1cnJlbnRcbiAqIHJvdXRlLCByZXBsYWNpbmcgdGhlIGN1cnJlbnQgZW50cnkgaW4gdGhlIGhpc3Rvcnkgc3RhY2sgcmF0aGVyIHRoYW4gcHVzaGluZyBhXG4gKiBuZXcgb25lLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kb2NzLnN0cmlwZS5jb20vc3RyaXBlLWFwcHMvcm91dGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlQWxsU2VhcmNoUGFyYW1zKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IHJlcGxhY2UgfSA9IHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcbiAgICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTeW5jRXh0ZXJuYWxTdG9yZShzdWJzY3JpYmUsIHJlYWQpO1xuICAgIGNvbnN0IHNldFNlYXJjaFBhcmFtcyA9IHVzZUNhbGxiYWNrKChuZXh0KSA9PiB3cml0ZSh0eXBlb2YgbmV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG5leHQocmVhZCgpKSA6IG5leHQsIHJlcGxhY2UpLCBbcmVwbGFjZV0pO1xuICAgIHJldHVybiBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdO1xufVxuIiwgImltcG9ydCB7IHVzZUNhbGxiYWNrIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdXNlQWxsU2VhcmNoUGFyYW1zIH0gZnJvbSAnLi91c2VBbGxTZWFyY2hQYXJhbXMnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVNlYXJjaFBhcmFtKG5hbWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBbc2VhcmNoUGFyYW1zLCBzZXRTZWFyY2hQYXJhbXNdID0gdXNlQWxsU2VhcmNoUGFyYW1zKG9wdGlvbnMpO1xuICAgIGNvbnN0IHVwZGF0ZSA9IHVzZUNhbGxiYWNrKChuZXh0KSA9PiBzZXRTZWFyY2hQYXJhbXMoKHByZXZpb3VzKSA9PiAoe1xuICAgICAgICAuLi5wcmV2aW91cyxcbiAgICAgICAgW25hbWVdOiB0eXBlb2YgbmV4dCA9PT0gJ2Z1bmN0aW9uJyA/IG5leHQocHJldmlvdXNbbmFtZV0pIDogbmV4dCxcbiAgICB9KSksIFtuYW1lLCBzZXRTZWFyY2hQYXJhbXNdKTtcbiAgICByZXR1cm4gW3NlYXJjaFBhcmFtc1tuYW1lXSwgdXBkYXRlXTtcbn1cbiIsICIvKipcbiAqIFNpZ25lZCBmZXRjaCBoZWxwZXIgZm9yIHRoZSBVSSBleHRlbnNpb24gXHUyMTkyIGFwcCBiYWNrZW5kLlxuICogRXZlcnkgcmVxdWVzdCBpcyBzaWduZWQgd2l0aCB0aGUgYXBwIHNlY3JldCB2aWEgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKSBhbmRcbiAqIGNhcnJpZXMgYWNjb3VudF9pZC91c2VyX2lkIHNvIHRoZSBiYWNrZW5kIGNhbiB2ZXJpZnkgYW5kIHNjb3BlIGl0LlxuICovXG5pbXBvcnQgeyBmZXRjaFN0cmlwZVNpZ25hdHVyZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscyc7XG5pbXBvcnQgdHlwZSB7IEV4dGVuc2lvbkNvbnRleHRWYWx1ZSB9IGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9jb250ZXh0JztcblxuY29uc3QgQVBJX0JBU0UgPVxuICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgKHdpbmRvdyBhcyB7IF9fRkxfQVBQX0FQSV9CQVNFX18/OiBzdHJpbmcgfSkuX19GTF9BUFBfQVBJX0JBU0VfXykgfHxcbiAgJ2h0dHBzOi8vc3RyaXBlLWFwcC5hdXRvYW5hZi5ybyc7XG5cbnR5cGUgVXNlckNvbnRleHQgPSBFeHRlbnNpb25Db250ZXh0VmFsdWVbJ3VzZXJDb250ZXh0J107XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzaWduZWRSZXF1ZXN0PFQgPSB1bmtub3duPihcbiAgcGF0aDogc3RyaW5nLFxuICB1c2VyQ29udGV4dDogVXNlckNvbnRleHQsXG4gIGJvZHk/OiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPixcbik6IFByb21pc2U8VD4ge1xuICBjb25zdCBzaWduYXR1cmVQYXlsb2FkID0ge1xuICAgIGFjY291bnRfaWQ6IHVzZXJDb250ZXh0LmFjY291bnQuaWQsXG4gICAgLy8gT21pdCB1c2VyX2lkIHdoZW4gaXQgbWF0Y2hlcyB0aGUgYWNjb3VudCBpZCAoc2lnbmVkIHBheWxvYWQgcnVsZSkuXG4gICAgdXNlcl9pZDogdXNlckNvbnRleHQuYWNjb3VudC5pZCA9PT0gdXNlckNvbnRleHQuaWQgPyB1bmRlZmluZWQgOiB1c2VyQ29udGV4dC5pZCxcbiAgfTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKTtcbiAgY29uc3QgcGF5bG9hZCA9IHsgLi4uc2lnbmF0dXJlUGF5bG9hZCwgLi4uKGJvZHkgPz8ge30pIH07XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfSR7cGF0aH1gLCB7XG4gICAgbWV0aG9kOiBib2R5ID8gJ1BPU1QnIDogJ0dFVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxuICAgIH0sXG4gICAgYm9keTogYm9keSA/IEpTT04uc3RyaW5naWZ5KHBheWxvYWQpIDogdW5kZWZpbmVkLFxuICB9KTtcbiAgaWYgKCFyZXMub2spIHtcbiAgICBjb25zdCBlcnIgPSAoYXdhaXQgcmVzLmpzb24oKS5jYXRjaCgoKSA9PiAoe30pKSkgYXMgeyBlcnJvcj86IHN0cmluZyB9O1xuICAgIHRocm93IG5ldyBFcnJvcihlcnIuZXJyb3IgfHwgYFJlcXVlc3QgZmFpbGVkICgke3Jlcy5zdGF0dXN9KWApO1xuICB9XG4gIHJldHVybiByZXMuanNvbigpIGFzIFByb21pc2U8VD47XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBb0JBLFVBQUlBLGFBQVksU0FBUyxXQUFXLFFBQVEsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDNUQsWUFBSSxNQUF1QztBQUN6QyxjQUFJLFdBQVcsUUFBVztBQUN4QixrQkFBTSxJQUFJLE1BQU0sOENBQThDO0FBQUEsVUFDaEU7QUFBQSxRQUNGO0FBRUEsWUFBSSxDQUFDLFdBQVc7QUFDZCxjQUFJO0FBQ0osY0FBSSxXQUFXLFFBQVc7QUFDeEIsb0JBQVEsSUFBSTtBQUFBLGNBQ1Y7QUFBQSxZQUVGO0FBQUEsVUFDRixPQUFPO0FBQ0wsZ0JBQUksT0FBTyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzVCLGdCQUFJLFdBQVc7QUFDZixvQkFBUSxJQUFJO0FBQUEsY0FDVixPQUFPLFFBQVEsT0FBTyxXQUFXO0FBQUUsdUJBQU8sS0FBSztBQUFBLGNBQWEsQ0FBQztBQUFBLFlBQy9EO0FBQ0Esa0JBQU0sT0FBTztBQUFBLFVBQ2Y7QUFFQSxnQkFBTSxjQUFjO0FBQ3BCLGdCQUFNO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFFQSxhQUFPLFVBQVVBO0FBQUE7QUFBQTs7O0FDaERqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FDU0EsTUFBQUMsaUJBQW9DOzs7QUNUcEMsMkJBQTRCO0FBQzVCLHFCQUEyQzs7O0FDRHBDLE1BQU0sY0FBYzs7O0FERzNCLE1BQU0sZUFBZSxDQUFDLGNBQWM7QUFDaEMsVUFBTSx1QkFBdUIsVUFBVSxlQUFlLFVBQVUsU0FBUztBQUN6RSxVQUFNLGVBQWUsQ0FBQyxjQUFXLG1CQUFBQyxLQUFLLFdBQVcsRUFBRSxHQUFHLE9BQU8sc0JBQTRDLFlBQVksYUFBYSxlQUFlLEtBQUssQ0FB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QUNBLDhCQUE4QjtBQUFBLElBQzlCLDBCQUEwQjtBQUFBLElBQzFCLGdCQUFnQjtBQUFBLE1BQ2QsMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsUUFDQSxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxFQUNiOyIsCiAgIm5hbWVzIjogWyJpbnZhcmlhbnQiLCAiaW1wb3J0X3JlYWN0IiwgIl9qc3giLCAiaW52YXJpYW50IiwgImltcG9ydF9pbnZhcmlhbnQiLCAiZmV0Y2giLCAiaW52YXJpYW50IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJzdGF0dXMiXQp9Cg==
