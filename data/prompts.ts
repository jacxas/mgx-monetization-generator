export interface Prompt {
  id: string;
  categoryId: string;
  title: string;
  revenueGoal: string;
  isPro: boolean;
  systemPrompt: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
  prompts: Prompt[];
}

export const categories: Category[] = [
  {
    id: 'ai-automation',
    name: 'AI & Automatización',
    icon: '🤖',
    description: 'Monetiza con inteligencia artificial',
    prompts: [
      {
        id: 'ai-1',
        categoryId: 'ai-automation',
        title: 'Servicio de creación de contenido con IA',
        revenueGoal: '$5K-50K/mes',
        isPro: false,
        systemPrompt: 'Eres un experto en estrategias de monetización con IA. Crea un plan detallado para un servicio de creación de contenido usando IA. Objetivo: $5K-50K/mes. Incluye: 1) Resumen ejecutivo 2) Análisis de mercado 3) Plan de acción paso a paso 4) Recursos necesarios 5) KPIs 6) Proyección de ingresos 7) Riesgos y mitigación 8) Estrategias de escalamiento.'
      },
      {
        id: 'ai-2',
        categoryId: 'ai-automation',
        title: 'Consultoría ChatGPT para pequeñas empresas',
        revenueGoal: '$10K-100K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en consultoría de IA. Crea un plan detallado para ofrecer servicios de consultoría basados en ChatGPT a pequeñas empresas. Objetivo: $10K-100K/mes. Incluye casos de estudio reales, pricing específico ($200-500/hora), estrategias de adquisición de clientes, y plan de escalamiento a agencia.'
      },
      {
        id: 'ai-3',
        categoryId: 'ai-automation',
        title: 'Monetizar arte generado por IA (NFTs)',
        revenueGoal: '$10K-500K',
        isPro: true,
        systemPrompt: 'Eres un experto en NFTs y arte digital. Crea una estrategia completa para monetizar arte generado por IA creando colecciones NFT. Objetivo: $10K-500K. Incluye: selección de plataformas (OpenSea, Rarible), estrategias de marketing, construcción de comunidad, y casos de éxito reales.'
      },
      {
        id: 'ai-4',
        categoryId: 'ai-automation',
        title: 'Gestión de redes sociales con IA',
        revenueGoal: '$5K-30K/mes',
        isPro: false,
        systemPrompt: 'Eres un experto en marketing digital y automatización. Crea un modelo de negocio para servicios de gestión de redes sociales usando IA. Objetivo: $5K-30K/mes. Incluye herramientas de IA a usar, paquetes de servicios, y estrategia de captación de clientes.'
      },
      {
        id: 'ai-5',
        categoryId: 'ai-automation',
        title: 'Plataforma de tutoría con IA',
        revenueGoal: '$5K-50K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en EdTech y IA. Diseña una plataforma de tutoría personalizada con IA. Objetivo: $5K-50K/mes. Incluye: stack tecnológico específico, modelo de pricing (freemium vs suscripción), estrategia de adquisición de usuarios, y plan de desarrollo MVP.'
      },
      {
        id: 'ai-6',
        categoryId: 'ai-automation',
        title: 'Automatización de procesos empresariales',
        revenueGoal: '$10K-100K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en automatización empresarial. Crea un servicio de automatización de procesos con IA para empresas. Objetivo: $10K-100K/mes. Incluye: nichos específicos a atacar, herramientas de IA, casos de uso con ROI demostrable, y estrategia de ventas B2B.'
      },
      {
        id: 'ai-7',
        categoryId: 'ai-automation',
        title: 'Agencia de chatbots personalizados',
        revenueGoal: '$5K-50K/mes',
        isPro: false,
        systemPrompt: 'Eres un experto en desarrollo de chatbots. Crea un plan para una agencia de chatbots personalizados. Objetivo: $5K-50K/mes. Incluye: plataformas a usar, paquetes de servicios, industrias objetivo, y estrategia de marketing.'
      }
    ]
  },
  {
    id: 'digital-products',
    name: 'Productos Digitales',
    icon: '💎',
    description: 'Crea y vende productos digitales',
    prompts: [
      {
        id: 'dp-1',
        categoryId: 'digital-products',
        title: 'Creación de cursos digitales',
        revenueGoal: '$50K-200K/año',
        isPro: true,
        systemPrompt: 'Eres un experto en creación de cursos online. Diseña una estrategia completa para crear y vender cursos digitales. Objetivo: $50K-200K/año. Incluye: selección de nicho rentable, plataformas (Teachable, Kajabi), pricing ($297-$997), estrategia de lanzamiento, y embudo de ventas detallado.'
      },
      {
        id: 'dp-2',
        categoryId: 'digital-products',
        title: 'Producto SaaS rentable',
        revenueGoal: '$10K MRR',
        isPro: true,
        systemPrompt: 'Eres un experto en productos SaaS. Crea un plan para construir y monetizar un producto SaaS. Objetivo: $10K MRR. Incluye: validación de idea, stack tecnológico específico, modelo de pricing (freemium/tiered), estrategia de adquisición de usuarios, y métricas clave (CAC, LTV, churn).'
      },
      {
        id: 'dp-3',
        categoryId: 'digital-products',
        title: 'Plantillas digitales de alto valor',
        revenueGoal: '$3K-30K/mes',
        isPro: false,
        systemPrompt: 'Eres un experto en productos digitales. Crea una estrategia para crear y vender plantillas digitales de alto valor. Objetivo: $3K-30K/mes. Incluye: tipos de plantillas rentables, plataformas de venta, pricing, y marketing.'
      },
      {
        id: 'dp-4',
        categoryId: 'digital-products',
        title: 'Newsletters premium y comunidades',
        revenueGoal: '$5K-50K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en content business. Diseña un modelo de negocio de newsletters premium y comunidades de pago. Objetivo: $5K-50K/mes. Incluye: nicho específico, plataformas (Substack, Ghost, Circle), pricing ($10-50/mes), estrategia de crecimiento, y monetización adicional.'
      },
      {
        id: 'dp-5',
        categoryId: 'digital-products',
        title: 'Coaching de alto ticket',
        revenueGoal: '$10K-100K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en coaching de alto valor. Crea un sistema para monetizar expertise a través de coaching de alto ticket. Objetivo: $10K-100K/mes. Incluye: posicionamiento como experto, pricing ($2K-10K/programa), embudo de ventas, estrategia de webinars, y escalamiento.'
      }
    ]
  },
  {
    id: 'ecommerce',
    name: 'E-commerce & Dropshipping',
    icon: '🛒',
    description: 'Vende productos online',
    prompts: [
      {
        id: 'ec-1',
        categoryId: 'ecommerce',
        title: 'Dropshipping rentable',
        revenueGoal: '$20K-100K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en dropshipping. Crea una estrategia completa de dropshipping. Objetivo: $20K-100K/mes. Incluye: selección de nicho ganador, proveedores confiables (AliExpress, CJ Dropshipping), plataforma (Shopify), estrategia de Facebook Ads ($1K-5K presupuesto), y métricas de rentabilidad.'
      },
      {
        id: 'ec-2',
        categoryId: 'ecommerce',
        title: 'Marca privada en Amazon FBA',
        revenueGoal: '$50K inversión inicial',
        isPro: true,
        systemPrompt: 'Eres un experto en Amazon FBA. Diseña un plan de negocio de marca privada en Amazon. Inversión: $50K. Incluye: investigación de productos, sourcing en China, costos detallados, estrategia de lanzamiento, PPC, y proyección de ROI a 12 meses.'
      },
      {
        id: 'ec-3',
        categoryId: 'ecommerce',
        title: 'Print-on-demand rentable',
        revenueGoal: '$3K-20K/mes',
        isPro: false,
        systemPrompt: 'Eres un experto en print-on-demand. Crea una estrategia para un negocio rentable de print-on-demand. Objetivo: $3K-20K/mes. Incluye: nichos rentables, plataformas (Printful, Printify), diseño de productos, y marketing.'
      },
      {
        id: 'ec-4',
        categoryId: 'ecommerce',
        title: 'Cajas de suscripción',
        revenueGoal: '1000+ suscriptores',
        isPro: true,
        systemPrompt: 'Eres un experto en subscription boxes. Diseña un plan para lanzar un negocio de cajas de suscripción. Objetivo: 1000+ suscriptores. Incluye: selección de nicho, sourcing de productos, pricing ($30-80/mes), logística, retención de clientes, y unit economics detallados.'
      },
      {
        id: 'ec-5',
        categoryId: 'ecommerce',
        title: 'Reventa de artículos de alto valor',
        revenueGoal: '$5K-30K/mes',
        isPro: false,
        systemPrompt: 'Eres un experto en reventa. Crea un modelo de negocio para revender artículos de alto valor. Objetivo: $5K-30K/mes. Incluye: categorías rentables (sneakers, electrónica, relojes), plataformas, estrategia de sourcing, y gestión de inventario.'
      }
    ]
  },
  {
    id: 'investment',
    name: 'Inversión & Trading',
    icon: '📈',
    description: 'Estrategias de inversión',
    prompts: [
      {
        id: 'inv-1',
        categoryId: 'investment',
        title: 'Day trading sistemático',
        revenueGoal: '$2K-10K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en day trading. Crea una estrategia sistemática de day trading para principiantes. Objetivo: $2K-10K/mes. Incluye: capital inicial recomendado ($10K-25K), plataformas específicas, estrategias técnicas (scalping, momentum), gestión de riesgo (2% por trade), y plan de aprendizaje.'
      },
      {
        id: 'inv-2',
        categoryId: 'investment',
        title: 'Portafolio de criptomonedas',
        revenueGoal: '100-300% ROI',
        isPro: true,
        systemPrompt: 'Eres un experto en criptomonedas. Diseña una estrategia integral de portafolio de criptomonedas. Objetivo: 100-300% ROI. Incluye: asignación específica (BTC 40%, ETH 30%, altcoins 30%), exchanges recomendados, estrategia DCA, gestión de riesgo, y timing de mercado.'
      },
      {
        id: 'inv-3',
        categoryId: 'investment',
        title: 'Inversión inmobiliaria',
        revenueGoal: '$50K-200K capital',
        isPro: true,
        systemPrompt: 'Eres un experto en inversión inmobiliaria. Crea una estrategia de inversión inmobiliaria. Capital: $50K-200K. Incluye: estrategias específicas (BRRRR, house hacking, rental properties), análisis de mercados, financiamiento, cálculo de ROI y cash flow, y escalamiento.'
      },
      {
        id: 'inv-4',
        categoryId: 'investment',
        title: 'Trading de opciones',
        revenueGoal: '$2K-10K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en opciones financieras. Diseña una estrategia sistemática de trading de opciones. Objetivo: $2K-10K/mes. Incluye: estrategias específicas (credit spreads, iron condors), plataformas, capital inicial ($25K), gestión de riesgo, y backtesting.'
      },
      {
        id: 'inv-5',
        categoryId: 'investment',
        title: 'Inversión en dividendos',
        revenueGoal: '$1K-5K/mes pasivo',
        isPro: false,
        systemPrompt: 'Eres un experto en inversión de dividendos. Crea una estrategia de inversión en crecimiento de dividendos. Objetivo: $1K-5K/mes pasivo. Incluye: selección de acciones, diversificación, reinversión de dividendos, y proyección a largo plazo.'
      }
    ]
  },
  {
    id: 'services',
    name: 'Servicios de Alto Valor',
    icon: '💼',
    description: 'Ofrece servicios profesionales',
    prompts: [
      {
        id: 'srv-1',
        categoryId: 'services',
        title: 'Agencia de marketing digital',
        revenueGoal: '$50K-300K/año',
        isPro: true,
        systemPrompt: 'Eres un experto en agencias digitales. Diseña un plan para una agencia de marketing digital. Objetivo: $50K-300K/año. Incluye: servicios específicos (SEO, PPC, social media), pricing ($2K-10K/mes por cliente), adquisición de clientes, equipo necesario, y escalamiento.'
      },
      {
        id: 'srv-2',
        categoryId: 'services',
        title: 'Consultoría de alto valor',
        revenueGoal: '$200-500/hora',
        isPro: true,
        systemPrompt: 'Eres un experto en consultoría. Crea un modelo de consultoría en tu área de expertise. Rate: $200-500/hora. Incluye: posicionamiento como experto, packaging de servicios, estrategia de networking, propuestas ganadoras, y escalamiento a retainers.'
      },
      {
        id: 'srv-3',
        categoryId: 'services',
        title: 'Agencia de asistentes virtuales',
        revenueGoal: '20+ clientes',
        isPro: false,
        systemPrompt: 'Eres un experto en servicios virtuales. Diseña una estrategia para una agencia de asistentes virtuales. Objetivo: 20+ clientes. Incluye: servicios ofrecidos, reclutamiento de VAs, pricing, y gestión de operaciones.'
      },
      {
        id: 'srv-4',
        categoryId: 'services',
        title: 'Agencia de desarrollo de software',
        revenueGoal: '$100K-500K/año',
        isPro: true,
        systemPrompt: 'Eres un experto en desarrollo de software. Crea un plan de negocio para una agencia de desarrollo. Objetivo: $100K-500K/año. Incluye: especialización (web, mobile, blockchain), pricing por proyecto, adquisición de clientes, equipo técnico, y gestión de proyectos.'
      },
      {
        id: 'srv-5',
        categoryId: 'services',
        title: 'Copywriting de alto nivel',
        revenueGoal: '$5K-30K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en copywriting. Diseña una estrategia para lanzar un servicio de copywriting de alto nivel. Objetivo: $5K-30K/mes. Incluye: nichos rentables (VSL, email sequences, landing pages), pricing ($1K-5K por proyecto), portfolio building, y adquisición de clientes.'
      }
    ]
  },
  {
    id: 'content',
    name: 'Contenido & Creadores',
    icon: '🎬',
    description: 'Monetiza tu contenido',
    prompts: [
      {
        id: 'cnt-1',
        categoryId: 'content',
        title: 'Monetización de YouTube',
        revenueGoal: '$10K-100K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en YouTube. Crea una estrategia de monetización de YouTube. Objetivo: $10K-100K/mes. Incluye: selección de nicho rentable, estrategia de contenido, optimización SEO, múltiples fuentes de ingresos (AdSense, sponsors, productos), y crecimiento acelerado.'
      },
      {
        id: 'cnt-2',
        categoryId: 'content',
        title: 'Monetización de podcast',
        revenueGoal: '$5K-50K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en podcasting. Diseña un plan para monetizar un podcast. Objetivo: $5K-50K/mes. Incluye: nicho específico, estrategia de crecimiento, patrocinios ($25-100 CPM), contenido premium, productos propios, y plataformas de distribución.'
      },
      {
        id: 'cnt-3',
        categoryId: 'content',
        title: 'Blog rentable',
        revenueGoal: '$3K-30K/mes',
        isPro: false,
        systemPrompt: 'Eres un experto en blogging. Crea una estrategia para construir un blog rentable. Objetivo: $3K-30K/mes. Incluye: selección de nicho, SEO, monetización (ads, afiliados, productos), y crecimiento de tráfico.'
      },
      {
        id: 'cnt-4',
        categoryId: 'content',
        title: 'Contenido viral en TikTok',
        revenueGoal: '$5K-50K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en TikTok. Diseña un modelo de negocio de creación de contenido viral en TikTok. Objetivo: $5K-50K/mes. Incluye: nichos virales, estrategia de contenido, Creator Fund, brand deals, productos propios, y crecimiento a 100K+ seguidores.'
      },
      {
        id: 'cnt-5',
        categoryId: 'content',
        title: 'Instagram influencer partnerships',
        revenueGoal: '$5K-50K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en Instagram marketing. Crea una estrategia para monetizar Instagram con partnerships de influencers. Objetivo: $5K-50K/mes. Incluye: nicho específico, crecimiento orgánico, rates por post ($500-5K), negociación con marcas, y diversificación de ingresos.'
      }
    ]
  },
  {
    id: 'crypto',
    name: 'Crypto & DeFi',
    icon: '₿',
    description: 'Oportunidades en blockchain',
    prompts: [
      {
        id: 'cry-1',
        categoryId: 'crypto',
        title: 'Yield farming en DeFi',
        revenueGoal: '50-200% APY',
        isPro: true,
        systemPrompt: 'Eres un experto en DeFi. Crea una estrategia integral de yield farming. Objetivo: 50-200% APY. Incluye: protocolos específicos (Aave, Compound, Curve), gestión de riesgo (impermanent loss, smart contract risk), estrategias de farming, y rebalanceo de portfolio.'
      },
      {
        id: 'cry-2',
        categoryId: 'crypto',
        title: 'Arbitraje de criptomonedas',
        revenueGoal: '$2K-20K/mes',
        isPro: true,
        systemPrompt: 'Eres un experto en arbitraje crypto. Diseña una estrategia de arbitraje de criptomonedas entre exchanges. Objetivo: $2K-20K/mes. Incluye: exchanges específicos, bots de trading, capital inicial ($10K-50K), gestión de fees, y automatización.'
      },
      {
        id: 'cry-3',
        categoryId: 'crypto',
        title: 'Colecciones NFT rentables',
        revenueGoal: '$10K-500K',
        isPro: true,
        systemPrompt: 'Eres un experto en NFTs. Crea una estrategia para crear y monetizar colecciones NFT. Objetivo: $10K-500K. Incluye: concepto de colección, arte generativo, smart contracts, estrategia de lanzamiento, construcción de comunidad Discord, y roadmap post-mint.'
      },
      {
        id: 'cry-4',
        categoryId: 'crypto',
        title: 'Minería de criptomonedas',
        revenueGoal: '$5K-50K inversión',
        isPro: true,
        systemPrompt: 'Eres un experto en minería crypto. Diseña un modelo de negocio de operaciones de minería. Inversión: $5K-50K. Incluye: hardware específico (ASICs vs GPUs), criptomonedas a minar, costos de electricidad, ROI proyectado, y escalamiento.'
      },
      {
        id: 'cry-5',
        categoryId: 'crypto',
        title: 'Lanzamiento de proyecto crypto',
        revenueGoal: '$100K-1M',
        isPro: true,
        systemPrompt: 'Eres un experto en lanzamiento de proyectos crypto. Diseña un plan para lanzar un proyecto de criptomoneda. Objetivo: $100K-1M. Incluye: tokenomics detallados, whitepaper, smart contracts, estrategia de marketing, IDO/ICO, y construcción de comunidad.'
      }
    ]
  }
];
