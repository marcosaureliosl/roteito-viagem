export interface Activity {
  id: string;
  time: string;
  title: string;
  description?: string;
  location?: string;
  notes?: string[];
  isHighlight?: boolean;
  imageUrl?: string;
  mapUrl?: string;
}

export interface DayItinerary {
  id: string;
  date: string;
  title: string;
  description?: string;
  activities: Activity[];
  notes?: string[];
  tags?: string[];
}

export const itineraryData: DayItinerary[] = [
  {
    id: 'day1',
    date: '2025-11-20',
    title: 'Chegada em Miami',
    description: 'Chegada no aeroporto de Miami e viagem para Orlando',
    activities: [
      {
        id: 'arrival',
        time: '17:00',
        title: 'Chegada no Aeroporto de Miami (MIA)',
        description: 'Voo de chegada na quinta-feira',
        location: 'Miami International Airport (MIA)'
      },
      {
        id: 'car-rental',
        time: '18:00',
        title: 'Retirada do carro',
        description: 'Empresa: AVIS BUDGET GROUP',
        location: 'Aeroporto de Miami',
        notes: ['Documentação necessária: CNH internacional, cartão de crédito no nome do condutor']
      },
      {
        id: 'departure-miami',
        time: '20:30',
        title: 'Saída de Miami para Orlando',
        description: 'Início da viagem pela Florida\'s Turnpike',
        notes: [
          'Rota: Florida\'s Turnpike',
          'Pedágios: aproximadamente $23 no total',
          'Verificar formas de pagamento de pedágios'
        ]
      },
      {
        id: 'dinner-stop',
        time: '22:00',
        title: 'Parada para jantar',
        description: 'Jantar no meio do caminho',
        notes: [
          'Opção 1: Pompano Beach Service Plaza',
          'Opção 2: West Palm Beach Service Plaza',
          'Obs.: Comprar algo para o café da manhã'
        ]
      },
      {
        id: 'arrival-home',
        time: '00:30',
        title: 'Chegada na acomodação',
        description: 'Storey Lake Home - 4807 Memories Ln, Kissimmee',
        location: 'Storey Lake Home, SLT4 4807M, 4807 Memories Ln, Kissimmee',
        notes: [
          'Recebemos um voucher com a Fernanda',
          'Entrada da casa conforme instruções do voucher'
        ]
      }
    ]
  },
  {
    id: 'day2',
    date: '2025-11-21',
    title: 'Sexta-feira - Compras e Disney Springs',
    description: 'Primeiro dia completo: café da manhã, compras e passeio no Disney Springs',
    activities: [
      {
        id: 'breakfast',
        time: '08:00',
        title: 'Café da manhã',
        description: 'Café da manhã na casa',
        notes: [
          'Cada casal levar: 2 pães de cuscuz / 2 cafés',
          'Itens trazidos do Brasil'
        ]
      },
      {
        id: 'shopping',
        time: '10:00',
        title: 'Compras para a viagem',
        description: 'Compras para sexta, sábado e domingo',
        location: 'Dollar Tree e Walmart Supercenter',
        notes: [
          'Dollar Tree - itens básicos e souvenirs',
          'Walmart Supercenter - 3250 Vineland Rd, Kissimmee, FL 34746',
          'Comprar mantimentos para os próximos dias'
        ]
      },
      {
        id: 'lunch',
        time: '13:00',
        title: 'Almoço em casa',
        description: 'Descanso após as compras'
      },
      {
        id: 'disney-springs',
        time: '16:00',
        title: 'Disney Springs - Passeio da tarde',
        description: 'Primeiro passeio nos parques Disney',
        location: 'Disney Springs',
        notes: [
          'Distância: 25 minutos da acomodação',
          'Área de compras, restaurantes e entretenimento',
          'Entrada gratuita'
        ],
        isHighlight: true
      },
      {
        id: 'dinner',
        time: '19:30',
        title: 'Jantar no Chicken Guy!',
        description: 'Restaurante do chef Guy Fieri',
        location: 'Chicken Guy! - Disney Springs',
        isHighlight: true
      },
      {
        id: 'return',
        time: '21:30',
        title: 'Retorno para casa',
        description: 'Fim do primeiro dia de atividades'
      }
    ]
  },
  {
    id: 'day3',
    date: '2025-11-22',
    title: 'Magic Kingdom',
    description: 'Dia inteiro no parque mais mágico da Disney',
    tags: ['parque', 'disney', 'magic-kingdom'],
    activities: [
      {
        id: 'arrival-parking',
        time: '06:45',
        title: 'Estacionamento (TTC)',
        description: 'Chegar cedo para aproveitar o dia',
        location: 'Transportation and Ticket Center'
      },
      {
        id: 'virtual-queue',
        time: '07:00',
        title: 'Fila virtual - My Disney Experience',
        description: 'Reservar atrações pelo app',
        notes: [
          'Tron Lightcycle Run',
          'Tiana\'s Bayou Adventure'
        ]
      },
      {
        id: 'park-gates',
        time: '07:30',
        title: 'Portões do parque',
        description: 'Aguardar abertura oficial'
      },
      {
        id: 'park-entry',
        time: '08:00',
        title: 'Entrada pelo Monorail',
        description: 'Entrada no Magic Kingdom',
        notes: ['📸 Checkpoint 1: Foto na entrada da Main Street U.S.A. com o Castelo da Cinderela ao fundo']
      },
      {
        id: 'tomorrowland-morning',
        time: '08:15',
        title: '🚀 Manhã - Tomorrowland',
        description: 'Começar pelas atrações mais populares',
        notes: [
          'Tron Lightcycle Run (fila virtual)',
          'Space Mountain',
          'Buzz Lightyear\'s Space Ranger Spin',
          '📸 Checkpoint 2: Foto com Buzz Lightyear',
          'PeopleMover (opcional)'
        ],
        isHighlight: true
      },
      {
        id: 'fantasyland',
        time: '10:00',
        title: '👑 Fantasyland',
        description: 'Área das princesas e contos de fada',
        notes: [
          'Seven Dwarfs Mine Train',
          'Peter Pan\'s Flight',
          'Under the Sea – Journey of the Little Mermaid',
          '📸 Checkpoint 3: Foto com Ariel no Ariel\'s Grotto',
          'The Many Adventures of Winnie the Pooh',
          'Dumbo the Flying Elephant (opcional)',
          '📸 Checkpoint 4: Foto no Dumbo voando',
          'Mad Tea Party (opcional)',
          'it\'s a small world (opcional)',
          '📸 Checkpoint 5: Foto atrás do Castelo da Cinderela (lado Fantasyland)',
          '📸 Checkpoint 6: Foto no Carrossel Prince Charming'
        ],
        isHighlight: true
      },
      {
        id: 'adventureland',
        time: '11:30',
        title: '🏴‍☠️ Adventureland',
        description: 'Aventuras piratas e selva',
        notes: [
          'Pirates of the Caribbean',
          '📸 Checkpoint 7: Entrada com cenário pirata + Jack Sparrow'
        ]
      },
      {
        id: 'frontierland',
        time: '12:30',
        title: '🌄 Frontierland',
        description: 'Velho Oeste americano',
        notes: [
          'Big Thunder Mountain Railroad',
          '📸 Checkpoint 8: Foto no cenário Velho Oeste',
          'Tiana\'s Bayou Adventure (fila virtual ou Lightning Lane)',
          '📸 Checkpoint 9: Foto na frente da nova atração da Tiana'
        ],
        isHighlight: true
      },
      {
        id: 'lunch',
        time: '13:00',
        title: '🍔 Almoço',
        description: 'Columbia Harbour House',
        location: 'Liberty Square'
      },
      {
        id: 'liberty-square',
        time: '14:00',
        title: '🏰 Liberty Square',
        description: 'América colonial',
        notes: [
          'Haunted Mansion',
          '📸 Checkpoint 10: Foto no portão da Mansão Assombrada'
        ]
      },
      {
        id: 'parade',
        time: '15:00',
        title: 'Festival of Fantasy Parade',
        description: 'Desfile dos personagens Disney',
        location: 'Liberty Square',
        notes: ['📸 Checkpoint 11: Fotos dos personagens (Mickey, princesas, Malévola dragão)'],
        isHighlight: true
      },
      {
        id: 'dinner',
        time: '18:00',
        title: 'Jantar rápido',
        description: 'Casey\'s Corner',
        location: 'Main Street U.S.A.'
      },
      {
        id: 'fireworks-prep',
        time: '19:15',
        title: 'Preparação para os fogos',
        description: 'Chegar 45 minutos antes do show',
        notes: [
          'Encontrar um bom local para assistir',
          'Sugestão: sentar no chão estilo piquenique'
        ]
      },
      {
        id: 'fireworks',
        time: '20:00',
        title: '🌙 Show de fogos no Castelo',
        description: 'Encerramento mágico do dia',
        notes: ['📸 Checkpoint 12: Foto sentados no chão, castelo iluminado ao fundo'],
        isHighlight: true
      },
      {
        id: 'exit',
        time: '21:00',
        title: 'Saída pelo Ferry',
        description: 'Retorno ao estacionamento',
        notes: ['📸 Checkpoint 13: Vista noturna do parque pelo lago']
      }
    ]
  },
  {
    id: 'day4',
    date: '2025-11-23',
    title: 'SeaWorld Orlando',
    description: 'Domingo no parque marinho com All-Day Dining',
    tags: ['parque', 'seaworld', 'animais-marinhos'],
    activities: [
      {
        id: 'wake-up',
        time: '06:00',
        title: 'Acordar',
        description: 'Preparação para o dia no SeaWorld'
      },
      {
        id: 'departure-mass',
        time: '07:10',
        title: 'Saída para Missa',
        description: 'Deslocamento para a igreja'
      },
      {
        id: 'mass',
        time: '08:00',
        title: 'Missa',
        description: 'Participação na missa dominical',
        location: '8300 Vineland Ave, Orlando, FL 32821, EUA'
      },
      {
        id: 'park-arrival',
        time: '09:30',
        title: 'Chegada no SeaWorld',
        description: 'Entrada no parque, pegar mapa e organizar fila virtual dos shows',
        location: 'SeaWorld Orlando',
        notes: ['📸 Checkpoint 1: Foto na entrada do parque com o globo do SeaWorld'],
        isHighlight: true
      },
      {
        id: 'pipeline',
        time: '10:00',
        title: '🎢 Pipeline',
        description: 'Montanha-russa de lançamento (altura mínima: 138cm)',
        notes: ['📸 Checkpoint 2: Foto no letreiro da Pipeline (atração nova e icônica)'],
        isHighlight: true
      },
      {
        id: 'ice-breaker',
        time: '10:30',
        title: '🎢 Ice Breaker',
        description: 'Montanha-russa temática ártica (altura mínima: 121cm)',
        notes: ['📸 Checkpoint 3: Foto com os trilhos laranjas ao fundo']
      },
      {
        id: 'wild-arctic',
        time: '11:00',
        title: '🐻‍❄️ Wild Arctic',
        description: 'Simulação + animais árticos (altura mínima: 107cm)',
        notes: ['📸 Checkpoint 4: Fotos com belugas e morsas no aquário']
      },
      {
        id: 'orca-encounter',
        time: '11:30',
        title: '🐋 Orca Encounter',
        description: 'Show das orcas - imperdível!',
        notes: ['📸 Checkpoint 5: Foto do grupo nas arquibancadas + orcas saltando no fundo'],
        isHighlight: true
      },
      {
        id: 'lunch-all-day',
        time: '12:30',
        title: '🍔 Almoço - All-Day Dining',
        description: 'Primeira refeição do plano All-Day Dining',
        notes: [
          'Restaurantes disponíveis:',
          '• Voyager\'s Smokehouse',
          '• Seafire Grill', 
          '• Lakeside Grill',
          '• Waterway Grill Café',
          '• Altitude Burgers',
          '• Expedition Café (Antártica)',
          '• Captain Pete\'s Island Eats (Sesame Street Land)',
          '📸 Checkpoint 13: Foto com a bandeja farta do All-Day Dining'
        ]
      },
      {
        id: 'infinity-falls',
        time: '13:30',
        title: '💦 Infinity Falls',
        description: 'Atração de água com quedas (altura mínima: 107cm)',
        notes: ['📸 Checkpoint 6: Foto no bote molhado saindo da queda']
      },
      {
        id: 'mako',
        time: '14:15',
        title: '🦈 Mako',
        description: 'Montanha-russa mais alta da Flórida (altura mínima: 138cm)',
        notes: ['📸 Checkpoint 7: Foto no letreiro do tubarão na entrada'],
        isHighlight: true
      },
      {
        id: 'shark-encounter',
        time: '15:00',
        title: '🦈 Shark Encounter',
        description: 'Túnel de tubarões - experiência única',
        notes: ['📸 Checkpoint 8: Foto dentro do túnel de vidro com tubarões ao redor']
      },
      {
        id: 'dolphin-show',
        time: '15:00',
        title: '🐬 Dolphin Adventures',
        description: 'Show dos golfinhos (horários: 10h, 11h30, 13h, 15h, 17h)',
        notes: ['📸 Checkpoint 11: Foto dos golfinhos saltando no show'],
        isHighlight: true
      },
      {
        id: 'penguin-trek',
        time: '16:00',
        title: '🐧 Penguin Trek',
        description: 'Atração familiar com tema antártico',
        notes: ['📸 Checkpoint 9: Foto na frente do carrinho da atração']
      },
      {
        id: 'antarctica',
        time: '16:30',
        title: '🐧 Antarctica - Penguin Encounter',
        description: 'Encontro com pinguins reais',
        notes: ['📸 Checkpoint 10: Foto com pinguins reais atrás do vidro']
      },
      {
        id: 'manta',
        time: '17:00',
        title: '🐠 Manta',
        description: 'Montanha-russa voadora (altura mínima: 138cm)',
        notes: ['📸 Checkpoint 12: Foto no letreiro/asa da manta na entrada']
      },
      {
        id: 'dinner-all-day',
        time: '18:00',
        title: '🍽️ Jantar - All-Day Dining',
        description: 'Segunda refeição do plano All-Day Dining',
        notes: ['Escolher um dos restaurantes participantes']
      },
      {
        id: 'extras',
        time: '19:00',
        title: '✨ Atrações Extras (se houver tempo)',
        description: 'Atrações adicionais conforme disponibilidade',
        notes: [
          '🐙 Kraken → 📸 letreiro icônico',
          '🌊 Journey to Atlantis → 📸 saída da queda d\'água',
          '🦭 Sea Lion Show → 📸 foto com os leões-marinhos',
          '🎪 Sesame Street Land',
          '📸 Checkpoint 14: Foto com Elmo e Cookie Monster'
        ]
      },
      {
        id: 'park-exit',
        time: '20:30',
        title: 'Saída do parque',
        description: 'Fim do dia no SeaWorld Orlando'
      }
    ]
  },
  {
    id: 'day5',
    date: '2025-11-24',
    title: 'Segunda-feira - Dia Livre/Light',
    description: 'Dia de compras e descanso com foco em outlets e eletrônicos',
    tags: ['compras', 'descanso', 'outlets'],
    activities: [
      {
        id: 'breakfast',
        time: '08:00',
        title: 'Café da manhã',
        description: 'Café da manhã tranquilo na casa'
      },
      {
        id: 'morning-shopping',
        time: '09:30',
        title: '🛍️ Compras Matinais - Outlets Kissimmee',
        description: 'Compras leves em lojas de departamento',
        location: 'Região de Kissimmee - Irlo Bronson',
        notes: [
          '🏪 Ross Dress for Less - 5298 W Irlo Bronson Memorial Hwy',
          '🏪 Burlington Stores - 1217 W Irlo Bronson Memorial Hwy', 
          '🏪 TJ Maxx - 2601 W Vine St',
          'Todas as lojas ficam próximas entre si',
          'Foco em roupas e acessórios com desconto'
        ],
        isHighlight: true
      },
      {
        id: 'lunch-home',
        time: '12:30',
        title: '🏠 Almoço em casa',
        description: 'Retorno para casa e descanso',
        notes: [
          'Tempo para relaxar após as compras',
          'Organizar as compras da manhã',
          'Preparação para a tarde'
        ]
      },
      {
        id: 'rest-time',
        time: '13:30',
        title: '😴 Tempo de descanso',
        description: 'Relaxar na casa - cochilo opcional'
      },
      {
        id: 'afternoon-electronics',
        time: '15:00',
        title: '📱 Tarde - Eletrônicos & Games',
        description: 'Compras de tecnologia na região Florida Mall/Millenia',
        location: 'Região Florida Mall/Millenia',
        notes: [
          '🖥️ Best Buy - 8350 S Orange Blossom Trl, Orlando',
          '🍎 Apple Store - 8001 S Orange Blossom Trl, Orlando (Florida Mall)',
          '🎮 GameStop - 4670 Millenia Plaza Way, Orlando',
          'Região com várias opções de eletrônicos',
          'Aproveitar para comparar preços'
        ],
        isHighlight: true
      },
      {
        id: 'snack-break',
        time: '17:00',
        title: '☕ Lanche da tarde',
        description: 'Pausa para lanche nos shoppings'
      },
      {
        id: 'optional-evening',
        time: '18:30',
        title: '🛒 Opcional - Compras Noturnas',
        description: 'Se sobrar tempo - lojas rápidas em Kissimmee',
        notes: [
          '💰 Prime Deals Kissimmee - 1702 N Main St',
          '🌳 Dollar Tree - 2316 W Vine St', 
          '🎯 Five Below - 3211 Vineland Rd',
          'Lojas rápidas, baratas e boas para lembrancinhas',
          'Opcional conforme energia do grupo'
        ]
      },
      {
        id: 'dinner',
        time: '19:30',
        title: '🍕 Jantar - Cicis Pizza',
        description: 'Pizza buffet em Kissimmee',
        location: '5035 W Irlo Bronson Memorial Hwy, Kissimmee, FL 34746',
        notes: [
          'Horário: Segunda a domingo 11h às 22h',
          'Distância: apenas 10 minutos do resort',
          'Buffet de pizza com várias opções',
          'Ótima opção para grupo grande'
        ],
        isHighlight: true
      },
      {
        id: 'return-home',
        time: '21:00',
        title: '🏠 Retorno para casa',
        description: 'Fim do dia de compras e descanso',
        notes: [
          'Organizar as compras do dia',
          'Preparação para os próximos dias de parques'
        ]
      }
    ]
  },
  {
    id: 'day6',
    date: '2025-11-25',
    title: 'Epic Universe',
    description: 'O mais novo parque da Universal Studios com mundos temáticos incríveis',
    tags: ['parque', 'universal', 'epic-universe'],
    activities: [
      {
        id: 'wake-up',
        time: '07:00',
        title: 'Acordar',
        description: 'Preparação para o Epic Universe'
      },
      {
        id: 'departure',
        time: '08:30',
        title: 'Saída para o parque',
        description: 'Deslocamento para o Epic Universe'
      },
      {
        id: 'park-arrival',
        time: '09:00',
        title: 'Chegada no Epic Universe',
        description: 'Chegada 30 minutos antes da abertura',
        location: 'Epic Universe',
        notes: ['📸 Checkpoint 1: Foto na entrada do Epic Universe (letreiro)'],
        isHighlight: true
      },
      {
        id: 'super-nintendo-world',
        time: '09:30',
        title: '🌟 Super Nintendo World - Mundo Mario',
        description: 'Primeira área temática - mundo do Mario',
        notes: [
          '🏎️ Mario Kart: Bowser\'s Challenge',
          '📸 Foto no castelo de Bowser',
          '🦕 Yoshi\'s Adventure',
          '📸 Foto no carrinho do Yoshi',
          '🐒 Donkey Kong Country – Mine Cart Madness',
          '📸 Foto na entrada com a estátua do Donkey Kong'
        ],
        isHighlight: true
      },
      {
        id: 'toadstool-cafe',
        time: '11:00',
        title: '☕ Café da manhã - Toadstool Café',
        description: 'Café temático do Super Nintendo World',
        notes: ['📸 Foto temática com a decoração do restaurante']
      },
      {
        id: 'nintendo-characters',
        time: '11:30',
        title: '👤 Meet & Greet - Personagens Nintendo',
        description: 'Encontro com personagens do Mario',
        notes: [
          'Mario, Luigi, Peach, Yoshi',
          '📸 Foto com cada personagem disponível'
        ]
      },
      {
        id: 'wizarding-world',
        time: '12:30',
        title: '✨ Wizarding World of Harry Potter',
        description: 'Mundo mágico inspirado em Animais Fantásticos',
        notes: [
          '🎪 Le Cirque Arcanus (cenário Animais Fantásticos)',
          '🏛️ Ministério da Magia',
          '⚡ Harry Potter and the Battle at the Ministry',
          '🏍️ Hagrid\'s Magical Creatures Motorbike Adventure',
          '📸 Checkpoint 2: Foto na entrada do Ministério da Magia',
          '📸 Checkpoint 3: Foto na moto do Hagrid'
        ],
        isHighlight: true
      },
      {
        id: 'lunch',
        time: '14:00',
        title: '🍽️ Almoço',
        description: 'Almoço em um dos restaurantes temáticos'
      },
      {
        id: 'how-to-train-dragon',
        time: '15:00',
        title: '🐉 How to Train Your Dragon - Mundo do Banguela',
        description: 'Área temática do filme Como Treinar o seu Dragão',
        notes: [
          '🎭 Show: The Untrainable Dragon',
          '🪂 Hiccup\'s Wing Gliders',
          '🏁 Dragon Races Rally',
          '🔥 Fire Drill (para crianças)',
          '🎢 Dragon Flight Coaster (principal)',
          '📸 Checkpoint 4: Foto com a estátua do Banguela e Soluço',
          '📸 Checkpoint 5: Foto nas asas da montanha-russa Wing Gliders'
        ],
        isHighlight: true
      },
      {
        id: 'dark-universe',
        time: '17:00',
        title: '🌑 Dark Universe',
        description: 'Mundo dos monstros clássicos da Universal',
        notes: [
          '🏰 Castelo de Frankenstein',
          '📸 Foto na frente do castelo gótico',
          '🐺 Curse of the Werewolf',
          '🌟 Stardust Racers',
          '📸 Checkpoint 6: Foto com os monstros clássicos (Drácula, Lobisomem, Frankenstein)'
        ]
      },
      {
        id: 'minions-land',
        time: '18:30',
        title: '💛 Minions Land',
        description: 'Área temática dos Minions',
        notes: [
          '😈 Despicable Me Minion Mayhem',
          '🔫 Villain-Con Minion Blast',
          '👶 KidZone e Family Rides',
          '📸 Checkpoint 8: Foto no letreiro com os Minions'
        ]
      },
      {
        id: 'dinner',
        time: '19:00',
        title: '🍽️ Jantar',
        description: 'Jantar no parque'
      },
      {
        id: 'night-show',
        time: '20:00',
        title: '🌙 Show noturno - Dark Universe',
        description: 'Show de projeções no Dark Universe',
        notes: [
          '📸 Checkpoint 7: Foto final no show de luzes',
          '📸 Checkpoint 9: Foto com os Minions iluminados à noite'
        ],
        isHighlight: true
      },
      {
        id: 'park-exit',
        time: '21:30',
        title: 'Saída do parque',
        description: 'Fim do dia no Epic Universe'
      }
    ]
  },
  {
    id: 'day7',
    date: '2025-11-26',
    title: 'Universal Studios',
    description: 'Parque clássico da Universal com filmes e personagens icônicos',
    tags: ['parque', 'universal', 'filmes'],
    activities: [
      {
        id: 'departure',
        time: '07:00',
        title: 'Saída para o parque',
        description: 'Deslocamento para Universal Studios'
      },
      {
        id: 'citywalk-arrival',
        time: '07:30',
        title: 'Chegada no CityWalk',
        description: 'Entrada pela área do CityWalk',
        notes: ['📸 Checkpoint 1: Foto no globo da Universal no CityWalk (clássico)'],
        isHighlight: true
      },
      {
        id: 'harry-potter-diagon',
        time: '08:00',
        title: '✨ Harry Potter - Beco Diagonal',
        description: 'Área mágica do Harry Potter',
        notes: [
          '📞 Telefone do Ministério da Magia (discar 62442)',
          '🏠 Casa da família Sirius Black – bater na porta',
          '🚌 Knight Bus (Nôitibus Andante)',
          '🏛️ Banco Gringotts',
          '🛍️ Lojas Weasley',
          '🚂 Estação King\'s Cross',
          '🐉 Dragão soltando fogo a cada 10 minutos',
          '🪄 Loja de varinhas Ollivanders',
          '🛤️ Travessa do Tranco',
          '⚡ Harry Potter and the escape from Gringotts'
        ],
        isHighlight: true
      },
      {
        id: 'harry-potter-photos',
        time: '09:30',
        title: '📸 Fotos Harry Potter',
        description: 'Sessão de fotos na área do Harry Potter',
        notes: [
          '📸 Checkpoint 2: Foto com o Nôitibus Andante e o cobrador',
          '📸 Checkpoint 3: Foto com o dragão cuspindo fogo em cima do Gringotts',
          '📸 Checkpoint 4: Foto escolhendo varinha em Ollivanders'
        ]
      },
      {
        id: 'mib-area',
        time: '11:00',
        title: '👽 Área MIB',
        description: 'Área dos Homens de Preto',
        notes: [
          '🛸 Men in Black: Alien Attack',
          '📸 Checkpoint 5: Foto com os agentes e aliens na entrada'
        ]
      },
      {
        id: 'simpsons-area',
        time: '12:00',
        title: '😂 Área dos Simpsons - Springfield',
        description: 'Área temática dos Simpsons',
        notes: [
          '🎢 The Simpsons Ride',
          '🌪️ Twirl \'n\' Hurl',
          '🍺 Duff Brewery',
          '🍻 Bar do Moe',
          '📸 Checkpoint 6: Foto com o Homer na frente da montanha-russa',
          '📸 Checkpoint 7: Foto tomando cerveja na Duff Brewery'
        ]
      },
      {
        id: 'lunch',
        time: '13:00',
        title: '🍽️ Almoço',
        description: 'Almoço no parque'
      },
      {
        id: 'other-attractions',
        time: '14:00',
        title: '🎬 Outras Atrações',
        description: 'Tour pelas atrações clássicas',
        notes: [
          '👽 E.T. Adventure → 📸 Foto na bicicleta com o E.T.',
          '🎭 The Bourne Stuntacular → 📸 Foto na entrada do show',
          '🏎️ Velozes e Furiosos → 📸 Foto com os carros de Toretto',
          '🏺 The Mummy → 📸 Foto na fachada da atração',
          '🤖 Transformers – 3D → 📸 Foto com Optimus Prime ou Bumblebee'
        ]
      },
      {
        id: 'minions-area-universal',
        time: '16:00',
        title: '💛 Área dos Minions',
        description: 'Área dos Minions no Universal Studios',
        notes: [
          '🎢 Hollywood Rip Ride Rockit',
          '😈 Despicable Me: Minion Mayhem',
          '🔫 Villain-Con Minion Blast',
          '📸 Checkpoint 8: Foto com os Minions gigantes na fachada'
        ]
      },
      {
        id: 'dinner',
        time: '18:00',
        title: '🍽️ Jantar',
        description: 'Jantar no parque'
      },
      {
        id: 'hogwarts-express',
        time: '19:30',
        title: '🌙 Encerramento - Hogwarts Express',
        description: 'Experiência final no trem do Harry Potter',
        notes: [
          '🚂 Hogwarts Express (ida e volta)',
          '📸 Checkpoint 9: Foto na Plataforma 9¾ com o carrinho atravessando a parede'
        ],
        isHighlight: true
      },
      {
        id: 'park-exit',
        time: '21:00',
        title: 'Saída do parque',
        description: 'Fim do dia no Universal Studios'
      }
    ]
  },
  {
    id: 'day8',
    date: '2025-11-27',
    title: 'Thanksgiving Day - Dia Livre e Início Black Friday',
    description: 'Dia de ação de graças com descanso, jantar no T-Rex e início das promoções Black Friday',
    tags: ['thanksgiving', 'descanso', 'black-friday', 't-rex'],
    activities: [
      {
        id: 'morning-prayer',
        time: '08:00',
        title: '🙏 Oração matinal',
        description: 'Rezar um terço',
        notes: ['Momento de gratidão no Thanksgiving Day']
      },
      {
        id: 'morning-rest',
        time: '09:00',
        title: '😴 Descanso na manhã',
        description: 'Relaxar no condomínio',
        notes: [
          'Aproveitar as facilidades do Storey Lake',
          'Piscina, área de lazer',
          'Manhã livre para recuperar energias'
        ]
      },
      {
        id: 'birthday-cake',
        time: '11:00',
        title: '🎂 Comprar bolo para aniversário do Teo',
        description: 'Compra do bolo de aniversário',
        location: 'Publix ou Walmart próximo',
        notes: [
          'Publix - 3221 Vineland Rd, Kissimmee, FL 34746',
          'Walmart Supercenter - 3250 Vineland Rd, Kissimmee, FL 34746',
          'Verificar opções de decoração personalizada'
        ]
      },
      {
        id: 'lunch-home',
        time: '13:00',
        title: '🏠 Almoço em casa',
        description: 'Almoço tranquilo na acomodação'
      },
      {
        id: 'rest-afternoon',
        time: '14:00',
        title: '💤 Descanso da tarde',
        description: 'Preparação para o jantar e compras noturnas'
      },
      {
        id: 'trex-dinner',
        time: '17:00',
        title: '🦕 Jantar no T-Rex Restaurant',
        description: 'Experiência gastronômica temática com dinossauros',
        location: 'T-Rex Restaurant - Disney Springs',
        notes: [
          'Endereço: 1676 E Buena Vista Dr, Lake Buena Vista, FL 32830',
          'Restaurante temático com dinossauros animatrônicos',
          'Ambiente familiar e divertido',
          'Reserva recomendada',
          '📸 Foto com os dinossauros do restaurante'
        ],
        isHighlight: true
      },
      {
        id: 'black-friday-prep',
        time: '19:30',
        title: '🛍️ Preparação Black Friday',
        description: 'Início das promoções de Thanksgiving Night',
        notes: [
          'Algumas lojas abrem às 17h-18h de quinta-feira',
          'Estratégia: chegar cedo para pegar lugar na fila',
          'Verificar horários específicos de cada loja'
        ]
      },
      {
        id: 'thursday-night-shopping',
        time: '20:00',
        title: '🌙 Thursday Night Sales',
        description: 'Primeira rodada de compras Black Friday',
        location: 'Outlets e grandes lojas',
        notes: [
          '🏪 Orlando Vineland Premium Outlets',
          '🏬 The Mall at Millenia',
          '🏬 Florida Mall', 
          '🖥️ Best Buy - eletrônicos',
          '🎯 Target - diversos produtos',
          '🛒 Walmart - geral',
          '👕 Ross, Marshalls - roupas',
          'Dica: chegar às 16h-17h para pegar fila das lojas populares'
        ],
        isHighlight: true
      },
      {
        id: 'return-home',
        time: '23:00',
        title: '🏠 Retorno para casa',
        description: 'Fim do primeiro dia de Black Friday',
        notes: [
          'Organizar as compras do dia',
          'Preparar estratégia para sexta-feira',
          'Descansar para o dia intenso de amanhã'
        ]
      }
    ]
  },
  {
    id: 'day9',
    date: '2025-11-28',
    title: 'Black Friday - Maratona de Compras',
    description: 'Dia completo de Black Friday com roteiro estratégico pelas melhores lojas',
    tags: ['black-friday', 'compras', 'eletrônicos', 'outlets'],
    activities: [
      {
        id: 'early-wake',
        time: '04:30',
        title: '⏰ Acordar cedo',
        description: 'Preparação para o dia de Black Friday',
        notes: [
          'Café rápido em casa',
          'Verificar lista de compras',
          'Conferir horários das lojas'
        ]
      },
      {
        id: 'best-buy-millenia',
        time: '05:00',
        title: '🖥️ Best Buy Millenia (Prioridade #1)',
        description: 'Loja de eletrônicos mais disputada',
        location: '4155 Millenia Blvd, Orlando, FL 32839',
        notes: [
          'Abertura: 5h00',
          'Chegar 4h45-5h00 para fila curta',
          'Foco: TVs, celulares, notebooks, games',
          'Promoções mais fortes do ano',
          '📸 Foto na fila ou com as promoções'
        ],
        isHighlight: true
      },
      {
        id: 'lake-buena-vista-outlets',
        time: '07:30',
        title: '🏪 Lake Buena Vista Factory Stores',
        description: 'Outlet alternativo, menos movimentado',
        location: '15657 S Apopka Vineland Rd, Orlando, FL 32821',
        notes: [
          'Abertura: 6h00',
          'Nike Clearance, Levi\'s, Reebok, Crocs',
          'Menos cheio que outros outlets',
          'Boas oportunidades em roupas esportivas'
        ]
      },
      {
        id: 'ross-marshalls',
        time: '09:30',
        title: '👕 Ross & Marshalls - International Drive',
        description: 'Caça de roupas, tênis, bolsas e perfumes',
        location: 'International Drive (lado a lado)',
        notes: [
          'Ross: 5295 International Dr, Orlando, FL 32819',
          'Marshalls: 5295 International Dr, Orlando, FL 32819',
          'Abertura: 6h00-7h00',
          'Grandes descontos em marcas famosas',
          'Foco: roupas, calçados, bolsas, perfumes'
        ]
      },
      {
        id: 'quick-lunch',
        time: '12:00',
        title: '🍽️ Almoço rápido',
        description: 'Refeição rápida para continuar as compras',
        location: 'International Drive',
        notes: [
          '🐔 Pollo Tropical - 5415 International Dr, Orlando, FL 32819',
          '🥡 Panda Express - 5250 International Dr, Orlando, FL 32819',
          'Opções rápidas e próximas às lojas'
        ]
      },
      {
        id: 'tj-maxx',
        time: '13:15',
        title: '🛍️ TJ Maxx',
        description: 'Moda, cosméticos, bolsas de grife e utensílios',
        location: 'Escolher unidade mais conveniente',
        notes: [
          'Opção 1: 397 N Alafaya Trail, Orlando, FL 32828',
          'Opção 2: 3232 E Colonial Dr, Orlando, FL 32803',
          'Abertura: 7h00-8h00',
          'Marcas de grife com desconto',
          'Cosméticos e produtos para casa'
        ]
      },
      {
        id: 'best-buy-florida-mall',
        time: '15:00',
        title: '🖥️ Best Buy Florida Mall (2ª rodada)',
        description: 'Segunda chance para eletrônicos',
        location: '8350 S Orange Blossom Trail, Orlando, FL 32809',
        notes: [
          'Caso não tenha ido de manhã ou queira revisar',
          'Verificar se ainda há promoções disponíveis',
          'Comparar preços com a unidade Millenia'
        ]
      },
      {
        id: 'mall-final',
        time: '17:00',
        title: '🏬 Mall at Millenia ou Florida Mall',
        description: 'Final de tarde para compras variadas',
        location: 'Escolher entre os dois shoppings',
        notes: [
          'Mall at Millenia: 4200 Conroy Rd, Orlando, FL 32839',
          'Florida Mall: 8001 S Orange Blossom Trail, Orlando, FL 32809',
          'Abertura: 6h00-7h00',
          'Compras finais: roupas, cosméticos, eletrônicos extras',
          'Aproveitar últimas promoções do dia'
        ],
        isHighlight: true
      },
      {
        id: 'dinner-break',
        time: '19:30',
        title: '🍽️ Jantar',
        description: 'Pausa para jantar após dia intenso',
        notes: [
          'Opções no shopping ou próximo',
          'Momento para revisar compras do dia',
          'Descansar antes do retorno'
        ]
      },
      {
        id: 'return-organize',
        time: '21:00',
        title: '🏠 Retorno e organização',
        description: 'Fim da maratona Black Friday',
        notes: [
          'Organizar todas as compras do dia',
          'Verificar se conseguiu tudo da lista',
          'Celebrar o sucesso do Black Friday',
          'Preparar para os próximos dias da viagem'
        ]
      }
    ],
    notes: [
      '📋 Resumo Estratégico Black Friday:',
      '05h00-07h00 → Best Buy Millenia (prioridade #1)',
      '07h30-09h00 → Lake Buena Vista Outlets',
      '09h30-11h30 → Ross & Marshalls (International Dr)',
      '12h00-13h00 → Almoço rápido',
      '13h15-14h30 → TJ Maxx',
      '15h00-16h30 → Best Buy Florida Mall (2ª chance)',
      '17h00-19h00 → Florida Mall ou Mall at Millenia'
    ]
  },
  {
    id: 'day10',
    date: '2025-11-29',
    title: 'Islands of Adventure',
    description: 'Parque temático com as melhores montanhas-russas e mundos fantásticos',
    tags: ['parque', 'universal', 'islands-of-adventure', 'harry-potter'],
    activities: [
      {
        id: 'departure',
        time: '07:00',
        title: 'Saída para o parque',
        description: 'Deslocamento para Islands of Adventure'
      },
      {
        id: 'park-arrival',
        time: '09:00',
        title: 'Chegada e abertura oficial',
        description: 'Entrada no Islands of Adventure',
        notes: [
          '📸 Checkpoint 1: Foto na entrada do Islands of Adventure com o farol (letreiro clássico)',
          '📸 Checkpoint 2: Foto no CityWalk antes da entrada'
        ],
        isHighlight: true
      },
      {
        id: 'seuss-landing',
        time: '09:30',
        title: '🎨 Seuss Landing',
        description: 'Área infantil colorida com personagens Dr. Seuss',
        notes: [
          'The Cat in the Hat',
          'One Fish, Two Fish, Red Fish, Blue Fish',
          'The High in the Sky Seuss Trolley Train Ride',
          '📸 Checkpoint 3: Foto com o The Cat in the Hat e nos cenários coloridos'
        ]
      },
      {
        id: 'jurassic-park',
        time: '10:30',
        title: '🦕 Jurassic Park',
        description: 'Mundo dos dinossauros com atrações emocionantes',
        notes: [
          '🎢 VelociCoaster (principal atração)',
          '📸 Checkpoint 4: Foto no letreiro da VelociCoaster com os trilhos ao fundo',
          '🚣 Jurassic Park River Adventure',
          '📸 Checkpoint 5: Foto no portão gigante do Jurassic Park',
          '🦅 Pteranodon Flyers (infantil)',
          '🏕️ Camp Jurassic (playground temático)',
          '📸 Checkpoint 6: Foto no cenário com dinossauros e ossadas'
        ],
        isHighlight: true
      },
      {
        id: 'hogsmeade',
        time: '12:00',
        title: '⚡ Hogsmeade (Harry Potter)',
        description: 'Vila mágica do mundo de Harry Potter',
        notes: [
          '🍺 Butterbeer (Frozen) - imperdível!',
          '🏍️ Hagrid\'s Magical Creatures Motorbike Adventure',
          '📸 Checkpoint 7: Foto na moto do Hagrid',
          '🏰 Castelo de Hogwarts',
          '📸 Checkpoint 8: Foto em frente ao Castelo iluminado',
          '🎢 Harry Potter and the Forbidden Journey',
          '🦅 Flight of the Hippogriff',
          '🎭 Shows: Frog Choir, Triwizard Spirit Rally',
          '📸 Checkpoint 9: Foto com personagens do show'
        ],
        isHighlight: true
      },
      {
        id: 'lunch-three-broomsticks',
        time: '13:30',
        title: '🍽️ Almoço - Três Vassouras',
        description: 'Restaurante temático do Harry Potter',
        location: 'Three Broomsticks - Hogsmeade'
      },
      {
        id: 'skull-island',
        time: '15:00',
        title: '🦍 Skull Island',
        description: 'Ilha do King Kong',
        notes: [
          '🦍 Skull Island – Reign of Kong',
          '📸 Checkpoint 10: Foto na entrada com a cabeça gigante do King Kong'
        ]
      },
      {
        id: 'toon-lagoon',
        time: '15:45',
        title: '💦 Toon Lagoon',
        description: 'Área dos desenhos animados com atrações aquáticas',
        notes: [
          '🌊 Dudley Do-Right\'s Ripsaw Falls',
          '⛵ Popeye & Bluto\'s Bilge-Rat Barges',
          '📸 Checkpoint 11: Foto no cenário de quadrinhos (balões de "POW!", "SPLASH!")',
          '📸 Checkpoint 12: Foto com o Popeye gigante'
        ]
      },
      {
        id: 'marvel-superhero-island',
        time: '16:45',
        title: '🦸 Marvel Super Hero Island',
        description: 'Ilha dos super-heróis da Marvel',
        notes: [
          '🕷️ The Amazing Adventures of Spider-Man',
          '📸 Checkpoint 13: Foto com o Homem-Aranha (encontro)',
          '💚 Montanha-russa Hulk',
          '📸 Checkpoint 14: Foto no letreiro da Hulk Coaster com os trilhos verdes',
          '🛡️ Encontro com personagens: Capitão América, Wolverine, etc.',
          '📸 Checkpoint 15: Fotos com os heróis da Marvel na rua'
        ],
        isHighlight: true
      },
      {
        id: 'dinner',
        time: '18:30',
        title: '🍽️ Jantar',
        description: 'Jantar no parque'
      },
      {
        id: 'night-extras',
        time: '19:30',
        title: '✨ Atrações Extras e Shows Noturnos',
        description: 'Atividades finais do dia',
        notes: [
          '🌙 Nighttime Lights at Hogwarts Castle (se houver)',
          '📸 Checkpoint 16: Foto no castelo com projeções noturnas',
          '🌊 Poseidon\'s Fury (se reaberto)',
          '💡 Dicas: Child Swap / Single Rider para otimizar tempo'
        ],
        isHighlight: true
      },
      {
        id: 'park-exit',
        time: '21:30',
        title: 'Saída do parque',
        description: 'Fim do dia no Islands of Adventure'
      }
    ],
    notes: [
      '🎢 Principais atrações: VelociCoaster, Hagrid\'s Motorbike, Hulk Coaster',
      '⚡ Mundo do Harry Potter: Hogsmeade é imperdível',
      '🦸 Marvel Super Hero Island: encontros com heróis',
      '💡 Use Child Swap e Single Rider para otimizar tempo',
      '📸 16 checkpoints de fotos estratégicos'
    ]
  },
  {
    id: 'day11',
    date: '2025-11-30',
    title: 'Domingo - Missa e Volcano Bay',
    description: 'Domingo de missa e diversão no parque aquático da Universal',
    tags: ['missa', 'volcano-bay', 'parque-aquatico', 'domingo'],
    activities: [
      {
        id: 'wake-up',
        time: '07:00',
        title: 'Acordar',
        description: 'Preparação para o domingo'
      },
      {
        id: 'departure-mass',
        time: '08:00',
        title: 'Saída para Missa',
        description: 'Deslocamento para a Basílica'
      },
      {
        id: 'mass',
        time: '09:00',
        title: '⛪ Missa',
        description: 'Missa dominical',
        location: 'Basilica of the National Shrine of Mary, Queen of the Universe',
        notes: [
          'Endereço: 8300 Vineland Ave, Orlando, FL 32821',
          'Segunda vez na mesma basílica',
          'Momento de gratidão pela viagem'
        ],
        isHighlight: true
      },
      {
        id: 'volcano-bay',
        time: '11:00',
        title: '🌋 Volcano Bay',
        description: 'Parque aquático temático da Universal',
        location: 'Universal\'s Volcano Bay',
        notes: [
          'Parque aquático com tema tropical',
          'Krakatau Aqua Coaster - principal atração',
          'Wave Village - piscina de ondas',
          'Rainforest Village - toboáguas',
          'River Village - rio lento',
          'TapuTapu - pulseira virtual para filas',
          '📸 Foto no vulcão Krakatau (ícone do parque)',
          '📸 Foto nas piscinas com vista do vulcão'
        ],
        isHighlight: true
      },
      {
        id: 'lunch-volcano',
        time: '13:00',
        title: '🍽️ Almoço no Volcano Bay',
        description: 'Refeição no parque aquático'
      },
      {
        id: 'afternoon-decision',
        time: '16:00',
        title: '🤔 Decisão da tarde',
        description: 'Avaliar se voltaremos a algum parque',
        notes: [
          'Opção 1: Continuar no Volcano Bay',
          'Opção 2: Revisitar Magic Kingdom',
          'Opção 3: Revisitar Universal Studios',
          'Opção 4: Descansar na acomodação',
          'Decisão baseada no cansaço do grupo'
        ]
      },
      {
        id: 'evening-activity',
        time: '18:00',
        title: '🌅 Atividade da noite',
        description: 'Conforme decisão da tarde',
        notes: [
          'Se escolher parque: aproveitar até o fechamento',
          'Se escolher descanso: jantar tranquilo e organização'
        ]
      },
      {
        id: 'return-home',
        time: '21:00',
        title: '🏠 Retorno para casa',
        description: 'Fim do domingo de lazer'
      }
    ]
  },
  {
    id: 'day12',
    date: '2025-12-01',
    title: 'Segunda-feira - Roteiro Miami e NBA',
    description: 'Viagem para Miami com roteiro otimizado e jogo do Miami Heat',
    tags: ['miami', 'nba', 'praia', 'viagem'],
    activities: [
      {
        id: 'departure-orlando',
        time: '07:00',
        title: '🚗 Saída de Orlando',
        description: 'Início da viagem para Miami',
        notes: [
          'Saída cedo para ter tempo tranquilo',
          'Pit stop opcional para café na estrada (Turnpike ou I-95)',
          'Tempo estimado de viagem: ~4h com paradas'
        ]
      },
      {
        id: 'boca-raton',
        time: '10:45',
        title: '🏖️ Boca Raton - South Inlet Park',
        description: 'Primeira parada: praia e fotos',
        location: 'South Inlet Park, Boca Raton',
        notes: [
          'Tempo de viagem Orlando → Boca Raton: ~2h45',
          'Atividade: fotos e caminhada rápida na praia',
          'Tempo no local: 30 min máximo',
          '📸 Fotos na praia de Boca Raton'
        ]
      },
      {
        id: 'fort-lauderdale',
        time: '11:45',
        title: '🌊 Fort Lauderdale',
        description: 'Almoço e volta pela praia',
        location: 'Las Olas Beach / Fort Lauderdale Beachfront',
        notes: [
          'Tempo de viagem Boca Raton → Ft Lauderdale: ~30 min',
          'Almoço rápido + volta pela praia',
          'Tempo no local: 1h máximo',
          'Sugestão almoço: Pollo Tropical - 2217 N Dixie Hwy, Pompano Beach',
          '📸 Fotos em Las Olas Beach'
        ]
      },
      {
        id: 'miami-arrival',
        time: '13:45',
        title: '🏨 Chegada em Miami - Quality Inn',
        description: 'Check-in no hotel',
        location: 'Quality Inn Miami',
        notes: [
          'Tempo de viagem Ft Lauderdale → Miami: ~1h',
          'Check-in e organização',
          'Preparação para as atividades da tarde'
        ]
      },
      {
        id: 'car-exchange',
        time: '17:00',
        title: '🚙 Troca dos carros',
        description: 'Processo de devolução e retirada de carros',
        notes: [
          'Fernanda: Retira e devolução às 18h',
          'Jenni: Retira e devolução às 17h/18h',
          'Coordenar horários entre os grupos'
        ]
      },
      {
        id: 'miami-tour-prep',
        time: '18:00',
        title: '🚌 Preparação para tour Miami',
        description: 'Decidir entre Big Bus ou carro para tour',
        notes: [
          'Opção 1: Big Bus Miami (tour turístico)',
          'Opção 2: Carro próprio para flexibilidade',
          'Avaliar tempo disponível antes do jogo'
        ]
      },
      {
        id: 'nba-game',
        time: '18:30',
        title: '🏀 NBA - Miami Heat vs LA Clippers',
        description: 'Jogo de basquete profissional',
        location: 'Kaseya Center, Miami, FL',
        notes: [
          'Horário: 18:30',
          'Miami Heat vs LA Clippers',
          'Experiência única de NBA',
          '📸 Fotos no Kaseya Center',
          '📸 Fotos durante o jogo',
          'Chegar com antecedência para entrada e fotos'
        ],
        isHighlight: true
      },
      {
        id: 'post-game',
        time: '21:30',
        title: '🌃 Pós-jogo',
        description: 'Retorno ao hotel ou atividade noturna',
        notes: [
          'Opção 1: Retorno direto ao hotel',
          'Opção 2: Jantar tardio em Miami',
          'Opção 3: Caminhada noturna em South Beach (se energia permitir)'
        ]
      }
    ],
    notes: [
      '📋 Cronograma Resumido:',
      '07h00 – Saída de Orlando',
      '10h45-11h15 – Boca Raton (South Inlet Park)',
      '11h45-12h45 – Fort Lauderdale (almoço + praia)',
      '13h45-14h00 – Chegada no Quality Inn Miami',
      '17h00-18h00 – Troca dos carros',
      '18h30 – NBA Game (Miami Heat vs LA Clippers)'
    ]
  },
  {
    id: 'day13',
    date: '2025-12-02',
    title: 'Terça-feira - Roteiro Privado Miami',
    description: 'Tour completo por Miami com grupo privado',
    tags: ['miami', 'tour-privado', 'south-beach', 'wynwood', 'little-havana'],
    activities: [
      {
        id: 'south-beach',
        time: '09:00',
        title: '🏖️ South Beach & Ocean Drive',
        description: 'Início do tour pelos pontos icônicos de Miami',
        location: 'Ocean Drive & South Pointe Park Pier',
        notes: [
          'Prédios Art Déco coloridos da Ocean Drive',
          'Caminhada rápida em South Pointe Park Pier',
          'Vista espetacular da praia e baía de Miami',
          '📸 Fotos em grupo logo no começo do dia',
          'Tempo no local: 1h'
        ],
        isHighlight: true
      },
      {
        id: 'downtown-bayside',
        time: '10:30',
        title: '🏙️ Downtown & Bayside Marketplace',
        description: 'Centro de Miami e shopping à beira da baía',
        location: 'Bayfront Park & Bayside Marketplace',
        notes: [
          'Passagem por Bayfront Park',
          'Bayside Marketplace - shopping a céu aberto',
          'Opção: Passeio de barco 1h pela Biscayne Bay',
          'Star Island e mansões de famosos',
          'Alternativa: curtir lojinhas e vista da baía',
          'Tempo no local: 1h30'
        ]
      },
      {
        id: 'little-havana',
        time: '12:15',
        title: '🇨🇺 Little Havana - Calle Ocho',
        description: 'Bairro cubano autêntico',
        location: 'Calle Ocho, Little Havana',
        notes: [
          'Passeio a pé pela Calle Ocho',
          'Domino Park - locais jogando dominó',
          'Café cubano no Versailles ou Ball & Chain',
          'Almoço: Versailles (clássico) ou La Carreta (grupos)',
          'Cultura cubana autêntica',
          'Tempo no local: 1h15'
        ],
        isHighlight: true
      },
      {
        id: 'wynwood-design',
        time: '14:00',
        title: '🎨 Wynwood Walls & Design District',
        description: 'Arte urbana e arquitetura moderna',
        location: 'Wynwood Walls & Design District',
        notes: [
          'Wynwood Walls - murais grafitados famosos',
          'Fotos super instagramáveis',
          'Design District - lojas e arquitetura moderna',
          'Wynwood Walls Museum - $12 por pessoa',
          'Bairro artístico imperdível',
          '📸 Cenário perfeito para fotos criativas',
          'Tempo no local: 1h30'
        ],
        isHighlight: true
      },
      {
        id: 'coral-gables',
        time: '15:45',
        title: '🏛️ Coral Gables & Coconut Grove',
        description: 'Charme histórico e bairro boêmio',
        location: 'Biltmore Hotel & Cocowalk',
        notes: [
          'Coral Gables: Biltmore Hotel e casas históricas',
          'Coconut Grove: bairro arborizado e boêmio',
          'Parada no Cocowalk para café/gelato',
          'Arquitetura charmosa',
          'Tempo no local: 1h15'
        ]
      },
      {
        id: 'return-hotel',
        time: '17:30',
        title: '🏨 Retorno ao hotel',
        description: 'Final tranquilo após dia completo',
        notes: [
          'Encerramento sem correria',
          '8h de passeio completo',
          'Microônibus privado - flexibilidade total'
        ]
      }
    ],
    notes: [
      '🚐 Tour privado com microônibus - flexibilidade total',
      '⏰ Horário: 9h00 → 17h30 (8h de passeio)',
      '🚤 Opcional: Passeio de barco no Bayside (1h)',
      '🎨 Reservar Wynwood Walls Museum ($12/pessoa)',
      '📸 Roteiro focado em pontos instagramáveis'
    ]
  },
  {
    id: 'day14',
    date: '2025-12-03',
    title: 'Quarta-feira - Florida Keys',
    description: 'Aventura pelas ilhas paradisíacas das Florida Keys',
    tags: ['florida-keys', 'marathon', 'islamorada', 'praia', 'ponte'],
    activities: [
      {
        id: 'wake-up-checkout',
        time: '07:00',
        title: '🌅 Acordar e preparação',
        description: 'Início do dia para as Florida Keys'
      },
      {
        id: 'breakfast',
        time: '07:30',
        title: '☕ Café da manhã',
        description: 'Café da manhã/merenda antes da viagem'
      },
      {
        id: 'checkout',
        time: '09:00',
        title: '🏨 Check-out do hotel',
        description: 'Saída do hotel rumo às Florida Keys',
        notes: [
          'Destino: Marathon/Islamorada',
          'Tempo de viagem: 2h a 2h30',
          'Trajeto pela Overseas Highway'
        ]
      },
      {
        id: 'seven-mile-bridge',
        time: '11:30',
        title: '🌉 Seven Mile Bridge',
        description: 'Ponte icônica das Keys com 11km',
        location: 'Seven Mile Bridge, Marathon',
        notes: [
          'Ponte mais famosa das Florida Keys',
          'Caminhar no trecho de pedestres',
          'Vista panorâmica do oceano',
          '📸 Fotos incríveis da ponte',
          'Marco icônico da viagem'
        ],
        isHighlight: true
      },
      {
        id: 'sombrero-beach',
        time: '12:30',
        title: '🏖️ Sombrero Beach',
        description: 'Praia paradisíaca em Marathon',
        location: 'Sombrero Beach, Marathon',
        notes: [
          'Praia com coqueiros e areia clara',
          'Águas cristalinas e calmas',
          'Excelente para banho e relaxar',
          'Uma das melhores praias das Keys',
          '📸 Cenário tropical perfeito',
          'Tempo para descanso antes do almoço'
        ],
        isHighlight: true
      },
      {
        id: 'turtle-hospital',
        time: '14:00',
        title: '🐢 Turtle Hospital (opcional)',
        description: 'Centro de reabilitação de tartarugas',
        location: 'Marathon',
        notes: [
          'Centro de reabilitação de tartarugas marinhas',
          'Experiência educativa única',
          'Alternativa: Florida Keys Aquarium Encounters',
          'Precisa reservar com antecedência',
          'Atividade opcional conforme interesse do grupo'
        ]
      },
      {
        id: 'robbies-marina',
        time: '15:30',
        title: '🐟 Robbie\'s Marina',
        description: 'Experiência única em Islamorada',
        location: 'Robbie\'s Marina, Islamorada',
        notes: [
          'Alimentar os tarpons gigantes',
          'Experiência única e divertida',
          'Restaurantes e lojinhas locais',
          'Ótimo ponto para almoço tardio',
          '📸 Fotos com os peixes',
          'Ambiente descontraído'
        ],
        isHighlight: true
      },
      {
        id: 'annes-beach',
        time: '16:30',
        title: '🌊 Anne\'s Beach',
        description: 'Praia calma para relaxar',
        location: 'Anne\'s Beach, Islamorada',
        notes: [
          'Praia calma, ideal para caminhar',
          'Parada rápida se sobrar tempo',
          'Vista linda do pôr do sol',
          'Momento de contemplação'
        ]
      },
      {
        id: 'return-journey',
        time: '17:30',
        title: '🚗 Retorno',
        description: 'Volta para Miami ou próximo destino',
        notes: [
          'Fim do dia nas Florida Keys',
          'Viagem de volta (2h30)',
          'Experiência única nas ilhas'
        ]
      }
    ],
    notes: [
      '🏝️ Aventura pelas ilhas paradisíacas das Florida Keys',
      '🌉 Seven Mile Bridge - ponte icônica de 11km',
      '🏖️ Praias de águas cristalinas e areia branca',
      '🐢 Opcional: Turtle Hospital (reservar antecipadamente)',
      '🐟 Robbie\'s Marina - alimentar tarpons gigantes',
      '🍴 Almoço flexível: Marathon ou Islamorada'
    ]
  },
  // ... outros dias do roteiro
];

export const getDayByDate = (dateString: string): DayItinerary | undefined => {
  return itineraryData.find(day => day.date === dateString);
};

export const getAllDays = (): DayItinerary[] => {
  return itineraryData;
};
