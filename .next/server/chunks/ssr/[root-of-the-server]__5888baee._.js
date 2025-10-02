module.exports = {

"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

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
"[project]/src/app/success/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>SuccessPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-ssr] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function SuccessPage() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const sessionId = searchParams.get('session_id');
    const canceled = searchParams.get('canceled');
    const paymentId = searchParams.get('payment_id');
    const status = searchParams.get('status');
    const autoGenerate = searchParams.get('auto_generate');
    const [paymentStatus, setPaymentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [reportData, setReportData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeneratingReport, setIsGeneratingReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Função para gerar o relatório místico COMPLETO
    const calculateCompleteNumerology = (fullName, date)=>{
        const reduceToSingleDigit = (num)=>{
            while(num > 9 && num !== 11 && num !== 22 && num !== 33){
                num = num.toString().split('').reduce((sum, digit)=>sum + parseInt(digit), 0);
            }
            return num;
        };
        const getLetterValue = (letter)=>{
            const values = {
                a: 1,
                b: 2,
                c: 3,
                d: 4,
                e: 5,
                f: 6,
                g: 7,
                h: 8,
                i: 9,
                j: 1,
                k: 2,
                l: 3,
                m: 4,
                n: 5,
                o: 6,
                p: 7,
                q: 8,
                r: 9,
                s: 1,
                t: 2,
                u: 3,
                v: 4,
                w: 5,
                x: 6,
                y: 7,
                z: 8
            };
            return values[letter.toLowerCase()] || 0;
        };
        const birthDate = new Date(date);
        const day = birthDate.getDate();
        const month = birthDate.getMonth() + 1;
        const year = birthDate.getFullYear();
        // Números básicos
        const dateNumbers = date.replace(/\D/g, '').split('').map(Number);
        const lifePathSum = dateNumbers.reduce((sum, num)=>sum + num, 0);
        const lifePathNumber = reduceToSingleDigit(lifePathSum);
        const consonants = fullName.toLowerCase().replace(/[aeiouàáâãäèéêëìíîïòóôõöùúûü\s]/g, '');
        const personalitySum = consonants.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const personalityNumber = reduceToSingleDigit(personalitySum);
        const vowels = fullName.toLowerCase().replace(/[^aeiouàáâãäèéêëìíîïòóôõöùúûü]/g, '');
        const soulSum = vowels.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const soulNumber = reduceToSingleDigit(soulSum);
        const allLetters = fullName.toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '');
        const destinySum = allLetters.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const destinyNumber = reduceToSingleDigit(destinySum);
        // Número Psíquico (dia de nascimento)
        const psychicNumber = reduceToSingleDigit(day);
        // Talentos Ocultos (números que aparecem menos no nome)
        const nameNumbers = allLetters.split('').map((char)=>getLetterValue(char));
        const numberFrequency = nameNumbers.reduce((acc, num)=>{
            acc[num] = (acc[num] || 0) + 1;
            return acc;
        }, {});
        const missingNumbers = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ].filter((n)=>!numberFrequency[n]);
        const hiddenTalents = missingNumbers.length > 0 ? missingNumbers : [
            Object.keys(numberFrequency).reduce((a, b)=>numberFrequency[parseInt(a)] < numberFrequency[parseInt(b)] ? a : b)
        ];
        // Lições Cármicas (números faltantes no nome)
        const karmicLessons = missingNumbers;
        // Dívidas Cármicas (13, 14, 16, 19)
        const karmicDebts = [];
        if (destinySum === 13 || destinySum === 14 || destinySum === 16 || destinySum === 19) karmicDebts.push(destinySum);
        if (lifePathSum === 13 || lifePathSum === 14 || lifePathSum === 16 || lifePathSum === 19) karmicDebts.push(lifePathSum);
        // Ciclos de Vida (divididos em 3 períodos)
        const firstCycle = reduceToSingleDigit(month);
        const secondCycle = reduceToSingleDigit(day);
        const thirdCycle = reduceToSingleDigit(year);
        // Ano, Mês e Dia Pessoal (baseado na data atual)
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();
        const personalYearSum = month + day + reduceToSingleDigit(currentYear);
        const personalYear = reduceToSingleDigit(personalYearSum);
        const personalMonthSum = personalYear + currentMonth;
        const personalMonth = reduceToSingleDigit(personalMonthSum);
        const personalDaySum = personalMonth + currentDay;
        const personalDay = reduceToSingleDigit(personalDaySum);
        // Desafios (diferenças entre números)
        const challenge1 = Math.abs(reduceToSingleDigit(month) - reduceToSingleDigit(day));
        const challenge2 = Math.abs(reduceToSingleDigit(day) - reduceToSingleDigit(year));
        const challenge3 = Math.abs(challenge1 - challenge2);
        const challenge4 = Math.abs(reduceToSingleDigit(month) - reduceToSingleDigit(year));
        // Momentos Decisivos (Pinnacles)
        const pinnacle1 = reduceToSingleDigit(month + day);
        const pinnacle2 = reduceToSingleDigit(day + year);
        const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2);
        const pinnacle4 = reduceToSingleDigit(month + year);
        return {
            lifePathNumber,
            personalityNumber,
            soulNumber,
            destinyNumber,
            expressionNumber: destinyNumber,
            impressionNumber: personalityNumber,
            psychicNumber,
            hiddenTalents,
            karmicLessons,
            karmicDebts,
            lifeCycles: {
                first: firstCycle,
                second: secondCycle,
                third: thirdCycle
            },
            personalYear,
            personalMonth,
            personalDay,
            challenges: [
                challenge1,
                challenge2,
                challenge3,
                challenge4
            ],
            pinnacles: [
                pinnacle1,
                pinnacle2,
                pinnacle3,
                pinnacle4
            ]
        };
    };
    const calculateAstrology = (date, time, place)=>{
        const birthDate = new Date(date);
        const month = birthDate.getMonth() + 1;
        const day = birthDate.getDate();
        // Determinar signo solar
        let sunSign = '';
        if (month === 3 && day >= 21 || month === 4 && day <= 19) sunSign = 'Áries';
        else if (month === 4 && day >= 20 || month === 5 && day <= 20) sunSign = 'Touro';
        else if (month === 5 && day >= 21 || month === 6 && day <= 20) sunSign = 'Gêmeos';
        else if (month === 6 && day >= 21 || month === 7 && day <= 22) sunSign = 'Câncer';
        else if (month === 7 && day >= 23 || month === 8 && day <= 22) sunSign = 'Leão';
        else if (month === 8 && day >= 23 || month === 9 && day <= 22) sunSign = 'Virgem';
        else if (month === 9 && day >= 23 || month === 10 && day <= 22) sunSign = 'Libra';
        else if (month === 10 && day >= 23 || month === 11 && day <= 21) sunSign = 'Escorpião';
        else if (month === 11 && day >= 22 || month === 12 && day <= 21) sunSign = 'Sagitário';
        else if (month === 12 && day >= 22 || month === 1 && day <= 19) sunSign = 'Capricórnio';
        else if (month === 1 && day >= 20 || month === 2 && day <= 18) sunSign = 'Aquário';
        else sunSign = 'Peixes';
        const signs = [
            'Áries',
            'Touro',
            'Gêmeos',
            'Câncer',
            'Leão',
            'Virgem',
            'Libra',
            'Escorpião',
            'Sagitário',
            'Capricórnio',
            'Aquário',
            'Peixes'
        ];
        const moonSign = signs[(day + month) % signs.length];
        const ascendant = signs[day * month % signs.length];
        return {
            sunSign,
            moonSign,
            ascendant,
            planets: {
                'Mercúrio': {
                    sign: signs[(day + 1) % signs.length],
                    house: day % 12 + 1
                },
                'Vênus': {
                    sign: signs[(day + 2) % signs.length],
                    house: (day + 1) % 12 + 1
                },
                'Marte': {
                    sign: signs[(day + 3) % signs.length],
                    house: (day + 2) % 12 + 1
                }
            },
            aspects: [
                `Sol em ${sunSign} em conjunção com Mercúrio - comunicação poderosa`,
                `Lua em ${moonSign} em trígono com Vênus - harmonia emocional`
            ],
            currentTransits: [
                'Júpiter transitando pela casa 7 - período favorável para relacionamentos',
                'Saturno transitando pela casa 10 - foco na carreira'
            ],
            houses: {
                1: 'Personalidade e aparência física',
                2: 'Valores pessoais e recursos financeiros',
                3: 'Comunicação e relacionamentos próximos',
                4: 'Lar, família e raízes emocionais',
                5: 'Criatividade, romance e filhos',
                6: 'Trabalho, saúde e rotina diária',
                7: 'Relacionamentos e parcerias',
                8: 'Transformação e recursos compartilhados',
                9: 'Filosofia, viagens e ensino superior',
                10: 'Carreira e reputação pública',
                11: 'Amizades e objetivos futuros',
                12: 'Espiritualidade e subconsciente'
            }
        };
    };
    const getChineseZodiac = (date)=>{
        const year = new Date(date).getFullYear();
        const zodiacIndex = year % 12;
        const elementIndex = year % 10;
        // Determinar elemento baseado no ano
        const elements = [
            'Metal',
            'Metal',
            'Água',
            'Água',
            'Madeira',
            'Madeira',
            'Fogo',
            'Fogo',
            'Terra',
            'Terra'
        ];
        const element = elements[elementIndex];
        // Determinar Yin ou Yang (anos pares = Yang, ímpares = Yin)
        const yinYang = year % 2 === 0 ? 'Yang' : 'Yin';
        const chineseZodiacData = {
            0: {
                animal: 'Macaco',
                traits: [
                    'Inteligente',
                    'Criativo',
                    'Versátil',
                    'Curioso'
                ],
                luckyNumbers: [
                    4,
                    9
                ],
                strengths: 'Adaptabilidade excepcional, pensamento rápido, habilidade para resolver problemas complexos',
                weaknesses: 'Pode ser impaciente, disperso e ter dificuldade em manter o foco',
                careerTalents: 'Empreendedorismo, vendas, tecnologia, entretenimento',
                loveCompatibility: [
                    'Rato',
                    'Dragão'
                ],
                careerCompatibility: [
                    'Rato',
                    'Serpente'
                ],
                challenges: 'Aprender a ter paciência e persistência nas tarefas'
            },
            1: {
                animal: 'Galo',
                traits: [
                    'Corajoso',
                    'Honesto',
                    'Trabalhador',
                    'Pontual'
                ],
                luckyNumbers: [
                    5,
                    7,
                    8
                ],
                strengths: 'Organização impecável, confiabilidade, dedicação ao trabalho',
                weaknesses: 'Perfeccionismo excessivo, pode ser crítico demais',
                careerTalents: 'Administração, contabilidade, medicina, ensino',
                loveCompatibility: [
                    'Boi',
                    'Serpente'
                ],
                careerCompatibility: [
                    'Dragão',
                    'Serpente'
                ],
                challenges: 'Aceitar imperfeições e desenvolver flexibilidade'
            },
            2: {
                animal: 'Cão',
                traits: [
                    'Leal',
                    'Responsável',
                    'Confiável',
                    'Protetor'
                ],
                luckyNumbers: [
                    3,
                    4,
                    9
                ],
                strengths: 'Lealdade inabalável, senso de justiça, habilidade de inspirar confiança',
                weaknesses: 'Tendência à preocupação excessiva e ansiedade',
                careerTalents: 'Advocacia, serviço social, segurança, medicina veterinária',
                loveCompatibility: [
                    'Tigre',
                    'Cavalo'
                ],
                careerCompatibility: [
                    'Coelho',
                    'Tigre'
                ],
                challenges: 'Aprender a relaxar e confiar mais nos outros'
            },
            3: {
                animal: 'Porco',
                traits: [
                    'Generoso',
                    'Compassivo',
                    'Diligente',
                    'Sincero'
                ],
                luckyNumbers: [
                    2,
                    5,
                    8
                ],
                strengths: 'Bondade natural, capacidade de perdoar, amor pela vida',
                weaknesses: 'Ingenuidade, tendência a ser usado pelos outros',
                careerTalents: 'Hospitalidade, artes culinárias, assistência social, artes',
                loveCompatibility: [
                    'Cabra',
                    'Coelho'
                ],
                careerCompatibility: [
                    'Tigre',
                    'Cabra'
                ],
                challenges: 'Desenvolver discernimento e estabelecer limites saudáveis'
            },
            4: {
                animal: 'Rato',
                traits: [
                    'Inteligente',
                    'Adaptável',
                    'Charmoso',
                    'Ambicioso'
                ],
                luckyNumbers: [
                    2,
                    3
                ],
                strengths: 'Perspicácia nos negócios, charme natural, habilidade de economizar',
                weaknesses: 'Pode ser ganancioso ou excessivamente crítico',
                careerTalents: 'Finanças, negócios, escrita, pesquisa',
                loveCompatibility: [
                    'Dragão',
                    'Macaco'
                ],
                careerCompatibility: [
                    'Boi',
                    'Macaco'
                ],
                challenges: 'Equilibrar ambição com generosidade'
            },
            5: {
                animal: 'Boi',
                traits: [
                    'Determinado',
                    'Confiável',
                    'Forte',
                    'Metódico'
                ],
                luckyNumbers: [
                    1,
                    9
                ],
                strengths: 'Perseverança extraordinária, força de vontade, confiabilidade total',
                weaknesses: 'Teimosia, resistência a mudanças',
                careerTalents: 'Agricultura, construção, medicina, administração',
                loveCompatibility: [
                    'Rato',
                    'Serpente'
                ],
                careerCompatibility: [
                    'Galo',
                    'Serpente'
                ],
                challenges: 'Desenvolver flexibilidade e abertura para novas ideias'
            },
            6: {
                animal: 'Tigre',
                traits: [
                    'Corajoso',
                    'Competitivo',
                    'Carismático',
                    'Aventureiro'
                ],
                luckyNumbers: [
                    1,
                    3,
                    4
                ],
                strengths: 'Liderança natural, coragem incomparável, carisma magnético',
                weaknesses: 'Impulsividade, tendência a assumir riscos desnecessários',
                careerTalents: 'Liderança, esportes, militares, empreendedorismo',
                loveCompatibility: [
                    'Cavalo',
                    'Cão'
                ],
                careerCompatibility: [
                    'Dragão',
                    'Cavalo'
                ],
                challenges: 'Aprender a pensar antes de agir e desenvolver paciência'
            },
            7: {
                animal: 'Coelho',
                traits: [
                    'Gentil',
                    'Elegante',
                    'Responsável',
                    'Diplomático'
                ],
                luckyNumbers: [
                    3,
                    4,
                    6
                ],
                strengths: 'Diplomacia refinada, sensibilidade artística, habilidade de mediar conflitos',
                weaknesses: 'Indecisão, evitação de confrontos',
                careerTalents: 'Artes, design, diplomacia, psicologia',
                loveCompatibility: [
                    'Cabra',
                    'Porco'
                ],
                careerCompatibility: [
                    'Cão',
                    'Porco'
                ],
                challenges: 'Desenvolver assertividade e tomar decisões difíceis'
            },
            8: {
                animal: 'Dragão',
                traits: [
                    'Confiante',
                    'Inteligente',
                    'Entusiasmado',
                    'Visionário'
                ],
                luckyNumbers: [
                    1,
                    6,
                    7
                ],
                strengths: 'Energia ilimitada, visão de futuro, capacidade de inspirar multidões',
                weaknesses: 'Arrogância, impaciência com detalhes',
                careerTalents: 'Política, entretenimento, inovação tecnológica, liderança empresarial',
                loveCompatibility: [
                    'Rato',
                    'Macaco'
                ],
                careerCompatibility: [
                    'Galo',
                    'Rato'
                ],
                challenges: 'Cultivar humildade e atenção aos detalhes'
            },
            9: {
                animal: 'Serpente',
                traits: [
                    'Sábio',
                    'Intuitivo',
                    'Misterioso',
                    'Sofisticado'
                ],
                luckyNumbers: [
                    2,
                    8,
                    9
                ],
                strengths: 'Sabedoria profunda, intuição aguçada, capacidade analítica',
                weaknesses: 'Desconfiança, tendência ao ciúme',
                careerTalents: 'Filosofia, pesquisa científica, investimentos, psicologia',
                loveCompatibility: [
                    'Boi',
                    'Galo'
                ],
                careerCompatibility: [
                    'Macaco',
                    'Galo'
                ],
                challenges: 'Aprender a confiar e ser mais aberto emocionalmente'
            },
            10: {
                animal: 'Cavalo',
                traits: [
                    'Energético',
                    'Independente',
                    'Alegre',
                    'Livre'
                ],
                luckyNumbers: [
                    2,
                    3,
                    7
                ],
                strengths: 'Independência robusta, otimismo contagiante, energia inesgotável',
                weaknesses: 'Inquietude, dificuldade em compromissos de longo prazo',
                careerTalents: 'Viagens, jornalismo, esportes, vendas',
                loveCompatibility: [
                    'Tigre',
                    'Cão'
                ],
                careerCompatibility: [
                    'Cabra',
                    'Tigre'
                ],
                challenges: 'Desenvolver consistência e honrar compromissos'
            },
            11: {
                animal: 'Cabra',
                traits: [
                    'Gentil',
                    'Compassivo',
                    'Artístico',
                    'Pacífico'
                ],
                luckyNumbers: [
                    3,
                    9,
                    4
                ],
                strengths: 'Criatividade excepcional, empatia profunda, habilidades artísticas',
                weaknesses: 'Insegurança, dependência emocional',
                careerTalents: 'Artes plásticas, música, terapia, design',
                loveCompatibility: [
                    'Coelho',
                    'Porco'
                ],
                careerCompatibility: [
                    'Cavalo',
                    'Porco'
                ],
                challenges: 'Construir autoconfiança e independência emocional'
            }
        };
        const zodiac = chineseZodiacData[zodiacIndex];
        return {
            ...zodiac,
            element,
            yinYang,
            fullSign: `${zodiac.animal} de ${element} ${yinYang}`
        };
    };
    const calculateAstrocartography = (fullName, date, time, place)=>{
        const generatePersonalHash = (data)=>{
            let hash = 0;
            for(let i = 0; i < data.length; i++){
                const char = data.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash;
            }
            return Math.abs(hash);
        };
        const personalData = `${fullName}${date}${time}${place}`.toLowerCase().replace(/\s/g, '');
        const personalHash = generatePersonalHash(personalData);
        const birthDate = new Date(date);
        const birthDay = birthDate.getDate();
        const birthMonth = birthDate.getMonth() + 1;
        const nameLength = fullName.replace(/\s/g, '').length;
        const sunIndex = (personalHash + birthDay) % 100;
        const moonIndex = (personalHash + birthMonth) % 100;
        const venusIndex = (personalHash + nameLength) % 100;
        const worldLocations = {
            solar: [
                'Los Angeles, EUA',
                'Sydney, Austrália',
                'Tóquio, Japão',
                'Dubai, EAU',
                'São Paulo, Brasil'
            ],
            lunar: [
                'Londres, Reino Unido',
                'Dublin, Irlanda',
                'Amsterdam, Holanda',
                'Vancouver, Canadá'
            ],
            venus: [
                'Paris, França',
                'Veneza, Itália',
                'Rio de Janeiro, Brasil',
                'Bali, Indonésia'
            ]
        };
        const selectPersonalizedLocations = (locationArray, index, count = 3)=>{
            const selected = [];
            for(let i = 0; i < count; i++){
                const locationIndex = (index + i * 7) % locationArray.length;
                selected.push(locationArray[locationIndex]);
            }
            return selected;
        };
        const sunLines = selectPersonalizedLocations(worldLocations.solar, sunIndex, 4);
        const moonLines = selectPersonalizedLocations(worldLocations.lunar, moonIndex, 4);
        const venusLines = selectPersonalizedLocations(worldLocations.venus, venusIndex, 4);
        return {
            sunLines,
            moonLines,
            venusLines,
            marsLines: [
                'Berlim, Alemanha',
                'Seul, Coreia do Sul',
                'Hong Kong',
                'Nova York, EUA'
            ],
            jupiterLines: [
                'Nova Delhi, Índia',
                'Bangkok, Tailândia',
                'Cairo, Egito',
                'Jerusalém, Israel'
            ],
            saturnLines: [
                'Moscou, Rússia',
                'Oslo, Noruega',
                'Helsinki, Finlândia',
                'Montreal, Canadá'
            ],
            favorableLocations: {
                'Amor e Relacionamentos': selectPersonalizedLocations(worldLocations.venus, venusIndex, 5),
                'Carreira e Sucesso': selectPersonalizedLocations([
                    ...worldLocations.solar
                ], sunIndex, 5),
                'Espiritualidade e Crescimento': selectPersonalizedLocations([
                    ...worldLocations.lunar
                ], moonIndex, 5)
            },
            challengingLocations: {
                'Tensões Emocionais': [
                    'Moscou, Rússia',
                    'Helsinki, Finlândia'
                ],
                'Desafios Financeiros': [
                    'Berlim, Alemanha',
                    'Seul, Coreia do Sul'
                ]
            },
            recommendations: [
                `Para ${fullName}: Suas linhas solares em ${sunLines[0]} são especialmente poderosas durante o verão`,
                `Baseado em sua data de nascimento, ${venusLines[0]} oferece as melhores oportunidades românticas`,
                `Seu local de nascimento (${place}) cria uma conexão especial com ${moonLines[0]} para equilíbrio emocional`
            ],
            personalizedAnalysis: `Baseado em sua configuração astrológica única - nascido(a) em ${new Date(date).toLocaleDateString('pt-BR')} ${time ? `às ${time}` : ''} em ${place} - seu mapa astrocartográfico revela padrões energéticos específicos. Suas linhas planetárias mais poderosas se concentram em ${sunLines[0]} (linha solar) para liderança e reconhecimento, ${venusLines[0]} (linha de Vênus) para amor e relacionamentos, e ${moonLines[0]} (linha lunar) para equilíbrio emocional.`
        };
    };
    const fetchAndGenerateReport = async (paymentId)=>{
        setIsGeneratingReport(true);
        try {
            let result = null;
            // Se temos payment_id, tentar buscar dados específicos
            if (paymentId) {
                const response = await fetch(`/api/get-report?payment_id=${paymentId}`);
                result = await response.json();
            }
            // Se não encontrou dados específicos, tentar buscar pelo localStorage
            if (!result?.success && "undefined" !== 'undefined') //TURBOPACK unreachable
            ;
            if (result?.success && result.data) {
                const { personalData } = result.data;
                // Gerar relatório místico COMPLETO
                const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate);
                const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, personalData.birthPlace);
                const chineseZodiac = getChineseZodiac(personalData.birthDate);
                const astrocartography = calculateAstrocartography(personalData.fullName, personalData.birthDate, personalData.birthTime, personalData.birthPlace);
                setReportData({
                    personalData,
                    numerology,
                    astrology,
                    chineseZodiac,
                    astrocartography
                });
                // Limpar dados temporários e localStorage
                if (result.data.paymentId) {
                    await fetch(`/api/get-report?payment_id=${result.data.paymentId}`, {
                        method: 'DELETE'
                    });
                }
                if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
                ;
            }
        } catch (error) {
            console.error('Erro ao gerar relatório:', error);
        } finally{
            setIsGeneratingReport(false);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (canceled) {
            setPaymentStatus('error');
            return;
        }
        // Para Kirvano, verificamos o status e payment_id
        if (status === 'success' || paymentId || sessionId) {
            setPaymentStatus('success');
            // Se temos paymentId e auto_generate=true, buscar dados e gerar relatório automaticamente
            if (paymentId && autoGenerate === 'true') {
                fetchAndGenerateReport(paymentId);
            } else if (paymentId) {
                // Se não tem auto_generate, tentar buscar dados mesmo assim
                fetchAndGenerateReport(paymentId);
            } else if (autoGenerate === 'true') {
                // Se não tem payment_id mas tem auto_generate, tentar buscar dados pelo localStorage
                fetchAndGenerateReport();
            }
        } else if (status === 'error' || status === 'canceled') {
            setPaymentStatus('error');
        } else {
            // Se não temos parâmetros claros, assumimos sucesso se estamos nesta página
            setPaymentStatus('success');
        }
    }, [
        sessionId,
        canceled,
        paymentId,
        status,
        autoGenerate
    ]);
    if (paymentStatus === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 504,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: "Verificando status do pagamento..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 505,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 503,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 502,
            columnNumber: 7
        }, this);
    }
    if (paymentStatus === 'success') {
        // Se está gerando o relatório, mostrar loading
        if (isGeneratingReport) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-8 h-8 text-green-600 dark:text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 518,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 517,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                            children: "Pagamento Realizado com Sucesso! 🎉"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 521,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 526,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-400",
                                    children: "Gerando seu Relatório Místico Completo..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 527,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 525,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-purple-700 dark:text-purple-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "ID da Transação:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 534,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        paymentId || sessionId || 'Processando...'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 533,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-purple-600 dark:text-purple-400 mt-1",
                                    children: "Pagamento processado com segurança via Kirvano"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 536,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 532,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 516,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 515,
                columnNumber: 9
            }, this);
        }
        // Se tem relatório, mostrar o relatório completo
        if (reportData) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-6 sm:py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 553,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                                    children: "Relatório Místico Completo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2",
                                    children: reportData.personalData.fullName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 558,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base text-gray-500 dark:text-gray-500",
                                    children: [
                                        "Nascido em ",
                                        new Date(reportData.personalData.birthDate).toLocaleDateString('pt-BR')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 561,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic",
                                    children: '"Conhece-te a ti mesmo e conhecerás o universo e os deuses" - Oráculo de Delfos'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 564,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 551,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-6 sm:mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Calculator, {
                                                className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 573,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 572,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                                            children: "Numerologia Pitagórica"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 575,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                            children: "Os números sagrados que governam sua existência"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 578,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 587,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 586,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg text-gray-800 dark:text-gray-200",
                                                        children: "Caminho da Vida"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 589,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2",
                                                        children: reportData.numerology.lifePathNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 590,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "Sua missão principal nesta encarnação"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 593,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 585,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 584,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 602,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 601,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg text-gray-800 dark:text-gray-200",
                                                        children: "Número do Destino"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 604,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2",
                                                        children: reportData.numerology.destinyNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "Seu potencial máximo a ser alcançado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 608,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 600,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 599,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 617,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 616,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg text-gray-800 dark:text-gray-200",
                                                        children: "Número da Alma"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 619,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2",
                                                        children: reportData.numerology.soulNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 620,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "Suas motivações mais profundas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 623,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 615,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 614,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                                            className: "w-6 h-6 text-white"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 632,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 631,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-bold text-lg text-gray-800 dark:text-gray-200",
                                                        children: "Personalidade"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 634,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2",
                                                        children: reportData.numerology.personalityNumber
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 635,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-600 dark:text-gray-400",
                                                        children: "Como outros te percebem"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/success/page.tsx",
                                                        lineNumber: 638,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 630,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 629,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 583,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 570,
                            columnNumber: 13
                        }, this),
                        reportData.astrology && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-6 sm:mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                                className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 651,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 650,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                                            children: "2. Astrologia Ocidental"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 653,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                            children: "O mapa celeste que revela sua personalidade e destino"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 656,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 649,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-2",
                                                    children: "Signo Solar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 663,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2",
                                                    children: reportData.astrology.sunSign
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 664,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Sua essência e personalidade básica"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 665,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 662,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-2",
                                                    children: "Signo Lunar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 668,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2",
                                                    children: reportData.astrology.moonSign
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 669,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Suas emoções e instintos"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 670,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 667,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-2",
                                                    children: "Ascendente"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 673,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2",
                                                    children: reportData.astrology.ascendant
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 674,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                    children: "Como você aparece para o mundo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 675,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 672,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 661,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-4",
                                                    children: "Aspectos Importantes"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 681,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: reportData.astrology.aspects?.slice(0, 3).map((aspect, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400 flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 685,
                                                                    columnNumber: 27
                                                                }, this),
                                                                aspect
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 684,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 682,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 680,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-4",
                                                    children: "Trânsitos Atuais"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 692,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    className: "space-y-2",
                                                    children: reportData.astrology.currentTransits?.slice(0, 3).map((transit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: "text-sm text-gray-600 dark:text-gray-400 flex items-start",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 696,
                                                                    columnNumber: 27
                                                                }, this),
                                                                transit
                                                            ]
                                                        }, index, true, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 695,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 693,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 691,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 679,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 648,
                            columnNumber: 15
                        }, this),
                        reportData.chineseZodiac && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-2xl p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-6 sm:mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                                className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 711,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 710,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                                            children: "3. Zodíaco Chinês"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 713,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                            children: "A sabedoria milenar do oriente sobre sua personalidade"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 716,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 709,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-center mb-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-3xl font-bold text-red-600 dark:text-red-400 mb-2",
                                                    children: reportData.chineseZodiac.animal
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 723,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg text-gray-600 dark:text-gray-400",
                                                    children: [
                                                        "Elemento: ",
                                                        reportData.chineseZodiac.element
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 724,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 722,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-3",
                                                            children: "Características Principais"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 729,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: reportData.chineseZodiac.traits?.map((trait, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm",
                                                                    children: trait
                                                                }, index, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 732,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 730,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 728,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                            className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-3",
                                                            children: "Números da Sorte"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 739,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex gap-2",
                                                            children: reportData.chineseZodiac.luckyNumbers?.map((number, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "w-10 h-10 bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 rounded-full flex items-center justify-center font-bold",
                                                                    children: number
                                                                }, index, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 742,
                                                                    columnNumber: 27
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 740,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 738,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 727,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 721,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 708,
                            columnNumber: 15
                        }, this),
                        reportData.astrocartography && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 rounded-2xl p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center mb-6 sm:mb-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                                className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/success/page.tsx",
                                                lineNumber: 758,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 757,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                                            children: "4. Astrocartografia"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 760,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                            children: "Os locais do mundo onde sua energia flui melhor"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 763,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 756,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-4",
                                                    children: "Linhas Planetárias"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 770,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-green-600 dark:text-green-400 mb-2",
                                                                    children: "Linha Solar (Liderança)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 773,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                                    children: reportData.astrocartography.sunLines?.[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 774,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 772,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-green-600 dark:text-green-400 mb-2",
                                                                    children: "Linha de Vênus (Amor)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 777,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                                    children: reportData.astrocartography.venusLines?.[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 778,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 776,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-green-600 dark:text-green-400 mb-2",
                                                                    children: "Linha Lunar (Emoções)"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 781,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                                    children: reportData.astrocartography.moonLines?.[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 782,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 780,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 771,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 769,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-4",
                                                    children: "Locais Favoráveis"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 788,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "space-y-3",
                                                    children: reportData.astrocartography.favorableLocations && Object.entries(reportData.astrocartography.favorableLocations).map(([category, locations])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                                    className: "font-semibold text-teal-600 dark:text-teal-400 mb-1",
                                                                    children: category
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 792,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                    className: "text-sm text-gray-600 dark:text-gray-400",
                                                                    children: locations?.[0]
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/success/page.tsx",
                                                                    lineNumber: 793,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, category, true, {
                                                            fileName: "[project]/src/app/success/page.tsx",
                                                            lineNumber: 791,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/success/page.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 768,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-bold text-lg text-gray-800 dark:text-gray-200 mb-4",
                                            children: "Análise Personalizada"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 801,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-gray-600 dark:text-gray-400 leading-relaxed",
                                            children: reportData.astrocartography.personalizedAnalysis
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 802,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 800,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 755,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Star, {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 812,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 811,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                                    children: "Sua Jornada de Autoconhecimento e Transformação"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 814,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-4xl mx-auto space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Este relatório é muito mais que uma simples análise - é um mapa sagrado para sua jornada de autoconhecimento e crescimento espiritual. Cada número, cada posição planetária, cada símbolo chinês carrega uma mensagem especial do universo para você."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 818,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Use essas informações como uma bússola em sua caminhada pela vida. Lembre-se: você tem o poder de criar sua própria realidade, e agora possui as ferramentas ancestrais para fazê-lo de forma mais sábia, consciente e alinhada com seu propósito divino."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 822,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 817,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 sm:mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl max-w-2xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2",
                                            children: '"O conhecimento de si mesmo é o começo de toda sabedoria."'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 828,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic",
                                            children: "- Aristóteles"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 831,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 827,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "✨ Que este relatório ilumine seu caminho e desperte a magia que já existe dentro de você ✨"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 836,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 835,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 810,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 846,
                                        columnNumber: 17
                                    }, this),
                                    "Gerar Novo Relatório"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 842,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 841,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 549,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 548,
                columnNumber: 9
            }, this);
        }
        // Se pagamento foi bem-sucedido mas ainda não tem relatório
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-8 h-8 text-green-600 dark:text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 860,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 859,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                        children: "Pagamento Realizado com Sucesso! 🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 863,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400 mb-6",
                        children: "Seu Relatório Místico Completo está sendo preparado. Em breve você receberá um email com todas as informações."
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 867,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-purple-700 dark:text-purple-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "ID da Transação:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 873,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    paymentId || sessionId || 'Processando...'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 872,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-purple-600 dark:text-purple-400 mt-1",
                                children: "Pagamento processado com segurança via Kirvano"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 875,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 871,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 884,
                                columnNumber: 13
                            }, this),
                            "Voltar ao Início"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 880,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 858,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 857,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                        className: "w-8 h-8 text-red-600 dark:text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 896,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 895,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                    children: "Pagamento Cancelado"
                }, void 0, false, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 899,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400 mb-6",
                    children: [
                        canceled ? 'Você cancelou o pagamento.' : 'Houve um problema com o pagamento.',
                        " Não se preocupe, você pode tentar novamente."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 903,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 911,
                            columnNumber: 11
                        }, this),
                        "Tentar Novamente"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 907,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 894,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/success/page.tsx",
        lineNumber: 893,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__5888baee._.js.map