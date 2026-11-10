export const projectSlugs = [
  'cautela-intima',
  'vinculo',
  'entre-corteza',
  'proximo-movimiento',
] as const;

export type ProjectSlug = (typeof projectSlugs)[number];

export type PortfolioRoute =
  | '/'
  | '/about'
  | '/contact'
  | `/#proyectos`
  | `/projects/${ProjectSlug}`;

export type NavigationItem = {
  number: string;
  label: string;
  href: PortfolioRoute | string;
  external?: boolean;
};

export type ProjectAccent = {
  primary: 'azul eléctrico';
  secondary: string;
};

export type ProjectImage = {
  id: string;
  src: string;
  originalFileName: string;
  role: 'hero' | 'result' | 'detail' | 'process' | 'technical';
  alt?: string;
  caption?: string;
  priority?: boolean;
};

export type ProjectVideo = {
  src: string;
  masterFileName: string;
  webFileName: string;
  poster: string;
  credit?: string;
  controls: true;
  playsInline: true;
  preload: 'metadata';
};

export type NarrativeStage = 'concept' | 'decisions' | 'process' | 'result';

export type NarrativeModule =
  | {
      kind: 'images';
      stage: NarrativeStage;
      imageIds: string[];
      layout: 'full' | 'pair' | 'offset' | 'sequence' | 'technical';
    }
  | {
      kind: 'quote';
      stage: NarrativeStage;
      text: string;
    }
  | {
      kind: 'video';
      stage: NarrativeStage;
    }
  | {
      kind: 'list';
      stage: NarrativeStage;
      label: string;
      items: string[];
    };

export type Credit = {
  label: string;
  value: string | string[];
};

export type PortfolioProject = {
  slug: ProjectSlug;
  route: `/projects/${ProjectSlug}`;
  number: string;
  title: string;
  subtitle?: string;
  concept?: string;
  statement: string;
  homeMetadata: string;
  accent: ProjectAccent;
  specialTreatment: string[];
  metadata: {
    year: string;
    course: string;
    period: string;
    type: string;
    members?: string[];
    role?: string[];
    tools: string[];
  };
  context?: string;
  user?: string;
  commission: string;
  proposal: string;
  result?: string[];
  resultDescription?: string;
  collection?: string[];
  collectionDescription?: string;
  materials?: string[];
  techniques?: string[];
  techniqueDetails?: Array<{
    label: string;
    value: string;
  }>;
  trend?: string;
  team?: {
    count: string;
    members: string[];
  };
  construction?: Array<{
    name: string;
    detail: string;
  }>;
  references?: string[];
  responsibilities?: string[];
  technicalSheets?: string[];
  technicalSheetContents?: string[];
  collaboration?: string[];
  highlight?: string;
  images: ProjectImage[];
  video?: ProjectVideo;
  narrative: NarrativeModule[];
  credits: Credit[];
  followUp: {
    label: 'SIGUE MIRANDO';
    projectSlugs: ProjectSlug[];
  };
};

export const portfolioIdentity = {
  name: 'ISIDORA ORREGO',
  profession: 'Diseño de Moda y Gestión',
  concept: 'MIRAR DISTINTO',
  claim: 'diseñar con intención',
  principle: 'ORDEN + INTERRUPCIÓN',
  rule: 'PRIMERO ESTABLECER UN ORDEN, DESPUÉS VER DÓNDE ROMPERLO.',
  balance: {
    restraint: '70 % CONTENCIÓN',
    expression: '30 % EXPRESIÓN',
    neutrals: '70 % neutros',
    color: '30 % color',
  },
  character: [
    'pulcra, pero no fría',
    'creativa, pero no recargada',
    'sobria, pero nunca plana',
    'editorial',
    'limpia',
    'cuidada',
    'con acentos atrevidos estratégicos',
  ],
  philosophy:
    'La idea detrás de mi forma de trabajar es que primero necesito comprender, ordenar y encontrar relaciones antes de decidir cómo debe verse una propuesta. Me interesa transformar conceptos en decisiones visuales y materiales concretas. Me atrae lo limpio, cuidado y preciso, pero siempre intento introducir un gesto inesperado que cambie la lectura y le entregue carácter al proyecto.',
  typography: {
    primary: 'DM Sans',
    contrast: 'Instrument Serif',
  },
  colors: {
    background: 'blanco cálido / crudo muy sutil',
    text: 'negro',
    primaryAccent: 'azul eléctrico',
    primaryAccentInstruction: 'Usar el azul exacto del manual de marca, no inventar otro azul.',
  },
  pin: {
    src: '/portfolio/identity/isidora-alfiler-azul.png',
    originalFileName: 'isidora-alfiler-azul.png',
    webFileName: 'isidora-alfiler-azul.png',
  },
} as const;

export const portfolioSeo = {
  title: 'Isidora Orrego — Diseño de Moda y Gestión',
  description:
    'Portafolio de Isidora Orrego. Diseño de moda, dirección de arte, styling, desarrollo de colecciones, fotografía y comunicación visual.',
} as const;

export const portfolioCv = {
  label: 'CV',
  href: '/portfolio/cv/CV-OrregoIsidora.pdf',
  fileName: 'CV-OrregoIsidora.pdf',
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;

export const portfolioNavigation: NavigationItem[] = [
  { number: '01', label: 'PROYECTOS', href: '/#proyectos' },
  { number: '02', label: 'ISIDORA', href: '/about' },
  { number: '03', label: 'CONTACTO', href: '/contact' },
  {
    number: '04',
    label: 'CV',
    href: portfolioCv.href,
    external: true,
  },
];

export const portfolioHome = {
  route: '/' as const,
  hero: {
    name: 'ISIDORA ORREGO',
    title: ['MIRAR', 'DISTINTO'],
    claim: 'diseñar con intención',
  },
  introduction:
    'Diseño desde el concepto, buscando relaciones entre moda, imagen, materialidad y comunicación. Me interesa construir propuestas claras y cuidadas, dejando siempre espacio para una decisión inesperada que les dé carácter.',
  projectsLabel: 'PROYECTOS',
} as const;

export const portfolioAbout = {
  route: '/about' as const,
  title: 'MIRAR DISTINTO',
  statement: 'Primero ordeno. Después veo dónde romperlo.',
  text:
    'Mi proceso creativo suele partir ordenando. Necesito entender lo que tengo frente a mí, encontrar relaciones y construir una idea antes de decidir cómo debe verse. Desde ahí, me interesa transformar conceptos en decisiones concretas: una materialidad, una silueta, un styling, una fotografía o una composición gráfica. Me atrae lo claro y cuidado, pero siempre busco ese pequeño gesto que cambia la lectura y le entrega carácter al proyecto.',
  image: {
    src: '/portfolio/about/isidora-about-trabajando.webp',
    originalFileName: 'isidora-about-trabajando.jpg',
  },
  principlesLabel: 'MIS PRINCIPIOS',
  principles: [
    {
      number: '01',
      title: 'OBSERVAR',
      description: 'Encontrar posibilidades en aquello que puede pasar desapercibido',
    },
    {
      number: '02',
      title: 'CONCEPTUALIZAR',
      description: 'Partir desde una idea antes de decidir cómo debe verse',
    },
    {
      number: '03',
      title: 'CONTRASTAR',
      description: 'Dejar que lo sobrio conviva con algo inesperado',
    },
    {
      number: '04',
      title: 'DETALLAR',
      description: 'Entender que una decisión pequeña también puede construir identidad',
    },
    {
      number: '05',
      title: 'INTENCIONAR',
      description: 'No utilizar un recurso visual si no aporta al concepto',
    },
  ],
  interestsLabel: 'ÁREAS QUE ME INTERESAN',
  interests: [
    'dirección de arte',
    'desarrollo de colecciones',
    'styling',
    'branding de moda',
    'visual merchandising',
    'producción de moda',
    'accesorios',
    'editorial',
    'fotografía',
    'contenido audiovisual',
  ],
  toolsLabel: 'HERRAMIENTAS QUE MANEJO',
  tools: [
    'Adobe Illustrator',
    'Adobe Photoshop',
    'Canva',
    'Procreate',
    'CapCut',
    'Adobe Lightroom',
    'AutoCAD',
    'Adobe InDesign',
    'Microsoft Excel',
  ],
} as const;

export const portfolioContact = {
  route: '/contact' as const,
  title: 'CONTACTO',
  name: 'ISIDORA ORREGO',
  location: 'Santiago, Chile',
  email: {
    label: 'isiorregov@gmail.com',
    href: 'mailto:isiorregov@gmail.com',
  },
  phone: {
    label: '+56 9 7446 2678',
    href: 'tel:+56974462678',
  },
  instagram: {
    label: '@iorregov',
    href: 'https://www.instagram.com/iorregov/',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
} as const;

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: 'cautela-intima',
    route: '/projects/cautela-intima',
    number: '01',
    title: 'Cautela Íntima',
    concept: 'Umbral Recíproco',
    statement: 'Abrirse no ocurre de inmediato. Aparece cuando la conexión se vuelve recíproca.',
    homeMetadata: '2026',
    accent: {
      primary: 'azul eléctrico',
      secondary: 'gris humo',
    },
    specialTreatment: [
      'transparencia',
      'capas',
      'aparición progresiva',
      'imágenes que se revelan sutilmente al scroll',
    ],
    metadata: {
      year: '2026',
      course: 'Alta Costura',
      period: 'marzo a julio',
      type: 'Individual',
      tools: [
        'Patronaje manual a medida',
        'Confección',
        'Experimentación material',
      ],
    },
    commission:
      'El proyecto proponía desarrollar una propuesta de Alta Costura a partir de una emoción personal, buscando que naciera desde una experiencia auténtica y no únicamente desde una referencia estética. A partir de una musa cercana y sus medidas, se debía diseñar y confeccionar un look completo incorporando una técnica tradicional de Alta Costura y una técnica de Neocouture. El proceso contempló investigación personal, experimentación material, patronaje y confección a medida.',
    proposal:
      'Cautela Íntima nace de analizar distintos hitos personales hasta reconocer un patrón que se repetía en ellos: mi forma selectiva de abrir mi mundo interior a otras personas. Desde esta emoción surge el concepto ‘Umbral Recíproco’, que representa ese instante en que la confianza deja de ser una decisión consciente y comienza a aparecer naturalmente al percibir una conexión genuina con el otro. Esta idea se tradujo formalmente mediante distintas capas de protección y apertura. La gasa plisada, representa el movimiento de sentimientos y sensaciones internas; su dirección cambia alrededor del torso, zona donde sitúo físicamente emociones más protagonistas ligadas al corazón y al estómago. En contraste, el alambre pavonado construye una estructura exterior de apariencia rígida. Su interior incorpora pintura en aerosol cuyos reflejos aparecen solo desde determinados ángulos, funcionando como los primeros indicios de apertura. El resultado, donde concepto, materialidad y construcción responden a un mismo relato.',
    result: ['Enterito', 'Corset', 'Capa estructural'],
    resultDescription: 'Look completo confeccionado a medida compuesto por:',
    techniques: [
      'Gasa con plisado orgánico',
      'Estructura realizada con alambre pavonado',
    ],
    techniqueDetails: [
      {
        label: 'Técnica tradicional de Alta Costura',
        value: 'Gasa con plisado orgánico',
      },
      {
        label: 'Técnica Neocouture',
        value: 'Estructura realizada con alambre pavonado',
      },
    ],
    images: [
      {
        id: 'cautela-hero',
        src: '/portfolio/projects/cautela-intima/cautela_01_hero.webp',
        originalFileName: 'cautela_01_hero.jpeg',
        role: 'hero',
        alt: 'Look final de Cautela Íntima con estructura de alambre pavonado y gasa plisada',
        priority: true,
      },
      {
        id: 'cautela-frontal',
        src: '/portfolio/projects/cautela-intima/cautela_02_frontal.webp',
        originalFileName: 'cautela_02_frontal.jpeg',
        role: 'result',
      },
      {
        id: 'cautela-perfil',
        src: '/portfolio/projects/cautela-intima/cautela_04_perfil.webp',
        originalFileName: 'cautela_04_perfil.jpeg',
        role: 'result',
      },
      {
        id: 'cautela-detalle',
        src: '/portfolio/projects/cautela-intima/cautela_05_detalle.webp',
        originalFileName: 'cautela_05_detalle.jpeg',
        role: 'detail',
      },
      {
        id: 'cautela-moodboard',
        src: '/portfolio/projects/cautela-intima/cautela_06_moodboard.webp',
        originalFileName: 'cautela_06_moodboard.jpeg',
        role: 'process',
      },
      {
        id: 'cautela-patronaje',
        src: '/portfolio/projects/cautela-intima/cautela_08_patronaje.webp',
        originalFileName: 'cautela_08_patronaje.jpeg',
        role: 'process',
      },
    ],
    video: {
      src: '/portfolio/projects/cautela-intima/cautela_fashion-film-web.mp4',
      masterFileName: 'cautela_fashion-film-original.mov',
      webFileName: 'cautela_fashion-film-web.mp4',
      poster: '/portfolio/projects/cautela-intima/cautela_01_hero.webp',
      credit: 'Fashionfilm',
      controls: true,
      playsInline: true,
      preload: 'metadata',
    },
    narrative: [
      {
        kind: 'images',
        stage: 'concept',
        imageIds: ['cautela-moodboard'],
        layout: 'offset',
      },
      {
        kind: 'quote',
        stage: 'decisions',
        text: 'Abrirse no ocurre de inmediato. Aparece cuando la conexión se vuelve recíproca.',
      },
      {
        kind: 'images',
        stage: 'process',
        imageIds: ['cautela-patronaje', 'cautela-detalle'],
        layout: 'pair',
      },
      {
        kind: 'images',
        stage: 'result',
        imageIds: ['cautela-frontal', 'cautela-perfil'],
        layout: 'offset',
      },
      { kind: 'video', stage: 'result' },
    ],
    credits: [
      {
        label: 'Realización audiovisual',
        value: 'Isidora Orrego',
      },
    ],
    followUp: {
      label: 'SIGUE MIRANDO',
      projectSlugs: ['vinculo', 'entre-corteza'],
    },
  },
  {
    slug: 'vinculo',
    route: '/projects/vinculo',
    number: '02',
    title: 'Vínculo',
    statement: 'Un vínculo se transforma a medida que acumula tiempo, huellas y memoria.',
    homeMetadata: '2025',
    accent: {
      primary: 'azul eléctrico',
      secondary: 'bronce / taupe',
    },
    specialTreatment: ['ORIGEN → TRÁNSITO → MEMORIA'],
    metadata: {
      year: '2025',
      course: 'Complementos de Moda',
      period: 'agosto a diciembre',
      type: 'Individual',
      tools: ['Patronaje manual', 'Confección mixta'],
    },
    commission:
      'Consistía en desarrollar una colección coherente de tres artículos de cuero en tres tamaños diferentes, entendidos como un sistema y no como piezas independientes. La propuesta debía incluir conceptualización, moldes y fichas técnicas completas, además de responder a criterios de complejidad, prolijidad y oficio.',
    proposal:
      'Vínculo explora cómo una relación se construye y adquiere complejidad a medida que avanza el tiempo. La colección se organiza en tres momentos —Origen, Tránsito y Memoria— que funcionan como una secuencia progresiva. Para mantener una identidad común, las piezas comparten el mismo cuero, herrajes en bronce envejecido, esquinas redondeadas y un sistema visible de uniones. A medida que la colección avanza, estas constantes comienzan a transformarse: aumenta la cantidad y dirección de las uniones, el asa cambia de posición y aparecen progresivamente más avíos, funcionando como huellas que se acumulan y permiten leer visualmente el paso del tiempo. En Memoria, la costura completamente manual refuerza el carácter más acumulativo e íntimo de la última etapa. El resultado busca equilibrar concepto y funcionalidad, consiguiendo que cada pieza pueda existir individualmente mientras mantiene una relación reconocible con el resto de la colección.',
    collectionDescription: '3 piezas en cuero',
    collection: [
      'ORIGEN — L · bolso de hombro',
      'TRÁNSITO — M · clutch',
      'MEMORIA — S · pieza pequeña / clutch',
    ],
    construction: [
      { name: 'Origen', detail: 'cosido completamente a máquina' },
      { name: 'Tránsito', detail: 'cosido completamente a máquina' },
      { name: 'Memoria', detail: 'cosido completamente a mano' },
    ],
    materials: [
      'Cuero liso gris oscuro',
      'Avíos en bronce envejecido',
      'Badana para compartimientos interiores',
    ],
    highlight:
      'La colección completa fue seleccionada por la Facultad de Diseño UDD para ser fotografiada y publicada en Revista D como parte de una selección de trabajos destacados.',
    images: [
      {
        id: 'vinculo-hero',
        src: '/portfolio/projects/vinculo/vinculo_01_hero.webp',
        originalFileName: 'vinculo_01_hero.jpeg',
        role: 'hero',
        alt: 'Colección Vínculo compuesta por Origen, Tránsito y Memoria',
        priority: true,
      },
      {
        id: 'vinculo-origen',
        src: '/portfolio/projects/vinculo/vinculo_02_origen.webp',
        originalFileName: 'vinculo_02_origen.jpeg',
        role: 'result',
        caption: 'ORIGEN — L · bolso de hombro',
      },
      {
        id: 'vinculo-transito',
        src: '/portfolio/projects/vinculo/vinculo_03_transito.webp',
        originalFileName: 'vinculo_03_transito.jpeg',
        role: 'result',
        caption: 'TRÁNSITO — M · clutch',
      },
      {
        id: 'vinculo-memoria',
        src: '/portfolio/projects/vinculo/vinculo_04_memoria.webp',
        originalFileName: 'vinculo_04_memoria.jpeg',
        role: 'result',
        caption: 'MEMORIA — S · pieza pequeña / clutch',
      },
      {
        id: 'vinculo-uniones',
        src: '/portfolio/projects/vinculo/vinculo_05_detalle-uniones.webp',
        originalFileName: 'vinculo_05_detalle-uniones.jpeg',
        role: 'detail',
      },
      {
        id: 'vinculo-hebilla',
        src: '/portfolio/projects/vinculo/vinculo_06_detalle-hebilla.webp',
        originalFileName: 'vinculo_06_detalle-hebilla.jpeg',
        role: 'detail',
      },
      {
        id: 'vinculo-producto-en-uso',
        src: '/portfolio/projects/vinculo/vinculo_07_producto-en-uso.webp',
        originalFileName: 'vinculo_07_producto-en-uso.jpeg',
        role: 'result',
        alt: 'Bolso Origen de la colección Vínculo usado al hombro',
      },
    ],
    narrative: [
      {
        kind: 'quote',
        stage: 'concept',
        text: 'Un vínculo se transforma a medida que acumula tiempo, huellas y memoria.',
      },
      {
        kind: 'images',
        stage: 'decisions',
        imageIds: ['vinculo-origen', 'vinculo-transito', 'vinculo-memoria'],
        layout: 'sequence',
      },
      {
        kind: 'images',
        stage: 'process',
        imageIds: ['vinculo-uniones', 'vinculo-hebilla'],
        layout: 'pair',
      },
      {
        kind: 'images',
        stage: 'result',
        imageIds: ['vinculo-hero', 'vinculo-producto-en-uso'],
        layout: 'technical',
      },
    ],
    credits: [],
    followUp: {
      label: 'SIGUE MIRANDO',
      projectSlugs: ['entre-corteza', 'proximo-movimiento'],
    },
  },
  {
    slug: 'entre-corteza',
    route: '/projects/entre-corteza',
    number: '03',
    title: 'Entre Corteza',
    concept: 'Piel Indómita',
    statement: 'Entre lo rígido y lo etéreo aparece una fuerza que se revela capa por capa.',
    homeMetadata: '2025',
    accent: {
      primary: 'azul eléctrico',
      secondary: 'tierra / oliva',
    },
    specialTreatment: ['fragmentación', 'capas', 'superposición', 'recortes editoriales'],
    metadata: {
      year: '2025',
      course: 'Colaboración académica vinculada al National Museum of Women in the Arts.',
      period: 'marzo a junio',
      type: 'Grupal',
      tools: ['Adobe Illustrator', 'Patronaje manual', 'Confección'],
    },
    commission:
      'El proyecto consistió en diseñar una colección cápsula orientada al retail inspirada en la sensibilidad visual y material de Amelia Errázuriz, dentro de una colaboración académica vinculada al National Museum of Women in the Arts. El proceso integró análisis del State of Fashion 2025, investigación de tendencias y consumidor, conceptualización, storytelling, desarrollo de cuatro looks, selección de materias primas, fichas técnicas y trazabilidad. La propuesta debía extenderse además hacia editorial, branding, packaging y fashion film, manteniendo una mirada ética y sostenible.',
    proposal:
      'Entre Corteza nace del análisis de una selección de obras de Amelia Errázuriz. Nos interesó especialmente la manera en que la artista trabaja con fragmentación, capas, materiales orgánicos y superficies que parecen contener rastros de transformación. Desde esas observaciones surgió el concepto Piel Indómita, entendido como una tensión entre fuerza, contención y liberación. Esta dualidad se tradujo en una combinación de materialidades, construyendo contrastes entre rigidez y fluidez. El resultado de esta colección buscó mantener una relación reconocible entre obra, materialidad, prendas y universo visual.',
    result: [
      'Pantalón 100% cuero reno forrado',
      'Blusa de gasa',
      'Complemento de mangas de pelo animal natural reciclado forradas',
    ],
    references: [
      'Maderas, Huellas, Cortina',
      'Paisaje Rastrojo, Acopio Sombras, Ruptura',
    ],
    highlight:
      'Gestioné personalmente una colaboración con LUAU Shoes, que facilitó tres pares de calzado para completar el styling de los looks femeninos del shooting.',
    images: [
      {
        id: 'entrecorteza-hero',
        src: '/portfolio/projects/entre-corteza/entrecorteza_01_hero.webp',
        originalFileName: 'entrecorteza_01_hero.png',
        role: 'hero',
        priority: true,
      },
      {
        id: 'entrecorteza-editorial',
        src: '/portfolio/projects/entre-corteza/entrecorteza_02_editorial-doble-look.webp',
        originalFileName: 'entrecorteza_02_editorial-doble-look.jpeg',
        role: 'result',
      },
      {
        id: 'entrecorteza-exterior',
        src: '/portfolio/projects/entre-corteza/entrecorteza_03_look-exterior.webp',
        originalFileName: 'entrecorteza_03_look-exterior.jpeg',
        role: 'result',
      },
      {
        id: 'entrecorteza-ilustracion',
        src: '/portfolio/projects/entre-corteza/entrecorteza_04_ilustracion-look.webp',
        originalFileName: 'entrecorteza_04_ilustracion-look.jpeg',
        role: 'process',
      },
      {
        id: 'entrecorteza-moodboard',
        src: '/portfolio/projects/entre-corteza/entrecorteza_05_proceso-moodboard.webp',
        originalFileName: 'entrecorteza_05_proceso-moodboard.jpeg',
        role: 'process',
      },
      {
        id: 'entrecorteza-pelo',
        src: '/portfolio/projects/entre-corteza/entrecorteza_09_detalle-pelo.webp',
        originalFileName: 'entrecorteza_09_detalle-pelo.jpeg',
        role: 'detail',
      },
    ],
    video: {
      src: '/portfolio/projects/entre-corteza/entrecorteza_fashion-film-web.mp4',
      masterFileName: 'entrecorteza_fashion-film-original.mov',
      webFileName: 'entrecorteza_fashion-film-web.mp4',
      poster: '/portfolio/projects/entre-corteza/entrecorteza_01_hero.webp',
      credit: 'Fashionfilm',
      controls: true,
      playsInline: true,
      preload: 'metadata',
    },
    narrative: [
      {
        kind: 'images',
        stage: 'concept',
        imageIds: ['entrecorteza-moodboard', 'entrecorteza-ilustracion'],
        layout: 'offset',
      },
      {
        kind: 'quote',
        stage: 'decisions',
        text: 'Entre lo rígido y lo etéreo aparece una fuerza que se revela capa por capa.',
      },
      {
        kind: 'images',
        stage: 'process',
        imageIds: ['entrecorteza-pelo'],
        layout: 'full',
      },
      {
        kind: 'images',
        stage: 'result',
        imageIds: ['entrecorteza-editorial', 'entrecorteza-exterior'],
        layout: 'offset',
      },
      { kind: 'video', stage: 'result' },
    ],
    credits: [
      {
        label: 'Realización audiovisual',
        value: 'Alfredo Medina',
      },
    ],
    followUp: {
      label: 'SIGUE MIRANDO',
      projectSlugs: ['proximo-movimiento', 'cautela-intima'],
    },
  },
  {
    slug: 'proximo-movimiento',
    route: '/projects/proximo-movimiento',
    number: '04',
    title: 'Próximo Movimiento',
    subtitle: 'Vitatex x Schneider Electric',
    statement: 'Reutilizar no solo la tela, sino también la función que ya existe en cada prenda.',
    homeMetadata: '2025',
    accent: {
      primary: 'azul eléctrico',
      secondary: 'verde neón industrial',
    },
    specialTreatment: [
      'líneas',
      'cotas',
      'fragmentos de ficha',
      'cubicado',
      'detalles constructivos',
    ],
    metadata: {
      year: '2025',
      course: 'Colaboración académica junto a Schneider Electric y Vitatex',
      period: 'agosto a diciembre',
      type: 'Grupal',
      tools: ['Adobe Illustrator', 'Patronaje manual', 'Confección', 'CapCut', 'Dirección de Arte'],
    },
    context:
      'Proyecto desarrollado a partir de uniformes ignífugos Schneider Electric fabricados con textiles Vitatex.',
    user:
      'Profesionales y técnicos relacionados con el ecosistema productivo de Schneider Electric, incluyendo sectores como minería, celulosa y data centers.',
    commission:
      'El desafío consistía en desarrollar mediante upcycling un producto para regalo corporativo funcional utilizando uniformes ignífugos de Schneider Electric en desuso. La propuesta debía trabajar a partir de las tipologías entregadas —geólogo, chaqueta, pantalón y polera— y limitar la generación de residuos a un máximo de 5 %. Además de responder a criterios de funcionalidad y sostenibilidad, el resultado debía considerar factibilidad técnica, transferibilidad, replicabilidad y escalabilidad.',
    proposal:
      'Próximo Movimiento propone transformar uniformes laborales en desuso en un bolso corporativo multifuncional acompañado por una funda acolchada para computador o iPad. En lugar de tratar las prendas únicamente como superficies textiles, analizamos sus componentes existentes para aprovechar bolsillos, cierres, reflectantes, broches y detalles funcionales dentro del nuevo producto. El aprovechamiento del material se extendió también al interior: el bolso fue forrado para aumentar su resistencia y los residuos textiles restantes se utilizaron como relleno protector de la funda, contribuyendo al objetivo de minimizar desperdicios.\n\nEl proyecto combina diseño, documentación técnica, aprovechamiento material y comunicación visual.',
    result: [
      'Bolso Corporativo Multifuncional',
      'Funda Acolchada Para Computador / Tablet',
      'Look Completo Compuesto De Tres Prendas',
    ],
    responsibilities: [
      'Co-Diseño Del Bolso',
      'Definición De Qué Partes De Los Uniformes Se Utilizarían En Cada Componente',
      'Búsqueda De Referentes',
      'Fichas Técnicas Completas',
      'Adobe Illustrator',
      'Registro Audiovisual Durante Todo El Proceso',
      'Edición Completa Del Working Process',
      'Selección Musical',
      'Dirección De Fotografía Y Elección De Locación',
      'Diseño, Patronaje Y Confección De La Chaqueta Del Look',
      'Realización De Fotografías Finales',
    ],
    technicalSheets: [
      'ficha del geólogo ignífugo',
      'ficha de chaqueta ignífuga',
      'ficha de polera ignífuga',
      'ficha de pantalón ignífugo',
      'ficha del producto final',
    ],
    technicalSheetContents: [
      'vistas técnicas',
      'medidas',
      'avíos',
      'detalles constructivos',
      'composición',
      'despiece',
      'cubicado',
      'sectores reutilizados',
    ],
    images: [
      {
        id: 'vitatex-hero',
        src: '/portfolio/projects/proximo-movimiento/vitatex_01_hero.webp',
        originalFileName: 'vitatex_01_hero.jpg',
        role: 'hero',
        alt: 'Bolso upcycling de Próximo Movimiento confeccionado con uniformes Schneider Electric',
        priority: true,
      },
      {
        id: 'vitatex-frontal',
        src: '/portfolio/projects/proximo-movimiento/vitatex_02_producto-frontal.webp',
        originalFileName: 'vitatex_02_producto-frontal.jpg',
        role: 'result',
      },
      {
        id: 'vitatex-en-uso',
        src: '/portfolio/projects/proximo-movimiento/vitatex_03_producto-en-uso.webp',
        originalFileName: 'vitatex_03_producto-en-uso.jpg',
        role: 'result',
      },
      {
        id: 'vitatex-sentado',
        src: '/portfolio/projects/proximo-movimiento/vitatex_04_producto-sentado.webp',
        originalFileName: 'vitatex_04_producto-sentado.jpg',
        role: 'result',
        alt: 'Bolso Próximo Movimiento presentado junto al look completo',
      },
      {
        id: 'vitatex-espalda',
        src: '/portfolio/projects/proximo-movimiento/vitatex_06_producto-espalda.webp',
        originalFileName: 'vitatex_06_producto-espalda.jpg',
        role: 'result',
        alt: 'Vista posterior del bolso Próximo Movimiento en uso',
      },
      {
        id: 'vitatex-bolsillos',
        src: '/portfolio/projects/proximo-movimiento/vitatex_08_detalle-bolsillos.webp',
        originalFileName: 'vitatex_08_detalle-bolsillos.jpg',
        role: 'detail',
      },
      {
        id: 'vitatex-funda',
        src: '/portfolio/projects/proximo-movimiento/vitatex_11_detalle-funda-computador.webp',
        originalFileName: 'vitatex_11_detalle-funda-computador.jpg',
        role: 'detail',
      },
      {
        id: 'vitatex-ficha',
        src: '/portfolio/projects/proximo-movimiento/vitatex_15_ficha-tecnica-web.webp',
        originalFileName: 'vitatex_15_ficha-tecnica-web.webp',
        role: 'technical',
      },
      {
        id: 'vitatex-ficha-chaqueta',
        src: '/portfolio/projects/proximo-movimiento/vitatex_16_ficha-chaqueta-web.webp',
        originalFileName: 'vitatex_fichas-prendas-originales.pdf · página 6',
        role: 'technical',
        alt: 'Ficha técnica de la chaqueta ignífuga de Vitatex',
      },
    ],
    video: {
      src: '/portfolio/projects/proximo-movimiento/vitatex_working-process-web.mp4',
      masterFileName: 'vitatex_working-process-original.mov',
      webFileName: 'vitatex_working-process-web.mp4',
      poster: '/portfolio/projects/proximo-movimiento/vitatex_01_hero.webp',
      credit: 'Video de proceso',
      controls: true,
      playsInline: true,
      preload: 'metadata',
    },
    narrative: [
      {
        kind: 'quote',
        stage: 'concept',
        text: 'Reutilizar no solo la tela, sino también la función que ya existe en cada prenda.',
      },
      {
        kind: 'images',
        stage: 'decisions',
        imageIds: ['vitatex-bolsillos', 'vitatex-ficha'],
        layout: 'technical',
      },
      {
        kind: 'images',
        stage: 'process',
        imageIds: ['vitatex-funda', 'vitatex-ficha-chaqueta'],
        layout: 'technical',
      },
      {
        kind: 'images',
        stage: 'result',
        imageIds: ['vitatex-frontal', 'vitatex-sentado'],
        layout: 'technical',
      },
      {
        kind: 'images',
        stage: 'result',
        imageIds: ['vitatex-en-uso', 'vitatex-espalda'],
        layout: 'technical',
      },
      { kind: 'video', stage: 'result' },
    ],
    credits: [
      {
        label: 'Realización audiovisual, dirección de arte y edición',
        value: 'Isidora Orrego',
      },
    ],
    followUp: {
      label: 'SIGUE MIRANDO',
      projectSlugs: ['cautela-intima', 'vinculo'],
    },
  },
];

export const portfolioFooter = {
  name: 'ISIDORA ORREGO',
  concept: 'MIRAR DISTINTO',
  email: portfolioContact.email,
  instagram: portfolioContact.instagram,
  showCurrentYear: true,
  pin: portfolioIdentity.pin,
} as const;

export const portfolioContent = {
  identity: portfolioIdentity,
  seo: portfolioSeo,
  navigation: portfolioNavigation,
  home: portfolioHome,
  about: portfolioAbout,
  contact: portfolioContact,
  cv: portfolioCv,
  projects: portfolioProjects,
  footer: portfolioFooter,
} as const;

export const getPortfolioProject = (slug: string) =>
  portfolioProjects.find((project) => project.slug === slug);

export const getFollowUpProjects = (slug: ProjectSlug) => {
  const project = getPortfolioProject(slug);

  return project?.followUp.projectSlugs
    .map((followUpSlug) => getPortfolioProject(followUpSlug))
    .filter((followUpProject): followUpProject is PortfolioProject => Boolean(followUpProject));
};
