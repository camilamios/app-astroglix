// Biblioteca completa de interpretações numerológicas

export interface NumberInterpretation {
  number: number
  name: string
  positiveTraits: string[]
  negativeTraits: string[]
  guidance: string[]
  career: string
  relationships: string
  spirituality: string
  lifeLesson: string
}

export const numberMeanings: {[key: number]: NumberInterpretation} = {
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
}

export function getNumberInterpretation(number: number): NumberInterpretation {
  return numberMeanings[number] || numberMeanings[1]
}

export function generateDetailedNumerologyReport(numbers: {
  lifePathNumber: number
  destinyNumber: number
  soulNumber: number
  personalityNumber: number
  expressionNumber: number
  psychicNumber: number
}): string {
  const sections: string[] = []

  // Caminho da Vida
  const lifePath = getNumberInterpretation(numbers.lifePathNumber)
  sections.push(`
### 🌟 Número do Caminho da Vida: ${numbers.lifePathNumber} - ${lifePath.name}

Este é o número mais importante do seu mapa numerológico - representa sua missão de vida e as lições que você veio aprender nesta encarnação.

**✨ Pontos Positivos:**
${lifePath.positiveTraits.map(trait => `• ${trait}`).join('\n')}

**⚠️ Pontos de Atenção:**
${lifePath.negativeTraits.map(trait => `• ${trait}`).join('\n')}

**🎯 O Que Fazer:**
${lifePath.guidance.map(guide => `• ${guide}`).join('\n')}

**💼 Carreira:** ${lifePath.career}

**❤️ Relacionamentos:** ${lifePath.relationships}

**🙏 Espiritualidade:** ${lifePath.spirituality}

**📖 Lição de Vida:** ${lifePath.lifeLesson}
  `)

  // Número da Alma
  const soul = getNumberInterpretation(numbers.soulNumber)
  sections.push(`
### 💫 Número da Alma: ${numbers.soulNumber} - ${soul.name}

Este número revela seus desejos mais profundos, o que realmente motiva você por dentro, suas paixões ocultas e o que sua alma verdadeiramente anseia.

**Motivações Internas:**
${soul.positiveTraits.slice(0, 3).map(trait => `• ${trait}`).join('\n')}

**Desafios Internos:**
${soul.negativeTraits.slice(0, 3).map(trait => `• ${trait}`).join('\n')}

**Como Nutrir Sua Alma:**
${soul.guidance.slice(0, 2).map(guide => `• ${guide}`).join('\n')}
  `)

  // Número da Personalidade
  const personality = getNumberInterpretation(numbers.personalityNumber)
  sections.push(`
### 🎭 Número da Personalidade: ${numbers.personalityNumber} - ${personality.name}

Este número mostra como você aparece para o mundo, a primeira impressão que causa, a máscara social que usa.

**Como Outros Te Veem:**
${personality.positiveTraits.slice(0, 3).map(trait => `• ${trait}`).join('\n')}

**Máscaras a Observar:**
${personality.negativeTraits.slice(0, 2).map(trait => `• ${trait}`).join('\n')}

**Dica:** ${personality.guidance[0]}
  `)

  return sections.join('\n\n')
}

