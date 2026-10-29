module.exports = [
"[project]/src/app/icon.svg.mjs { IMAGE => \"[project]/src/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/icon.svg.mjs { IMAGE => \"[project]/src/app/icon.svg (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/modules/marketplace/data/catalog-data.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "catalogProducts",
    ()=>catalogProducts,
    "catalogStores",
    ()=>catalogStores
]);
const placeholderDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. " + "Descubre productos ideales para tus proyectos y necesidades.";
const catalogProducts = [
    {
        id: "p1",
        uuid: "c02521e8-83b3-4004-91fa-cb755667f199",
        name: "Traje de Baño Mujer",
        price: 50,
        category: "General",
        storeId: "dz",
        storeName: "CreacionesDZ",
        description: placeholderDescription,
        rating: 0,
        reviews: 0,
        href: "/producto/c02521e8-83b3-4004-91fa-cb755667f199",
        image: "/producto/c02521e8-83b3-4004-91fa-cb755667f199.png",
        tint: "from-stone-100 to-amber-100"
    },
    {
        id: "p2",
        uuid: "TEMP-UUID-p2",
        name: "Oasis",
        price: 0.71,
        oldPrice: 0.75,
        discount: 5,
        category: "Velas",
        storeId: "dovi",
        storeName: "DOVI INSUMOS",
        description: placeholderDescription,
        rating: 4.5,
        reviews: 0,
        href: "/producto/TEMP-UUID-p2",
        tint: "from-amber-100 to-orange-100"
    },
    {
        id: "p3",
        uuid: "TEMP-UUID-p3",
        name: "Molde Papá Noel de pie",
        price: 6.55,
        oldPrice: 6.9,
        discount: 5,
        category: "Velas",
        storeId: "dovi",
        storeName: "DOVI INSUMOS",
        description: placeholderDescription,
        rating: 4.5,
        reviews: 0,
        href: "/producto/TEMP-UUID-p3",
        tint: "from-red-100 to-orange-100"
    },
    {
        id: "p4",
        uuid: "TEMP-UUID-p4",
        name: "Fragancia Berry Bliss 120ml",
        price: 11.4,
        oldPrice: 12,
        discount: 5,
        category: "Velas",
        storeId: "dovi",
        storeName: "DOVI INSUMOS",
        description: placeholderDescription,
        rating: 4.5,
        reviews: 0,
        href: "/producto/TEMP-UUID-p4",
        tint: "from-pink-100 to-rose-100"
    },
    {
        id: "p5",
        uuid: "TEMP-UUID-p5",
        name: "Plancha navideña grande",
        price: 3.61,
        oldPrice: 3.8,
        discount: 5,
        category: "Velas",
        storeId: "dovi",
        storeName: "DOVI INSUMOS",
        description: placeholderDescription,
        rating: 4.5,
        reviews: 0,
        href: "/producto/TEMP-UUID-p5",
        tint: "from-green-100 to-emerald-100"
    },
    {
        id: "p6",
        uuid: "TEMP-UUID-p6",
        name: "Mini bubble x15",
        price: 9.83,
        oldPrice: 10.35,
        discount: 5,
        category: "Velas",
        storeId: "dovi",
        storeName: "DOVI INSUMOS",
        description: placeholderDescription,
        rating: 4.5,
        reviews: 0,
        href: "/producto/TEMP-UUID-p6",
        tint: "from-violet-100 to-purple-100"
    },
    {
        id: "p7",
        uuid: "TEMP-UUID-p7",
        name: "Bolso tejido a mano",
        price: 18,
        category: "General",
        storeId: "dz",
        storeName: "CreacionesDZ",
        description: placeholderDescription,
        rating: 4.5,
        reviews: 0,
        href: "/producto/TEMP-UUID-p7",
        tint: "from-stone-100 to-amber-100"
    },
    {
        id: "p8",
        uuid: "TEMP-UUID-p8",
        name: "Set crochet verano",
        price: 24.5,
        category: "General",
        storeId: "dz",
        storeName: "CreacionesDZ",
        description: placeholderDescription,
        rating: 4.5,
        reviews: 0,
        href: "/producto/TEMP-UUID-p8",
        tint: "from-teal-100 to-cyan-100"
    }
];
const catalogStores = [
    {
        id: "dz",
        slug: "dz",
        name: "CreacionesDZ",
        category: "General",
        description: placeholderDescription,
        hours: null,
        whatsapp: "593991234567",
        deliveryToday: false,
        isNew: false,
        verified: false,
        rating: 4.5,
        reviews: 0,
        reviewCount: 0,
        href: "/tiendas/dz"
    },
    {
        id: "dovi",
        logo: "/tiendas/dovi/logo.png",
        cover: "/tiendas/dovi/hero-banner.png",
        slug: "dovi",
        name: "DOVI INSUMOS",
        category: "Velas",
        description: placeholderDescription,
        hours: null,
        whatsapp: "593987654321",
        deliveryToday: false,
        isNew: false,
        verified: false,
        rating: 4.5,
        reviews: 0,
        reviewCount: 0,
        href: "/tiendas/dovi"
    }
];
}),
"[project]/src/modules/marketplace/components/product-detail/product-detail.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetail",
    ()=>ProductDetail
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductDetail() from the server but ProductDetail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/marketplace/components/product-detail/product-detail.tsx <module evaluation>", "ProductDetail");
}),
"[project]/src/modules/marketplace/components/product-detail/product-detail.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductDetail",
    ()=>ProductDetail
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductDetail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductDetail() from the server but ProductDetail is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/marketplace/components/product-detail/product-detail.tsx", "ProductDetail");
}),
"[project]/src/modules/marketplace/components/product-detail/product-detail.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-detail.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-detail.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/modules/marketplace/components/product-detail/product-gallery.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductGallery",
    ()=>ProductGallery
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ProductGallery({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "self-start rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-3 [box-shadow:var(--sombra-suave)] sm:p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl ${product.image ? "bg-[var(--color-imagen)]" : `bg-gradient-to-br ${product.tint}`}`,
            children: [
                product.discount ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute left-3 top-3 z-10 rounded-full bg-[var(--color-descuento)] px-3 py-1 text-xs font-bold text-white",
                    style: {
                        fontFamily: "var(--font-mono, ui-monospace, monospace)"
                    },
                    children: [
                        "-",
                        product.discount,
                        "%"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/modules/marketplace/components/product-detail/product-gallery.tsx",
                    lineNumber: 18,
                    columnNumber: 11
                }, this) : null,
                product.image ? // eslint-disable-next-line @next/next/no-img-element
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: product.image,
                    alt: product.name,
                    className: "h-full w-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/src/modules/marketplace/components/product-detail/product-gallery.tsx",
                    lineNumber: 28,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "px-6 text-center text-[11px] uppercase tracking-[0.2em] text-black/50",
                    style: {
                        fontFamily: "var(--font-mono, ui-monospace, monospace)"
                    },
                    children: "Imagen del producto"
                }, void 0, false, {
                    fileName: "[project]/src/modules/marketplace/components/product-detail/product-gallery.tsx",
                    lineNumber: 34,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/modules/marketplace/components/product-detail/product-gallery.tsx",
            lineNumber: 10,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/modules/marketplace/components/product-detail/product-gallery.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/marketplace/components/product-detail/product-rating.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductRating",
    ()=>ProductRating
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
;
function ProductRating({ value, reviews }) {
    const MONO = "var(--font-mono, ui-monospace, monospace)";
    if (reviews <= 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-3 text-sm text-[var(--color-texto-suave)]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: MONO
                },
                className: "text-xs",
                children: "Este producto aún no tiene reseñas"
            }, void 0, false, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-rating.tsx",
                lineNumber: 12,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/modules/marketplace/components/product-detail/product-rating.tsx",
            lineNumber: 11,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-3 flex items-center gap-3 text-sm text-[var(--color-texto-suave)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-label": `Valoración de ${value} sobre 5`,
                className: "flex gap-0.5 text-[var(--tienda-estrella)]",
                children: Array.from({
                    length: 5
                }, (_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        "aria-hidden": "true",
                        className: index < Math.round(value) ? "" : "opacity-25",
                        children: "★"
                    }, index, false, {
                        fileName: "[project]/src/modules/marketplace/components/product-detail/product-rating.tsx",
                        lineNumber: 26,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-rating.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    fontFamily: MONO
                },
                className: "text-xs",
                children: [
                    value.toFixed(1),
                    " · ",
                    reviews,
                    " reseñas"
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-rating.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/marketplace/components/product-detail/product-rating.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductPurchase",
    ()=>ProductPurchase
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductPurchase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductPurchase() from the server but ProductPurchase is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx <module evaluation>", "ProductPurchase");
}),
"[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductPurchase",
    ()=>ProductPurchase
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const ProductPurchase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call ProductPurchase() from the server but ProductPurchase is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx", "ProductPurchase");
}),
"[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$purchase$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$purchase$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$purchase$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/modules/marketplace/components/product-detail/product-store.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductStore",
    ()=>ProductStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$577$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/lucide-react@0.577.0_react@19.2.3/node_modules/lucide-react/dist/esm/icons/store.js [app-rsc] (ecmascript) <export default as Store>");
;
;
;
const FOCUS = "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-primario)]";
function ProductStore({ product }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8 flex items-center gap-4 rounded-3xl border border-[var(--color-borde)] bg-[var(--color-tarjeta)] p-4 [box-shadow:var(--sombra-suave)]",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "grid h-12 w-12 shrink-0 place-items-center rounded-full border-[3px] border-[var(--tienda-acento)] bg-[var(--color-superficie)] text-lg font-extrabold text-[var(--color-primario)]",
                children: product.storeName.charAt(0).toUpperCase()
            }, void 0, false, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-store.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-w-0 flex-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-[10px] uppercase tracking-[0.2em] text-[var(--color-texto-suave)]",
                        style: {
                            fontFamily: "var(--font-mono, ui-monospace, monospace)"
                        },
                        children: "Vendido por"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/marketplace/components/product-detail/product-store.tsx",
                        lineNumber: 20,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "truncate font-extrabold",
                        children: product.storeName
                    }, void 0, false, {
                        fileName: "[project]/src/modules/marketplace/components/product-detail/product-store.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-store.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                href: product.href,
                className: `inline-flex shrink-0 items-center gap-1.5 rounded-[10px] border border-[var(--color-borde)] px-3.5 py-2.5 text-xs font-bold transition hover:-translate-y-px hover:border-[var(--color-primario)] ${FOCUS}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$lucide$2d$react$40$0$2e$577$2e$0_react$40$19$2e$2$2e$3$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$store$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Store$3e$__["Store"], {
                        size: 14,
                        "aria-hidden": true
                    }, void 0, false, {
                        fileName: "[project]/src/modules/marketplace/components/product-detail/product-store.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, this),
                    "Ver tienda"
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-store.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/marketplace/components/product-detail/product-store.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/marketplace/components/product-detail/product-info.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ProductInfo",
    ()=>ProductInfo
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$rating$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-rating.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$purchase$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$store$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-store.tsx [app-rsc] (ecmascript)");
;
;
;
;
function ProductInfo({ product, whatsapp }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "flex flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-[11px] font-semibold uppercase tracking-[0.15em] text-[var(--color-precio)]",
                style: {
                    fontFamily: "var(--font-mono, ui-monospace, monospace)"
                },
                children: product.category
            }, void 0, false, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "mt-2 text-[clamp(2rem,4.2vw,3rem)] font-bold leading-[1.05] tracking-tight",
                style: {
                    fontFamily: "var(--font-display, 'Arvo', Georgia, serif)"
                },
                children: product.name
            }, void 0, false, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                lineNumber: 21,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$rating$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductRating"], {
                value: product.rating,
                reviews: product.reviews
            }, void 0, false, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                lineNumber: 28,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex flex-wrap items-baseline gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-4xl font-extrabold text-[var(--color-primario)]",
                        children: [
                            "$",
                            product.price.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, this),
                    product.oldPrice !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-sm text-[var(--color-texto-suave)] line-through",
                        children: [
                            "$",
                            product.oldPrice.toFixed(2)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$purchase$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductPurchase"], {
                product: product,
                whatsapp: whatsapp
            }, void 0, false, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "border-b border-[var(--color-borde)] pb-3 text-lg font-bold",
                        style: {
                            fontFamily: "var(--font-display, 'Arvo', Georgia, serif)"
                        },
                        children: "Descripción"
                    }, void 0, false, {
                        fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 max-w-[62ch] leading-7 text-[var(--color-texto-suave)]",
                        children: product.description
                    }, void 0, false, {
                        fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$store$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductStore"], {
                product: product
            }, void 0, false, {
                fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/modules/marketplace/components/product-detail/product-info.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/modules/marketplace/components/product-detail/index.ts [app-rsc] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-detail.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$gallery$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-gallery.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$info$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-info.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$purchase$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-purchase.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$rating$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-rating.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$store$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-store.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/src/app/(marketplace)/producto/[id]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$data$2f$catalog$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/data/catalog-data.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$index$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/index.ts [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/modules/marketplace/components/product-detail/product-detail.tsx [app-rsc] (ecmascript)");
;
;
;
;
async function ProductPage({ params }) {
    const { id } = await params;
    const product = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$data$2f$catalog$2d$data$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["catalogProducts"].find((item)=>item.uuid === id);
    if (!product) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$modules$2f$marketplace$2f$components$2f$product$2d$detail$2f$product$2d$detail$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ProductDetail"], {
        product: product
    }, void 0, false, {
        fileName: "[project]/src/app/(marketplace)/producto/[id]/page.tsx",
        lineNumber: 23,
        columnNumber: 10
    }, this);
}
}),
"[project]/src/app/(marketplace)/producto/[id]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/(marketplace)/producto/[id]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__5d9731f5._.js.map