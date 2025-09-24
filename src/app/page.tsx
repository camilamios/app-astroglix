'use client'

import { useState } from 'react'
import { Calendar, Star, Calculator, Sparkles, Heart, Zap, Eye, Crown, CreditCard, Lock, CheckCircle, Globe, Moon, Sun, MapPin, Compass, BookOpen, Target, TrendingUp, Users, Brain, Shield, Award, Gem, Clock, Lightbulb } from 'lucide-react'

interface PersonalData {
  fullName: string
  birthDate: string
  birthTime: string
  birthPlace: string
}

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
  lifeCycles: number[]
  personalYear: number
  personalMonth: number
  personalDay: number
  challenges: number[]
  pinnacles: number[]
  decisiveMoments: number[]
}

interface AstrologyResult {
  sunSign: string
  moonSign: string
  ascendant: string
  planets: { [key: string]: { sign: string, house: number } }
  aspects: string[]
  currentTransits: string[]
  houses: { [key: number]: string }
}

interface ChineseZodiac {
  animal: string
  element: string
  yinYang: string
  traits: string[]
  compatibility: string[]
  luckyNumbers: number[]
  luckyColors: string[]
  careerAdvice: string[]
  relationshipTips: string[]
  challenges: string[]
  strengths: string[]
}

interface AstrocartographyResult {
  sunLines: string[]
  moonLines: string[]
  venusLines: string[]
  marsLines: string[]
  jupiterLines: string[]
  saturnLines: string[]
  favorableLocations: { [key: string]: string[] }
  challengingLocations: { [key: string]: string[] }
  recommendations: string[]
}

const chineseZodiacData: { [key: number]: ChineseZodiac } = {
  0: { 
    animal: 'Macaco', 
    element: 'Metal', 
    yinYang: 'Yang',
    traits: ['Inteligente', 'Criativo', 'Versátil', 'Esperto', 'Sociável'], 
    compatibility: ['Rato', 'Dragão'], 
    luckyNumbers: [4, 9], 
    luckyColors: ['Dourado', 'Branco'],
    careerAdvice: ['Tecnologia', 'Comunicação', 'Vendas', 'Entretenimento'],
    relationshipTips: ['Busque parceiros intelectuais', 'Valorize a liberdade', 'Comunique-se abertamente'],
    challenges: ['Impaciência', 'Superficialidade', 'Inquietação'],
    strengths: ['Adaptabilidade', 'Inteligência', 'Carisma']
  },
  1: { 
    animal: 'Galo', 
    element: 'Metal', 
    yinYang: 'Yin',
    traits: ['Corajoso', 'Honesto', 'Trabalhador', 'Pontual', 'Organizado'], 
    compatibility: ['Boi', 'Serpente'], 
    luckyNumbers: [5, 7, 8], 
    luckyColors: ['Dourado', 'Marrom'],
    careerAdvice: ['Administração', 'Militar', 'Agricultura', 'Contabilidade'],
    relationshipTips: ['Seja direto e honesto', 'Valorize a lealdade', 'Mantenha rotinas'],
    challenges: ['Crítica excessiva', 'Perfeccionismo', 'Teimosia'],
    strengths: ['Honestidade', 'Determinação', 'Organização']
  },
  2: { 
    animal: 'Cão', 
    element: 'Terra', 
    yinYang: 'Yang',
    traits: ['Leal', 'Responsável', 'Confiável', 'Justo', 'Protetor'], 
    compatibility: ['Tigre', 'Coelho'], 
    luckyNumbers: [3, 4, 9], 
    luckyColors: ['Verde', 'Vermelho'],
    careerAdvice: ['Direito', 'Segurança', 'Serviço Social', 'Veterinária'],
    relationshipTips: ['Construa confiança gradualmente', 'Seja fiel', 'Proteja quem ama'],
    challenges: ['Pessimismo', 'Ansiedade', 'Desconfiança'],
    strengths: ['Lealdade', 'Justiça', 'Proteção']
  },
  3: { 
    animal: 'Porco', 
    element: 'Terra', 
    yinYang: 'Yin',
    traits: ['Generoso', 'Compassivo', 'Diligente', 'Honesto', 'Otimista'], 
    compatibility: ['Coelho', 'Cabra'], 
    luckyNumbers: [2, 5, 8], 
    luckyColors: ['Amarelo', 'Cinza'],
    careerAdvice: ['Gastronomia', 'Hospitalidade', 'Finanças', 'Arte'],
    relationshipTips: ['Seja generoso com afeto', 'Valorize a harmonia', 'Cultive a paciência'],
    challenges: ['Ingenuidade', 'Materialismo', 'Indulgência'],
    strengths: ['Generosidade', 'Honestidade', 'Compaixão']
  },
  4: { 
    animal: 'Rato', 
    element: 'Metal', 
    yinYang: 'Yang',
    traits: ['Inteligente', 'Adaptável', 'Charmoso', 'Ambicioso', 'Sociável'], 
    compatibility: ['Dragão', 'Macaco'], 
    luckyNumbers: [2, 3], 
    luckyColors: ['Azul', 'Dourado'],
    careerAdvice: ['Negócios', 'Política', 'Escritor', 'Pesquisador'],
    relationshipTips: ['Use seu charme natural', 'Seja adaptável', 'Mantenha-se interessante'],
    challenges: ['Oportunismo', 'Ganância', 'Inquietação'],
    strengths: ['Inteligência', 'Adaptabilidade', 'Charme']
  },
  5: { 
    animal: 'Boi', 
    element: 'Metal', 
    yinYang: 'Yin',
    traits: ['Determinado', 'Confiável', 'Forte', 'Paciente', 'Metódico'], 
    compatibility: ['Serpente', 'Galo'], 
    luckyNumbers: [1, 9], 
    luckyColors: ['Azul', 'Amarelo'],
    careerAdvice: ['Agricultura', 'Construção', 'Medicina', 'Engenharia'],
    relationshipTips: ['Seja consistente', 'Demonstre estabilidade', 'Valorize tradições'],
    challenges: ['Teimosia', 'Lentidão', 'Conservadorismo'],
    strengths: ['Determinação', 'Confiabilidade', 'Paciência']
  },
  6: { 
    animal: 'Tigre', 
    element: 'Madeira', 
    yinYang: 'Yang',
    traits: ['Corajoso', 'Competitivo', 'Imprevisível', 'Carismático', 'Independente'], 
    compatibility: ['Cavalo', 'Cão'], 
    luckyNumbers: [1, 3, 4], 
    luckyColors: ['Azul', 'Cinza'],
    careerAdvice: ['Liderança', 'Esportes', 'Aventura', 'Empreendedorismo'],
    relationshipTips: ['Mantenha a paixão viva', 'Respeite a independência', 'Seja aventureiro'],
    challenges: ['Impulsividade', 'Rebeldia', 'Impaciência'],
    strengths: ['Coragem', 'Liderança', 'Carisma']
  },
  7: { 
    animal: 'Coelho', 
    element: 'Madeira', 
    yinYang: 'Yin',
    traits: ['Gentil', 'Elegante', 'Responsável', 'Diplomático', 'Artístico'], 
    compatibility: ['Cabra', 'Porco'], 
    luckyNumbers: [3, 4, 6], 
    luckyColors: ['Rosa', 'Vermelho'],
    careerAdvice: ['Arte', 'Diplomacia', 'Moda', 'Decoração'],
    relationshipTips: ['Cultive a elegância', 'Seja diplomático', 'Crie ambientes harmoniosos'],
    challenges: ['Superficialidade', 'Indecisão', 'Pessimismo'],
    strengths: ['Diplomacia', 'Elegância', 'Sensibilidade']
  },
  8: { 
    animal: 'Dragão', 
    element: 'Terra', 
    yinYang: 'Yang',
    traits: ['Confiante', 'Inteligente', 'Entusiasmado', 'Carismático', 'Ambicioso'], 
    compatibility: ['Rato', 'Macaco'], 
    luckyNumbers: [1, 6, 7], 
    luckyColors: ['Dourado', 'Prata'],
    careerAdvice: ['Liderança', 'Política', 'Entretenimento', 'Inovação'],
    relationshipTips: ['Seja magnético', 'Inspire outros', 'Mantenha o mistério'],
    challenges: ['Arrogância', 'Impaciência', 'Dominação'],
    strengths: ['Carisma', 'Liderança', 'Visão']
  },
  9: { 
    animal: 'Serpente', 
    element: 'Fogo', 
    yinYang: 'Yin',
    traits: ['Sábio', 'Intuitivo', 'Misterioso', 'Elegante', 'Filosófico'], 
    compatibility: ['Boi', 'Galo'], 
    luckyNumbers: [2, 8, 9], 
    luckyColors: ['Vermelho', 'Amarelo'],
    careerAdvice: ['Filosofia', 'Psicologia', 'Medicina', 'Pesquisa'],
    relationshipTips: ['Cultive o mistério', 'Seja profundo', 'Use sua intuição'],
    challenges: ['Desconfiança', 'Possessividade', 'Frieza'],
    strengths: ['Sabedoria', 'Intuição', 'Profundidade']
  },
  10: { 
    animal: 'Cavalo', 
    element: 'Fogo', 
    yinYang: 'Yang',
    traits: ['Energético', 'Independente', 'Alegre', 'Aventureiro', 'Sociável'], 
    compatibility: ['Tigre', 'Cão'], 
    luckyNumbers: [2, 3, 7], 
    luckyColors: ['Amarelo', 'Verde'],
    careerAdvice: ['Viagens', 'Esportes', 'Comunicação', 'Vendas'],
    relationshipTips: ['Mantenha a liberdade', 'Seja espontâneo', 'Compartilhe aventuras'],
    challenges: ['Inconstância', 'Impaciência', 'Egoísmo'],
    strengths: ['Energia', 'Liberdade', 'Otimismo']
  },
  11: { 
    animal: 'Cabra', 
    element: 'Terra', 
    yinYang: 'Yin',
    traits: ['Gentil', 'Compassivo', 'Artístico', 'Pacífico', 'Intuitivo'], 
    compatibility: ['Coelho', 'Porco'], 
    luckyNumbers: [3, 9, 4], 
    luckyColors: ['Verde', 'Vermelho'],
    careerAdvice: ['Arte', 'Terapia', 'Jardinagem', 'Música'],
    relationshipTips: ['Seja carinhoso', 'Cultive a paz', 'Expresse criatividade'],
    challenges: ['Pessimismo', 'Dependência', 'Indecisão'],
    strengths: ['Criatividade', 'Compaixão', 'Intuição']
  }
}

const numerologyMeanings = {
  1: { 
    title: 'O Líder', 
    description: 'Independente, pioneiro, ambicioso', 
    color: 'from-red-500 to-pink-500', 
    advice: 'Desenvolva sua liderança natural e confie em sua capacidade de iniciar projetos. Evite ser muito dominador.',
    positives: ['Liderança natural', 'Independência', 'Iniciativa', 'Originalidade', 'Determinação'],
    negatives: ['Egoísmo', 'Impaciência', 'Arrogância', 'Teimosia', 'Dominação'],
    practices: ['Medite sobre humildade', 'Pratique trabalho em equipe', 'Desenvolva paciência', 'Cultive a empatia']
  },
  2: { 
    title: 'O Cooperador', 
    description: 'Diplomático, sensível, pacificador', 
    color: 'from-blue-500 to-cyan-500', 
    advice: 'Use sua habilidade natural para mediar conflitos e trabalhar em equipe. Evite ser muito dependente dos outros.',
    positives: ['Diplomacia', 'Cooperação', 'Sensibilidade', 'Paciência', 'Harmonia'],
    negatives: ['Dependência', 'Indecisão', 'Timidez', 'Pessimismo', 'Submissão'],
    practices: ['Fortaleça sua autoconfiança', 'Tome decisões independentes', 'Pratique assertividade', 'Valorize suas opiniões']
  },
  3: { 
    title: 'O Comunicador', 
    description: 'Criativo, expressivo, otimista', 
    color: 'from-yellow-500 to-orange-500', 
    advice: 'Expresse sua criatividade através da arte, escrita ou comunicação. Evite dispersar sua energia em muitos projetos.',
    positives: ['Criatividade', 'Comunicação', 'Otimismo', 'Inspiração', 'Sociabilidade'],
    negatives: ['Dispersão', 'Superficialidade', 'Exagero', 'Crítica', 'Instabilidade'],
    practices: ['Foque em um projeto por vez', 'Desenvolva disciplina', 'Pratique escuta ativa', 'Cultive profundidade']
  },
  4: { 
    title: 'O Construtor', 
    description: 'Prático, organizado, trabalhador', 
    color: 'from-green-500 to-emerald-500', 
    advice: 'Use sua disciplina para construir bases sólidas em sua vida. Evite ser muito rígido ou teimoso.',
    positives: ['Organização', 'Disciplina', 'Praticidade', 'Confiabilidade', 'Persistência'],
    negatives: ['Rigidez', 'Teimosia', 'Limitação', 'Pessimismo', 'Rotina excessiva'],
    practices: ['Cultive flexibilidade', 'Abra-se para mudanças', 'Pratique criatividade', 'Desenvolva espontaneidade']
  },
  5: { 
    title: 'O Aventureiro', 
    description: 'Livre, versátil, curioso', 
    color: 'from-purple-500 to-violet-500', 
    advice: 'Abrace mudanças e novas experiências. Evite compromissos que limitem sua liberdade excessivamente.',
    positives: ['Liberdade', 'Versatilidade', 'Curiosidade', 'Aventura', 'Progresso'],
    negatives: ['Instabilidade', 'Impaciência', 'Irresponsabilidade', 'Superficialidade', 'Inquietação'],
    practices: ['Desenvolva compromisso', 'Pratique responsabilidade', 'Cultive paciência', 'Aprofunde relacionamentos']
  },
  6: { 
    title: 'O Cuidador', 
    description: 'Responsável, amoroso, protetor', 
    color: 'from-pink-500 to-rose-500', 
    advice: 'Use seu dom natural para cuidar e nutrir outros. Evite se sacrificar demais pelos outros.',
    positives: ['Responsabilidade', 'Amor', 'Proteção', 'Harmonia', 'Cura'],
    negatives: ['Sacrifício excessivo', 'Interferência', 'Preocupação', 'Possessividade', 'Mártir'],
    practices: ['Pratique autocuidado', 'Estabeleça limites', 'Desenvolva independência', 'Cultive autoamor']
  },
  7: { 
    title: 'O Místico', 
    description: 'Analítico, espiritual, introspectivo', 
    color: 'from-indigo-500 to-purple-500', 
    advice: 'Desenvolva sua espiritualidade e busque conhecimento profundo. Evite se isolar demais do mundo.',
    positives: ['Espiritualidade', 'Análise', 'Intuição', 'Sabedoria', 'Profundidade'],
    negatives: ['Isolamento', 'Pessimismo', 'Crítica', 'Frieza', 'Melancolia'],
    practices: ['Conecte-se com outros', 'Pratique compaixão', 'Desenvolva sociabilidade', 'Cultive alegria']
  },
  8: { 
    title: 'O Realizador', 
    description: 'Ambicioso, material, poderoso', 
    color: 'from-gray-600 to-gray-800', 
    advice: 'Use sua ambição para alcançar sucesso material e reconhecimento. Evite ser muito materialista.',
    positives: ['Ambição', 'Poder', 'Organização', 'Eficiência', 'Sucesso'],
    negatives: ['Materialismo', 'Dominação', 'Impaciência', 'Estresse', 'Workaholism'],
    practices: ['Cultive espiritualidade', 'Pratique generosidade', 'Desenvolva paciência', 'Valorize relacionamentos']
  },
  9: { 
    title: 'O Humanitário', 
    description: 'Generoso, compassivo, universal', 
    color: 'from-teal-500 to-cyan-500', 
    advice: 'Dedique-se a causas humanitárias e use sua compaixão para ajudar outros. Evite ser muito idealista.',
    positives: ['Compaixão', 'Generosidade', 'Sabedoria', 'Universalidade', 'Inspiração'],
    negatives: ['Idealismo excessivo', 'Dispersão', 'Emoções intensas', 'Sacrifício', 'Desilusão'],
    practices: ['Seja prático', 'Foque objetivos', 'Desenvolva realismo', 'Cultive equilíbrio']
  },
  11: { 
    title: 'O Visionário', 
    description: 'Intuitivo, inspirador, espiritual', 
    color: 'from-purple-600 to-indigo-600', 
    advice: 'Confie em sua intuição e inspire outros com sua visão. Evite ser muito sensível às críticas.',
    positives: ['Intuição', 'Inspiração', 'Visão', 'Espiritualidade', 'Idealismo'],
    negatives: ['Sensibilidade excessiva', 'Nervosismo', 'Impraticidade', 'Extremos', 'Instabilidade'],
    practices: ['Desenvolva praticidade', 'Fortaleça autoconfiança', 'Pratique grounding', 'Cultive estabilidade']
  },
  22: { 
    title: 'O Mestre Construtor', 
    description: 'Visionário prático, realizador de sonhos', 
    color: 'from-emerald-600 to-teal-600', 
    advice: 'Combine visão com praticidade para realizar grandes projetos. Evite se sobrecarregar com responsabilidades.',
    positives: ['Visão prática', 'Liderança', 'Construção', 'Inspiração', 'Realização'],
    negatives: ['Pressão excessiva', 'Perfeccionismo', 'Estresse', 'Impaciência', 'Sobrecarga'],
    practices: ['Pratique relaxamento', 'Delegue responsabilidades', 'Cultive paciência', 'Desenvolva equilíbrio']
  },
  33: { 
    title: 'O Mestre Professor', 
    description: 'Curador, professor, guia espiritual', 
    color: 'from-rose-600 to-pink-600', 
    advice: 'Use seus dons para ensinar e curar outros. Evite carregar os problemas do mundo nos ombros.',
    positives: ['Cura', 'Ensino', 'Compaixão', 'Sabedoria', 'Orientação'],
    negatives: ['Sacrifício excessivo', 'Sobrecarga emocional', 'Mártir', 'Preocupação', 'Estresse'],
    practices: ['Pratique autocuidado', 'Estabeleça limites', 'Desenvolva desapego', 'Cultive leveza']
  }
}

const astrologySigns = {
  'Áries': { 
    element: 'Fogo', 
    quality: 'Cardeal', 
    ruler: 'Marte', 
    traits: ['Corajoso', 'Impulsivo', 'Líder'],
    description: 'Pioneiro natural, iniciador de projetos, energia dinâmica',
    challenges: ['Impaciência', 'Impulsividade', 'Egocentrismo'],
    advice: 'Canalize sua energia em projetos construtivos e pratique paciência'
  },
  'Touro': { 
    element: 'Terra', 
    quality: 'Fixo', 
    ruler: 'Vênus', 
    traits: ['Estável', 'Sensual', 'Determinado'],
    description: 'Busca segurança e estabilidade, aprecia prazeres da vida',
    challenges: ['Teimosia', 'Materialismo', 'Resistência à mudança'],
    advice: 'Cultive flexibilidade e abra-se para novas experiências'
  },
  'Gêmeos': { 
    element: 'Ar', 
    quality: 'Mutável', 
    ruler: 'Mercúrio', 
    traits: ['Comunicativo', 'Versátil', 'Curioso'],
    description: 'Mente ágil, comunicador nato, busca variedade e conhecimento',
    challenges: ['Dispersão', 'Superficialidade', 'Inconstância'],
    advice: 'Foque em aprofundar conhecimentos e desenvolva consistência'
  },
  'Câncer': { 
    element: 'Água', 
    quality: 'Cardeal', 
    ruler: 'Lua', 
    traits: ['Emotivo', 'Protetor', 'Intuitivo'],
    description: 'Altamente intuitivo, protetor da família, emocionalmente profundo',
    challenges: ['Mau humor', 'Possessividade', 'Insegurança'],
    advice: 'Desenvolva autoconfiança e pratique desapego emocional'
  },
  'Leão': { 
    element: 'Fogo', 
    quality: 'Fixo', 
    ruler: 'Sol', 
    traits: ['Criativo', 'Generoso', 'Dramático'],
    description: 'Criativo e expressivo, busca reconhecimento e admiração',
    challenges: ['Arrogância', 'Egocentrismo', 'Drama excessivo'],
    advice: 'Pratique humildade e use sua criatividade para inspirar outros'
  },
  'Virgem': { 
    element: 'Terra', 
    quality: 'Mutável', 
    ruler: 'Mercúrio', 
    traits: ['Analítico', 'Prático', 'Perfeccionista'],
    description: 'Detalhista e organizado, busca perfeição e eficiência',
    challenges: ['Crítica excessiva', 'Preocupação', 'Perfeccionismo'],
    advice: 'Aceite imperfeições e pratique autocompaixão'
  },
  'Libra': { 
    element: 'Ar', 
    quality: 'Cardeal', 
    ruler: 'Vênus', 
    traits: ['Diplomático', 'Harmonioso', 'Justo'],
    description: 'Busca equilíbrio e harmonia, diplomata natural',
    challenges: ['Indecisão', 'Dependência', 'Superficialidade'],
    advice: 'Desenvolva autoconfiança e tome decisões independentes'
  },
  'Escorpião': { 
    element: 'Água', 
    quality: 'Fixo', 
    ruler: 'Plutão', 
    traits: ['Intenso', 'Transformador', 'Misterioso'],
    description: 'Profundo e transformador, busca verdades ocultas',
    challenges: ['Possessividade', 'Ciúme', 'Vingança'],
    advice: 'Pratique perdão e use sua intensidade para transformação positiva'
  },
  'Sagitário': { 
    element: 'Fogo', 
    quality: 'Mutável', 
    ruler: 'Júpiter', 
    traits: ['Aventureiro', 'Filosófico', 'Otimista'],
    description: 'Busca conhecimento e aventura, filosofo natural',
    challenges: ['Exagero', 'Impaciência', 'Falta de tato'],
    advice: 'Pratique moderação e desenvolva sensibilidade social'
  },
  'Capricórnio': { 
    element: 'Terra', 
    quality: 'Cardeal', 
    ruler: 'Saturno', 
    traits: ['Ambicioso', 'Disciplinado', 'Responsável'],
    description: 'Ambicioso e disciplinado, busca status e reconhecimento',
    challenges: ['Pessimismo', 'Rigidez', 'Materialismo'],
    advice: 'Cultive otimismo e valorize aspectos emocionais da vida'
  },
  'Aquário': { 
    element: 'Ar', 
    quality: 'Fixo', 
    ruler: 'Urano', 
    traits: ['Inovador', 'Independente', 'Humanitário'],
    description: 'Visionário e humanitário, busca inovação e liberdade',
    challenges: ['Frieza', 'Rebeldia', 'Distanciamento'],
    advice: 'Desenvolva intimidade emocional e pratique compaixão pessoal'
  },
  'Peixes': { 
    element: 'Água', 
    quality: 'Mutável', 
    ruler: 'Netuno', 
    traits: ['Intuitivo', 'Compassivo', 'Artístico'],
    description: 'Altamente intuitivo e compassivo, conectado ao espiritual',
    challenges: ['Escapismo', 'Confusão', 'Vitimização'],
    advice: 'Desenvolva praticidade e estabeleça limites claros'
  }
}

export default function MysticReportApp() {
  const [personalData, setPersonalData] = useState<PersonalData>({
    fullName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: ''
  })
  const [currentStep, setCurrentStep] = useState(1)
  const [mysticReport, setMysticReport] = useState<{
    numerology: NumerologyResult
    astrology: AstrologyResult
    chineseZodiac: ChineseZodiac
    astrocartography: AstrocartographyResult
  } | null>(null)
  const [showPlans, setShowPlans] = useState(false)

  const calculateCompleteNumerology = (fullName: string, date: string): NumerologyResult => {
    const reduceToSingleDigit = (num: number): number => {
      while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
        num = num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0)
      }
      return num
    }

    const getLetterValue = (letter: string): number => {
      const values: { [key: string]: number } = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
        j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
        s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8
      }
      return values[letter.toLowerCase()] || 0
    }

    // Número do Caminho da Vida (Missão)
    const dateNumbers = date.replace(/\D/g, '').split('').map(Number)
    const lifePathSum = dateNumbers.reduce((sum, num) => sum + num, 0)
    const lifePathNumber = reduceToSingleDigit(lifePathSum)

    // Número da Personalidade (consoantes)
    const consonants = fullName.toLowerCase().replace(/[aeiouàáâãäèéêëìíîïòóôõöùúûü\s]/g, '')
    const personalitySum = consonants.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const personalityNumber = reduceToSingleDigit(personalitySum)

    // Número da Alma/Motivação (vogais)
    const vowels = fullName.toLowerCase().replace(/[^aeiouàáâãäèéêëìíîïòóôõöùúûü]/g, '')
    const soulSum = vowels.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const soulNumber = reduceToSingleDigit(soulSum)

    // Número do Destino/Expressão (nome completo)
    const allLetters = fullName.toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '')
    const destinySum = allLetters.split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const destinyNumber = reduceToSingleDigit(destinySum)

    // Número da Expressão (mesmo que destino)
    const expressionNumber = destinyNumber

    // Número da Impressão (primeiro nome + sobrenome)
    const names = fullName.split(' ').filter(name => name.length > 0)
    const firstName = names[0] || ''
    const lastName = names[names.length - 1] || ''
    const impressionSum = (firstName + lastName).toLowerCase().replace(/[^a-záàáâãäèéêëìíîïòóôõöùúûü]/g, '').split('').reduce((sum, char) => sum + getLetterValue(char), 0)
    const impressionNumber = reduceToSingleDigit(impressionSum)

    // Número Psíquico (dia de nascimento)
    const birthDay = new Date(date).getDate()
    const psychicNumber = reduceToSingleDigit(birthDay)

    // Talentos Ocultos e Lições Cármicas
    const nameNumbers = allLetters.split('').map(char => reduceToSingleDigit(getLetterValue(char)))
    const presentNumbers = [...new Set(nameNumbers)].filter(n => n > 0)
    const hiddenTalents = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(n => !presentNumbers.includes(n))
    const karmicLessons = hiddenTalents

    // Dívidas Cármicas (números 13, 14, 16, 19)
    const karmicDebts: number[] = []
    const checkKarmicDebt = (sum: number) => {
      if (sum === 13 || sum === 14 || sum === 16 || sum === 19) {
        karmicDebts.push(sum)
      }
    }
    checkKarmicDebt(destinySum)
    checkKarmicDebt(personalitySum)
    checkKarmicDebt(soulSum)

    // Ciclos de Vida
    const birthDateObj = new Date(date)
    const cycle1 = reduceToSingleDigit(birthDateObj.getMonth() + 1)
    const cycle2 = reduceToSingleDigit(birthDateObj.getDate())
    const cycle3 = reduceToSingleDigit(birthDateObj.getFullYear())
    const lifeCycles = [cycle1, cycle2, cycle3]

    // Números Pessoais Atuais
    const currentDate = new Date()
    const personalYear = reduceToSingleDigit(
      birthDateObj.getDate() + (birthDateObj.getMonth() + 1) + currentDate.getFullYear()
    )
    const personalMonth = reduceToSingleDigit(personalYear + (currentDate.getMonth() + 1))
    const personalDay = reduceToSingleDigit(personalMonth + currentDate.getDate())

    // Desafios
    const challenge1 = Math.abs(birthDateObj.getDate() - (birthDateObj.getMonth() + 1))
    const challenge2 = Math.abs(birthDateObj.getDate() - (birthDateObj.getFullYear() % 10))
    const challenge3 = Math.abs(challenge1 - challenge2)
    const challenge4 = Math.abs(lifePathNumber - destinyNumber)
    const challenges = [
      reduceToSingleDigit(challenge1 || 1),
      reduceToSingleDigit(challenge2 || 1),
      reduceToSingleDigit(challenge3 || 1),
      reduceToSingleDigit(challenge4 || 1)
    ]

    // Píncaros
    const pinnacle1 = reduceToSingleDigit(birthDateObj.getDate() + (birthDateObj.getMonth() + 1))
    const pinnacle2 = reduceToSingleDigit(birthDateObj.getDate() + (birthDateObj.getFullYear() % 10))
    const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2)
    const pinnacle4 = reduceToSingleDigit((birthDateObj.getMonth() + 1) + (birthDateObj.getFullYear() % 10))
    const pinnacles = [pinnacle1, pinnacle2, pinnacle3, pinnacle4]

    // Momentos Decisivos
    const decisiveMoments = [
      Math.max(36 - lifePathNumber, 25),
      Math.max(45 - lifePathNumber, 35),
      Math.max(54 - lifePathNumber, 45)
    ]

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
    }
  }

  const calculateAstrology = (date: string, time: string, place: string): AstrologyResult => {
    const birthDate = new Date(date)
    const month = birthDate.getMonth() + 1
    const day = birthDate.getDate()

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

    // Simulação de outros elementos astrológicos
    const signs = Object.keys(astrologySigns)
    const moonSign = signs[(day + month) % signs.length]
    const ascendant = signs[(day * month) % signs.length]

    const planets = {
      'Mercúrio': { sign: signs[(day + 1) % signs.length], house: (day % 12) + 1 },
      'Vênus': { sign: signs[(day + 2) % signs.length], house: ((day + 1) % 12) + 1 },
      'Marte': { sign: signs[(day + 3) % signs.length], house: ((day + 2) % 12) + 1 },
      'Júpiter': { sign: signs[(day + 4) % signs.length], house: ((day + 3) % 12) + 1 },
      'Saturno': { sign: signs[(day + 5) % signs.length], house: ((day + 4) % 12) + 1 },
      'Urano': { sign: signs[(day + 6) % signs.length], house: ((day + 5) % 12) + 1 },
      'Netuno': { sign: signs[(day + 7) % signs.length], house: ((day + 6) % 12) + 1 },
      'Plutão': { sign: signs[(day + 8) % signs.length], house: ((day + 7) % 12) + 1 }
    }

    const aspects = [
      `Sol em ${sunSign} em conjunção com Mercúrio - comunicação poderosa`,
      `Lua em ${moonSign} em trígono com Vênus - harmonia emocional`,
      `Marte em quadratura com Saturno - desafios que fortalecem`,
      `Júpiter em sextil com Netuno - intuição expandida`,
      `Vênus em oposição com Plutão - transformação através do amor`
    ]

    const currentTransits = [
      'Júpiter transitando pela casa 7 - período favorável para relacionamentos e parcerias',
      'Saturno transitando pela casa 10 - foco na carreira e responsabilidades profissionais',
      'Urano transitando pela casa 2 - mudanças financeiras inesperadas e inovação',
      'Netuno transitando pela casa 12 - despertar espiritual e intuição aumentada',
      'Plutão transitando pela casa 8 - transformações profundas e renovação'
    ]

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
    }

    return {
      sunSign,
      moonSign,
      ascendant,
      planets,
      aspects,
      currentTransits,
      houses
    }
  }

  const getChineseZodiac = (date: string): ChineseZodiac => {
    const year = new Date(date).getFullYear()
    const zodiacIndex = year % 12
    return chineseZodiacData[zodiacIndex]
  }

  const calculateAstrocartography = (place: string): AstrocartographyResult => {
    return {
      sunLines: ['Costa Oeste dos EUA', 'Austrália Oriental', 'Japão'],
      moonLines: ['Europa Ocidental', 'Reino Unido', 'Irlanda'],
      venusLines: ['França', 'Itália', 'Brasil', 'Argentina'],
      marsLines: ['Alemanha', 'Coreia do Sul', 'Chile'],
      jupiterLines: ['Índia', 'Tailândia', 'Peru', 'Egito'],
      saturnLines: ['Canadá', 'Escandinávia', 'Rússia'],
      favorableLocations: {
        'Amor e Relacionamentos': ['Paris', 'Rio de Janeiro', 'Bali', 'Santorini', 'Veneza'],
        'Carreira e Sucesso': ['Nova York', 'Londres', 'Singapura', 'Dubai', 'Hong Kong'],
        'Espiritualidade e Crescimento': ['Índia', 'Tibet', 'Peru', 'Sedona', 'Glastonbury'],
        'Criatividade e Arte': ['Los Angeles', 'Milão', 'Barcelona', 'Florença', 'Buenos Aires'],
        'Saúde e Bem-estar': ['Costa Rica', 'Nova Zelândia', 'Suíça', 'Havaí', 'Islândia']
      },
      challengingLocations: {
        'Tensões Emocionais': ['Berlim', 'Moscou', 'Detroit'],
        'Desafios Financeiros': ['Las Vegas', 'Atlantic City', 'Monte Carlo'],
        'Conflitos Familiares': ['Chicago', 'Manchester', 'Birmingham'],
        'Estresse Profissional': ['Wall Street', 'City de Londres', 'Frankfurt']
      },
      recommendations: [
        'Para amor: Visite locais nas suas linhas de Vênus durante lua cheia',
        'Para carreira: Considere mudança para cidades nas suas linhas solares',
        'Para espiritualidade: Faça retiros em locais das suas linhas de Júpiter',
        'Para criatividade: Passe temporadas em suas linhas de Netuno',
        'Evite decisões importantes em suas linhas de Saturno durante eclipses'
      ]
    }
  }

  const handleGenerateReport = () => {
    if (!personalData.fullName.trim() || !personalData.birthDate) return
    
    const numerology = calculateCompleteNumerology(personalData.fullName, personalData.birthDate)
    const astrology = calculateAstrology(personalData.birthDate, personalData.birthTime, personalData.birthPlace)
    const chineseZodiac = getChineseZodiac(personalData.birthDate)
    const astrocartography = calculateAstrocartography(personalData.birthPlace)

    setMysticReport({
      numerology,
      astrology,
      chineseZodiac,
      astrocartography
    })
    setCurrentStep(2)
  }

  const renderDataCollection = () => (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-100 dark:border-gray-700">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
            Dados para Seu Relatório Místico Completo
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Quanto mais precisos os dados, mais detalhado e personalizado será seu relatório
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Nome Completo *
            </label>
            <input
              type="text"
              value={personalData.fullName}
              onChange={(e) => setPersonalData(prev => ({ ...prev, fullName: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Seu nome completo como no documento"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Essencial para cálculos numerológicos precisos
            </p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Data de Nascimento *
            </label>
            <input
              type="date"
              value={personalData.birthDate}
              onChange={(e) => setPersonalData(prev => ({ ...prev, birthDate: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Base para todos os cálculos astrológicos e numerológicos
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Hora de Nascimento
            </label>
            <input
              type="time"
              value={personalData.birthTime}
              onChange={(e) => setPersonalData(prev => ({ ...prev, birthTime: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Importante para ascendente e casas astrológicas precisas
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Local de Nascimento
            </label>
            <input
              type="text"
              value={personalData.birthPlace}
              onChange={(e) => setPersonalData(prev => ({ ...prev, birthPlace: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
              placeholder="Cidade, Estado, País"
            />
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
              Essencial para astrocartografia e cálculos astrológicos precisos
            </p>
          </div>

          <button
            onClick={handleGenerateReport}
            disabled={!personalData.fullName.trim() || !personalData.birthDate}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5" />
              Gerar Relatório Místico Completo
            </div>
          </button>

          <div className="text-center">
            <button
              onClick={() => setShowPlans(true)}
              className="text-purple-600 hover:text-purple-700 text-sm font-medium"
            >
              Ver planos de pagamento
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  const renderPlans = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-6xl w-full max-h-[90vh] overflow-y-auto">
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Escolha Seu Plano Místico
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Desbloqueie os segredos do universo com nossos relatórios personalizados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Plano Básico */}
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-6 border-2 border-blue-200 dark:border-blue-700">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Básico</h4>
              <div className="text-3xl font-bold text-blue-600 mb-2">R$ 29</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">por mês</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Numerologia simples</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Signo solar</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Suporte por e-mail</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-indigo-600 transition-all duration-300">
              Escolher Básico
            </button>
          </div>

          {/* Plano Premium */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-6 border-2 border-purple-300 dark:border-purple-600 relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-xs font-semibold">
                MAIS POPULAR
              </span>
            </div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Premium</h4>
              <div className="text-3xl font-bold text-purple-600 mb-2">R$ 59</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">por mês</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Numerologia completa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Mapa astrológico</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Astrologia chinesa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Cores e dias favoráveis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Horóscopo semanal</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300">
              Escolher Premium
            </button>
          </div>

          {/* Plano Supremo */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900 dark:to-orange-900 rounded-2xl p-6 border-2 border-yellow-300 dark:border-yellow-600">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Gem className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">Supremo</h4>
              <div className="text-3xl font-bold text-yellow-600 mb-2">R$ 99</div>
              <p className="text-sm text-gray-600 dark:text-gray-400">por mês</p>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Tudo do Premium</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Astrocartografia personalizada</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Atualizações mensais</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400 font-semibold">Horóscopo diário</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                <span className="text-sm text-gray-600 dark:text-gray-400">Suporte prioritário</span>
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-xl font-semibold hover:from-yellow-600 hover:to-orange-600 transition-all duration-300">
              Escolher Supremo
            </button>
          </div>
        </div>

        <div className="text-center">
          <button
            onClick={() => setShowPlans(false)}
            className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  )

  const renderMysticReport = () => {
    if (!mysticReport) return null

    return (
      <div className="space-y-12">
        {/* Header do Relatório */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8">
          <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Relatório Místico Completo
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-2">
            {personalData.fullName}
          </p>
          <p className="text-gray-500 dark:text-gray-500">
            Nascido em {new Date(personalData.birthDate).toLocaleDateString('pt-BR')}
            {personalData.birthTime && ` às ${personalData.birthTime}`}
            {personalData.birthPlace && ` em ${personalData.birthPlace}`}
          </p>
          <div className="mt-6 text-sm text-gray-600 dark:text-gray-400 italic">
            "Conhece-te a ti mesmo e conhecerás o universo e os deuses" - Oráculo de Delfos
          </div>
        </div>

        {/* Seção 1: Numerologia Pessoal */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              1. Numerologia Pitagórica Completa
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Os números sagrados que governam sua existência e revelam seu propósito divino
            </p>
          </div>

          {/* Números Principais */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              { number: mysticReport.numerology.lifePathNumber, title: 'Caminho da Vida', icon: Star, description: 'Sua missão principal nesta encarnação' },
              { number: mysticReport.numerology.destinyNumber, title: 'Número do Destino', icon: Crown, description: 'Seu potencial máximo a ser alcançado' },
              { number: mysticReport.numerology.soulNumber, title: 'Número da Alma', icon: Heart, description: 'Suas motivações mais profundas' },
              { number: mysticReport.numerology.personalityNumber, title: 'Personalidade', icon: Eye, description: 'Como outros te percebem' }
            ].map((item, index) => {
              const meaning = numerologyMeanings[item.number as keyof typeof numerologyMeanings]
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${meaning?.color} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Número {item.number}</p>
                    </div>
                  </div>
                  <h4 className="font-semibold text-lg text-gray-800 dark:text-gray-200 mb-2">{meaning?.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{meaning?.description}</p>
                  
                  {/* Pontos Positivos */}
                  <div className="mb-3">
                    <h5 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">✓ PONTOS POSITIVOS:</h5>
                    <div className="flex flex-wrap gap-1">
                      {meaning?.positives.slice(0, 3).map((positive, idx) => (
                        <span key={idx} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                          {positive}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pontos Negativos */}
                  <div className="mb-3">
                    <h5 className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">⚠ PONTOS DE ATENÇÃO:</h5>
                    <div className="flex flex-wrap gap-1">
                      {meaning?.negatives.slice(0, 3).map((negative, idx) => (
                        <span key={idx} className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">
                          {negative}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* O que fazer */}
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>💡 O QUE FAZER:</strong> {meaning?.advice}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Análise Detalhada dos Números Complementares */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* Números Pessoais Atuais */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-500" />
                Ciclos Temporais Atuais
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Ano Pessoal:</span>
                  <div className="font-semibold text-lg text-blue-600">{mysticReport.numerology.personalYear}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {mysticReport.numerology.personalYear === 1 && "Ano de novos começos, liderança e iniciativas"}
                    {mysticReport.numerology.personalYear === 2 && "Ano de cooperação, parcerias e diplomacia"}
                    {mysticReport.numerology.personalYear === 3 && "Ano de criatividade, comunicação e expressão"}
                    {mysticReport.numerology.personalYear === 4 && "Ano de trabalho duro, organização e construção"}
                    {mysticReport.numerology.personalYear === 5 && "Ano de mudanças, liberdade e aventuras"}
                    {mysticReport.numerology.personalYear === 6 && "Ano de responsabilidade, família e cuidado"}
                    {mysticReport.numerology.personalYear === 7 && "Ano de introspecção, espiritualidade e análise"}
                    {mysticReport.numerology.personalYear === 8 && "Ano de conquistas materiais e reconhecimento"}
                    {mysticReport.numerology.personalYear === 9 && "Ano de conclusões, generosidade e sabedoria"}
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Mês Pessoal:</span>
                  <div className="font-semibold text-lg text-green-600">{mysticReport.numerology.personalMonth}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Energia dominante do mês atual</p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Dia Pessoal:</span>
                  <div className="font-semibold text-lg text-purple-600">{mysticReport.numerology.personalDay}</div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Vibração energética de hoje</p>
                </div>
              </div>
            </div>

            {/* Talentos e Lições */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5 text-yellow-500" />
                Dons e Desafios Cármicos
              </h3>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 mb-2">🌟 TALENTOS OCULTOS:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {mysticReport.numerology.hiddenTalents.map((talent, index) => (
                      <span key={index} className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-xs">
                        {talent}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Estes números representam dons naturais que você pode desenvolver através de prática consciente e dedicação.
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-2">📚 LIÇÕES CÁRMICAS:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {mysticReport.numerology.karmicLessons.map((lesson, index) => (
                      <span key={index} className="bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 px-2 py-1 rounded text-xs">
                        {lesson}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Áreas de crescimento espiritual que sua alma escolheu trabalhar nesta vida.
                  </p>
                </div>
                {mysticReport.numerology.karmicDebts.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">⚖️ DÍVIDAS CÁRMICAS:</h5>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {mysticReport.numerology.karmicDebts.map((debt, index) => (
                        <span key={index} className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">
                          {debt}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Desafios especiais que requerem atenção e trabalho consciente para transformação.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Ciclos da Vida */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-red-500" />
                Momentos Decisivos
              </h3>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">🎯 IDADES TRANSFORMADORAS:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {mysticReport.numerology.decisiveMoments.map((moment, index) => (
                      <span key={index} className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">
                        {moment} anos
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Períodos de grandes transformações e decisões importantes em sua vida.
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">🏔️ PÍNCAROS DE REALIZAÇÃO:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {mysticReport.numerology.pinnacles.map((pinnacle, index) => (
                      <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                        {pinnacle}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Números que representam os temas principais de diferentes fases da sua vida.
                  </p>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-orange-600 dark:text-orange-400 mb-2">⚡ DESAFIOS PESSOAIS:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {mysticReport.numerology.challenges.map((challenge, index) => (
                      <span key={index} className="bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 px-2 py-1 rounded text-xs">
                        {challenge}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Obstáculos que, uma vez superados, se tornam suas maiores forças.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 2: Astrologia Ocidental */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900 dark:to-indigo-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sun className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              2. Astrologia Ocidental Completa
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Seu mapa astral revela a dança cósmica dos planetas em sua personalidade e destino
            </p>
          </div>

          {/* Signos Principais */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { sign: mysticReport.astrology.sunSign, title: 'Signo Solar', icon: Sun, description: 'Sua essência e propósito de vida', color: 'from-yellow-500 to-orange-500' },
              { sign: mysticReport.astrology.moonSign, title: 'Signo Lunar', icon: Moon, description: 'Suas emoções e mundo interior', color: 'from-blue-500 to-purple-500' },
              { sign: mysticReport.astrology.ascendant, title: 'Ascendente', icon: Eye, description: 'Sua máscara social e primeira impressão', color: 'from-green-500 to-teal-500' }
            ].map((item, index) => {
              const signData = astrologySigns[item.sign as keyof typeof astrologySigns]
              return (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800 dark:text-gray-200">{item.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{item.sign}</p>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">{signData?.description}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                      <span>Elemento: {signData?.element}</span>
                      <span>•</span>
                      <span>Regente: {signData?.ruler}</span>
                    </div>
                  </div>

                  {/* Características */}
                  <div className="mb-3">
                    <h5 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">✓ CARACTERÍSTICAS:</h5>
                    <div className="flex flex-wrap gap-1">
                      {signData?.traits.map((trait, idx) => (
                        <span key={idx} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Desafios */}
                  <div className="mb-3">
                    <h5 className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">⚠ DESAFIOS:</h5>
                    <div className="flex flex-wrap gap-1">
                      {signData?.challenges.map((challenge, idx) => (
                        <span key={idx} className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">
                          {challenge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Orientação */}
                  <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>💡 ORIENTAÇÃO:</strong> {signData?.advice}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Planetas e Casas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-green-500" />
                Posições Planetárias
              </h3>
              <div className="space-y-3">
                {Object.entries(mysticReport.astrology.planets).map(([planet, data]) => (
                  <div key={planet} className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <span className="font-medium text-gray-800 dark:text-gray-200">{planet}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Casa {data.house}</span>
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      em {data.sign}
                    </div>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {mysticReport.astrology.houses[data.house]}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-red-500" />
                Aspectos e Trânsitos
              </h3>
              <div className="space-y-4">
                <div>
                  <h5 className="text-sm font-semibold text-purple-600 dark:text-purple-400 mb-2">🔮 ASPECTOS PRINCIPAIS:</h5>
                  <div className="space-y-2">
                    {mysticReport.astrology.aspects.map((aspect, index) => (
                      <p key={index} className="text-xs text-gray-600 dark:text-gray-400 p-2 bg-purple-50 dark:bg-purple-900 rounded">
                        {aspect}
                      </p>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-blue-600 dark:text-blue-400 mb-2">🌟 TRÂNSITOS ATUAIS:</h5>
                  <div className="space-y-2">
                    {mysticReport.astrology.currentTransits.map((transit, index) => (
                      <p key={index} className="text-xs text-gray-600 dark:text-gray-400 p-2 bg-blue-50 dark:bg-blue-900 rounded">
                        {transit}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 3: Astrologia Chinesa */}
        <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900 dark:to-orange-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🐉</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              3. Astrologia Chinesa
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              A sabedoria milenar chinesa revela sua natureza animal e compatibilidades energéticas
            </p>
          </div>

          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              {mysticReport.chineseZodiac.animal}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Elemento: {mysticReport.chineseZodiac.element} | Energia: {mysticReport.chineseZodiac.yinYang}
            </p>
            <div className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
              <p>
                O {mysticReport.chineseZodiac.animal} é conhecido por sua natureza única e características especiais. 
                Cada animal do zodíaco chinês carrega uma energia específica que influencia profundamente 
                a personalidade e o destino de quem nasce sob sua proteção.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {/* Características */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                <Users className="w-5 h-5 text-purple-500" />
                Características Naturais
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">✓ FORÇAS:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {mysticReport.chineseZodiac.strengths.map((strength, index) => (
                      <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                        {strength}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-red-600 dark:text-red-400 mb-1">⚠ DESAFIOS:</h5>
                  <div className="flex flex-wrap gap-1">
                    {mysticReport.chineseZodiac.challenges.map((challenge, index) => (
                      <span key={index} className="bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 px-2 py-1 rounded text-xs">
                        {challenge}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Compatibilidade */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                <Heart className="w-5 h-5 text-green-500" />
                Compatibilidade Amorosa
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-xs font-semibold text-green-600 dark:text-green-400 mb-1">💕 COMBINAÇÕES IDEAIS:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {mysticReport.chineseZodiac.compatibility.map((animal, index) => (
                      <span key={index} className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 px-2 py-1 rounded text-xs">
                        {animal}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">💡 DICAS RELACIONAIS:</h5>
                  <div className="space-y-1">
                    {mysticReport.chineseZodiac.relationshipTips.map((tip, index) => (
                      <p key={index} className="text-xs text-gray-600 dark:text-gray-400">• {tip}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Elementos da Sorte */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                <Shield className="w-5 h-5 text-yellow-500" />
                Elementos da Sorte
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-xs font-semibold text-yellow-600 dark:text-yellow-400 mb-1">🔢 NÚMEROS:</h5>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {mysticReport.chineseZodiac.luckyNumbers.map((number, index) => (
                      <span key={index} className="bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 px-2 py-1 rounded text-sm font-semibold">
                        {number}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h5 className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">🎨 CORES:</h5>
                  <div className="flex flex-wrap gap-1">
                    {mysticReport.chineseZodiac.luckyColors.map((color, index) => (
                      <span key={index} className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded text-xs">
                        {color}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                  Use estes números e cores em decisões importantes, roupas e decoração para atrair energia positiva.
                </p>
              </div>
            </div>

            {/* Orientações Práticas */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                Orientações Profissionais
              </h4>
              <div className="space-y-3">
                <div>
                  <h5 className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-1">💼 CARREIRAS IDEAIS:</h5>
                  <div className="space-y-1">
                    {mysticReport.chineseZodiac.careerAdvice.map((advice, index) => (
                      <p key={index} className="text-xs text-gray-600 dark:text-gray-400">• {advice}</p>
                    ))}
                  </div>
                </div>
                <div className="mt-3 p-2 bg-blue-50 dark:bg-blue-900 rounded">
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    <strong>💡 DICA ESPECIAL:</strong> Seu elemento {mysticReport.chineseZodiac.element} 
                    sugere que você trabalha melhor em ambientes que valorizam 
                    {mysticReport.chineseZodiac.element === 'Metal' && ' precisão e organização'}
                    {mysticReport.chineseZodiac.element === 'Madeira' && ' crescimento e criatividade'}
                    {mysticReport.chineseZodiac.element === 'Fogo' && ' paixão e liderança'}
                    {mysticReport.chineseZodiac.element === 'Terra' && ' estabilidade e praticidade'}
                    {mysticReport.chineseZodiac.element === 'Água' && ' intuição e adaptabilidade'}.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Seção 4: Astrocartografia */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900 dark:to-teal-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              4. Astrocartografia - Seu Mapa de Poder Global
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Descubra os locais mais poderosos do mundo para diferentes aspectos da sua vida
            </p>
          </div>

          {/* Locais Favoráveis e Desafiadores */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Locais Favoráveis */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                <Compass className="w-5 h-5 text-green-500" />
                Locais de Poder e Prosperidade
              </h3>
              <div className="space-y-6">
                {Object.entries(mysticReport.astrocartography.favorableLocations).map(([category, locations]) => (
                  <div key={category} className="p-4 bg-green-50 dark:bg-green-900 rounded-lg">
                    <h4 className="font-semibold text-green-800 dark:text-green-200 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {locations.map((location, index) => (
                        <span key={index} className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 px-3 py-1 rounded-full text-sm">
                          {location}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-green-700 dark:text-green-300">
                      {category === 'Amor e Relacionamentos' && 'Estes locais favorecem encontros românticos, relacionamentos duradouros e harmonia conjugal. A energia de Vênus é forte aqui.'}
                      {category === 'Carreira e Sucesso' && 'Nestas regiões você terá mais oportunidades profissionais, reconhecimento e sucesso material. Ideal para negócios e liderança.'}
                      {category === 'Espiritualidade e Crescimento' && 'Locais ideais para crescimento espiritual, meditação, autoconhecimento e conexão com o divino.'}
                      {category === 'Criatividade e Arte' && 'Sua criatividade e talentos artísticos florescerão nestes lugares. Ideal para projetos criativos e expressão pessoal.'}
                      {category === 'Saúde e Bem-estar' && 'Locais que promovem cura, vitalidade e bem-estar físico e mental. Ideais para recuperação e renovação.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Locais Desafiadores */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
                <Eye className="w-5 h-5 text-red-500" />
                Locais que Requerem Atenção Especial
              </h3>
              <div className="space-y-6">
                {Object.entries(mysticReport.astrocartography.challengingLocations).map(([category, locations]) => (
                  <div key={category} className="p-4 bg-red-50 dark:bg-red-900 rounded-lg">
                    <h4 className="font-semibold text-red-800 dark:text-red-200 mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {locations.map((location, index) => (
                        <span key={index} className="bg-red-100 dark:bg-red-800 text-red-800 dark:text-red-200 px-3 py-1 rounded-full text-sm">
                          {location}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-red-700 dark:text-red-300">
                      {category === 'Tensões Emocionais' && 'Nestes locais você pode sentir mais instabilidade emocional e conflitos internos. Pratique meditação, autocuidado e busque apoio emocional.'}
                      {category === 'Desafios Financeiros' && 'Seja mais cauteloso com investimentos, gastos e decisões financeiras nestas regiões. Evite grandes riscos econômicos.'}
                      {category === 'Conflitos Familiares' && 'Mantenha comunicação clara, pratique paciência e evite discussões desnecessárias nestes lugares. Foque na harmonia familiar.'}
                      {category === 'Estresse Profissional' && 'Ambientes de alta pressão e competitividade. Pratique técnicas de relaxamento e mantenha equilíbrio trabalho-vida pessoal.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Linhas Planetárias */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 mb-6">
            <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-6 flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              Suas Linhas Planetárias de Poder
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                <h4 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                  <Sun className="w-4 h-4" />
                  Linhas Solares
                </h4>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mb-2">Locais de liderança, reconhecimento e vitalidade:</p>
                <div className="space-y-1">
                  {mysticReport.astrocartography.sunLines.map((line, index) => (
                    <p key={index} className="text-xs text-yellow-600 dark:text-yellow-400">• {line}</p>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg">
                <h4 className="font-semibold text-blue-800 dark:text-blue-200 mb-2 flex items-center gap-2">
                  <Moon className="w-4 h-4" />
                  Linhas Lunares
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">Locais de intuição, família e emoções:</p>
                <div className="space-y-1">
                  {mysticReport.astrocartography.moonLines.map((line, index) => (
                    <p key={index} className="text-xs text-blue-600 dark:text-blue-400">• {line}</p>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-pink-50 dark:bg-pink-900 rounded-lg">
                <h4 className="font-semibold text-pink-800 dark:text-pink-200 mb-2 flex items-center gap-2">
                  <Heart className="w-4 h-4" />
                  Linhas de Vênus
                </h4>
                <p className="text-sm text-pink-700 dark:text-pink-300 mb-2">Locais de amor, beleza e harmonia:</p>
                <div className="space-y-1">
                  {mysticReport.astrocartography.venusLines.map((line, index) => (
                    <p key={index} className="text-xs text-pink-600 dark:text-pink-400">• {line}</p>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-red-50 dark:bg-red-900 rounded-lg">
                <h4 className="font-semibold text-red-800 dark:text-red-200 mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Linhas de Marte
                </h4>
                <p className="text-sm text-red-700 dark:text-red-300 mb-2">Locais de ação, coragem e conquistas:</p>
                <div className="space-y-1">
                  {mysticReport.astrocartography.marsLines.map((line, index) => (
                    <p key={index} className="text-xs text-red-600 dark:text-red-400">• {line}</p>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg">
                <h4 className="font-semibold text-purple-800 dark:text-purple-200 mb-2 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  Linhas de Júpiter
                </h4>
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-2">Locais de expansão, sorte e sabedoria:</p>
                <div className="space-y-1">
                  {mysticReport.astrocartography.jupiterLines.map((line, index) => (
                    <p key={index} className="text-xs text-purple-600 dark:text-purple-400">• {line}</p>
                  ))}
                </div>
              </div>
              
              <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 flex items-center gap-2">
                  <Shield className="w-4 h-4" />
                  Linhas de Saturno
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">Locais de disciplina, estrutura e lições:</p>
                <div className="space-y-1">
                  {mysticReport.astrocartography.saturnLines.map((line, index) => (
                    <p key={index} className="text-xs text-gray-600 dark:text-gray-400">• {line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Recomendações Práticas */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-orange-500" />
              Recomendações Práticas de Astrocartografia
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {mysticReport.astrocartography.recommendations.map((recommendation, index) => (
                <div key={index} className="p-3 bg-orange-50 dark:bg-orange-900 rounded-lg">
                  <p className="text-sm text-orange-800 dark:text-orange-200">{recommendation}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Seção 5: Síntese e Orientações Práticas */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900 dark:to-teal-900 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-2">
              5. Síntese e Orientações Práticas para Sua Vida
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Como integrar todas essas informações em sua jornada de autoconhecimento e crescimento
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Relacionamentos e Amor */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Relacionamentos e Vida Amorosa
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 dark:bg-red-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">💕 PERFIL AMOROSO:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Numerologia:</strong> Seu Número da Alma {mysticReport.numerology.soulNumber} revela que você busca {numerologyMeanings[mysticReport.numerology.soulNumber as keyof typeof numerologyMeanings]?.description.toLowerCase()} em relacionamentos.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">🌟 COMPATIBILIDADE:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Astrologia Chinesa:</strong> Você se harmoniza melhor com pessoas dos signos {mysticReport.chineseZodiac.compatibility.join(' e ')}.
                  </p>
                </div>
                <div className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">🎯 ORIENTAÇÕES:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Astrologia Ocidental:</strong> Com seu Sol em {mysticReport.astrology.sunSign} e Lua em {mysticReport.astrology.moonSign}, você precisa de um parceiro que compreenda tanto sua natureza solar quanto suas necessidades emocionais lunares.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">🗺️ LOCAIS FAVORÁVEIS:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Para encontrar o amor verdadeiro, considere visitar: {mysticReport.astrocartography.favorableLocations['Amor e Relacionamentos']?.slice(0, 3).join(', ')}.
                  </p>
                </div>
              </div>
            </div>

            {/* Carreira e Prosperidade */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-500" />
                Carreira e Prosperidade
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-green-50 dark:bg-green-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-green-700 dark:text-green-300 mb-2">🎯 MISSÃO PROFISSIONAL:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Número do Destino {mysticReport.numerology.destinyNumber}:</strong> {numerologyMeanings[mysticReport.numerology.destinyNumber as keyof typeof numerologyMeanings]?.advice}
                  </p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">💼 ÁREAS RECOMENDADAS:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Astrologia Chinesa:</strong> {mysticReport.chineseZodiac.careerAdvice.join(', ')}.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-yellow-700 dark:text-yellow-300 mb-2">⏰ MOMENTO ATUAL:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <strong>Ano Pessoal {mysticReport.numerology.personalYear}:</strong> Este é um período para {
                      mysticReport.numerology.personalYear === 1 ? 'novos começos e liderança' :
                      mysticReport.numerology.personalYear === 2 ? 'cooperação e parcerias' :
                      mysticReport.numerology.personalYear === 3 ? 'criatividade e comunicação' :
                      mysticReport.numerology.personalYear === 4 ? 'construção e estabilidade' :
                      mysticReport.numerology.personalYear === 5 ? 'mudanças e liberdade' :
                      mysticReport.numerology.personalYear === 6 ? 'responsabilidade e cuidado' :
                      mysticReport.numerology.personalYear === 7 ? 'introspecção e espiritualidade' :
                      mysticReport.numerology.personalYear === 8 ? 'conquistas materiais e poder' :
                      'conclusões e sabedoria'
                    }.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">🌍 LOCAIS DE SUCESSO:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Para acelerar sua carreira, considere: {mysticReport.astrocartography.favorableLocations['Carreira e Sucesso']?.slice(0, 3).join(', ')}.
                  </p>
                </div>
              </div>
            </div>

            {/* Desenvolvimento Espiritual */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-purple-500" />
                Desenvolvimento Espiritual
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-purple-50 dark:bg-purple-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-purple-700 dark:text-purple-300 mb-2">✨ TALENTOS OCULTOS:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Os números {mysticReport.numerology.hiddenTalents.join(', ')} representam dons naturais que você pode desenvolver através de meditação, estudo e prática consciente.
                  </p>
                </div>
                <div className="p-3 bg-indigo-50 dark:bg-indigo-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-indigo-700 dark:text-indigo-300 mb-2">📚 LIÇÕES CÁRMICAS:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Trabalhe conscientemente os aspectos relacionados aos números {mysticReport.numerology.karmicLessons.join(', ')} para acelerar sua evolução espiritual.
                  </p>
                </div>
                <div className="p-3 bg-teal-50 dark:bg-teal-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-teal-700 dark:text-teal-300 mb-2">🏔️ LOCAIS DE PODER:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Para crescimento espiritual, considere visitar ou morar em: {mysticReport.astrocartography.favorableLocations['Espiritualidade e Crescimento']?.slice(0, 3).join(', ')}.
                  </p>
                </div>
              </div>
            </div>

            {/* Planejamento e Timing */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6">
              <h3 className="font-bold text-gray-800 dark:text-gray-200 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-blue-500" />
                Planejamento e Timing Cósmico
              </h3>
              <div className="space-y-4">
                <div className="p-3 bg-red-50 dark:bg-red-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-red-700 dark:text-red-300 mb-2">🎯 MOMENTOS DECISIVOS:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Prepare-se para grandes transformações aos {mysticReport.numerology.decisiveMoments.join(', ')} anos de idade.
                  </p>
                </div>
                <div className="p-3 bg-blue-50 dark:bg-blue-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-blue-700 dark:text-blue-300 mb-2">📅 CICLO ATUAL:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Seu Mês Pessoal {mysticReport.numerology.personalMonth} sugere focar em {
                      mysticReport.numerology.personalMonth === 1 ? 'novos projetos e iniciativas' :
                      mysticReport.numerology.personalMonth === 2 ? 'colaborações e parcerias' :
                      mysticReport.numerology.personalMonth === 3 ? 'expressão criativa e comunicação' :
                      mysticReport.numerology.personalMonth === 4 ? 'organização e planejamento detalhado' :
                      mysticReport.numerology.personalMonth === 5 ? 'mudanças e novas experiências' :
                      mysticReport.numerology.personalMonth === 6 ? 'família e responsabilidades' :
                      mysticReport.numerology.personalMonth === 7 ? 'reflexão e desenvolvimento espiritual' :
                      mysticReport.numerology.personalMonth === 8 ? 'questões materiais e profissionais' :
                      'conclusões e generosidade'
                    }.
                  </p>
                </div>
                <div className="p-3 bg-yellow-50 dark:bg-yellow-900 rounded-lg">
                  <h5 className="text-sm font-semibold text-yellow-700 dark:text-yellow-300 mb-2">🍀 ELEMENTOS DA SORTE:</h5>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Use seus números da sorte {mysticReport.chineseZodiac.luckyNumbers.join(', ')} em decisões importantes e as cores {mysticReport.chineseZodiac.luckyColors.join(', ')} em roupas e ambientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mensagem Final Inspiradora */}
        <div className="text-center bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900 dark:to-pink-900 rounded-2xl p-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Star className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">
            Sua Jornada de Autoconhecimento e Transformação
          </h3>
          <div className="max-w-4xl mx-auto space-y-4 text-gray-600 dark:text-gray-400">
            <p>
              Este relatório é muito mais que uma simples análise - é um mapa sagrado para sua jornada de autoconhecimento e crescimento espiritual. 
              Cada número, cada posição planetária, cada símbolo chinês carrega uma mensagem especial do universo para você.
            </p>
            <p>
              Use essas informações como uma bússola em sua caminhada pela vida. Lembre-se: você tem o poder de criar sua própria realidade, 
              e agora possui as ferramentas ancestrais para fazê-lo de forma mais sábia, consciente e alinhada com seu propósito divino.
            </p>
            <p>
              A numerologia revela seus números sagrados, a astrologia mostra a dança cósmica em sua personalidade, 
              a sabedoria chinesa conecta você aos ciclos naturais, e a astrocartografia mapeia os locais de poder em sua jornada terrena.
            </p>
          </div>
          <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-xl max-w-2xl mx-auto">
            <p className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-2">
              "O conhecimento de si mesmo é o começo de toda sabedoria."
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic">
              - Aristóteles
            </p>
          </div>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>✨ Que este relatório ilumine seu caminho e desperte a magia que já existe dentro de você ✨</p>
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
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
            Relatórios Místicos Completos e Profissionais: Numerologia Pitagórica, Astrologia Ocidental, Astrologia Chinesa e Astrocartografia
          </p>
          <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            <p>✨ Desvende os mistérios do universo através da sabedoria ancestral ✨</p>
          </div>
        </div>

        {/* Progress Steps */}
        {currentStep <= 1 && (
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                1
              </div>
              <div className={`w-16 h-1 ${currentStep >= 2 ? 'bg-purple-500' : 'bg-gray-200'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-purple-500 text-white' : 'bg-gray-200 text-gray-500'}`}>
                2
              </div>
            </div>
          </div>
        )}

        {/* Content based on current step */}
        {currentStep === 1 && renderDataCollection()}
        {currentStep === 2 && renderMysticReport()}

        {/* Plans Modal */}
        {showPlans && renderPlans()}

        {/* Footer */}
        <div className="text-center mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            ✨ Descubra os mistérios do universo através da sabedoria ancestral ✨
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400 dark:text-gray-500">
            <span>Numerologia Pitagórica</span>
            <span>•</span>
            <span>Astrologia Ocidental</span>
            <span>•</span>
            <span>Astrologia Chinesa</span>
            <span>•</span>
            <span>Astrocartografia</span>
          </div>
        </div>
      </div>
    </div>
  )
}