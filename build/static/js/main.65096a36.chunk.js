(this["webpackJsonpbcode-hash"] = this["webpackJsonpbcode-hash"] || []).push([
    [0],
    {
        181: function (e) {
            e.exports = JSON.parse(
                '{"calculate_file_hash":"Calculate file\'s hash in SHA256","calculate_text_hash":"Calculate text\'s hash in SHA256","import_file":"Import file","calculate_new_hash":"Calculate new hash","or":"or","dragAndDrop":"Drag and drop a file","hash":"Hash","file_name":"File name","insert_text":"Insert text","footer_version":"Version: ","file":"File","text":"Text","calculate_hash":"Calculate hash"}',
            );
        },
        182: function (e) {
            e.exports = JSON.parse(
                '{"calculate_file_hash":"Calcola hash di un file in SHA256","calculate_text_hash":"Calcola hash del testo","import_file":"Importa file","calculate_new_hash":"Calcola un altro hash","or":"Oppure","dragAndDrop":"Trascina un file","hash":"Hash","file_name":"Nome file","insert_text":"Inserisci il testo","footer_version":"Versione: ","file":"File","text":"Testo","calculate_hash":"Calcola hash"}',
            );
        },
        206: function (e, t, c) {},
        207: function (e, t, c) {},
        213: function (e, t) {},
        215: function (e, t) {},
        226: function (e, t) {},
        228: function (e, t) {},
        255: function (e, t) {},
        257: function (e, t) {},
        258: function (e, t) {},
        263: function (e, t) {},
        265: function (e, t) {},
        284: function (e, t) {},
        296: function (e, t) {},
        299: function (e, t) {},
        329: function (e, t, c) {},
        331: function (e, t, c) {},
        332: function (e, t, c) {},
        335: function (e, t, c) {
            "use strict";
            c.r(t);
            var a = {};
            c.r(a),
                c.d(a, "changeTheme", function () {
                    return C;
                });
            var n = {};
            c.r(n),
                c.d(n, "colors", function () {
                    return K;
                });
            var o = c(0),
                r = c.n(o),
                i = c(67),
                l = c.n(i),
                s = (c(206), c(355)),
                h = (c(207), c(27)),
                u = c(112),
                b = c.n(u),
                f = c(174),
                d = c(4),
                j = c(48),
                x = c.n(j),
                p = c(175),
                g = c(79),
                O = c(23),
                m = "[User] Change Theme";
            function C(e) {
                return { type: m, payload: e };
            }
            var _ = c(348),
                v = c(349),
                k = c(353),
                S = c(354),
                w = c(356),
                D = c(350),
                N = c(351),
                y = (c(329), c(2));
            function F(e) {
                var t = e.rightValue,
                    c = e.leftValue,
                    a = e.value,
                    n = e.onChange,
                    o = e.theme;
                return Object(y.jsxs)("div", {
                    className: "double-switch ".concat(
                        "light" !== o ? "dark" : "",
                    ),
                    children: [
                        Object(y.jsx)("div", {
                            className: "element left",
                            onClick: function () {
                                return n(!1);
                            },
                            children: c,
                        }),
                        Object(y.jsx)("div", {
                            className: "element right",
                            onClick: function () {
                                return n(!0);
                            },
                            children: t,
                        }),
                        Object(y.jsx)("div", {
                            className: "element pivot ".concat(
                                a ? "to-right" : "to-left",
                            ),
                        }),
                    ],
                });
            }
            var A = c(195),
                T = (c(331), "#38A7B8"),
                B = "#DCDCDC",
                E = "#C0C0C0",
                I = "#CD5656",
                z = c(115),
                H = c(346),
                R = c(181),
                M = { it: { translation: c(182) }, en: { translation: R } };
            z.a
                .use(H.a)
                .init(
                    {
                        resources: M,
                        lng: "it",
                        fallbackLng: "en",
                        debug: !0,
                        interpolation: { escapeValue: !1 },
                    },
                    function (e, t) {
                        e && console.error("i18n Error", e);
                    },
                );
            var V = z.a,
                L = {
                    width: "80%",
                    height: "60%",
                    maxWidth: "980px",
                    border: "2px dashed",
                    borderColor: "".concat(B),
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "".concat(E),
                    padding: "20px",
                    fontSize: "30px",
                    fontWeight: 600,
                    outline: "none",
                    transition: "border .24s ease-in-out",
                },
                W = { borderColor: "".concat(T) },
                J = { borderColor: "".concat(T) },
                P = { borderColor: "".concat(I) },
                U = function (e) {
                    var t = e.onChange,
                        c = Object(A.a)({ noClick: !0 }),
                        a = c.getRootProps,
                        n = c.getInputProps,
                        i = c.acceptedFiles,
                        l = c.isDragActive,
                        s = c.isDragAccept,
                        u = c.isDragReject,
                        b = Object(o.useMemo)(
                            function () {
                                return Object(h.a)(
                                    Object(h.a)(
                                        Object(h.a)(
                                            Object(h.a)({}, L),
                                            l ? W : {},
                                        ),
                                        s ? J : {},
                                    ),
                                    u ? P : {},
                                );
                            },
                            [l, u, s],
                        );
                    return (
                        r.a.useEffect(
                            function () {
                                "undefined" !== typeof i &&
                                    i.length > 0 &&
                                    t(i);
                            },
                            [i, t],
                        ),
                        Object(y.jsxs)(
                            "div",
                            Object(h.a)(
                                Object(h.a)({}, a({ style: b })),
                                {},
                                {
                                    children: [
                                        Object(y.jsx)(
                                            "input",
                                            Object(h.a)({}, n()),
                                        ),
                                        Object(y.jsx)("p", {
                                            children: V.t("dragAndDrop"),
                                        }),
                                    ],
                                },
                            ),
                        )
                    );
                },
                X = (c(332), c(347));
            var q = Object(g.b)(
                    function (e) {
                        return { theme: e.user.theme };
                    },
                    function (e) {
                        return Object(O.b)(a, e);
                    },
                )(function (e) {
                    var t = e.theme,
                        c = e.changeTheme,
                        a = Object(o.useState)(!1),
                        n = Object(d.a)(a, 2),
                        r = n[0],
                        i = n[1],
                        l = Object(o.useState)(!1),
                        s = Object(d.a)(l, 2),
                        u = s[0],
                        j = s[1],
                        g = Object(o.useState)(""),
                        O = Object(d.a)(g, 2),
                        m = O[0],
                        C = O[1],
                        A = Object(o.useState)(!1),
                        T = Object(d.a)(A, 2),
                        B = T[0],
                        E = T[1],
                        I = function () {
                            c("light" === t ? "dark" : "light");
                        },
                        z = (function () {
                            var e = Object(f.a)(
                                b.a.mark(function e(t) {
                                    var c;
                                    return b.a.wrap(function (e) {
                                        for (;;)
                                            switch ((e.prev = e.next)) {
                                                case 0:
                                                    ((c =
                                                        new FileReader()).onload =
                                                        function (e) {
                                                            var t =
                                                                x.a.lib.WordArray.create(
                                                                    e.target
                                                                        .result,
                                                                );
                                                            j(
                                                                x.a
                                                                    .SHA256(t)
                                                                    .toString(
                                                                        x.a.enc
                                                                            .Hex,
                                                                    ),
                                                            );
                                                        }),
                                                        c.readAsArrayBuffer(t),
                                                        i(t.name);
                                                case 4:
                                                case "end":
                                                    return e.stop();
                                            }
                                    }, e);
                                }),
                            );
                            return function (t) {
                                return e.apply(this, arguments);
                            };
                        })();
                    Object(o.useEffect)(
                        function () {
                            H(m);
                        },
                        [m],
                    );
                    var H = Object(o.useCallback)(
                        Object(p.debounce)(function (e) {
                            var t;
                            "" !== e
                                ? ((t = e),
                                  j(x.a.SHA256(t).toString(x.a.enc.Hex)))
                                : j(!1);
                        }, 500),
                        [],
                    );
                    Object(o.useEffect)(
                        function () {
                            j(!1), i(!1), C("");
                        },
                        [B],
                    );
                    var R = (function () {
                            var e = Object(X.a)(["(max-width: 1024px)"]),
                                t = Object(d.a)(e, 1)[0],
                                c = Object(X.a)(["(max-width: 512px)"]);
                            return Object(d.a)(c, 1)[0]
                                ? "isMobile"
                                : t
                                ? "isTablet"
                                : "isDesktop";
                        })(),
                        M = { display: "flex", alignItems: "center" };
                    return Object(y.jsxs)(_.a, {
                        className: "home",
                        bg: "".concat(t, ".bg"),
                        children: [
                            Object(y.jsxs)(_.a, {
                                bg: "".concat(t, ".topbar"),
                                className: "topbar",
                                children: [
                                    Object(y.jsx)(v.a, {
                                        color: "".concat(t, ".logo"),
                                        className: "title",
                                        onClick: function () {
                                            window.open("https://bcode.cloud");
                                        },
                                        children: "BCode",
                                    }),
                                    "light" === t
                                        ? Object(y.jsx)(D.a, {
                                              w: 6,
                                              h: 6,
                                              color: "".concat(
                                                  t,
                                                  ".colorSelector",
                                              ),
                                              onClick: I,
                                              className: "icon",
                                          })
                                        : Object(y.jsx)(N.a, {
                                              w: 6,
                                              h: 6,
                                              color: "".concat(
                                                  t,
                                                  ".colorSelector",
                                              ),
                                              onClick: I,
                                              className: "icon",
                                          }),
                                ],
                            }),
                            Object(y.jsx)(F, {
                                leftValue: V.t("file"),
                                rightValue: V.t("text"),
                                value: B,
                                onChange: E,
                                theme: t,
                            }),
                            B
                                ? Object(y.jsxs)(_.a, {
                                      className: "mainarea",
                                      children: [
                                          Object(y.jsx)(v.a, {
                                              color: "".concat(t, ".text"),
                                              className: "text",
                                              children: V.t(
                                                  "calculate_text_hash",
                                              ),
                                          }),
                                          Object(y.jsx)(k.a, {
                                              value: m,
                                              onChange: function (e) {
                                                  C(e.target.value);
                                              },
                                              placeholder: V.t("insert_text"),
                                              size: "lg",
                                              className: "textarea",
                                              color: "".concat(
                                                  t,
                                                  ".textAreaColor",
                                              ),
                                          }),
                                          Object(y.jsxs)(_.a, {
                                              color: "".concat(t, ".text"),
                                              backgroundColor: "".concat(
                                                  u && t,
                                                  ".textBg",
                                              ),
                                              className: "text hashText",
                                              fontSize:
                                                  "isDesktop" === R
                                                      ? "20px"
                                                      : "16px",
                                              wordBreak:
                                                  "isMobile" === R
                                                      ? "break-all"
                                                      : "unset",
                                              children: [
                                                  u &&
                                                      Object(y.jsx)(v.a, {
                                                          fontWeight: "bold",
                                                          children: "".concat(
                                                              V.t("hash"),
                                                          ),
                                                      }),
                                                  u &&
                                                      Object(y.jsx)(v.a, {
                                                          maxWidth:
                                                              "isMobile" === R
                                                                  ? "300px"
                                                                  : "isTablet" ===
                                                                        R &&
                                                                    "500px",
                                                          children: u,
                                                      }),
                                              ],
                                          }),
                                      ],
                                  })
                                : r
                                ? Object(y.jsxs)(_.a, {
                                      className: "mainarea hash",
                                      children: [
                                          Object(y.jsxs)(_.a, {
                                              color: "".concat(t, ".text"),
                                              backgroundColor: "".concat(
                                                  t,
                                                  ".textBg",
                                              ),
                                              className: "text hashText",
                                              fontSize:
                                                  "isDesktop" === R
                                                      ? "20px"
                                                      : "16px",
                                              children: [
                                                  Object(y.jsx)(v.a, {
                                                      fontWeight: "bold",
                                                      children: "".concat(
                                                          V.t("file_name"),
                                                      ),
                                                  }),
                                                  Object(y.jsxs)(v.a, {
                                                      children: [" ", r],
                                                  }),
                                              ],
                                          }),
                                          Object(y.jsxs)(_.a, {
                                              color: "".concat(t, ".text"),
                                              backgroundColor: "".concat(
                                                  t,
                                                  ".textBg",
                                              ),
                                              className: "text",
                                              fontSize:
                                                  "isDesktop" === R
                                                      ? "20px"
                                                      : "16px",
                                              wordBreak:
                                                  "isMobile" === R
                                                      ? "break-all"
                                                      : "unset",
                                              children: [
                                                  Object(y.jsx)(v.a, {
                                                      fontWeight: "bold",
                                                      children: "".concat(
                                                          V.t("hash"),
                                                      ),
                                                  }),
                                                  Object(y.jsx)(v.a, {
                                                      children: u,
                                                  }),
                                              ],
                                          }),
                                          Object(y.jsx)(S.a, {
                                              bg: "".concat(t, ".logo"),
                                              size: "lg",
                                              onClick: function () {
                                                  j(!1), i(!1);
                                              },
                                              margin: "20px",
                                              children:
                                                  V.t("calculate_new_hash"),
                                          }),
                                      ],
                                  })
                                : Object(y.jsxs)(_.a, {
                                      className: "mainarea",
                                      children: [
                                          Object(y.jsx)(v.a, {
                                              color: "".concat(t, ".text"),
                                              className: "text",
                                              children: V.t(
                                                  "calculate_file_hash",
                                              ),
                                          }),
                                          Object(y.jsx)(U, {
                                              onChange: function (e) {
                                                  z(e[0]);
                                              },
                                              backgroundColor: "".concat(
                                                  t,
                                                  ".draganddrop",
                                              ),
                                          }),
                                          Object(y.jsx)(v.a, {
                                              color: "".concat(t, ".text"),
                                              children: V.t("or"),
                                          }),
                                          Object(y.jsx)(S.a, {
                                              bg: "".concat(t, ".button"),
                                              size: "lg",
                                              onClick: function () {
                                                  document
                                                      .getElementById(
                                                          "input_file",
                                                      )
                                                      .click();
                                              },
                                              children: Object(y.jsx)("label", {
                                                  className: "importLabel",
                                                  children: V.t("import_file"),
                                              }),
                                          }),
                                          Object(y.jsx)("input", {
                                              id: "input_file",
                                              style: { display: "none" },
                                              type: "file",
                                              onChange: function (e) {
                                                  z(e.target.files[0]);
                                              },
                                          }),
                                      ],
                                  }),
                            Object(y.jsx)(_.a, {
                                className: "footer",
                                height: "isDesktop" === R ? "75px" : "50px",
                                children: Object(y.jsxs)(_.a, {
                                    className: "in",
                                    backgroundColor: "".concat(t, ".topbar"),
                                    width: "isDesktop" === R ? "80%" : "100%",
                                    borderTopLeftRadius:
                                        "isDesktop" === R ? "10px" : "0",
                                    borderTopRightRadius:
                                        "isDesktop" === R ? "10px" : "0",
                                    justifyContent:
                                        "isDesktop" === R
                                            ? "space-between"
                                            : "center",
                                    children: [
                                        "isMobile" !== R &&
                                            Object(y.jsxs)(_.a, {
                                                style: Object(h.a)(
                                                    Object(h.a)({}, M),
                                                    {},
                                                    { color: "white" },
                                                ),
                                                children: [
                                                    Object(y.jsx)(v.a, {
                                                        style: {
                                                            fontSize: 13,
                                                            marginRight: 5,
                                                            color: "".concat(
                                                                "light" === t
                                                                    ? "#FFF"
                                                                    : "#000",
                                                            ),
                                                        },
                                                        children:
                                                            V.t(
                                                                "footer_version",
                                                            ),
                                                    }),
                                                    Object(y.jsx)(v.a, {
                                                        style: {
                                                            fontSize: 16,
                                                            color: "".concat(
                                                                "light" === t
                                                                    ? "#FFF"
                                                                    : "#000",
                                                            ),
                                                        },
                                                        children: "0.0.1",
                                                    }),
                                                ],
                                            }),
                                        Object(y.jsx)(_.a, {
                                            children: Object(y.jsx)("a", {
                                                href: "https://bcode.cloud",
                                                target: "_blank",
                                                rel: "noreferrer",
                                                children: Object(y.jsxs)(_.a, {
                                                    style: M,
                                                    children: [
                                                        Object(y.jsx)(v.a, {
                                                            color: "".concat(
                                                                t,
                                                                ".logo",
                                                            ),
                                                            children:
                                                                "Powered by ",
                                                        }),
                                                        Object(y.jsx)(w.a, {
                                                            src: "/images/logo-bcode-bianco.png",
                                                            h:
                                                                "isDesktop" ===
                                                                R
                                                                    ? "40px"
                                                                    : "25px",
                                                            marginLeft: "10px",
                                                        }),
                                                    ],
                                                }),
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    });
                }),
                G = c(352),
                K = {
                    light: {
                        bg: "#ffffff",
                        topbar: "#1f2223",
                        colorSelector: "#fcec00",
                        logo: "#365088",
                        text: "#000000",
                        textBg: "#ffffff",
                        dragandrop: "#EDF5F6",
                        button: "#365088",
                        textAreaColor: "#000",
                        version: "#000",
                    },
                    dark: {
                        bg: "#1F2223",
                        topbar: "#365088",
                        colorSelector: "#fcec00",
                        logo: "#1f2223",
                        text: "#ffffff",
                        textBg: "#40474a",
                        dragandrop: "#4e5152",
                        button: "#365088",
                        textAreaColor: "#FFF",
                        version: "#000",
                    },
                },
                Q = Object(G.a)(n);
            var Y = function () {
                    return Object(y.jsx)(s.a, {
                        theme: Q,
                        children: Object(y.jsx)(q, {}),
                    });
                },
                Z = function (e) {
                    e &&
                        e instanceof Function &&
                        c
                            .e(3)
                            .then(c.bind(null, 357))
                            .then(function (t) {
                                var c = t.getCLS,
                                    a = t.getFID,
                                    n = t.getFCP,
                                    o = t.getLCP,
                                    r = t.getTTFB;
                                c(e), a(e), n(e), o(e), r(e);
                            });
                },
                $ = c(189),
                ee = c(80),
                te = c(190),
                ce = c.n(te),
                ae = c(191),
                ne = c(192),
                oe = { theme: "light" };
            var re = Object(ae.a)(ne.a, {
                    user: function () {
                        var e =
                                arguments.length > 0 && void 0 !== arguments[0]
                                    ? arguments[0]
                                    : oe,
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        switch (t.type) {
                            case m:
                                return (e.theme = t.payload), e;
                            default:
                                return e;
                        }
                    },
                }),
                ie = function (e, t) {
                    return t instanceof Date ? t.toISOString() : t;
                },
                le = function (e, t) {
                    return "string" === typeof t &&
                        t.match(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/)
                        ? new Date(t)
                        : t;
                },
                se = {
                    key: "root",
                    storage: ce.a,
                    whitelist: ["user"],
                    transforms: [
                        Object(ee.a)(
                            function (e) {
                                return JSON.stringify(e, ie);
                            },
                            function (e) {
                                return JSON.parse(e, le);
                            },
                        ),
                    ],
                },
                he = Object(ee.b)(se, re),
                ue = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || O.d,
                be = Object(O.e)(he, ue(O.a.apply(void 0, []))),
                fe = Object(ee.c)(be);
            l.a.render(
                Object(y.jsx)(r.a.StrictMode, {
                    children: Object(y.jsx)(g.a, {
                        store: be,
                        children: Object(y.jsx)($.a, {
                            loading: null,
                            persistor: fe,
                            children: Object(y.jsx)(Y, {}),
                        }),
                    }),
                }),
                document.getElementById("root"),
            ),
                Z();
        },
    },
    [[335, 1, 2]],
]);
//# sourceMappingURL=main.65096a36.chunk.js.map
