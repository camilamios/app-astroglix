module.exports = {

"[project]/.next-internal/server/app/api/create-kirvano-payment/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/lib/stripe.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Configuração da Kirvano
__turbopack_context__.s({
    "KIRVANO_CONFIG": ()=>KIRVANO_CONFIG,
    "createKirvanoPaymentUrl": ()=>createKirvanoPaymentUrl
});
const KIRVANO_CONFIG = {
    checkoutUrl: 'https://pay.kirvano.com/d7908b12-5e92-44b7-bffc-9e3433b7ff9d',
    currency: 'BRL',
    country: 'BR',
    productName: 'Relatório Místico Completo',
    productDescription: 'Numerologia, Astrologia, Zodíaco Chinês e Astrocartografia',
    price: 29.90
};
const createKirvanoPaymentUrl = (customerData, baseUrl, successUrl, cancelUrl)=>{
    const checkoutUrl = baseUrl || KIRVANO_CONFIG.checkoutUrl;
    const params = new URLSearchParams({
        customer_name: customerData.name,
        customer_email: customerData.email,
        ...customerData.cpf && {
            customer_cpf: customerData.cpf
        },
        ...successUrl && {
            success_url: successUrl
        },
        ...cancelUrl && {
            cancel_url: cancelUrl
        }
    });
    return `${checkoutUrl}?${params.toString()}`;
};
}),
"[externals]/fs/promises [external] (fs/promises, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/app/api/create-kirvano-payment/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stripe.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
async function POST(request) {
    try {
        const { planType, amount, currency, customerData, personalData } = await request.json();
        console.log('🔥 Criando pagamento Kirvano:', {
            planType,
            amount,
            currency
        });
        // Validação dos dados obrigatórios
        if (!customerData.name || !customerData.email) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Nome e email são obrigatórios para o pagamento.'
            }, {
                status: 400
            });
        }
        // Validação do valor
        if (amount !== __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KIRVANO_CONFIG"].price) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                error: 'Valor do produto não corresponde ao esperado.'
            }, {
                status: 400
            });
        }
        // Gerar ID único para a sessão de pagamento
        const paymentId = `kirvano_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
        // URLs de callback para sucesso e cancelamento
        const successUrl = `${request.nextUrl.origin}/payment/redirect`;
        const cancelUrl = `${request.nextUrl.origin}/success?status=canceled&canceled=true`;
        // Salvar dados do usuário temporariamente para gerar o relatório após pagamento
        if (personalData) {
            try {
                const dataToSave = {
                    paymentId,
                    customerData,
                    personalData,
                    timestamp: new Date().toISOString(),
                    planType,
                    amount
                };
                // Criar diretório de dados temporários se não existir
                const dataDir = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(process.cwd(), 'tmp');
                const filePath = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["join"])(dataDir, `${paymentId}.json`);
                // Salvar dados em arquivo temporário
                await (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["writeFile"])(filePath, JSON.stringify(dataToSave, null, 2));
                console.log('✅ Dados salvos temporariamente:', paymentId);
            } catch (saveError) {
                console.error('⚠️ Erro ao salvar dados temporários:', saveError);
            // Continue mesmo se não conseguir salvar
            }
        }
        // Cria a URL de pagamento personalizada com URLs de retorno
        const paymentUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["createKirvanoPaymentUrl"])({
            name: customerData.name,
            email: customerData.email,
            cpf: customerData.cpf // Opcional
        }, undefined, successUrl, cancelUrl);
        console.log('✅ URL Kirvano criada:', paymentUrl);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            paymentUrl,
            paymentId,
            paymentMethod: 'kirvano',
            data: {
                url: paymentUrl,
                paymentId,
                customerData: {
                    name: customerData.name,
                    email: customerData.email
                },
                product: {
                    name: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KIRVANO_CONFIG"].productName,
                    description: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KIRVANO_CONFIG"].productDescription,
                    price: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KIRVANO_CONFIG"].price,
                    currency: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["KIRVANO_CONFIG"].currency
                }
            }
        });
    } catch (error) {
        console.error('💥 Erro ao criar pagamento Kirvano:', error);
        let errorMessage = 'Erro interno do servidor';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            error: errorMessage
        }, {
            status: 500
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bcd9b8f2._.js.map