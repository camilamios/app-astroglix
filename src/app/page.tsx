"use client";
import { useState } from 'react'
import { Calendar, Star, Calculator, Sparkles, Heart, Zap, Eye, Crown, MapPin, Globe, TrendingUp, TrendingDown, Minus, Moon, Sun, CreditCard, Check, FileText, Download, Scroll, Share, MessageCircle, Lock, Unlock } from 'lucide-react'

interface NumerologyResult {
  lifePathNumber: number
  personalityNumber: number
  soulNumber: number
  destinyNumber: number
  expressionNumber: number
  impressionNumber: number
  psychicNumber: number
  hiddenTalents: number[]
  karmicLessons: number[]
  karmicDebts: number[]
  personalYear: number
  personalMonth: number
  personalDay: number
  challenges: number[]
  pinnacles: number[]
}

interface ChineseZodiac {
  animal: string
  element: string
  yinYang: string
  traits: string[]
  compatibility: string[]
  luckyNumbers: number[]
  luckyColors: string[]
  challenges: string[]
  careerAdvice: string
  relationshipAdvice: string
  prosperityTips: string[]
}

interface WesternAstrology {
  sunSign: string
  moonSign: string
  ascendant: string
  planets: { [key: string]: string }
  houses: { [key: string]: string }
  aspects: string[]
  currentTransits: string[]
  personality: string
  relationships: string
  career: string
  spirituality: string
}

interface AstroCartography {
  sunLine: string
  moonLine: string
  venusLine: string
  marsLine: string
  jupiterLine: string
  saturnLine: string
  uranusLine: string
  neptuneLine: string
  plutoLine: string
  loveRegions: string[]
  careerRegions: string[]
  spiritualRegions: string[]
  challengingRegions: string[]
  personalizedSummary: string[]
}

interface MysticReport {
  numerology: NumerologyResult
  chineseZodiac: ChineseZodiac
  westernAstrology: WesternAstrology
  astroCartography: AstroCartography
  fullName: string
  birthDate: string
  birthTime: string
  birthPlace: string
}

// Dados do zodíaco chinês expandidos
const chineseZodiacData: { [key: number]: ChineseZodiac } = {
  0: { 
    animal: 'Macaco', 
    element: 'Metal', 
    yinYang: 'Yang',
    traits: ['Inteligente', 'Criativo', 'Versátil', 'Esperto', 'Adaptável'], 
    compatibility: ['Rato', 'Dragão'], 
    luckyNumbers: [4, 9], 
    luckyColors: ['Dourado', 'Branco'],
    challenges: ['Impulsividade', 'Inquietação', 'Superficialidade'],
    careerAdvice: 'Excelente em comunicação, vendas, entretenimento e tecnologia. Evite rotinas monótonas.',
    relationshipAdvice: 'Precisa de parceiros que estimulem sua mente. Seja mais paciente e menos crítico.',
    prosperityTips: ['Invista em educação contínua', 'Diversifique suas fontes de renda', 'Use sua criatividade para gerar valor']
  },
  1: { 
    animal: 'Galo', 
    element: 'Metal', 
    yinYang: 'Yin',
    traits: ['Corajoso', 'Honesto', 'Trabalhador', 'Pontual', 'Organizado'], 
    compatibility: ['Boi', 'Serpente'], 
    luckyNumbers: [5, 7, 8], 
    luckyColors: ['Dourado', 'Marrom'],
    challenges: ['Perfeccionismo excessivo', 'Crítica dura', 'Impaciência'],
    careerAdvice: 'Ideal para liderança, administração, contabilidade e áreas que exigem precisão.',
    relationshipAdvice: 'Seja mais flexível e menos exigente. Aprecie as qualidades únicas do parceiro.',
    prosperityTips: ['Mantenha orçamentos detalhados', 'Invista em imóveis', 'Construa uma reputação sólida']
  },
  2: { 
    animal: 'Cão', 
    element: 'Terra', 
    yinYang: 'Yang',
    traits: ['Leal', 'Responsável', 'Confiável', 'Justo', 'Protetor'], 
    compatibility: ['Tigre', 'Coelho'], 
    luckyNumbers: [3, 4, 9], 
    luckyColors: ['Verde', 'Vermelho'],
    challenges: ['Pessimismo', 'Ansiedade', 'Desconfiança excessiva'],
    careerAdvice: 'Perfeito para serviço público, advocacia, medicina e trabalho social.',
    relationshipAdvice: 'Confie mais nas pessoas. Sua lealdade é um tesouro, mas não seja possessivo.',
    prosperityTips: ['Invista em causas que acredita', 'Construa uma rede de contatos sólida', 'Seja paciente com investimentos']
  },
  3: { 
    animal: 'Porco', 
    element: 'Terra', 
    yinYang: 'Yin',
    traits: ['Generoso', 'Compassivo', 'Diligente', 'Honesto', 'Otimista'], 
    compatibility: ['Coelho', 'Cabra'], 
    luckyNumbers: [2, 5, 8], 
    luckyColors: ['Amarelo', 'Cinza'],
    challenges: ['Ingenuidade', 'Gastos excessivos', 'Confiança cega'],
    careerAdvice: 'Excelente em hospitalidade, culinária, arte e trabalhos humanitários.',
    relationshipAdvice: 'Sua generosidade é admirável, mas estabeleça limites saudáveis.',
    prosperityTips: ['Controle melhor os gastos', 'Invista em experiências e educação', 'Seja cauteloso com empréstimos']
  },
  4: { 
    animal: 'Rato', 
    element: 'Metal', 
    yinYang: 'Yang',
    traits: ['Inteligente', 'Adaptável', 'Charmoso', 'Ambicioso', 'Sociável'], 
    compatibility: ['Dragão', 'Macaco'], 
    luckyNumbers: [2, 3], 
    luckyColors: ['Azul', 'Dourado'],
    challenges: ['Ganância', 'Oportunismo', 'Inquietação'],
    careerAdvice: 'Ideal para negócios, política, jornalismo e áreas que exigem networking.',
    relationshipAdvice: 'Seja mais presente e menos focado apenas em oportunidades.',
    prosperityTips: ['Aproveite oportunidades rapidamente', 'Diversifique investimentos', 'Use seu charme para fazer parcerias']
  },
  5: { 
    animal: 'Boi', 
    element: 'Metal', 
    yinYang: 'Yin',
    traits: ['Determinado', 'Confiável', 'Forte', 'Metódico', 'Paciente'], 
    compatibility: ['Serpente', 'Galo'], 
    luckyNumbers: [1, 9], 
    luckyColors: ['Azul', 'Amarelo'],
    challenges: ['Teimosia', 'Lentidão para mudanças', 'Inflexibilidade'],
    careerAdvice: 'Perfeito para agricultura, construção, finanças e áreas que exigem persistência.',
    relationshipAdvice: 'Seja mais aberto a mudanças e demonstre mais afeto.',
    prosperityTips: ['Invista a longo prazo', 'Construa patrimônio sólido', 'Seja consistente em seus esforços']
  },
  6: { 
    animal: 'Tigre', 
    element: 'Madeira', 
    yinYang: 'Yang',
    traits: ['Corajoso', 'Competitivo', 'Imprevisível', 'Carismático', 'Independente'], 
    compatibility: ['Cavalo', 'Cão'], 
    luckyNumbers: [1, 3, 4], 
    luckyColors: ['Azul', 'Cinza'],
    challenges: ['Impulsividade', 'Rebeldia', 'Impaciência'],
    careerAdvice: 'Excelente em liderança, esportes, militar e empreendedorismo.',
    relationshipAdvice: 'Controle seu temperamento e seja mais diplomático.',
    prosperityTips: ['Tome riscos calculados', 'Lidere projetos inovadores', 'Canalize sua energia em metas claras']
  },
  7: { 
    animal: 'Coelho', 
    element: 'Madeira', 
    yinYang: 'Yin',
    traits: ['Gentil', 'Elegante', 'Responsável', 'Diplomático', 'Artístico'], 
    compatibility: ['Cabra', 'Porco'], 
    luckyNumbers: [3, 4, 6], 
    luckyColors: ['Rosa', 'Vermelho'],
    challenges: ['Indecisão', 'Evitar conflitos', 'Superficialidade'],
    careerAdvice: 'Ideal para diplomacia, arte, moda e áreas que exigem bom gosto.',
    relationshipAdvice: 'Seja mais direto em suas necessidades e menos evasivo.',
    prosperityTips: ['Invista em beleza e arte', 'Cultive relacionamentos harmoniosos', 'Evite decisões precipitadas']
  },
  8: { 
    animal: 'Dragão', 
    element: 'Terra', 
    yinYang: 'Yang',
    traits: ['Confiante', 'Inteligente', 'Entusiasmado', 'Carismático', 'Ambicioso'], 
    compatibility: ['Rato', 'Macaco'], 
    luckyNumbers: [1, 6, 7], 
    luckyColors: ['Dourado', 'Prata'],
    challenges: ['Arrogância', 'Impaciência', 'Expectativas irreais'],
    careerAdvice: 'Perfeito para liderança executiva, entretenimento, política e inovação.',
    relationshipAdvice: 'Seja mais humilde e considere as opiniões dos outros.',
    prosperityTips: ['Pense grande mas execute com detalhes', 'Invista em sua imagem pessoal', 'Lidere equipes talentosas']
  },
  9: { 
    animal: 'Serpente', 
    element: 'Fogo', 
    yinYang: 'Yin',
    traits: ['Sábio', 'Intuitivo', 'Misterioso', 'Elegante', 'Filosófico'], 
    compatibility: ['Boi', 'Galo'], 
    luckyNumbers: [2, 8, 9], 
    luckyColors: ['Vermelho', 'Amarelo'],
    challenges: ['Desconfiança', 'Possessividade', 'Frieza emocional'],
    careerAdvice: 'Excelente em pesquisa, psicologia, medicina e áreas esotéricas.',
    relationshipAdvice: 'Seja mais aberto emocionalmente e menos calculista.',
    prosperityTips: ['Confie em sua intuição para investimentos', 'Invista em conhecimento especializado', 'Seja paciente com resultados']
  },
  10: { 
    animal: 'Cavalo', 
    element: 'Fogo', 
    yinYang: 'Yang',
    traits: ['Energético', 'Independente', 'Alegre', 'Aventureiro', 'Sociável'], 
    compatibility: ['Tigre', 'Cão'], 
    luckyNumbers: [2, 3, 7], 
    luckyColors: ['Amarelo', 'Verde'],
    challenges: ['Inconstância', 'Impaciência', 'Falta de foco'],
    careerAdvice: 'Ideal para viagens, esportes, vendas e trabalhos que exigem mobilidade.',
    relationshipAdvice: 'Seja mais comprometido e menos volúvel em relacionamentos.',
    prosperityTips: ['Diversifique atividades', 'Invista em experiências', 'Mantenha múltiplas fontes de renda']
  },
  11: { 
    animal: 'Cabra', 
    element: 'Terra', 
    yinYang: 'Yin',
    traits: ['Gentil', 'Compassivo', 'Artístico', 'Intuitivo', 'Pacífico'], 
    compatibility: ['Coelho', 'Porco'], 
    luckyNumbers: [3, 9, 4], 
    luckyColors: ['Verde', 'Vermelho'],
    challenges: ['Insegurança', 'Dependência', 'Pessimismo'],
    careerAdvice: 'Perfeito para arte, terapia, jardinagem e trabalhos criativos.',
    relationshipAdvice: 'Desenvolva mais autoconfiança e independência emocional.',
    prosperityTips: ['Invista em sua criatividade', 'Busque segurança financeira', 'Cultive talentos artísticos']
  }
}

// Significados numerológicos expandidos
const numerologyMeanings = {
  1: { 
    title: 'Líder', 
    description: 'Independente, pioneiro, ambicioso', 
    color: 'from-red-500 to-pink-500',
    positives: ['Liderança natural', 'Iniciativa', 'Originalidade', 'Determinação'],
    negatives: ['Egoísmo', 'Impaciência', 'Arrogância', 'Teimosia'],
    advice: 'Use sua liderança para inspirar outros. Desenvolva paciência e humildade.'
  },
  2: { 
    title: 'Cooperador', 
    description: 'Diplomático, sensível, pacificador', 
    color: 'from-blue-500 to-cyan-500',
    positives: ['Diplomacia', 'Sensibilidade', 'Cooperação', 'Intuição'],
    negatives: ['Indecisão', 'Dependência', 'Timidez', 'Hipersensibilidade'],
    advice: 'Confie em sua intuição. Desenvolva autoconfiança e tome decisões firmes.'
  },
  3: { 
    title: 'Comunicador', 
    description: 'Criativo, expressivo, otimista', 
    color: 'from-yellow-500 to-orange-500',
    positives: ['Criatividade', 'Comunicação', 'Otimismo', 'Inspiração'],
    negatives: ['Dispersão', 'Superficialidade', 'Exagero', 'Crítica'],
    advice: 'Foque sua energia criativa. Evite dispersão e desenvolva disciplina.'
  },
  4: { 
    title: 'Construtor', 
    description: 'Prático, organizado, trabalhador', 
    color: 'from-green-500 to-emerald-500',
    positives: ['Organização', 'Praticidade', 'Lealdade', 'Determinação'],
    negatives: ['Rigidez', 'Teimosia', 'Limitação', 'Pessimismo'],
    advice: 'Seja mais flexível. Sua persistência é valiosa, mas abra-se para mudanças.'
  },
  5: { 
    title: 'Aventureiro', 
    description: 'Livre, versátil, curioso', 
    color: 'from-purple-500 to-violet-500',
    positives: ['Liberdade', 'Versatilidade', 'Curiosidade', 'Progressividade'],
    negatives: ['Instabilidade', 'Impaciência', 'Irresponsabilidade', 'Inquietação'],
    advice: 'Canalize sua energia em projetos construtivos. Desenvolva responsabilidade.'
  },
  6: { 
    title: 'Cuidador', 
    description: 'Responsável, amoroso, protetor', 
    color: 'from-pink-500 to-rose-500',
    positives: ['Responsabilidade', 'Compaixão', 'Cura', 'Harmonia'],
    negatives: ['Interferência', 'Preocupação excessiva', 'Sacrifício', 'Controle'],
    advice: 'Cuide sem controlar. Estabeleça limites saudáveis em relacionamentos.'
  },
  7: { 
    title: 'Místico', 
    description: 'Analítico, espiritual, introspectivo', 
    color: 'from-indigo-500 to-purple-500',
    positives: ['Análise', 'Espiritualidade', 'Intuição', 'Sabedoria'],
    negatives: ['Isolamento', 'Frieza', 'Ceticismo', 'Melancolia'],
    advice: 'Equilibre análise com intuição. Compartilhe sua sabedoria com outros.'
  },
  8: { 
    title: 'Realizador', 
    description: 'Ambicioso, material, poderoso', 
    color: 'from-gray-600 to-gray-800',
    positives: ['Ambição', 'Organização', 'Eficiência', 'Autoridade'],
    negatives: ['Materialismo', 'Autoritarismo', 'Impaciência', 'Estresse'],
    advice: 'Use seu poder com sabedoria. Equilibre sucesso material com valores espirituais.'
  },
  9: { 
    title: 'Humanitário', 
    description: 'Generoso, compassivo, universal', 
    color: 'from-teal-500 to-cyan-500',
    positives: ['Generosidade', 'Compaixão', 'Sabedoria', 'Universalidade'],
    negatives: ['Idealismo excessivo', 'Dispersão', 'Melancolia', 'Impaciência'],
    advice: 'Canalize sua compaixão em ações práticas. Seja paciente com a humanidade.'
  }
}

export default function AstroglixApp() {
  const [formData, setFormData] = useState({
    fullName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  })
  const [report, setReport] = useState<MysticReport | null>(null)
  const [showReport, setShowReport] = useState(false)
  const [showPayment, setShowPayment] = useState(false)
  const [isPaid, setIsPaid] = useState(false)
  const [paymentProcessing, setPaymentProcessing] = useState(false)

  const calculateAdvancedNumerology = (fullName: string, birthDate: string): NumerologyResult => {
    const reduceToSingleDigit = (num: number): number => {
      while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
      }
      return num
    }

    // Número do Caminho da Vida
    const dateNumbers = birthDate.replace(/\D/g, '').split('').map(Number)
    const lifePathSum = dateNumbers.reduce((sum, num) => sum + num, 0)
    const lifePathNumber = reduceToSingleDigit(lifePathSum)

    // Número da Personalidade (consoantes)
    const consonants = fullName.toLowerCase().replace(/[aeiou\s]/g, '')
    const consonantValues = consonants.split('').map(char => {
      const code = char.charCodeAt(0) - 96
      return code > 0 && code <= 26 ? code : 0
    })
    const personalityNumber = reduceToSingleDigit(consonantValues.reduce((sum, num) => sum + num, 0))

    // Número da Alma (vogais)
    const vowels = fullName.toLowerCase().replace(/[^aeiou]/g, '')
    const vowelValues = vowels.split('').map(char => {
      const values: { [key: string]: number } = { a: 1, e: 5, i: 9, o: 6, u: 3 }
      return values[char] || 0
    })
    const soulNumber = reduceToSingleDigit(vowelValues.reduce((sum, num) => sum + num, 0))

    // Número do Destino (nome completo)
    const allLetters = fullName.toLowerCase().replace(/\s/g, '')
    const letterValues = allLetters.split('').map(char => {
      const code = char.charCodeAt(0) - 96
      return code > 0 && code <= 26 ? code : 0
    })
    const destinyNumber = reduceToSingleDigit(letterValues.reduce((sum, num) => sum + num, 0))

    // Cálculos adicionais
    const expressionNumber = destinyNumber
    const impressionNumber = personalityNumber
    const psychicNumber = new Date(birthDate).getDate()

    // Talentos Ocultos (números que aparecem menos no nome)
    const nameNumbers = letterValues.filter(n => n > 0)
    const hiddenTalents = [1,2,3,4,5,6,7,8,9].filter(n => 
      nameNumbers.filter(num => num === n).length === 0
    ).slice(0, 3)

    // Lições Cármicas (números ausentes)
    const karmicLessons = hiddenTalents

    // Dívidas Cármicas (13, 14, 16, 19)
    const karmicDebts = [13, 14, 16, 19].filter(debt => {
      const reduced = reduceToSingleDigit(debt)
      return [lifePathNumber, destinyNumber, personalityNumber, soulNumber].includes(reduced)
    })

    // Ano, Mês e Dia Pessoal
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    const currentDay = currentDate.getDate()
    
    const personalYear = reduceToSingleDigit(currentYear + new Date(birthDate).getMonth() + 1 + new Date(birthDate).getDate())
    const personalMonth = reduceToSingleDigit(personalYear + currentMonth)
    const personalDay = reduceToSingleDigit(personalMonth + currentDay)

    // Desafios e Píncaros
    const birthDay = new Date(birthDate).getDate()
    const birthMonth = new Date(birthDate).getMonth() + 1
    const birthYear = new Date(birthDate).getFullYear()
    
    // Calcular desafios individualmente para evitar referência circular
    const challenge1 = Math.abs(birthDay - birthMonth)
    const challenge2 = Math.abs(birthDay - reduceToSingleDigit(birthYear))
    const challenge3 = Math.abs(challenge1 - challenge2)
    const challenge4 = Math.abs(birthMonth - reduceToSingleDigit(birthYear))
    
    const challenges = [challenge1, challenge2, challenge3, challenge4].map(n => n === 0 ? 9 : n)

    // Calcular píncaros individualmente para evitar referência circular
    const pinnacle1 = reduceToSingleDigit(birthMonth + birthDay)
    const pinnacle2 = reduceToSingleDigit(birthDay + birthYear)
    const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2)
    const pinnacle4 = reduceToSingleDigit(birthMonth + birthYear)
    
    const pinnacles = [pinnacle1, pinnacle2, pinnacle3, pinnacle4]

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
      personalYear,
      personalMonth,
      personalDay,
      challenges,
      pinnacles
    }
  }

  const calculateWesternAstrology = (birthDate: string, birthTime: string, birthPlace: string): WesternAstrology => {
    const date = new Date(birthDate)
    const month = date.getMonth() + 1
    const day = date.getDate()

    // Determinar signo solar
    let sunSign = ''
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) sunSign = 'Áries'
    else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) sunSign = 'Touro'
    else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) sunSign = 'Gêmeos'
    else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) sunSign = 'Câncer'
    else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) sunSign = 'Leão'
    else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) sunSign = 'Virgem'
    else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) sunSign = 'Libra'
    else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) sunSign = 'Escorpião'
    else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) sunSign = 'Sagitário'
    else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) sunSign = 'Capricórnio'
    else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) sunSign = 'Aquário'
    else sunSign = 'Peixes'

    // Cálculos simplificados para demonstração
    const signs = ['Áries', 'Touro', 'Gêmeos', 'Câncer', 'Leão', 'Virgem', 'Libra', 'Escorpião', 'Sagitário', 'Capricórnio', 'Aquário', 'Peixes']
    const moonSign = signs[(day + month) % 12]
    const ascendant = signs[(day + month + (birthTime ? parseInt(birthTime.split(':')[0]) : 12)) % 12]

    return {
      sunSign,
      moonSign,
      ascendant,
      planets: {
        'Mercúrio': signs[(day + 1) % 12],
        'Vênus': signs[(day + 2) % 12],
        'Marte': signs[(day + 3) % 12],
        'Júpiter': signs[(day + 4) % 12],
        'Saturno': signs[(day + 5) % 12]
      },
      houses: {
        'Casa 1': 'Personalidade e aparência',
        'Casa 7': 'Relacionamentos e parcerias',
        'Casa 10': 'Carreira e reputação'
      },
      aspects: [
        'Sol em trígono com Júpiter - Otimismo e expansão',
        'Lua em quadratura com Saturno - Desafios emocionais que fortalecem',
        'Vênus em conjunção com Mercúrio - Comunicação harmoniosa'
      ],
      currentTransits: [
        'Júpiter transitando sua casa do dinheiro - Oportunidades financeiras',
        'Saturno aspectando seu Sol - Período de responsabilidade e maturidade',
        'Urano em sua casa da carreira - Mudanças profissionais inesperadas'
      ],
      personality: `Como ${sunSign} com Lua em ${moonSign} e Ascendente em ${ascendant}, você possui uma personalidade única que combina a energia solar de ${sunSign} com a sensibilidade lunar de ${moonSign}, apresentando-se ao mundo através da lente de ${ascendant}.`,
      relationships: `Em relacionamentos, sua natureza ${sunSign} busca conexões que respeitem sua individualidade, enquanto sua Lua em ${moonSign} necessita de segurança emocional e compreensão profunda.`,
      career: `Profissionalmente, você se destaca em áreas que permitam expressar suas qualidades ${sunSign}, com potencial especial em campos relacionados ao elemento do seu signo.`,
      spirituality: `Seu caminho espiritual é influenciado pela busca ${sunSign} por significado, complementada pela necessidade ${moonSign} de conexão emocional com o divino.`
    }
  }

  const calculateChineseZodiac = (birthDate: string): ChineseZodiac => {
    const year = new Date(birthDate).getFullYear()
    const zodiacIndex = year % 12
    return chineseZodiacData[zodiacIndex]
  }

  const calculateAstroCartography = (birthDate: string, birthTime: string, birthPlace: string, numerology: NumerologyResult): AstroCartography => {
    const personalSeed = numerology.lifePathNumber + numerology.destinyNumber + new Date(birthDate).getDate()
    
    const regions = {
      americas: ['Estados Unidos (Costa Leste)', 'Brasil (Rio de Janeiro)', 'Argentina (Buenos Aires)', 'México (Cidade do México)', 'Canadá (Toronto)'],
      europe: ['França (Paris)', 'Itália (Roma)', 'Espanha (Madrid)', 'Reino Unido (Londres)', 'Alemanha (Berlim)'],
      asia: ['Japão (Tóquio)', 'Tailândia (Bangkok)', 'Índia (Mumbai)', 'China (Xangai)', 'Singapura'],
      oceania: ['Austrália (Sydney)', 'Nova Zelândia (Auckland)'],
      africa: ['Marrocos (Marrakech)', 'África do Sul (Cidade do Cabo)'],
      middleEast: ['Turquia (Istambul)', 'Emirados Árabes (Dubai)']
    }

    const selectRegions = (seed: number, regionArray: string[]) => {
      const index = seed % regionArray.length
      return regionArray[index]
    }

    return {
      sunLine: `${selectRegions(personalSeed + 1, regions.americas)} - Sua energia solar brilha intensamente aqui. Local ideal para liderança, reconhecimento e crescimento da autoestima.`,
      moonLine: `${selectRegions(personalSeed + 2, regions.europe)} - Suas emoções se intensificam nesta região. Perfeito para vida familiar e cura emocional.`,
      venusLine: `${selectRegions(personalSeed + 3, [...regions.europe, ...regions.middleEast])} - O amor floresce aqui. Ideal para relacionamentos e expressão artística.`,
      marsLine: `${selectRegions(personalSeed + 4, regions.americas)} - Sua energia de ação se amplifica. Perfeito para empreendimentos e desafios.`,
      jupiterLine: `${selectRegions(personalSeed + 5, regions.asia)} - Expansão e sorte se manifestam. Excelente para estudos e crescimento espiritual.`,
      saturnLine: `${selectRegions(personalSeed + 6, regions.europe)} - Disciplina e responsabilidade são exigidas, mas recompensadas com estrutura sólida.`,
      uranusLine: `${selectRegions(personalSeed + 7, regions.oceania)} - Mudanças súbitas e inovação. Ideal para quebrar padrões e abraçar o novo.`,
      neptuneLine: `${selectRegions(personalSeed + 8, regions.asia)} - Espiritualidade e intuição se intensificam. Perfeito para desenvolvimento místico.`,
      plutoLine: `${selectRegions(personalSeed + 9, regions.americas)} - Transformações profundas. Local de poder intenso e renascimento pessoal.`,
      loveRegions: [selectRegions(personalSeed + 3, regions.europe), selectRegions(personalSeed + 6, regions.middleEast)],
      careerRegions: [selectRegions(personalSeed + 1, regions.americas), selectRegions(personalSeed + 8, regions.asia)],
      spiritualRegions: [selectRegions(personalSeed + 7, regions.asia), selectRegions(personalSeed + 9, regions.africa)],
      challengingRegions: [selectRegions(personalSeed + 4, regions.oceania), selectRegions(personalSeed + 2, regions.africa)],
      personalizedSummary: [
        `Para seu destino ${numerology.destinyNumber}: ${selectRegions(numerology.destinyNumber, regions.americas)} oferece as melhores oportunidades.`,
        `Baseado no seu caminho ${numerology.lifePathNumber}: ${selectRegions(numerology.lifePathNumber, regions.europe)} proporciona crescimento ideal.`,
        `Sua alma ${numerology.soulNumber} encontra paz em: ${selectRegions(numerology.soulNumber, regions.asia)}.`
      ]
    }
  }

  const generateReport = () => {
    if (!formData.fullName.trim() || !formData.birthDate) return

    const numerology = calculateAdvancedNumerology(formData.fullName, formData.birthDate)
    const chineseZodiac = calculateChineseZodiac(formData.birthDate)
    const westernAstrology = calculateWesternAstrology(formData.birthDate, formData.birthTime, formData.birthPlace)
    const astroCartography = calculateAstroCartography(formData.birthDate, formData.birthTime, formData.birthPlace, numerology)

    setReport({
      numerology,
      chineseZodiac,
      westernAstrology,
      astroCartography,
      fullName: formData.fullName,
      birthDate: formData.birthDate,
      birthTime: formData.birthTime,
      birthPlace: formData.birthPlace
    })
    setShowReport(true)
  }

  const handlePremiumAccess = () => {
    setShowPayment(true)
  }

  const processPayment = async () => {
    setPaymentProcessing(true)
    
    // Simular processamento de pagamento
    setTimeout(() => {
      setIsPaid(true)
      setPaymentProcessing(false)
      setShowPayment(false)
      generateReport()
    }, 2000)
  }

  const downloadPDF = () => {
    // Simular download do PDF
    const element = document.createElement('a')
    const file = new Blob([`Relatório Místico Completo - ${report?.fullName}\n\nEste é seu relatório personalizado com análises detalhadas de Numerologia, Astrologia Ocidental, Astrologia Chinesa e Astrocartografia.`], {type: 'text/plain'})
    element.href = URL.createObjectURL(file)
    element.download = `relatorio-mistico-${report?.fullName.replace(/\s+/g, '-').toLowerCase()}.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const shareWhatsApp = () => {
    const message = `🔮 Acabei de gerar meu Relatório Místico Completo no Astroglix! 

✨ Descobri insights incríveis sobre:
• Numerologia Pitagórica
• Astrologia Ocidental  
• Zodíaco Chinês
• Astrocartografia

Recomendo muito! É uma análise super completa e personalizada.

Acesse: ${window.location.origin}`

    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const NumberCard = ({ number, type, description, icon: Icon }: { number: number, type: string, description: string, icon: any }) => {
    const meaning = numerologyMeanings[number as keyof typeof numerologyMeanings] || {
      title: `Número ${number}`,
      description: 'Energia especial',
      color: 'from-gray-500 to-gray-700',
      positives: ['Qualidades únicas'],
      negatives: ['Desafios específicos'],
      advice: 'Desenvolva este aspecto com consciência.'
    }
    
    return (
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
        <div className="flex items-center gap-3 mb-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${meaning.color} flex items-center justify-center`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-bold text-gray-800 dark:text-gray-200">{type}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">Número {number}</p>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200">{meaning.title}</h4>
          <p className="text-gray-600 dark:text-gray-400 text-sm">{description}</p>
          
          <div className="space-y-2">
            <div>
              <h5 className="font-medium text-green-700 dark:text-green-400 text-sm">✅ Pontos Positivos:</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">{meaning.positives.join(', ')}</p>
            </div>
            <div>
              <h5 className="font-medium text-red-700 dark:text-red-400 text-sm">⚠️ Desafios:</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">{meaning.negatives.join(', ')}</p>
            </div>
            <div>
              <h5 className="font-medium text-blue-700 dark:text-blue-400 text-sm">💡 O que fazer:</h5>
              <p className="text-xs text-gray-600 dark:text-gray-400">{meaning.advice}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // Modal de Pagamento
  if (showPayment) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 max-w-md w-full">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Crown className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              Análise Premium Personalizada
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Desbloqueie seu relatório místico completo
            </p>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-6 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">$8.00</div>
              <p className="text-gray-600 dark:text-gray-400 text-sm">Pagamento único • Acesso completo</p>
            </div>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Numerologia Pitagórica Completa (15+ cálculos)</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Astrologia Ocidental Detalhada</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Zodíaco Chinês com Elemento e Yin/Yang</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Astrocartografia Mundial Personalizada</span>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-5 h-5 text-green-600" />
                <span className="text-sm text-gray-700 dark:text-gray-300">Download em PDF + Compartilhamento</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <button
              onClick={processPayment}
              disabled={paymentProcessing}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {paymentProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  Processando...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  Pagar $8.00 e Acessar Relatório
                </>
              )}
            </button>
            
            <button
              onClick={() => setShowPayment(false)}
              className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
            >
              Voltar
            </button>
          </div>

          <div className="mt-6 text-center">
            <p className="text-xs text-gray-500 dark:text-gray-400">
              🔒 Pagamento seguro • Sem mensalidades • Acesso imediato
            </p>
          </div>
        </div>
      </div>
    )
  }

  if (showReport && report) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
        <div className="container mx-auto px-4 py-8">
          {/* Header do Relatório */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                <Scroll className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Relatório Místico Completo
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              {report.fullName}
            </p>
            <p className="text-lg text-gray-500 dark:text-gray-400">
              {new Date(report.birthDate).toLocaleDateString('pt-BR')}
              {report.birthTime && ` • ${report.birthTime}`}
              {report.birthPlace && ` • ${report.birthPlace}`}
            </p>
            
            <div className="flex justify-center gap-4 mt-6 flex-wrap">
              <button
                onClick={() => setShowReport(false)}
                className="bg-gray-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300"
              >
                ← Voltar
              </button>
              <button
                onClick={downloadPDF}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2"
              >
                <Download className="w-5 h-5" />
                Baixar PDF
              </button>
              <button
                onClick={shareWhatsApp}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Compartilhar
              </button>
            </div>
          </div>

          <div className="space-y-16">
            {/* 1. NUMEROLOGIA PESSOAL */}
            <section>
              <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                <Calculator className="w-10 h-10 inline-block mr-3" />
                1. Numerologia Pessoal
              </h2>
              
              {/* Números Principais */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                <NumberCard 
                  number={report.numerology.lifePathNumber} 
                  type="Caminho da Vida" 
                  description="Sua missão principal nesta vida"
                  icon={Star}
                />
                <NumberCard 
                  number={report.numerology.destinyNumber} 
                  type="Número do Destino" 
                  description="Seu potencial máximo a ser desenvolvido"
                  icon={Crown}
                />
                <NumberCard 
                  number={report.numerology.soulNumber} 
                  type="Número da Alma" 
                  description="Suas motivações mais profundas"
                  icon={Heart}
                />
                <NumberCard 
                  number={report.numerology.personalityNumber} 
                  type="Número da Personalidade" 
                  description="Como os outros te veem"
                  icon={Eye}
                />
              </div>

              {/* Números Adicionais */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 mb-8">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Análise Numerológica Avançada</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">🎯 Números Pessoais Atuais</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Ano Pessoal:</strong> {report.numerology.personalYear} - Tema do ano atual<br/>
                      <strong>Mês Pessoal:</strong> {report.numerology.personalMonth} - Foco do mês<br/>
                      <strong>Dia Pessoal:</strong> {report.numerology.personalDay} - Energia de hoje
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">✨ Talentos Ocultos</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Números: {report.numerology.hiddenTalents.join(', ')}<br/>
                      Estes são dons naturais que você pode não reconhecer, mas que estão disponíveis para desenvolvimento.
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-800 dark:text-gray-200">📚 Lições Cármicas</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Números: {report.numerology.karmicLessons.join(', ')}<br/>
                      Áreas da vida que requerem desenvolvimento e aprendizado especial.
                    </p>
                  </div>
                </div>

                {report.numerology.karmicDebts.length > 0 && (
                  <div className="mt-6 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                    <h4 className="font-semibold text-orange-800 dark:text-orange-200 mb-2">⚖️ Dívidas Cármicas</h4>
                    <p className="text-sm text-orange-700 dark:text-orange-300">
                      Números: {report.numerology.karmicDebts.join(', ')}<br/>
                      Estas são energias que requerem atenção especial e trabalho consciente para transformação.
                    </p>
                  </div>
                )}
              </div>
            </section>

            {/* 2. ASTROLOGIA OCIDENTAL */}
            <section>
              <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                <Star className="w-10 h-10 inline-block mr-3" />
                2. Astrologia Ocidental - Horóscopo Completo
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700 mb-8">
                {/* Trio Principal */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-6">Seu Trio Astrológico Principal</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6">
                      <Sun className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">Signo Solar</h4>
                      <p className="text-2xl font-bold text-yellow-600 mb-2">{report.westernAstrology.sunSign}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Sua essência e identidade</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6">
                      <Moon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">Signo Lunar</h4>
                      <p className="text-2xl font-bold text-blue-600 mb-2">{report.westernAstrology.moonSign}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Suas emoções e instintos</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                      <TrendingUp className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                      <h4 className="font-bold text-gray-800 dark:text-gray-200">Ascendente</h4>
                      <p className="text-2xl font-bold text-purple-600 mb-2">{report.westernAstrology.ascendant}</p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Como você se apresenta</p>
                    </div>
                  </div>
                </div>

                {/* Análise Detalhada */}
                <div className="space-y-6">
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">🌟 Personalidade</h4>
                    <p className="text-gray-700 dark:text-gray-300">{report.westernAstrology.personality}</p>
                  </div>
                  
                  <div className="border-l-4 border-pink-500 pl-6">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">💕 Relacionamentos</h4>
                    <p className="text-gray-700 dark:text-gray-300">{report.westernAstrology.relationships}</p>
                  </div>
                  
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">💼 Carreira</h4>
                    <p className="text-gray-700 dark:text-gray-300">{report.westernAstrology.career}</p>
                  </div>
                  
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-2">🔮 Espiritualidade</h4>
                    <p className="text-gray-700 dark:text-gray-300">{report.westernAstrology.spirituality}</p>
                  </div>
                </div>

                {/* Trânsitos Atuais */}
                <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl p-6">
                  <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-4">🌙 Trânsitos Atuais Importantes</h4>
                  <div className="space-y-2">
                    {report.westernAstrology.currentTransits.map((transit, index) => (
                      <p key={index} className="text-sm text-gray-700 dark:text-gray-300">• {transit}</p>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* 3. ASTROLOGIA CHINESA */}
            <section>
              <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                <span className="text-4xl mr-3">🐉</span>
                3. Astrologia Chinesa
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="text-center mb-8">
                  <div className="w-24 h-24 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl">
                      {report.chineseZodiac.animal === 'Dragão' ? '🐉' :
                       report.chineseZodiac.animal === 'Serpente' ? '🐍' :
                       report.chineseZodiac.animal === 'Cavalo' ? '🐎' :
                       report.chineseZodiac.animal === 'Cabra' ? '🐐' :
                       report.chineseZodiac.animal === 'Macaco' ? '🐒' :
                       report.chineseZodiac.animal === 'Galo' ? '🐓' :
                       report.chineseZodiac.animal === 'Cão' ? '🐕' :
                       report.chineseZodiac.animal === 'Porco' ? '🐷' :
                       report.chineseZodiac.animal === 'Rato' ? '🐭' :
                       report.chineseZodiac.animal === 'Boi' ? '🐂' :
                       report.chineseZodiac.animal === 'Tigre' ? '🐅' : '🐰'}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
                    {report.chineseZodiac.animal}
                  </h3>
                  <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
                    Elemento: {report.chineseZodiac.element} • {report.chineseZodiac.yinYang}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Características e Desafios */}
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">✨ Características Principais</h4>
                      <div className="flex flex-wrap gap-2">
                        {report.chineseZodiac.traits.map((trait, index) => (
                          <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">⚠️ Desafios a Superar</h4>
                      <div className="flex flex-wrap gap-2">
                        {report.chineseZodiac.challenges.map((challenge, index) => (
                          <span key={index} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-3 py-1 rounded-full text-sm">
                            {challenge}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">🤝 Compatibilidade</h4>
                      <div className="flex flex-wrap gap-2">
                        {report.chineseZodiac.compatibility.map((animal, index) => (
                          <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-3 py-1 rounded-full text-sm">
                            {animal}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Conselhos Práticos */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4">
                      <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">💼 Carreira</h4>
                      <p className="text-sm text-blue-700 dark:text-blue-300">{report.chineseZodiac.careerAdvice}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-4">
                      <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">💕 Relacionamentos</h4>
                      <p className="text-sm text-pink-700 dark:text-pink-300">{report.chineseZodiac.relationshipAdvice}</p>
                    </div>
                    
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-4">
                      <h4 className="font-bold text-green-800 dark:text-green-200 mb-2">💰 Prosperidade</h4>
                      <div className="space-y-1">
                        {report.chineseZodiac.prosperityTips.map((tip, index) => (
                          <p key={index} className="text-sm text-green-700 dark:text-green-300">• {tip}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Números e Cores da Sorte */}
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">🔢 Números da Sorte</h4>
                    <div className="flex justify-center gap-2">
                      {report.chineseZodiac.luckyNumbers.map((number, index) => (
                        <span key={index} className="w-10 h-10 bg-gradient-to-r from-yellow-400 to-orange-400 text-white rounded-full flex items-center justify-center font-bold">
                          {number}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-gray-800 dark:text-gray-200 mb-3">🎨 Cores da Sorte</h4>
                    <div className="flex justify-center gap-2">
                      {report.chineseZodiac.luckyColors.map((color, index) => (
                        <span key={index} className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 text-purple-800 dark:text-purple-200 px-3 py-1 rounded-full text-sm">
                          {color}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. ASTROCARTOGRAFIA */}
            <section>
              <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
                <Globe className="w-10 h-10 inline-block mr-3" />
                4. Astrocartografia - Seu Mapa Mundial
              </h2>
              
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-4">
                    Linhas Planetárias Personalizadas
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Descubra onde no mundo suas energias planetárias se manifestam com mais intensidade
                  </p>
                </div>
                
                <div className="space-y-6">
                  {/* Linhas Planetárias */}
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">☉</span>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Linha do Sol</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{report.astroCartography.sunLine}</p>
                  </div>

                  <div className="border-l-4 border-blue-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">☽</span>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Linha da Lua</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{report.astroCartography.moonLine}</p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">♀</span>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Linha de Vênus</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{report.astroCartography.venusLine}</p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">♂</span>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Linha de Marte</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{report.astroCartography.marsLine}</p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">♃</span>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Linha de Júpiter</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{report.astroCartography.jupiterLine}</p>
                  </div>

                  <div className="border-l-4 border-gray-600 pl-6">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">♄</span>
                      <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">Linha de Saturno</h4>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300">{report.astroCartography.saturnLine}</p>
                  </div>
                </div>

                {/* Resumo por Áreas da Vida */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-gradient-to-br from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 rounded-xl p-4">
                    <Heart className="w-6 h-6 text-pink-600 mb-2" />
                    <h4 className="font-bold text-pink-800 dark:text-pink-200 mb-2">💕 Amor</h4>
                    <div className="space-y-1">
                      {report.astroCartography.loveRegions.map((region, index) => (
                        <p key={index} className="text-sm text-pink-700 dark:text-pink-300">{region}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl p-4">
                    <Zap className="w-6 h-6 text-blue-600 mb-2" />
                    <h4 className="font-bold text-blue-800 dark:text-blue-200 mb-2">💼 Carreira</h4>
                    <div className="space-y-1">
                      {report.astroCartography.careerRegions.map((region, index) => (
                        <p key={index} className="text-sm text-blue-700 dark:text-blue-300">{region}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-4">
                    <Sparkles className="w-6 h-6 text-purple-600 mb-2" />
                    <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-2">🔮 Espiritualidade</h4>
                    <div className="space-y-1">
                      {report.astroCartography.spiritualRegions.map((region, index) => (
                        <p key={index} className="text-sm text-purple-700 dark:text-purple-300">{region}</p>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-4">
                    <TrendingDown className="w-6 h-6 text-orange-600 mb-2" />
                    <h4 className="font-bold text-orange-800 dark:text-orange-200 mb-2">⚠️ Desafios</h4>
                    <div className="space-y-1">
                      {report.astroCartography.challengingRegions.map((region, index) => (
                        <p key={index} className="text-sm text-orange-700 dark:text-orange-300">{region}</p>
                      ))}
                    </div>
                    <p className="text-xs text-orange-600 dark:text-orange-400 mt-2">
                      Locais que podem trazer lições importantes, mas exigem mais consciência e preparação.
                    </p>
                  </div>
                </div>

                {/* Resumo Personalizado */}
                <div className="mt-8 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6">
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                    <MapPin className="w-6 h-6" />
                    Resumo Personalizado para {report.fullName.split(' ')[0]}
                  </h4>
                  <div className="space-y-2">
                    {report.astroCartography.personalizedSummary.map((summary, index) => (
                      <p key={index} className="text-gray-700 dark:text-gray-300">
                        <strong>•</strong> {summary}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Footer do Relatório */}
          <div className="text-center mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              ✨ Relatório Místico Completo gerado especialmente para {report.fullName} ✨
            </p>
            <p className="text-sm text-gray-400 dark:text-gray-500">
              Este relatório combina sabedoria ancestral com cálculos personalizados baseados em seus dados únicos de nascimento.
              Use estas informações como guia para seu crescimento pessoal e tomada de decisões conscientes.
            </p>
            <div className="mt-4">
              <p className="text-xs text-gray-400 dark:text-gray-500">
                Gerado por <strong>Astroglix</strong> - Sua plataforma de análises místicas personalizadas
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
            Astroglix
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8">
            Descubra seu destino através da Numerologia Pitagórica, Astrologia Ocidental, Astrologia Chinesa e Astrocartografia
          </p>
          
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-3">
              🔮 Análise Profissional Completa
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <Calculator className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="font-medium text-amber-800 dark:text-amber-200">Numerologia</p>
                <p className="text-amber-700 dark:text-amber-300">15+ Cálculos</p>
              </div>
              <div className="text-center">
                <Star className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="font-medium text-amber-800 dark:text-amber-200">Astrologia</p>
                <p className="text-amber-700 dark:text-amber-300">Mapa Completo</p>
              </div>
              <div className="text-center">
                <span className="text-2xl block mb-1">🐉</span>
                <p className="font-medium text-amber-800 dark:text-amber-200">Zodíaco Chinês</p>
                <p className="text-amber-700 dark:text-amber-300">Elemento + Yin/Yang</p>
              </div>
              <div className="text-center">
                <Globe className="w-6 h-6 text-amber-600 mx-auto mb-1" />
                <p className="font-medium text-amber-800 dark:text-amber-200">Astrocartografia</p>
                <p className="text-amber-700 dark:text-amber-300">Mapa Mundial</p>
              </div>
            </div>
          </div>
        </div>

        {/* Formulário */}
        <div className="max-w-md mx-auto mb-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
            <div className="text-center mb-6">
              <FileText className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
                Gerar Seu Relatório
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">
                Preencha seus dados para receber uma análise completa e personalizada
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Digite seu nome completo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Data de Nascimento *
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Hora de Nascimento (opcional)
                </label>
                <input
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => setFormData({...formData, birthTime: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Para cálculos astrológicos mais precisos
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Local de Nascimento (opcional)
                </label>
                <input
                  type="text"
                  value={formData.birthPlace}
                  onChange={(e) => setFormData({...formData, birthPlace: e.target.value})}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
                  placeholder="Ex: São Paulo, SP, Brasil"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Melhora a precisão da astrocartografia
                </p>
              </div>

              <button
                onClick={handlePremiumAccess}
                disabled={!formData.fullName.trim() || !formData.birthDate}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <div className="flex items-center justify-center gap-2">
                  <Crown className="w-5 h-5" />
                  Análise Premium Personalizada - $8.00
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Prévia do que está incluído */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">
            O que está incluído no seu relatório:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
              <Calculator className="w-8 h-8 text-purple-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                1. Numerologia Pitagórica Completa
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Número do Destino, Missão e Motivação</li>
                <li>• Talentos Ocultos e Lições Cármicas</li>
                <li>• Ciclos de Vida e Ano Pessoal</li>
                <li>• Desafios e Momentos Decisivos</li>
                <li>• Orientações práticas para cada número</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
              <Star className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                2. Astrologia Ocidental Detalhada
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Signo Solar, Lunar e Ascendente</li>
                <li>• Planetas em signos e casas</li>
                <li>• Aspectos importantes e trânsitos</li>
                <li>• Personalidade, amor e carreira</li>
                <li>• Previsões e orientações atuais</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
              <span className="text-3xl block mb-4">🐉</span>
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                3. Astrologia Chinesa Profunda
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Animal, Elemento e Yin/Yang</li>
                <li>• Características e desafios únicos</li>
                <li>• Compatibilidades amorosas</li>
                <li>• Dicas para prosperidade</li>
                <li>• Números e cores da sorte</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700">
              <Globe className="w-8 h-8 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                4. Astrocartografia Personalizada
              </h3>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Linhas planetárias pelo mundo</li>
                <li>• Melhores locais para amor e carreira</li>
                <li>• Regiões de crescimento espiritual</li>
                <li>• Locais desafiadores e como lidar</li>
                <li>• Mapa mundial personalizado</li>
              </ul>
            </div>
          </div>

          {/* Benefícios Premium */}
          <div className="mt-12 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl p-8 border border-purple-200 dark:border-purple-800">
            <div className="text-center mb-6">
              <Crown className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-2">
                Benefícios da Análise Premium
              </h3>
              <p className="text-purple-700 dark:text-purple-300">
                Pagamento único de $8.00 • Sem mensalidades • Acesso completo
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Download className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-1">Download PDF</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Baixe seu relatório completo em PDF para guardar para sempre</p>
              </div>
              
              <div className="text-center">
                <MessageCircle className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-1">Compartilhamento</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Compartilhe insights no WhatsApp com amigos e família</p>
              </div>
              
              <div className="text-center">
                <Unlock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <h4 className="font-bold text-purple-800 dark:text-purple-200 mb-1">Acesso Completo</h4>
                <p className="text-sm text-purple-700 dark:text-purple-300">Todas as 4 análises místicas em um relatório detalhado</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 py-8">
          <p className="text-gray-500 dark:text-gray-400">
            ✨ <strong>Astroglix</strong>: Numerologia + Astrologia + Zodíaco Chinês + Astrocartografia ✨
          </p>
        </div>
      </div>
    </div>
  )
}