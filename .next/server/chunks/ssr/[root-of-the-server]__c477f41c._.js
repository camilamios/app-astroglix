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
    price: 80.00
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
"[project]/src/lib/numerology-interpretations.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Biblioteca completa de interpretações numerológicas
__turbopack_context__.s({
    "generateDetailedNumerologyReport": ()=>generateDetailedNumerologyReport,
    "getNumberInterpretation": ()=>getNumberInterpretation,
    "numberMeanings": ()=>numberMeanings
});
const numberMeanings = {
    1: {
        number: 1,
        name: "O Líder",
        positiveTraits: [
            "Liderança natural e carisma",
            "Independência e autoconfiança",
            "Coragem para iniciar novos projetos",
            "Capacidade de inovar e pioneirismo",
            "Determinação e força de vontade"
        ],
        negativeTraits: [
            "Arrogância e ego inflado",
            "Tendência a ser dominador",
            "Impaciência com os outros",
            "Dificuldade em aceitar ajuda",
            "Agressividade quando contrariado"
        ],
        guidance: [
            "Aprenda a trabalhar em equipe sem perder sua essência",
            "Cultive a humildade e reconheça as contribuições dos outros",
            "Canalize sua energia de liderança para inspirar, não dominar",
            "Desenvolva paciência e escute diferentes perspectivas"
        ],
        career: "Ideal para posições de liderança, empreendedorismo, gestão, cargos executivos, trabalhos independentes e áreas que exigem inovação.",
        relationships: "Precisa de parceiros que respeitem sua independência mas que também desafiem seu crescimento. Trabalhe em ser mais colaborativo e menos controlador.",
        spirituality: "Sua jornada espiritual envolve aprender a equilibrar ego e humildade, reconhecendo que verdadeira liderança é sobre servir aos outros.",
        lifeLesson: "Aprender que força verdadeira vem da capacidade de levantar os outros, não de estar sempre no topo sozinho."
    },
    2: {
        number: 2,
        name: "O Diplomata",
        positiveTraits: [
            "Sensibilidade e empatia excepcionais",
            "Habilidade natural para mediação",
            "Cooperativo e harmonioso",
            "Intuição aguçada",
            "Capacidade de ouvir e compreender"
        ],
        negativeTraits: [
            "Insegurança e dependência emocional",
            "Tendência a evitar conflitos necessários",
            "Dificuldade em tomar decisões",
            "Pode ser manipulado facilmente",
            "Excesso de sensibilidade"
        ],
        guidance: [
            "Desenvolva autoconfiança e aprenda a confiar em suas próprias decisões",
            "Estabeleça limites saudáveis nas relações",
            "Entenda que conflitos construtivos podem levar ao crescimento",
            "Valorize suas próprias necessidades tanto quanto as dos outros"
        ],
        career: "Excelente em mediação, recursos humanos, terapia, assistência social, diplomacia, áreas de saúde e qualquer trabalho em equipe.",
        relationships: "Naturalmente dedicado e amoroso, mas precisa aprender a não se perder no outro. Busque parceiros que valorizem sua sensibilidade sem aproveitarem dela.",
        spirituality: "Sua evolução espiritual passa por encontrar equilíbrio entre servir aos outros e manter sua própria identidade e poder pessoal.",
        lifeLesson: "Compreender que ser bondoso não significa ser fraco, e que você pode ser gentil enquanto mantém sua força interior."
    },
    3: {
        number: 3,
        name: "O Criativo",
        positiveTraits: [
            "Criatividade abundante e imaginação fértil",
            "Otimismo contagiante",
            "Excelente comunicador",
            "Carisma e habilidade social",
            "Capacidade de inspirar alegria"
        ],
        negativeTraits: [
            "Dispersão e falta de foco",
            "Superficialidade nas relações",
            "Dificuldade em levar projetos até o fim",
            "Tendência a evitar responsabilidades",
            "Exagero e falta de disciplina"
        ],
        guidance: [
            "Aprenda a focar sua energia criativa em projetos significativos",
            "Desenvolva disciplina sem perder sua espontaneidade",
            "Busque profundidade nas relações e experiências",
            "Use sua criatividade como ferramenta de transformação, não apenas entretenimento"
        ],
        career: "Brilha em artes, comunicação, marketing, entretenimento, escrita, design, ensino criativo e qualquer área que permita expressão pessoal.",
        relationships: "Precisa de parceiros que apreciem sua vivacidade mas que também o ajudem a manter os pés no chão. Evite dispersão emocional.",
        spirituality: "Sua missão espiritual envolve usar seus dons criativos para elevar e inspirar outros, trazendo beleza e alegria ao mundo.",
        lifeLesson: "Descobrir que criatividade genuína requer disciplina, e que seus talentos têm maior impacto quando direcionados com propósito."
    },
    4: {
        number: 4,
        name: "O Construtor",
        positiveTraits: [
            "Organização e metodologia impecáveis",
            "Confiabilidade e responsabilidade",
            "Praticidade e senso comum",
            "Perseverança e determinação",
            "Capacidade de criar estruturas duradouras"
        ],
        negativeTraits: [
            "Rigidez e resistência a mudanças",
            "Workaholic e obsessivo",
            "Dificuldade em expressar emoções",
            "Pessimismo e negatividade",
            "Excesso de controle"
        ],
        guidance: [
            "Aprenda a ser flexível sem perder sua essência prática",
            "Permita-se descansar e aproveitar os frutos do seu trabalho",
            "Abra-se para o inesperado e para novas formas de fazer as coisas",
            "Equilibre trabalho e vida pessoal, lembrando que você é mais que suas realizações"
        ],
        career: "Excepcional em arquitetura, engenharia, contabilidade, gestão de projetos, administração, construção e áreas que exigem precisão.",
        relationships: "Leal e dedicado, mas precisa aprender a ser mais flexível e expressivo emocionalmente. Parceiros precisam de paciência com sua natureza reservada.",
        spirituality: "Sua jornada espiritual envolve compreender que nem tudo na vida pode ser controlado ou planejado, e que há beleza no caos.",
        lifeLesson: "Aprender que estruturas sólidas também precisam de flexibilidade para resistir às tempestades da vida."
    },
    5: {
        number: 5,
        name: "O Aventureiro",
        positiveTraits: [
            "Adaptabilidade excepcional",
            "Amor pela liberdade e aventura",
            "Curiosidade insaciável",
            "Versatilidade e múltiplos talentos",
            "Carisma e magnetismo pessoal"
        ],
        negativeTraits: [
            "Inquietude e instabilidade",
            "Dificuldade com compromissos",
            "Impulsividade e irresponsabilidade",
            "Dispersão de energia",
            "Tendência ao excesso e vícios"
        ],
        guidance: [
            "Aprenda a equilibrar liberdade com responsabilidade",
            "Desenvolva consistência sem perder sua espontaneidade",
            "Escolha suas aventuras com sabedoria, não apenas por impulso",
            "Cultive relações profundas mesmo enquanto explora o mundo"
        ],
        career: "Prospera em viagens, jornalismo, vendas, relações públicas, entretenimento, negócios internacionais e qualquer área dinâmica.",
        relationships: "Precisa de parceiros que valorizem independência mútua. Aprenda que compromisso não é prisão, mas pode ser uma aventura compartilhada.",
        spirituality: "Sua evolução espiritual vem de compreender que a verdadeira liberdade não é externa, mas interna - liberdade de ser quem você realmente é.",
        lifeLesson: "Descobrir que a maior aventura da vida é o compromisso com seu próprio crescimento e com conexões autênticas."
    },
    6: {
        number: 6,
        name: "O Cuidador",
        positiveTraits: [
            "Amor incondicional e compaixão",
            "Senso de responsabilidade familiar",
            "Habilidade de nutrir e curar",
            "Busca por harmonia e beleza",
            "Lealdade profunda"
        ],
        negativeTraits: [
            "Tendência a ser controlador 'por amor'",
            "Martírio e vitimização",
            "Dificuldade em dizer não",
            "Expectativas irreais sobre outros",
            "Perfeccionismo que cria insatisfação"
        ],
        guidance: [
            "Aprenda a cuidar de si mesmo com a mesma dedicação que cuida dos outros",
            "Estabeleça limites saudáveis - amor não significa sacrifício total",
            "Permita que outros cometam seus próprios erros e aprendam",
            "Aceite imperfeições, tanto suas quanto dos outros"
        ],
        career: "Natural em educação, medicina, terapia, aconselhamento, trabalho social, artes culinárias, design de interiores e áreas de cuidado.",
        relationships: "Parceiro dedicado e amoroso, mas precisa evitar se tornar controlador ou criar dependência. Busque reciprocidade real.",
        spirituality: "Sua missão espiritual é aprender que o amor verdadeiro liberta, não aprisiona, e que cuidar começa com autocuidado.",
        lifeLesson: "Compreender que você não pode salvar ninguém, apenas amparar enquanto cada um faz sua própria jornada."
    },
    7: {
        number: 7,
        name: "O Místico",
        positiveTraits: [
            "Profundidade intelectual e espiritual",
            "Intuição e sabedoria inatas",
            "Capacidade analítica excepcional",
            "Busca pela verdade",
            "Conexão com o divino"
        ],
        negativeTraits: [
            "Isolamento excessivo",
            "Ceticismo e desconfiança",
            "Dificuldade de conexão emocional",
            "Arrogância intelectual",
            "Escapismo e evasão da realidade"
        ],
        guidance: [
            "Equilibre sua busca espiritual com presença no mundo físico",
            "Compartilhe sua sabedoria ao invés de guardá-la para si",
            "Permita-se vulnerabilidade e conexão emocional autêntica",
            "Use seu conhecimento para servir, não apenas para se elevar"
        ],
        career: "Excelente em pesquisa, ciência, filosofia, espiritualidade, psicologia, análise de dados, escrita acadêmica e áreas contemplativas.",
        relationships: "Precisa de parceiros que respeitem sua necessidade de solidão mas que também o desafiem a se conectar emocionalmente.",
        spirituality: "Sua jornada envolve integrar conhecimento espiritual com vida prática, tornando-se uma ponte entre mundos.",
        lifeLesson: "Aprender que verdadeira sabedoria não é sobre saber mais, mas sobre conectar-se mais profundamente com a vida."
    },
    8: {
        number: 8,
        name: "O Magnata",
        positiveTraits: [
            "Poder de manifestação material",
            "Liderança empresarial",
            "Ambição saudável e foco em resultados",
            "Justiça e equilíbrio",
            "Capacidade de transformar visão em realidade"
        ],
        negativeTraits: [
            "Materialismo excessivo",
            "Obsessão por poder e status",
            "Falta de escrúpulos nos negócios",
            "Workaholic destrutivo",
            "Uso de pessoas como meios"
        ],
        guidance: [
            "Lembre-se que riqueza verdadeira inclui relações e bem-estar",
            "Use seu poder para elevar outros, não apenas a si mesmo",
            "Desenvolva compaixão junto com sua ambição",
            "Reconheça que sucesso sem integridade é vazio"
        ],
        career: "Domina em negócios, finanças, gestão executiva, empreendedorismo de alto nível, direito corporativo e posições de poder.",
        relationships: "Precisa aprender que relações não são transações. Busque parceiros que valorizem você, não sua posição ou recursos.",
        spirituality: "Sua missão é compreender e demonstrar que poder espiritual e material podem coexistir e se potencializar mutuamente.",
        lifeLesson: "Descobrir que o verdadeiro poder está em empoderar outros e que abundância cresce quando é compartilhada."
    },
    9: {
        number: 9,
        name: "O Humanitário",
        positiveTraits: [
            "Compaixão universal",
            "Sabedoria de alma antiga",
            "Capacidade de perdoar",
            "Visão humanitária ampla",
            "Talento artístico e espiritual"
        ],
        negativeTraits: [
            "Tendência ao martírio",
            "Dificuldade em estabelecer limites",
            "Idealismo que leva à desilusão",
            "Negligência das próprias necessidades",
            "Melancolia e desapego excessivo"
        ],
        guidance: [
            "Aprenda a servir sem se sacrificar completamente",
            "Enraíze seus ideais na realidade prática",
            "Cuide de si para poder cuidar do mundo",
            "Aceite que nem todos estão prontos para sua mensagem"
        ],
        career: "Brilha em trabalho social, ONGs, artes transformadoras, ensino espiritual, terapias holísticas, ativismo e carreiras humanitárias.",
        relationships: "Amor universal precisa começar em casa. Aprenda a nutrir relações íntimas tanto quanto se dedica à humanidade.",
        spirituality: "Você está completando um ciclo evolutivo. Sua missão é integrar todas as lições e servir como farol para outros.",
        lifeLesson: "Compreender que salvar o mundo começa com se salvar, e que você só pode dar do que já tem dentro de si."
    },
    11: {
        number: 11,
        name: "O Visionário",
        positiveTraits: [
            "Intuição extraordinária e dons psíquicos",
            "Capacidade de inspirar e iluminar",
            "Idealismo elevado",
            "Sensibilidade espiritual aguçada",
            "Potencial para grandes realizações"
        ],
        negativeTraits: [
            "Nervosismo e ansiedade",
            "Dificuldade de aterrar a energia",
            "Expectativas irrealistas",
            "Hipersensibilidade paralisante",
            "Tendência a se perder em sonhos"
        ],
        guidance: [
            "Aprenda técnicas de ancoragem e equilíbrio energético",
            "Traduza suas visões em ações concretas",
            "Cuide de sua saúde mental e emocional",
            "Busque comunidades que apoiem seus dons"
        ],
        career: "Prospera como líder espiritual, inventor, artista visionário, professor inspirador, conselheiro intuitivo ou empreendedor inovador.",
        relationships: "Precisa de parceiros que compreendam sua natureza sensível e apoiem sua missão, mas que também o ajudem a manter equilíbrio.",
        spirituality: "Você é um canal entre dimensões. Sua missão é trazer luz superior para o plano terrestre de forma tangível.",
        lifeLesson: "Aprender a balancear seus dons espirituais com vida prática, tornando-se uma ponte entre o céu e a terra."
    },
    22: {
        number: 22,
        name: "O Mestre Construtor",
        positiveTraits: [
            "Capacidade de manifestar grandes visões",
            "Liderança prática e visionária",
            "Poder de criar legados duradouros",
            "Equilíbrio entre espiritual e material",
            "Potencial para transformar o mundo"
        ],
        negativeTraits: [
            "Pressão interna extrema",
            "Dificuldade em aceitar limitações",
            "Tendência a burnout",
            "Frustração quando visão excede execução",
            "Isolamento pela grandiosidade da missão"
        ],
        guidance: [
            "Divida grandes visões em passos gerenciáveis",
            "Cerque-se de equipe competente e confiável",
            "Lembre-se que grandes obras levam tempo",
            "Cuide de sua saúde física e mental no processo"
        ],
        career: "Destinado a grandes empreendimentos, projetos de impacto global, arquitetura de soluções, liderança transformacional e legados duradouros.",
        relationships: "Precisa de parceiros que compreendam a magnitude de sua missão mas que também o lembrem de viver o presente.",
        spirituality: "Você veio para construir pontes entre o espiritual e o material, criando estruturas que elevem a humanidade.",
        lifeLesson: "Compreender que grandeza verdadeira vem de construir algo maior que si mesmo, deixando o mundo melhor que encontrou."
    },
    33: {
        number: 33,
        name: "O Mestre Professor",
        positiveTraits: [
            "Amor universal em ação",
            "Capacidade de cura profunda",
            "Sabedoria compassiva",
            "Habilidade de elevar consciências",
            "Dedicação ao serviço elevado"
        ],
        negativeTraits: [
            "Martírio e autossacrifício destrutivo",
            "Dificuldade em dizer não",
            "Exaustão por dar demais",
            "Expectativas irreais sobre si mesmo",
            "Negligência do autocuidado"
        ],
        guidance: [
            "Aprenda que autocuidado não é egoísmo, é necessidade",
            "Estabeleça limites saudáveis em seu serviço",
            "Aceite que você não pode salvar todos",
            "Ensine pelo exemplo, começando consigo mesmo"
        ],
        career: "Chamado para ensino transformador, cura holística, liderança espiritual compassiva, terapias avançadas e serviço humanitário.",
        relationships: "Seu amor é incondicional, mas precisa ser sábio. Escolha parceiros que valorizem e reciproquem sua dedicação.",
        spirituality: "Você é um mestre encarnado. Sua missão é demonstrar que amor incondicional e sabedoria prática podem coexistir.",
        lifeLesson: "Compreender que ensinar é sobre empoderar outros a encontrarem suas próprias verdades, não carregar seus fardos."
    }
};
function getNumberInterpretation(number) {
    return numberMeanings[number] || numberMeanings[1];
}
function generateDetailedNumerologyReport(numbers) {
    const sections = [];
    // Caminho da Vida
    const lifePath = getNumberInterpretation(numbers.lifePathNumber);
    sections.push(`
### 🌟 Número do Caminho da Vida: ${numbers.lifePathNumber} - ${lifePath.name}

Este é o número mais importante do seu mapa numerológico - representa sua missão de vida e as lições que você veio aprender nesta encarnação.

**✨ Pontos Positivos:**
${lifePath.positiveTraits.map((trait)=>`• ${trait}`).join('\n')}

**⚠️ Pontos de Atenção:**
${lifePath.negativeTraits.map((trait)=>`• ${trait}`).join('\n')}

**🎯 O Que Fazer:**
${lifePath.guidance.map((guide)=>`• ${guide}`).join('\n')}

**💼 Carreira:** ${lifePath.career}

**❤️ Relacionamentos:** ${lifePath.relationships}

**🙏 Espiritualidade:** ${lifePath.spirituality}

**📖 Lição de Vida:** ${lifePath.lifeLesson}
  `);
    // Número da Alma
    const soul = getNumberInterpretation(numbers.soulNumber);
    sections.push(`
### 💫 Número da Alma: ${numbers.soulNumber} - ${soul.name}

Este número revela seus desejos mais profundos, o que realmente motiva você por dentro, suas paixões ocultas e o que sua alma verdadeiramente anseia.

**Motivações Internas:**
${soul.positiveTraits.slice(0, 3).map((trait)=>`• ${trait}`).join('\n')}

**Desafios Internos:**
${soul.negativeTraits.slice(0, 3).map((trait)=>`• ${trait}`).join('\n')}

**Como Nutrir Sua Alma:**
${soul.guidance.slice(0, 2).map((guide)=>`• ${guide}`).join('\n')}
  `);
    // Número da Personalidade
    const personality = getNumberInterpretation(numbers.personalityNumber);
    sections.push(`
### 🎭 Número da Personalidade: ${numbers.personalityNumber} - ${personality.name}

Este número mostra como você aparece para o mundo, a primeira impressão que causa, a máscara social que usa.

**Como Outros Te Veem:**
${personality.positiveTraits.slice(0, 3).map((trait)=>`• ${trait}`).join('\n')}

**Máscaras a Observar:**
${personality.negativeTraits.slice(0, 2).map((trait)=>`• ${trait}`).join('\n')}

**Dica:** ${personality.guidance[0]}
  `);
    return sections.join('\n\n');
}
}),
"[project]/src/lib/astrology-interpretations.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Biblioteca completa de interpretações astrológicas
__turbopack_context__.s({
    "getSignInterpretation": ()=>getSignInterpretation,
    "signInterpretations": ()=>signInterpretations
});
const signInterpretations = {
    'Áries': {
        name: 'Áries',
        element: 'Fogo',
        quality: 'Cardinal',
        rulingPlanet: 'Marte',
        positiveTraits: [
            'Corajoso',
            'Pioneiro',
            'Entusiasmado',
            'Confiante',
            'Dinâmico',
            'Honesto'
        ],
        negativeTraits: [
            'Impulsivo',
            'Impaciente',
            'Agressivo',
            'Egoísta',
            'Teimoso'
        ],
        inSun: 'Com o Sol em Áries, você nasceu para liderar. Sua energia é pioneira, sempre buscando novos começos e desafios. Você tem coragem natural e não teme confrontos. Sua missão é aprender a canalizar sua energia de forma construtiva.',
        inMoon: 'Lua em Áries indica emoções intensas e reações rápidas. Você precisa de ação para se sentir emocionalmente satisfeito. Aprenda a processar sentimentos antes de agir.',
        inAscendant: 'Ascendente em Áries faz você parecer confiante, energético e às vezes intimidador. As pessoas veem você como alguém que sempre toma iniciativa.',
        career: 'Prospera em: empreendedorismo, esportes, militares, cirurgia, vendas competitivas, liderança de projetos desafiadores.',
        love: 'No amor, você é apaixonado e direto. Precisa de parceiros que acompanhem sua energia e não tenham medo de seus desafios. Aprenda a ter mais paciência.',
        health: 'Ponto de atenção: cabeça, enxaquecas, febre. Faça exercícios intensos para liberar energia. Cuidado com acidentes por impulsividade.',
        spirituality: 'Sua jornada espiritual envolve aprender a equilibrar ação com contemplação, coragem com compaixão.'
    },
    'Touro': {
        name: 'Touro',
        element: 'Terra',
        quality: 'Fixo',
        rulingPlanet: 'Vênus',
        positiveTraits: [
            'Confiável',
            'Paciente',
            'Prático',
            'Leal',
            'Sensual',
            'Determinado'
        ],
        negativeTraits: [
            'Teimoso',
            'Possessivo',
            'Materialista',
            'Resistente a mudanças',
            'Preguiçoso'
        ],
        inSun: 'Sol em Touro traz estabilidade e amor pela beleza. Você valoriza segurança, conforto e prazer sensorial. Sua força está na persistência, mas aprenda a ser mais flexível.',
        inMoon: 'Lua em Touro busca estabilidade emocional através de conforto material. Você precisa de segurança e rotina para se sentir bem. Mudanças abruptas o desestabilizam.',
        inAscendant: 'Ascendente em Touro faz você parecer calmo, confiável e agradável. As pessoas sentem que podem contar com você.',
        career: 'Ideal para: finanças, agricultura, culinária, artes, música, design de interiores, gestão de recursos, joalheria.',
        love: 'No amor, você é fiel e sensual. Busca estabilidade e demonstra afeto através de gestos tangíveis. Cuidado com ciúmes e possessividade.',
        health: 'Atenção: garganta, tireoide, pescoço. Tendência a ganho de peso. Incorpore movimento regular e alimentação equilibrada.',
        spirituality: 'Sua evolução vem de aprender que verdadeira segurança é interna, não externa, e que mudança é parte natural da vida.'
    },
    'Gêmeos': {
        name: 'Gêmeos',
        element: 'Ar',
        quality: 'Mutável',
        rulingPlanet: 'Mercúrio',
        positiveTraits: [
            'Comunicativo',
            'Inteligente',
            'Adaptável',
            'Curioso',
            'Social',
            'Versátil'
        ],
        negativeTraits: [
            'Superficial',
            'Ansioso',
            'Inconsistente',
            'Fofoqueiro',
            'Disperso'
        ],
        inSun: 'Sol em Gêmeos traz mente brilhante e necessidade de variedade. Você aprende rápido e se entedia facilmente. Sua missão é desenvolver profundidade junto com sua versatilidade.',
        inMoon: 'Lua em Gêmeos indica necessidade emocional de comunicação e estímulo mental. Você processa sentimentos através de palavras e precisa de variedade emocional.',
        inAscendant: 'Ascendente em Gêmeos faz você parecer jovial, falante e intelectual. As pessoas veem você como alguém sempre interessante e informado.',
        career: 'Excelente em: jornalismo, escrita, ensino, vendas, relações públicas, mídia social, tradução, marketing.',
        love: 'No amor, você precisa de estímulo mental tanto quanto físico. Conversas profundas são afrodisíacas. Evite dispersão emocional.',
        health: 'Cuidado com: sistema nervoso, pulmões, braços, mãos. A ansiedade pode ser um problema. Pratique meditação e exercícios respiratórios.',
        spirituality: 'Sua jornada envolve integrar mente e coração, aprendendo que conhecimento sem sabedoria é vazio.'
    },
    'Câncer': {
        name: 'Câncer',
        element: 'Água',
        quality: 'Cardinal',
        rulingPlanet: 'Lua',
        positiveTraits: [
            'Emocional',
            'Protetor',
            'Intuitivo',
            'Compassivo',
            'Leal',
            'Criativo'
        ],
        negativeTraits: [
            'Temperamental',
            'Inseguro',
            'Manipulador',
            'Dependente',
            'Ressentido'
        ],
        inSun: 'Sol em Câncer traz sensibilidade profunda e forte conexão com família. Você é naturalmente nurturante e protetor. Aprenda a estabelecer limites emocionais.',
        inMoon: 'Lua em Câncer (em domicílio) intensifica todas as qualidades lunares. Emoções profundas, necessidade de segurança emocional, memória emocional forte.',
        inAscendant: 'Ascendente em Câncer faz você parecer carinhoso, protetor e às vezes tímido. As pessoas sentem que podem confiar em você emocionalmente.',
        career: 'Natural em: enfermagem, psicologia, gastronomia, educação infantil, assistência social, história, antiquário.',
        love: 'No amor, você é profundamente devotado e busca segurança emocional. Precisa de parceiros que valorizem família e lar. Cuidado com dependência emocional.',
        health: 'Atenção: estômago, digestão, seios. Suas emoções afetam sua saúde física. Cuide da saúde emocional para manter o corpo saudável.',
        spirituality: 'Sua evolução vem de aprender que nutrir começa com autocuidado e que vulnerabilidade é força, não fraqueza.'
    },
    'Leão': {
        name: 'Leão',
        element: 'Fogo',
        quality: 'Fixo',
        rulingPlanet: 'Sol',
        positiveTraits: [
            'Confiante',
            'Generoso',
            'Leal',
            'Criativo',
            'Carismático',
            'Corajoso'
        ],
        negativeTraits: [
            'Arrogante',
            'Dominador',
            'Egocêntrico',
            'Dramático',
            'Inflexível'
        ],
        inSun: 'Sol em Leão (em domicílio) traz presença natural de liderança. Você nasceu para brilhar e inspirar. Sua missão é usar sua luz para iluminar outros, não ofuscá-los.',
        inMoon: 'Lua em Leão busca reconhecimento emocional. Você precisa ser visto e apreciado. Aprenda que verdadeiro valor vem de dentro.',
        inAscendant: 'Ascendente em Leão faz você parecer régio, confiante e magnético. As pessoas naturalmente são atraídas por sua presença.',
        career: 'Brilha em: entretenimento, política, gestão executiva, artes cênicas, moda, qualquer área de destaque público.',
        love: 'No amor, você é apaixonado, leal e generoso. Precisa de admiração e respeito. Aprenda a compartilhar o palco com seu parceiro.',
        health: 'Cuidado com: coração, coluna, circulação. Mantenha exercícios cardiovasculares. Seu coração físico reflete seu coração emocional.',
        spirituality: 'Sua jornada envolve aprender que verdadeira realeza é sobre servir, não ser servido, e que todos merecem brilhar.'
    },
    'Virgem': {
        name: 'Virgem',
        element: 'Terra',
        quality: 'Mutável',
        rulingPlanet: 'Mercúrio',
        positiveTraits: [
            'Analítico',
            'Prático',
            'Organizado',
            'Prestativo',
            'Meticuloso',
            'Confiável'
        ],
        negativeTraits: [
            'Crítico',
            'Perfeccionista',
            'Preocupado',
            'Ansioso',
            'Controlador'
        ],
        inSun: 'Sol em Virgem traz mente analítica e desejo de ser útil. Você busca perfeição e melhoria constante. Aprenda a aceitar imperfeições como parte da beleza da vida.',
        inMoon: 'Lua em Virgem processa emoções através de análise. Você se sente melhor quando está sendo produtivo e útil. Cuidado com autocrítica excessiva.',
        inAscendant: 'Ascendente em Virgem faz você parecer reservado, organizado e atencioso aos detalhes. As pessoas veem você como competente e confiável.',
        career: 'Excepcional em: saúde, análise de dados, edição, administração, nutrição, veterinária, qualidade e processos.',
        love: 'No amor, você mostra afeto através de atos de serviço. Busca parceiros com quem possa construir algo prático. Evite criticar demais.',
        health: 'Atenção: intestinos, sistema digestivo, ansiedade. Sua mente afeta seu corpo. Pratique técnicas de relaxamento e alimentação consciente.',
        spirituality: 'Sua evolução vem de aprender que perfeição está no processo, não no resultado, e que aceitar é tão importante quanto melhorar.'
    },
    'Libra': {
        name: 'Libra',
        element: 'Ar',
        quality: 'Cardinal',
        rulingPlanet: 'Vênus',
        positiveTraits: [
            'Diplomático',
            'Charmoso',
            'Justo',
            'Social',
            'Cooperativo',
            'Estético'
        ],
        negativeTraits: [
            'Indeciso',
            'Superficial',
            'Dependente',
            'Manipulador',
            'Evita conflitos'
        ],
        inSun: 'Sol em Libra busca harmonia e equilíbrio. Você é naturalmente diplomático e valoriza relacionamentos. Sua missão é aprender a encontrar paz interna, não apenas externa.',
        inMoon: 'Lua em Libra precisa de harmonia para se sentir emocionalmente bem. Conflitos o desestabilizam profundamente. Aprenda que conflitos saudáveis podem fortalecer relações.',
        inAscendant: 'Ascendente em Libra faz você parecer charmoso, diplomático e agradável. As pessoas veem você como alguém fácil de conversar.',
        career: 'Ideal para: direito, diplomacia, artes, design, recursos humanos, mediação, consultoria de imagem, relações públicas.',
        love: 'No amor, você busca parceria ideal e equilíbrio perfeito. Precisa de companheirismo verdadeiro. Cuidado com codependência e perda de identidade.',
        health: 'Cuidado com: rins, região lombar, diabetes. Mantenha equilíbrio em tudo. Beba bastante água e evite excessos.',
        spirituality: 'Sua jornada envolve aprender que verdadeiro equilíbrio vem de dentro e que você é completo sozinho, embora prefira companhia.'
    },
    'Escorpião': {
        name: 'Escorpião',
        element: 'Água',
        quality: 'Fixo',
        rulingPlanet: 'Plutão/Marte',
        positiveTraits: [
            'Intenso',
            'Leal',
            'Transformador',
            'Intuitivo',
            'Determinado',
            'Profundo'
        ],
        negativeTraits: [
            'Possessivo',
            'Vingativo',
            'Manipulador',
            'Desconfiado',
            'Obsessivo'
        ],
        inSun: 'Sol em Escorpião traz intensidade emocional e poder de transformação. Você vê além das aparências e não tem medo das profundezas. Sua missão é usar seu poder para curar, não destruir.',
        inMoon: 'Lua em Escorpião (em queda) intensifica emoções ao extremo. Você sente tudo profundamente e nunca esquece. Aprenda a perdoar e liberar.',
        inAscendant: 'Ascendente em Escorpião faz você parecer misterioso, magnético e intimidador. As pessoas sentem seu poder antes mesmo de você falar.',
        career: 'Poderoso em: psicologia, investigação, cirurgia, ocultismo, pesquisa, transformação organizacional, gestão de crises.',
        love: 'No amor, você é tudo ou nada - intenso, leal e transformador. Precisa de profundidade e verdade. Cuidado com ciúmes e controle.',
        health: 'Atenção: órgãos reprodutivos, sistema excretor. Suas emoções retidas podem criar toxinas. Pratique liberação emocional regular.',
        spirituality: 'Sua evolução vem de múltiplas mortes e renascimentos simbólicos, aprendendo a transformar veneno em medicina.'
    },
    'Sagitário': {
        name: 'Sagitário',
        element: 'Fogo',
        quality: 'Mutável',
        rulingPlanet: 'Júpiter',
        positiveTraits: [
            'Otimista',
            'Aventureiro',
            'Filosófico',
            'Honesto',
            'Generoso',
            'Livre'
        ],
        negativeTraits: [
            'Irresponsável',
            'Imprudente',
            'Exagerado',
            'Insensível',
            'Inquieto'
        ],
        inSun: 'Sol em Sagitário busca verdade e expansão. Você é naturalmente otimista e filosófico. Sua missão é encontrar sabedoria através de suas aventuras.',
        inMoon: 'Lua em Sagitário precisa de liberdade emocional e filosofia. Você se sente melhor quando está explorando ou aprendendo. Evite escapismo.',
        inAscendant: 'Ascendente em Sagitário faz você parecer otimista, expansivo e aventureiro. As pessoas veem você como alguém sempre positivo.',
        career: 'Prospera em: ensino superior, viagens, filosofia, publicação, esportes, direito internacional, turismo.',
        love: 'No amor, você precisa de liberdade e crescimento mútuo. Busca parceiros que sejam também amigos e companheiros de aventura.',
        health: 'Cuidado com: quadris, fígado, ciático. Tendência a excessos. Mantenha moderação em tudo e exercícios regulares.',
        spirituality: 'Sua jornada envolve aprender que a maior aventura é interna e que verdade não está lá fora, mas dentro de você.'
    },
    'Capricórnio': {
        name: 'Capricórnio',
        element: 'Terra',
        quality: 'Cardinal',
        rulingPlanet: 'Saturno',
        positiveTraits: [
            'Ambicioso',
            'Disciplinado',
            'Responsável',
            'Prático',
            'Persistente',
            'Sábio'
        ],
        negativeTraits: [
            'Pessimista',
            'Frio',
            'Materialista',
            'Rígido',
            'Controlador'
        ],
        inSun: 'Sol em Capricórnio traz ambição e senso de responsabilidade. Você está aqui para construir algo duradouro. Sua missão é equilibrar sucesso material com realização emocional.',
        inMoon: 'Lua em Capricórnio (em detrimento) reprime emoções por senso de dever. Você precisa de estrutura para se sentir seguro. Aprenda a expressar vulnerabilidade.',
        inAscendant: 'Ascendente em Capricórnio faz você parecer sério, responsável e maduro além da idade. As pessoas respeitam sua autoridade natural.',
        career: 'Natural em: administração, engenharia, política, gestão executiva, arquitetura, qualquer área que exija construção de legado.',
        love: 'No amor, você é leal e compromissado. Pode parecer frio mas é profundamente dedicado. Aprenda a mostrar afeto e vulnerabilidade.',
        health: 'Atenção: ossos, joelhos, pele, dentes. Tendência a problemas por excesso de trabalho. Faça pausas regulares e cuide da saúde preventiva.',
        spirituality: 'Sua evolução vem de aprender que sucesso verdadeiro inclui felicidade e que vulnerabilidade não é fraqueza.'
    },
    'Aquário': {
        name: 'Aquário',
        element: 'Ar',
        quality: 'Fixo',
        rulingPlanet: 'Urano/Saturno',
        positiveTraits: [
            'Inovador',
            'Humanitário',
            'Original',
            'Intelectual',
            'Independente',
            'Progressista'
        ],
        negativeTraits: [
            'Distante',
            'Rebelde',
            'Imprevisível',
            'Frio',
            'Teimoso'
        ],
        inSun: 'Sol em Aquário traz visão futurista e amor pela humanidade. Você é único e não teme ser diferente. Sua missão é equilibrar individualidade com conexão humana.',
        inMoon: 'Lua em Aquário processa emoções intelectualmente. Você precisa de liberdade emocional e se sente melhor em grupos. Aprenda a ter intimidade individual.',
        inAscendant: 'Ascendente em Aquário faz você parecer único, excêntrico e intelectual. As pessoas veem você como diferente e interessante.',
        career: 'Brilha em: tecnologia, ciência, inovação, causas humanitárias, astrologia, reformas sociais, futurismo.',
        love: 'No amor, você precisa de amizade e liberdade. Busca parceiros intelectuais e únicos. Aprenda a se conectar emocionalmente, não apenas mentalmente.',
        health: 'Cuidado com: circulação, tornozelos, sistema nervoso. Sua mente acelerada pode causar ansiedade. Pratique grounding.',
        spirituality: 'Sua jornada envolve aprender que servir a humanidade começa com conexão autêntica com indivíduos, incluindo você mesmo.'
    },
    'Peixes': {
        name: 'Peixes',
        element: 'Água',
        quality: 'Mutável',
        rulingPlanet: 'Netuno/Júpiter',
        positiveTraits: [
            'Compassivo',
            'Intuitivo',
            'Artístico',
            'Espiritual',
            'Empático',
            'Adaptável'
        ],
        negativeTraits: [
            'Escapista',
            'Vítima',
            'Confuso',
            'Passivo',
            'Iludido'
        ],
        inSun: 'Sol em Peixes traz sensibilidade extrema e conexão espiritual. Você sente o sofrimento do mundo e anseia por transcendência. Sua missão é aprender a ajudar sem se perder.',
        inMoon: 'Lua em Peixes é extremamente empática e psíquica. Você absorve emoções dos outros. Aprenda a proteger sua energia e distinguir seus sentimentos dos alheios.',
        inAscendant: 'Ascendente em Peixes faz você parecer sonhador, compassivo e misterioso. As pessoas sentem sua energia espiritual.',
        career: 'Ideal para: artes, música, terapia, espiritualidade, medicina holística, cinema, fotografia, trabalho em hospitais.',
        love: 'No amor, você busca união mística e transcendência. Extremamente devotado mas precisa de limites. Cuidado com idealização e martírio.',
        health: 'Atenção: pés, sistema linfático, vícios. Você é sensível a substâncias. Mantenha limites energéticos e pratique aterramento regular.',
        spirituality: 'Sua evolução final envolve dissolver ego mas manter individualidade, servir sem se sacrificar, e entender que você é o oceano em uma gota.'
    }
};
function getSignInterpretation(sign) {
    return signInterpretations[sign] || signInterpretations['Áries'];
}
}),
"[project]/src/lib/numerology-contexts.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Interpretações contextuais de numerologia
__turbopack_context__.s({
    "challengeMeanings": ()=>challengeMeanings,
    "getChallengeMeaning": ()=>getChallengeMeaning,
    "getHiddenTalentMeaning": ()=>getHiddenTalentMeaning,
    "getLifeCycleMeaning": ()=>getLifeCycleMeaning,
    "getPersonalDayMeaning": ()=>getPersonalDayMeaning,
    "getPersonalMonthMeaning": ()=>getPersonalMonthMeaning,
    "getPersonalYearMeaning": ()=>getPersonalYearMeaning,
    "hiddenTalentMeanings": ()=>hiddenTalentMeanings,
    "lifeCycleMeanings": ()=>lifeCycleMeanings,
    "personalDayMeanings": ()=>personalDayMeanings,
    "personalMonthMeanings": ()=>personalMonthMeanings,
    "personalYearMeanings": ()=>personalYearMeanings
});
const personalYearMeanings = {
    1: "🌱 ANO DE NOVOS COMEÇOS: Este é um ano de iniciativas, novos projetos e liderança. É hora de plantar sementes para o futuro. Tome a iniciativa em sua vida, seja independente e corajoso. Novas oportunidades virão - aproveite-as! É o momento ideal para começar aquele projeto que sempre sonhou, mudar de carreira ou iniciar um novo relacionamento. Ação é a palavra-chave.",
    2: "🤝 ANO DE PARCERIAS E COOPERAÇÃO: Este é um ano para cultivar relacionamentos, trabalhar em equipe e desenvolver paciência. Foque em colaboração, não em competição. É um período mais lento que pede diplomacia e sensibilidade. Dedique-se a parcerias (amorosas ou profissionais), cuide de detalhes e desenvolva sua intuição. A paciência trará recompensas.",
    3: "🎨 ANO DE CRIATIVIDADE E EXPRESSÃO: Este é um ano social, criativo e cheio de alegria! Expresse-se através de arte, comunicação ou qualquer forma criativa. Conecte-se com amigos, divirta-se e espalhe otimismo. É tempo de brilhar socialmente, desenvolver talentos artísticos e compartilhar suas ideias. Cuidado apenas com dispersão - foque sua criatividade.",
    4: "🏗️ ANO DE CONSTRUÇÃO E TRABALHO: Este é um ano de trabalho duro, organização e construção de bases sólidas. É hora de ser prático, disciplinado e responsável. Organize sua vida financeira, cuide de sua saúde e construa estruturas duradouras. Pode parecer pesado, mas o que você construir agora será a fundação do seu futuro. Persistência é essencial.",
    5: "✈️ ANO DE MUDANÇAS E LIBERDADE: Este é um ano dinâmico, cheio de mudanças, viagens e novas experiências! Abrace a aventura, seja flexível e explore novos horizontes. É tempo de se libertar de rotinas antigas, experimentar coisas novas e expandir seus horizontes. Seja adaptável - mudanças inesperadas podem trazer oportunidades incríveis. Aproveite a liberdade!",
    6: "💝 ANO DE RESPONSABILIDADE E HARMONIA: Este é um ano focado em família, lar, relacionamentos e responsabilidades. É hora de cuidar, nutrir e criar harmonia ao seu redor. Dedique-se aos seus entes queridos, embeleze seu espaço, assuma responsabilidades familiares. Pode haver casamentos, nascimentos ou necessidade de cuidar de outros. O amor e o serviço são centrais agora.",
    7: "🧘 ANO DE INTROSPECÇÃO E ESPIRITUALIDADE: Este é um ano para olhar para dentro, estudar, meditar e buscar sabedoria espiritual. É um período mais introspectivo - use-o para autoconhecimento profundo. Estude assuntos que sempre teve curiosidade, desenvolva práticas espirituais, busque solidão quando necessário. É um ano de crescimento interno, não externo. Confie na sua intuição.",
    8: "💰 ANO DE PODER E REALIZAÇÃO MATERIAL: Este é um ano de poder pessoal, sucesso profissional e conquistas materiais! É hora de assumir posições de liderança, buscar promoções e colher o que plantou. Suas ambições podem se realizar agora. Foque em negócios, finanças e reconhecimento profissional. Use seu poder com sabedoria e integridade.",
    9: "🌍 ANO DE CONCLUSÃO E HUMANITARISMO: Este é um ano de finalizações, perdão e serviço humanitário. É hora de deixar ir o que não serve mais e se dedicar a causas maiores. Complete projetos antigos, perdoe mágoas passadas, doe o que não precisa. É um ano de preparação para um novo ciclo. Seja generoso, compassivo e pense no bem coletivo."
};
const lifeCycleMeanings = {
    1: "Liderança e Independência - Neste ciclo, você aprende a ser autossuficiente, tomar iniciativas e desenvolver coragem. É uma fase de autodescoberta e afirmação pessoal.",
    2: "Cooperação e Sensibilidade - Este ciclo ensina paciência, diplomacia e trabalho em equipe. É uma fase de desenvolvimento emocional e aprendizado sobre relacionamentos.",
    3: "Criatividade e Comunicação - Neste ciclo, você desenvolve habilidades criativas, sociais e de expressão. É uma fase alegre de descoberta de talentos artísticos.",
    4: "Trabalho e Estrutura - Este ciclo foca em responsabilidade, disciplina e construção de bases sólidas. É uma fase de aprendizado sobre esforço e persistência.",
    5: "Liberdade e Mudança - Neste ciclo, você experimenta mudanças, viagens e aventuras. É uma fase de expansão e descoberta de novas possibilidades.",
    6: "Responsabilidade e Família - Este ciclo centra-se em lar, família e relacionamentos. É uma fase de aprendizado sobre amor, cuidado e compromisso.",
    7: "Sabedoria e Introspecção - Neste ciclo, você busca conhecimento profundo e crescimento espiritual. É uma fase de reflexão e desenvolvimento interior.",
    8: "Poder e Conquistas - Este ciclo traz oportunidades de sucesso material e reconhecimento. É uma fase de realizações e manifestação de ambições.",
    9: "Compaixão e Finalização - Neste ciclo, você desenvolve sabedoria compassiva e aprende sobre desapego. É uma fase de conclusões e serviço aos outros."
};
const challengeMeanings = {
    0: "DESAFIO DA ESCOLHA: Você tem muitas possibilidades e isso pode gerar indecisão. O desafio é escolher um caminho sem medo de perder outros. Aprenda a tomar decisões e comprometer-se com suas escolhas. Desenvolva confiança em seu julgamento.",
    1: "DESAFIO DO EGO E INDEPENDÊNCIA: Você precisa equilibrar autoconfiança com humildade. O desafio é desenvolver independência sem se tornar egoísta ou dominador. Aprenda a liderar servindo, não controlando. Seja assertivo mas não agressivo.",
    2: "DESAFIO DA SENSIBILIDADE: Você é muito sensível e isso pode causar mágoas. O desafio é desenvolver limites emocionais saudáveis sem perder sua empatia. Aprenda a não levar tudo para o lado pessoal. Seja gentil consigo mesmo também.",
    3: "DESAFIO DA DISPERSÃO: Você tem muitos interesses e talentos, mas pode se dispersar. O desafio é focar sua criatividade em projetos concretos. Aprenda a terminar o que começa. Canalize sua energia criativa de forma produtiva.",
    4: "DESAFIO DA RIGIDEZ: Você tende a ser muito rígido ou resistente a mudanças. O desafio é desenvolver flexibilidade mantendo sua estabilidade. Aprenda que nem tudo precisa ser perfeito. Equilibre trabalho e diversão.",
    5: "DESAFIO DA INSTABILIDADE: Você pode ser muito inquieto e evitar compromissos. O desafio é encontrar liberdade dentro da responsabilidade. Aprenda que compromisso não é prisão. Desenvolva constância sem perder sua espontaneidade.",
    6: "DESAFIO DA CODEPENDÊNCIA: Você tende a se sacrificar excessivamente pelos outros. O desafio é cuidar dos outros sem se perder. Aprenda a dizer não e estabelecer limites. Cuide de si mesmo para poder cuidar melhor dos outros.",
    7: "DESAFIO DO ISOLAMENTO: Você pode se isolar demais ou ter dificuldade de confiar. O desafio é compartilhar sua sabedoria sem se fechar. Aprenda a equilibrar solidão com conexão. Confie mais nas pessoas e em si mesmo.",
    8: "DESAFIO DO PODER: Você pode abusar do poder ou ter medo dele. O desafio é usar seu poder com sabedoria e integridade. Aprenda que poder traz responsabilidade. Use seus recursos para o bem maior, não apenas pessoal."
};
const hiddenTalentMeanings = {
    1: "Liderança Natural: Você tem o talento oculto de liderar e inspirar outros. Desenvolva sua autoconfiança e coragem para tomar iniciativas.",
    2: "Diplomacia Intuitiva: Você possui habilidade natural para mediar conflitos e entender pessoas profundamente. Confie na sua intuição.",
    3: "Expressão Criativa: Você tem talentos artísticos e comunicativos esperando serem desenvolvidos. Expresse-se sem medo.",
    4: "Organização Magistral: Você possui habilidade excepcional para criar sistemas e estruturas. Use isso para construir algo duradouro.",
    5: "Adaptabilidade Versátil: Você tem o dom de se adaptar a qualquer situação e aprender rapidamente. Abrace mudanças.",
    6: "Cura e Cuidado: Você possui habilidade natural para curar e cuidar dos outros. Desenvolva isso com consciência.",
    7: "Sabedoria Profunda: Você tem capacidade analítica e espiritual excepcional. Busque conhecimento profundo.",
    8: "Manifestação Material: Você possui habilidade inata para criar riqueza e sucesso. Use com responsabilidade.",
    9: "Compaixão Universal: Você tem o dom de compreender e ajudar a humanidade. Sirva com amor e sabedoria."
};
const personalMonthMeanings = {
    1: "Mês de iniciar novos projetos e tomar ação",
    2: "Mês de cultivar relacionamentos e ter paciência",
    3: "Mês de criatividade, socialização e expressão",
    4: "Mês de trabalho focado e organização",
    5: "Mês de mudanças e novas experiências",
    6: "Mês de foco na família e responsabilidades",
    7: "Mês de reflexão, estudo e introspecção",
    8: "Mês de conquistas profissionais e financeiras",
    9: "Mês de finalizar pendências e perdoar"
};
const personalDayMeanings = {
    1: "Dia de tomar iniciativa e começar algo novo",
    2: "Dia de colaborar e ser paciente com outros",
    3: "Dia de se expressar e socializar",
    4: "Dia de trabalhar duro e ser organizado",
    5: "Dia de abraçar mudanças e ser flexível",
    6: "Dia de cuidar dos outros e do lar",
    7: "Dia de refletir e buscar conhecimento",
    8: "Dia de focar em negócios e finanças",
    9: "Dia de ajudar outros e ser compassivo"
};
function getPersonalYearMeaning(number) {
    return personalYearMeanings[number] || "Ano de crescimento pessoal";
}
function getLifeCycleMeaning(number) {
    return lifeCycleMeanings[number] || "Ciclo de aprendizado";
}
function getChallengeMeaning(number) {
    return challengeMeanings[number] || "Desafio de crescimento pessoal";
}
function getHiddenTalentMeaning(number) {
    return hiddenTalentMeanings[number] || "Talento a ser descoberto";
}
function getPersonalMonthMeaning(number) {
    return personalMonthMeanings[number] || "Mês de crescimento";
}
function getPersonalDayMeaning(number) {
    return personalDayMeanings[number] || "Dia de oportunidades";
}
}),
"[project]/src/lib/chinese-zodiac-year.ts [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// Biblioteca de Anos do Zodíaco Chinês e Compatibilidades
__turbopack_context__.s({
    "chineseYears": ()=>chineseYears,
    "getCurrentChineseYear": ()=>getCurrentChineseYear,
    "getRelationshipColor": ()=>getRelationshipColor,
    "getYearImpact": ()=>getYearImpact,
    "yearImpacts": ()=>yearImpacts
});
const chineseYears = [
    {
        year: 2023,
        animal: 'Coelho',
        element: 'Água',
        description: 'Ano de paz, diplomacia e cura'
    },
    {
        year: 2024,
        animal: 'Dragão',
        element: 'Madeira',
        description: 'Ano de transformação, poder e grandes conquistas'
    },
    {
        year: 2025,
        animal: 'Serpente',
        element: 'Madeira',
        description: 'Ano de sabedoria, transformação e intuição'
    },
    {
        year: 2026,
        animal: 'Cavalo',
        element: 'Fogo',
        description: 'Ano de movimento, liberdade e aventura'
    },
    {
        year: 2027,
        animal: 'Cabra',
        element: 'Fogo',
        description: 'Ano de criatividade, gentileza e harmonia'
    },
    {
        year: 2028,
        animal: 'Macaco',
        element: 'Terra',
        description: 'Ano de inteligência, inovação e oportunidades'
    }
];
function getCurrentChineseYear() {
    const currentYear = new Date().getFullYear();
    return chineseYears.find((y)=>y.year === currentYear) || chineseYears[2] // Default 2025
    ;
}
const yearImpacts = {
    'Rato': {
        'Serpente': {
            relationship: 'neutra',
            title: '⚖️ Ano Neutro - Oportunidades com Cautela',
            positive: 'O Ano da Serpente traz oportunidades de crescimento intelectual e financeiro para você. Sua inteligência natural se alinha bem com a energia sábia da Serpente. Bom momento para investimentos calculados e aprendizado profundo.',
            negative: 'Cuidado com a tendência de ser excessivamente cauteloso. A Serpente pode intensificar sua desconfiança natural, levando você a perder oportunidades por excesso de análise.',
            advice: 'Equilibre sua cautela natural com coragem para agir. Confie em sua intuição, mas não deixe o medo paralisar suas decisões. Use este ano para desenvolver sabedoria prática.'
        }
    },
    'Boi': {
        'Serpente': {
            relationship: 'excelente',
            title: '🌟 Ano Extremamente Favorável - Grande Harmonia',
            positive: 'Este é um dos seus melhores anos! Boi e Serpente são aliados naturais. Você terá reconhecimento pelo seu trabalho duro, estabilidade financeira e sucesso em projetos de longo prazo. A sabedoria da Serpente complementa perfeitamente sua determinação.',
            negative: 'O único risco é trabalhar demais. A combinação Boi-Serpente pode criar obsessão pelo trabalho e perfeccionismo excessivo.',
            advice: 'Aproveite este ano dourado para consolidar conquistas e construir bases sólidas. É momento ideal para grandes investimentos, casamento ou compra de imóveis. Lembre-se de descansar também!'
        }
    },
    'Tigre': {
        'Serpente': {
            relationship: 'desafiadora',
            title: '⚠️ Ano Desafiador - Conflito de Energias',
            positive: 'Embora desafiador, este ano pode ensinar você a desenvolver paciência, estratégia e pensamento antes da ação. A Serpente pode ajudá-lo a ser menos impulsivo.',
            negative: 'Tigre e Serpente têm energias muito diferentes. Você pode se sentir restringido, frustrado ou incompreendido. Haverá tensão entre seu desejo de ação e a necessidade de cautela do ano.',
            advice: 'Pratique paciência e planejamento estratégico. Não force situações - espere o momento certo. Use este ano para desenvolver sabedoria, não para grandes conquistas externas. Evite confrontos desnecessários.'
        }
    },
    'Coelho': {
        'Serpente': {
            relationship: 'neutra',
            title: '⚖️ Ano Neutro - Diplomacia e Intuição',
            positive: 'Sua diplomacia natural funciona bem com a sabedoria da Serpente. Bom ano para relacionamentos, negociações e desenvolvimento espiritual. Sua intuição estará aguçada.',
            negative: 'Ambos são discretos, o que pode levar ao excesso de isolamento ou segredos que causam problemas. Cuidado com manipulações sutis.',
            advice: 'Use sua elegância natural para navegar as águas profundas deste ano. Seja transparente em relações importantes. Desenvolva sua intuição através de práticas contemplativas.'
        }
    },
    'Dragão': {
        'Serpente': {
            relationship: 'boa',
            title: '✨ Ano Favorável - Poder e Sabedoria',
            positive: 'Dragão e Serpente formam boa parceria. Sua grandiosidade encontra a sabedoria. Excelente para liderança estratégica, projetos visionários e crescimento espiritual. Você pode manifestar grandes ideias de forma prática.',
            negative: 'Dois egos fortes podem criar conflitos internos entre brilhar e ser discreto. Cuidado com excesso de confiança misturado com paranoia.',
            advice: 'Combine seu poder natural com a sabedoria do ano. Seja visionário mas estratégico. Este é bom momento para grandes projetos, mas com planejamento cuidadoso. Equilibre luz e sombra.'
        }
    },
    'Serpente': {
        'Serpente': {
            relationship: 'excelente',
            title: '🎂 Seu Ano! - Poder Máximo e Renovação',
            positive: 'Este é SEU ano! Momento de brilhar, alcançar objetivos importantes e receber reconhecimento. Sua intuição estará no auge. Todas as portas se abrem para você. É tempo de colher o que plantou e iniciar novos ciclos importantes.',
            negative: 'Cuidado com excesso de intensidade, manipulação ou isolamento. Duas Serpentes podem criar excesso de desconfiança e complexidade.',
            advice: 'APROVEITE! Este ano acontece apenas a cada 12 anos. Tome iniciativas importantes, mude o que precisa mudar, manifeste seus sonhos. Seja autêntico e use seu poder com sabedoria. Momento de transformação profunda.'
        }
    },
    'Cavalo': {
        'Serpente': {
            relationship: 'desafiadora',
            title: '⚠️ Ano Desafiador - Restrição vs Liberdade',
            positive: 'A Serpente pode ensinar você a desenvolver paciência, profundidade e estratégia - qualidades que normalmente lhe faltam. Pode ser ano de amadurecimento importante.',
            negative: 'Sua natureza livre e expansiva conflita com a energia reservada da Serpente. Você pode se sentir preso, lento ou frustrado. Haverá necessidade de cautela quando você quer velocidade.',
            advice: 'Aceite que este é um ano mais lento. Use-o para planejamento, não para grandes movimentos. Desenvolva paciência sem perder seu espírito. Pratique meditação e introspecção. Evite decisões impulsivas.'
        }
    },
    'Cabra': {
        'Serpente': {
            relationship: 'neutra',
            title: '⚖️ Ano Neutro - Criatividade Profunda',
            positive: 'Sua criatividade ganha profundidade com a Serpente. Bom ano para arte, espiritualidade e autoconhecimento. A Serpente pode dar estrutura às suas ideias.',
            negative: 'Ambos podem ser inseguros e indiretos, criando confusão em relacionamentos. Cuidado com excesso de sensibilidade e paranoia.',
            advice: 'Use este ano para desenvolver talentos artísticos com disciplina. Busque terapia ou práticas espirituais. Seja mais direto em comunicações. Confie mais em si mesmo.'
        }
    },
    'Macaco': {
        'Serpente': {
            relationship: 'conflituosa',
            title: '🚨 Ano Muito Desafiador - Conflito Direto',
            positive: 'Se conseguir navegar este ano difícil, você desenvolverá profundidade, sabedoria e maturidade que normalmente lhe faltam. Pode ser ano de grande crescimento pessoal através de desafios.',
            negative: 'Macaco e Serpente são inimigos tradicionais. Haverá conflitos, mal-entendidos e obstáculos. Sua natureza alegre e superficial conflita com a profundidade séria da Serpente. Pode haver traições ou problemas legais.',
            advice: 'ANO DE MÁXIMA CAUTELA! Não tome grandes riscos. Evite conflitos, especulações e pessoas suspeitas. Mantenha perfil baixo. Use este ano para reflexão profunda e mudanças internas. Busque aconselhamento antes de decisões importantes. A tempestade vai passar.'
        }
    },
    'Galo': {
        'Serpente': {
            relationship: 'excelente',
            title: '🌟 Ano Extremamente Favorável - Aliança Perfeita',
            positive: 'Galo e Serpente são aliados poderosos! Ano excelente para todas as áreas: carreira, amor, finanças, saúde. Sua organização + sabedoria da Serpente = sucesso. Reconhecimento profissional, oportunidades douradas e relacionamentos harmoniosos.',
            negative: 'O único cuidado é com excesso de perfeccionismo. Juntos, Galo e Serpente podem criar padrões impossíveis.',
            advice: 'Aproveite este ano maravilhoso! Faça grandes movimentos profissionais, invista, case, compre imóveis, inicie projetos importantes. Suas chances de sucesso são altíssimas. Confie em sua intuição e vá com tudo!'
        }
    },
    'Cão': {
        'Serpente': {
            relationship: 'neutra',
            title: '⚖️ Ano Neutro - Lealdade e Mistério',
            positive: 'Sua lealdade e honestidade podem se beneficiar da sabedoria da Serpente. Bom ano para causas justas, trabalho social e desenvolvimento espiritual.',
            negative: 'Cão é transparente, Serpente é misteriosa. Isso pode gerar desconforto. Você pode desconfiar das intenções dos outros mais que o usual.',
            advice: 'Mantenha seus valores mas seja menos julgador. Nem todos são transparentes como você e está tudo bem. Use este ano para desenvolver discernimento sem perder sua bondade.'
        }
    },
    'Porco': {
        'Serpente': {
            relationship: 'conflituosa',
            title: '🚨 Ano Muito Desafiador - Opostos Totais',
            positive: 'Este ano difícil pode ensinar você a ser menos ingênuo, mais estratégico e proteger melhor seus recursos. Oportunidade de crescimento através de dificuldades.',
            negative: 'Porco e Serpente são opostos diretos. Sua generosidade pode ser explorada. Pode haver decepções, perdas financeiras ou traições. Sua natureza confiante conflita com a desconfiança necessária.',
            advice: 'ANO DE MÁXIMA PRECAUÇÃO! Não empreste dinheiro, não confie cegamente, leia contratos cuidadosamente. Proteja-se de pessoas manipuladoras. Desenvolva discernimento. Use este ano para fortalecer limites pessoais e aprender a dizer não. Seja menos ingênuo.'
        }
    }
};
function getYearImpact(userAnimal, yearAnimal) {
    const impact = yearImpacts[userAnimal]?.[yearAnimal];
    if (!impact) {
        return {
            relationship: 'neutra',
            title: 'Ano Neutro',
            positive: 'Um ano de equilíbrio e aprendizado.',
            negative: 'Mantenha-se atento às oportunidades e desafios.',
            advice: 'Seja prudente e aproveite as oportunidades que surgirem.'
        };
    }
    return impact;
}
function getRelationshipColor(relationship) {
    switch(relationship){
        case 'excelente':
            return 'green';
        case 'boa':
            return 'blue';
        case 'neutra':
            return 'yellow';
        case 'desafiadora':
            return 'orange';
        case 'conflituosa':
            return 'red';
        default:
            return 'gray';
    }
}
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/components/AstroMap.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>AstroMap
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
;
'use client';
;
;
;
;
// Coordenadas aproximadas de cidades (banco de dados simplificado)
const cityCoordinates = {
    // Linhas Solares
    'Los Angeles, EUA': [
        34.0522,
        -118.2437
    ],
    'Sydney, Austrália': [
        -33.8688,
        151.2093
    ],
    'Tóquio, Japão': [
        35.6762,
        139.6503
    ],
    'Dubai, EAU': [
        25.2048,
        55.2708
    ],
    'São Paulo, Brasil': [
        -23.5505,
        -46.6333
    ],
    // Linhas Lunares
    'Londres, Reino Unido': [
        51.5074,
        -0.1278
    ],
    'Dublin, Irlanda': [
        53.3498,
        -6.2603
    ],
    'Amsterdam, Holanda': [
        52.3676,
        4.9041
    ],
    'Vancouver, Canadá': [
        49.2827,
        -123.1207
    ],
    // Linhas de Vênus
    'Paris, França': [
        48.8566,
        2.3522
    ],
    'Veneza, Itália': [
        45.4408,
        12.3155
    ],
    'Rio de Janeiro, Brasil': [
        -22.9068,
        -43.1729
    ],
    'Bali, Indonésia': [
        -8.3405,
        115.0920
    ],
    // Outras
    'Berlim, Alemanha': [
        52.5200,
        13.4050
    ],
    'Seul, Coreia do Sul': [
        37.5665,
        126.9780
    ],
    'Hong Kong': [
        22.3193,
        114.1694
    ],
    'Nova York, EUA': [
        40.7128,
        -74.0060
    ],
    'Nova Delhi, Índia': [
        28.6139,
        77.2090
    ],
    'Bangkok, Tailândia': [
        13.7563,
        100.5018
    ],
    'Cairo, Egito': [
        30.0444,
        31.2357
    ],
    'Jerusalém, Israel': [
        31.7683,
        35.2137
    ],
    'Moscou, Rússia': [
        55.7558,
        37.6173
    ],
    'Oslo, Noruega': [
        59.9139,
        10.7522
    ],
    'Helsinki, Finlândia': [
        60.1695,
        24.9354
    ],
    'Montreal, Canadá': [
        45.5017,
        -73.5673
    ]
};
// Componente Map separado para carregamento dinâmico
const MapComponent = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/node_modules/react-leaflet/lib/index.js [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function AstroMap(props) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(MapComponent, {
                ...props
            }, void 0, false, {
                fileName: "[project]/src/components/AstroMap.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 space-y-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white dark:bg-gray-800 rounded-xl p-5 shadow-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-bold text-gray-800 dark:text-gray-100 mb-4 text-center",
                            children: "🎨 Guia de Interpretação das Linhas Planetárias"
                        }, void 0, false, {
                            fileName: "[project]/src/components/AstroMap.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-4 mb-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-yellow-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-yellow-500 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 271,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-yellow-700 dark:text-yellow-300",
                                                    children: "☀️ Linha Solar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 272,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Significado:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 17
                                                }, this),
                                                " Regiões onde você brilha naturalmente, recebe reconhecimento e desenvolve liderança.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 275,
                                                    columnNumber: 131
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Ideal para:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 17
                                                }, this),
                                                " Carreira, visibilidade pública, autoconfiança, vitalidade e sucesso profissional.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 127
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Energias:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 17
                                                }, this),
                                                " Poder pessoal, fama, energia vital elevada."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 274,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/30 dark:to-indigo-900/30 rounded-lg p-4 border-l-4 border-purple-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-purple-600 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-purple-700 dark:text-purple-300",
                                                    children: "🌙 Linha Lunar"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 285,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Significado:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 17
                                                }, this),
                                                " Locais que nutrem suas emoções, proporcionam segurança e conexão com o lar.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 288,
                                                    columnNumber: 122
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Ideal para:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, this),
                                                " Família, moradia, equilíbrio emocional, maternidade/paternidade, introspecção.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 124
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Energias:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 17
                                                }, this),
                                                " Conforto, nutrição emocional, memórias, intuição."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 287,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 282,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/30 dark:to-rose-900/30 rounded-lg p-4 border-l-4 border-pink-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-pink-500 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 297,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-pink-700 dark:text-pink-300",
                                                    children: "💝 Linha de Vênus"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 298,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 296,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300 leading-relaxed",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Significado:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 17
                                                }, this),
                                                " Regiões que favorecem amor, relacionamentos, beleza e prosperidade financeira.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 301,
                                                    columnNumber: 125
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Ideal para:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 17
                                                }, this),
                                                " Romance, casamento, artes, harmonia, negócios criativos, bem-estar.",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 302,
                                                    columnNumber: 113
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                    children: "Energias:"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 303,
                                                    columnNumber: 17
                                                }, this),
                                                " Amor, beleza, dinheiro, prazeres, criatividade."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 295,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AstroMap.tsx",
                            lineNumber: 267,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/30 dark:to-emerald-900/30 rounded-lg p-4 border-l-4 border-green-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-green-500 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 312,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-green-700 dark:text-green-300",
                                                    children: "✨ Local Favorável"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 311,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300",
                                            children: "Energias harmoniosas e positivas. Ótimos para morar, trabalhar, investir ou visitar. Você se sentirá naturalmente bem e terá mais facilidade para prosperar."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 315,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-red-500",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-5 h-5 rounded-full bg-red-500 border-2 border-white shadow"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 323,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "font-bold text-red-700 dark:text-red-300",
                                                    children: "⚠️ Local Desafiador"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/AstroMap.tsx",
                                                    lineNumber: 324,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 322,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-gray-700 dark:text-gray-300",
                                            children: "Energias tensas que requerem atenção extra. Não são proibidos, mas exigem mais autocuidado, preparação e consciência. Podem trazer lições importantes."
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/AstroMap.tsx",
                                            lineNumber: 326,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/AstroMap.tsx",
                                    lineNumber: 321,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/AstroMap.tsx",
                            lineNumber: 308,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/AstroMap.tsx",
                    lineNumber: 264,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/AstroMap.tsx",
                lineNumber: 263,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 text-xs text-gray-600 dark:text-gray-400",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-semibold mb-2",
                        children: "📍 Como usar este mapa:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/AstroMap.tsx",
                        lineNumber: 335,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-1 ml-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Clique nos marcadores"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AstroMap.tsx",
                                        lineNumber: 337,
                                        columnNumber: 17
                                    }, this),
                                    " para ver informações detalhadas de cada local"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AstroMap.tsx",
                                lineNumber: 337,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Arraste o mapa"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AstroMap.tsx",
                                        lineNumber: 338,
                                        columnNumber: 17
                                    }, this),
                                    " para explorar diferentes regiões do mundo"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AstroMap.tsx",
                                lineNumber: 338,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Use zoom"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AstroMap.tsx",
                                        lineNumber: 339,
                                        columnNumber: 17
                                    }, this),
                                    " para ver melhor as áreas de interesse"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AstroMap.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• As ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "linhas verticais tracejadas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/AstroMap.tsx",
                                        lineNumber: 340,
                                        columnNumber: 20
                                    }, this),
                                    " representam meridianos planetários"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/AstroMap.tsx",
                                lineNumber: 340,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/AstroMap.tsx",
                        lineNumber: 336,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/AstroMap.tsx",
                lineNumber: 334,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/AstroMap.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/DetailedReport.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s({
    "default": ()=>DetailedReport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-ssr] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-ssr] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-ssr] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-ssr] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lightbulb.js [app-ssr] (ecmascript) <export default as Lightbulb>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-ssr] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-ssr] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/numerology-interpretations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/astrology-interpretations.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/numerology-contexts.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chinese$2d$zodiac$2d$year$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/chinese-zodiac-year.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AstroMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/AstroMap.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
// Componente inline de horóscopo
function HoroscopeInline({ personalData }) {
    const [horoscope, setHoroscope] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isSubscribed, setIsSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [selectedPlan, setSelectedPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('annual');
    const getSunSign = (birthDate)=>{
        const date = new Date(birthDate);
        const month = date.getMonth() + 1;
        const day = date.getDate();
        if (month === 3 && day >= 21 || month === 4 && day <= 19) return 'Áries';
        if (month === 4 && day >= 20 || month === 5 && day <= 20) return 'Touro';
        if (month === 5 && day >= 21 || month === 6 && day <= 20) return 'Gêmeos';
        if (month === 6 && day >= 21 || month === 7 && day <= 22) return 'Câncer';
        if (month === 7 && day >= 23 || month === 8 && day <= 22) return 'Leão';
        if (month === 8 && day >= 23 || month === 9 && day <= 22) return 'Virgem';
        if (month === 9 && day >= 23 || month === 10 && day <= 22) return 'Libra';
        if (month === 10 && day >= 23 || month === 11 && day <= 21) return 'Escorpião';
        if (month === 11 && day >= 22 || month === 12 && day <= 21) return 'Sagitário';
        if (month === 12 && day >= 22 || month === 1 && day <= 19) return 'Capricórnio';
        if (month === 1 && day >= 20 || month === 2 && day <= 18) return 'Aquário';
        return 'Peixes';
    };
    const getLuckyColorForSign = (sign)=>{
        const signColors = {
            'Áries': 'Vermelho',
            'Touro': 'Verde',
            'Gêmeos': 'Amarelo',
            'Câncer': 'Prateado',
            'Leão': 'Dourado',
            'Virgem': 'Marrom',
            'Libra': 'Rosa',
            'Escorpião': 'Bordô',
            'Sagitário': 'Roxo',
            'Capricórnio': 'Preto',
            'Aquário': 'Azul Turquesa',
            'Peixes': 'Azul Marinho'
        };
        return signColors[sign] || 'Dourado';
    };
    const generateHoroscope = (birthDate)=>{
        const sign = getSunSign(birthDate);
        const today = new Date().toLocaleDateString('pt-BR');
        const predictions = {
            'Áries': {
                general: 'O dia promete energia renovada e novas oportunidades se apresentarão em sua jornada.',
                love: 'Romance no ar! Seja mais expressivo(a) com seus sentimentos.',
                career: 'Oportunidade de liderança se apresenta - aproveite!',
                health: 'Energia física em alta - ideal para atividades esportivas.'
            },
            'Touro': {
                general: 'Estabilidade e crescimento material estão em seu favor hoje.',
                love: 'Relacionamentos sólidos se fortalecerão ainda mais.',
                career: 'Projetos financeiros trarão retorno positivo.',
                health: 'Foque em atividades relaxantes para equilibrar energia.'
            },
            'Gêmeos': {
                general: 'Comunicação será sua maior aliada para resolver questões.',
                love: 'Conversas profundas fortalecerão relacionamentos.',
                career: 'Apresentações e reuniões serão bem-sucedidas.',
                health: 'Atividades mentais estimulantes farão bem à saúde.'
            },
            'Câncer': {
                general: 'Intuição forte guiará suas decisões importantes.',
                love: 'Momento emocional intenso e transformador.',
                career: 'Trabalho relacionado à família ou casa será favorecido.',
                health: 'Cuidado com a saúde emocional - pratique autocuidado.'
            },
            'Leão': {
                general: 'Dia de brilhar e receber reconhecimento merecido.',
                love: 'Romance intenso e apaixonado está no ar.',
                career: 'Liderança e criatividade serão valorizadas.',
                health: 'Energia vital em alta - aproveite para atividades físicas.'
            },
            'Virgem': {
                general: 'Organização e eficiência trarão resultados excelentes.',
                love: 'Comunicação clara resolverá questões relacionais.',
                career: 'Trabalho detalhado será reconhecido e valorizado.',
                health: 'Foque em hábitos saudáveis e rotinas equilibradas.'
            },
            'Libra': {
                general: 'Harmonia e equilíbrio guiarão suas decisões hoje.',
                love: 'Momento de fortalecer laços afetivos com diplomacia.',
                career: 'Parcerias profissionais trarão sucesso.',
                health: 'Equilíbrio emocional reflete em bem-estar físico.'
            },
            'Escorpião': {
                general: 'Transformação profunda está em andamento.',
                love: 'Intensidade emocional marcará seus relacionamentos.',
                career: 'Momento de mudanças importantes na carreira.',
                health: 'Sua energia transformadora está em destaque.'
            },
            'Sagitário': {
                general: 'Aventura e exploração trarão novas perspectivas.',
                love: 'Relacionamentos se expandem através de novas experiências.',
                career: 'Oportunidades de crescimento e viagens profissionais.',
                health: 'Atividades ao ar livre revitalizarão sua energia.'
            },
            'Capricórnio': {
                general: 'Disciplina e determinação trarão conquistas sólidas.',
                love: 'Relacionamentos maduros e estáveis serão favorecidos.',
                career: 'Progresso constante em projetos importantes.',
                health: 'Mantenha rotina saudável para resultados duradouros.'
            },
            'Aquário': {
                general: 'Inovação e originalidade marcarão seu dia.',
                love: 'Conexões únicas e diferentes atrairão sua atenção.',
                career: 'Networking e amizades trarão oportunidades.',
                health: 'Sua mente inovadora precisa de atividades estimulantes.'
            },
            'Peixes': {
                general: 'Intuição e sensibilidade estarão em alta.',
                love: 'Momento de conexão emocional profunda.',
                career: 'Criatividade e arte trarão reconhecimento.',
                health: 'Atividades espirituais equilibrarão sua energia.'
            }
        };
        const signData = predictions[sign] || predictions['Áries'];
        return {
            sign,
            date: today,
            generalPrediction: signData.general,
            love: signData.love,
            career: signData.career,
            health: signData.health,
            luckyNumbers: [
                Math.floor(Math.random() * 9) + 1,
                Math.floor(Math.random() * 9) + 1,
                Math.floor(Math.random() * 9) + 1
            ],
            luckyColor: getLuckyColorForSign(sign),
            advice: 'Confie em sua intuição e aproveite as oportunidades que se apresentam.'
        };
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (personalData.birthDate) {
            const horoscopeData = generateHoroscope(personalData.birthDate);
            setHoroscope(horoscopeData);
        }
        // Verificar se tem assinatura ativa
        if (personalData.email) {
            fetch('/api/check-horoscope-subscription', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: personalData.email
                })
            }).then((res)=>res.json()).then((data)=>{
                if (data.success) {
                    setIsSubscribed(data.isSubscribed);
                }
            }).catch(()=>{});
        }
    }, [
        personalData.birthDate,
        personalData.email
    ]);
    const handleSubscribe = (plan)=>{
        localStorage.setItem('horoscope_subscription_customer', JSON.stringify({
            name: personalData.fullName,
            email: personalData.email,
            birthDate: personalData.birthDate,
            plan: plan
        }));
        // URLs dos planos configurados no Kirvano
        const paymentUrl = plan === 'monthly' ? 'https://pay.kirvano.com/0a482613-b924-4722-ac74-9b2481e3a167' // Plano mensal R$ 17,00/mês
         : 'https://pay.kirvano.com/c2105980-0b73-4c27-8aef-7e871b829c9f' // Plano anual R$ 134,00/ano
        ;
        window.location.href = paymentUrl;
    };
    if (!horoscope) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600 mx-auto mb-4"
                }, void 0, false, {
                    fileName: "[project]/src/components/DetailedReport.tsx",
                    lineNumber: 212,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400",
                    children: "Gerando seu horóscopo..."
                }, void 0, false, {
                    fileName: "[project]/src/components/DetailedReport.tsx",
                    lineNumber: 213,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/DetailedReport.tsx",
            lineNumber: 211,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-6 sm:mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-yellow-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                            className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DetailedReport.tsx",
                            lineNumber: 223,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                        children: [
                            "5. Horóscopo De Hoje para ",
                            horoscope.sign
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4",
                        children: "Suas energias cósmicas e previsões para hoje"
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 221,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                        children: [
                            "Horóscopo do Dia -  ",
                            horoscope.date
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 235,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-4 inline-block",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-500 dark:text-gray-400",
                            children: "✨ Suas energias cósmicas para hoje ✨"
                        }, void 0, false, {
                            fileName: "[project]/src/components/DetailedReport.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 238,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 234,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 250,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Previsão Geral"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 253,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: horoscope.generalPrediction
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 255,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 263,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Amor"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 266,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: horoscope.love
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 268,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 261,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 277,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Carreira"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 279,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: horoscope.career
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 281,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 274,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 290,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 289,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Saúde"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 292,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: horoscope.health
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 294,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 287,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 303,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 302,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Números da Sorte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 305,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 301,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-2",
                                children: horoscope.luckyNumbers.map((number, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold text-sm",
                                        children: number
                                    }, index, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 309,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 307,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 300,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lightbulb$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lightbulb$3e$__["Lightbulb"], {
                                            className: "w-5 h-5 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 320,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 319,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-lg font-bold text-gray-800 dark:text-gray-200",
                                        children: "Conselho do Dia"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 322,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 318,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 dark:text-gray-400 text-sm leading-relaxed",
                                children: [
                                    horoscope.advice,
                                    " Sua cor ideal para hoje é ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold text-gray-800 dark:text-gray-200",
                                        children: horoscope.luckyColor
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 325,
                                        columnNumber: 58
                                    }, this),
                                    "."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 324,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 317,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 246,
                columnNumber: 7
            }, this),
            !isSubscribed && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-2",
                                children: "Receba Seu Horóscopo Diário"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 337,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-purple-100 mb-4",
                                children: "Assine agora e receba todos os dias o horóscopo para seu signo diretamente no seu whatsapp"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 340,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 333,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5 text-green-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 347,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Horóscopo personalizado diário"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 348,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 346,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5 text-green-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Enviado diretamente no seu whatsapp"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 352,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 350,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                        className: "w-5 h-5 text-green-300"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm",
                                        children: "Cancele quando quiser"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 356,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 354,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 345,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPlan('monthly'),
                                className: `bg-white rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 ${selectedPlan === 'monthly' ? 'ring-4 ring-yellow-400 ring-opacity-50' : 'opacity-90 hover:opacity-100'}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-gray-600 font-semibold mb-2",
                                            children: "Plano Mensal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 372,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-4xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                            children: "R$ 17,00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 373,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600 font-medium mb-4",
                                            children: "por mês"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 376,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-500",
                                            children: "Renovação automática mensal"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 377,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 371,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 363,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setSelectedPlan('annual'),
                                className: `bg-white rounded-xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 relative ${selectedPlan === 'annual' ? 'ring-4 ring-yellow-400 ring-opacity-50' : 'opacity-90 hover:opacity-100'}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg transform rotate-12 animate-pulse",
                                        children: "30% OFF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 393,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-gray-600 font-semibold mb-2",
                                                children: "Plano Anual"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 398,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-4xl font-bold mb-1 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
                                                children: "R$ 134,00"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 399,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-400 line-through mb-2",
                                                children: "R$ 204,00/ano"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 402,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 font-medium mb-4",
                                                children: "por ano"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-green-600 font-semibold mb-2",
                                                children: "Economize o equivalente a 4 meses grátis no plano anual"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 404,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 397,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 384,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 361,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>handleSubscribe(selectedPlan),
                                className: "bg-white text-purple-600 py-3 px-8 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 w-full md:w-auto",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 420,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: selectedPlan === 'monthly' ? 'Assinar Plano Mensal' : 'Assinar Plano Anual'
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 421,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 419,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 415,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-4 flex items-center justify-center gap-2 text-sm text-purple-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 428,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Pagamento 100% seguro"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 429,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 427,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 414,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 332,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DetailedReport.tsx",
        lineNumber: 219,
        columnNumber: 5
    }, this);
}
function DetailedReport({ reportData }) {
    const { numerology, astrology, chineseZodiac, astrocartography } = reportData;
    // Interpretações de numerologia
    const lifePathInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.lifePathNumber);
    const destinyInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.destinyNumber);
    const soulInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.soulNumber);
    const personalityInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.personalityNumber);
    // Interpretações de astrologia
    const sunSignInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.sunSign);
    const moonSignInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.moonSign);
    const ascendantInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.ascendant);
    // Ano atual do zodíaco chinês e seu impacto
    const currentYear = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chinese$2d$zodiac$2d$year$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCurrentChineseYear"])();
    const yearImpact = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chinese$2d$zodiac$2d$year$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getYearImpact"])(chineseZodiac.animal, currentYear.animal);
    const relationshipColor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$chinese$2d$zodiac$2d$year$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getRelationshipColor"])(yearImpact.relationship);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "numerologia",
                className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                    className: "w-10 h-10 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 463,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 462,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "1. Numerologia Pessoal Completa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 465,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Seus números sagrados revelam o mapa completo de sua alma e missão nesta vida"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 468,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 461,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.lifePathNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 477,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 476,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Caminho da Vida: ",
                                                    lifePathInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 480,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Sua missão principal nesta encarnação"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 483,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 479,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 475,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-green-600 dark:text-green-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 490,
                                                        columnNumber: 17
                                                    }, this),
                                                    "✨ Pontos Positivos"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 489,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.positiveTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 496,
                                                                columnNumber: 21
                                                            }, this),
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 493,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 488,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 505,
                                                        columnNumber: 17
                                                    }, this),
                                                    "⚠️ Pontos de Atenção"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 504,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.negativeTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 511,
                                                                columnNumber: 21
                                                            }, this),
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 510,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 508,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 520,
                                                        columnNumber: 17
                                                    }, this),
                                                    "🎯 O Que Fazer"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 519,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.guidance || []).map((guide, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 526,
                                                                columnNumber: 21
                                                            }, this),
                                                            guide
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 525,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 523,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 518,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-purple-700 dark:text-purple-300 mb-2",
                                                        children: "💼 Carreira"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 535,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: lifePathInterp.career
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 536,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 534,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2",
                                                        children: "❤️ Relacionamentos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 539,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: lifePathInterp.relationships
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 540,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 538,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 533,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-indigo-700 dark:text-indigo-300 mb-2",
                                                children: "🙏 Jornada Espiritual"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 545,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: lifePathInterp.spirituality
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 546,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 544,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 rounded-xl p-5 mt-4 border-l-4 border-purple-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-purple-800 dark:text-purple-200 mb-2",
                                                children: "📖 Lição de Vida"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 550,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-800 dark:text-gray-200 italic",
                                                children: lifePathInterp.lifeLesson
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 551,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 549,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 474,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.destinyNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 560,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 559,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número do Destino: ",
                                                    destinyInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 563,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Seu potencial máximo a ser alcançado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 566,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 562,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 558,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-blue-700 dark:text-blue-300 mb-2",
                                                children: "✨ Dons e Talentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 572,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: (destinyInterp.positiveTraits || []).slice(0, 4).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            "• ",
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 575,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 573,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 571,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-cyan-700 dark:text-cyan-300 mb-2",
                                                children: "🎯 Caminho Para Realização"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 580,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: destinyInterp.guidance?.[0] || 'Busque seu propósito'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 581,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 579,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 570,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 557,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.soulNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 590,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 589,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número da Alma: ",
                                                    soulInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 593,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Suas motivações mais profundas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 596,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 592,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 588,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-yellow-700 dark:text-yellow-300 mb-2",
                                                children: "💫 O Que Sua Alma Deseja"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 602,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: soulInterp.spirituality
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 603,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 601,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                children: "🔥 Paixões Internas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 606,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: (soulInterp.positiveTraits || []).slice(0, 3).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            "• ",
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 609,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 607,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 605,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 600,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 587,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.personalityNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 620,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 619,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número da Personalidade: ",
                                                    personalityInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 623,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Como você aparece para o mundo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 626,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 622,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 618,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                                children: "👥 Primeira Impressão"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 632,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: (personalityInterp.positiveTraits || []).slice(0, 3).join(', ') || 'Personalidade marcante'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 633,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 631,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-emerald-700 dark:text-emerald-300 mb-2",
                                                children: "🎭 Dica para Autenticidade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 638,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: personalityInterp.guidance?.[0] || 'Seja autêntico'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 639,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 637,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 630,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 617,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "w-6 h-6 text-purple-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 649,
                                                columnNumber: 15
                                            }, this),
                                            "Ciclos de Vida"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 648,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Sua vida é dividida em 3 grandes ciclos, cada um com energia e lições específicas:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 border-l-4 border-purple-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-purple-700 dark:text-purple-300",
                                                                children: "1º Ciclo - Juventude (0-28 anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 658,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-purple-600 dark:text-purple-400",
                                                                children: numerology.lifeCycles.first
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 659,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 657,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.first)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 661,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 656,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-lg p-4 border-l-4 border-pink-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-pink-700 dark:text-pink-300",
                                                                children: "2º Ciclo - Maturidade (28-56 anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 667,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-pink-600 dark:text-pink-400",
                                                                children: numerology.lifeCycles.second
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 668,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 666,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.second)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 670,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 665,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 border-l-4 border-indigo-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-indigo-700 dark:text-indigo-300",
                                                                children: "3º Ciclo - Sabedoria (56+ anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 676,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-indigo-600 dark:text-indigo-400",
                                                                children: numerology.lifeCycles.third
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 677,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 675,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.third)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 679,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 674,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 655,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 647,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-6 h-6 text-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 689,
                                                columnNumber: 15
                                            }, this),
                                            "Energias Atuais"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 688,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Cada período da sua vida tem uma energia numerológica específica que influencia eventos e oportunidades:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 692,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 border-l-4 border-blue-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-blue-700 dark:text-blue-300",
                                                                children: "Seu Ano Pessoal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 698,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-4xl font-bold text-blue-600 dark:text-blue-400",
                                                                children: numerology.personalYear
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 699,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 697,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold",
                                                        children: "O QUE ESPERAR ESTE ANO:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 701,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalYearMeaning"])(numerology.personalYear)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 704,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 696,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-3 border-l-4 border-cyan-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-cyan-700 dark:text-cyan-300 text-sm mb-2",
                                                                children: [
                                                                    "Mês Pessoal: ",
                                                                    numerology.personalMonth
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 710,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-700 dark:text-gray-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalMonthMeaning"])(numerology.personalMonth)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 711,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 709,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-teal-50 dark:bg-teal-900/30 rounded-lg p-3 border-l-4 border-teal-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-teal-700 dark:text-teal-300 text-sm mb-2",
                                                                children: [
                                                                    "Dia Pessoal: ",
                                                                    numerology.personalDay
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 716,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-700 dark:text-gray-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPersonalDayMeaning"])(numerology.personalDay)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 717,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 715,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 708,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 695,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 687,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 645,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                className: "w-6 h-6 text-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 730,
                                                columnNumber: 15
                                            }, this),
                                            "Talentos Ocultos"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 729,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Números ausentes ou raros em seu nome revelam potenciais a serem desenvolvidos:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 733,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: numerology.hiddenTalents?.map((talent, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-yellow-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-yellow-600 dark:text-yellow-400",
                                                                children: talent
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 740,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-yellow-700 dark:text-yellow-300",
                                                                children: "Talento Oculto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 741,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 739,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getHiddenTalentMeaning"])(talent)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 743,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 738,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 736,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 728,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-6 h-6 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 753,
                                                columnNumber: 15
                                            }, this),
                                            "Desafios Principais"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 752,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Obstáculos recorrentes em sua vida que, quando superados, trazem grande crescimento:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 756,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: numerology.challenges?.map((challenge, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-red-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-red-700 dark:text-red-300",
                                                                children: [
                                                                    "Desafio ",
                                                                    idx + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 763,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-red-600 dark:text-red-400",
                                                                children: challenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 764,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 762,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getChallengeMeaning"])(challenge)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 766,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 761,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 759,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 727,
                        columnNumber: 9
                    }, this),
                    numerology.karmicDebts && Array.isArray(numerology.karmicDebts) && numerology.karmicDebts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-purple-100 to-red-100 dark:from-purple-900/50 dark:to-red-900/50 rounded-xl p-6 mt-6 border-2 border-purple-300 dark:border-purple-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xl font-bold text-purple-800 dark:text-purple-200 mb-3",
                                children: "🔮 Dívidas Cármicas Detectadas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 778,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mb-3",
                                children: (numerology.karmicDebts || []).map((debt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-purple-600 dark:text-purple-400",
                                            children: debt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 782,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 781,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 779,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 dark:text-gray-300",
                                children: "Você possui números de dívida cármica. Estes indicam lições não completamente aprendidas em vidas passadas que você veio resolver nesta encarnação. São oportunidades poderosas de crescimento espiritual acelerado."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 786,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 777,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 460,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "astrologia",
                className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-10 h-10 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 798,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 797,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "2. Astrologia Ocidental Completa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 800,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Seu mapa celeste revela como os astros influenciam cada área da sua vida"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 803,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 796,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-8 h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 812,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 811,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Sol em ",
                                                    sunSignInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 815,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: [
                                                    sunSignInterp.element,
                                                    " • ",
                                                    sunSignInterp.quality,
                                                    " • Regido por ",
                                                    sunSignInterp.rulingPlanet
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 818,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 814,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 810,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                children: "☀️ Sua Essência Solar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 826,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300",
                                                children: sunSignInterp.inSun
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 827,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 825,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                                        children: "✨ Qualidades Positivas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 832,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1",
                                                        children: (sunSignInterp.positiveTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                                children: [
                                                                    "• ",
                                                                    trait
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 835,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 833,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 831,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                        children: "⚠️ Desafios"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 840,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1",
                                                        children: (sunSignInterp.negativeTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                                children: [
                                                                    "• ",
                                                                    trait
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 843,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 841,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 839,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 830,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm",
                                                        children: "💼 Carreira"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 851,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.career
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 852,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 850,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2 text-sm",
                                                        children: "❤️ Amor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 855,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.love
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 856,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 854,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-red-50 dark:bg-red-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-red-700 dark:text-red-300 mb-2 text-sm",
                                                        children: "🏥 Saúde"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 859,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.health
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 860,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 858,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm",
                                                        children: "🙏 Espiritual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 863,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.spirituality
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 864,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 862,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 849,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 824,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 809,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl",
                                            children: "🌙"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 874,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 873,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Lua em ",
                                                    moonSignInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 877,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Suas emoções e necessidades internas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 880,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 876,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 872,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-purple-700 dark:text-purple-300 mb-2",
                                                children: "🌙 Mundo Emocional"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 886,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300",
                                                children: moonSignInterp.inMoon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 887,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 885,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2",
                                                        children: "💝 Como Você Se Nutre"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 891,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: moonSignInterp.positiveTraits?.slice(0, 3).join(', ') || 'Sensibilidade emocional'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 892,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 890,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-indigo-700 dark:text-indigo-300 mb-2",
                                                        children: "🛡️ Proteções Emocionais"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 895,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: moonSignInterp.negativeTraits?.[0] ? `Evite: ${moonSignInterp.negativeTraits[0]}` : 'Cuide de suas emoções'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 896,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 894,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 889,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 884,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 871,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl",
                                            children: "🎭"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 906,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 905,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Ascendente em ",
                                                    ascendantInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 909,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Sua máscara social e primeira impressão"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 912,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 908,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 904,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                        children: "🎭 Como Outros Te Veem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 917,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 dark:text-gray-300",
                                        children: ascendantInterp.inAscendant
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 918,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 916,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 903,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: "🌟 Aspectos Importantes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 925,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: astrology.aspects?.slice(0, 4).map((aspect, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-500 mr-2",
                                                        children: "★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 929,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: aspect
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 930,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 928,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 926,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 924,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: "🔄 Trânsitos Atuais"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 937,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: astrology.currentTransits?.slice(0, 4).map((transit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-indigo-500 mr-2",
                                                        children: "⟳"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 941,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: transit
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 942,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 940,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 938,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 936,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 923,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 795,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "zodiaco-chines",
                className: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl",
                                children: "🐉"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 953,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "3. Astrologia Chinesa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 956,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "A sabedoria milenar do Oriente sobre sua personalidade e destino"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 959,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 952,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-4xl font-bold text-red-600 dark:text-red-400 mb-2",
                                        children: chineseZodiac.animal
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 966,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl text-orange-600 dark:text-orange-400 mb-2",
                                        children: [
                                            "Elemento ",
                                            chineseZodiac.element,
                                            " • Energia ",
                                            chineseZodiac.yinYang
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 969,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-400 italic",
                                        children: chineseZodiac.fullSign
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 972,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 965,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-50 dark:bg-red-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-red-700 dark:text-red-300 mb-3",
                                                children: "✨ Forças e Talentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 977,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm mb-3",
                                                children: chineseZodiac.strengths
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 978,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: chineseZodiac.traits?.map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-semibold",
                                                        children: trait
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 981,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 979,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 976,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-orange-700 dark:text-orange-300 mb-3",
                                                children: "⚠️ Desafios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 989,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm mb-3",
                                                children: chineseZodiac.weaknesses
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 990,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm font-semibold",
                                                children: "🎯 O que fazer:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 991,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400 text-xs",
                                                children: chineseZodiac.challenges
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 992,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 988,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 975,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-yellow-700 dark:text-yellow-300 mb-2",
                                                children: "💼 Carreira Ideal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 998,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: chineseZodiac.careerTalents
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 999,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 997,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-pink-700 dark:text-pink-300 mb-2",
                                                children: "❤️ Compatibilidade Amorosa"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1003,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2 mt-2",
                                                children: chineseZodiac.loveCompatibility?.map((animal, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: animal
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1006,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1004,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1002,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-blue-700 dark:text-blue-300 mb-2",
                                                children: "🤝 Compatibilidade Profissional"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1014,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2 mt-2",
                                                children: chineseZodiac.careerCompatibility?.map((animal, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: animal
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1017,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1015,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1013,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 996,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-orange-700 dark:text-orange-300 mb-2",
                                        children: "🔢 Números da Sorte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1026,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 justify-center",
                                        children: chineseZodiac.luckyNumbers?.map((number, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold text-red-600 dark:text-red-400",
                                                    children: number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                                    lineNumber: 1030,
                                                    columnNumber: 19
                                                }, this)
                                            }, idx, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1029,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1027,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1025,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `bg-gradient-to-r ${relationshipColor === 'green' ? 'from-green-100 to-emerald-100 dark:from-green-900/50 dark:to-emerald-900/50 border-green-400 dark:border-green-600' : relationshipColor === 'blue' ? 'from-blue-100 to-cyan-100 dark:from-blue-900/50 dark:to-cyan-900/50 border-blue-400 dark:border-blue-600' : relationshipColor === 'yellow' ? 'from-yellow-100 to-amber-100 dark:from-yellow-900/50 dark:to-amber-900/50 border-yellow-400 dark:border-yellow-600' : relationshipColor === 'orange' ? 'from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 border-orange-400 dark:border-orange-600' : 'from-red-100 to-rose-100 dark:from-red-900/50 dark:to-rose-900/50 border-red-400 dark:border-red-600'} rounded-2xl p-6 border-4 shadow-xl mt-6`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-center mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-block bg-white dark:bg-gray-800 rounded-full px-6 py-3 shadow-lg mb-3",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-lg font-bold text-gray-800 dark:text-gray-100",
                                                    children: [
                                                        "📅 ",
                                                        currentYear.year,
                                                        " - Ano da ",
                                                        currentYear.animal,
                                                        " de ",
                                                        currentYear.element
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                                    lineNumber: 1046,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1045,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-600 dark:text-gray-400 italic",
                                                children: currentYear.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1050,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1044,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: `text-2xl font-bold mb-4 text-center ${relationshipColor === 'green' ? 'text-green-700 dark:text-green-300' : relationshipColor === 'blue' ? 'text-blue-700 dark:text-blue-300' : relationshipColor === 'yellow' ? 'text-yellow-700 dark:text-yellow-300' : relationshipColor === 'orange' ? 'text-orange-700 dark:text-orange-300' : 'text-red-700 dark:text-red-300'}`,
                                        children: yearImpact.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1053,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-xl p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "font-bold text-green-600 dark:text-green-400 mb-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl",
                                                                children: "✅"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1066,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Oportunidades e Pontos Positivos"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1065,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: yearImpact.positive
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1068,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1064,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-white dark:bg-gray-800 rounded-xl p-5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "font-bold text-orange-600 dark:text-orange-400 mb-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl",
                                                                children: "⚠️"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1075,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Cuidados e Desafios"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1074,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: yearImpact.negative
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1077,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1073,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-purple-50 to-indigo-50 dark:from-purple-900/50 dark:to-indigo-900/50 rounded-xl p-5 border-l-4 border-purple-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                        className: "font-bold text-purple-700 dark:text-purple-300 mb-2 flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-2xl",
                                                                children: "💡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1084,
                                                                columnNumber: 19
                                                            }, this),
                                                            " Conselho Especializado"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1083,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-gray-700 dark:text-gray-300 leading-relaxed font-medium",
                                                        children: yearImpact.advice
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1086,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1082,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1063,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1037,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 964,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 951,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "astrocartografia",
                className: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 rounded-3xl p-6 sm:p-10 shadow-2xl scroll-mt-24",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl",
                                children: "🌍"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1098,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "4. Astrocartografia"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Descubra os locais do mundo onde sua energia flui melhor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1097,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                children: "📍 Sua Análise Personalizada"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1111,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                children: astrocartography.personalizedAnalysis
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1112,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4 flex items-center gap-2",
                                children: "🗺️ Seu Mapa Astrocartográfico Interativo"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1117,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mb-6",
                                children: "Visualize onde no mundo suas energias planetárias são mais fortes. Clique nos marcadores para ver detalhes!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1120,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$AstroMap$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                birthPlace: reportData.personalData.birthPlace || 'Local não especificado',
                                sunLines: astrocartography.sunLines || [],
                                moonLines: astrocartography.moonLines || [],
                                venusLines: astrocartography.venusLines || [],
                                favorableLocations: astrocartography.favorableLocations || {},
                                challengingLocations: astrocartography.challengingLocations || {}
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1123,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1116,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-yellow-700 dark:text-yellow-300 mb-3 flex items-center gap-2",
                                        children: "☀️ Linhas Solares"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1136,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Liderança, reconhecimento, vitalidade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1139,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: astrocartography.sunLines?.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1142,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1140,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1135,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2",
                                        children: "🌙 Linhas Lunares"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1150,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Emoções, lar, segurança"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1153,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: astrocartography.moonLines?.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1156,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1154,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1149,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-pink-700 dark:text-pink-300 mb-3 flex items-center gap-2",
                                        children: "💝 Linhas de Vênus"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1164,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Amor, beleza, prosperidade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1167,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: astrocartography.venusLines?.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-pink-50 dark:bg-pink-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1170,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1168,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1163,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1134,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6",
                                children: "✨ Seus Destinos Ideais"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1180,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                children: "Locais onde suas energias planetárias fluem harmoniosamente. Ótimos para morar, trabalhar ou visitar!"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1181,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-6",
                                children: astrocartography.favorableLocations && Object.entries(astrocartography.favorableLocations).map(([category, locations])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "font-bold text-teal-700 dark:text-teal-300 mb-3",
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1187,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: (Array.isArray(locations) ? locations : []).slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-500 mr-2",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1191,
                                                                columnNumber: 23
                                                            }, this),
                                                            loc
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1190,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1188,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, category, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1186,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1184,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1179,
                        columnNumber: 9
                    }, this),
                    astrocartography.challengingLocations && Object.keys(astrocartography.challengingLocations).length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border-2 border-orange-200 dark:border-orange-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6 flex items-center gap-2",
                                children: "⚠️ Locais que Requerem Atenção Especial"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1204,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                children: "Estes locais podem apresentar desafios ou tensões energéticas. Não significa que você não deva visitá-los, mas é importante estar preparado(a) e consciente. Com autocuidado e preparação adequada, você pode navegar essas energias com sucesso."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1207,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6",
                                children: Object.entries(astrocartography.challengingLocations).map(([category, locations])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl p-5 border-l-4 border-orange-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "font-bold text-orange-700 dark:text-orange-300 mb-3 flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xl",
                                                        children: "⚠️"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1216,
                                                        columnNumber: 21
                                                    }, this),
                                                    category
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1215,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: (Array.isArray(locations) ? locations : []).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-red-500 mr-2",
                                                                children: "⚡"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 1222,
                                                                columnNumber: 25
                                                            }, this),
                                                            loc
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 1221,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1219,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 p-3 bg-white dark:bg-gray-800 rounded-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-gray-600 dark:text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            className: "text-orange-600 dark:text-orange-400",
                                                            children: "💡 O que fazer:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                                            lineNumber: 1229,
                                                            columnNumber: 23
                                                        }, this),
                                                        " Visite com consciência, pratique autocuidado extra, estabeleça limites claros e busque apoio quando necessário."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                                    lineNumber: 1228,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 1227,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, category, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 1214,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 1212,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 1203,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 1096,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "horoscope-section",
                className: "bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/30 dark:to-amber-900/30 rounded-2xl p-6 sm:p-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HoroscopeInline, {
                    personalData: reportData.personalData
                }, void 0, false, {
                    fileName: "[project]/src/components/DetailedReport.tsx",
                    lineNumber: 1243,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 1241,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DetailedReport.tsx",
        lineNumber: 458,
        columnNumber: 5
    }, this);
}
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
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/compass.js [app-ssr] (ecmascript) <export default as Compass>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-ssr] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-ssr] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-ssr] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/gem.js [app-ssr] (ecmascript) <export default as Gem>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$stripe$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/stripe.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailedReport$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DetailedReport.tsx [app-ssr] (ecmascript)");
'use client';
;
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
    const [mysticReport, setMysticReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isProcessingPayment, setIsProcessingPayment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [paymentError, setPaymentError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isHoroscopeSubscribed, setIsHoroscopeSubscribed] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Carregar dados salvos do localStorage ao iniciar
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, []);
    // Salvar dados no localStorage quando mudarem
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }, [
        personalData
    ]);
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
        console.log('🔥 BOTÃO CLICADO! Função handlePayment executada para plano único R$80,00 - KIRVANO');
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
            console.log('✅ Validação passou, iniciando pagamento Kirvano para plano único R$80,00');
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
        // Mudar para o passo 2 para mostrar o relatório
        setCurrentStep(2);
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
                                    lineNumber: 1025,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1024,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                                children: "Dados para Seu Relatório Místico"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1027,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-4",
                                children: "Quanto mais precisos os dados, mais detalhado e personalizado será seu relatório"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1030,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-xl p-4 sm:p-6 mb-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-2xl sm:text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2",
                                            children: "R$ 80,00"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1037,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-gray-600 dark:text-gray-400",
                                            children: "Relatório Místico Completo - Pagamento único"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1040,
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
                                                            lineNumber: 1045,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Numerologia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1046,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1044,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1048,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1050,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Astrologia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1051,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1049,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1053,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1055,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Zodíaco Chinês"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1056,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1054,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "hidden sm:inline",
                                                    children: "•"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1058,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                            className: "w-3 h-3 sm:w-4 sm:h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1060,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Astrocartografia"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1061,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1059,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1043,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1036,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1035,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1023,
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
                                        lineNumber: 1070,
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
                                        lineNumber: 1073,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Essencial para cálculos numerológicos precisos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1080,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1069,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "E-mail *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1086,
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
                                        lineNumber: 1089,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Necessário para processar o pagamento e enviar seu relatório"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1096,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1085,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Data de Nascimento *"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1102,
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
                                        lineNumber: 1105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Base para todos os cálculos astrológicos e numerológicos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Hora de Nascimento"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1117,
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
                                        lineNumber: 1120,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Importante para ascendente e casas astrológicas precisas"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1126,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2",
                                        children: "Local de Nascimento"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1132,
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
                                        lineNumber: 1135,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-gray-500 dark:text-gray-400 mt-1",
                                        children: "Essencial para astrocartografia e cálculos astrológicos precisos"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1142,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1131,
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
                                            lineNumber: 1151,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    className: "text-sm font-medium text-red-800 dark:text-red-200 mb-1",
                                                    children: "Erro no Pagamento"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1155,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-red-700 dark:text-red-300",
                                                    children: paymentError
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1158,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1154,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1150,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1149,
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
                                                lineNumber: 1174,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base",
                                                children: "Processando Pagamento..."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1175,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"], {
                                                className: "w-4 h-4 sm:w-5 sm:h-5"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1179,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base",
                                                children: "Gerar Relatório Místico Completo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1180,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1171,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1166,
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
                                            lineNumber: 1188,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Pagamento 100% seguro via Kirvano"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1189,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1187,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1186,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1068,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 1022,
                columnNumber: 7
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1021,
            columnNumber: 5
        }, this);
    const renderMysticReport = ()=>{
        if (!mysticReport) return null;
        const reportData = {
            personalData: {
                fullName: personalData.fullName,
                email: personalData.email,
                birthDate: personalData.birthDate,
                birthTime: personalData.birthTime,
                birthPlace: personalData.birthPlace
            },
            numerology: mysticReport.numerology,
            astrology: mysticReport.astrology,
            chineseZodiac: mysticReport.chineseZodiac,
            astrocartography: mysticReport.astrocartography
        };
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailedReport$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            reportData: reportData
        }, void 0, false, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1215,
            columnNumber: 7
        }, this);
    };
    const renderOldMysticReport = ()=>{
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
                                lineNumber: 1227,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                            children: "Relatório Místico Completo"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2",
                            children: personalData.fullName
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1232,
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
                            lineNumber: 1235,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic",
                            children: '"Conhece-te a ti mesmo e conhecerás o universo e os deuses" - Oráculo de Delfos'
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1240,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1225,
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
                                        lineNumber: 1249,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1248,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2",
                                    children: "1. Numerologia Pitagórica Completa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1251,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                    children: "Os números sagrados que governam sua existência e revelam seu propósito divino"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1254,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1247,
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
                                                        lineNumber: 1272,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1271,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "font-bold text-sm sm:text-base text-gray-800 dark:text-gray-200",
                                                            children: item.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1275,
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
                                                            lineNumber: 1276,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1270,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                            className: "font-semibold text-base sm:text-lg text-gray-800 dark:text-gray-200 mb-2",
                                            children: meaning?.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1279,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-600 dark:text-gray-400 text-xs sm:text-sm mb-3",
                                            children: meaning?.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1280,
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
                                                    lineNumber: 1284,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: meaning?.positives.slice(0, 3).map((positive, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs",
                                                            children: positive
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1287,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1285,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1283,
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
                                                    lineNumber: 1296,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap gap-1",
                                                    children: meaning?.negatives.slice(0, 3).map((negative, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs",
                                                            children: negative
                                                        }, idx, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1299,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1297,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1295,
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
                                                        lineNumber: 1309,
                                                        columnNumber: 23
                                                    }, this),
                                                    " ",
                                                    meaning?.advice
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1308,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1307,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1269,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1260,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1246,
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
                                lineNumber: 1321,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1320,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                            children: "Sua Jornada de Autoconhecimento e Transformação"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1323,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Este relatório é muito mais que uma simples análise - é um mapa sagrado para sua jornada de autoconhecimento e crescimento espiritual. Cada número, cada posição planetária, cada símbolo chinês carrega uma mensagem especial do universo para você."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1327,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: "Use essas informações como uma bússola em sua caminhada pela vida. Lembre-se: você tem o poder de criar sua própria realidade, e agora possui as ferramentas ancestrais para fazê-lo de forma mais sábia, consciente e alinhada com seu propósito divino."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1331,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1326,
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
                                    lineNumber: 1337,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic",
                                    children: "- Aristóteles"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1340,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1336,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: "✨ Que este relatório ilumine seu caminho e desperte a magia que já existe dentro de você ✨"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1345,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1344,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1319,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1223,
            columnNumber: 7
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4 py-6 sm:py-8",
            children: [
                currentStep === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
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
                                            lineNumber: 1361,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1360,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1359,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-3xl sm:text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4",
                                    children: "Astroglix"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1364,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto px-4",
                                    children: "Mapa Astral Completo e Relatórios Místicos Profissionais: Numerologia Pitagórica, Astrologia Ocidental, Astrologia Chinesa, Astrocartografia e Horóscopo Personalizado"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1367,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "✨ Desvende os mistérios do universo através da sabedoria ancestral ✨"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1371,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1370,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1358,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto mb-12 sm:mb-16 px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl sm:text-3xl md:text-4xl font-bold mb-4",
                                        children: "Descubra Seu Propósito de Vida e Tome Decisões com Mais Clareza"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1378,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-lg sm:text-xl mb-6 opacity-90",
                                        children: "Um relatório completo que combina 4 ciências ancestrais milenares para revelar quem você realmente é e qual seu caminho"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1381,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap justify-center gap-4 text-sm sm:text-base",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1386,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Entrega Imediata"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1387,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1385,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1390,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "100% Personalizado"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1391,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1389,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1394,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Baseado em Ciências Antigas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1395,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1393,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1384,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1377,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1376,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-6xl mx-auto mb-12 sm:mb-16 px-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-4",
                                    children: "O Que Você Vai Descobrir Sobre Si Mesmo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1403,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-center text-gray-600 dark:text-gray-400 mb-10 max-w-3xl mx-auto",
                                    children: "Informações profundas que vão transformar a forma como você enxerga sua vida e suas escolhas"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1406,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                        className: "w-7 h-7 text-purple-600 dark:text-purple-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1414,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1413,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 dark:text-gray-200 mb-3",
                                                    children: "Seu Propósito de Vida Real"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1416,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: 'Descubra qual é sua verdadeira missão nesta vida e pare de se sentir perdido. Entenda o "porquê" você está aqui.'
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1419,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1412,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-pink-100 dark:bg-pink-900 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                        className: "w-7 h-7 text-pink-600 dark:text-pink-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1427,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1426,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 dark:text-gray-200 mb-3",
                                                    children: "Relacionamentos Mais Saudáveis"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1429,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Entenda seus padrões de comportamento em relacionamentos e atraia pessoas mais compatíveis com sua essência."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1432,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1425,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                        className: "w-7 h-7 text-blue-600 dark:text-blue-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1440,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1439,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 dark:text-gray-200 mb-3",
                                                    children: "Carreira e Finanças Alinhadas"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1442,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Descubra qual carreira combina com seus talentos naturais e como atrair mais abundância para sua vida."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1445,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1438,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                        className: "w-7 h-7 text-green-600 dark:text-green-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1453,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1452,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 dark:text-gray-200 mb-3",
                                                    children: "Autoconhecimento Profundo"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1455,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Entenda seus pontos fortes, seus desafios e como trabalhar melhor suas emoções e personalidade."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1458,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1451,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$compass$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Compass$3e$__["Compass"], {
                                                        className: "w-7 h-7 text-orange-600 dark:text-orange-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1466,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1465,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 dark:text-gray-200 mb-3",
                                                    children: "Melhores Decisões"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1468,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Tome decisões mais alinhadas com quem você é, evitando caminhos que não ressoam com sua essência."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1471,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1464,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-14 h-14 bg-indigo-100 dark:bg-indigo-900 rounded-full flex items-center justify-center mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                        className: "w-7 h-7 text-indigo-600 dark:text-indigo-400"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1479,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1478,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "text-xl font-bold text-gray-800 dark:text-gray-200 mb-3",
                                                    children: "Lugares Ideais Para Você"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1481,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600 dark:text-gray-400",
                                                    children: "Descubra quais cidades e países potencializam sua energia e são mais favoráveis para sua prosperidade."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1484,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/page.tsx",
                                            lineNumber: 1477,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1410,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1402,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto mb-12 sm:mb-16 px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8",
                                        children: "Tudo Isso em Um Único Relatório Completo"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1494,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-xl flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                                            className: "w-6 h-6 text-purple-600 dark:text-purple-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1501,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1500,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-gray-200 mb-2",
                                                                children: "Numerologia Pitagórica Completa"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1504,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 dark:text-gray-400 text-sm",
                                                                children: "Descubra seus números sagrados: Caminho da Vida, Alma, Destino, Personalidade, Talentos Ocultos, Lições Cármicas e muito mais. Entenda os ciclos que regem sua vida."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1507,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1503,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1499,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-xl flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                            className: "w-6 h-6 text-blue-600 dark:text-blue-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1515,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1514,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-gray-200 mb-2",
                                                                children: "Astrologia Ocidental Detalhada"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1518,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 dark:text-gray-400 text-sm",
                                                                children: "Seu mapa astral completo com Sol, Lua, Ascendente, posições planetárias, casas astrológicas e aspectos. Entenda como os astros influenciam sua personalidade e destino."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1521,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1517,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1513,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-red-100 dark:bg-red-900 rounded-xl flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-2xl",
                                                            children: "🐉"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1529,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1528,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-gray-200 mb-2",
                                                                children: "Astrologia Chinesa Profunda"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1532,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 dark:text-gray-400 text-sm",
                                                                children: "Seu animal, elemento, características, compatibilidades, desafios, pontos fortes e conselhos específicos para carreira e relacionamentos segundo a sabedoria oriental milenar."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1535,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1531,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1527,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-4 items-start",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-green-100 dark:bg-green-900 rounded-xl flex items-center justify-center flex-shrink-0",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                                            className: "w-6 h-6 text-green-600 dark:text-green-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 1543,
                                                            columnNumber: 23
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1542,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-bold text-gray-800 dark:text-gray-200 mb-2",
                                                                children: "Astrocartografia Personalizada"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1546,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-gray-600 dark:text-gray-400 text-sm",
                                                                children: "Descubra quais lugares do mundo potencializam sua energia, onde você terá mais sucesso profissional, amor, criatividade e realização. Seu mapa energético global."
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 1549,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1545,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1541,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1498,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 pt-8 border-t border-gray-200 dark:border-gray-700 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "inline-flex items-center gap-2 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-6 py-3 rounded-full font-semibold",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$gem$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Gem$3e$__["Gem"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1558,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Relatório Completo por apenas R$ 80,00"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 1559,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1557,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-500 dark:text-gray-400 mt-3",
                                                children: "Pagamento único • Acesso imediato • Relatório disponível para download"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1561,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1556,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1493,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1492,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto mb-12 px-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2",
                                                children: "4 em 1"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1572,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400 text-sm",
                                                children: "Ciências milenares combinadas em um único relatório"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1575,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1571,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl sm:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2",
                                                children: "100%"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1581,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400 text-sm",
                                                children: "Personalizado com base nos seus dados"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1584,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1580,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-3xl sm:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    className: "w-10 h-10 mx-auto"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/page.tsx",
                                                    lineNumber: 1591,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1590,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400 text-sm",
                                                children: "Pagamento 100% seguro e criptografado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1593,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1589,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1570,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1569,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true),
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
                                lineNumber: 1606,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-12 h-1 sm:w-16 ${currentStep >= 2 ? 'bg-purple-500' : 'bg-gray-200'}`
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1609,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-sm sm:text-base ${currentStep >= 2 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`,
                                children: "2"
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1610,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1605,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1604,
                    columnNumber: 11
                }, this),
                currentStep === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 z-50 bg-white dark:bg-gray-900 py-4 border-b border-gray-200 dark:border-gray-700 shadow-md",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container mx-auto",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center overflow-x-auto",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-4 px-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            document.getElementById('numerologia')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        },
                                        className: "flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 dark:hover:from-purple-900/50 dark:hover:to-pink-900/50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl sm:text-4xl",
                                                children: "🔢"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1629,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Numerologia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1630,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1623,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            document.getElementById('astrologia')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        },
                                        className: "flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 dark:hover:from-blue-900/50 dark:hover:to-indigo-900/50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl sm:text-4xl",
                                                children: "⭐"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1639,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Astrologia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1640,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1633,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            document.getElementById('zodiaco-chines')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        },
                                        className: "flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-red-50 hover:to-orange-50 dark:hover:from-red-900/50 dark:hover:to-orange-900/50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl sm:text-4xl",
                                                children: "🐉"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1649,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Zodíaco"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1650,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1643,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            document.getElementById('astrocartografia')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        },
                                        className: "flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-green-50 hover:to-teal-50 dark:hover:from-green-900/50 dark:hover:to-teal-900/50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl sm:text-4xl",
                                                children: "🌍"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1659,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Astrocartografia"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1660,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1653,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>{
                                            document.getElementById('horoscope-section')?.scrollIntoView({
                                                behavior: 'smooth',
                                                block: 'start'
                                            });
                                        },
                                        className: "flex flex-col items-center gap-2 rounded-xl p-4 sm:p-6 transition-all duration-300 shadow-lg min-w-[120px] sm:min-w-[140px] bg-white dark:bg-gray-800 hover:shadow-xl hover:bg-gradient-to-br hover:from-yellow-50 hover:to-amber-50 dark:hover:from-yellow-900/50 dark:hover:to-amber-900/50 cursor-pointer",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-3xl sm:text-4xl",
                                                children: "✨"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1669,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm sm:text-base font-semibold text-gray-800 dark:text-gray-200 text-center",
                                                children: "Horóscopo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 1670,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 1663,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 1622,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1621,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/page.tsx",
                        lineNumber: 1620,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1619,
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
                            lineNumber: 1684,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap justify-center gap-2 sm:gap-6 text-xs sm:text-sm text-gray-400 dark:text-gray-500",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Numerologia Pitagórica"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1688,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1689,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Astrologia Ocidental"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1690,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1691,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Astrologia Chinesa"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1692,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1693,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Astrocartografia"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1694,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden sm:inline",
                                    children: "•"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1695,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: "Horóscopo Diário"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 1696,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 1687,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 1683,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/page.tsx",
            lineNumber: 1354,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 1353,
        columnNumber: 5
    }, this);
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__c477f41c._.js.map