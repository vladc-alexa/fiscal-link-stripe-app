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
      user_id: userContext.id,
      account_id: userContext.account.id
    };
    const signature = await fetchStripeSignature();
    const payload = { ...signaturePayload, ...body ?? {} };
    const res = await fetch(`${API_BASE}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Stripe-Signature": signature
      },
      body: JSON.stringify(payload)
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.error || `Request failed (${res.status})`);
    }
    return res.json();
  }

  // src/views/Setup.tsx
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  var MAX_MESSAGE = 500;
  var safeMessage = (e) => {
    const msg = e instanceof Error ? e.message : String(e);
    return msg.length > MAX_MESSAGE ? `${msg.slice(0, MAX_MESSAGE)}\u2026` : msg;
  };
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
        setState({ kind: "error", message: safeMessage(e) });
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
        setActionError(safeMessage(e));
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
        setActionError(safeMessage(e));
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
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "medium", fontWeight: "bold" },
          children: "For an invoice ANAF accepts"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "xsmall" },
          children: "\u2022 Collect the buyer's billing address: Payment Links \u2192 Options \u2192 \u201CCollect billing address\u201D = Required (or set billing_address_collection=required on Checkout). Without street and city ANAF rejects the document (BR-10, BR-RO-080, BR-RO-090), so FiscalLink skips it and reports it here rather than filing an invalid invoice."
        }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(Box, {
          css: { marginTop: "xsmall" },
          children: "\u2022 For a company buyer, also collect their CIF: turn on tax ID collection or add a checkout custom field labelled CIF."
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
  var BUILD_TIME = "2026-09-22 11:48:07.661851995 +0000 UTC m=+1.499345349";
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
    "version": "0.1.6"
  };
  return __toCommonJS(manifest_exports);
})();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL2ludmFyaWFudC9icm93c2VyLmpzIiwgIm1hbmlmZXN0LmpzIiwgIi4uL3NyYy92aWV3cy9TZXR1cC50c3giLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91aS9pbmRleC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3ZlcnNpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9fZW5kcG9pbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvYXBpL2ZldGNoQXBwRW1iZWRkZWRLZXkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvZmV0Y2hWaWFGcmFtZS5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2FwaS9mZXRjaFZpYUhvc3QuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGkvc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2guanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9hcGlGZXRjaC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3V0aWxzL2NvbnRleHQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9odHRwQ2xpZW50LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlL2NyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay91dGlscy9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMvc2lnbmF0dXJlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvbmF2aWdhdGlvbi9BcHBSb3V0ZXIuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL2ludGVybmFsL0FwcFJvdXRlckNvbnRleHQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL2ludGVybmFsL3VzZVJvdXRlc0NvbmZpZy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vaW50ZXJuYWwvUm91dGVzQ29uZmlnQ29udGV4dC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vTmF2aWdhdGlvblByb3ZpZGVyLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9Ac3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvbmF2aWdhdGlvbi9SZWRpcmVjdC5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vaW50ZXJuYWwvdXNlQXBwUm91dGVyU3RhdGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL3VzZU5hdmlnYXRpb24uanMiLCAiLi4vbm9kZV9tb2R1bGVzL0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uL3VzZUFsbFNlYXJjaFBhcmFtcy5qcyIsICIuLi9ub2RlX21vZHVsZXMvQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL25hdmlnYXRpb24vdXNlU2VhcmNoUGFyYW0uanMiLCAiLi4vc3JjL2hlbHBlcnMvYmFja2VuZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTMtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogVXNlIGludmFyaWFudCgpIHRvIGFzc2VydCBzdGF0ZSB3aGljaCB5b3VyIHByb2dyYW0gYXNzdW1lcyB0byBiZSB0cnVlLlxuICpcbiAqIFByb3ZpZGUgc3ByaW50Zi1zdHlsZSBmb3JtYXQgKG9ubHkgJXMgaXMgc3VwcG9ydGVkKSBhbmQgYXJndW1lbnRzXG4gKiB0byBwcm92aWRlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgYnJva2UgYW5kIHdoYXQgeW91IHdlcmVcbiAqIGV4cGVjdGluZy5cbiAqXG4gKiBUaGUgaW52YXJpYW50IG1lc3NhZ2Ugd2lsbCBiZSBzdHJpcHBlZCBpbiBwcm9kdWN0aW9uLCBidXQgdGhlIGludmFyaWFudFxuICogd2lsbCByZW1haW4gdG8gZW5zdXJlIGxvZ2ljIGRvZXMgbm90IGRpZmZlciBpbiBwcm9kdWN0aW9uLlxuICovXG5cbnZhciBpbnZhcmlhbnQgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYSwgYiwgYywgZCwgZSwgZikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQgcmVxdWlyZXMgYW4gZXJyb3IgbWVzc2FnZSBhcmd1bWVudCcpO1xuICAgIH1cbiAgfVxuXG4gIGlmICghY29uZGl0aW9uKSB7XG4gICAgdmFyIGVycm9yO1xuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgICdNaW5pZmllZCBleGNlcHRpb24gb2NjdXJyZWQ7IHVzZSB0aGUgbm9uLW1pbmlmaWVkIGRldiBlbnZpcm9ubWVudCAnICtcbiAgICAgICAgJ2ZvciB0aGUgZnVsbCBlcnJvciBtZXNzYWdlIGFuZCBhZGRpdGlvbmFsIGhlbHBmdWwgd2FybmluZ3MuJ1xuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGFyZ3MgPSBbYSwgYiwgYywgZCwgZSwgZl07XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHsgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107IH0pXG4gICAgICApO1xuICAgICAgZXJyb3IubmFtZSA9ICdJbnZhcmlhbnQgVmlvbGF0aW9uJztcbiAgICB9XG5cbiAgICBlcnJvci5mcmFtZXNUb1BvcCA9IDE7IC8vIHdlIGRvbid0IGNhcmUgYWJvdXQgaW52YXJpYW50J3Mgb3duIGZyYW1lXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gaW52YXJpYW50O1xuIiwgIi8vIEFVVE9HRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG5cbi8vIFZpZXcgY29tcG9uZW50IGltcG9ydHMgXHUyMDE0IG9uZSBwZXIgdmlld3BvcnQgZGVjbGFyZWQgaW4gdWlfZXh0ZW5zaW9uLnZpZXdzXG5pbXBvcnQgU2V0dXAgZnJvbSAnLi4vc3JjL3ZpZXdzL1NldHVwJztcblxuLy8gRXhwb3NlcyB0aGUgU0RLIHZlcnNpb24gc28gdGhlIERhc2hib2FyZCBjYW4gdmVyaWZ5IGNvbXBhdGliaWxpdHlcbmV4cG9ydCAqIGZyb20gJ0BzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay92ZXJzaW9uJztcblxuLy8gTmFtZWQgZXhwb3J0cyBtYWtlIGVhY2ggdmlldyBjb21wb25lbnQgYWNjZXNzaWJsZSB0byB0aGUgRGFzaGJvYXJkIHJ1bnRpbWVcblxuZXhwb3J0IHsgXG4gIFNldHVwXG4gfTtcblxuLy8gVGltZXN0YW1wIGNoYW5nZXMgb24gZXZlcnkgZXhwb3J0LCBlbnN1cmluZyB0aGUgZGV2IHNlcnZlciBkZXRlY3RzIGEgcmVidWlsZFxuZXhwb3J0IGNvbnN0IEJVSUxEX1RJTUUgPSAnMjAyNi0wOS0yMiAxMTo0ODowNy42NjE4NTE5OTUgKzAwMDAgVVRDIG09KzEuNDk5MzQ1MzQ5JztcblxuLy8gQXBwIG1hbmlmZXN0IFx1MjAxNCBjb25zdW1lZCBieSB0aGUgRGFzaGJvYXJkIHRvIGNvbmZpZ3VyZSB0aGUgYXBwXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwiJHNjaGVtYVwiOiBcImh0dHBzOi8vc3RyaXBlLmNvbS9zdHJpcGUtYXBwLnNjaGVtYS5qc29uXCIsXG4gIFwiYWxsb3dlZF9yZWRpcmVjdF91cmlzXCI6IFtcbiAgICBcImh0dHBzOi8vc3RyaXBlLWFwcC5hdXRvYW5hZi5yby9vYXV0aC9jYWxsYmFja1wiXG4gIF0sXG4gIFwiY29uc3RhbnRzXCI6IHtcbiAgICBcIkFQSV9CQVNFXCI6IFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvXCJcbiAgfSxcbiAgXCJkaXN0cmlidXRpb25fdHlwZVwiOiBcInB1YmxpY1wiLFxuICBcImljb25cIjogXCIuL2ljb25zL2Zpc2NhbGxpbmtfaWNvbl8zMi5wbmdcIixcbiAgXCJpZFwiOiBcImNvbS5maXNjYWxsaW5rLmFuYWZcIixcbiAgXCJuYW1lXCI6IFwiRmlzY2FsTGluayBmb3IgQU5BRlwiLFxuICBcInBlcm1pc3Npb25zXCI6IFtcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJldmVudF9yZWFkXCIsXG4gICAgICBcInB1cnBvc2VcIjogXCJSZWNlaXZlcyBhcHAgZXZlbnRzIChjaGVja291dC5zZXNzaW9uLmNvbXBsZXRlZCkgZnJvbSBjb25uZWN0ZWQgbWVyY2hhbnQgYWNjb3VudHMgdG8gdHJpZ2dlciBSb21hbmlhbiBBTkFGIGUtaW52b2ljaW5nLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJjaGVja291dF9zZXNzaW9uX3JlYWRcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlJlYWRzIGNoZWNrb3V0IHNlc3Npb24gZGV0YWlscyAoY3VzdG9tZXIsIGxpbmUgaXRlbXMsIHRvdGFscykgdG8gZ2VuZXJhdGUgdGhlIEVOIDE2OTMxIC8gQ0lVUy1STyBVQkwgZS1pbnZvaWNlLlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcInBlcm1pc3Npb25cIjogXCJzZWNyZXRfd3JpdGVcIixcbiAgICAgIFwicHVycG9zZVwiOiBcIlN0b3JlcyB0aGUgbWVyY2hhbnQncyBPQXV0aCByZWZyZXNoIHRva2VuLCBGaXNjYWxMaW5rIEFQSSBrZXkgYW5kIEFOQUYgU1BWIGNyZWRlbnRpYWxzIGluIHRoZSBTdHJpcGUgU2VjcmV0IFN0b3JlIChhY2NvdW50IHNjb3BlKS5cIlxuICAgIH1cbiAgXSxcbiAgXCJwb3N0X2luc3RhbGxfYWN0aW9uXCI6IHtcbiAgICBcInR5cGVcIjogXCJleHRlcm5hbFwiLFxuICAgIFwidXJsXCI6IFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvL2luc3RhbGxlZFwiXG4gIH0sXG4gIFwic2FuZGJveF9pbnN0YWxsX2NvbXBhdGlibGVcIjogdHJ1ZSxcbiAgXCJzdHJpcGVfYXBpX2FjY2Vzc190eXBlXCI6IFwib2F1dGhcIixcbiAgXCJ1aV9leHRlbnNpb25cIjoge1xuICAgIFwiY29udGVudF9zZWN1cml0eV9wb2xpY3lcIjoge1xuICAgICAgXCJjb25uZWN0LXNyY1wiOiBbXG4gICAgICAgIFwiaHR0cHM6Ly9zdHJpcGUtYXBwLmF1dG9hbmFmLnJvL2FwaS9cIlxuICAgICAgXSxcbiAgICAgIFwicHVycG9zZVwiOiBcIlRoZSBGaXNjYWxMaW5rIGV4dGVuc2lvbiBjYWxscyB0aGUgRmlzY2FsTGluayBTdHJpcGUgQXBwIGJhY2tlbmQgdG8gc2F2ZSBjcmVkZW50aWFscywgcHJvdmlzaW9uIHRoZSB3ZWJob29rIGFuZCByZXBvcnQgY29ubmVjdGlvbiBzdGF0dXMuXCJcbiAgICB9LFxuICAgIFwidmlld3NcIjogW1xuICAgICAge1xuICAgICAgICBcImNvbXBvbmVudFwiOiBcIlNldHVwXCIsXG4gICAgICAgIFwidmlld3BvcnRcIjogXCJzdHJpcGUuZGFzaGJvYXJkLmRyYXdlci5kZWZhdWx0XCJcbiAgICAgIH1cbiAgICBdXG4gIH0sXG4gIFwidmVyc2lvblwiOiBcIjAuMS42XCJcbn07XG4iLCAiLyoqXG4gKiBGaXNjYWxMaW5rIGZvciBBTkFGIFx1MjAxNCBkYXNoYm9hcmQgc2V0dGluZ3Mgdmlldy5cbiAqXG4gKiBTdGF0ZSBtYWNoaW5lIHJlcXVpcmVkIGJ5IHRoZSBhcHAgc3BlYzpcbiAqICAgbG9hZGluZyAgIFx1MjE5MiBzcGlubmVyIHdoaWxlIGZldGNoaW5nIC9hcGkvc3RhdHVzXG4gKiAgIGVycm9yICAgICBcdTIxOTIgQmFubmVyIHdpdGggbWVzc2FnZSArIFJldHJ5IGJ1dHRvblxuICogICBlbXB0eSAgICAgXHUyMTkyIGNvbm5lY3Rpb24gZm9ybSAoRmlzY2FsTGluayBBUEkga2V5ICsgb3B0aW9uYWwgQU5BRiBTUFYgY3JlZGVudGlhbHMpXG4gKiAgIGNvbm5lY3RlZCBcdTIxOTIgc3RhdHVzIHN1bW1hcnkgKyBcIkVuYWJsZSB3ZWJob29rXCIgKyBEaXNjb25uZWN0XG4gKi9cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQge1xuICBCYW5uZXIsXG4gIEJveCxcbiAgQnV0dG9uLFxuICBJbmxpbmUsXG4gIFNwaW5uZXIsXG4gIFRleHRGaWVsZCxcbn0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL3VpJztcbmltcG9ydCB0eXBlIHsgRXh0ZW5zaW9uQ29udGV4dFZhbHVlIH0gZnJvbSAnQHN0cmlwZS91aS1leHRlbnNpb24tc2RrL2NvbnRleHQnO1xuaW1wb3J0IHsgc2lnbmVkUmVxdWVzdCB9IGZyb20gJy4uL2hlbHBlcnMvYmFja2VuZCc7XG5cbi8vIFRoZSBleHRlbnNpb24gaG9zdCByZWplY3RzIGFueSBzaW5nbGUgc3RyaW5nIHByb3AgbG9uZ2VyIHRoYW4gNTAwMCBjaGFyYWN0ZXJzLCBhbmQgYVxuLy8gYmFja2VuZCBlcnJvciBib2R5IGNhbiBiZSBhcmJpdHJhcmlseSBsb25nIFx1MjAxNCBjbGFtcCBiZWZvcmUgaXQgcmVhY2hlcyBhIGNvbXBvbmVudC5cbmNvbnN0IE1BWF9NRVNTQUdFID0gNTAwO1xuY29uc3Qgc2FmZU1lc3NhZ2UgPSAoZTogdW5rbm93bik6IHN0cmluZyA9PiB7XG4gIGNvbnN0IG1zZyA9IGUgaW5zdGFuY2VvZiBFcnJvciA/IGUubWVzc2FnZSA6IFN0cmluZyhlKTtcbiAgcmV0dXJuIG1zZy5sZW5ndGggPiBNQVhfTUVTU0FHRSA/IGAke21zZy5zbGljZSgwLCBNQVhfTUVTU0FHRSl9XHUyMDI2YCA6IG1zZztcbn07XG5cbmludGVyZmFjZSBTdGF0dXMge1xuICBpbnN0YWxsZWQ6IGJvb2xlYW47XG4gIGZpc2NhbExpbmtDb25uZWN0ZWQ6IGJvb2xlYW47XG4gIGFuYWZDb25maWd1cmVkOiBib29sZWFuO1xuICB3ZWJob29rRW5hYmxlZDogYm9vbGVhbjtcbn1cblxudHlwZSBWaWV3U3RhdGUgPVxuICB8IHsga2luZDogJ2xvYWRpbmcnIH1cbiAgfCB7IGtpbmQ6ICdlcnJvcic7IG1lc3NhZ2U6IHN0cmluZyB9XG4gIHwgeyBraW5kOiAnZW1wdHknIH1cbiAgfCB7IGtpbmQ6ICdjb25uZWN0ZWQnOyBzdGF0dXM6IFN0YXR1cyB9O1xuXG5leHBvcnQgY29uc3QgU2V0dXAgPSAoeyB1c2VyQ29udGV4dCB9OiBFeHRlbnNpb25Db250ZXh0VmFsdWUpID0+IHtcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZTxWaWV3U3RhdGU+KHsga2luZDogJ2xvYWRpbmcnIH0pO1xuICBjb25zdCBbYXBpS2V5LCBzZXRBcGlLZXldID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbYW5hZkNpZiwgc2V0QW5hZkNpZl0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthbmFmQ2xpZW50SWQsIHNldEFuYWZDbGllbnRJZF0gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFthbmFmQ2xpZW50U2VjcmV0LCBzZXRBbmFmQ2xpZW50U2VjcmV0XSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW3NhdmluZywgc2V0U2F2aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW2FjdGlvbkVycm9yLCBzZXRBY3Rpb25FcnJvcl0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgY29uc3QgbG9hZFN0YXR1cyA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTdGF0ZSh7IGtpbmQ6ICdsb2FkaW5nJyB9KTtcbiAgICBzZXRBY3Rpb25FcnJvcignJyk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHNpZ25lZFJlcXVlc3Q8U3RhdHVzPignL2FwaS9zdGF0dXMnLCB1c2VyQ29udGV4dCk7XG4gICAgICBjb25zdCBoYXNBbnlDb25maWcgPSBzdGF0dXMuZmlzY2FsTGlua0Nvbm5lY3RlZCB8fCBzdGF0dXMuYW5hZkNvbmZpZ3VyZWQ7XG4gICAgICBzZXRTdGF0ZShoYXNBbnlDb25maWcgPyB7IGtpbmQ6ICdjb25uZWN0ZWQnLCBzdGF0dXMgfSA6IHsga2luZDogJ2VtcHR5JyB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzZXRTdGF0ZSh7IGtpbmQ6ICdlcnJvcicsIG1lc3NhZ2U6IHNhZmVNZXNzYWdlKGUpIH0pO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZvaWQgbG9hZFN0YXR1cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgICBzZXRTYXZpbmcodHJ1ZSk7XG4gICAgc2V0QWN0aW9uRXJyb3IoJycpO1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBzaWduZWRSZXF1ZXN0KCcvYXBpL2Nvbm5lY3QnLCB1c2VyQ29udGV4dCwge1xuICAgICAgICBhcGlLZXksXG4gICAgICAgIC4uLihhbmFmQ2lmID8geyBhbmFmQ2lmIH0gOiB7fSksXG4gICAgICAgIC4uLihhbmFmQ2xpZW50SWQgPyB7IGFuYWZDbGllbnRJZCB9IDoge30pLFxuICAgICAgICAuLi4oYW5hZkNsaWVudFNlY3JldCA/IHsgYW5hZkNsaWVudFNlY3JldCB9IDoge30pLFxuICAgICAgfSk7XG4gICAgICBhd2FpdCBsb2FkU3RhdHVzKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0QWN0aW9uRXJyb3Ioc2FmZU1lc3NhZ2UoZSkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVEaXNjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHNldFNhdmluZyh0cnVlKTtcbiAgICBzZXRBY3Rpb25FcnJvcignJyk7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHNpZ25lZFJlcXVlc3QoJy9hcGkvZGlzY29ubmVjdCcsIHVzZXJDb250ZXh0LCB7fSk7XG4gICAgICBzZXRBcGlLZXkoJycpO1xuICAgICAgc2V0QW5hZkNpZignJyk7XG4gICAgICBzZXRBbmFmQ2xpZW50SWQoJycpO1xuICAgICAgc2V0QW5hZkNsaWVudFNlY3JldCgnJyk7XG4gICAgICBzZXRTdGF0ZSh7IGtpbmQ6ICdlbXB0eScgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgc2V0QWN0aW9uRXJyb3Ioc2FmZU1lc3NhZ2UoZSkpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRTYXZpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBpZiAoc3RhdGUua2luZCA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxCb3ggY3NzPXt7IHBhZGRpbmc6ICdtZWRpdW0nIH19PlxuICAgICAgICA8U3Bpbm5lciBzaXplPVwic21hbGxcIj5Mb2FkaW5nIHN0YXR1c1x1MjAyNjwvU3Bpbm5lcj5cbiAgICAgIDwvQm94PlxuICAgICk7XG4gIH1cblxuICBpZiAoc3RhdGUua2luZCA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiAoXG4gICAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPEJhbm5lciB0eXBlPVwiY3JpdGljYWxcIiB0aXRsZT1cIlVuYWJsZSB0byBsb2FkXCI+XG4gICAgICAgICAge3N0YXRlLm1lc3NhZ2V9XG4gICAgICAgIDwvQmFubmVyPlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPEJ1dHRvbiBvblByZXNzPXsoKSA9PiB2b2lkIGxvYWRTdGF0dXMoKX0+UmV0cnk8L0J1dHRvbj5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0JveD5cbiAgICApO1xuICB9XG5cbiAgaWYgKHN0YXRlLmtpbmQgPT09ICdlbXB0eScpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEJveCBjc3M9e3sgcGFkZGluZzogJ21lZGl1bScgfX0+XG4gICAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Db25uZWN0IEZpc2NhbExpbmsgZm9yIEFOQUY8L0JveD5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIFR1cm4gY29tcGxldGVkIGNoZWNrb3V0cyBpbnRvIFJvbWFuaWFuIEFOQUYgZS1pbnZvaWNlcyAoRU4gMTY5MzEgLyBDSVVTLVJPIFVCTClcbiAgICAgICAgICBhdXRvbWF0aWNhbGx5LiBZb3VyIGNyZWRlbnRpYWxzIGFyZSBzdG9yZWQgaW4gU3RyaXBlJmFwb3M7cyBTZWNyZXQgU3RvcmUgXHUyMDE0IG5ldmVyIGluXG4gICAgICAgICAgeW91ciBicm93c2VyIG9yIG9uIG91ciBzZXJ2ZXJzLlxuICAgICAgICA8L0JveD5cblxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdtZWRpdW0nIH19PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiRmlzY2FsTGluayBBUEkga2V5XCJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRnJvbSB5b3VyIEZpc2NhbExpbmsgZGFzaGJvYXJkIFx1MjE5MiBBUEkga2V5cyAoZmxfXHUyMDI2KVwiXG4gICAgICAgICAgICB2YWx1ZT17YXBpS2V5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBcGlLZXkoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJmbF9cdTIwMjZcIlxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiQU5BRiBTUFYgQ0lGIChjb21wYW55IHRheCBJRClcIlxuICAgICAgICAgICAgZGVzY3JpcHRpb249XCJUaGUgaXNzdWVyIENJRiB0aGF0IGhhcyBTUFYgYWNjZXNzIChlLmcuIFJPMTIzNDU2NzgpXCJcbiAgICAgICAgICAgIHZhbHVlPXthbmFmQ2lmfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmFmQ2lmKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUk9cdTIwMjZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuICAgICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdzbWFsbCcgfX0+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgbGFiZWw9XCJBTkFGIFNQViBPQXV0aCBjbGllbnQgSUQgKG9wdGlvbmFsKVwiXG4gICAgICAgICAgICB2YWx1ZT17YW5hZkNsaWVudElkfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRBbmFmQ2xpZW50SWQoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwib2ZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGxhYmVsPVwiQU5BRiBTUFYgT0F1dGggY2xpZW50IHNlY3JldCAob3B0aW9uYWwpXCJcbiAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17YW5hZkNsaWVudFNlY3JldH1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0QW5hZkNsaWVudFNlY3JldChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJvZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQm94PlxuXG4gICAgICAgIHthY3Rpb25FcnJvciAmJiAoXG4gICAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgICAgPEJhbm5lciB0eXBlPVwiY3JpdGljYWxcIiB0aXRsZT1cIkNvbm5lY3Rpb24gZmFpbGVkXCI+XG4gICAgICAgICAgICAgIHthY3Rpb25FcnJvcn1cbiAgICAgICAgICAgIDwvQmFubmVyPlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICApfVxuXG4gICAgICAgIDxCb3ggY3NzPXt7IG1hcmdpblRvcDogJ21lZGl1bScgfX0+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgICAgb25QcmVzcz17KCkgPT4gdm9pZCBoYW5kbGVDb25uZWN0KCl9XG4gICAgICAgICAgICBkaXNhYmxlZD17c2F2aW5nIHx8ICFhcGlLZXkudHJpbSgpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtzYXZpbmcgPyAnQ29ubmVjdGluZ1x1MjAyNicgOiAnQ29ubmVjdCd9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgKTtcbiAgfVxuXG4gIC8vIFx1MjUwMFx1MjUwMCBjb25uZWN0ZWQgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gIGNvbnN0IHsgc3RhdHVzIH0gPSBzdGF0ZTtcbiAgcmV0dXJuIChcbiAgICA8Qm94IGNzcz17eyBwYWRkaW5nOiAnbWVkaXVtJyB9fT5cbiAgICAgIDxCb3ggY3NzPXt7IGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5GaXNjYWxMaW5rIGZvciBBTkFGIFx1MjAxNCBjb25uZWN0ZWQ8L0JveD5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICA8SW5saW5lPlxuICAgICAgICAgIDxEb3Qgb2s9e3N0YXR1cy5maXNjYWxMaW5rQ29ubmVjdGVkfSAvPlxuICAgICAgICAgIDxCb3g+RmlzY2FsTGluayBBUEkga2V5OiB7c3RhdHVzLmZpc2NhbExpbmtDb25uZWN0ZWQgPyAnY29uZmlndXJlZCcgOiAnbWlzc2luZyd9PC9Cb3g+XG4gICAgICAgIDwvSW5saW5lPlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICA8SW5saW5lPlxuICAgICAgICAgIDxEb3Qgb2s9e3N0YXR1cy5hbmFmQ29uZmlndXJlZH0gLz5cbiAgICAgICAgICA8Qm94PkFOQUYgU1BWIGNyZWRlbnRpYWxzOiB7c3RhdHVzLmFuYWZDb25maWd1cmVkID8gJ2NvbmZpZ3VyZWQnIDogJ21pc3NpbmcnfTwvQm94PlxuICAgICAgICA8L0lubGluZT5cbiAgICAgIDwvQm94PlxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAneHNtYWxsJyB9fT5cbiAgICAgICAgPElubGluZT5cbiAgICAgICAgICA8RG90IG9rPXtzdGF0dXMud2ViaG9va0VuYWJsZWR9IC8+XG4gICAgICAgICAgPEJveD5DaGVja291dCB3ZWJob29rOiBlbmFibGVkIFx1MjAxNCBpbnZvaWNlcyBhcmUgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHk8L0JveD5cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cblxuICAgICAge2FjdGlvbkVycm9yICYmIChcbiAgICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnc21hbGwnIH19PlxuICAgICAgICAgIDxCYW5uZXIgdHlwZT1cImNyaXRpY2FsXCIgdGl0bGU9XCJBY3Rpb24gZmFpbGVkXCI+XG4gICAgICAgICAgICB7YWN0aW9uRXJyb3J9XG4gICAgICAgICAgPC9CYW5uZXI+XG4gICAgICAgIDwvQm94PlxuICAgICAgKX1cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgPElubGluZT5cbiAgICAgICAgICA8QnV0dG9uIG9uUHJlc3M9eygpID0+IHZvaWQgaGFuZGxlRGlzY29ubmVjdCgpfSBkaXNhYmxlZD17c2F2aW5nfT5cbiAgICAgICAgICAgIERpc2Nvbm5lY3RcbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9JbmxpbmU+XG4gICAgICA8L0JveD5cblxuICAgICAgPEJveCBjc3M9e3sgbWFyZ2luVG9wOiAnbWVkaXVtJyB9fT5cbiAgICAgICAgTmV3IGludm9pY2VzIGFwcGVhciBpbiB5b3VyIEZpc2NhbExpbmsgZGFzaGJvYXJkOyBBTkFGIHN1Ym1pc3Npb24gYW5kIGFuc3dlciBwb2xsaW5nXG4gICAgICAgIHJ1biB0aGVyZS4gUXVvdGEgYW5kIG1ldGVyaW5nIGZvbGxvdyB5b3VyIEZpc2NhbExpbmsgcGxhbi5cbiAgICAgIDwvQm94PlxuXG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICdtZWRpdW0nLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+Rm9yIGFuIGludm9pY2UgQU5BRiBhY2NlcHRzPC9Cb3g+XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICBcdTIwMjIgQ29sbGVjdCB0aGUgYnV5ZXIncyBiaWxsaW5nIGFkZHJlc3M6IFBheW1lbnQgTGlua3MgXHUyMTkyIE9wdGlvbnMgXHUyMTkyIFx1MjAxQ0NvbGxlY3QgYmlsbGluZ1xuICAgICAgICBhZGRyZXNzXHUyMDFEID0gUmVxdWlyZWQgKG9yIHNldCBiaWxsaW5nX2FkZHJlc3NfY29sbGVjdGlvbj1yZXF1aXJlZCBvbiBDaGVja291dCkuXG4gICAgICAgIFdpdGhvdXQgc3RyZWV0IGFuZCBjaXR5IEFOQUYgcmVqZWN0cyB0aGUgZG9jdW1lbnQgKEJSLTEwLCBCUi1STy0wODAsIEJSLVJPLTA5MCksIHNvXG4gICAgICAgIEZpc2NhbExpbmsgc2tpcHMgaXQgYW5kIHJlcG9ydHMgaXQgaGVyZSByYXRoZXIgdGhhbiBmaWxpbmcgYW4gaW52YWxpZCBpbnZvaWNlLlxuICAgICAgPC9Cb3g+XG4gICAgICA8Qm94IGNzcz17eyBtYXJnaW5Ub3A6ICd4c21hbGwnIH19PlxuICAgICAgICBcdTIwMjIgRm9yIGEgY29tcGFueSBidXllciwgYWxzbyBjb2xsZWN0IHRoZWlyIENJRjogdHVybiBvbiB0YXggSUQgY29sbGVjdGlvbiBvciBhZGQgYVxuICAgICAgICBjaGVja291dCBjdXN0b20gZmllbGQgbGFiZWxsZWQgQ0lGLlxuICAgICAgPC9Cb3g+XG4gICAgPC9Cb3g+XG4gICk7XG59O1xuXG5jb25zdCBEb3QgPSAoeyBvayB9OiB7IG9rOiBib29sZWFuIH0pID0+IChcbiAgPEJveCBjc3M9e3sgY29sb3I6IG9rID8gJ3N1Y2Nlc3MnIDogJ2NyaXRpY2FsJywgZm9udFdlaWdodDogJ2JvbGQnIH19Plx1MjVDRjwvQm94PlxuKTtcblxuLy8gU3RyaXBlIEFwcHMgQ0xJIGltcG9ydHMgdmlldyBjb21wb25lbnRzIGFzIGRlZmF1bHQgZXhwb3J0cy5cbmV4cG9ydCBkZWZhdWx0IFNldHVwO1xuIiwgImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyBjcmVhdGVSZW1vdGVSZWFjdENvbXBvbmVudCB9IGZyb20gJ0ByZW1vdGUtdWkvcmVhY3QnO1xuaW1wb3J0IHsgU0RLX1ZFUlNJT04gfSBmcm9tICcuLi92ZXJzaW9uJztcbmNvbnN0IHdpdGhTZGtQcm9wcyA9IChDb21wb25lbnQpID0+IHtcbiAgICBjb25zdCB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQudG9TdHJpbmcoKTtcbiAgICBjb25zdCBXaXRoU2RrUHJvcHMgPSAocHJvcHMpID0+IChfanN4KENvbXBvbmVudCwgeyAuLi5wcm9wcywgd3JhcHBlZENvbXBvbmVudE5hbWU6IHdyYXBwZWRDb21wb25lbnROYW1lLCBzZGtWZXJzaW9uOiBTREtfVkVSU0lPTiwgc2NoZW1hVmVyc2lvbjogXCJ2OVwiIH0pKTtcbiAgICBXaXRoU2RrUHJvcHMud3JhcHBlZENvbXBvbmVudE5hbWUgPSB3cmFwcGVkQ29tcG9uZW50TmFtZTtcbiAgICByZXR1cm4gV2l0aFNka1Byb3BzO1xufTtcbmNvbnN0IGRlZmluZUNvbXBvbmVudCA9IChuYW1lLCBmcmFnbWVudFByb3BzLCB3cmFwV2l0aFNka1Byb3BzKSA9PiB7XG4gICAgY29uc3QgcmVtb3RlQ29tcG9uZW50ID0gY3JlYXRlUmVtb3RlUmVhY3RDb21wb25lbnQobmFtZSwge1xuICAgICAgICBmcmFnbWVudFByb3BzLFxuICAgIH0pO1xuICAgIGlmICghd3JhcFdpdGhTZGtQcm9wcykge1xuICAgICAgICByZXR1cm4gcmVtb3RlQ29tcG9uZW50O1xuICAgIH1cbiAgICByZXR1cm4gd2l0aFNka1Byb3BzKHJlbW90ZUNvbXBvbmVudCk7XG59O1xuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ0FjY29yZGlvbkl0ZW0nLCBbJ3RpdGxlJywgJ2FjdGlvbnMnLCAnbWVkaWEnLCAnc3VidGl0bGUnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQWNjb3JkaW9uID0gZGVmaW5lQ29tcG9uZW50KCdBY2NvcmRpb24nLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQmFkZ2UgPSBkZWZpbmVDb21wb25lbnQoJ0JhZGdlJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEJhbm5lciA9IGRlZmluZUNvbXBvbmVudCgnQmFubmVyJywgWydhY3Rpb25zJywgJ2Rlc2NyaXB0aW9uJywgJ3RpdGxlJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEJhckNoYXJ0ID0gZGVmaW5lQ29tcG9uZW50KCdCYXJDaGFydCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBCb3ggPSBkZWZpbmVDb21wb25lbnQoJ0JveCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBCdXR0b25Hcm91cCA9IGRlZmluZUNvbXBvbmVudCgnQnV0dG9uR3JvdXAnLCBbJ21lbnVUcmlnZ2VyJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IGRlZmluZUNvbXBvbmVudCgnQnV0dG9uJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IENoZWNrYm94ID0gZGVmaW5lQ29tcG9uZW50KCdDaGVja2JveCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQ2hpcExpc3QgPSBkZWZpbmVDb21wb25lbnQoJ0NoaXBMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IENoaXAgPSBkZWZpbmVDb21wb25lbnQoJ0NoaXAnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgQ29udGV4dFZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ0NvbnRleHRWaWV3JywgWydhY3Rpb25zJywgJ2Jhbm5lcicsICdmb290ZXJDb250ZW50JywgJ3ByaW1hcnlBY3Rpb24nLCAnc2Vjb25kYXJ5QWN0aW9uJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEN1cnJlbmN5RmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ0N1cnJlbmN5RmllbGQnLCBbJ2xhYmVsJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IERhdGFUYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnRGF0YVRhYmxlJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IERhdGVGaWVsZCA9IGRlZmluZUNvbXBvbmVudCgnRGF0ZUZpZWxkJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBEYXRlUmFuZ2VQaWNrZXIgPSBkZWZpbmVDb21wb25lbnQoJ0RhdGVSYW5nZVBpY2tlcicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBEZXRhaWxQYWdlUHJvcGVydHlMaXN0ID0gZGVmaW5lQ29tcG9uZW50KCdEZXRhaWxQYWdlUHJvcGVydHlMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IERldGFpbFBhZ2UgPSBkZWZpbmVDb21wb25lbnQoJ0RldGFpbFBhZ2UnLCBbJ3ByaW1hcnlDb2x1bW4nLCAnc2Vjb25kYXJ5Q29sdW1uJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IERldGFpbFBhZ2VUYWJsZSA9IGRlZmluZUNvbXBvbmVudCgnRGV0YWlsUGFnZVRhYmxlJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IERpdmlkZXIgPSBkZWZpbmVDb21wb25lbnQoJ0RpdmlkZXInLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRm9jdXNWaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdGb2N1c1ZpZXcnLCBbJ2Zvb3RlckNvbnRlbnQnLCAncHJpbWFyeUFjdGlvbicsICdzZWNvbmRhcnlBY3Rpb24nXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgRm9ybUZpZWxkR3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ0Zvcm1GaWVsZEdyb3VwJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEZ1bGxQYWdlVmlldyA9IGRlZmluZUNvbXBvbmVudCgnRnVsbFBhZ2VWaWV3JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IEljb24gPSBkZWZpbmVDb21wb25lbnQoJ0ljb24nLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgSW1nID0gZGVmaW5lQ29tcG9uZW50KCdJbWcnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgSW5saW5lID0gZGVmaW5lQ29tcG9uZW50KCdJbmxpbmUnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgTGluZUNoYXJ0ID0gZGVmaW5lQ29tcG9uZW50KCdMaW5lQ2hhcnQnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgTGluayA9IGRlZmluZUNvbXBvbmVudCgnTGluaycsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBMaXN0SXRlbSA9IGRlZmluZUNvbXBvbmVudCgnTGlzdEl0ZW0nLCBbJ2ljb24nLCAnaW1hZ2UnLCAnc2Vjb25kYXJ5VGl0bGUnLCAndGl0bGUnLCAndmFsdWUnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBNZW51R3JvdXAgPSBkZWZpbmVDb21wb25lbnQoJ01lbnVHcm91cCcsIFsndGl0bGUnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgTWVudUl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ01lbnVJdGVtJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IE1lbnUgPSBkZWZpbmVDb21wb25lbnQoJ01lbnUnLCBbJ3RyaWdnZXInXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgT25ib2FyZGluZ1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ09uYm9hcmRpbmdWaWV3JywgWydlcnJvciddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBPdmVydmlld1BhZ2UgPSBkZWZpbmVDb21wb25lbnQoJ092ZXJ2aWV3UGFnZScsIFsncHJpbWFyeUNvbHVtbicsICdzZWNvbmRhcnlDb2x1bW4nXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgUGFnZU1vZHVsZSA9IGRlZmluZUNvbXBvbmVudCgnUGFnZU1vZHVsZScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBQbGF0Zm9ybUNvbmZpZ3VyYXRpb25WaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdQbGF0Zm9ybUNvbmZpZ3VyYXRpb25WaWV3JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFByb3BlcnR5TGlzdEl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ1Byb3BlcnR5TGlzdEl0ZW0nLCBbJ2xhYmVsJywgJ3ZhbHVlJ10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFByb3BlcnR5TGlzdCA9IGRlZmluZUNvbXBvbmVudCgnUHJvcGVydHlMaXN0JywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFJhZGlvID0gZGVmaW5lQ29tcG9uZW50KCdSYWRpbycsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgU2VhcmNoRmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ1NlYXJjaEZpZWxkJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFNlbGVjdCA9IGRlZmluZUNvbXBvbmVudCgnU2VsZWN0JywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBTZXR0aW5nc1ZpZXcgPSBkZWZpbmVDb21wb25lbnQoJ1NldHRpbmdzVmlldycsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBTaWduSW5WaWV3ID0gZGVmaW5lQ29tcG9uZW50KCdTaWduSW5WaWV3JywgWydkZXNjcmlwdGlvbkFjdGlvbkNvbnRlbnRzJywgJ2Zvb3RlckNvbnRlbnQnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgU3BhcmtsaW5lID0gZGVmaW5lQ29tcG9uZW50KCdTcGFya2xpbmUnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgU3Bpbm5lciA9IGRlZmluZUNvbXBvbmVudCgnU3Bpbm5lcicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBTdHJpcGVGaWxlVXBsb2FkZXIgPSBkZWZpbmVDb21wb25lbnQoJ1N0cmlwZUZpbGVVcGxvYWRlcicsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBTd2l0Y2ggPSBkZWZpbmVDb21wb25lbnQoJ1N3aXRjaCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFiTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnVGFiTGlzdCcsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJQYW5lbCA9IGRlZmluZUNvbXBvbmVudCgnVGFiUGFuZWwnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFiUGFuZWxzID0gZGVmaW5lQ29tcG9uZW50KCdUYWJQYW5lbHMnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFiID0gZGVmaW5lQ29tcG9uZW50KCdUYWInLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFibGVCb2R5ID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUJvZHknLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFibGVDZWxsID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZUNlbGwnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFibGVGb290ZXIgPSBkZWZpbmVDb21wb25lbnQoJ1RhYmxlRm9vdGVyJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVIZWFkJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYmxlSGVhZGVyQ2VsbCA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVIZWFkZXJDZWxsJywgW10sIHRydWUpO1xuZXhwb3J0IGNvbnN0IFRhYmxlID0gZGVmaW5lQ29tcG9uZW50KCdUYWJsZScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYWJsZVJvdyA9IGRlZmluZUNvbXBvbmVudCgnVGFibGVSb3cnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGFicyA9IGRlZmluZUNvbXBvbmVudCgnVGFicycsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYXNrTGlzdEl0ZW0gPSBkZWZpbmVDb21wb25lbnQoJ1Rhc2tMaXN0SXRlbScsIFtdLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUYXNrTGlzdCA9IGRlZmluZUNvbXBvbmVudCgnVGFza0xpc3QnLCBbXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVGV4dEFyZWEgPSBkZWZpbmVDb21wb25lbnQoJ1RleHRBcmVhJywgWydsYWJlbCddLCB0cnVlKTtcbmV4cG9ydCBjb25zdCBUZXh0RmllbGQgPSBkZWZpbmVDb21wb25lbnQoJ1RleHRGaWVsZCcsIFsnbGFiZWwnXSwgdHJ1ZSk7XG5leHBvcnQgY29uc3QgVG9vbHRpcCA9IGRlZmluZUNvbXBvbmVudCgnVG9vbHRpcCcsIFsndHJpZ2dlciddLCB0cnVlKTtcbiIsICJleHBvcnQgY29uc3QgU0RLX1ZFUlNJT04gPSAnOS4zLjAnO1xuIiwgImltcG9ydCBpbnZhcmlhbnQgZnJvbSAnaW52YXJpYW50Jztcbi8qKiBAaW50ZXJuYWwgKi9cbmV4cG9ydCBjb25zdCBnZXRIb3N0RW5kcG9pbnQgPSAoKSA9PiB7XG4gICAgLy8gVGhpcyBpcyBlbmRwb2ludCBpcyBjcmVhdGVkIGZyb20gdGhlIE1lc3NhZ2VQb3J0IHRyYW5zZmVycmVkIGZyb20gdGhlIGhvc3QgZW52XG4gICAgLy8gYXMgYSBwYXJ0IG9mIHRoZSBgaW5pdF9leHRlbnNpb25gIG1lc3NhZ2UuXG4gICAgY29uc3QgaG9zdEVuZHBvaW50ID0gZ2xvYmFsVGhpcy5fX1N0cmlwZUV4dEV4cG9ydHM/LmVuZHBvaW50O1xuICAgIGludmFyaWFudChob3N0RW5kcG9pbnQsICdob3N0RW5kcG9pbnQgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkJyk7XG4gICAgcmV0dXJuIGhvc3RFbmRwb2ludDtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0SG9zdEVuZHBvaW50IH0gZnJvbSAnLi4vX2VuZHBvaW50JztcbmV4cG9ydCBjb25zdCBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgPSBhc3luYyAoKSA9PiBnZXRIb3N0RW5kcG9pbnQoKVxuICAgIC5jYWxsLnN1cHBvcnRzRmV0Y2hBcHBFbWJlZGRlZEtleSgpXG4gICAgLnRoZW4oKHN1cHBvcnRlZCkgPT4gc3VwcG9ydGVkKVxuICAgIC5jYXRjaCgoKSA9PiBmYWxzZSk7XG4iLCAiaW1wb3J0IHsgZ2V0SG9zdEVuZHBvaW50IH0gZnJvbSAnLi4vX2VuZHBvaW50JztcbmV4cG9ydCBjb25zdCBmZXRjaEFwcEVtYmVkZGVkS2V5ID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IGFwaUtleSA9IGF3YWl0IGdldEhvc3RFbmRwb2ludCgpLmNhbGwuZmV0Y2hBcHBFbWJlZGRlZEtleSgpO1xuICAgIGlmICghYXBpS2V5KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignVW5hYmxlIHRvIGZldGNoIGFwcCBlbWJlZGRlZCBrZXknKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaUtleTtcbn07XG4iLCAiaW1wb3J0IHsgZmV0Y2hBcHBFbWJlZGRlZEtleSB9IGZyb20gJy4vZmV0Y2hBcHBFbWJlZGRlZEtleSc7XG5leHBvcnQgY29uc3QgZmV0Y2hWaWFGcmFtZSA9IGFzeW5jICh1cmwsIG9wdGlvbnMgPSB7fSkgPT4ge1xuICAgIGNvbnN0IGFwaUtleSA9IGF3YWl0IGZldGNoQXBwRW1iZWRkZWRLZXkoKTtcbiAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICAuLi5vcHRpb25zLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAuLi5vcHRpb25zLmhlYWRlcnMsXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXBpS2V5fWAsXG4gICAgICAgIH0sXG4gICAgfTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgY29uc3QgaGVhZGVycyA9IHt9O1xuICAgIHJlc3BvbnNlLmhlYWRlcnMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4ge1xuICAgICAgICBoZWFkZXJzW2tleV0gPSB2YWx1ZTtcbiAgICB9KTtcbiAgICBjb25zdCBzZXJpYWxpemFibGVSZXNwb25zZSA9IHtcbiAgICAgICAganNvbjogdW5kZWZpbmVkLFxuICAgICAgICBhcnJheUJ1ZmZlcjogdW5kZWZpbmVkLFxuICAgICAgICBoZWFkZXJzLFxuICAgICAgICBvazogcmVzcG9uc2Uub2ssXG4gICAgICAgIHJlZGlyZWN0ZWQ6IHJlc3BvbnNlLnJlZGlyZWN0ZWQsXG4gICAgICAgIHN0YXR1czogcmVzcG9uc2Uuc3RhdHVzLFxuICAgICAgICBzdGF0dXNUZXh0OiByZXNwb25zZS5zdGF0dXNUZXh0LFxuICAgICAgICB0eXBlOiByZXNwb25zZS50eXBlLFxuICAgICAgICB1cmw6IHJlc3BvbnNlLnVybCxcbiAgICB9O1xuICAgIHN3aXRjaCAocmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpKSB7XG4gICAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uL2pzb24nOlxuICAgICAgICAgICAgc2VyaWFsaXphYmxlUmVzcG9uc2UuanNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgc2VyaWFsaXphYmxlUmVzcG9uc2UuYXJyYXlCdWZmZXIgPSBhd2FpdCByZXNwb25zZS5hcnJheUJ1ZmZlcigpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBzZXJpYWxpemFibGVSZXNwb25zZTtcbn07XG4iLCAiaW1wb3J0IHsgZ2V0SG9zdEVuZHBvaW50IH0gZnJvbSAnLi4vX2VuZHBvaW50JztcbmV4cG9ydCBjb25zdCBmZXRjaFZpYUhvc3QgPSBhc3luYyAoZW5jb2RlZFVybCwgb3B0aW9ucyA9IHt9KSA9PiB7XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChlbmNvZGVkVXJsKTtcbiAgICByZXR1cm4gZ2V0SG9zdEVuZHBvaW50KCkuY2FsbC5zdHJpcGVBcGlGZXRjaCh1cmwucGF0aG5hbWUgKyB1cmwuc2VhcmNoLCBvcHRpb25zKTtcbn07XG4iLCAiaW1wb3J0IHsgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5IH0gZnJvbSAnLi9zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXknO1xuaW1wb3J0IHsgZmV0Y2hWaWFGcmFtZSB9IGZyb20gJy4vZmV0Y2hWaWFGcmFtZSc7XG5pbXBvcnQgeyBmZXRjaFZpYUhvc3QgfSBmcm9tICcuL2ZldGNoVmlhSG9zdCc7XG5sZXQgc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaCA9IG51bGw7XG5leHBvcnQgY29uc3Qgc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggPSBhc3luYyAoKSA9PiB7XG4gICAgaWYgKCFzZWxlY3RlZFN0cmlwZUFwaUZldGNoKSB7XG4gICAgICAgIHNlbGVjdGVkU3RyaXBlQXBpRmV0Y2ggPSAoYXdhaXQgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KCkpXG4gICAgICAgICAgICA/IGZldGNoVmlhRnJhbWVcbiAgICAgICAgICAgIDogZmV0Y2hWaWFIb3N0O1xuICAgIH1cbiAgICByZXR1cm4gc2VsZWN0ZWRTdHJpcGVBcGlGZXRjaDtcbn07XG4iLCAiaW1wb3J0IHsgc2VsZWN0UHJlZmVycmVkU3RyaXBlQXBpRmV0Y2ggfSBmcm9tICcuL2FwaSc7XG4vKipcbiAqIE1ha2VzIGFuIGF1dGhlbnRpY2F0ZWQgQVBJIHJlcXVlc3QgdG8gdGhlIFN0cmlwZSBBUEkgdGhyb3VnaCB0aGUgRGFzaGJvYXJkIHNlc3Npb24uXG4gKiBBdXRvbWF0aWNhbGx5IHNlbGVjdHMgdGhlIGJlc3QgYXZhaWxhYmxlIHRyYW5zcG9ydCBtZWNoYW5pc20uXG4gKlxuICogQHBhcmFtIHBhdGggLSBUaGUgQVBJIHBhdGggb3IgZnVsbCBVUkwgdG8gcmVxdWVzdC5cbiAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9uYWwgcmVxdWVzdCBjb25maWd1cmF0aW9uLlxuICogQHJldHVybnMgQSBwcm9taXNlIHJlc29sdmluZyB0byB0aGUgc2VyaWFsaXplZCByZXNwb25zZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHN0cmlwZUFwaUZldGNoID0gYXN5bmMgKHBhdGgsIG9wdGlvbnMpID0+IHtcbiAgICBjb25zdCBwcmVmZXJyZWRGZXRjaE1ldGhvZCA9IGF3YWl0IHNlbGVjdFByZWZlcnJlZFN0cmlwZUFwaUZldGNoKCk7XG4gICAgcmV0dXJuIHByZWZlcnJlZEZldGNoTWV0aG9kKHBhdGgsIG9wdGlvbnMpO1xufTtcbiIsICJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRIb3N0RW5kcG9pbnQgfSBmcm9tICcuL19lbmRwb2ludCc7XG4vKipcbiAqIEEgUmVhY3QgaG9vayB0aGF0IHJldHVybnMgYSBjYWxsYmFjayB0byByZWZyZXNoIHRoZSBEYXNoYm9hcmQgZGF0YSBzdXJyb3VuZGluZyB0aGUgZXh0ZW5zaW9uLlxuICpcbiAqIEByZXR1cm5zIEEgc3RhYmxlIGNhbGxiYWNrIGZ1bmN0aW9uIHRoYXQgdHJpZ2dlcnMgYSBEYXNoYm9hcmQgZGF0YSByZWZyZXNoIHdoZW4gaW52b2tlZC5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IHVzZVJlZnJlc2hEYXNoYm9hcmREYXRhID0gKCkgPT4ge1xuICAgIHJldHVybiBSZWFjdC51c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAgIHJldHVybiBnZXRIb3N0RW5kcG9pbnQoKS5jYWxsLnJlZnJlc2hEYXNoYm9hcmREYXRhKCk7XG4gICAgfSwgW10pO1xufTtcbiIsICIvKiBlc2xpbnQtZGlzYWJsZSBtYXgtY2xhc3Nlcy1wZXItZmlsZSAqL1xuaW1wb3J0IGludmFyaWFudCBmcm9tICdpbnZhcmlhbnQnO1xuaW1wb3J0IHsgc3RyaXBlQXBpRmV0Y2ggfSBmcm9tICcuL2FwaUZldGNoJztcbmNvbnN0IG1hdGNoZXNTdHJpcGVLZXkgPSAvW3BzXWtfKHRlc3R8bGl2ZSlfW0EtWmEtejAtOV0rLztcbi8qKiBAaW50ZXJuYWwgKi9cbmNsYXNzIFN0cmlwZUFwcHNIdHRwUmVzcG9uc2Uge1xuICAgIGNvbnN0cnVjdG9yKHJlc3ApIHtcbiAgICAgICAgdGhpcy5fcmVzcCA9IHJlc3A7XG4gICAgfVxuICAgIGdldEhlYWRlcnMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwLmhlYWRlcnM7XG4gICAgfVxuICAgIGdldFN0YXR1c0NvZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwLnN0YXR1cztcbiAgICB9XG4gICAgZ2V0UmF3UmVzcG9uc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXNwO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2xhc3MtbWV0aG9kcy11c2UtdGhpc1xuICAgIHRvU3RyZWFtKCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0cmVhbXMgaGF2ZSBub3QgYmVlbiBpbXBsZW1lbnRlZCBpbiB0aGUgU3RyaXBlIEhUVFAgY2xpZW50Jyk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8td3JhcHBlci1vYmplY3QtdHlwZXNcbiAgICB0b0pTT04oKSB7XG4gICAgICAgIGNvbnN0IHsganNvbiB9ID0gdGhpcy5fcmVzcDtcbiAgICAgICAgaWYgKGpzb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignUmVzcG9uc2UgYm9keSB1bmRlZmluZWQnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGpzb24pO1xuICAgICAgICB9XG4gICAgfVxufVxuLyoqXG4gKiBBbiBIVFRQIGNsaWVudCBjb21wYXRpYmxlIHdpdGggYHN0cmlwZS1ub2RlYCB0aGF0IHJvdXRlcyBBUEkgcmVxdWVzdHMgdGhyb3VnaCB0aGUgRGFzaGJvYXJkIHNlc3Npb24uXG4gKiBAcHVibGljXG4gKi9cbmV4cG9ydCBjbGFzcyBTdHJpcGVBcHBzSHR0cENsaWVudCB7XG4gICAgY29uc3RydWN0b3IoZmV0Y2gpIHtcbiAgICAgICAgdGhpcy5fZmV0Y2ggPSBmZXRjaDtcbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNsYXNzLW1ldGhvZHMtdXNlLXRoaXNcbiAgICBnZXRDbGllbnROYW1lKCkge1xuICAgICAgICByZXR1cm4gJ3N0cmlwZS11aS1leHRlbnNpb24nO1xuICAgIH1cbiAgICBhc3luYyBtYWtlUmVxdWVzdChob3N0LCBwb3J0LCBwYXRoLCBtZXRob2QsIGhlYWRlcnMsIHJlcXVlc3REYXRhLCBwcm90b2NvbCwgX3RpbWVvdXQpIHtcbiAgICAgICAgaW52YXJpYW50KHByb3RvY29sID09PSAnaHR0cHMnLCAnTXVzdCB1c2UgaHR0cHMgY29ubmVjdGlvbnMgaW4gVUkgZXh0ZW5zaW9ucycpO1xuICAgICAgICBjb25zdCBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICBoZWFkZXJzLFxuICAgICAgICB9O1xuICAgICAgICBpZiAocmVxdWVzdERhdGEpIHtcbiAgICAgICAgICAgIGZldGNoT3B0aW9ucy5ib2R5ID0gcmVxdWVzdERhdGE7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYXV0aEhlYWRlciA9IGhlYWRlcnMuQXV0aG9yaXphdGlvbjtcbiAgICAgICAgaWYgKGF1dGhIZWFkZXIgJiYgbWF0Y2hlc1N0cmlwZUtleS50ZXN0KGF1dGhIZWFkZXIpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RvIG5vdCB1c2UgYWN0dWFsIHN0cmlwZSBrZXlzIHdoZW4gdXNpbmcgdGhlIFN0cmlwZSBKUyBBUEkgY2xpZW50IHdpdGggVUkgZXh0ZXNpb25zLlxcblxcbiBJbnN0ZWFkLCB1c2UgYFNUUklQRV9BUElfS0VZYCBmcm9tIGBAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvaHR0cF9jbGllbnRgIGFzIGEgcGxhY2Vob2xkZXIuJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChwYXRoLCBgJHtwcm90b2NvbH06Ly8ke2hvc3R9YCk7XG4gICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLl9mZXRjaCh1cmwudG9TdHJpbmcoKSwgZmV0Y2hPcHRpb25zKTtcbiAgICAgICAgLy8gVE9ETzogQWRkIHN1cHBvcnQgZm9yIHRpbWVvdXRzLlxuICAgICAgICByZXR1cm4gbmV3IFN0cmlwZUFwcHNIdHRwUmVzcG9uc2UocmVzcCk7XG4gICAgfVxufVxuLyoqXG4gKiBBIHBsYWNlaG9sZGVyIEFQSSBrZXkgdG8gcGFzcyB0byBgc3RyaXBlLW5vZGVgIHdoZW4gdXNpbmcgdGhlIGV4dGVuc2lvbiBIVFRQIGNsaWVudC5cbiAqIFRoZSBhY3R1YWwgYXV0aGVudGljYXRpb24gaXMgaGFuZGxlZCBieSB0aGUgRGFzaGJvYXJkIHNlc3Npb24uXG4gKlxuICogKipEbyBOT1QgY2hhbmdlIHRoaXMgc3RyaW5nKiogd2l0aG91dCBhIGRlcHJlY2F0aW9uIHBsYW4gXHUyMDE0IHRoZSBEYXNoYm9hcmQgcnVudGltZSB2YWxpZGF0ZXNcbiAqIHRoaXMgZXhhY3QgdmFsdWUgYW5kIHdpbGwgdGhyb3cgaWYgaXQgZGlmZmVycy5cbiAqIEBzZWUgbWFuYWdlL2Zyb250ZW5kL3NyYy90YWlsb3IvZXh0ZW5zaW9ucy9ob3N0L2FwaV9mZXRjaC5qc1xuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgU1RSSVBFX0FQSV9LRVkgPSAnRE9fTk9UX1BBU1NfQV9SRUFMX0FQSV9LRVknO1xuLyoqXG4gKiBDcmVhdGVzIGEgcHJlLWNvbmZpZ3VyZWQge0BsaW5rIFN0cmlwZUFwcHNIdHRwQ2xpZW50fSBpbnN0YW5jZSB1c2luZyB0aGUgZGVmYXVsdCBBUEkgZmV0Y2guXG4gKlxuICogQHJldHVybnMgQSBuZXcgYFN0cmlwZUFwcHNIdHRwQ2xpZW50YCBpbnN0YW5jZS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZUh0dHBDbGllbnQgPSAoKSA9PiBuZXcgU3RyaXBlQXBwc0h0dHBDbGllbnQoc3RyaXBlQXBpRmV0Y2gpO1xuLyoqXG4gKiBUaGUgc3RhbmRhcmQgSFRUUCBoZWFkZXIgbmFtZSB1c2VkIGZvciBhdXRob3JpemF0aW9uLlxuICogQHB1YmxpY1xuICovXG5leHBvcnQgY29uc3QgQVVUSE9SSVpBVElPTl9IRUFERVIgPSAnQXV0aG9yaXphdGlvbic7XG4vKipcbiAqIFRoZSBwcmUtYnVpbHQgYXV0aG9yaXphdGlvbiBoZWFkZXIgdmFsdWUgdXNpbmcge0BsaW5rIFNUUklQRV9BUElfS0VZfS5cbiAqIEBwdWJsaWNcbiAqL1xuZXhwb3J0IGNvbnN0IEFVVEhPUklaQVRJT05fVkFMVUUgPSBgQmVhcmVyICR7U1RSSVBFX0FQSV9LRVl9YDtcbiIsICJpbXBvcnQgeyBjcmVhdGVIdHRwQ2xpZW50IH0gZnJvbSAnLi4vaHR0cENsaWVudCc7XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3QgY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseSA9ICh7IGhvc3QsIHBvcnQgfSkgPT4gYXN5bmMgKHBheWxvYWQpID0+IHtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGBodHRwczovLyR7aG9zdH06JHtwb3J0fS92MS9hcHBzL2FwcF9lbWJlZGRlZF9iYWNrZW5kX3NpZ25hdHVyZWApO1xuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdwYXlsb2FkJywgSlNPTi5zdHJpbmdpZnkoeyAuLi5wYXlsb2FkIH0pKTtcbiAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnaW5jbHVkZV9vbmx5W10nLCAnc2lnbmF0dXJlJyk7XG4gICAgY29uc3QgY2xpZW50ID0gY3JlYXRlSHR0cENsaWVudCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY2xpZW50Lm1ha2VSZXF1ZXN0KGhvc3QsIHBvcnQsIHVybC5wYXRobmFtZSArIHVybC5zZWFyY2gsICdHRVQnLCB7fSwgbnVsbCwgJ2h0dHBzJyk7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gICAgICAgIC50aGVuKChyKSA9PiByLnRvSlNPTigpKVxuICAgICAgICAudGhlbigoZGF0YSkgPT4gZGF0YS5zaWduYXR1cmUpO1xufTtcbiIsICJjb25zdCBkZWZhdWx0Q29ubmVjdGlvblNldHRpbmdzID0ge1xuICAgIGhvc3Q6ICdhcGkuc3RyaXBlLmNvbScsXG4gICAgcG9ydDogNDQzLFxufTtcbi8qKiBAaW50ZXJuYWwgKi9cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5leHBvcnQgbGV0IGNvbm5lY3Rpb25TZXR0aW5ncyA9IGRlZmF1bHRDb25uZWN0aW9uU2V0dGluZ3M7XG4vKiogQGludGVybmFsICovXG5leHBvcnQgY29uc3Qgc2V0Q29ubmVjdGlvblNldHRpbmdzID0gKHNldHRpbmdzKSA9PiB7XG4gICAgY29ubmVjdGlvblNldHRpbmdzID0ge1xuICAgICAgICAuLi5kZWZhdWx0Q29ubmVjdGlvblNldHRpbmdzLFxuICAgICAgICAuLi5zZXR0aW5ncyxcbiAgICB9O1xufTtcbiIsICJpbXBvcnQgeyBjcmVhdGVGZXRjaFN0cmlwZVNpZ25hdHVyZURpcmVjdGx5IH0gZnJvbSAnLi9zaWduYXR1cmUvY3JlYXRlRmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseSc7XG5pbXBvcnQgeyBzdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXkgfSBmcm9tICcuL2FwaS9zdXBwb3J0c0ZldGNoQXBwRW1iZWRkZWRLZXknO1xuaW1wb3J0IHsgY29ubmVjdGlvblNldHRpbmdzIH0gZnJvbSAnLi9zaWduYXR1cmUvY29ubmVjdGlvblNldHRpbmdzJztcbmltcG9ydCB7IGdldEhvc3RFbmRwb2ludCB9IGZyb20gJy4vX2VuZHBvaW50Jztcbi8qKiBAcHVibGljICovXG5leHBvcnQgY29uc3QgZmV0Y2hTdHJpcGVTaWduYXR1cmUgPSBhc3luYyAoYWRkaXRpb25hbFBheWxvYWQpID0+IHtcbiAgICBpZiAoYXdhaXQgc3VwcG9ydHNGZXRjaEFwcEVtYmVkZGVkS2V5KCkpIHtcbiAgICAgICAgY29uc3QgZmV0Y2hTdHJpcGVTaWduYXR1cmVEaXJlY3RseSA9IGNyZWF0ZUZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkoY29ubmVjdGlvblNldHRpbmdzKTtcbiAgICAgICAgcmV0dXJuIGZldGNoU3RyaXBlU2lnbmF0dXJlRGlyZWN0bHkoYWRkaXRpb25hbFBheWxvYWQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGdldEhvc3RFbmRwb2ludCgpLmNhbGwuZmV0Y2hTdHJpcGVTaWduYXR1cmUoYWRkaXRpb25hbFBheWxvYWQpO1xuICAgIH1cbn07XG4iLCAiaW1wb3J0IHsganN4IGFzIF9qc3ggfSBmcm9tIFwicmVhY3QvanN4LXJ1bnRpbWVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3luY0V4dGVybmFsU3RvcmUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi9pbnRlcm5hbC9BcHBSb3V0ZXJDb250ZXh0JztcbmltcG9ydCB7IGdldEV4dFJvdXRlciB9IGZyb20gJy4vaW50ZXJuYWwvZ2V0RXh0Um91dGVyJztcbmltcG9ydCB7IHVzZVJvdXRlc0NvbmZpZyB9IGZyb20gJy4vaW50ZXJuYWwvdXNlUm91dGVzQ29uZmlnJztcbi8qKlxuICogUmVuZGVycyB0aGUgdmlldyBkZWZpbmVkIGJ5IHRoZSBgcm91dGVgIGVudHJ5IHdob3NlIHBhdGggcGF0dGVybiBtYXRjaGVzXG4gKiB0aGUgY3VycmVudCBVUkwuXG4gKlxuICogUGxhY2UgaXQgaW4geW91ciBjb21wb25lbnQgaW1wbGVtZW50aW5nIHRoZSBgc3RyaXBlLmRhc2hib2FyZC5mdWxscGFnZWAgdmlld3BvcnQuXG4gKlxuICogUmVxdWlyZXMgYSBOYXZpZ2F0aW9uUHJvdmlkZXIgaGlnaGVyIHVwIGluIHRoZSBSZWFjdCB0cmVlLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kb2NzLnN0cmlwZS5jb20vc3RyaXBlLWFwcHMvcm91dGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gQXBwUm91dGVyKHsgY29udGV4dCwgcmVkaXJlY3RPbk5vdEZvdW5kIH0pIHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRFeHRSb3V0ZXIoKTtcbiAgICBjb25zdCBjb25maWcgPSB1c2VSb3V0ZXNDb25maWcoKTtcbiAgICBjb25zdCBocmVmID0gdXNlU3luY0V4dGVybmFsU3RvcmUocm91dGVyLmxpc3RlblRvSHJlZiwgcm91dGVyLmdldEhyZWYpO1xuICAgIGNvbnN0IGlzSHJlZktub3duID0gaHJlZiAhPT0gdW5kZWZpbmVkO1xuICAgIGNvbnN0IG1hdGNoZWRSb3V0ZSA9IGlzSHJlZktub3duXG4gICAgICAgID8gcm91dGVyLmdldE1hdGNoZWRSb3V0ZShjb25maWcsIGhyZWYpXG4gICAgICAgIDogbnVsbDtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBpZiAoIWlzSHJlZktub3duKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIW1hdGNoZWRSb3V0ZSAmJiByZWRpcmVjdE9uTm90Rm91bmQpIHtcbiAgICAgICAgICAgIHJvdXRlci5zZXRSb3V0ZShjb25maWcsIHJlZGlyZWN0T25Ob3RGb3VuZCwge1xuICAgICAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sIFtpc0hyZWZLbm93biwgbWF0Y2hlZFJvdXRlLCByb3V0ZXIsIGNvbmZpZywgcmVkaXJlY3RPbk5vdEZvdW5kXSk7XG4gICAgaWYgKCFpc0hyZWZLbm93biB8fCAhbWF0Y2hlZFJvdXRlKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCB7IGtleTogbmFtZSwgcm91dGVQYXJhbXMsIHJvdXRlRGVmaW5pdGlvbiB9ID0gbWF0Y2hlZFJvdXRlO1xuICAgIGNvbnN0IHsgcmVuZGVyIH0gPSByb3V0ZURlZmluaXRpb247XG4gICAgcmV0dXJuIChfanN4KEFwcFJvdXRlckNvbnRleHQuUHJvdmlkZXIsIHsgdmFsdWU6IHsgbmFtZSwgcm91dGVQYXJhbXMgfSwgY2hpbGRyZW46IHJlbmRlcihyb3V0ZVBhcmFtcywgY29udGV4dCkgfSkpO1xufVxuIiwgImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5leHBvcnQgY29uc3QgQXBwUm91dGVyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQobnVsbCk7XG4iLCAiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IFJvdXRlc0NvbmZpZ0NvbnRleHQgfSBmcm9tICcuL1JvdXRlc0NvbmZpZ0NvbnRleHQnO1xuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlc0NvbmZpZygpIHtcbiAgICBjb25zdCBjb25maWcgPSB1c2VDb250ZXh0KFJvdXRlc0NvbmZpZ0NvbnRleHQpO1xuICAgIGlmICghY29uZmlnKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTmF2aWdhdGlvblByb3ZpZGVyIGlzIG5vdCBpbml0aWFsaXNlZC4nKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cbiIsICJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuZXhwb3J0IGNvbnN0IFJvdXRlc0NvbmZpZ0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuIiwgImltcG9ydCB7IGpzeCBhcyBfanN4IH0gZnJvbSBcInJlYWN0L2pzeC1ydW50aW1lXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZU1lbW8gfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRFeHRSb3V0ZXIgfSBmcm9tICcuL2ludGVybmFsL2dldEV4dFJvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXNDb25maWdDb250ZXh0IH0gZnJvbSAnLi9pbnRlcm5hbC9Sb3V0ZXNDb25maWdDb250ZXh0Jztcbi8qKlxuICogTmF2aWdhdGlvblByb3ZpZGVyIGlzIHRoZSByb290IGNvbXBvbmVudCByZXF1aXJlZCBieSBhbGwgQVBJcyBleHBvc2VkXG4gKiBmcm9tIEBzdHJpcGUvdWktZXh0ZW5zaW9uLXNkay9uYXZpZ2F0aW9uLiBJdCBhY2NlcHRzIHRoZSByb3V0ZSBjb25maWcgcHJvZHVjZWRcbiAqIGJ5IGBjcmVhdGVSb3V0ZXNgLlxuICpcbiAqIFBsYWNlIGl0IGFib3ZlIEFwcFJvdXRlciBhbmQvb3IgYW55IGNvbXBvbmVudHMgdGhhdCB1c2UgdGhlIG5hdmlnYXRpb24gQVBJcy5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZG9jcy5zdHJpcGUuY29tL3N0cmlwZS1hcHBzL3JvdXRpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIE5hdmlnYXRpb25Qcm92aWRlcihwcm9wcykge1xuICAgIGNvbnN0IHsgcm91dGVzLCBjaGlsZHJlbiB9ID0gcHJvcHM7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0RXh0Um91dGVyKCk7XG4gICAgY29uc3QgY29uZmlnID0gdXNlTWVtbygoKSA9PiByb3V0ZXIudmFsaWRhdGVSb3V0ZXMocm91dGVzKSwgW3JvdXRlciwgcm91dGVzXSk7XG4gICAgdXNlRWZmZWN0KCgpID0+IHJvdXRlci5yZWdpc3RlclJvdXRlcyhjb25maWcpLCBbcm91dGVyLCBjb25maWddKTtcbiAgICByZXR1cm4gKF9qc3goUm91dGVzQ29uZmlnQ29udGV4dC5Qcm92aWRlciwgeyB2YWx1ZTogY29uZmlnLCBjaGlsZHJlbjogY2hpbGRyZW4gfSkpO1xufVxuIiwgImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEV4dFJvdXRlciB9IGZyb20gJy4vaW50ZXJuYWwvZ2V0RXh0Um91dGVyJztcbmltcG9ydCB7IHVzZVJvdXRlc0NvbmZpZyB9IGZyb20gJy4vaW50ZXJuYWwvdXNlUm91dGVzQ29uZmlnJztcbi8qKlxuICogUGVyZm9ybXMgYW4gaW1tZWRpYXRlIG5hdmlnYXRpb24gdG8gYSBzcGVjaWZpZWQgcm91dGUgYnkgcmVwbGFjaW5nXG4gKiB0aGUgVVJMIGluIGhpc3Rvcnkgc28gdGhlIHVzZXIgbmV2ZXIgc2VlcyB0aGUgaW50ZXJtZWRpYXRlIHJvdXRlLlxuICpcbiAqIFJlcXVpcmVzIGEgTmF2aWdhdGlvblByb3ZpZGVyIGhpZ2hlciB1cCBpbiB0aGUgUmVhY3QgdHJlZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZG9jcy5zdHJpcGUuY29tL3N0cmlwZS1hcHBzL3JvdXRpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIFJlZGlyZWN0KHsgcm91dGUgfSkge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldEV4dFJvdXRlcigpO1xuICAgIGNvbnN0IGNvbmZpZyA9IHVzZVJvdXRlc0NvbmZpZygpO1xuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHJvdXRlci5zZXRSb3V0ZShjb25maWcsIHJvdXRlLCB7IHJlcGxhY2U6IHRydWUgfSk7XG4gICAgfSwgW3JvdXRlLCByb3V0ZXIsIGNvbmZpZ10pO1xuICAgIHJldHVybiBudWxsO1xufVxuIiwgImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBBcHBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi9BcHBSb3V0ZXJDb250ZXh0JztcbmV4cG9ydCBmdW5jdGlvbiB1c2VBcHBSb3V0ZXJTdGF0ZSgpIHtcbiAgICBjb25zdCBzdGF0ZSA9IHVzZUNvbnRleHQoQXBwUm91dGVyQ29udGV4dCk7XG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0FwcFJvdXRlciBpcyBub3QgaW5pdGlhbGlzZWQuJyk7XG4gICAgfVxuICAgIHJldHVybiBzdGF0ZTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGdldEV4dFJvdXRlciB9IGZyb20gJy4vaW50ZXJuYWwvZ2V0RXh0Um91dGVyJztcbmltcG9ydCB7IHVzZVJvdXRlc0NvbmZpZyB9IGZyb20gJy4vaW50ZXJuYWwvdXNlUm91dGVzQ29uZmlnJztcbi8qKlxuICogU3RvcmVzIHRoZSBvcmlnaW5hbCByb3V0ZSBkZXNjcmlwdG9yIGZvciBlYWNoIEFwcFJvdXRlIGNyZWF0ZWQgYnkgY3JlYXRlQXBwUm91dGUsXG4gKiBlbmFibGluZyBuYXZpZ2F0ZVRvQXBwUm91dGUgdG8gcmVzb2x2ZSBhbiBBcHBSb3V0ZSBiYWNrIHRvIGl0cyBrZXkgKyBwYXJhbXNcbiAqL1xuY29uc3Qgcm91dGVEZXNjcmlwdG9ycyA9IG5ldyBXZWFrTWFwKCk7XG4vKipcbiAqIFJldHVybnMgbWV0aG9kcyBmb3IgbmF2aWdhdGluZyB0byBmdWxsLXBhZ2Ugcm91dGVzLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9kb2NzLnN0cmlwZS5jb20vc3RyaXBlLWFwcHMvcm91dGluZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXNlTmF2aWdhdGlvbigpIHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRFeHRSb3V0ZXIoKTtcbiAgICBjb25zdCBjb25maWcgPSB1c2VSb3V0ZXNDb25maWcoKTtcbiAgICBjb25zdCBuYXZpZ2F0ZVRvQXBwUm91dGUgPSB1c2VDYWxsYmFjaygocm91dGVPckFwcFJvdXRlLCBvcHRpb25zKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdXRlID0gYGtleWAgaW4gcm91dGVPckFwcFJvdXRlXG4gICAgICAgICAgICA/IHJvdXRlT3JBcHBSb3V0ZVxuICAgICAgICAgICAgOiByb3V0ZURlc2NyaXB0b3JzLmdldChyb3V0ZU9yQXBwUm91dGUpO1xuICAgICAgICBpZiAoIXJvdXRlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICByb3V0ZXIuc2V0Um91dGUoY29uZmlnLCByb3V0ZSwgb3B0aW9ucyk7XG4gICAgfSwgW3JvdXRlciwgY29uZmlnXSk7XG4gICAgY29uc3QgY3JlYXRlQXBwUm91dGUgPSB1c2VDYWxsYmFjaygocm91dGVDb25maWcpID0+IHtcbiAgICAgICAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IHJvdXRlQ29uZmlnO1xuICAgICAgICBjb25zdCBnbG9iID0gcm91dGVyLmNyZWF0ZVBhdGhTZWdtZW50cyhjb25maWcsIHJvdXRlQ29uZmlnKTtcbiAgICAgICAgY29uc3Qgcm91dGUgPSB7XG4gICAgICAgICAgICBuYW1lOiAnZnVsbFBhZ2VHbG9iJyxcbiAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgIGdsb2IsXG4gICAgICAgICAgICAgICAgc2VhcmNoUGFyYW1zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgICAgcm91dGVEZXNjcmlwdG9ycy5zZXQocm91dGUsIHJvdXRlQ29uZmlnKTtcbiAgICAgICAgcmV0dXJuIHJvdXRlO1xuICAgIH0sIFtjb25maWcsIHJvdXRlcl0pO1xuICAgIHJldHVybiB7IG5hdmlnYXRlVG9BcHBSb3V0ZSwgY3JlYXRlQXBwUm91dGUgfTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3luY0V4dGVybmFsU3RvcmUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBnZXRFeHRSb3V0ZXIgfSBmcm9tICcuL2ludGVybmFsL2dldEV4dFJvdXRlcic7XG5jb25zdCBFTVBUWV9TRUFSQ0hfUEFSQU1TID0ge307XG5mdW5jdGlvbiByZWFkKCkge1xuICAgIHJldHVybiBnZXRFeHRSb3V0ZXIoKS5nZXRTZWFyY2hQYXJhbXMoKSA/PyBFTVBUWV9TRUFSQ0hfUEFSQU1TO1xufVxuZnVuY3Rpb24gd3JpdGUoc2VhcmNoUGFyYW1zLCByZXBsYWNlKSB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0RXh0Um91dGVyKCk7XG4gICAgY29uc3QgaHJlZiA9IHJvdXRlci5nZXRIcmVmKCk7XG4gICAgLy8gVGhlIGhyZWYgY2FuIGJlIHVuZGVmaW5lZCBiZWZvcmUgaXRzIHZhbHVlIGlzIHJlY2VpdmVkIGZyb20gSG9zdC5cbiAgICAvLyBJdCdzIHNhZmUgdG8gZXhpdCwgYXMgQXBwUm91dGVyIGRlZmVycyByb3V0ZSBtYXRjaGluZyB1bnRpbCB0aGUgaHJlZiBpcyBrbm93bi5cbiAgICBpZiAoIWhyZWYpXG4gICAgICAgIHJldHVybjtcbiAgICByb3V0ZXIuc2V0SHJlZihocmVmLCB7XG4gICAgICAgIHJlcGxhY2UsXG4gICAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHN1YnNjcmliZShsaXN0ZW5lcikge1xuICAgIHJldHVybiBnZXRFeHRSb3V0ZXIoKS5saXN0ZW5Ub0hyZWYobGlzdGVuZXIpO1xufVxuY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgcmVwbGFjZTogdHJ1ZSxcbn07XG4vKipcbiAqIFJlYWRzIGFuZCB3cml0ZXMgdGhlIGN1cnJlbnQgcm91dGUncyBzZWFyY2ggcGFyYW1ldGVycy5cbiAqXG4gKiBXb3JrcyBsaWtlIGB1c2VTdGF0ZWA6IGl0IHJldHVybnMgYSBgW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXWAgdHVwbGUuXG4gKiBUaGUgc2V0dGVyIGFjY2VwdHMgZWl0aGVyIHRoZSBuZXh0IHNlYXJjaCBwYXJhbXMgb3IgYW4gdXBkYXRlciBmdW5jdGlvbiB0aGF0XG4gKiByZWNlaXZlcyB0aGUgY3VycmVudCBvbmVzLiBVcGRhdGVkIHNlYXJjaCBwYXJhbXMgYXJlIGFwcGVuZGVkIHRvIHRoZSBjdXJyZW50XG4gKiByb3V0ZSwgcmVwbGFjaW5nIHRoZSBjdXJyZW50IGVudHJ5IGluIHRoZSBoaXN0b3J5IHN0YWNrIHJhdGhlciB0aGFuIHB1c2hpbmcgYVxuICogbmV3IG9uZS5cbiAqXG4gKiBAc2VlIGh0dHBzOi8vZG9jcy5zdHJpcGUuY29tL3N0cmlwZS1hcHBzL3JvdXRpbmdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVzZUFsbFNlYXJjaFBhcmFtcyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyByZXBsYWNlIH0gPSB7IC4uLmRlZmF1bHRPcHRpb25zLCAuLi5vcHRpb25zIH07XG4gICAgY29uc3Qgc2VhcmNoUGFyYW1zID0gdXNlU3luY0V4dGVybmFsU3RvcmUoc3Vic2NyaWJlLCByZWFkKTtcbiAgICBjb25zdCBzZXRTZWFyY2hQYXJhbXMgPSB1c2VDYWxsYmFjaygobmV4dCkgPT4gd3JpdGUodHlwZW9mIG5leHQgPT09ICdmdW5jdGlvbicgPyBuZXh0KHJlYWQoKSkgOiBuZXh0LCByZXBsYWNlKSwgW3JlcGxhY2VdKTtcbiAgICByZXR1cm4gW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXTtcbn1cbiIsICJpbXBvcnQgeyB1c2VDYWxsYmFjayB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZUFsbFNlYXJjaFBhcmFtcyB9IGZyb20gJy4vdXNlQWxsU2VhcmNoUGFyYW1zJztcbmV4cG9ydCBmdW5jdGlvbiB1c2VTZWFyY2hQYXJhbShuYW1lLCBvcHRpb25zKSB7XG4gICAgY29uc3QgW3NlYXJjaFBhcmFtcywgc2V0U2VhcmNoUGFyYW1zXSA9IHVzZUFsbFNlYXJjaFBhcmFtcyhvcHRpb25zKTtcbiAgICBjb25zdCB1cGRhdGUgPSB1c2VDYWxsYmFjaygobmV4dCkgPT4gc2V0U2VhcmNoUGFyYW1zKChwcmV2aW91cykgPT4gKHtcbiAgICAgICAgLi4ucHJldmlvdXMsXG4gICAgICAgIFtuYW1lXTogdHlwZW9mIG5leHQgPT09ICdmdW5jdGlvbicgPyBuZXh0KHByZXZpb3VzW25hbWVdKSA6IG5leHQsXG4gICAgfSkpLCBbbmFtZSwgc2V0U2VhcmNoUGFyYW1zXSk7XG4gICAgcmV0dXJuIFtzZWFyY2hQYXJhbXNbbmFtZV0sIHVwZGF0ZV07XG59XG4iLCAiLyoqXG4gKiBTaWduZWQgZmV0Y2ggaGVscGVyIGZvciB0aGUgVUkgZXh0ZW5zaW9uIFx1MjE5MiBhcHAgYmFja2VuZC5cbiAqIEV2ZXJ5IHJlcXVlc3QgaXMgc2lnbmVkIHdpdGggdGhlIGFwcCBzZWNyZXQgdmlhIGZldGNoU3RyaXBlU2lnbmF0dXJlKCkgYW5kXG4gKiBjYXJyaWVzIGFjY291bnRfaWQvdXNlcl9pZCBzbyB0aGUgYmFja2VuZCBjYW4gdmVyaWZ5IGFuZCBzY29wZSBpdC5cbiAqL1xuaW1wb3J0IHsgZmV0Y2hTdHJpcGVTaWduYXR1cmUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvdXRpbHMnO1xuaW1wb3J0IHR5cGUgeyBFeHRlbnNpb25Db250ZXh0VmFsdWUgfSBmcm9tICdAc3RyaXBlL3VpLWV4dGVuc2lvbi1zZGsvY29udGV4dCc7XG5cbmNvbnN0IEFQSV9CQVNFID1cbiAgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgeyBfX0ZMX0FQUF9BUElfQkFTRV9fPzogc3RyaW5nIH0pLl9fRkxfQVBQX0FQSV9CQVNFX18pIHx8XG4gICdodHRwczovL3N0cmlwZS1hcHAuYXV0b2FuYWYucm8nO1xuXG50eXBlIFVzZXJDb250ZXh0ID0gRXh0ZW5zaW9uQ29udGV4dFZhbHVlWyd1c2VyQ29udGV4dCddO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2lnbmVkUmVxdWVzdDxUID0gdW5rbm93bj4oXG4gIHBhdGg6IHN0cmluZyxcbiAgdXNlckNvbnRleHQ6IFVzZXJDb250ZXh0LFxuICBib2R5PzogUmVjb3JkPHN0cmluZywgdW5rbm93bj4sXG4pOiBQcm9taXNlPFQ+IHtcbiAgLy8gQXBwLWVtYmVkZGVkIHNpZ25hdHVyZXMgY292ZXIgZXhhY3RseSB7dXNlcl9pZCwgYWNjb3VudF9pZH0gXHUyMDE0IGFsd2F5cyBpbmNsdWRlXG4gIC8vIEJPVEggKGZpZWxkIG9yZGVyIG1hdHRlcnMpIGFuZCBhbHdheXMgUE9TVCwgc28gdGhlIGJhY2tlbmQgaGFzIGEgYm9keSB0byB2ZXJpZnkuXG4gIGNvbnN0IHNpZ25hdHVyZVBheWxvYWQgPSB7XG4gICAgdXNlcl9pZDogdXNlckNvbnRleHQuaWQsXG4gICAgYWNjb3VudF9pZDogdXNlckNvbnRleHQuYWNjb3VudC5pZCxcbiAgfTtcbiAgY29uc3Qgc2lnbmF0dXJlID0gYXdhaXQgZmV0Y2hTdHJpcGVTaWduYXR1cmUoKTtcbiAgY29uc3QgcGF5bG9hZCA9IHsgLi4uc2lnbmF0dXJlUGF5bG9hZCwgLi4uKGJvZHkgPz8ge30pIH07XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGAke0FQSV9CQVNFfSR7cGF0aH1gLCB7XG4gICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICdTdHJpcGUtU2lnbmF0dXJlJzogc2lnbmF0dXJlLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXG4gIH0pO1xuICBpZiAoIXJlcy5vaykge1xuICAgIGNvbnN0IGVyciA9IChhd2FpdCByZXMuanNvbigpLmNhdGNoKCgpID0+ICh7fSkpKSBhcyB7IGVycm9yPzogc3RyaW5nIH07XG4gICAgdGhyb3cgbmV3IEVycm9yKGVyci5lcnJvciB8fCBgUmVxdWVzdCBmYWlsZWQgKCR7cmVzLnN0YXR1c30pYCk7XG4gIH1cbiAgcmV0dXJuIHJlcy5qc29uKCkgYXMgUHJvbWlzZTxUPjtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFvQkEsVUFBSUEsYUFBWSxTQUFTLFdBQVcsUUFBUSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUM1RCxZQUFJLE1BQXVDO0FBQ3pDLGNBQUksV0FBVyxRQUFXO0FBQ3hCLGtCQUFNLElBQUksTUFBTSw4Q0FBOEM7QUFBQSxVQUNoRTtBQUFBLFFBQ0Y7QUFFQSxZQUFJLENBQUMsV0FBVztBQUNkLGNBQUk7QUFDSixjQUFJ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TSxNQUFNLENBQUMsRUFBRSxHQUFHLE1BQ2hCLDZDQUFDO0FBQUEsSUFBSSxLQUFLLEVBQUUsT0FBTyxLQUFLLFlBQVksWUFBWSxZQUFZLE9BQU87QUFBQSxJQUFHO0FBQUEsR0FBQztBQUl6RSxNQUFPLGdCQUFROzs7QURsUFIsTUFBTSxhQUFhO0FBRzFCLE1BQU8sbUJBQVE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLHlCQUF5QjtBQUFBLE1BQ3ZCO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsWUFBWTtBQUFBLElBQ2Q7QUFBQSxJQUNBLHFCQUFxQjtBQUFBLElBQ3JCLFFBQVE7QUFBQSxJQUNSLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxJQUNSLGVBQWU7QUFBQSxNQUNiO0FBQUEsUUFDRSxjQUFjO0FBQUEsUUFDZCxXQUFXO0FBQUEsTUFDYjtBQUFBLE1BQ0E7QUFBQSxRQUNFLGNBQWM7QUFBQSxRQUNkLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQTtBQUFBLFFBQ0UsY0FBYztBQUFBLFFBQ2QsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSx1QkFBdUI7QUFBQSxNQUNyQixRQUFRO0FBQUEsTUFDUixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsOEJBQThCO0FBQUEsSUFDOUIsMEJBQTBCO0FBQUEsSUFDMUIsZ0JBQWdCO0FBQUEsTUFDZCwyQkFBMkI7QUFBQSxRQUN6QixlQUFlO0FBQUEsVUFDYjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFdBQVc7QUFBQSxNQUNiO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsYUFBYTtBQUFBLFVBQ2IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLEVBQ2I7IiwKICAibmFtZXMiOiBbImludmFyaWFudCIsICJpbXBvcnRfcmVhY3QiLCAiX2pzeCIsICJpbnZhcmlhbnQiLCAiaW1wb3J0X2ludmFyaWFudCIsICJmZXRjaCIsICJpbnZhcmlhbnQiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfanN4X3J1bnRpbWUiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X3JlYWN0IiwgImltcG9ydF9yZWFjdCIsICJpbXBvcnRfcmVhY3QiLCAiaW1wb3J0X2pzeF9ydW50aW1lIiwgInN0YXR1cyJdCn0K
