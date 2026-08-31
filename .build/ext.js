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
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
                children: "Checkout webhook: enabled \u2014 invoices are generated automatically"
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
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Inline, {
            children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Button, {
              onPress: () => void handleDisconnect(),
              disabled: saving,
              children: "Disconnect"
            })
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
  var BUILD_TIME = "2026-08-31 15:48:20.304079147 +0000 UTC m=+0.918313877";
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
        "permission": "event_read",
        "purpose": "Receives app events (checkout.session.completed) from connected merchant accounts to trigger Romanian ANAF e-invoicing."
      },
      {
        "permission": "checkout_session_read",
        "purpose": "Reads checkout session details (customer, line items, totals) to generate the EN 16931 / CIUS-RO UBL e-invoice."
      },
      {
        "permission": "secret_write",
        "purpose": "Stores the merchant's OAuth refresh token, FiscalLink API key and ANAF SPV credentials in the Stripe Secret Store (account scope)."
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
    "version": "0.1.1"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9TZXR1cC50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aS9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9fZW5kcG9pbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2ZldGNoQXBwRW1iZWRkZWRLZXkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvZmV0Y2hWaWFGcmFtZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2FwaS9mZXRjaFZpYUhvc3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGlGZXRjaC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2NvbnRleHQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9odHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvbmF2aWdhdGlvbi9BcHBSb3V0ZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL2ludGVybmFsL0FwcFJvdXRlckNvbnRleHQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL2ludGVybmFsL3VzZVJvdXRlc0NvbmZpZy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vaW50ZXJuYWwvUm91dGVzQ29uZmlnQ29udGV4dC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vTmF2aWdhdGlvblByb3ZpZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvbmF2aWdhdGlvbi9SZWRpcmVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vaW50ZXJuYWwvdXNlQXBwUm91dGVyU3RhdGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL3VzZU5hdmlnYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL3VzZUFsbFNlYXJjaFBhcmFtcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vdXNlU2VhcmNoUGFyYW0uanMiLCAiLi4vc3JjL2hlbHBlcnMvYmFja2VuZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5cbi8vIFZpZXcgY29tcG9uZW50IGltcG9ydHMgXHUyMDE0IG9uZSBwZXIgdmlld3BvcnQgZGVjbGFyZWQgaW4gdWlfZXh0ZW5zaW9uLnZpZXdzXG5pbXBvcnQgU2V0dXAgZnJvbSAnLi4vc3JjL3ZpZXdzL1NldHVwJztcblxuLy8gRXhwb3NlcyB0aGUgU0RLIHZlcnNpb24gc28gdGhlIERhc2hib2FyZCBjYW4gdmVyaWZ5IGNvbXBhdGliaWxpdHlcbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcblxuLy8gTmFtZWQgZXhwb3J0cyBtYWtlIGVhY2ggdmlldyBjb21wb25lbnQgYWNjZXNzaWJsZSB0byB0aGUgRGFzaGJvYXJkIHJ1bnRpbWVcblxuZXhwb3J0IHsgXG4gIFNldHVwXG4gfTtcblxuLy8gVGltZXN0YW1wIGNoYW5nZXMgb24gZXZlcnkgZXhwb3J0LCBlbnN1cmluZyB0aGUgZGV2IHNlcnZlciBkZXRlY3RzIGEgcmVidWlsZFxuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wOC0zMSAxNTo0ODoyMC4zMDQwNzkxNDcgKzAwMDAgVVRDIG09KzAuOTE4MzEzODc3JztcblxuLy8gQXBwIG1hbmlmZXN0IFx1MjAxNCBjb25zdW1lZCBieSB0aGUgRGFzaGJvYXJkIHRvIGNvbmZpZ3VyZSB0aGUgYXBwXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vc3RyaXBlLmNvbS9zdHJpcGUtYXBwLnNjaGVtYS5qc29uXCIsXG4gIFwiYWxsb3dlZF9yZWRpcmVjdF91cmlzXCI6IFtcbiAgICBcImh0dHBzOi8vc3RyaXBlLWFwcC5hdXRvYW5hZi5yby9vYXV0aC9jYWxsYmFja1wiXG4gIF0sXG4gIFwiY29uc3RhbnRzXCI6IHtcbiAgICBcIkFQSV9CQVNFXCI6IFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvXCJcbiAgfSxcbiAgXCJkaXN0cmlidXRpb25fdHlwZVwiOiBcInB1YmxpY1wiLFxuICBcImljb25cIjogXCIuL2ljb25zL2Zpc2NhbGxpbmtfaWNvbl8zMi5wbmdcIixcbiAgXCJpZFwiOiBcImNvbS5maXNjYWxsaW5rLmFuYWZcIixcbiAgXCJuYW1lXCI6IFwiRmlzY2FsTGluayBmb3IgQU5BRlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJldmVudF9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWNlaXZlcyBhcHAgZXZlbnRzIChjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCkgZnJvbSBjb25uZWN0ZWQgbWVyY2hhbnQgYWNjb3VudHMgdG8gdHJpZ2dlciBSb21hbmlhbiBBTkFGIGUtaW52b2ljaW5nLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjaGVja291dF9zZXNzaW9uX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlJlYWRzIGNoZWNrb3V0IHNlc3Npb24gZGV0YWlscyAoY3VzdG9tZXIsIGxpbmUgaXRlbXMsIHRvdGFscykgdG8gZ2VuZXJhdGUgdGhlIEVOIDE2OTMxIC8gQ0lVUy1STyBVQkwgZS1pbnZvaWNlLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlN0b3JlcyB0aGUgbWVyY2hhbnQncyBPQXV0aCByZWZyZXNoIHRva2VuLCBGaXNjYWxMaW5rIEFQSSBrZXkgYW5kIEFOQUYgU1BWIGNyZWRlbnRpYWxzIGluIHRoZSBTdHJpcGUgU2VjcmV0IFN0b3JlIChhY2NvdW50IHNjb3BlKS5cIlxuICAgIH1cbiAgXSxcbiAgXCJwb3N0X2luc3RhbGxfYWN0aW9uXCI6IHtcbiAgICBcInR5cGVcIjogXCJleHRlcm5hbFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvL2luc3RhbGxlZFwiXG4gIH0sXG4gIFwic2FuZGJveF9pbnN0YWxsX2NvbXBhdGlibGVcIjogdHJ1ZSxcbiAgXCJzdHJpcGVfYXBpX2FjY2Vzc190eXBlXCI6IFwib2F1dGhcIixcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBbXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvL2FwaS9cIlxuICAgICAgXSxcbiAgICAgIFwicHVycG9zZVwiOiBcIlRoZSBGaXNjYWxMaW5rIGV4dGVuc2lvbiBjYWxscyB0aGUgRmlzY2FsTGluayBTdHJpcGUgQXBwIGJhY2tlbmQgdG8gc2F2ZSBjcmVkZW50aWFscywgcHJvdmlzaW9uIHRoZSB3ZWJob29rIGFuZCByZXBvcnQgY29ubmVjdGlvbiBzdGF0dXMuXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlNldHVwXCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmRyYXdlci5kZWZhdWx0XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjAuMS4xXCJcbn07XG4iLCAiLyoqXG4gKiBGaXNjYWxMaW5rIGZvciBBTkFGIFx1MjAxNCBkYXNoYm9hcmQgc2V0dGluZ3Mgdmlldy5cbiAqXG4gKiBTdGF0ZSBtYWNoaW5lIHJlcXVpcmVkIGJ5IHRoZSBhcHAgc3BlYzpcbiAqICAgbG9hZGluZyAgIFx1MjE5MiBzcGlubmVyIHdoaWxlIGZldGNoaW5nIC9hcGkvc3RhdHVzXG4gKiAgIGVycm9yICAgICBcdTIxOTIgQmFubmVyIHdpdGggbWVzc2FnZSArIFJldHJ5IGJ1dHRvblxuICogICBlbXB0eSAgICAgXHUyMTkyIGNvbm5lY3Rpb24gZm9ybSAoRmlzY2FsTGluayBBUEkga2V5ICsgb3B0aW9uYWwgQU5BRiBTUFYgY3JlZGVudGlhbHMpXG4gKiAgIGNvbm5lY3RlZCBcdTIxOTIgc3RhdHVzIHN1bW1hcnkgKyBcIkVuYWJsZSB3ZWJob29rXCIgKyBEaXNjb25uZWN0XG4gKi9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCYW5uZXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbmxpbmUsXG4gIFNwaW5uZXIsXG4gIFRleHRGaWVsZCxcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuaW1wb3J0IHsgc2lnbmVkUmVxdWVzdCB9IGZyb20gJy4uL2hlbHBlcnMvYmFja2VuZCc7XG5cbmludGVyZmFjZSBTdGF0dXMge1xuICBpbnN0YWxsZWQ6IGJvb2xlYW47XG4gIGZpc2NhbExpbmtDb25uZWN0ZWQ6IGJvb2xlYW47XG4gIGFuYWZDb25maWd1cmVkOiBib29sZWFuO1xuICB3ZWJob29rRW5hYmxlZDogYm9vbGVhbjtcbn1cblxudHlwZSBWaWV3U3RhdGUgPVxuICB8IHsga2luZDogJ2xvYWRpbmcnIH1cbiAgfCB7IGtpbmQ6ICdlcnJvcic7IG1lc3NhZ2U6IHN0cmluZyB9XG4gIHwgeyBraW5kOiAnZW1wdHknIH1cbiAgfCB7IGtpbmQ6ICdjb25uZWN0ZWQnOyBzdGF0dXM6IFN0YXR1cyB9O1xuXG5leHBvcnQgY29uc3QgU2V0dXAgPSAoeyB1c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KHsga2luZDogJ2xvYWRpbmcnIH0pO1xuICBjb25zdCBbYXBpS2V5LCBzZXRBcGlLZXldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYW5hZkNpZiwgc2V0QW5hZkNpZl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthbmFmQ2xpZW50SWQsIHNldEFuYWZDbGllbnRJZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthbmFmQ2xpZW50U2VjcmV0LCBzZXRBbmFmQ2xpZW50U2VjcmV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGlvbkVycm9yLCBzZXRBY3Rpb25FcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgbG9hZFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTdGF0ZSh7IGtpbmQ6ICdsb2FkaW5nJyB9KTtcbiAgICBzZXRBY3Rpb25FcnJvcignJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHNpZ25lZFJlcXVlc3Q8U3RhdHVzPignL2FwaS9zdGF0dXMnLCB1c2VyQ29udGV4dCk7XG4gICAgICBjb25zdCBoYXNBbnlDb25maWcgPSBzdGF0dXMuZmlzY2FsTGlua0Nvbm5lY3RlZCB8fCBzdGF0dXMuYW5hZkNvbmZpZ3VyZWQ7XG4gICAgICBzZXRTdGF0ZShoYXNBbnlDb25maWcgPyB7IGtpbmQ6ICdjb25uZWN0ZWQnLCBzdGF0dXMgfSA6IHsga2luZDogJ2VtcHR5JyB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRTdGF0ZSh7IGtpbmQ6ICdlcnJvcicsIG1lc3NhZ2U6IChlIGFzIEVycm9yKS5tZXNzYWdlIH0pO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZvaWQgbG9hZFN0YXR1cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgc2V0QWN0aW9uRXJyb3IoJycpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzaWduZWRSZXF1ZXN0KCcvYXBpL2Nvbm5lY3QnLCB1c2VyQ29udGV4dCwge1xuICAgICAgICBhcGlLZXksXG4gICAgICAgIC4uLihhbmFmQ2lmID8geyBhbmFmQ2lmIH0gOiB7fSksXG4gICAgICAgIC4uLihhbmFmQ2xpZW50SWQgPyB7IGFuYWZDbGllbnRJZCB9IDoge30pLFxuICAgICAgICAuLi4oYW5hZkNsaWVudFNlY3JldCA/IHsgYW5hZkNsaWVudFNlY3JldCB9IDoge30pLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBsb2FkU3RhdHVzKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0QWN0aW9uRXJyb3IoKGUgYXMgRXJyb3IpLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFNhdmluZyh0cnVlKTtcbiAgICBzZXRBY3Rpb25FcnJvcignJyk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNpZ25lZFJlcXVlc3QoJy9hcGkvZGlzY29ubmVjdCcsIHVzZXJDb250ZXh0LCB7fSk7XG4gICAgICBzZXRBcGlLZXkoJycpO1xuICAgICAgc2V0QW5hZkNpZignJyk7XG4gICAgICBzZXRBbmFmQ2xpZW50SWQoJycpO1xuICAgICAgc2V0QW5hZkNsaWVudFNlY3JldCgnJyk7XG4gICAgICBzZXRTdGF0ZSh7IGtpbmQ6ICdlbXB0eScgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0QWN0aW9uRXJyb3IoKGUgYXMgRXJyb3IpLm1lc3NhZ2UpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoc3RhdGUua2luZCA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nIH19PlxuICAgICAgICA8U3Bpbm5lciBzaXplPVwic21hbGxcIj5Mb2FkaW5nIHN0YXR1c1x1MjAyNjwvU3Bpbm5lcj5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cblxuICBpZiAoc3RhdGUua2luZCA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPEJhbm5lciB0eXBlPVwiY3JpdGljYWxcIiB0aXRsZT1cIlVuYWJsZSB0byBsb2FkXCI+XG4gICAgICAgICAge3N0YXRlLm1lc3NhZ2V9XG4gICAgICAgIDwvQmFubmVyPlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBvblByZXNzPXsoKSA9PiB2b2lkIGxvYWRTdGF0dXMoKX0+UmV0cnk8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgaWYgKHN0YXRlLmtpbmQgPT09ICdlbXB0eScpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Db25uZWN0IEZpc2NhbExpbmsgZm9yIEFOQUY8L0JveD5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIFR1cm4gY29tcGxldGVkIGNoZWNrb3V0cyBpbnRvIFJvbWFuaWFuIEFOQUYgZS1pbnZvaWNlcyAoRU4gMTY5MzEgLyBDSVVTLVJPIFVCTClcbiAgICAgICAgICBhdXRvbWF0aWNhbGx5LiBZb3VyIGNyZWRlbnRpYWxzIGFyZSBzdG9yZWQgaW4gU3RyaXBlJmFwb3M7cyBTZWNyZXQgU3RvcmUgXHUyMDE0IG5ldmVyIGluXG4gICAgICAgICAgeW91ciBicm93c2VyIG9yIG9uIG91ciBzZXJ2ZXJzLlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiRmlzY2FsTGluayBBUEkga2V5XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRnJvbSB5b3VyIEZpc2NhbExpbmsgZGFzaGJvYXJkIFx1MjE5MiBBUEkga2V5cyAoZmxfXHUyMDI2KVwiXG4gICAgICAgICAgICB2YWx1ZT17YXBpS2V5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBcGlLZXkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmbF9cdTIwMjZcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiQU5BRiBTUFYgQ0lGIChjb21wYW55IHRheCBJRClcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgaXNzdWVyIENJRiB0aGF0IGhhcyBTUFYgYWNjZXNzIChlLmcuIFJPMTIzNDU2NzgpXCJcbiAgICAgICAgICAgIHZhbHVlPXthbmFmQ2lmfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmFmQ2lmKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUk9cdTIwMjZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJBTkFGIFNQViBPQXV0aCBjbGllbnQgSUQgKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICB2YWx1ZT17YW5hZkNsaWVudElkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmFmQ2xpZW50SWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiQU5BRiBTUFYgT0F1dGggY2xpZW50IHNlY3JldCAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17YW5hZkNsaWVudFNlY3JldH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5hZkNsaWVudFNlY3JldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHthY3Rpb25FcnJvciAmJiAoXG4gICAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgPEJhbm5lciB0eXBlPVwiY3JpdGljYWxcIiB0aXRsZT1cIkNvbm5lY3Rpb24gZmFpbGVkXCI+XG4gICAgICAgICAgICAgIHthY3Rpb25FcnJvcn1cbiAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gdm9pZCBoYW5kbGVDb25uZWN0KCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17c2F2aW5nIHx8ICFhcGlLZXkudHJpbSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzYXZpbmcgPyAnQ29ubmVjdGluZ1x1MjAyNicgOiAnQ29ubmVjdCd9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBjb25uZWN0ZWQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gIGNvbnN0IHsgc3RhdHVzIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5GaXNjYWxMaW5rIGZvciBBTkFGIFx1MjAxNCBjb25uZWN0ZWQ8L0JveD5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICA8SW5saW5lPlxuICAgICAgICAgIDxEb3Qgb2s9e3N0YXR1cy5maXNjYWxMaW5rQ29ubmVjdGVkfSAvPlxuICAgICAgICAgIDxCb3g+RmlzY2FsTGluayBBUEkga2V5OiB7c3RhdHVzLmZpc2NhbExpbmtDb25uZWN0ZWQgPyAnY29uZmlndXJlZCcgOiAnbWlzc2luZyd9PC9Cb3g+XG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICA8SW5saW5lPlxuICAgICAgICAgIDxEb3Qgb2s9e3N0YXR1cy5hbmFmQ29uZmlndXJlZH0gLz5cbiAgICAgICAgICA8Qm94PkFOQUYgU1BWIGNyZWRlbnRpYWxzOiB7c3RhdHVzLmFuYWZDb25maWd1cmVkID8gJ2NvbmZpZ3VyZWQnIDogJ21pc3NpbmcnfTwvQm94PlxuICAgICAgICA8L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAneHNtYWxsJyB9fT5cbiAgICAgICAgPElubGluZT5cbiAgICAgICAgICA8RG90IG9rPXtzdGF0dXMud2ViaG9va0VuYWJsZWR9IC8+XG4gICAgICAgICAgPEJveD5DaGVja291dCB3ZWJob29rOiBlbmFibGVkIFx1MjAxNCBpbnZvaWNlcyBhcmUgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHk8L0JveD5cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cblxuICAgICAge2FjdGlvbkVycm9yICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxCYW5uZXIgdHlwZT1cImNyaXRpY2FsXCIgdGl0bGU9XCJBY3Rpb24gZmFpbGVkXCI+XG4gICAgICAgICAgICB7YWN0aW9uRXJyb3J9XG4gICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPElubGluZT5cbiAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9eygpID0+IHZvaWQgaGFuZGxlRGlzY29ubmVjdCgpfSBkaXNhYmxlZD17c2F2aW5nfT5cbiAgICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgTmV3IGludm9pY2VzIGFwcGVhciBpbiB5b3VyIEZpc2NhbExpbmsgZGFzaGJvYXJkOyBBTkFGIHN1Ym1pc3Npb24gYW5kIGFuc3dlciBwb2xsaW5nXG4gICAgICAgIHJ1biB0aGVyZS4gUXVvdGEgYW5kIG1ldGVyaW5nIGZvbGxvdyB5b3VyIEZpc2NhbExpbmsgcGxhbi5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApO1xufTtcblxuY29uc3QgRG90ID0gKHsgb2sgfTogeyBvazogYm9vbGVhbiB9KSA9PiAoXG4gIDxCb3ggY3NzPXt7IGNvbG9yOiBvayA/ICdzdWNjZXNzJyA6ICdjcml0aWNhbCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5cdTI1Q0Y8L0JveD5cbik7XG5cbi8vIFN0cmlwZSBBcHBzIENMSSBpbXBvcnRzIHZpZXcgY29tcG9uZW50cyBhcyBkZWZhdWx0IGV4cG9ydHMuXG5leHBvcnQgZGVmYXVsdCBTZXR1cDtcbiIsICJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQgfSBmcm9tICdAcmVtb3RlLXVpL3JlYWN0JztcbmltcG9ydCB7IFNES19WRVJTSU9OIH0gZnJvbSAnLi4vdmVyc2lvbic7XG5jb25zdCB3aXRoU2RrUHJvcHMgPSAoQ29tcG9uZW50KSA9PiB7XG4gICAgY29uc3Qgd3JhcHBlZENvbXBvbmVudE5hbWUgPSBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50LnRvU3RyaW5nKCk7XG4gICAgY29uc3QgV2l0aFNka1Byb3BzID0gKHByb3BzKSA9PiAoX2pzeChDb21wb25lbnQsIHsgLi4ucHJvcHMsIHdyYXBwZWRDb21wb25lbnROYW1lOiB3cmFwcGVkQ29tcG9uZW50TmFtZSwgc2RrVmVyc2lvbjogU0RLX1ZFUlNJT04sIHNjaGVtYVZlcnNpb246IFwidjlcIiB9KSk7XG4gICAgV2l0aFNka1Byb3BzLndyYXBwZWRDb21wb25lbnROYW1lID0gd3JhcHBlZENvbXBvbmVudE5hbWU7XG4gICAgcmV0dXJuIFdpdGhTZGtQcm9wcztcbn07XG5jb25zdCBkZWZpbmVDb21wb25lbnQgPSAobmFtZSwgZnJhZ21lbnRQcm9wcywgd3JhcFdpdGhTZGtQcm9wcykgPT4ge1xuICAgIGNvbnN0IHJlbW90ZUNvbXBvbmVudCA9IGNyZWF0ZVJlbW90ZVJlYWN0Q29tcG9uZW50KG5hbWUsIHtcbiAgICAgICAgZnJhZ21lbnRQcm9wcyxcbiAgICB9KTtcbiAgICBpZiAoIXdyYXBXaXRoU2RrUHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIHJlbW90ZUNvbXBvbmVudDtcbiAgICB9XG4gICAgcmV0dXJuIHdpdGhTZGtQcm9wcyhyZW1vdGVDb21wb25lbnQpO1xufTtcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25JdGVtID0gZGVmaW5lQ29tcG9uZW50KCdBY2NvcmRpb25JdGVtJywgWyd0aXRsZScsICdhY3Rpb25zJywgJ21lZGlhJywgJ3N1YnRpdGxlJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEFjY29yZGlvbiA9IGRlZmluZUNvbXBvbmVudCgnQWNjb3JkaW9uJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEJhZGdlID0gZGVmaW5lQ29tcG9uZW50KCdCYWRnZScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBCYW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ0Jhbm5lcicsIFsnYWN0aW9ucycsICdkZXNjcmlwdGlvbicsICd0aXRsZSddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBCYXJDaGFydCA9IGRlZmluZUNvbXBvbmVudCgnQmFyQ2hhcnQnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQm94ID0gZGVmaW5lQ29tcG9uZW50KCdCb3gnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQnV0dG9uR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0J1dHRvbkdyb3VwJywgWydtZW51VHJpZ2dlciddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBCdXR0b24gPSBkZWZpbmVDb21wb25lbnQoJ0J1dHRvbicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBDaGVja2JveCA9IGRlZmluZUNvbXBvbmVudCgnQ2hlY2tib3gnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IENoaXBMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdDaGlwTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBDaGlwID0gZGVmaW5lQ29tcG9uZW50KCdDaGlwJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IENvbnRleHRWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdDb250ZXh0VmlldycsIFsnYWN0aW9ucycsICdiYW5uZXInLCAnZm9vdGVyQ29udGVudCcsICdwcmltYXJ5QWN0aW9uJywgJ3NlY29uZGFyeUFjdGlvbiddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBDdXJyZW5jeUZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdDdXJyZW5jeUZpZWxkJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBEYXRhVGFibGUgPSBkZWZpbmVDb21wb25lbnQoJ0RhdGFUYWJsZScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBEYXRlRmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ0RhdGVGaWVsZCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRGF0ZVJhbmdlUGlja2VyID0gZGVmaW5lQ29tcG9uZW50KCdEYXRlUmFuZ2VQaWNrZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRGV0YWlsUGFnZVByb3BlcnR5TGlzdCA9IGRlZmluZUNvbXBvbmVudCgnRGV0YWlsUGFnZVByb3BlcnR5TGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBEZXRhaWxQYWdlID0gZGVmaW5lQ29tcG9uZW50KCdEZXRhaWxQYWdlJywgWydwcmltYXJ5Q29sdW1uJywgJ3NlY29uZGFyeUNvbHVtbiddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBEZXRhaWxQYWdlVGFibGUgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2VUYWJsZScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBEaXZpZGVyID0gZGVmaW5lQ29tcG9uZW50KCdEaXZpZGVyJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEZvY3VzVmlldyA9IGRlZmluZUNvbXBvbmVudCgnRm9jdXNWaWV3JywgWydmb290ZXJDb250ZW50JywgJ3ByaW1hcnlBY3Rpb24nLCAnc2Vjb25kYXJ5QWN0aW9uJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEZvcm1GaWVsZEdyb3VwID0gZGVmaW5lQ29tcG9uZW50KCdGb3JtRmllbGRHcm91cCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBGdWxsUGFnZVZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0Z1bGxQYWdlVmlldycsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBJY29uID0gZGVmaW5lQ29tcG9uZW50KCdJY29uJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEltZyA9IGRlZmluZUNvbXBvbmVudCgnSW1nJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IElubGluZSA9IGRlZmluZUNvbXBvbmVudCgnSW5saW5lJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IExpbmVDaGFydCA9IGRlZmluZUNvbXBvbmVudCgnTGluZUNoYXJ0JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IExpbmsgPSBkZWZpbmVDb21wb25lbnQoJ0xpbmsnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgTGlzdEl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ0xpc3RJdGVtJywgWydpY29uJywgJ2ltYWdlJywgJ3NlY29uZGFyeVRpdGxlJywgJ3RpdGxlJywgJ3ZhbHVlJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IExpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0xpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgTWVudUdyb3VwID0gZGVmaW5lQ29tcG9uZW50KCdNZW51R3JvdXAnLCBbJ3RpdGxlJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IE1lbnVJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdNZW51SXRlbScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBNZW51ID0gZGVmaW5lQ29tcG9uZW50KCdNZW51JywgWyd0cmlnZ2VyJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IE9uYm9hcmRpbmdWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdPbmJvYXJkaW5nVmlldycsIFsnZXJyb3InXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgT3ZlcnZpZXdQYWdlID0gZGVmaW5lQ29tcG9uZW50KCdPdmVydmlld1BhZ2UnLCBbJ3ByaW1hcnlDb2x1bW4nLCAnc2Vjb25kYXJ5Q29sdW1uJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFBhZ2VNb2R1bGUgPSBkZWZpbmVDb21wb25lbnQoJ1BhZ2VNb2R1bGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldyA9IGRlZmluZUNvbXBvbmVudCgnUGxhdGZvcm1Db25maWd1cmF0aW9uVmlldycsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBQcm9wZXJ0eUxpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdQcm9wZXJ0eUxpc3RJdGVtJywgWydsYWJlbCcsICd2YWx1ZSddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBQcm9wZXJ0eUxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ1Byb3BlcnR5TGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBSYWRpbyA9IGRlZmluZUNvbXBvbmVudCgnUmFkaW8nLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFNlYXJjaEZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdTZWFyY2hGaWVsZCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBTZWxlY3QgPSBkZWZpbmVDb21wb25lbnQoJ1NlbGVjdCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgU2V0dGluZ3NWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdTZXR0aW5nc1ZpZXcnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgU2lnbkluVmlldyA9IGRlZmluZUNvbXBvbmVudCgnU2lnbkluVmlldycsIFsnZGVzY3JpcHRpb25BY3Rpb25Db250ZW50cycsICdmb290ZXJDb250ZW50J10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFNwYXJrbGluZSA9IGRlZmluZUNvbXBvbmVudCgnU3BhcmtsaW5lJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFNwaW5uZXIgPSBkZWZpbmVDb21wb25lbnQoJ1NwaW5uZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgU3RyaXBlRmlsZVVwbG9hZGVyID0gZGVmaW5lQ29tcG9uZW50KCdTdHJpcGVGaWxlVXBsb2FkZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgU3dpdGNoID0gZGVmaW5lQ29tcG9uZW50KCdTd2l0Y2gnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYkxpc3QgPSBkZWZpbmVDb21wb25lbnQoJ1RhYkxpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFiUGFuZWwgPSBkZWZpbmVDb21wb25lbnQoJ1RhYlBhbmVsJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYlBhbmVscyA9IGRlZmluZUNvbXBvbmVudCgnVGFiUGFuZWxzJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYiA9IGRlZmluZUNvbXBvbmVudCgnVGFiJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYmxlQm9keSA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVCb2R5JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYmxlQ2VsbCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVDZWxsJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYmxlRm9vdGVyID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUZvb3RlcicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJsZUhlYWQgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlSGVhZCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJsZUhlYWRlckNlbGwgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlSGVhZGVyQ2VsbCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnVGFibGUnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFibGVSb3cgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlUm93JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYnMgPSBkZWZpbmVDb21wb25lbnQoJ1RhYnMnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFza0xpc3RJdGVtID0gZGVmaW5lQ29tcG9uZW50KCdUYXNrTGlzdEl0ZW0nLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFza0xpc3QgPSBkZWZpbmVDb21wb25lbnQoJ1Rhc2tMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRleHRBcmVhID0gZGVmaW5lQ29tcG9uZW50KCdUZXh0QXJlYScsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGV4dEZpZWxkID0gZGVmaW5lQ29tcG9uZW50KCdUZXh0RmllbGQnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRvb2x0aXAgPSBkZWZpbmVDb21wb25lbnQoJ1Rvb2x0aXAnLCBbJ3RyaWdnZXInXSwgdHJ1ZSk7XG4iLCAiZXhwb3J0IGNvbnN0IFNES19WRVJTSU9OID0gJzkuMy4wJztcbiIsICJpbXBvcnQgaW52YXJpYW50IGZyb20gJ2ludmFyaWFudCc7XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgZ2V0SG9zdEVuZHBvaW50ID0gKCkgPT4ge1xuICAgIC8vIFRoaXMgaXMgZW5kcG9pbnQgaXMgY3JlYXRlZCBmcm9tIHRoZSBNZXNzYWdlUG9ydCB0cmFuc2ZlcnJlZCBmcm9tIHRoZSBob3N0IGVudlxuICAgIC8vIGFzIGEgcGFydCBvZiB0aGUgYGluaXRfZXh0ZW5zaW9uYCBtZXNzYWdlLlxuICAgIGNvbnN0IGhvc3RFbmRwb2ludCA9IGdsb2JhbFRoaXMuX19TdHJpcGVFeHRFeHBvcnRzPy5lbmRwb2ludDtcbiAgICBpbnZhcmlhbnQoaG9zdEVuZHBvaW50LCAnaG9zdEVuZHBvaW50IGhhcyBub3QgYmVlbiBpbml0aWFsaXplZCcpO1xuICAgIHJldHVybiBob3N0RW5kcG9pbnQ7XG59O1xuIiwgImltcG9ydCB7IGdldEhvc3RFbmRwb2ludCB9IGZyb20gJy4uL19lbmRwb2ludCc7XG5leHBvcnQgY29uc3Qgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5ID0gYXN5bmMgKCkgPT4gZ2V0SG9zdEVuZHBvaW50KClcbiAgICAuY2FsbC5zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkoKVxuICAgIC50aGVuKChzdXBwb3J0ZWQpID0+IHN1cHBvcnRlZClcbiAgICAuY2F0Y2goKCkgPT4gZmFsc2UpO1xuIiwgImltcG9ydCB7IGdldEhvc3RFbmRwb2ludCB9IGZyb20gJy4uL19lbmRwb2ludCc7XG5leHBvcnQgY29uc3QgZmV0Y2hBcHBFbWJlZGRlZEtleSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCBnZXRIb3N0RW5kcG9pbnQoKS5jYWxsLmZldGNoQXBwRW1iZWRkZWRLZXkoKTtcbiAgICBpZiAoIWFwaUtleSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBmZXRjaCBhcHAgZW1iZWRkZWQga2V5Jyk7XG4gICAgfVxuICAgIHJldHVybiBhcGlLZXk7XG59O1xuIiwgImltcG9ydCB7IGZldGNoQXBwRW1iZWRkZWRLZXkgfSBmcm9tICcuL2ZldGNoQXBwRW1iZWRkZWRLZXknO1xuZXhwb3J0IGNvbnN0IGZldGNoVmlhRnJhbWUgPSBhc3luYyAodXJsLCBvcHRpb25zID0ge30pID0+IHtcbiAgICBjb25zdCBhcGlLZXkgPSBhd2FpdCBmZXRjaEFwcEVtYmVkZGVkS2V5KCk7XG4gICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgLi4ub3B0aW9ucy5oZWFkZXJzLFxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2FwaUtleX1gLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIGNvbnN0IGhlYWRlcnMgPSB7fTtcbiAgICByZXNwb25zZS5oZWFkZXJzLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICAgICAgaGVhZGVyc1trZXldID0gdmFsdWU7XG4gICAgfSk7XG4gICAgY29uc3Qgc2VyaWFsaXphYmxlUmVzcG9uc2UgPSB7XG4gICAgICAgIGpzb246IHVuZGVmaW5lZCxcbiAgICAgICAgYXJyYXlCdWZmZXI6IHVuZGVmaW5lZCxcbiAgICAgICAgaGVhZGVycyxcbiAgICAgICAgb2s6IHJlc3BvbnNlLm9rLFxuICAgICAgICByZWRpcmVjdGVkOiByZXNwb25zZS5yZWRpcmVjdGVkLFxuICAgICAgICBzdGF0dXM6IHJlc3BvbnNlLnN0YXR1cyxcbiAgICAgICAgc3RhdHVzVGV4dDogcmVzcG9uc2Uuc3RhdHVzVGV4dCxcbiAgICAgICAgdHlwZTogcmVzcG9uc2UudHlwZSxcbiAgICAgICAgdXJsOiByZXNwb25zZS51cmwsXG4gICAgfTtcbiAgICBzd2l0Y2ggKHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdDb250ZW50LVR5cGUnKSkge1xuICAgICAgICBjYXNlICdhcHBsaWNhdGlvbi9qc29uJzpcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVJlc3BvbnNlLmpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZVJlc3BvbnNlLmFycmF5QnVmZmVyID0gYXdhaXQgcmVzcG9uc2UuYXJyYXlCdWZmZXIoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4gc2VyaWFsaXphYmxlUmVzcG9uc2U7XG59O1xuIiwgImltcG9ydCB7IGdldEhvc3RFbmRwb2ludCB9IGZyb20gJy4uL19lbmRwb2ludCc7XG5leHBvcnQgY29uc3QgZmV0Y2hWaWFIb3N0ID0gYXN5bmMgKGVuY29kZWRVcmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwoZW5jb2RlZFVybCk7XG4gICAgcmV0dXJuIGdldEhvc3RFbmRwb2ludCgpLmNhbGwuc3RyaXBlQXBpRmV0Y2godXJsLnBhdGhuYW1lICsgdXJsLnNlYXJjaCwgb3B0aW9ucyk7XG59O1xuIiwgImltcG9ydCB7IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSB9IGZyb20gJy4vc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5JztcbmltcG9ydCB7IGZldGNoVmlhRnJhbWUgfSBmcm9tICcuL2ZldGNoVmlhRnJhbWUnO1xuaW1wb3J0IHsgZmV0Y2hWaWFIb3N0IH0gZnJvbSAnLi9mZXRjaFZpYUhvc3QnO1xubGV0IHNlbGVjdGVkU3RyaXBlQXBpRmV0Y2ggPSBudWxsO1xuZXhwb3J0IGNvbnN0IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoID0gYXN5bmMgKCkgPT4ge1xuICAgIGlmICghc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCkge1xuICAgICAgICBzZWxlY3RlZFN0cmlwZUFwaUZldGNoID0gKGF3YWl0IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSgpKVxuICAgICAgICAgICAgPyBmZXRjaFZpYUZyYW1lXG4gICAgICAgICAgICA6IGZldGNoVmlhSG9zdDtcbiAgICB9XG4gICAgcmV0dXJuIHNlbGVjdGVkU3RyaXBlQXBpRmV0Y2g7XG59O1xuIiwgImltcG9ydCB7IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoIH0gZnJvbSAnLi9hcGknO1xuLyoqXG4gKiBNYWtlcyBhbiBhdXRoZW50aWNhdGVkIEFQSSByZXF1ZXN0IHRvIHRoZSBTdHJpcGUgQVBJIHRocm91Z2ggdGhlIERhc2hib2FyZCBzZXNzaW9uLlxuICogQXV0b21hdGljYWxseSBzZWxlY3RzIHRoZSBiZXN0IGF2YWlsYWJsZSB0cmFuc3BvcnQgbWVjaGFuaXNtLlxuICpcbiAqIEBwYXJhbSBwYXRoIC0gVGhlIEFQSSBwYXRoIG9yIGZ1bGwgVVJMIHRvIHJlcXVlc3QuXG4gKiBAcGFyYW0gb3B0aW9ucyAtIE9wdGlvbmFsIHJlcXVlc3QgY29uZmlndXJhdGlvbi5cbiAqIEByZXR1cm5zIEEgcHJvbWlzZSByZXNvbHZpbmcgdG8gdGhlIHNlcmlhbGl6ZWQgcmVzcG9uc2UuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBzdHJpcGVBcGlGZXRjaCA9IGFzeW5jIChwYXRoLCBvcHRpb25zKSA9PiB7XG4gICAgY29uc3QgcHJlZmVycmVkRmV0Y2hNZXRob2QgPSBhd2FpdCBzZWxlY3RQcmVmZXJyZWRTdHJpcGVBcGlGZXRjaCgpO1xuICAgIHJldHVybiBwcmVmZXJyZWRGZXRjaE1ldGhvZChwYXRoLCBvcHRpb25zKTtcbn07XG4iLCAiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0SG9zdEVuZHBvaW50IH0gZnJvbSAnLi9fZW5kcG9pbnQnO1xuLyoqXG4gKiBBIFJlYWN0IGhvb2sgdGhhdCByZXR1cm5zIGEgY2FsbGJhY2sgdG8gcmVmcmVzaCB0aGUgRGFzaGJvYXJkIGRhdGEgc3Vycm91bmRpbmcgdGhlIGV4dGVuc2lvbi5cbiAqXG4gKiBAcmV0dXJucyBBIHN0YWJsZSBjYWxsYmFjayBmdW5jdGlvbiB0aGF0IHRyaWdnZXJzIGEgRGFzaGJvYXJkIGRhdGEgcmVmcmVzaCB3aGVuIGludm9rZWQuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCB1c2VSZWZyZXNoRGFzaGJvYXJkRGF0YSA9ICgpID0+IHtcbiAgICByZXR1cm4gUmVhY3QudXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgICAgICByZXR1cm4gZ2V0SG9zdEVuZHBvaW50KCkuY2FsbC5yZWZyZXNoRGFzaGJvYXJkRGF0YSgpO1xuICAgIH0sIFtdKTtcbn07XG4iLCAiLyogZXNsaW50LWRpc2FibGUgbWF4LWNsYXNzZXMtcGVyLWZpbGUgKi9cbmltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50JztcbmltcG9ydCB7IHN0cmlwZUFwaUZldGNoIH0gZnJvbSAnLi9hcGlGZXRjaCc7XG5jb25zdCBtYXRjaGVzU3RyaXBlS2V5ID0gL1twc11rXyh0ZXN0fGxpdmUpX1tBLVphLXowLTldKy87XG4vKiogQGludGVybmFsICovXG5jbGFzcyBTdHJpcGVBcHBzSHR0cFJlc3BvbnNlIHtcbiAgICBjb25zdHJ1Y3RvcihyZXNwKSB7XG4gICAgICAgIHRoaXMuX3Jlc3AgPSByZXNwO1xuICAgIH1cbiAgICBnZXRIZWFkZXJzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcC5oZWFkZXJzO1xuICAgIH1cbiAgICBnZXRTdGF0dXNDb2RlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcC5zdGF0dXM7XG4gICAgfVxuICAgIGdldFJhd1Jlc3BvbnNlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVzcDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICB0b1N0cmVhbSgpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdHJlYW1zIGhhdmUgbm90IGJlZW4gaW1wbGVtZW50ZWQgaW4gdGhlIFN0cmlwZSBIVFRQIGNsaWVudCcpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXdyYXBwZXItb2JqZWN0LXR5cGVzXG4gICAgdG9KU09OKCkge1xuICAgICAgICBjb25zdCB7IGpzb24gfSA9IHRoaXMuX3Jlc3A7XG4gICAgICAgIGlmIChqc29uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1Jlc3BvbnNlIGJvZHkgdW5kZWZpbmVkJykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqc29uKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8qKlxuICogQW4gSFRUUCBjbGllbnQgY29tcGF0aWJsZSB3aXRoIGBzdHJpcGUtbm9kZWAgdGhhdCByb3V0ZXMgQVBJIHJlcXVlc3RzIHRocm91Z2ggdGhlIERhc2hib2FyZCBzZXNzaW9uLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY2xhc3MgU3RyaXBlQXBwc0h0dHBDbGllbnQge1xuICAgIGNvbnN0cnVjdG9yKGZldGNoKSB7XG4gICAgICAgIHRoaXMuX2ZldGNoID0gZmV0Y2g7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjbGFzcy1tZXRob2RzLXVzZS10aGlzXG4gICAgZ2V0Q2xpZW50TmFtZSgpIHtcbiAgICAgICAgcmV0dXJuICdzdHJpcGUtdWktZXh0ZW5zaW9uJztcbiAgICB9XG4gICAgYXN5bmMgbWFrZVJlcXVlc3QoaG9zdCwgcG9ydCwgcGF0aCwgbWV0aG9kLCBoZWFkZXJzLCByZXF1ZXN0RGF0YSwgcHJvdG9jb2wsIF90aW1lb3V0KSB7XG4gICAgICAgIGludmFyaWFudChwcm90b2NvbCA9PT0gJ2h0dHBzJywgJ011c3QgdXNlIGh0dHBzIGNvbm5lY3Rpb25zIGluIFVJIGV4dGVuc2lvbnMnKTtcbiAgICAgICAgY29uc3QgZmV0Y2hPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgaGVhZGVycyxcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlcXVlc3REYXRhKSB7XG4gICAgICAgICAgICBmZXRjaE9wdGlvbnMuYm9keSA9IHJlcXVlc3REYXRhO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGF1dGhIZWFkZXIgPSBoZWFkZXJzLkF1dGhvcml6YXRpb247XG4gICAgICAgIGlmIChhdXRoSGVhZGVyICYmIG1hdGNoZXNTdHJpcGVLZXkudGVzdChhdXRoSGVhZGVyKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdEbyBub3QgdXNlIGFjdHVhbCBzdHJpcGUga2V5cyB3aGVuIHVzaW5nIHRoZSBTdHJpcGUgSlMgQVBJIGNsaWVudCB3aXRoIFVJIGV4dGVzaW9ucy5cXG5cXG4gSW5zdGVhZCwgdXNlIGBTVFJJUEVfQVBJX0tFWWAgZnJvbSBgQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2h0dHBfY2xpZW50YCBhcyBhIHBsYWNlaG9sZGVyLicpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwocGF0aCwgYCR7cHJvdG9jb2x9Oi8vJHtob3N0fWApO1xuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5fZmV0Y2godXJsLnRvU3RyaW5nKCksIGZldGNoT3B0aW9ucyk7XG4gICAgICAgIC8vIFRPRE86IEFkZCBzdXBwb3J0IGZvciB0aW1lb3V0cy5cbiAgICAgICAgcmV0dXJuIG5ldyBTdHJpcGVBcHBzSHR0cFJlc3BvbnNlKHJlc3ApO1xuICAgIH1cbn1cbi8qKlxuICogQSBwbGFjZWhvbGRlciBBUEkga2V5IHRvIHBhc3MgdG8gYHN0cmlwZS1ub2RlYCB3aGVuIHVzaW5nIHRoZSBleHRlbnNpb24gSFRUUCBjbGllbnQuXG4gKiBUaGUgYWN0dWFsIGF1dGhlbnRpY2F0aW9uIGlzIGhhbmRsZWQgYnkgdGhlIERhc2hib2FyZCBzZXNzaW9uLlxuICpcbiAqICoqRG8gTk9UIGNoYW5nZSB0aGlzIHN0cmluZyoqIHdpdGhvdXQgYSBkZXByZWNhdGlvbiBwbGFuIFx1MjAxNCB0aGUgRGFzaGJvYXJkIHJ1bnRpbWUgdmFsaWRhdGVzXG4gKiB0aGlzIGV4YWN0IHZhbHVlIGFuZCB3aWxsIHRocm93IGlmIGl0IGRpZmZlcnMuXG4gKiBAc2VlIG1hbmFnZS9mcm9udGVuZC9zcmMvdGFpbG9yL2V4dGVuc2lvbnMvaG9zdC9hcGlfZmV0Y2guanNcbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IFNUUklQRV9BUElfS0VZID0gJ0RPX05PVF9QQVNTX0FfUkVBTF9BUElfS0VZJztcbi8qKlxuICogQ3JlYXRlcyBhIHByZS1jb25maWd1cmVkIHtAbGluayBTdHJpcGVBcHBzSHR0cENsaWVudH0gaW5zdGFuY2UgdXNpbmcgdGhlIGRlZmF1bHQgQVBJIGZldGNoLlxuICpcbiAqIEByZXR1cm5zIEEgbmV3IGBTdHJpcGVBcHBzSHR0cENsaWVudGAgaW5zdGFuY2UuXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVhdGVIdHRwQ2xpZW50ID0gKCkgPT4gbmV3IFN0cmlwZUFwcHNIdHRwQ2xpZW50KHN0cmlwZUFwaUZldGNoKTtcbi8qKlxuICogVGhlIHN0YW5kYXJkIEhUVFAgaGVhZGVyIG5hbWUgdXNlZCBmb3IgYXV0aG9yaXphdGlvbi5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEFVVEhPUklaQVRJT05fSEVBREVSID0gJ0F1dGhvcml6YXRpb24nO1xuLyoqXG4gKiBUaGUgcHJlLWJ1aWx0IGF1dGhvcml6YXRpb24gaGVhZGVyIHZhbHVlIHVzaW5nIHtAbGluayBTVFJJUEVfQVBJX0tFWX0uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjb25zdCBBVVRIT1JJWkFUSU9OX1ZBTFVFID0gYEJlYXJlciAke1NUUklQRV9BUElfS0VZfWA7XG4iLCAiaW1wb3J0IHsgY3JlYXRlSHR0cENsaWVudCB9IGZyb20gJy4uL2h0dHBDbGllbnQnO1xuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSAoeyBob3N0LCBwb3J0IH0pID0+IGFzeW5jIChwYXlsb2FkKSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChgaHR0cHM6Ly8ke2hvc3R9OiR7cG9ydH0vdjEvYXBwcy9hcHBfZW1iZWRkZWRfYmFja2VuZF9zaWduYXR1cmVgKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgncGF5bG9hZCcsIEpTT04uc3RyaW5naWZ5KHsgLi4ucGF5bG9hZCB9KSk7XG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2luY2x1ZGVfb25seVtdJywgJ3NpZ25hdHVyZScpO1xuICAgIGNvbnN0IGNsaWVudCA9IGNyZWF0ZUh0dHBDbGllbnQoKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGNsaWVudC5tYWtlUmVxdWVzdChob3N0LCBwb3J0LCB1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoLCAnR0VUJywge30sIG51bGwsICdodHRwcycpO1xuICAgIHJldHVybiByZXNwb25zZVxuICAgICAgICAudGhlbigocikgPT4gci50b0pTT04oKSlcbiAgICAgICAgLnRoZW4oKGRhdGEpID0+IGRhdGEuc2lnbmF0dXJlKTtcbn07XG4iLCAiY29uc3QgZGVmYXVsdENvbm5lY3Rpb25TZXR0aW5ncyA9IHtcbiAgICBob3N0OiAnYXBpLnN0cmlwZS5jb20nLFxuICAgIHBvcnQ6IDQ0Myxcbn07XG4vKiogQGludGVybmFsICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLW11dGFibGUtZXhwb3J0c1xuZXhwb3J0IGxldCBjb25uZWN0aW9uU2V0dGluZ3MgPSBkZWZhdWx0Q29ubmVjdGlvblNldHRpbmdzO1xuLyoqIEBpbnRlcm5hbCAqL1xuZXhwb3J0IGNvbnN0IHNldENvbm5lY3Rpb25TZXR0aW5ncyA9IChzZXR0aW5ncykgPT4ge1xuICAgIGNvbm5lY3Rpb25TZXR0aW5ncyA9IHtcbiAgICAgICAgLi4uZGVmYXVsdENvbm5lY3Rpb25TZXR0aW5ncyxcbiAgICAgICAgLi4uc2V0dGluZ3MsXG4gICAgfTtcbn07XG4iLCAiaW1wb3J0IHsgY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseSB9IGZyb20gJy4vc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHknO1xuaW1wb3J0IHsgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5IH0gZnJvbSAnLi9hcGkvc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5JztcbmltcG9ydCB7IGNvbm5lY3Rpb25TZXR0aW5ncyB9IGZyb20gJy4vc2lnbmF0dXJlL2Nvbm5lY3Rpb25TZXR0aW5ncyc7XG5pbXBvcnQgeyBnZXRIb3N0RW5kcG9pbnQgfSBmcm9tICcuL19lbmRwb2ludCc7XG4vKiogQHB1YmxpYyAqL1xuZXhwb3J0IGNvbnN0IGZldGNoU3RyaXBlU2lnbmF0dXJlID0gYXN5bmMgKGFkZGl0aW9uYWxQYXlsb2FkKSA9PiB7XG4gICAgaWYgKGF3YWl0IHN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSgpKSB7XG4gICAgICAgIGNvbnN0IGZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkgPSBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5KGNvbm5lY3Rpb25TZXR0aW5ncyk7XG4gICAgICAgIHJldHVybiBmZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5KGFkZGl0aW9uYWxQYXlsb2FkKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBnZXRIb3N0RW5kcG9pbnQoKS5jYWxsLmZldGNoU3RyaXBlU2lnbmF0dXJlKGFkZGl0aW9uYWxQYXlsb2FkKTtcbiAgICB9XG59O1xuIiwgImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN5bmNFeHRlcm5hbFN0b3JlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUm91dGVyQ29udGV4dCB9IGZyb20gJy4vaW50ZXJuYWwvQXBwUm91dGVyQ29udGV4dCc7XG5pbXBvcnQgeyBnZXRFeHRSb3V0ZXIgfSBmcm9tICcuL2ludGVybmFsL2dldEV4dFJvdXRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXNDb25maWcgfSBmcm9tICcuL2ludGVybmFsL3VzZVJvdXRlc0NvbmZpZyc7XG4vKipcbiAqIFJlbmRlcnMgdGhlIHZpZXcgZGVmaW5lZCBieSB0aGUgYHJvdXRlYCBlbnRyeSB3aG9zZSBwYXRoIHBhdHRlcm4gbWF0Y2hlc1xuICogdGhlIGN1cnJlbnQgVVJMLlxuICpcbiAqIFBsYWNlIGl0IGluIHlvdXIgY29tcG9uZW50IGltcGxlbWVudGluZyB0aGUgYHN0cmlwZS5kYXNoYm9hcmQuZnVsbHBhZ2VgIHZpZXdwb3J0LlxuICpcbiAqIFJlcXVpcmVzIGEgTmF2aWdhdGlvblByb3ZpZGVyIGhpZ2hlciB1cCBpbiB0aGUgUmVhY3QgdHJlZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZG9jcy5zdHJpcGUuY29tL3N0cmlwZS1hcHBzL3JvdXRpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIEFwcFJvdXRlcih7IGNvbnRleHQsIHJlZGlyZWN0T25Ob3RGb3VuZCB9KSB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0RXh0Um91dGVyKCk7XG4gICAgY29uc3QgY29uZmlnID0gdXNlUm91dGVzQ29uZmlnKCk7XG4gICAgY29uc3QgaHJlZiA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHJvdXRlci5saXN0ZW5Ub0hyZWYsIHJvdXRlci5nZXRIcmVmKTtcbiAgICBjb25zdCBpc0hyZWZLbm93biA9IGhyZWYgIT09IHVuZGVmaW5lZDtcbiAgICBjb25zdCBtYXRjaGVkUm91dGUgPSBpc0hyZWZLbm93blxuICAgICAgICA/IHJvdXRlci5nZXRNYXRjaGVkUm91dGUoY29uZmlnLCBocmVmKVxuICAgICAgICA6IG51bGw7XG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgaWYgKCFpc0hyZWZLbm93bilcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCFtYXRjaGVkUm91dGUgJiYgcmVkaXJlY3RPbk5vdEZvdW5kKSB7XG4gICAgICAgICAgICByb3V0ZXIuc2V0Um91dGUoY29uZmlnLCByZWRpcmVjdE9uTm90Rm91bmQsIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbaXNIcmVmS25vd24sIG1hdGNoZWRSb3V0ZSwgcm91dGVyLCBjb25maWcsIHJlZGlyZWN0T25Ob3RGb3VuZF0pO1xuICAgIGlmICghaXNIcmVmS25vd24gfHwgIW1hdGNoZWRSb3V0ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgeyBrZXk6IG5hbWUsIHJvdXRlUGFyYW1zLCByb3V0ZURlZmluaXRpb24gfSA9IG1hdGNoZWRSb3V0ZTtcbiAgICBjb25zdCB7IHJlbmRlciB9ID0gcm91dGVEZWZpbml0aW9uO1xuICAgIHJldHVybiAoX2pzeChBcHBSb3V0ZXJDb250ZXh0LlByb3ZpZGVyLCB7IHZhbHVlOiB7IG5hbWUsIHJvdXRlUGFyYW1zIH0sIGNoaWxkcmVuOiByZW5kZXIocm91dGVQYXJhbXMsIGNvbnRleHQpIH0pKTtcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IEFwcFJvdXRlckNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBSb3V0ZXNDb25maWdDb250ZXh0IH0gZnJvbSAnLi9Sb3V0ZXNDb25maWdDb250ZXh0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXNDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnID0gdXNlQ29udGV4dChSb3V0ZXNDb25maWdDb250ZXh0KTtcbiAgICBpZiAoIWNvbmZpZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05hdmlnYXRpb25Qcm92aWRlciBpcyBub3QgaW5pdGlhbGlzZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiBjb25maWc7XG59XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmV4cG9ydCBjb25zdCBSb3V0ZXNDb25maWdDb250ZXh0ID0gY3JlYXRlQ29udGV4dChudWxsKTtcbiIsICJpbXBvcnQgeyBqc3ggYXMgX2pzeCB9IGZyb20gXCJyZWFjdC9qc3gtcnVudGltZVwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VNZW1vIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RXh0Um91dGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9nZXRFeHRSb3V0ZXInO1xuaW1wb3J0IHsgUm91dGVzQ29uZmlnQ29udGV4dCB9IGZyb20gJy4vaW50ZXJuYWwvUm91dGVzQ29uZmlnQ29udGV4dCc7XG4vKipcbiAqIE5hdmlnYXRpb25Qcm92aWRlciBpcyB0aGUgcm9vdCBjb21wb25lbnQgcmVxdWlyZWQgYnkgYWxsIEFQSXMgZXhwb3NlZFxuICogZnJvbSBAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvbmF2aWdhdGlvbi4gSXQgYWNjZXB0cyB0aGUgcm91dGUgY29uZmlnIHByb2R1Y2VkXG4gKiBieSBgY3JlYXRlUm91dGVzYC5cbiAqXG4gKiBQbGFjZSBpdCBhYm92ZSBBcHBSb3V0ZXIgYW5kL29yIGFueSBjb21wb25lbnRzIHRoYXQgdXNlIHRoZSBuYXZpZ2F0aW9uIEFQSXMuXG4gKlxuICogQHNlZSBodHRwczovL2RvY3Muc3RyaXBlLmNvbS9zdHJpcGUtYXBwcy9yb3V0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBOYXZpZ2F0aW9uUHJvdmlkZXIocHJvcHMpIHtcbiAgICBjb25zdCB7IHJvdXRlcywgY2hpbGRyZW4gfSA9IHByb3BzO1xuICAgIGNvbnN0IHJvdXRlciA9IGdldEV4dFJvdXRlcigpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHVzZU1lbW8oKCkgPT4gcm91dGVyLnZhbGlkYXRlUm91dGVzKHJvdXRlcyksIFtyb3V0ZXIsIHJvdXRlc10pO1xuICAgIHVzZUVmZmVjdCgoKSA9PiByb3V0ZXIucmVnaXN0ZXJSb3V0ZXMoY29uZmlnKSwgW3JvdXRlciwgY29uZmlnXSk7XG4gICAgcmV0dXJuIChfanN4KFJvdXRlc0NvbmZpZ0NvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IGNvbmZpZywgY2hpbGRyZW46IGNoaWxkcmVuIH0pKTtcbn1cbiIsICJpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRFeHRSb3V0ZXIgfSBmcm9tICcuL2ludGVybmFsL2dldEV4dFJvdXRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXNDb25maWcgfSBmcm9tICcuL2ludGVybmFsL3VzZVJvdXRlc0NvbmZpZyc7XG4vKipcbiAqIFBlcmZvcm1zIGFuIGltbWVkaWF0ZSBuYXZpZ2F0aW9uIHRvIGEgc3BlY2lmaWVkIHJvdXRlIGJ5IHJlcGxhY2luZ1xuICogdGhlIFVSTCBpbiBoaXN0b3J5IHNvIHRoZSB1c2VyIG5ldmVyIHNlZXMgdGhlIGludGVybWVkaWF0ZSByb3V0ZS5cbiAqXG4gKiBSZXF1aXJlcyBhIE5hdmlnYXRpb25Qcm92aWRlciBoaWdoZXIgdXAgaW4gdGhlIFJlYWN0IHRyZWUuXG4gKlxuICogQHNlZSBodHRwczovL2RvY3Muc3RyaXBlLmNvbS9zdHJpcGUtYXBwcy9yb3V0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBSZWRpcmVjdCh7IHJvdXRlIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRFeHRSb3V0ZXIoKTtcbiAgICBjb25zdCBjb25maWcgPSB1c2VSb3V0ZXNDb25maWcoKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICByb3V0ZXIuc2V0Um91dGUoY29uZmlnLCByb3V0ZSwgeyByZXBsYWNlOiB0cnVlIH0pO1xuICAgIH0sIFtyb3V0ZSwgcm91dGVyLCBjb25maWddKTtcbiAgICByZXR1cm4gbnVsbDtcbn1cbiIsICJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQXBwUm91dGVyQ29udGV4dCB9IGZyb20gJy4vQXBwUm91dGVyQ29udGV4dCc7XG5leHBvcnQgZnVuY3Rpb24gdXNlQXBwUm91dGVyU3RhdGUoKSB7XG4gICAgY29uc3Qgc3RhdGUgPSB1c2VDb250ZXh0KEFwcFJvdXRlckNvbnRleHQpO1xuICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdBcHBSb3V0ZXIgaXMgbm90IGluaXRpYWxpc2VkLicpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdGU7XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRFeHRSb3V0ZXIgfSBmcm9tICcuL2ludGVybmFsL2dldEV4dFJvdXRlcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXNDb25maWcgfSBmcm9tICcuL2ludGVybmFsL3VzZVJvdXRlc0NvbmZpZyc7XG4vKipcbiAqIFN0b3JlcyB0aGUgb3JpZ2luYWwgcm91dGUgZGVzY3JpcHRvciBmb3IgZWFjaCBBcHBSb3V0ZSBjcmVhdGVkIGJ5IGNyZWF0ZUFwcFJvdXRlLFxuICogZW5hYmxpbmcgbmF2aWdhdGVUb0FwcFJvdXRlIHRvIHJlc29sdmUgYW4gQXBwUm91dGUgYmFjayB0byBpdHMga2V5ICsgcGFyYW1zXG4gKi9cbmNvbnN0IHJvdXRlRGVzY3JpcHRvcnMgPSBuZXcgV2Vha01hcCgpO1xuLyoqXG4gKiBSZXR1cm5zIG1ldGhvZHMgZm9yIG5hdmlnYXRpbmcgdG8gZnVsbC1wYWdlIHJvdXRlcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZG9jcy5zdHJpcGUuY29tL3N0cmlwZS1hcHBzL3JvdXRpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZU5hdmlnYXRpb24oKSB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0RXh0Um91dGVyKCk7XG4gICAgY29uc3QgY29uZmlnID0gdXNlUm91dGVzQ29uZmlnKCk7XG4gICAgY29uc3QgbmF2aWdhdGVUb0FwcFJvdXRlID0gdXNlQ2FsbGJhY2soKHJvdXRlT3JBcHBSb3V0ZSwgb3B0aW9ucykgPT4ge1xuICAgICAgICBjb25zdCByb3V0ZSA9IGBrZXlgIGluIHJvdXRlT3JBcHBSb3V0ZVxuICAgICAgICAgICAgPyByb3V0ZU9yQXBwUm91dGVcbiAgICAgICAgICAgIDogcm91dGVEZXNjcmlwdG9ycy5nZXQocm91dGVPckFwcFJvdXRlKTtcbiAgICAgICAgaWYgKCFyb3V0ZSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgcm91dGVyLnNldFJvdXRlKGNvbmZpZywgcm91dGUsIG9wdGlvbnMpO1xuICAgIH0sIFtyb3V0ZXIsIGNvbmZpZ10pO1xuICAgIGNvbnN0IGNyZWF0ZUFwcFJvdXRlID0gdXNlQ2FsbGJhY2soKHJvdXRlQ29uZmlnKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSByb3V0ZUNvbmZpZztcbiAgICAgICAgY29uc3QgZ2xvYiA9IHJvdXRlci5jcmVhdGVQYXRoU2VnbWVudHMoY29uZmlnLCByb3V0ZUNvbmZpZyk7XG4gICAgICAgIGNvbnN0IHJvdXRlID0ge1xuICAgICAgICAgICAgbmFtZTogJ2Z1bGxQYWdlR2xvYicsXG4gICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICBnbG9iLFxuICAgICAgICAgICAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICAgIHJvdXRlRGVzY3JpcHRvcnMuc2V0KHJvdXRlLCByb3V0ZUNvbmZpZyk7XG4gICAgICAgIHJldHVybiByb3V0ZTtcbiAgICB9LCBbY29uZmlnLCByb3V0ZXJdKTtcbiAgICByZXR1cm4geyBuYXZpZ2F0ZVRvQXBwUm91dGUsIGNyZWF0ZUFwcFJvdXRlIH07XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN5bmNFeHRlcm5hbFN0b3JlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgZ2V0RXh0Um91dGVyIH0gZnJvbSAnLi9pbnRlcm5hbC9nZXRFeHRSb3V0ZXInO1xuY29uc3QgRU1QVFlfU0VBUkNIX1BBUkFNUyA9IHt9O1xuZnVuY3Rpb24gcmVhZCgpIHtcbiAgICByZXR1cm4gZ2V0RXh0Um91dGVyKCkuZ2V0U2VhcmNoUGFyYW1zKCkgPz8gRU1QVFlfU0VBUkNIX1BBUkFNUztcbn1cbmZ1bmN0aW9uIHdyaXRlKHNlYXJjaFBhcmFtcywgcmVwbGFjZSkge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldEV4dFJvdXRlcigpO1xuICAgIGNvbnN0IGhyZWYgPSByb3V0ZXIuZ2V0SHJlZigpO1xuICAgIC8vIFRoZSBocmVmIGNhbiBiZSB1bmRlZmluZWQgYmVmb3JlIGl0cyB2YWx1ZSBpcyByZWNlaXZlZCBmcm9tIEhvc3QuXG4gICAgLy8gSXQncyBzYWZlIHRvIGV4aXQsIGFzIEFwcFJvdXRlciBkZWZlcnMgcm91dGUgbWF0Y2hpbmcgdW50aWwgdGhlIGhyZWYgaXMga25vd24uXG4gICAgaWYgKCFocmVmKVxuICAgICAgICByZXR1cm47XG4gICAgcm91dGVyLnNldEhyZWYoaHJlZiwge1xuICAgICAgICByZXBsYWNlLFxuICAgICAgICBzZWFyY2hQYXJhbXMsXG4gICAgfSk7XG59XG5mdW5jdGlvbiBzdWJzY3JpYmUobGlzdGVuZXIpIHtcbiAgICByZXR1cm4gZ2V0RXh0Um91dGVyKCkubGlzdGVuVG9IcmVmKGxpc3RlbmVyKTtcbn1cbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIHJlcGxhY2U6IHRydWUsXG59O1xuLyoqXG4gKiBSZWFkcyBhbmQgd3JpdGVzIHRoZSBjdXJyZW50IHJvdXRlJ3Mgc2VhcmNoIHBhcmFtZXRlcnMuXG4gKlxuICogV29ya3MgbGlrZSBgdXNlU3RhdGVgOiBpdCByZXR1cm5zIGEgYFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc11gIHR1cGxlLlxuICogVGhlIHNldHRlciBhY2NlcHRzIGVpdGhlciB0aGUgbmV4dCBzZWFyY2ggcGFyYW1zIG9yIGFuIHVwZGF0ZXIgZnVuY3Rpb24gdGhhdFxuICogcmVjZWl2ZXMgdGhlIGN1cnJlbnQgb25lcy4gVXBkYXRlZCBzZWFyY2ggcGFyYW1zIGFyZSBhcHBlbmRlZCB0byB0aGUgY3VycmVudFxuICogcm91dGUsIHJlcGxhY2luZyB0aGUgY3VycmVudCBlbnRyeSBpbiB0aGUgaGlzdG9yeSBzdGFjayByYXRoZXIgdGhhbiBwdXNoaW5nIGFcbiAqIG5ldyBvbmUuXG4gKlxuICogQHNlZSBodHRwczovL2RvY3Muc3RyaXBlLmNvbS9zdHJpcGUtYXBwcy9yb3V0aW5nXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1c2VBbGxTZWFyY2hQYXJhbXMob3B0aW9ucykge1xuICAgIGNvbnN0IHsgcmVwbGFjZSB9ID0geyAuLi5kZWZhdWx0T3B0aW9ucywgLi4ub3B0aW9ucyB9O1xuICAgIGNvbnN0IHNlYXJjaFBhcmFtcyA9IHVzZVN5bmNFeHRlcm5hbFN0b3JlKHN1YnNjcmliZSwgcmVhZCk7XG4gICAgY29uc3Qgc2V0U2VhcmNoUGFyYW1zID0gdXNlQ2FsbGJhY2soKG5leHQpID0+IHdyaXRlKHR5cGVvZiBuZXh0ID09PSAnZnVuY3Rpb24nID8gbmV4dChyZWFkKCkpIDogbmV4dCwgcmVwbGFjZSksIFtyZXBsYWNlXSk7XG4gICAgcmV0dXJuIFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc107XG59XG4iLCAiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VBbGxTZWFyY2hQYXJhbXMgfSBmcm9tICcuL3VzZUFsbFNlYXJjaFBhcmFtcyc7XG5leHBvcnQgZnVuY3Rpb24gdXNlU2VhcmNoUGFyYW0obmFtZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IFtzZWFyY2hQYXJhbXMsIHNldFNlYXJjaFBhcmFtc10gPSB1c2VBbGxTZWFyY2hQYXJhbXMob3B0aW9ucyk7XG4gICAgY29uc3QgdXBkYXRlID0gdXNlQ2FsbGJhY2soKG5leHQpID0+IHNldFNlYXJjaFBhcmFtcygocHJldmlvdXMpID0+ICh7XG4gICAgICAgIC4uLnByZXZpb3VzLFxuICAgICAgICBbbmFtZV06IHR5cGVvZiBuZXh0ID09PSAnZnVuY3Rpb24nID8gbmV4dChwcmV2aW91c1tuYW1lXSkgOiBuZXh0LFxuICAgIH0pKSwgW25hbWUsIHNldFNlYXJjaFBhcmFtc10pO1xuICAgIHJldHVybiBbc2VhcmNoUGFyYW1zW25hbWVdLCB1cGRhdGVdO1xufVxuIiwgIi8qKlxuICogU2lnbmVkIGZldGNoIGhlbHBlciBmb3IgdGhlIFVJIGV4dGVuc2lvbiBcdTIxOTIgYXBwIGJhY2tlbmQuXG4gKiBFdmVyeSByZXF1ZXN0IGlzIHNpZ25lZCB3aXRoIHRoZSBhcHAgc2VjcmV0IHZpYSBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpIGFuZFxuICogY2FycmllcyBhY2NvdW50X2lkL3VzZXJfaWQgc28gdGhlIGJhY2tlbmQgY2FuIHZlcmlmeSBhbmQgc2NvcGUgaXQuXG4gKi9cbmltcG9ydCB7IGZldGNoU3RyaXBlU2lnbmF0dXJlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuXG5jb25zdCBBUElfQkFTRSA9XG4gICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiAod2luZG93IGFzIHsgX19GTF9BUFBfQVBJX0JBU0VfXz86IHN0cmluZyB9KS5fX0ZMX0FQUF9BUElfQkFTRV9fKSB8fFxuICAnaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvJztcblxudHlwZSBVc2VyQ29udGV4dCA9IEV4dGVuc2lvbkNvbnRleHRWYWx1ZVsndXNlckNvbnRleHQnXTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25lZFJlcXVlc3Q8VCA9IHVua25vd24+KFxuICBwYXRoOiBzdHJpbmcsXG4gIHVzZXJDb250ZXh0OiBVc2VyQ29udGV4dCxcbiAgYm9keT86IFJlY29yZDxzdHJpbmcsIHVua25vd24+LFxuKTogUHJvbWlzZTxUPiB7XG4gIGNvbnN0IHNpZ25hdHVyZVBheWxvYWQgPSB7XG4gICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQuYWNjb3VudC5pZCxcbiAgICAvLyBPbWl0IHVzZXJfaWQgd2hlbiBpdCBtYXRjaGVzIHRoZSBhY2NvdW50IGlkIChzaWduZWQgcGF5bG9hZCBydWxlKS5cbiAgICB1c2VyX2lkOiB1c2VyQ29udGV4dC5hY2NvdW50LmlkID09PSB1c2VyQ29udGV4dC5pZCA/IHVuZGVmaW5lZCA6IHVzZXJDb250ZXh0LmlkLFxuICB9O1xuICBjb25zdCBzaWduYXR1cmUgPSBhd2FpdCBmZXRjaFN0cmlwZVNpZ25hdHVyZSgpO1xuICBjb25zdCBwYXlsb2FkID0geyAuLi5zaWduYXR1cmVQYXlsb2FkLCAuLi4oYm9keSA/PyB7fSkgfTtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7QVBJX0JBU0V9JHtwYXRofWAsIHtcbiAgICBtZXRob2Q6IGJvZHkgPyAnUE9TVCcgOiAnR0VUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgJ1N0cmlwZS1TaWduYXR1cmUnOiBzaWduYXR1cmUsXG4gICAgfSxcbiAgICBib2R5OiBib2R5ID8gSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkgOiB1bmRlZmluZWQsXG4gIH0pO1xuICBpZiAoIXJlcy5vaykge1xuICAgIGNvbnN0IGVyciA9IChhd2FpdCByZXMuanNvbigpLmNhdGNoKCgpID0+ICh7fSkpKSBhcyB7IGVycm9yPzogc3RyaW5nIH07XG4gICAgdGhyb3cgbmV3IEVycm9yKGVyci5lcnJvciB8fCBgUmVxdWVzdCBmYWlsZWQgKCR7cmVzLnN0YXR1c30pYCk7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKCkgYXMgUHJvbWlzZTxUPjtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFvQkEsVUFBSUEsYUFBWSxTQUFTLFdBQVcsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM1RCxZQUFJLE1BQXVDO0FBQ3pDLGNBQUksV0FBVyxRQUFXO0FBQ3hCLGtCQUFNLElBQUksTUFBTSw4Q0FBOEM7QUFBQSxVQUNoRTtBQUFBLFFBQ0Y7QUFFQSxZQUFJLENBQUMsV0FBVztBQUNkLGNBQUk7QUFDSixjQUFJLFdBQVcsUUFBVztBQUN4QixvQkFBUSxJQUFJO0FBQUEsY0FDVjtBQUFBLFlBRUY7QUFBQSxVQUNGLE9BQU87QUFDTCxnQkFBSSxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDNUIsZ0JBQUksV0FBVztBQUNmLG9CQUFRLElBQUk7QUFBQSxjQUNWLE9BQU8sUUFBUSxPQUFPLFdBQVc7QUFBRSx1QkFBTyxLQUFLO0FBQUEsY0FBYSxDQUFDO0FBQUEsWUFDL0Q7QUFDQSxrQkFB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QUE4QjtBQUFBLElBQzlCLDBCQUEwQjtBQUFBLElBQzFCLGdCQUFnQjtBQUFBLE1BQ2QsMkJBQTJCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFVBQ2I7QUFBQSxRQUNGO0FBQUEsUUFDQSxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLGFBQWE7QUFBQSxVQUNiLFlBQVk7QUFBQSxRQUNkO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxFQUNiOyIsCiAgIm5hbWVzIjogWyJpbnZhcmlhbnQiLCAiaW1wb3J0X3JlYWN0IiwgIl9qc3giLCAiaW52YXJpYW50IiwgImltcG9ydF9pbnZhcmlhbnQiLCAiZmV0Y2giLCAiaW52YXJpYW50IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9qc3hfcnVudGltZSIsICJzdGF0dXMiXQp9Cg==
