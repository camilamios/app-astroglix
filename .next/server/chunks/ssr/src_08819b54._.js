module.exports = {

"[project]/src/lib/stripe.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
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
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>MysticReportApp
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-ssr] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/crown.js [app-ssr] (ecmascript) <export default as Crown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stripe.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
const chineseZodiacData = {
    0: {
        animal: 'Macaco',
        element: 'Metal',
        yinYang: 'Yang',
        traits: [
            'Inteligente',
            'Criativo',
            'Versátil',
            'Esperto',
            'Sociável'
        ],
        compatibility: [
            'Rato',
            'Dragão'
        ],
        luckyNumbers: [
            4,
            9
        ],
        luckyColors: [
            'Dourado',
            'Branco'
        ],
        careerAdvice: [
            'Tecnologia',
            'Comunicação',
            'Vendas',
            'Entretenimento'
        ],
        relationshipTips: [
            'Busque parceiros intelectuais',
            'Valorize a liberdade',
            'Comunique-se abertamente'
        ],
        challenges: [
            'Impaciência',
            'Superficialidade',
            'Inquietação'
        ],
        strengths: [
            'Adaptabilidade',
            'Inteligência',
            'Carisma'
        ]
    },
    1: {
        animal: 'Galo',
        element: 'Metal',
        yinYang: 'Yin',
        traits: [
            'Corajoso',
            'Honesto',
            'Trabalhador',
            'Pontual',
            'Organizado'
        ],
        compatibility: [
            'Boi',
            'Serpente'
        ],
        luckyNumbers: [
            5,
            7,
            8
        ],
        luckyColors: [
            'Dourado',
            'Marrom'
        ],
        careerAdvice: [
            'Administração',
            'Militar',
            'Agricultura',
            'Contabilidade'
        ],
        relationshipTips: [
            'Seja direto e honesto',
            'Valorize a lealdade',
            'Mantenha rotinas'
        ],
        challenges: [
            'Crítica excessiva',
            'Perfeccionismo',
            'Teimosia'
        ],
        strengths: [
            'Honestidade',
            'Determinação',
            'Organização'
        ]
    },
    2: {
        animal: 'Cão',
        element: 'Terra',
        yinYang: 'Yang',
        traits: [
            'Leal',
            'Responsável',
            'Confiável',
            'Justo',
            'Protetor'
        ],
        compatibility: [
            'Tigre',
            'Coelho'
        ],
        luckyNumbers: [
            3,
            4,
            9
        ],
        luckyColors: [
            'Verde',
            'Vermelho'
        ],
        careerAdvice: [
            'Direito',
            'Segurança',
            'Serviço Social',
            'Veterinária'
        ],
        relationshipTips: [
            'Construa confiança gradualmente',
            'Seja fiel',
            'Proteja quem ama'
        ],
        challenges: [
            'Pessimismo',
            'Ansiedade',
            'Desconfiança'
        ],
        strengths: [
            'Lealdade',
            'Justiça',
            'Proteção'
        ]
    },
    3: {
        animal: 'Porco',
        element: 'Terra',
        yinYang: 'Yin',
        traits: [
            'Generoso',
            'Compassivo',
            'Diligente',
            'Honesto',
            'Otimista'
        ],
        compatibility: [
            'Coelho',
            'Cabra'
        ],
        luckyNumbers: [
            2,
            5,
            8
        ],
        luckyColors: [
            'Amarelo',
            'Cinza'
        ],
        careerAdvice: [
            'Gastronomia',
            'Hospitalidade',
            'Finanças',
            'Arte'
        ],
        relationshipTips: [
            'Seja generoso com afeto',
            'Valorize a harmonia',
            'Cultive a paciência'
        ],
        challenges: [
            'Ingenuidade',
            'Materialismo',
            'Indulgência'
        ],
        strengths: [
            'Generosidade',
            'Honestidade',
            'Compaixão'
        ]
    },
    4: {
        animal: 'Rato',
        element: 'Metal',
        yinYang: 'Yang',
        traits: [
            'Inteligente',
            'Adaptável',
            'Charmoso',
            'Ambicioso',
            'Sociável'
        ],
        compatibility: [
            'Dragão',
            'Macaco'
        ],
        luckyNumbers: [
            2,
            3
        ],
        luckyColors: [
            'Azul',
            'Dourado'
        ],
        careerAdvice: [
            'Negócios',
            'Política',
            'Escritor',
            'Pesquisador'
        ],
        relationshipTips: [
            'Use seu charme natural',
            'Seja adaptável',
            'Mantenha-se interessante'
        ],
        challenges: [
            'Oportunismo',
            'Ganância',
            'Inquietação'
        ],
        strengths: [
            'Inteligência',
            'Adaptabilidade',
            'Charme'
        ]
    },
    5: {
        animal: 'Boi',
        element: 'Metal',
        yinYang: 'Yin',
        traits: [
            'Determinado',
            'Confiável',
            'Forte',
            'Paciente',
            'Metódico'
        ],
        compatibility: [
            'Serpente',
            'Galo'
        ],
        luckyNumbers: [
            1,
            9
        ],
        luckyColors: [
            'Azul',
            'Amarelo'
        ],
        careerAdvice: [
            'Agricultura',
            'Construção',
            'Medicina',
            'Engenharia'
        ],
        relationshipTips: [
            'Seja consistente',
            'Demonstre estabilidade',
            'Valorize tradições'
        ],
        challenges: [
            'Teimosia',
            'Lentidão',
            'Conservadorismo'
        ],
        strengths: [
            'Determinação',
            'Confiabilidade',
            'Paciência'
        ]
    },
    6: {
        animal: 'Tigre',
        element: 'Madeira',
        yinYang: 'Yang',
        traits: [
            'Corajoso',
            'Competitivo',
            'Imprevisível',
            'Carismático',
            'Independente'
        ],
        compatibility: [
            'Cavalo',
            'Cão'
        ],
        luckyNumbers: [
            1,
            3,
            4
        ],
        luckyColors: [
            'Azul',
            'Cinza'
        ],
        careerAdvice: [
            'Liderança',
            'Esportes',
            'Aventura',
            'Empreendedorismo'
        ],
        relationshipTips: [
            'Mantenha a paixão viva',
            'Respeite a independência',
            'Seja aventureiro'
        ],
        challenges: [
            'Impulsividade',
            'Rebeldia',
            'Impaciência'
        ],
        strengths: [
            'Coragem',
            'Liderança',
            'Carisma'
        ]
    },
    7: {
        animal: 'Coelho',
        element: 'Madeira',
        yinYang: 'Yin',
        traits: [
            'Gentil',
            'Elegante',
            'Responsável',
            'Diplomático',
            'Artístico'
        ],
        compatibility: [
            'Cabra',
            'Porco'
        ],
        luckyNumbers: [
            3,
            4,
            6
        ],
        luckyColors: [
            'Rosa',
            'Vermelho'
        ],
        careerAdvice: [
            'Arte',
            'Diplomacia',
            'Moda',
            'Decoração'
        ],
        relationshipTips: [
            'Cultive a elegância',
            'Seja diplomático',
            'Crie ambientes harmoniosos'
        ],
        challenges: [
            'Superficialidade',
            'Indecisão',
            'Pessimismo'
        ],
        strengths: [
            'Diplomacia',
            'Elegância',
            'Sensibilidade'
        ]
    },
    8: {
        animal: 'Dragão',
        element: 'Terra',
        yinYang: 'Yang',
        traits: [
            'Confiante',
            'Inteligente',
            'Entusiasmado',
            'Carismático',
            'Ambicioso'
        ],
        compatibility: [
            'Rato',
            'Macaco'
        ],
        luckyNumbers: [
            1,
            6,
            7
        ],
        luckyColors: [
            'Dourado',
            'Prata'
        ],
        careerAdvice: [
            'Liderança',
            'Política',
            'Entretenimento',
            'Inovação'
        ],
        relationshipTips: [
            'Seja magnético',
            'Inspire outros',
            'Mantenha o mistério'
        ],
        challenges: [
            'Arrogância',
            'Impaciência',
            'Dominação'
        ],
        strengths: [
            'Carisma',
            'Liderança',
            'Visão'
        ]
    },
    9: {
        animal: 'Serpente',
        element: 'Fogo',
        yinYang: 'Yin',
        traits: [
            'Sábio',
            'Intuitivo',
            'Misterioso',
            'Elegante',
            'Filosófico'
        ],
        compatibility: [
            'Boi',
            'Galo'
        ],
        luckyNumbers: [
            2,
            8,
            9
        ],
        luckyColors: [
            'Vermelho',
            'Amarelo'
        ],
        careerAdvice: [
            'Filosofia',
            'Psicologia',
            'Medicina',
            'Pesquisa'
        ],
        relationshipTips: [
            'Cultive o mistério',
            'Seja profundo',
            'Use sua intuição'
        ],
        challenges: [
            'Desconfiança',
            'Possessividade',
            'Frieza'
        ],
        strengths: [
            'Sabedoria',
            'Intuição',
            'Profundidade'
        ]
    },
    10: {
        animal: 'Cavalo',
        element: 'Fogo',
        yinYang: 'Yang',
        traits: [
            'Energético',
            'Independente',
            'Alegre',
            'Aventureiro',
            'Sociável'
        ],
        compatibility: [
            'Tigre',
            'Cão'
        ],
        luckyNumbers: [
            2,
            3,
            7
        ],
        luckyColors: [
            'Amarelo',
            'Verde'
        ],
        careerAdvice: [
            'Viagens',
            'Esportes',
            'Comunicação',
            'Vendas'
        ],
        relationshipTips: [
            'Mantenha a liberdade',
            'Seja espontâneo',
            'Compartilhe aventuras'
        ],
        challenges: [
            'Inconstância',
            'Impaciência',
            'Egoísmo'
        ],
        strengths: [
            'Energia',
            'Liberdade',
            'Otimismo'
        ]
    },
    11: {
        animal: 'Cabra',
        element: 'Terra',
        yinYang: 'Yin',
        traits: [
            'Gentil',
            'Compassivo',
            'Artístico',
            'Pacífico',
            'Intuitivo'
        ],
        compatibility: [
            'Coelho',
            'Porco'
        ],
        luckyNumbers: [
            3,
            9,
            4
        ],
        luckyColors: [
            'Verde',
            'Vermelho'
        ],
        careerAdvice: [
            'Arte',
            'Terapia',
            'Jardinagem',
            'Música'
        ],
        relationshipTips: [
            'Seja carinhoso',
            'Cultive a paz',
            'Expresse criatividade'
        ],
        challenges: [
            'Pessimismo',
            'Dependência',
            'Indecisão'
        ],
        strengths: [
            'Criatividade',
            'Compaixão',
            'Intuição'
        ]
    }
};
const numerologyMeanings = {
    1: {
        title: 'O Líder',
        description: 'Independente, pioneiro, ambicioso',
        color: 'from-red-500 to-pink-500',
        advice: 'Desenvolva sua liderança natural e confie em sua capacidade de iniciar projetos. Evite ser muito dominador.',
        positives: [
            'Liderança natural',
            'Independência',
            'Iniciativa',
            'Originalidade',
            'Determinação'
        ],
        negatives: [
            'Egoísmo',
            'Impaciência',
            'Arrogância',
            'Teimosia',
            'Dominação'
        ],
        practices: [
            'Medite sobre humildade',
            'Pratique trabalho em equipe',
            'Desenvolva paciência',
            'Cultive a empatia'
        ]
    },
    2: {
        title: 'O Cooperador',
        description: 'Diplomático, sensível, pacificador',
        color: 'from-blue-500 to-cyan-500',
        advice: 'Use sua habilidade natural para mediar conflitos e trabalhar em equipe. Evite ser muito dependente dos outros.',
        positives: [
            'Diplomacia',
            'Cooperação',
            'Sensibilidade',
            'Paciência',
            'Harmonia'
        ],
        negatives: [
            'Dependência',
            'Indecisão',
            'Timidez',
            'Pessimismo',
            'Submissão'
        ],
        practices: [
            'Fortaleça sua autoconfiança',
            'Tome decisões independentes',
            'Pratique assertividade',
            'Valorize suas opiniões'
        ]
    },
    3: {
        title: 'O Comunicador',
        description: 'Criativo, expressivo, otimista',
        color: 'from-yellow-500 to-orange-500',
        advice: 'Expresse sua criatividade através da arte, escrita ou comunicação. Evite dispersar sua energia em muitos projetos.',
        positives: [
            'Criatividade',
            'Comunicação',
            'Otimismo',
            'Inspiração',
            'Sociabilidade'
        ],
        negatives: [
            'Dispersão',
            'Superficialidade',
            'Exagero',
            'Crítica',
            'Instabilidade'
        ],
        practices: [
            'Foque em um projeto por vez',
            'Desenvolva disciplina',
            'Pratique escuta ativa',
            'Cultive profundidade'
        ]
    },
    4: {
        title: 'O Construtor',
        description: 'Prático, organizado, trabalhador',
        color: 'from-green-500 to-emerald-500',
        advice: 'Use sua disciplina para construir bases sólidas em sua vida. Evite ser muito rígido ou teimoso.',
        positives: [
            'Organização',
            'Disciplina',
            'Praticidade',
            'Confiabilidade',
            'Persistência'
        ],
        negatives: [
            'Rigidez',
            'Teimosia',
            'Limitação',
            'Pessimismo',
            'Rotina excessiva'
        ],
        practices: [
            'Cultive flexibilidade',
            'Abra-se para mudanças',
            'Pratique criatividade',
            'Desenvolva espontaneidade'
        ]
    },
    5: {
        title: 'O Aventureiro',
        description: 'Livre, versátil, curioso',
        color: 'from-purple-500 to-violet-500',
        advice: 'Abrace mudanças e novas experiências. Evite compromissos que limitem sua liberdade excessivamente.',
        positives: [
            'Liberdade',
            'Versatilidade',
            'Curiosidade',
            'Aventura',
            'Progresso'
        ],
        negatives: [
            'Instabilidade',
            'Impaciência',
            'Irresponsabilidade',
            'Superficialidade',
            'Inquietação'
        ],
        practices: [
            'Desenvolva compromisso',
            'Pratique responsabilidade',
            'Cultive paciência',
            'Aprofunde relacionamentos'
        ]
    },
    6: {
        title: 'O Cuidador',
        description: 'Responsável, amoroso, protetor',
        color: 'from-pink-500 to-rose-500',
        advice: 'Use seu dom natural para cuidar e nutrir outros. Evite se sacrificar demais pelos outros.',
        positives: [
            'Responsabilidade',
            'Amor',
            'Proteção',
            'Harmonia',
            'Cura'
        ],
        negatives: [
            'Sacrifício excessivo',
            'Interferência',
            'Preocupação',
            'Possessividade',
            'Mártir'
        ],
        practices: [
            'Pratique autocuidado',
            'Estabeleça limites',
            'Desenvolva independência',
            'Cultive autoamor'
        ]
    },
    7: {
        title: 'O Místico',
        description: 'Analítico, espiritual, introspectivo',
        color: 'from-indigo-500 to-purple-500',
        advice: 'Desenvolva sua espiritualidade e busque conhecimento profundo. Evite se isolar demais do mundo.',
        positives: [
            'Espiritualidade',
            'Análise',
            'Intuição',
            'Sabedoria',
            'Profundidade'
        ],
        negatives: [
            'Isolamento',
            'Pessimismo',
            'Crítica',
            'Frieza',
            'Melancolia'
        ],
        practices: [
            'Conecte-se com outros',
            'Pratique compaixão',
            'Desenvolva sociabilidade',
            'Cultive alegria'
        ]
    },
    8: {
        title: 'O Realizador',
        description: 'Ambicioso, material, poderoso',
        color: 'from-gray-600 to-gray-800',
        advice: 'Use sua ambição para alcançar sucesso material e reconhecimento. Evite ser muito materialista.',
        positives: [
            'Ambição',
            'Poder',
            'Organização',
            'Eficiência',
            'Sucesso'
        ],
        negatives: [
            'Materialismo',
            'Dominação',
            'Impaciência',
            'Estresse',
            'Workaholism'
        ],
        practices: [
            'Cultive espiritualidade',
            'Pratique generosidade',
            'Desenvolva paciência',
            'Valorize relacionamentos'
        ]
    },
    9: {
        title: 'O Humanitário',
        description: 'Generoso, compassivo, universal',
        color: 'from-teal-500 to-cyan-500',
        advice: 'Dedique-se a causas humanitárias e use sua compaixão para ajudar outros. Evite ser muito idealista.',
        positives: [
            'Compaixão',
            'Generosidade',
            'Sabedoria',
            'Universalidade',
            'Inspiração'
        ],
        negatives: [
            'Idealismo excessivo',
            'Dispersão',
            'Emoções intensas',
            'Sacrifício',
            'Desilusão'
        ],
        practices: [
            'Seja prático',
            'Foque objetivos',
            'Desenvolva realismo',
            'Cultive equilíbrio'
        ]
    },
    11: {
        title: 'O Visionário',
        description: 'Intuitivo, inspirador, espiritual',
        color: 'from-purple-600 to-indigo-600',
        advice: 'Confie em sua intuição e inspire outros com sua visão. Evite ser muito sensível às críticas.',
        positives: [
            'Intuição',
            'Inspiração',
            'Visão',
            'Espiritualidade',
            'Idealismo'
        ],
        negatives: [
            'Sensibilidade excessiva',
            'Nervosismo',
            'Impraticidade',
            'Extremos',
            'Instabilidade'
        ],
        practices: [
            'Desenvolva praticidade',
            'Fortaleça autoconfiança',
            'Pratique grounding',
            'Cultive estabilidade'
        ]
    },
    22: {
        title: 'O Mestre Construtor',
        description: 'Visionário prático, realizador de sonhos',
        color: 'from-emerald-600 to-teal-600',
        advice: 'Combine visão com praticidade para realizar grandes projetos. Evite se sobrecarregar com responsabilidades.',
        positives: [
            'Visão prática',
            'Liderança',
            'Construção',
            'Inspiração',
            'Realização'
        ],
        negatives: [
            'Pressão excessiva',
            'Perfeccionismo',
            'Estresse',
            'Impaciência',
            'Sobrecarga'
        ],
        practices: [
            'Pratique relaxamento',
            'Delegue responsabilidades',
            'Cultive paciência',
            'Desenvolva equilíbrio'
        ]
    },
    33: {
        title: 'O Mestre Professor',
        description: 'Curador, professor, guia espiritual',
        color: 'from-rose-600 to-pink-600',
        advice: 'Use seus dons para ensinar e curar outros. Evite carregar os problemas do mundo nos ombros.',
        positives: [
            'Cura',
            'Ensino',
            'Compaixão',
            'Sabedoria',
            'Orientação'
        ],
        negatives: [
            'Sacrifício excessivo',
            'Sobrecarga emocional',
            'Mártir',
            'Preocupação',
            'Estresse'
        ],
        practices: [
            'Pratique autocuidado',
            'Estabeleça limites',
            'Desenvolva desapego',
            'Cultive leveza'
        ]
    }
};
const astrologySigns = {
    'Áries': {
        element: 'Fogo',
        quality: 'Cardeal',
        ruler: 'Marte',
        traits: [
            'Corajoso',
            'Impulsivo',
            'Líder'
        ],
        description: 'Pioneiro natural, iniciador de projetos, energia dinâmica',
        challenges: [
            'Impaciência',
            'Impulsividade',
            'Egocentrismo'
        ],
        advice: 'Canalize sua energia em projetos construtivos e pratique paciência'
    },
    'Touro': {
        element: 'Terra',
        quality: 'Fixo',
        ruler: 'Vênus',
        traits: [
            'Estável',
            'Sensual',
            'Determinado'
        ],
        description: 'Busca segurança e estabilidade, aprecia prazeres da vida',
        challenges: [
            'Teimosia',
            'Materialismo',
            'Resistência à mudança'
        ],
        advice: 'Cultive flexibilidade e abra-se para novas experiências'
    },
    'Gêmeos': {
        element: 'Ar',
        quality: 'Mutável',
        ruler: 'Mercúrio',
        traits: [
            'Comunicativo',
            'Versátil',
            'Curioso'
        ],
        description: 'Mente ágil, comunicador nato, busca variedade e conhecimento',
        challenges: [
            'Dispersão',
            'Superficialidade',
            'Inconstância'
        ],
        advice: 'Foque em aprofundar conhecimentos e desenvolva consistência'
    },
    'Câncer': {
        element: 'Água',
        quality: 'Cardeal',
        ruler: 'Lua',
        traits: [
            'Emotivo',
            'Protetor',
            'Intuitivo'
        ],
        description: 'Altamente intuitivo, protetor da família, emocionalmente profundo',
        challenges: [
            'Mau humor',
            'Possessividade',
            'Insegurança'
        ],
        advice: 'Desenvolva autoconfiança e pratique desapego emocional'
    },
    'Leão': {
        element: 'Fogo',
        quality: 'Fixo',
        ruler: 'Sol',
        traits: [
            'Criativo',
            'Generoso',
            'Dramático'
        ],
        description: 'Criativo e expressivo, busca reconhecimento e admiração',
        challenges: [
            'Arrogância',
            'Egocentrismo',
            'Drama excessivo'
        ],
        advice: 'Pratique humildade e use sua criatividade para inspirar outros'
    },
    'Virgem': {
        element: 'Terra',
        quality: 'Mutável',
        ruler: 'Mercúrio',
        traits: [
            'Analítico',
            'Prático',
            'Perfeccionista'
        ],
        description: 'Detalhista e organizado, busca perfeição e eficiência',
        challenges: [
            'Crítica excessiva',
            'Preocupação',
            'Perfeccionismo'
        ],
        advice: 'Aceite imperfeições e pratique autocompaixão'
    },
    'Libra': {
        element: 'Ar',
        quality: 'Cardeal',
        ruler: 'Vênus',
        traits: [
            'Diplomático',
            'Harmonioso',
            'Justo'
        ],
        description: 'Busca equilíbrio e harmonia, diplomata natural',
        challenges: [
            'Indecisão',
            'Dependência',
            'Superficialidade'
        ],
        advice: 'Desenvolva autoconfiança e tome decisões independentes'
    },
    'Escorpião': {
        element: 'Água',
        quality: 'Fixo',
        ruler: 'Plutão',
        traits: [
            'Intenso',
            'Transformador',
            'Misterioso'
        ],
        description: 'Profundo e transformador, busca verdades ocultas',
        challenges: [
            'Possessividade',
            'Ciúme',
            'Vingança'
        ],
        advice: 'Pratique perdão e use sua intensidade para transformação positiva'
    },
    'Sagitário': {
        element: 'Fogo',
        quality: 'Mutável',
        ruler: 'Júpiter',
        traits: [
            'Aventureiro',
            'Filosófico',
            'Otimista'
        ],
        description: 'Busca conhecimento e aventura, filosofo natural',
        challenges: [
            'Exagero',
            'Impaciência',
            'Falta de tato'
        ],
        advice: 'Pratique moderação e desenvolva sensibilidade social'
    },
    'Capricórnio': {
        element: 'Terra',
        quality: 'Cardeal',
        ruler: 'Saturno',
        traits: [
            'Ambicioso',
            'Disciplinado',
            'Responsável'
        ],
        description: 'Ambicioso e disciplinado, busca status e reconhecimento',
        challenges: [
            'Pessimismo',
            'Rigidez',
            'Materialismo'
        ],
        advice: 'Cultive otimismo e valorize aspectos emocionais da vida'
    },
    'Aquário': {
        element: 'Ar',
        quality: 'Fixo',
        ruler: 'Urano',
        traits: [
            'Inovador',
            'Independente',
            'Humanitário'
        ],
        description: 'Visionário e humanitário, busca inovação e liberdade',
        challenges: [
            'Frieza',
            'Rebeldia',
            'Distanciamento'
        ],
        advice: 'Desenvolva intimidade emocional e pratique compaixão pessoal'
    },
    'Peixes': {
        element: 'Água',
        quality: 'Mutável',
        ruler: 'Netuno',
        traits: [
            'Intuitivo',
            'Compassivo',
            'Artístico'
        ],
        description: 'Altamente intuitivo e compassivo, conectado ao espiritual',
        challenges: [
            'Escapismo',
            'Confusão',
            'Vitimização'
        ],
        advice: 'Desenvolva praticidade e estabeleça limites claros'
    }
};
function MysticReportApp() {
    const [personalData, setPersonalData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        fullName: '',
        email: '',
        birthDate: '',
        birthTime: '',
        birthPlace: ''
    });
    const [currentStep, setCurrentStep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('report');
    const [mysticReport, setMysticReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessingPayment, setIsProcessingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentError, setPaymentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHoroscopeSubscribed, setIsHoroscopeSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
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
        // Número do Caminho da Vida (Missão)
        const dateNumbers = date.replace(/\D/g, '').split('').map(Number);
        const lifePathSum = dateNumbers.reduce((sum, num)=>sum + num, 0);
        const lifePathNumber = reduceToSingleDigit(lifePathSum);
        // Número da Personalidade (consoantes)
        const consonants = fullName.toLowerCase().replace(/[aeiouàáâãäèéêëìíîïòóôõöùúûü\s]/g, '');
        const personalitySum = consonants.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const personalityNumber = reduceToSingleDigit(personalitySum);
        // Número da Alma/Motivação (vogais)
        const vowels = fullName.toLowerCase().replace(/[^aeiouàáâãäèéêëìíîïòóôõöùúûü]/g, '');
        const soulSum = vowels.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const soulNumber = reduceToSingleDigit(soulSum);
        // Número do Destino/Expressão (nome completo)
        const allLetters = fullName.toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '');
        const destinySum = allLetters.split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const destinyNumber = reduceToSingleDigit(destinySum);
        // Número da Expressão (mesmo que destino)
        const expressionNumber = destinyNumber;
        // Número da Impressão (primeiro nome + sobrenome)
        const names = fullName.split(' ').filter((name)=>name.length > 0);
        const firstName = names[0] || '';
        const lastName = names[names.length - 1] || '';
        const impressionSum = (firstName + lastName).toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '').split('').reduce((sum, char)=>sum + getLetterValue(char), 0);
        const impressionNumber = reduceToSingleDigit(impressionSum);
        // Número Psíquico (dia de nascimento)
        const birthDay = new Date(date).getDate();
        const psychicNumber = reduceToSingleDigit(birthDay);
        // Talentos Ocultos e Lições Cármicas
        const nameNumbers = allLetters.split('').map((char)=>reduceToSingleDigit(getLetterValue(char)));
        const presentNumbers = [
            ...new Set(nameNumbers)
        ].filter((n)=>n > 0);
        const hiddenTalents = [
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ].filter((n)=>!presentNumbers.includes(n));
        const karmicLessons = hiddenTalents;
        // Dívidas Cármicas (números 13, 14, 16, 19)
        const karmicDebts = [];
        const checkKarmicDebt = (sum)=>{
            if (sum === 13 || sum === 14 || sum === 16 || sum === 19) {
                karmicDebts.push(sum);
            }
        };
        checkKarmicDebt(destinySum);
        checkKarmicDebt(personalitySum);
        checkKarmicDebt(soulSum);
        // Ciclos de Vida
        const birthDateObj = new Date(date);
        const cycle1 = reduceToSingleDigit(birthDateObj.getMonth() + 1);
        const cycle2 = reduceToSingleDigit(birthDateObj.getDate());
        const cycle3 = reduceToSingleDigit(birthDateObj.getFullYear());
        const lifeCycles = [
            cycle1,
            cycle2,
            cycle3
        ];
        // Números Pessoais Atuais
        const currentDate = new Date();
        const personalYear = reduceToSingleDigit(birthDateObj.getDate() + (birthDateObj.getMonth() + 1) + currentDate.getFullYear());
        const personalMonth = reduceToSingleDigit(personalYear + (currentDate.getMonth() + 1));
        const personalDay = reduceToSingleDigit(personalMonth + currentDate.getDate());
        // Desafios
        const challenge1 = Math.abs(birthDateObj.getDate() - (birthDateObj.getMonth() + 1));
        const challenge2 = Math.abs(birthDateObj.getDate() - birthDateObj.getFullYear() % 10);
        const challenge3 = Math.abs(challenge1 - challenge2);
        const challenge4 = Math.abs(lifePathNumber - destinyNumber);
        const challenges = [
            reduceToSingleDigit(challenge1 || 1),
            reduceToSingleDigit(challenge2 || 1),
            reduceToSingleDigit(challenge3 || 1),
            reduceToSingleDigit(challenge4 || 1)
        ];
        // Píncaros
        const pinnacle1 = reduceToSingleDigit(birthDateObj.getDate() + (birthDateObj.getMonth() + 1));
        const pinnacle2 = reduceToSingleDigit(birthDateObj.getDate() + birthDateObj.getFullYear() % 10);
        const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2);
        const pinnacle4 = reduceToSingleDigit(birthDateObj.getMonth() + 1 + birthDateObj.getFullYear() % 10);
        const pinnacles = [
            pinnacle1,
            pinnacle2,
            pinnacle3,
            pinnacle4
        ];
        // Momentos Decisivos
        const decisiveMoments = [
            Math.max(36 - lifePathNumber, 25),
            Math.max(45 - lifePathNumber, 35),
            Math.max(54 - lifePathNumber, 45)
        ];
        return {
            lifePathNumber,
            personalityNumber,
            soulNumber,
            destinyNumber,
            expressionNumber,
            impressionNumber,
            psychicNumber,
            hiddenTalents,
            karmicLessons,
            karmicDebts,
            lifeCycles,
            personalYear,
            personalMonth,
            personalDay,
            challenges,
            pinnacles,
            decisiveMoments
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
        // Simulação de outros elementos astrológicos
        const signs = Object.keys(astrologySigns);
        const moonSign = signs[(day + month) % signs.length];
        const ascendant = signs[day * month % signs.length];
        const planets = {
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
            },
            'Júpiter': {
                sign: signs[(day + 4) % signs.length],
                house: (day + 3) % 12 + 1
            },
            'Saturno': {
                sign: signs[(day + 5) % signs.length],
                house: (day + 4) % 12 + 1
            },
            'Urano': {
                sign: signs[(day + 6) % signs.length],
                house: (day + 5) % 12 + 1
            },
            'Netuno': {
                sign: signs[(day + 7) % signs.length],
                house: (day + 6) % 12 + 1
            },
            'Plutão': {
                sign: signs[(day + 8) % signs.length],
                house: (day + 7) % 12 + 1
            }
        };
        const aspects = [
            `Sol em ${sunSign} em conjunção com Mercúrio - comunicação poderosa`,
            `Lua em ${moonSign} em trígono com Vênus - harmonia emocional`,
            `Marte em quadratura com Saturno - desafios que fortalecem`,
            `Júpiter em sextil com Netuno - intuição expandida`,
            `Vênus em oposição com Plutão - transformação através do amor`
        ];
        const currentTransits = [
            'Júpiter transitando pela casa 7 - período favorável para relacionamentos e parcerias',
            'Saturno transitando pela casa 10 - foco na carreira e responsabilidades profissionais',
            'Urano transitando pela casa 2 - mudanças financeiras inesperadas e inovação',
            'Netuno transitando pela casa 12 - despertar espiritual e intuição aumentada',
            'Plutão transitando pela casa 8 - transformações profundas e renovação'
        ];
        const houses = {
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
        };
        return {
            sunSign,
            moonSign,
            ascendant,
            planets,
            aspects,
            currentTransits,
            houses
        };
    };
    const getChineseZodiac = (date)=>{
        const year = new Date(date).getFullYear();
        const zodiacIndex = year % 12;
        return chineseZodiacData[zodiacIndex];
    };
    const calculateAstrocartography = (fullName, date, time, place)=>{
        // Função para gerar hash baseado nos dados pessoais
        const generatePersonalHash = (data)=>{
            let hash = 0;
            for(let i = 0; i < data.length; i++){
                const char = data.charCodeAt(i);
                hash = (hash << 5) - hash + char;
                hash = hash & hash; // Converte para 32bit integer
            }
            return Math.abs(hash);
        };
        // Combina todos os dados pessoais para criar um hash único
        const personalData = `${fullName}${date}${time}${place}`.toLowerCase().replace(/\s/g, '');
        const personalHash = generatePersonalHash(personalData);
        // Extrai informações específicas dos dados
        const birthDate = new Date(date);
        const birthDay = birthDate.getDate();
        const birthMonth = birthDate.getMonth() + 1;
        const birthYear = birthDate.getFullYear();
        const nameLength = fullName.replace(/\s/g, '').length;
        // Calcula índices personalizados baseados nos dados reais
        const sunIndex = (personalHash + birthDay) % 100;
        const moonIndex = (personalHash + birthMonth) % 100;
        const venusIndex = (personalHash + nameLength) % 100;
        const marsIndex = (personalHash + birthYear) % 100;
        const jupiterIndex = (personalHash + birthDay + birthMonth) % 100;
        const saturnIndex = (personalHash + birthYear + nameLength) % 100;
        // Bancos de dados de locais organizados por continentes e características
        const worldLocations = {
            // Locais solares - liderança e vitalidade
            solar: [
                'Los Angeles, EUA',
                'Sydney, Austrália',
                'Tóquio, Japão',
                'Dubai, EAU',
                'Miami, EUA',
                'Barcelona, Espanha',
                'Tel Aviv, Israel',
                'Cidade do Cabo, África do Sul',
                'Singapura',
                'São Paulo, Brasil',
                'Mumbai, Índia',
                'Cairo, Egito',
                'Phoenix, EUA',
                'Gold Coast, Austrália',
                'Marrakech, Marrocos',
                'Las Vegas, EUA',
                'Nice, França',
                'Ibiza, Espanha',
                'Honolulu, EUA',
                'Rio de Janeiro, Brasil'
            ],
            // Locais lunares - emoções e intuição
            lunar: [
                'Londres, Reino Unido',
                'Dublin, Irlanda',
                'Edimburgo, Escócia',
                'Amsterdam, Holanda',
                'Copenhague, Dinamarca',
                'Estocolmo, Suécia',
                'Helsinki, Finlândia',
                'Reykjavik, Islândia',
                'Vancouver, Canadá',
                'Seattle, EUA',
                'Portland, EUA',
                'Bergen, Noruega',
                'Bruges, Bélgica',
                'Praga, República Tcheca',
                'Cracóvia, Polônia',
                'São Petersburgo, Rússia',
                'Tallinn, Estônia',
                'Riga, Letônia',
                'Vilnius, Lituânia',
                'Cork, Irlanda'
            ],
            // Locais venusianos - amor e beleza
            venus: [
                'Paris, França',
                'Veneza, Itália',
                'Florença, Itália',
                'Roma, Itália',
                'Viena, Áustria',
                'Buenos Aires, Argentina',
                'Rio de Janeiro, Brasil',
                'Bali, Indonésia',
                'Santorini, Grécia',
                'Mykonos, Grécia',
                'Provence, França',
                'Toscana, Itália',
                'Kyoto, Japão',
                'Charleston, EUA',
                'Savannah, EUA',
                'Quebec, Canadá',
                'Bruges, Bélgica',
                'Salzburgo, Áustria',
                'Sintra, Portugal',
                'Cartagena, Colômbia'
            ],
            // Locais marcianos - ação e energia
            mars: [
                'Berlim, Alemanha',
                'Seul, Coreia do Sul',
                'Hong Kong',
                'Nova York, EUA',
                'Chicago, EUA',
                'Frankfurt, Alemanha',
                'Zurich, Suíça',
                'Milão, Itália',
                'Santiago, Chile',
                'Bogotá, Colômbia',
                'Cidade do México, México',
                'Atlanta, EUA',
                'Dallas, EUA',
                'Houston, EUA',
                'Denver, EUA',
                'Calgary, Canadá',
                'Toronto, Canadá',
                'Manchester, Reino Unido',
                'Birmingham, Reino Unido',
                'Glasgow, Escócia'
            ],
            // Locais jupiterianos - expansão e sabedoria
            jupiter: [
                'Nova Delhi, Índia',
                'Varanasi, Índia',
                'Rishikesh, Índia',
                'Bangkok, Tailândia',
                'Chiang Mai, Tailândia',
                'Kathmandu, Nepal',
                'Lhasa, Tibet',
                'Cusco, Peru',
                'Machu Picchu, Peru',
                'Cairo, Egito',
                'Luxor, Egito',
                'Jerusalém, Israel',
                'Istambul, Turquia',
                'Fez, Marrocos',
                'Casablanca, Marrocos',
                'Jodhpur, Índia',
                'Jaipur, Índia',
                'Agra, Índia',
                'Dharamshala, Índia',
                'Goa, Índia'
            ],
            // Locais saturnianos - disciplina e estrutura
            saturn: [
                'Moscou, Rússia',
                'São Petersburgo, Rússia',
                'Oslo, Noruega',
                'Helsinki, Finlândia',
                'Reykjavik, Islândia',
                'Montreal, Canadá',
                'Quebec, Canadá',
                'Anchorage, EUA',
                'Fairbanks, EUA',
                'Nuuk, Groenlândia',
                'Tromsø, Noruega',
                'Murmansk, Rússia',
                'Arkhangelsk, Rússia',
                'Yakutsk, Rússia',
                'Irkutsk, Rússia',
                'Ulaanbaatar, Mongólia',
                'Almaty, Cazaquistão',
                'Bishkek, Quirguistão',
                'Tashkent, Uzbequistão',
                'Astana, Cazaquistão'
            ]
        };
        // Seleciona locais baseados nos índices personalizados
        const selectPersonalizedLocations = (locationArray, index, count = 3)=>{
            const selected = [];
            for(let i = 0; i < count; i++){
                const locationIndex = (index + i * 7) % locationArray.length;
                selected.push(locationArray[locationIndex]);
            }
            return selected;
        };
        // Gera linhas planetárias personalizadas
        const sunLines = selectPersonalizedLocations(worldLocations.solar, sunIndex, 4);
        const moonLines = selectPersonalizedLocations(worldLocations.lunar, moonIndex, 4);
        const venusLines = selectPersonalizedLocations(worldLocations.venus, venusIndex, 4);
        const marsLines = selectPersonalizedLocations(worldLocations.mars, marsIndex, 4);
        const jupiterLines = selectPersonalizedLocations(worldLocations.jupiter, jupiterIndex, 4);
        const saturnLines = selectPersonalizedLocations(worldLocations.saturn, saturnIndex, 4);
        // Locais favoráveis personalizados por categoria
        const favorableLocations = {
            'Amor e Relacionamentos': selectPersonalizedLocations(worldLocations.venus, venusIndex, 5),
            'Carreira e Sucesso': selectPersonalizedLocations([
                ...worldLocations.solar,
                ...worldLocations.mars
            ], sunIndex + marsIndex, 5),
            'Espiritualidade e Crescimento': selectPersonalizedLocations(worldLocations.jupiter, jupiterIndex, 5),
            'Criatividade e Arte': selectPersonalizedLocations([
                ...worldLocations.venus,
                ...worldLocations.lunar
            ], venusIndex + moonIndex, 5),
            'Saúde e Bem-estar': selectPersonalizedLocations([
                ...worldLocations.jupiter,
                ...worldLocations.lunar
            ], jupiterIndex + moonIndex, 5)
        };
        // Locais desafiadores personalizados
        const challengingLocations = {
            'Tensões Emocionais': selectPersonalizedLocations(worldLocations.saturn, saturnIndex, 3),
            'Desafios Financeiros': selectPersonalizedLocations([
                ...worldLocations.mars,
                ...worldLocations.saturn
            ], marsIndex + saturnIndex, 3),
            'Conflitos Familiares': selectPersonalizedLocations(worldLocations.mars, marsIndex + 13, 3),
            'Estresse Profissional': selectPersonalizedLocations(worldLocations.saturn, saturnIndex + 7, 3)
        };
        // Recomendações personalizadas baseadas no perfil astrológico
        const personalizedRecommendations = [
            `Para ${fullName}: Suas linhas solares em ${sunLines[0]} são especialmente poderosas durante o verão`,
            `Baseado em sua data de nascimento (${new Date(date).toLocaleDateString('pt-BR')}), ${venusLines[0]} oferece as melhores oportunidades românticas`,
            `Seu local de nascimento (${place}) cria uma conexão especial com ${jupiterLines[0]} para crescimento espiritual`,
            `Durante seu ano pessoal atual, considere visitar ${moonLines[0]} para equilíbrio emocional`,
            `Para decisões importantes, evite ${challengingLocations['Tensões Emocionais'][0]} durante eclipses lunares`
        ];
        // Análise personalizada detalhada
        const personalizedAnalysis = `
      Baseado em sua configuração astrológica única - nascido(a) em ${new Date(date).toLocaleDateString('pt-BR')} 
      ${time ? `às ${time}` : ''} em ${place} - seu mapa astrocartográfico revela padrões energéticos específicos. 
      
      Suas linhas planetárias mais poderosas se concentram em ${sunLines[0]} (linha solar) para liderança e reconhecimento, 
      ${venusLines[0]} (linha de Vênus) para amor e relacionamentos, e ${jupiterLines[0]} (linha de Júpiter) para 
      expansão e oportunidades.
      
      A combinação de seu nome "${fullName}" com sua data de nascimento cria uma assinatura energética única que 
      ressoa especialmente bem com as regiões mencionadas. Considere estes locais para mudanças importantes, 
      viagens transformadoras ou até mesmo para estabelecer residência.
    `;
        return {
            sunLines,
            moonLines,
            venusLines,
            marsLines,
            jupiterLines,
            saturnLines,
            favorableLocations,
            challengingLocations,
            recommendations: personalizedRecommendations,
            personalizedAnalysis
        };
    };
    const handlePayment = async ()=>{
        console.log('🔥 BOTÃO CLICADO! Função handlePayment executada para plano único R$29,90 - KIRVANO');
        setIsProcessingPayment(true);
        setPaymentError(null);
        try {
            // Validação básica antes de enviar
            if (!personalData.fullName.trim()) {
                throw new Error('Por favor, preencha seu nome completo antes de continuar com o pagamento.');
            }
            if (!personalData.email.trim()) {
                throw new Error('Por favor, preencha seu e-mail antes de continuar com o pagamento.');
            }
            if (!personalData.birthDate) {
                throw new Error('Por favor, preencha sua data de nascimento antes de continuar com o pagamento.');
            }
            console.log('✅ Validação passou, iniciando pagamento Kirvano para plano único R$29,90');
            // Timeout para requisições longas
            const controller = new AbortController();
            const timeoutId = setTimeout(()=>controller.abort(), 30000) // 30 segundos
            ;
            try {
                // Integração com Kirvano
                const response = await fetch('/api/create-kirvano-payment', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        planType: 'relatorio-mistico-completo',
                        amount: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KIRVANO_CONFIG"].price,
                        currency: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["KIRVANO_CONFIG"].currency,
                        customerData: {
                            name: personalData.fullName,
                            email: personalData.email
                        },
                        personalData: personalData // Incluir todos os dados pessoais para gerar o relatório
                    }),
                    signal: controller.signal
                });
                clearTimeout(timeoutId);
                console.log('📡 Status da resposta Kirvano:', response.status);
                let paymentData;
                try {
                    paymentData = await response.json();
                    console.log('📦 Dados de pagamento Kirvano recebidos:', paymentData);
                } catch (parseError) {
                    console.error('❌ Erro ao processar resposta Kirvano:', parseError);
                    throw new Error('Resposta inválida do servidor de pagamento');
                }
                if (!response.ok) {
                    console.error('❌ Erro na resposta Kirvano:', paymentData);
                    throw new Error(paymentData?.error || `Erro HTTP ${response.status}`);
                }
                if (paymentData.success) {
                    if (paymentData.paymentUrl) {
                        console.log('🚀 Redirecionando para Kirvano Checkout:', paymentData.paymentUrl);
                        // Salvar payment_id no localStorage para recuperar após o pagamento
                        if (paymentData.paymentId) {
                            localStorage.setItem('last_payment_id', paymentData.paymentId);
                            localStorage.setItem('last_customer_name', personalData.fullName);
                            localStorage.setItem('last_customer_email', personalData.email);
                        }
                        // Redirecionar para página de pagamento da Kirvano
                        window.location.href = paymentData.paymentUrl;
                    } else {
                        throw new Error('URL de pagamento não recebida da Kirvano');
                    }
                } else {
                    throw new Error(paymentData.error || 'Falha ao criar sessão de pagamento na Kirvano');
                }
            } catch (fetchError) {
                clearTimeout(timeoutId);
                if (fetchError instanceof Error && fetchError.name === 'AbortError') {
                    throw new Error('Tempo limite excedido. Verifique sua conexão e tente novamente.');
                }
                throw fetchError;
            }
        } catch (error) {
            console.error('💥 Erro no pagamento Kirvano:', error);
            // Mensagens de erro mais específicas para o usuário
            let userMessage = 'Erro ao processar pagamento. Tente novamente.';
            if (error instanceof Error) {
                if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
                    userMessage = 'Erro de conexão. Verifique sua internet e tente novamente.';
                } else if (error.message.includes('Kirvano') || error.message.includes('KIRVANO')) {
                    userMessage = 'Erro de configuração da Kirvano. Entre em contato com o suporte.';
                } else if (error.message.includes('inválidos') || error.message.includes('invalid')) {
                    userMessage = 'Dados de pagamento inválidos. Verifique as informações.';
                } else if (error.message.includes('não encontrado') || error.message.includes('404')) {
                    userMessage = 'Serviço de pagamento temporariamente indisponível. Tente novamente em alguns minutos.';
                } else if (error.message.includes('Tempo limite')) {
                    userMessage = 'Conexão muito lenta. Verifique sua internet e tente novamente.';
                } else if (error.message !== 'Erro ao processar pagamento. Tente novamente.') {
                    userMessage = error.message;
                }
            }
            setPaymentError(userMessage);
        } finally{
            setIsProcessingPayment(false);
        }
    };
    const handleGenerateReport = async ()=>{
        if (!personalData.fullName.trim() || !personalData.birthDate) return;
        const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate);
        const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, personalData.birthPlace);
        const chineseZodiac = getChineseZodiac(personalData.birthDate);
        const astrocartography = calculateAstrocartography(personalData.fullName, personalData.birthDate, personalData.birthTime, personalData.birthPlace);
        setMysticReport({
            numerology,
            astrology,
            chineseZodiac,
            astrocartography
        });
        // Verificar se tem assinatura de horóscopo ativa
        if (personalData.email) {
            try {
                const response = await fetch('/api/check-horoscope-subscription', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: personalData.email
                    })
                });
                const data = await response.json();
                if (data.success) {
                    setIsHoroscopeSubscribed(data.isSubscribed);
                }
            } catch (error) {
                console.error('Erro ao verificar assinatura de horóscopo:', error);
            }
        }
        setCurrentStep(2);
    };
    const renderDataCollection = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-2xl mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-8 shadow-2xl border border-gray-100 dark:border-gray-700",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6 sm:mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1001,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1000,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                                children: "Dados para Seu Relatório Místico Completo"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1003,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4",
                                children: "Quanto mais precisos os dados, mais detalhado e personalizado será seu relatório"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1006,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-4 sm:p-6 mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2",
                                            children: "R$ 29,90"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1013,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                            children: "Relatório Místico Completo - Pagamento único"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1016,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap items-center justify-center gap-1 sm:gap-2 mt-3 text-xs text-gray-500 dark:text-gray-400",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1021,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Numerologia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1022,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1020,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1024,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1026,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Astrologia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1027,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1025,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1029,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1031,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Zodíaco Chinês"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1032,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1030,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1034,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1036,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Astrocartografia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1037,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1035,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1019,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1012,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1011,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 999,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4 sm:space-y-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Nome Completo *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1046,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: personalData.fullName,
                                        onChange: (e)=>setPersonalData((prev)=>({
                                                    ...prev,
                                                    fullName: e.target.value
                                                })),
                                        className: "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base",
                                        placeholder: "Seu nome completo como no documento"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1049,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Essencial para cálculos numerológicos precisos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1056,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1045,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "E-mail *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1062,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: personalData.email,
                                        onChange: (e)=>setPersonalData((prev)=>({
                                                    ...prev,
                                                    email: e.target.value
                                                })),
                                        className: "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base",
                                        placeholder: "seu@email.com"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1065,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Necessário para processar o pagamento e enviar seu relatório"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1072,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1061,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Data de Nascimento *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1078,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "date",
                                        value: personalData.birthDate,
                                        onChange: (e)=>setPersonalData((prev)=>({
                                                    ...prev,
                                                    birthDate: e.target.value
                                                })),
                                        className: "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1081,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Base para todos os cálculos astrológicos e numerológicos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1087,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1077,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Hora de Nascimento"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1093,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "time",
                                        value: personalData.birthTime,
                                        onChange: (e)=>setPersonalData((prev)=>({
                                                    ...prev,
                                                    birthTime: e.target.value
                                                })),
                                        className: "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1096,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Importante para ascendente e casas astrológicas precisas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1092,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Local de Nascimento"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1108,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "text",
                                        value: personalData.birthPlace,
                                        onChange: (e)=>setPersonalData((prev)=>({
                                                    ...prev,
                                                    birthPlace: e.target.value
                                                })),
                                        className: "w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm sm:text-base",
                                        placeholder: "Cidade, Estado, País"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1111,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Essencial para astrocartografia e cálculos astrológicos precisos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1118,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1107,
                                columnNumber: 11
                            }, this),
                            paymentError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 rounded-xl p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-5 h-5 text-red-500 mt-0.5 flex-shrink-0",
                                            children: "⚠️"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1127,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-red-800 dark:text-red-200 mb-1",
                                                    children: "Erro no Pagamento"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1131,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-red-700 dark:text-red-300",
                                                    children: paymentError
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1134,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1130,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1126,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1125,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handlePayment,
                                disabled: !personalData.fullName.trim() || !personalData.email.trim() || !personalData.birthDate || isProcessingPayment,
                                className: "w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-base sm:text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: isProcessingPayment ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-b-2 border-white"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1150,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base",
                                                children: "Processando Pagamento..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1151,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                className: "w-4 h-4 sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1155,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base",
                                                children: "Gerar Relatório Místico Completo - R$ 29,90"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1156,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1147,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                            className: "w-3 h-3 sm:w-4 sm:h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1164,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Pagamento 100% seguro via Kirvano"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1165,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1163,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1044,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 998,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 997,
            columnNumber: 5
        }, this);
    const renderMysticReport = ()=>{
        if (!mysticReport) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-8 sm:space-y-12 px-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1181,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                            children: "Relatório Místico Completo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1183,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2",
                            children: personalData.fullName
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-gray-500 dark:text-gray-500",
                            children: [
                                "Nascido em ",
                                new Date(personalData.birthDate).toLocaleDateString('pt-BR'),
                                personalData.birthTime && ` às ${personalData.birthTime}`,
                                personalData.birthPlace && ` em ${personalData.birthPlace}`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1189,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic",
                            children: '"Conhece-te a ti mesmo e conhecerás o universo e os deuses" - Oráculo de Delfos'
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1194,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1179,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mb-6 sm:mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1203,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                                    children: "1. Numerologia Pitagórica Completa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1205,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                    children: "Os números sagrados que governam sua existência e revelam seu propósito divino"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1208,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1201,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8",
                            children: [
                                {
                                    number: mysticReport.numerology.lifePathNumber,
                                    title: 'Caminho da Vida',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
                                    description: 'Sua missão principal nesta encarnação'
                                },
                                {
                                    number: mysticReport.numerology.destinyNumber,
                                    title: 'Número do Destino',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$crown$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Crown$3e$__["Crown"],
                                    description: 'Seu potencial máximo a ser alcançado'
                                },
                                {
                                    number: mysticReport.numerology.soulNumber,
                                    title: 'Número da Alma',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
                                    description: 'Suas motivações mais profundas'
                                },
                                {
                                    number: mysticReport.numerology.personalityNumber,
                                    title: 'Personalidade',
                                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"],
                                    description: 'Como outros te percebem'
                                }
                            ].map((item, index)=>{
                                const meaning = numerologyMeanings[item.number];
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r ${meaning?.color} flex items-center justify-center`,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                        className: "w-5 h-5 sm:w-6 sm:h-6 text-white"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1226,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1225,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-sm sm:text-base text-gray-800 dark:text-gray-200",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1229,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-gray-600 dark:text-gray-400",
                                                            children: [
                                                                "Número ",
                                                                item.number
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1230,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1228,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1224,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-2",
                                            children: meaning?.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1233,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3",
                                            children: meaning?.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1234,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "text-xs font-semibold text-green-600 dark:text-green-400 mb-1",
                                                    children: "✓ PONTOS POSITIVOS:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1238,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: meaning?.positives.slice(0, 3).map((positive, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs",
                                                            children: positive
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1241,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1239,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1237,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                    className: "text-xs font-semibold text-red-600 dark:text-red-400 mb-1",
                                                    children: "⚠ PONTOS DE ATENÇÃO:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1250,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: meaning?.negatives.slice(0, 3).map((negative, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs",
                                                            children: negative
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1253,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1251,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1249,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-gray-600 dark:text-gray-400",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "💡 O QUE FAZER:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1263,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    meaning?.advice
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1262,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1261,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1223,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1214,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1200,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1275,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1274,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                            children: "Sua Jornada de Autoconhecimento e Transformação"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1277,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Este relatório é muito mais que uma simples análise - é um mapa sagrado para sua jornada de autoconhecimento e crescimento espiritual. Cada número, cada posição planetária, cada símbolo chinês carrega uma mensagem especial do universo para você."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1281,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Use essas informações como uma bússola em sua caminhada pela vida. Lembre-se: você tem o poder de criar sua própria realidade, e agora possui as ferramentas ancestrais para fazê-lo de forma mais sábia, consciente e alinhada com seu propósito divino."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1285,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1280,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 sm:mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl max-w-2xl mx-auto",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2",
                                    children: '"O conhecimento de si mesmo é o começo de toda sabedoria."'
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1291,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic",
                                    children: "- Aristóteles"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1294,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1290,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✨ Que este relatório ilumine seu caminho e desperte a magia que já existe dentro de você ✨"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1299,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1298,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1273,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1177,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-6 sm:py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mb-8 sm:mb-12",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3 mb-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                    className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1313,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1312,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1311,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4",
                            children: "Astroglix"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1316,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4",
                            children: "Relatórios Místicos Completos e Profissionais: Numerologia Pitagórica, Astrologia Ocidental, Astrologia Chinesa e Astrocartografia"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1319,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✨ Desvende os mistérios do universo através da sabedoria ancestral ✨"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1323,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1322,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1310,
                    columnNumber: 9
                }, this),
                currentStep <= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center mb-8 sm:mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center space-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base ${currentStep >= 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`,
                                children: "1"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1331,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-12 h-1 sm:w-16 ${currentStep >= 2 ? 'bg-purple-500' : 'bg-gray-200'}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1334,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base ${currentStep >= 2 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`,
                                children: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1335,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1330,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1329,
                    columnNumber: 11
                }, this),
                currentStep === 1 && renderDataCollection(),
                currentStep === 2 && renderMysticReport(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center mt-12 sm:mt-16 py-6 sm:py-8 border-t border-gray-200 dark:border-gray-700",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm sm:text-base text-gray-500 dark:text-gray-400 mb-4",
                            children: "✨ Descubra os mistérios do universo através da sabedoria ancestral ✨"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1348,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-400 dark:text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Numerologia Pitagórica"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1352,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1353,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Astrologia Ocidental"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1354,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1355,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Astrologia Chinesa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1356,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1357,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Astrocartografia"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1358,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1351,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1347,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1308,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1307,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=src_08819b54._.js.map