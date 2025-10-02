// Biblioteca completa de interpretações astrológicas

export interface SignInterpretation {
  name: string
  element: string
  quality: string
  rulingPlanet: string
  positiveTraits: string[]
  negativeTraits: string[]
  inSun: string
  inMoon: string
  inAscendant: string
  career: string
  love: string
  health: string
  spirituality: string
}

export const signInterpretations: {[key: string]: SignInterpretation} = {
  'Áries': {
    name: 'Áries',
    element: 'Fogo',
    quality: 'Cardinal',
    rulingPlanet: 'Marte',
    positiveTraits: ['Corajoso', 'Pioneiro', 'Entusiasmado', 'Confiante', 'Dinâmico', 'Honesto'],
    negativeTraits: ['Impulsivo', 'Impaciente', 'Agressivo', 'Egoísta', 'Teimoso'],
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
    positiveTraits: ['Confiável', 'Paciente', 'Prático', 'Leal', 'Sensual', 'Determinado'],
    negativeTraits: ['Teimoso', 'Possessivo', 'Materialista', 'Resistente a mudanças', 'Preguiçoso'],
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
    positiveTraits: ['Comunicativo', 'Inteligente', 'Adaptável', 'Curioso', 'Social', 'Versátil'],
    negativeTraits: ['Superficial', 'Ansioso', 'Inconsistente', 'Fofoqueiro', 'Disperso'],
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
    positiveTraits: ['Emocional', 'Protetor', 'Intuitivo', 'Compassivo', 'Leal', 'Criativo'],
    negativeTraits: ['Temperamental', 'Inseguro', 'Manipulador', 'Dependente', 'Ressentido'],
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
    positiveTraits: ['Confiante', 'Generoso', 'Leal', 'Criativo', 'Carismático', 'Corajoso'],
    negativeTraits: ['Arrogante', 'Dominador', 'Egocêntrico', 'Dramático', 'Inflexível'],
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
    positiveTraits: ['Analítico', 'Prático', 'Organizado', 'Prestativo', 'Meticuloso', 'Confiável'],
    negativeTraits: ['Crítico', 'Perfeccionista', 'Preocupado', 'Ansioso', 'Controlador'],
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
    positiveTraits: ['Diplomático', 'Charmoso', 'Justo', 'Social', 'Cooperativo', 'Estético'],
    negativeTraits: ['Indeciso', 'Superficial', 'Dependente', 'Manipulador', 'Evita conflitos'],
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
    positiveTraits: ['Intenso', 'Leal', 'Transformador', 'Intuitivo', 'Determinado', 'Profundo'],
    negativeTraits: ['Possessivo', 'Vingativo', 'Manipulador', 'Desconfiado', 'Obsessivo'],
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
    positiveTraits: ['Otimista', 'Aventureiro', 'Filosófico', 'Honesto', 'Generoso', 'Livre'],
    negativeTraits: ['Irresponsável', 'Imprudente', 'Exagerado', 'Insensível', 'Inquieto'],
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
    positiveTraits: ['Ambicioso', 'Disciplinado', 'Responsável', 'Prático', 'Persistente', 'Sábio'],
    negativeTraits: ['Pessimista', 'Frio', 'Materialista', 'Rígido', 'Controlador'],
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
    positiveTraits: ['Inovador', 'Humanitário', 'Original', 'Intelectual', 'Independente', 'Progressista'],
    negativeTraits: ['Distante', 'Rebelde', 'Imprevisível', 'Frio', 'Teimoso'],
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
    positiveTraits: ['Compassivo', 'Intuitivo', 'Artístico', 'Espiritual', 'Empático', 'Adaptável'],
    negativeTraits: ['Escapista', 'Vítima', 'Confuso', 'Passivo', 'Iludido'],
    inSun: 'Sol em Peixes traz sensibilidade extrema e conexão espiritual. Você sente o sofrimento do mundo e anseia por transcendência. Sua missão é aprender a ajudar sem se perder.',
    inMoon: 'Lua em Peixes é extremamente empática e psíquica. Você absorve emoções dos outros. Aprenda a proteger sua energia e distinguir seus sentimentos dos alheios.',
    inAscendant: 'Ascendente em Peixes faz você parecer sonhador, compassivo e misterioso. As pessoas sentem sua energia espiritual.',
    career: 'Ideal para: artes, música, terapia, espiritualidade, medicina holística, cinema, fotografia, trabalho em hospitais.',
    love: 'No amor, você busca união mística e transcendência. Extremamente devotado mas precisa de limites. Cuidado com idealização e martírio.',
    health: 'Atenção: pés, sistema linfático, vícios. Você é sensível a substâncias. Mantenha limites energéticos e pratique aterramento regular.',
    spirituality: 'Sua evolução final envolve dissolver ego mas manter individualidade, servir sem se sacrificar, e entender que você é o oceano em uma gota.'
  }
}

export function getSignInterpretation(sign: string): SignInterpretation {
  return signInterpretations[sign] || signInterpretations['Áries']
}

