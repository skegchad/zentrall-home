module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Downloads/zentrall-home-copia/src/app/(marketplace)/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage,
    "dynamic",
    ()=>dynamic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$zentrall$2d$home$2d$copia$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Downloads/zentrall-home-copia/node_modules/.pnpm/next@16.1.6_@babel+core@7.2_4ccaf965d42dba01b2528b2f6f1925d7/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '../core/marketplace/catalog.service'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../modules/marketplace/data/prisma-mappers'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '../modules/marketplace/pages/home-page'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
const dynamic = "force-dynamic";
async function HomePage() {
    const storefrontBusinesses = await listMarketplaceBusinesses();
    const visibleBusinesses = storefrontBusinesses.slice(0, 20);
    const businessCount = storefrontBusinesses.length;
    const initialStores = visibleBusinesses.map((business)=>mapToStore({
            ...business,
            products: business.products.slice(0, 6),
            reviews: business.storeReviews
        }));
    const initialProducts = visibleBusinesses.flatMap((business)=>business.products.slice(0, 6).map((product)=>mapToProduct(product, {
                name: business.name,
                slug: business.slug,
                category: business.category,
                zone: business.zone,
                marketplaceTags: business.marketplaceTags,
                reviews: business.storeReviews
            })));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Downloads$2f$zentrall$2d$home$2d$copia$2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$1$2e$6_$40$babel$2b$core$40$7$2e$2_4ccaf965d42dba01b2528b2f6f1925d7$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(MarketplaceHomePage, {
        initialStores: initialStores,
        initialProducts: initialProducts,
        businessCount: businessCount
    }, void 0, false, {
        fileName: "[project]/Downloads/zentrall-home-copia/src/app/(marketplace)/page.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
}),
"[project]/Downloads/zentrall-home-copia/src/app/(marketplace)/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Downloads/zentrall-home-copia/src/app/(marketplace)/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__bf9cb2d8._.js.map