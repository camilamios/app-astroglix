// Biblioteca de Anos do Zodíaco Chinês e Compatibilidades

export interface ChineseYearInfo {
  year: number
  animal: string
  element: string
  description: string
}

export interface YearImpact {
  relationship: 'excelente' | 'boa' | 'neutra' | 'desafiadora' | 'conflituosa'
  title: string
  positive: string
  negative: string
  advice: string
}

// Anos recentes do Zodíaco Chinês
export const chineseYears: ChineseYearInfo[] = [
  { year: 2023, animal: 'Coelho', element: 'Água', description: 'Ano de paz, diplomacia e cura' },
  { year: 2024, animal: 'Dragão', element: 'Madeira', description: 'Ano de transformação, poder e grandes conquistas' },
  { year: 2025, animal: 'Serpente', element: 'Madeira', description: 'Ano de sabedoria, transformação e intuição' },
  { year: 2026, animal: 'Cavalo', element: 'Fogo', description: 'Ano de movimento, liberdade e aventura' },
  { year: 2027, animal: 'Cabra', element: 'Fogo', description: 'Ano de criatividade, gentileza e harmonia' },
  { year: 2028, animal: 'Macaco', element: 'Terra', description: 'Ano de inteligência, inovação e oportunidades' }
]

export function getCurrentChineseYear(): ChineseYearInfo {
  const currentYear = new Date().getFullYear()
  return chineseYears.find(y => y.year === currentYear) || chineseYears[2] // Default 2025
}

// Compatibilidade detalhada de cada signo com o ano atual
export const yearImpacts: {[key: string]: {[yearAnimal: string]: YearImpact}} = {
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
}

export function getYearImpact(userAnimal: string, yearAnimal: string): YearImpact {
  const impact = yearImpacts[userAnimal]?.[yearAnimal]
  
  if (!impact) {
    return {
      relationship: 'neutra',
      title: 'Ano Neutro',
      positive: 'Um ano de equilíbrio e aprendizado.',
      negative: 'Mantenha-se atento às oportunidades e desafios.',
      advice: 'Seja prudente e aproveite as oportunidades que surgirem.'
    }
  }
  
  return impact
}

export function getRelationshipColor(relationship: string): string {
  switch(relationship) {
    case 'excelente': return 'green'
    case 'boa': return 'blue'
    case 'neutra': return 'yellow'
    case 'desafiadora': return 'orange'
    case 'conflituosa': return 'red'
    default: return 'gray'
  }
}

