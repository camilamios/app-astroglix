import { NextRequest, NextResponse } from 'next/server'

interface HoroscopeData {
  sign: string
  date: string
  generalPrediction: string
  love: string
  career: string
  health: string
  luckyNumbers: number[]
  luckyColors: string[]
  advice: string
  mood: string
  compatibility: string
  challenges: string[]
  opportunities: string[]
}

// Dados de horóscopo mais detalhados
const horoscopeDatabase = {
  'Áries': {
    general: [
      'O dia promete energia renovada e novas oportunidades se apresentarão em sua jornada. Sua coragem natural será recompensada.',
      'Sua iniciativa e liderança estarão em destaque hoje. Aproveite para tomar decisões importantes.',
      'Momentos de ação e movimento estão favorecidos. Não hesite em dar os primeiros passos.',
      'A comunicação direta será sua aliada para resolver questões pendentes.'
    ],
    love: [
      'Romance no ar! Seja mais expressivo(a) com seus sentimentos e demonstre interesse.',
      'Momento de reconciliação e perdão em relacionamentos. A honestidade será valorizada.',
      'Nova pessoa especial pode entrar em sua vida hoje. Mantenha-se aberto(a) a conexões.',
      'Comunicação sincera fortalecerá seus laços afetivos e trará intimidade.'
    ],
    career: [
      'Oportunidade de liderança se apresenta - aproveite para mostrar suas habilidades!',
      'Seu trabalho criativo será reconhecido pelos superiores. Continue inovando.',
      'Momento ideal para negociar aumento salarial ou novas responsabilidades.',
      'Colaboração com colegas trará resultados excelentes. Trabalhe em equipe.'
    ],
    health: [
      'Energia física em alta - ideal para atividades esportivas e exercícios intensos.',
      'Cuidado com o estresse - pratique meditação ou yoga para equilibrar.',
      'Momento de renovar hábitos alimentares saudáveis e rotina de exercícios.',
      'Sua vitalidade natural estará em destaque hoje. Aproveite para atividades físicas.'
    ]
  },
  'Touro': {
    general: [
      'Estabilidade e crescimento material estão em seu favor hoje. Invista em projetos sólidos.',
      'Paciência será recompensada com resultados duradouros e satisfatórios.',
      'Momento de focar em projetos de longo prazo e construir bases sólidas.',
      'Sua persistência natural trará conquistas importantes e reconhecimento.'
    ],
    love: [
      'Relacionamentos sólidos se fortalecerão ainda mais com gestos de carinho.',
      'Momento romântico perfeito para declarações de amor e compromissos.',
      'Estabilidade emocional atrairá parceiro ideal ou fortalecerá união atual.',
      'Valorize os pequenos gestos de carinho e demonstre apreço pelo parceiro.'
    ],
    career: [
      'Projetos financeiros trarão retorno positivo. Continue investindo com sabedoria.',
      'Sua dedicação será reconhecida e recompensada pelos superiores.',
      'Oportunidade de investimento seguro se apresenta. Analise com cuidado.',
      'Trabalho em equipe fortalecerá sua posição e trará estabilidade.'
    ],
    health: [
      'Foque em atividades relaxantes para equilibrar energia e reduzir tensão.',
      'Cuidado com a alimentação - prefira comidas naturais e nutritivas.',
      'Sua resistência física estará em alta. Aproveite para atividades moderadas.',
      'Momento ideal para iniciar rotina de exercícios suaves e consistentes.'
    ]
  },
  'Gêmeos': {
    general: [
      'Comunicação será sua maior aliada para resolver questões e criar conexões.',
      'Novas informações importantes chegarão até você através de conversas.',
      'Momento de networking e conexões sociais que trarão oportunidades.',
      'Sua versatilidade será valorizada em diferentes situações hoje.'
    ],
    love: [
      'Conversas profundas fortalecerão relacionamentos e criarão intimidade.',
      'Nova conexão intelectual pode se transformar em romance especial.',
      'Comunique seus sentimentos com clareza e honestidade.',
      'Momento de resolver mal-entendidos do passado através do diálogo.'
    ],
    career: [
      'Apresentações e reuniões serão bem-sucedidas. Prepare-se bem.',
      'Sua criatividade em comunicação será destacada e valorizada.',
      'Oportunidade de parceria profissional se apresenta. Analise propostas.',
      'Networking trará novas oportunidades e conexões importantes.'
    ],
    health: [
      'Atividades mentais estimulantes farão bem à saúde e bem-estar.',
      'Cuidado com a ansiedade - pratique respiração e meditação.',
      'Exercícios aeróbicos equilibrarão sua energia e reduzirão tensão.',
      'Momento de cuidar da saúde mental através de hobbies e relaxamento.'
    ]
  }
  // Adicionar outros signos conforme necessário...
}

function getRandomPrediction(predictions: string[]): string {
  return predictions[Math.floor(Math.random() * predictions.length)]
}

function getSunSign(birthDate: string): string {
  const date = new Date(birthDate)
  const month = date.getMonth() + 1
  const day = date.getDate()

  if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) return 'Áries'
  if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) return 'Touro'
  if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) return 'Gêmeos'
  if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) return 'Câncer'
  if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) return 'Leão'
  if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) return 'Virgem'
  if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) return 'Libra'
  if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) return 'Escorpião'
  if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) return 'Sagitário'
  if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) return 'Capricórnio'
  if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) return 'Aquário'
  return 'Peixes'
}

function generateHoroscope(birthDate: string, customerName: string): HoroscopeData {
  const sign = getSunSign(birthDate)
  const today = new Date().toLocaleDateString('pt-BR')
  
  const signData = horoscopeDatabase[sign as keyof typeof horoscopeDatabase]
  
  if (signData) {
    return {
      sign,
      date: today,
      generalPrediction: getRandomPrediction(signData.general),
      love: getRandomPrediction(signData.love),
      career: getRandomPrediction(signData.career),
      health: getRandomPrediction(signData.health),
      luckyNumbers: [
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1,
        Math.floor(Math.random() * 9) + 1
      ],
      luckyColors: ['Dourado', 'Azul', 'Verde'],
      advice: 'Confie em sua intuição e aproveite as oportunidades que se apresentam hoje.',
      mood: 'Otimista',
      compatibility: 'Signos compatíveis',
      challenges: ['Desafios menores'],
      opportunities: ['Novas possibilidades', 'Crescimento pessoal']
    }
  }
  
  // Fallback para signos não implementados
  return {
    sign,
    date: today,
    generalPrediction: 'Dia promissor com novas oportunidades se apresentando em sua jornada.',
    love: 'Momento favorável para relacionamentos e conexões especiais.',
    career: 'Oportunidades profissionais se apresentam com força e determinação.',
    health: 'Energia equilibrada favorece bem-estar geral e vitalidade.',
    luckyNumbers: [1, 5, 9],
    luckyColors: ['Dourado', 'Azul', 'Verde'],
    advice: 'Mantenha-se positivo e aproveite as energias favoráveis do dia.',
    mood: 'Equilibrado',
    compatibility: 'Signos compatíveis',
    challenges: ['Desafios menores'],
    opportunities: ['Novas possibilidades', 'Crescimento']
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerEmail, customerName, birthDate } = body

    if (!customerEmail || !customerName || !birthDate) {
      return NextResponse.json({
        success: false,
        error: 'Dados do cliente são obrigatórios'
      }, { status: 400 })
    }

    // Gerar horóscopo personalizado
    const horoscope = generateHoroscope(birthDate, customerName)

    console.log('🌟 Horóscopo gerado para:', {
      email: customerEmail,
      name: customerName,
      sign: horoscope.sign,
      date: horoscope.date
    })

    // Aqui você integraria com um serviço de e-mail (SendGrid, AWS SES, etc.)
    // Por enquanto, apenas retornamos os dados
    return NextResponse.json({
      success: true,
      horoscope,
      customer: {
        email: customerEmail,
        name: customerName
      },
      message: 'Horóscopo gerado com sucesso'
    })

  } catch (error) {
    console.error('❌ Erro ao gerar horóscopo:', error)
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Erro interno do servidor'
    }, { status: 500 })
  }
}
