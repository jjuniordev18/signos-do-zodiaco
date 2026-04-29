import signsData from '../data/signs.json';

export const signs = signsData;

const compatibilityMatrix = {
  aries: { leo: 85, sagittarius: 80, gemini: 60, aquarius: 65, cancer: 55, taurus: 50, virgo: 55, libra: 60, scorpio: 70, capricornus: 50, pisces: 65 },
  taurus: { virgo: 85, capricornus: 90, cancer: 75, scorpio: 80, pisces: 75, aries: 50, gemini: 50, leo: 55, libra: 60, aquarius: 45, sagittarius: 55 },
  gemini: { libra: 90, aquarius: 85, leo: 70, aries: 60, sagittarius: 65, taurus: 50, cancer: 55, virgo: 60, scorpio: 55, capricornus: 50, pisces: 55 },
  cancer: { scorpio: 95, pisces: 90, taurus: 75, virgo: 80, capricornus: 70, aries: 55, gemini: 55, leo: 60, libra: 55, aquarius: 60, sagittarius: 55 },
  leo: { aries: 85, sagittarius: 90, gemini: 70, aquarius: 75, cancer: 60, taurus: 55, virgo: 60, libra: 75, scorpio: 65, capricornus: 50, pisces: 65 },
  virgo: { taurus: 85, capricornus: 90, cancer: 80, scorpio: 80, gemini: 60, aries: 55, leo: 60, libra: 70, aquarius: 65, sagittarius: 55, pisces: 70 },
  libra: { gemini: 90, aquarius: 85, leo: 75, aries: 60, sagittarius: 65, taurus: 60, cancer: 55, virgo: 70, scorpio: 65, capricornus: 50, pisces: 70 },
  scorpio: { cancer: 95, pisces: 90, taurus: 80, virgo: 80, aries: 70, gemini: 55, leo: 65, libra: 65, aquarius: 65, capricornus: 75, sagittarius: 60 },
  sagittarius: { aries: 80, leo: 90, gemini: 65, aquarius: 75, taurus: 55, cancer: 55, virgo: 55, libra: 65, scorpio: 60, capricornus: 60, pisces: 60 },
  capricornus: { taurus: 90, virgo: 90, scorpio: 75, cancer: 70, aries: 50, gemini: 50, leo: 50, libra: 50, aquarius: 60, sagittarius: 60, pisces: 70 },
  aquarius: { gemini: 85, libra: 85, leo: 75, aries: 65, sagittarius: 75, taurus: 45, cancer: 60, virgo: 65, scorpio: 65, capricornus: 60, pisces: 70 },
  pisces: { cancer: 90, scorpio: 90, taurus: 75, virgo: 70, capricornus: 70, aries: 65, gemini: 55, leo: 65, libra: 70, aquarius: 70, sagittarius: 60 }
};

const horoscopeMessages = {
  aries: {
    love: 'Seu carisma está em alta hoje. Uma conversa inesperada pode levar a conexões profundas.',
    career: 'Sua energia inovadora chama atenção dos superiores. Não tenha medo de apresentar suas ideias.',
    health: 'Seu corpo pede movimento! Exercícios intensos vão trazer bem-estar hoje.',
    finances: 'Uma oportunidade de investimento surge, mas tenha cuidado com decisões apressadas.'
  },
  taurus: {
    love: 'A estabilidade emocional atrai pessoas confiáveis. Demonstre mais seus sentimentos.',
    career: 'Seu esforço paciente está sendo notado. Continue persistente em seus objetivos.',
    health: 'Sua resistência física está boa, mas preste atenção à sua alimentação hoje.',
    finances: 'Economias estão crescendo gradualmente. Continue assim!'
  },
  gemini: {
    love: 'Comunicação clara é a chave hoje. Diga o que sente sem rodeios.',
    career: 'Sua criatividade está em plena forma. Novos projetos aguardam sua participação.',
    health: 'Seu cérebro está hiperativo. Meditação pode ajudá-lo a encontrar equilíbrio.',
    finances: 'Ganhos inesperados podem aparecer, mas não conte com eles ainda.'
  },
  cancer: {
    love: 'Seus laços familiares ficam mais fortes. Passar tempo com entes queridos traz paz.',
    career: 'Intuição é sua aliada hoje. Confie em seus instintos nas decisões.',
    health: 'Emoções intensas podem afetar seu bem-estar. Cuide de seu estado mental.',
    finances: 'Gastos com o lar podem surgir. Planeje-se para essas despesas.'
  },
  leo: {
    love: 'Seu magnetismo pessoal está irresistível. Use-o com sabedoria e generosidade.',
    career: 'Destaque-se! Sua estrela brilha mais forte hoje. Receba os holofotes com graça.',
    health: 'Energia está em alta! Porém não se esgote em atividades excessivas.',
    finances: 'Despesas com luxo podem chamar sua atenção. Modere seus gastos.'
  },
  virgo: {
    love: 'Detalhe é seu superpoder. Surpreenda quem você ama com atenção aos pequenos gestos.',
    career: 'Organização traz resultados concretos. Continue seu trabalho meticuloso.',
    health: 'Rotina de exercícios está trazendo resultados. Não abandone agora.',
    finances: 'Análise cuidadosa de contas traz economia. Continue auditando seus gastos.'
  },
  libra: {
    love: 'Equilíbrio entre dar e receber é essencial. Não se esqueça de suas próprias necessidades.',
    career: 'Diplomacia conquista pontos hoje. Mediação pode ser sua grande contribuição.',
    health: 'Artes e beleza trazem bem-estar. Inclua mais estética em sua vida.',
    finances: 'Parcerias financeiras podem ser vantajosas. Explore essa via.'
  },
  scorpio: {
    love: 'Profundidade emocional atrai paixão intensa. Abrace vulnerabilidade sem medo.',
    career: 'Investigação e pesquisa trazem insights valiosos. Mergulhe fundo.',
    health: 'Sua energia interior está poderosa. Use-a com propósito.',
    finances: 'Transformações financeiras estão em progresso. Confie no processo.'
  },
  sagittarius: {
    love: 'Aventura compartilhada é mais divertida. Convide seu parceiro para novas experiências.',
    career: 'Expansão de horizontes traz crescimento. Não tenha medo de explorar.',
    health: 'Ar livre renova sua energia. Saia e explore o mundo hoje.',
    finances: 'Investimentos em experiências trazem mais retorno que em bens materiais.'
  },
  capricornus: {
    love: 'Responsabilidade compartilhada fortalece laços. Trabalho em equipe traz resultados.',
    career: 'Disciplina é sua força. Continue avançando passo a passo hacia suas metas.',
    health: 'Rotina estruturada traz estabilidade. Não abandone seus hábitos saudáveis.',
    finances: 'Economia de longo prazo está funcionando. Continue investindo constantemente.'
  },
  aquarius: {
    love: 'Originalidade atrai pessoas únicas. Abrace sua estranheza com orgulho.',
    career: 'Ideias inovadoras têm grande potencial. Sua visão única é sua vantagem.',
    health: 'Pensamento coletivo pode ajudá-lo a encontrar propósito. Envolva-se em causas sociais.',
    finances: 'Tecnologia e inovação podem trazer ganhos. Fique atento às tendências.'
  },
  pisces: {
    love: 'Empatia é seu superpoder. Suas habilidades de sentir os outros podem ajudar muitas pessoas.',
    career: 'Criatividade e espiritualidade guiam suas melhores ideias. Confie em sua intuição.',
    health: 'Conexão spiritually brings inner peace. Pratique meditação ou atividades contemplativas.',
    finances: 'Receitas de fontes criativas são prováveis. Explore seu lado artístico.'
  }
};

const planetInfo = {
  Marte: {
    description: 'Planeta da ação, energia e conquista. Traz dinamismo, coragem e iniciativa.',
    symbol: '♂',
    color: '#e74c3c'
  },
  'Vênus': {
    description: 'Planeta do amor, beleza e harmonia. Traz charme, diplomacia e apreço pela arte.',
    symbol: '♀',
    color: '#e91e63'
  },
  'Mercúrio': {
    description: 'Planeta da comunicação e mente. Traz inteligência, curiosidade e agility mental.',
    symbol: '☿',
    color: '#f1c40f'
  },
  'Lua': {
    description: 'Satélite das emoções e intuição. Traz sensibilidade, criatividade e conexão com o lar.',
    symbol: '☽',
    color: '#bdc3c7'
  },
  'Sol': {
    description: 'Astro rei da identidade e propósito. Traz vitalidade, confiança e brilho pessoal.',
    symbol: '☉',
    color: '#f39c12'
  },
  'Júpiter': {
    description: 'Planeta da expansão e sorte. Traz otimismo, sabedoria e oportunidades.',
    symbol: '♃',
    color: '#3498db'
  },
  'Saturno': {
    description: 'Planeta da disciplina e karma. Traz responsabilidade, perseverança e lições de vida.',
    symbol: '♄',
    color: '#2c3e50'
  },
  'Urano': {
    description: 'Planeta da inovação e liberdade. Traz originalidade, rebeldia e progresso.',
    symbol: '♅',
    color: '#00bcd4'
  },
  'Netuno': {
    description: 'Planeta da espiritualidade e sonhos. Traz intuição, compaixão e visão artística.',
    symbol: '♆',
    color: '#9b59b6'
  },
  'Plutão': {
    description: 'Planeta da transformação e poder. Traz intensidade, regeneração e mistério.',
    symbol: '♇',
    color: '#8e44ad'
  }
};

export function getSignByDate(date) {
  if (!date) return null;

  const month = date.getMonth() + 1;
  const day = date.getDate();

  for (const sign of signs) {
    const [startMonth, startDay] = sign.dateRange.start;
    const [endMonth, endDay] = sign.dateRange.end;

    if (sign.id === 'capricornus') {
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return sign;
      }
    } else {
      if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
        return sign;
      }
    }
  }

  return null;
}

export function getSignById(id) {
  return signs.find(s => s.id === id) || null;
}

export function getCompatibilityScore(sign1Id, sign2Id) {
  if (!sign1Id || !sign2Id) return null;
  return compatibilityMatrix[sign1Id]?.[sign2Id] ?? 60;
}

export function generateLuckyNumbers(date, signId) {
  if (!date || !signId) return [];

  const seed = date.getTime() + signId.charCodeAt(0) * 1000 + date.getDate() * 100;

  const seededRandom = (seed) => {
    const x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  };

  let seedValue = seed;
  const numbers = new Set();

  while (numbers.size < 5) {
    seedValue++;
    const randomNum = Math.floor(seededRandom(seedValue) * 60) + 1;
    if (!numbers.has(randomNum)) {
      numbers.add(randomNum);
    }
  }

  return Array.from(numbers).sort((a, b) => a - b);
}

export function getDailyHoroscope(signId, date) {
  if (!signId || !date) return null;
  return horoscopeMessages[signId] || null;
}

export function getCompatibilityDescription(score) {
  if (score >= 85) return 'Conexão profunda e natural. Vocês se entendem INSTANTANEAMENTE!';
  if (score >= 75) return 'Ótima compatibilidade! Há muita sintonia entre vocês.';
  if (score >= 65) return 'Boa compatibilidade com potencial para crescimento juntos.';
  if (score >= 55) return 'Compatibilidade moderada. Requer esforço de ambos os lados.';
  if (score >= 45) return 'Desafios existem, mas podem ser superados com comunicação.';
  return 'Pontos de vista muito diferentes. Respeito mútuo é essencial.';
}

export function getElementName(element) {
  const names = {
    fire: 'Fogo',
    earth: 'Terra',
    air: 'Ar',
    water: 'Água'
  };
  return names[element] || element;
}

export function getModalityName(modality) {
  const names = {
    cardinal: 'Cardinal',
    fixed: 'Fixo',
    mutable: 'Mutável'
  };
  return names[modality] || modality;
}

export { planetInfo };

export function getMoonPhase(date = new Date()) {
  const synodicMonth = 29.53059;
  const reference = new Date('2000-01-06T18:14:00Z');

  const diffTime = date.getTime() - reference.getTime();
  const diffDays = diffTime / (1000 * 60 * 60 * 24);
  const age = diffDays % synodicMonth;
  const phase = age / synodicMonth;

  let phaseName, emoji, description;

  if (phase < 0.0625 || phase >= 0.9375) {
    phaseName = 'Lua Nova';
    emoji = '🌑';
    description = 'Hora de novos começos e intenções. Ideal para planejar e plantar sementes.';
  } else if (phase < 0.1875) {
    phaseName = 'Crescente';
    emoji = '🌒';
    description = 'Energia de crescimento e ação. Perfeito para iniciar projetos.';
  } else if (phase < 0.3125) {
    phaseName = 'Quarto Crescente';
    emoji = '🌓';
    description = 'Momento de decis��o e progresso. Sua determinação aumenta.';
  } else if (phase < 0.4375) {
    phaseName = 'Gibosa Crescente';
    emoji = '🌔';
    description = 'Energia acumulada está no auge. Excelente para expandir ideias.';
  } else if (phase < 0.5625) {
    phaseName = 'Lua Cheia';
    emoji = '🌕';
    description = 'Pico de energia e manifestação! Perfeito para celebrações e realizações.';
  } else if (phase < 0.6875) {
    phaseName = 'Gibosa Minguante';
    emoji = '🌖';
    description = 'Hora de avaliar e ajustar. Releia seus projetos e faça correções.';
  } else if (phase < 0.8125) {
    phaseName = 'Quarto Minguante';
    emoji = '🌗';
    description = 'Energia de release e perdão. Perfeito para deixar ir o que não serve mais.';
  } else {
    phaseName = 'Minguante';
    emoji = '🌘';
    description = 'Período de introspecção e descanso. Cuide de si mesmo.';
  }

  return {
    name: phaseName,
    emoji,
    description,
    illumination: Math.round(Math.abs(0.5 - phase) * 2 * 100)
  };
}

const weeklyForecasts = {
  aries: {
    theme: 'Ação e Iniciativa',
    advice: 'Esta semana traz oportunidades para liderar novos projetos. Sua energia está alta, use-a com sabedoria.',
    focus: ['Novos projetos', 'Liderança', 'Assertividade']
  },
  taurus: {
    theme: 'Estabilidade e Prazer',
    advice: 'Foco em assuntos financeiros e relacionamentos. Sua persistência trará resultados concretos.',
    focus: ['Finanças', 'Relacionamentos', 'Bem-estar']
  },
  gemini: {
    theme: 'Comunicação e Conexões',
    advice: 'Conversas importantes podem surgir. Sua agilidade mental será sua maior aliada.',
    focus: ['Comunicação', 'Networking', 'Aprendizado']
  },
  cancer: {
    theme: 'Lar e Emoções',
    advice: 'Conexão com a família e lar será central. Cuide de seus entes queridos.',
    focus: ['Família', 'Interiorização', 'Cuidado']
  },
  leo: {
    theme: 'Expressão e Criatividade',
    advice: 'Sua criatividade brilha mais forte. Mostre seu talento ao mundo.',
    focus: ['Criatividade', 'Destaque', 'Generosidade']
  },
  virgo: {
    theme: 'Ordem e Análise',
    advice: 'Detalhes importam mais que nunca. Sua precisão trará sucesso em projetos importantes.',
    focus: ['Trabalho', 'Saúde', 'Organização']
  },
  libra: {
    theme: 'Equilíbrio e Parcerias',
    advice: 'Relações equilibradas são a chave. Busque harmonia em todas as interações.',
    focus: ['Parcerias', 'Justiça', 'Arte']
  },
  scorpio: {
    theme: 'Transformação Profunda',
    advice: 'Mudanças intensas estão em curso. Abrace a transformação com coragem.',
    focus: ['Regeneração', 'Intuição', 'Poder pessoal']
  },
  sagittarius: {
    theme: 'Aventura e Expansão',
    advice: 'Novos horizontes se abrem para você. Viajem, aprendam, explorem.',
    focus: ['Viagens', 'Estudos', 'Otimismo']
  },
  capricornus: {
    theme: 'Disciplina e Metas',
    advice: 'Continue firme em seus objetivos de longo prazo. Seu esforço está compensando.',
    focus: ['Carreira', 'Responsabilidade', 'Ambição']
  },
  aquarius: {
    theme: 'Inovação e Humanitarismo',
    advice: 'Suas ideias únicas podem mudar perspectivas. Envolva-se em causas sociais.',
    focus: ['Inovação', 'Amizades', 'Propósito coletivo']
  },
  pisces: {
    theme: 'Espiritualidade e Sonhos',
    advice: 'Sua intuição está muito forte. Confie nos seus sonhos e visões.',
    focus: ['Espiritualidade', 'Criatividade', 'Empatia']
  }
};

export function getWeeklyForecast(signId, weekOffset = 0) {
  const forecast = weeklyForecasts[signId] || weeklyForecasts.aries;

  return {
    ...forecast,
    weekLabel: getWeekLabel(weekOffset)
  };
}

function getWeekLabel(weekOffset) {
  const now = new Date();
  const startOfWeek = new Date(now);
  startOfWeek.setDate(now.getDate() - now.getDay() + (weekOffset * 7));

  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(startOfWeek.getDate() + 6);

  const options = { day: 'numeric', month: 'short' };
  return `${startOfWeek.toLocaleDateString('pt-BR', options)} - ${endOfWeek.toLocaleDateString('pt-BR', options)}`;
}