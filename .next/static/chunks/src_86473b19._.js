(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/lib/numerology-interpretations.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
    sections.push("\n### 🌟 Número do Caminho da Vida: ".concat(numbers.lifePathNumber, " - ").concat(lifePath.name, "\n\nEste é o número mais importante do seu mapa numerológico - representa sua missão de vida e as lições que você veio aprender nesta encarnação.\n\n**✨ Pontos Positivos:**\n").concat(lifePath.positiveTraits.map((trait)=>"• ".concat(trait)).join('\n'), "\n\n**⚠️ Pontos de Atenção:**\n").concat(lifePath.negativeTraits.map((trait)=>"• ".concat(trait)).join('\n'), "\n\n**🎯 O Que Fazer:**\n").concat(lifePath.guidance.map((guide)=>"• ".concat(guide)).join('\n'), "\n\n**💼 Carreira:** ").concat(lifePath.career, "\n\n**❤️ Relacionamentos:** ").concat(lifePath.relationships, "\n\n**🙏 Espiritualidade:** ").concat(lifePath.spirituality, "\n\n**📖 Lição de Vida:** ").concat(lifePath.lifeLesson, "\n  "));
    // Número da Alma
    const soul = getNumberInterpretation(numbers.soulNumber);
    sections.push("\n### 💫 Número da Alma: ".concat(numbers.soulNumber, " - ").concat(soul.name, "\n\nEste número revela seus desejos mais profundos, o que realmente motiva você por dentro, suas paixões ocultas e o que sua alma verdadeiramente anseia.\n\n**Motivações Internas:**\n").concat(soul.positiveTraits.slice(0, 3).map((trait)=>"• ".concat(trait)).join('\n'), "\n\n**Desafios Internos:**\n").concat(soul.negativeTraits.slice(0, 3).map((trait)=>"• ".concat(trait)).join('\n'), "\n\n**Como Nutrir Sua Alma:**\n").concat(soul.guidance.slice(0, 2).map((guide)=>"• ".concat(guide)).join('\n'), "\n  "));
    // Número da Personalidade
    const personality = getNumberInterpretation(numbers.personalityNumber);
    sections.push("\n### 🎭 Número da Personalidade: ".concat(numbers.personalityNumber, " - ").concat(personality.name, "\n\nEste número mostra como você aparece para o mundo, a primeira impressão que causa, a máscara social que usa.\n\n**Como Outros Te Veem:**\n").concat(personality.positiveTraits.slice(0, 3).map((trait)=>"• ".concat(trait)).join('\n'), "\n\n**Máscaras a Observar:**\n").concat(personality.negativeTraits.slice(0, 2).map((trait)=>"• ".concat(trait)).join('\n'), "\n\n**Dica:** ").concat(personality.guidance[0], "\n  "));
    return sections.join('\n\n');
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/astrology-interpretations.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/lib/numerology-contexts.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/DetailedReport.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>DetailedReport
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calculator.js [app-client] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-client] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/numerology-interpretations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/astrology-interpretations.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/numerology-contexts.ts [app-client] (ecmascript)");
'use client';
;
;
;
;
;
function DetailedReport(param) {
    let { reportData } = param;
    var _destinyInterp_guidance, _personalityInterp_guidance, _numerology_hiddenTalents, _numerology_challenges, _moonSignInterp_positiveTraits, _moonSignInterp_guidance, _astrology_aspects, _astrology_currentTransits, _chineseZodiac_traits, _chineseZodiac_loveCompatibility, _chineseZodiac_careerCompatibility, _chineseZodiac_luckyNumbers, _astrocartography_sunLines, _astrocartography_moonLines, _astrocartography_venusLines;
    const { numerology, astrology, chineseZodiac, astrocartography } = reportData;
    // Interpretações de numerologia
    const lifePathInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.lifePathNumber);
    const destinyInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.destinyNumber);
    const soulInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.soulNumber);
    const personalityInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNumberInterpretation"])(numerology.personalityNumber);
    // Interpretações de astrologia
    const sunSignInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.sunSign);
    const moonSignInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.moonSign);
    const ascendantInterp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$astrology$2d$interpretations$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSignInterpretation"])(astrology.ascendant);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-3xl p-6 sm:p-10 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"], {
                                    className: "w-10 h-10 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 50,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "1. Numerologia Pessoal Completa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Seus números sagrados revelam o mapa completo de sua alma e missão nesta vida"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.lifePathNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 65,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 64,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Caminho da Vida: ",
                                                    lifePathInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 68,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Sua missão principal nesta encarnação"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 71,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 67,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 63,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-green-600 dark:text-green-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 78,
                                                        columnNumber: 17
                                                    }, this),
                                                    "✨ Pontos Positivos"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 77,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.positiveTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 84,
                                                                columnNumber: 21
                                                            }, this),
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 83,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 81,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 76,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-orange-600 dark:text-orange-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 93,
                                                        columnNumber: 17
                                                    }, this),
                                                    "⚠️ Pontos de Atenção"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 92,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.negativeTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-orange-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 99,
                                                                columnNumber: 21
                                                            }, this),
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 96,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "flex items-center gap-2 text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                        className: "w-5 h-5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 108,
                                                        columnNumber: 17
                                                    }, this),
                                                    "🎯 O Que Fazer"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 107,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2 ml-7",
                                                children: (lifePathInterp.guidance || []).map((guide, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-blue-500 mr-2",
                                                                children: "•"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 114,
                                                                columnNumber: 21
                                                            }, this),
                                                            guide
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 113,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4 mt-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-purple-700 dark:text-purple-300 mb-2",
                                                        children: "💼 Carreira"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: lifePathInterp.career
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 124,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 122,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2",
                                                        children: "❤️ Relacionamentos"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 127,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: lifePathInterp.relationships
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 128,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 126,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 121,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4 mt-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-indigo-700 dark:text-indigo-300 mb-2",
                                                children: "🙏 Jornada Espiritual"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 133,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: lifePathInterp.spirituality
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 134,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-800/50 dark:to-pink-800/50 rounded-xl p-5 mt-4 border-l-4 border-purple-500",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-purple-800 dark:text-purple-200 mb-2",
                                                children: "📖 Lição de Vida"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 138,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-800 dark:text-gray-200 italic",
                                                children: lifePathInterp.lifeLesson
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 139,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 137,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 75,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 62,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.destinyNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 147,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número do Destino: ",
                                                    destinyInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 151,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Seu potencial máximo a ser alcançado"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 154,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 150,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 146,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-blue-700 dark:text-blue-300 mb-2",
                                                children: "✨ Dons e Talentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 160,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: (destinyInterp.positiveTraits || []).slice(0, 4).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            "• ",
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 163,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 161,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 159,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-cyan-700 dark:text-cyan-300 mb-2",
                                                children: "🎯 Caminho Para Realização"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 168,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: ((_destinyInterp_guidance = destinyInterp.guidance) === null || _destinyInterp_guidance === void 0 ? void 0 : _destinyInterp_guidance[0]) || 'Busque seu propósito'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 169,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 167,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 158,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 145,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.soulNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 178,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 177,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número da Alma: ",
                                                    soulInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 181,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Suas motivações mais profundas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 184,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 176,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-yellow-700 dark:text-yellow-300 mb-2",
                                                children: "💫 O Que Sua Alma Deseja"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 190,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: soulInterp.spirituality
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 191,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 189,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                children: "🔥 Paixões Internas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 194,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-1",
                                                children: (soulInterp.positiveTraits || []).slice(0, 3).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: [
                                                            "• ",
                                                            trait
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 195,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 193,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 188,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl font-bold text-white",
                                            children: numerology.personalityNumber
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 208,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 207,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Número da Personalidade: ",
                                                    personalityInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 211,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Como você aparece para o mundo"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 214,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 210,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                                children: "👥 Primeira Impressão"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 220,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: (personalityInterp.positiveTraits || []).slice(0, 3).join(', ') || 'Personalidade marcante'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 221,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 219,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-emerald-50 dark:bg-emerald-900/30 rounded-xl p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-emerald-700 dark:text-emerald-300 mb-2",
                                                children: "🎭 Dica para Autenticidade"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 226,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: ((_personalityInterp_guidance = personalityInterp.guidance) === null || _personalityInterp_guidance === void 0 ? void 0 : _personalityInterp_guidance[0]) || 'Seja autêntico'
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 227,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 218,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 205,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6 mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                className: "w-6 h-6 text-purple-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 237,
                                                columnNumber: 15
                                            }, this),
                                            "Ciclos de Vida"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 236,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Sua vida é dividida em 3 grandes ciclos, cada um com energia e lições específicas:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 240,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-lg p-4 border-l-4 border-purple-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-purple-700 dark:text-purple-300",
                                                                children: "1º Ciclo - Juventude (0-28 anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 246,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-purple-600 dark:text-purple-400",
                                                                children: numerology.lifeCycles.first
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 247,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 245,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.first)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 249,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 244,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-lg p-4 border-l-4 border-pink-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-pink-700 dark:text-pink-300",
                                                                children: "2º Ciclo - Maturidade (28-56 anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 255,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-pink-600 dark:text-pink-400",
                                                                children: numerology.lifeCycles.second
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 256,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 254,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.second)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 258,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 253,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-4 border-l-4 border-indigo-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-indigo-700 dark:text-indigo-300",
                                                                children: "3º Ciclo - Sabedoria (56+ anos)"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 264,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-indigo-600 dark:text-indigo-400",
                                                                children: numerology.lifeCycles.third
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 265,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 263,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getLifeCycleMeaning"])(numerology.lifeCycles.third)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 267,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 262,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 243,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 235,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                                className: "w-6 h-6 text-blue-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 277,
                                                columnNumber: 15
                                            }, this),
                                            "Energias Atuais"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 276,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Cada período da sua vida tem uma energia numerológica específica que influencia eventos e oportunidades:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 280,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg p-4 border-l-4 border-blue-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-3",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-blue-700 dark:text-blue-300",
                                                                children: "Seu Ano Pessoal"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 286,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-4xl font-bold text-blue-600 dark:text-blue-400",
                                                                children: numerology.personalYear
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 287,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-2 font-semibold",
                                                        children: "O QUE ESPERAR ESTE ANO:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 289,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 leading-relaxed",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPersonalYearMeaning"])(numerology.personalYear)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 292,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 284,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "grid grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-cyan-50 dark:bg-cyan-900/30 rounded-lg p-3 border-l-4 border-cyan-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-cyan-700 dark:text-cyan-300 text-sm mb-2",
                                                                children: [
                                                                    "Mês Pessoal: ",
                                                                    numerology.personalMonth
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 298,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-700 dark:text-gray-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPersonalMonthMeaning"])(numerology.personalMonth)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 299,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 297,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "bg-teal-50 dark:bg-teal-900/30 rounded-lg p-3 border-l-4 border-teal-500",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-semibold text-teal-700 dark:text-teal-300 text-sm mb-2",
                                                                children: [
                                                                    "Dia Pessoal: ",
                                                                    numerology.personalDay
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 304,
                                                                columnNumber: 19
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-700 dark:text-gray-300",
                                                                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPersonalDayMeaning"])(numerology.personalDay)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 305,
                                                                columnNumber: 19
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 303,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 296,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 283,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 275,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"], {
                                                className: "w-6 h-6 text-yellow-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 318,
                                                columnNumber: 15
                                            }, this),
                                            "Talentos Ocultos"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 317,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Números ausentes ou raros em seu nome revelam potenciais a serem desenvolvidos:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 321,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: (_numerology_hiddenTalents = numerology.hiddenTalents) === null || _numerology_hiddenTalents === void 0 ? void 0 : _numerology_hiddenTalents.map((talent, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-yellow-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-3 mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-yellow-600 dark:text-yellow-400",
                                                                children: talent
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 328,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-yellow-700 dark:text-yellow-300",
                                                                children: "Talento Oculto"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 329,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 327,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHiddenTalentMeaning"])(talent)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 331,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 326,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 324,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 316,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                                                className: "w-6 h-6 text-red-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 341,
                                                columnNumber: 15
                                            }, this),
                                            "Desafios Principais"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 340,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-4",
                                        children: "Obstáculos recorrentes em sua vida que, quando superados, trazem grande crescimento:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 344,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "space-y-3",
                                        children: (_numerology_challenges = numerology.challenges) === null || _numerology_challenges === void 0 ? void 0 : _numerology_challenges.map((challenge, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/30 dark:to-orange-900/30 rounded-lg p-4 border-l-4 border-red-500",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center justify-between mb-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-red-700 dark:text-red-300",
                                                                children: [
                                                                    "Desafio ",
                                                                    idx + 1
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 351,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-3xl font-bold text-red-600 dark:text-red-400",
                                                                children: challenge
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 352,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 350,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$numerology$2d$contexts$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChallengeMeaning"])(challenge)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 354,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 349,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 347,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 339,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 315,
                        columnNumber: 9
                    }, this),
                    numerology.karmicDebts && Array.isArray(numerology.karmicDebts) && numerology.karmicDebts.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-gradient-to-r from-purple-100 to-red-100 dark:from-purple-900/50 dark:to-red-900/50 rounded-xl p-6 mt-6 border-2 border-purple-300 dark:border-purple-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-xl font-bold text-purple-800 dark:text-purple-200 mb-3",
                                children: "🔮 Dívidas Cármicas Detectadas"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 366,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-3 mb-3",
                                children: (numerology.karmicDebts || []).map((debt, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-white dark:bg-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-lg",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xl font-bold text-purple-600 dark:text-purple-400",
                                            children: debt
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 370,
                                            columnNumber: 19
                                        }, this)
                                    }, idx, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 369,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 367,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-700 dark:text-gray-300",
                                children: "Você possui números de dívida cármica. Estes indicam lições não completamente aprendidas em vidas passadas que você veio resolver nesta encarnação. São oportunidades poderosas de crescimento espiritual acelerado."
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 374,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 365,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 48,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-3xl p-6 sm:p-10 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                    className: "w-10 h-10 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                    lineNumber: 386,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 385,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "2. Astrologia Ocidental Completa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 388,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Seu mapa celeste revela como os astros influenciam cada área da sua vida"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 391,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 384,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                            className: "w-8 h-8 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 400,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 399,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Sol em ",
                                                    sunSignInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 403,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                                lineNumber: 406,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 402,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 398,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                children: "☀️ Sua Essência Solar"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 414,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300",
                                                children: sunSignInterp.inSun
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 415,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 413,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                                        children: "✨ Qualidades Positivas"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 420,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1",
                                                        children: (sunSignInterp.positiveTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                                children: [
                                                                    "• ",
                                                                    trait
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 423,
                                                                columnNumber: 21
                                                            }, this))
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
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-orange-700 dark:text-orange-300 mb-2",
                                                        children: "⚠️ Desafios"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 428,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "space-y-1",
                                                        children: (sunSignInterp.negativeTraits || []).map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                                children: [
                                                                    "• ",
                                                                    trait
                                                                ]
                                                            }, idx, true, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 431,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 429,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 427,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 418,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 lg:grid-cols-4 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-blue-700 dark:text-blue-300 mb-2 text-sm",
                                                        children: "💼 Carreira"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 439,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.career
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 440,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 438,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2 text-sm",
                                                        children: "❤️ Amor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 443,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.love
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 444,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 442,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-red-50 dark:bg-red-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-red-700 dark:text-red-300 mb-2 text-sm",
                                                        children: "🏥 Saúde"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 447,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.health
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 448,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 446,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-purple-700 dark:text-purple-300 mb-2 text-sm",
                                                        children: "🙏 Espiritual"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 451,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-700 dark:text-gray-300",
                                                        children: sunSignInterp.spirituality
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 452,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 450,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 437,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 412,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 397,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl",
                                            children: "🌙"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 462,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 461,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Lua em ",
                                                    moonSignInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 465,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Suas emoções e necessidades internas"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 468,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 464,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 460,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-purple-50 dark:bg-purple-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-semibold text-purple-700 dark:text-purple-300 mb-2",
                                                children: "🌙 Mundo Emocional"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300",
                                                children: moonSignInterp.inMoon
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 475,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 473,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-pink-700 dark:text-pink-300 mb-2",
                                                        children: "💝 Como Você Se Nutre"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 479,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: ((_moonSignInterp_positiveTraits = moonSignInterp.positiveTraits) === null || _moonSignInterp_positiveTraits === void 0 ? void 0 : _moonSignInterp_positiveTraits.slice(0, 3).join(', ')) || 'Sensibilidade emocional'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 480,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 478,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "bg-indigo-50 dark:bg-indigo-900/30 rounded-xl p-4",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-indigo-700 dark:text-indigo-300 mb-2",
                                                        children: "🛡️ Proteções Emocionais"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 483,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: ((_moonSignInterp_guidance = moonSignInterp.guidance) === null || _moonSignInterp_guidance === void 0 ? void 0 : _moonSignInterp_guidance[0]) || 'Cuide de suas emoções'
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 484,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 482,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 472,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 459,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-3xl",
                                            children: "🎭"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/DetailedReport.tsx",
                                            lineNumber: 494,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 493,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100",
                                                children: [
                                                    "Ascendente em ",
                                                    ascendantInterp.name
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400",
                                                children: "Sua máscara social e primeira impressão"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 500,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 496,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 492,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-green-50 dark:bg-green-900/30 rounded-xl p-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-semibold text-green-700 dark:text-green-300 mb-2",
                                        children: "🎭 Como Outros Te Veem"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 505,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-700 dark:text-gray-300",
                                        children: ascendantInterp.inAscendant
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 506,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 504,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 491,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: "🌟 Aspectos Importantes"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 513,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: (_astrology_aspects = astrology.aspects) === null || _astrology_aspects === void 0 ? void 0 : _astrology_aspects.slice(0, 4).map((aspect, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start bg-blue-50 dark:bg-blue-900/30 rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-blue-500 mr-2",
                                                        children: "★"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 517,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: aspect
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 518,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 516,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 514,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 512,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                        children: "🔄 Trânsitos Atuais"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 525,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3",
                                        children: (_astrology_currentTransits = astrology.currentTransits) === null || _astrology_currentTransits === void 0 ? void 0 : _astrology_currentTransits.slice(0, 4).map((transit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "flex items-start bg-indigo-50 dark:bg-indigo-900/30 rounded-lg p-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-indigo-500 mr-2",
                                                        children: "⟳"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 529,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300",
                                                        children: transit
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 530,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 528,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 526,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 524,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 511,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 383,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-3xl p-6 sm:p-10 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl",
                                children: "🐉"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 541,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "3. Astrologia Chinesa"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 544,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "A sabedoria milenar do Oriente sobre sua personalidade e destino"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 547,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 540,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-center mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-4xl font-bold text-red-600 dark:text-red-400 mb-2",
                                        children: chineseZodiac.animal
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 554,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-2xl text-orange-600 dark:text-orange-400 mb-2",
                                        children: [
                                            "Elemento ",
                                            chineseZodiac.element,
                                            " • Energia ",
                                            chineseZodiac.yinYang
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 557,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 dark:text-gray-400 italic",
                                        children: chineseZodiac.fullSign
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 560,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 553,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-6 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-red-50 dark:bg-red-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-red-700 dark:text-red-300 mb-3",
                                                children: "✨ Forças e Talentos"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 565,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm mb-3",
                                                children: chineseZodiac.strengths
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 566,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: (_chineseZodiac_traits = chineseZodiac.traits) === null || _chineseZodiac_traits === void 0 ? void 0 : _chineseZodiac_traits.map((trait, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-xs font-semibold",
                                                        children: trait
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 569,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 567,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 564,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-orange-50 dark:bg-orange-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                className: "font-bold text-orange-700 dark:text-orange-300 mb-3",
                                                children: "⚠️ Desafios"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 577,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm mb-3",
                                                children: chineseZodiac.weaknesses
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 578,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-700 dark:text-gray-300 text-sm font-semibold",
                                                children: "🎯 O que fazer:"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 579,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-gray-600 dark:text-gray-400 text-xs",
                                                children: chineseZodiac.challenges
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 580,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 576,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 563,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-4 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-yellow-50 dark:bg-yellow-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-yellow-700 dark:text-yellow-300 mb-2",
                                                children: "💼 Carreira Ideal"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 586,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-gray-700 dark:text-gray-300",
                                                children: chineseZodiac.careerTalents
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 587,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 585,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-pink-50 dark:bg-pink-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-pink-700 dark:text-pink-300 mb-2",
                                                children: "❤️ Compatibilidade Amorosa"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 591,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2 mt-2",
                                                children: (_chineseZodiac_loveCompatibility = chineseZodiac.loveCompatibility) === null || _chineseZodiac_loveCompatibility === void 0 ? void 0 : _chineseZodiac_loveCompatibility.map((animal, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-pink-200 dark:bg-pink-800 text-pink-800 dark:text-pink-200 px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: animal
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 594,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 592,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 590,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-blue-50 dark:bg-blue-900/30 rounded-xl p-4 text-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "font-bold text-blue-700 dark:text-blue-300 mb-2",
                                                children: "🤝 Compatibilidade Profissional"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 602,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-center gap-2 mt-2",
                                                children: (_chineseZodiac_careerCompatibility = chineseZodiac.careerCompatibility) === null || _chineseZodiac_careerCompatibility === void 0 ? void 0 : _chineseZodiac_careerCompatibility.map((animal, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm font-semibold",
                                                        children: animal
                                                    }, idx, false, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 605,
                                                        columnNumber: 19
                                                    }, this))
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
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 584,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/50 dark:to-red-900/50 rounded-xl p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "font-bold text-orange-700 dark:text-orange-300 mb-2",
                                        children: "🔢 Números da Sorte"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 614,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-3 justify-center",
                                        children: (_chineseZodiac_luckyNumbers = chineseZodiac.luckyNumbers) === null || _chineseZodiac_luckyNumbers === void 0 ? void 0 : _chineseZodiac_luckyNumbers.map((number, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xl font-bold text-red-600 dark:text-red-400",
                                                    children: number
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/DetailedReport.tsx",
                                                    lineNumber: 618,
                                                    columnNumber: 19
                                                }, this)
                                            }, idx, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 617,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 615,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 613,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 552,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 539,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gradient-to-br from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 rounded-3xl p-6 sm:p-10 shadow-2xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-center mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg text-4xl",
                                children: "🌍"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 629,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3",
                                children: "4. Astrocartografia"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 632,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto",
                                children: "Descubra os locais do mundo onde sua energia flui melhor"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 635,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 628,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4",
                                children: "📍 Sua Análise Personalizada"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 642,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-700 dark:text-gray-300 leading-relaxed",
                                children: astrocartography.personalizedAnalysis
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 643,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 641,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-yellow-700 dark:text-yellow-300 mb-3 flex items-center gap-2",
                                        children: "☀️ Linhas Solares"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 649,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Liderança, reconhecimento, vitalidade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 652,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: (_astrocartography_sunLines = astrocartography.sunLines) === null || _astrocartography_sunLines === void 0 ? void 0 : _astrocartography_sunLines.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 655,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 653,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 648,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-purple-700 dark:text-purple-300 mb-3 flex items-center gap-2",
                                        children: "🌙 Linhas Lunares"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 663,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Emoções, lar, segurança"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 666,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: (_astrocartography_moonLines = astrocartography.moonLines) === null || _astrocartography_moonLines === void 0 ? void 0 : _astrocartography_moonLines.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-purple-50 dark:bg-purple-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 669,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 667,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 662,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-pink-700 dark:text-pink-300 mb-3 flex items-center gap-2",
                                        children: "💝 Linhas de Vênus"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 677,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 dark:text-gray-400 mb-3",
                                        children: "Amor, beleza, prosperidade"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 680,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2",
                                        children: (_astrocartography_venusLines = astrocartography.venusLines) === null || _astrocartography_venusLines === void 0 ? void 0 : _astrocartography_venusLines.slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: "text-sm text-gray-700 dark:text-gray-300 bg-pink-50 dark:bg-pink-900/30 rounded-lg p-2",
                                                children: [
                                                    "📍 ",
                                                    loc
                                                ]
                                            }, idx, true, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 683,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 681,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 676,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 647,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                className: "text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6",
                                children: "✨ Seus Destinos Ideais"
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 693,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-3 gap-6",
                                children: astrocartography.favorableLocations && Object.entries(astrocartography.favorableLocations).map((param)=>{
                                    let [category, locations] = param;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "bg-gradient-to-br from-teal-50 to-green-50 dark:from-teal-900/30 dark:to-green-900/30 rounded-xl p-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                                className: "font-bold text-teal-700 dark:text-teal-300 mb-3",
                                                children: category
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 697,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "space-y-2",
                                                children: (Array.isArray(locations) ? locations : []).slice(0, 3).map((loc, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "text-sm text-gray-700 dark:text-gray-300 flex items-start",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-green-500 mr-2",
                                                                children: "✓"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                                lineNumber: 701,
                                                                columnNumber: 23
                                                            }, this),
                                                            loc
                                                        ]
                                                    }, idx, true, {
                                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                                        lineNumber: 700,
                                                        columnNumber: 21
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/DetailedReport.tsx",
                                                lineNumber: 698,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, category, true, {
                                        fileName: "[project]/src/components/DetailedReport.tsx",
                                        lineNumber: 696,
                                        columnNumber: 15
                                    }, this);
                                })
                            }, void 0, false, {
                                fileName: "[project]/src/components/DetailedReport.tsx",
                                lineNumber: 694,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/DetailedReport.tsx",
                        lineNumber: 692,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/DetailedReport.tsx",
                lineNumber: 627,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/DetailedReport.tsx",
        lineNumber: 46,
        columnNumber: 5
    }, this);
}
_c = DetailedReport;
var _c;
__turbopack_context__.k.register(_c, "DetailedReport");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/success/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": ()=>SuccessPage
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-client] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailedReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/DetailedReport.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function SuccessPage() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const sessionId = searchParams.get('session_id');
    const canceled = searchParams.get('canceled');
    const paymentId = searchParams.get('payment_id');
    const status = searchParams.get('status');
    const autoGenerate = searchParams.get('auto_generate');
    const [paymentStatus, setPaymentStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('loading');
    const [reportData, setReportData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isGeneratingReport, setIsGeneratingReport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
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
                "Sol em ".concat(sunSign, " em conjunção com Mercúrio - comunicação poderosa"),
                "Lua em ".concat(moonSign, " em trígono com Vênus - harmonia emocional")
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
            fullSign: "".concat(zodiac.animal, " de ").concat(element, " ").concat(yinYang)
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
        const personalData = "".concat(fullName).concat(date).concat(time).concat(place).toLowerCase().replace(/\s/g, '');
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
        const selectPersonalizedLocations = function(locationArray, index) {
            let count = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 3;
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
                "Para ".concat(fullName, ": Suas linhas solares em ").concat(sunLines[0], " são especialmente poderosas durante o verão"),
                "Baseado em sua data de nascimento, ".concat(venusLines[0], " oferece as melhores oportunidades românticas"),
                "Seu local de nascimento (".concat(place, ") cria uma conexão especial com ").concat(moonLines[0], " para equilíbrio emocional")
            ],
            personalizedAnalysis: "Baseado em sua configuração astrológica única - nascido(a) em ".concat(new Date(date).toLocaleDateString('pt-BR'), " ").concat(time ? "às ".concat(time) : '', " em ").concat(place, " - seu mapa astrocartográfico revela padrões energéticos específicos. Suas linhas planetárias mais poderosas se concentram em ").concat(sunLines[0], " (linha solar) para liderança e reconhecimento, ").concat(venusLines[0], " (linha de Vênus) para amor e relacionamentos, e ").concat(moonLines[0], " (linha lunar) para equilíbrio emocional.")
        };
    };
    const fetchAndGenerateReport = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "SuccessPage.useCallback[fetchAndGenerateReport]": async (paymentId)=>{
            setIsGeneratingReport(true);
            try {
                console.log('🔍 Tentando buscar dados para gerar relatório...');
                console.log('PaymentId recebido:', paymentId);
                let result = null;
                // Se temos payment_id, tentar buscar dados específicos
                if (paymentId) {
                    console.log('📡 Buscando dados pelo payment_id...');
                    const response = await fetch("/api/get-report?payment_id=".concat(paymentId));
                    result = await response.json();
                    console.log('Resultado da API:', result);
                }
                // Se não encontrou dados específicos, tentar buscar pelo localStorage
                if (!(result === null || result === void 0 ? void 0 : result.success) && "object" !== 'undefined') {
                    console.log('📦 Tentando buscar do localStorage...');
                    const savedName = localStorage.getItem('last_customer_name');
                    const savedEmail = localStorage.getItem('last_customer_email');
                    const savedPaymentId = localStorage.getItem('last_payment_id');
                    console.log('Dados do localStorage:', {
                        savedName,
                        savedEmail,
                        savedPaymentId
                    });
                    if (savedName && savedEmail && savedPaymentId) {
                        const response = await fetch("/api/get-latest-payment?email=".concat(encodeURIComponent(savedEmail), "&name=").concat(encodeURIComponent(savedName)));
                        result = await response.json();
                        console.log('Resultado da API get-latest-payment:', result);
                    }
                }
                if ((result === null || result === void 0 ? void 0 : result.success) && result.data) {
                    console.log('✅ Dados encontrados! Gerando relatório...');
                    const { personalData } = result.data;
                    // Gerar relatório místico COMPLETO
                    const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate);
                    const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, personalData.birthPlace);
                    const chineseZodiac = getChineseZodiac(personalData.birthDate);
                    const astrocartography = calculateAstrocartography(personalData.fullName, personalData.birthDate, personalData.birthTime, personalData.birthPlace);
                    console.log('📊 Relatório gerado com sucesso!');
                    setReportData({
                        personalData,
                        numerology,
                        astrology,
                        chineseZodiac,
                        astrocartography
                    });
                    // Limpar dados temporários e localStorage
                    if (result.data.paymentId) {
                        await fetch("/api/get-report?payment_id=".concat(result.data.paymentId), {
                            method: 'DELETE'
                        });
                    }
                    if ("TURBOPACK compile-time truthy", 1) {
                        localStorage.removeItem('last_payment_id');
                        localStorage.removeItem('last_customer_name');
                        localStorage.removeItem('last_customer_email');
                    }
                } else {
                    console.error('❌ Nenhum dado encontrado para gerar relatório');
                }
            } catch (error) {
                console.error('💥 Erro ao gerar relatório:', error);
            } finally{
                setIsGeneratingReport(false);
            }
        }
    }["SuccessPage.useCallback[fetchAndGenerateReport]"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SuccessPage.useEffect": ()=>{
            console.log('🔄 useEffect disparado com:', {
                canceled,
                status,
                paymentId,
                sessionId,
                autoGenerate
            });
            if (canceled) {
                setPaymentStatus('error');
                return;
            }
            // Para Kirvano, verificamos o status e payment_id
            if (status === 'success' || paymentId || sessionId) {
                setPaymentStatus('success');
                console.log('✅ Status de pagamento: success');
                // Sempre tentar gerar o relatório automaticamente
                if (paymentId) {
                    console.log('📡 Gerando relatório com payment_id:', paymentId);
                    fetchAndGenerateReport(paymentId);
                } else {
                    console.log('📦 Gerando relatório sem payment_id, buscando do localStorage');
                    fetchAndGenerateReport();
                }
            } else if (status === 'error' || status === 'canceled') {
                setPaymentStatus('error');
            } else {
                // Se não temos parâmetros claros, assumimos sucesso se estamos nesta página
                console.log('⚠️ Sem parâmetros claros, assumindo sucesso');
                setPaymentStatus('success');
                // Tentar gerar o relatório mesmo assim
                fetchAndGenerateReport();
            }
        }
    }["SuccessPage.useEffect"], [
        sessionId,
        canceled,
        paymentId,
        status,
        autoGenerate,
        fetchAndGenerateReport
    ]);
    if (paymentStatus === 'loading') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 523,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400",
                        children: "Verificando status do pagamento..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 524,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 522,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 521,
            columnNumber: 7
        }, this);
    }
    if (paymentStatus === 'success') {
        // Se está gerando o relatório, mostrar loading
        if (isGeneratingReport) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                className: "w-8 h-8 text-green-600 dark:text-green-400"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 537,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 536,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                            children: "Pagamento Realizado com Sucesso! 🎉"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 540,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center gap-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 545,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 dark:text-gray-400",
                                    children: "Gerando seu Relatório Místico Completo..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 546,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 544,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-purple-700 dark:text-purple-300",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "ID da Transação:"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 553,
                                            columnNumber: 17
                                        }, this),
                                        " ",
                                        paymentId || sessionId || 'Processando...'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 552,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-purple-600 dark:text-purple-400 mt-1",
                                    children: "Pagamento processado com segurança via Kirvano"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 555,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 551,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 535,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 534,
                columnNumber: 9
            }, this);
        }
        // Se tem relatório, mostrar o relatório completo
        if (reportData) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto px-4 py-6 sm:py-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8 mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                        className: "w-8 h-8 sm:w-10 sm:h-10 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 572,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 571,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                                    children: "Relatório Místico Completo"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 574,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-2",
                                    children: reportData.personalData.fullName
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 577,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm sm:text-base text-gray-500 dark:text-gray-500",
                                    children: [
                                        "Nascido em ",
                                        new Date(reportData.personalData.birthDate).toLocaleDateString('pt-BR')
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 580,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-600 dark:text-gray-400 italic",
                                    children: '"Conhece-te a ti mesmo e conhecerás o universo e os deuses" - Oráculo de Delfos'
                                }, void 0, false, {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$DetailedReport$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            reportData: reportData
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 589,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 sm:p-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        className: "w-6 h-6 sm:w-8 sm:h-8 text-white"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 594,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 593,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                                    children: "Sua Jornada de Autoconhecimento e Transformação"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 596,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "max-w-4xl mx-auto space-y-4 text-sm sm:text-base text-gray-600 dark:text-gray-400",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Este relatório é muito mais que uma simples análise - é um mapa sagrado para sua jornada de autoconhecimento e crescimento espiritual. Cada número, cada posição planetária, cada símbolo chinês carrega uma mensagem especial do universo para você."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 600,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "Use essas informações como uma bússola em sua caminhada pela vida. Lembre-se: você tem o poder de criar sua própria realidade, e agora possui as ferramentas ancestrais para fazê-lo de forma mais sábia, consciente e alinhada com seu propósito divino."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 604,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 599,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 sm:mt-8 p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-xl max-w-2xl mx-auto",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2",
                                            children: '"O conhecimento de si mesmo é o começo de toda sabedoria."'
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs sm:text-sm text-gray-500 dark:text-gray-400 italic",
                                            children: "- Aristóteles"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/success/page.tsx",
                                            lineNumber: 613,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 609,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4 sm:mt-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: "✨ Que este relatório ilumine seu caminho e desperte a magia que já existe dentro de você ✨"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 618,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/success/page.tsx",
                                    lineNumber: 617,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 592,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 628,
                                        columnNumber: 17
                                    }, this),
                                    "Gerar Novo Relatório"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 624,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 623,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 568,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 567,
                columnNumber: 9
            }, this);
        }
        // Se pagamento foi bem-sucedido mas ainda não tem relatório
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                            className: "w-8 h-8 text-green-600 dark:text-green-400"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 642,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 641,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                        children: "Pagamento Realizado com Sucesso! 🎉"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 645,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 dark:text-gray-400 mb-6",
                        children: "Seu Relatório Místico Completo está pronto para ser visualizado."
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 649,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-purple-50 dark:bg-purple-900 rounded-xl p-4 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-purple-700 dark:text-purple-300",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "ID da Transação:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/success/page.tsx",
                                        lineNumber: 655,
                                        columnNumber: 15
                                    }, this),
                                    " ",
                                    paymentId || sessionId || 'Processando...'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 654,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-purple-600 dark:text-purple-400 mt-1",
                                children: "Pagamento processado com segurança via Kirvano"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 657,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 653,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>fetchAndGenerateReport(paymentId || undefined),
                        className: "w-full mb-4 inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 666,
                                columnNumber: 13
                            }, this),
                            "Visualizar Meu Relatório Completo"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 662,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        className: "inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/src/app/success/page.tsx",
                                lineNumber: 674,
                                columnNumber: 13
                            }, this),
                            "Voltar ao Início"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 670,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/success/page.tsx",
                lineNumber: 640,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 639,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-16 h-16 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                        className: "w-8 h-8 text-red-600 dark:text-red-400"
                    }, void 0, false, {
                        fileName: "[project]/src/app/success/page.tsx",
                        lineNumber: 686,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 685,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4",
                    children: "Pagamento Cancelado"
                }, void 0, false, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 689,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-600 dark:text-gray-400 mb-6",
                    children: [
                        canceled ? 'Você cancelou o pagamento.' : 'Houve um problema com o pagamento.',
                        " Não se preocupe, você pode tentar novamente."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 693,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/src/app/success/page.tsx",
                            lineNumber: 701,
                            columnNumber: 11
                        }, this),
                        "Tentar Novamente"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/success/page.tsx",
                    lineNumber: 697,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/success/page.tsx",
            lineNumber: 684,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/success/page.tsx",
        lineNumber: 683,
        columnNumber: 5
    }, this);
}
_s(SuccessPage, "IGJehmqBrW68GaLLwmlX34cipXY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = SuccessPage;
var _c;
__turbopack_context__.k.register(_c, "SuccessPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_86473b19._.js.map