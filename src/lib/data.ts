

export const PROJECTS_DATA = [
  {
    title: "Lumora Labs",
    description: "AI automation agency. Building scalable workflows and automated communication infrastructure.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Belajar Bareng Nata",
    description: "E-learning platform providing structured study materials and practice modules.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Stellar Evolution Research",
    description: "Applying Physics-Informed Neural Networks (PINNs) to classify evolution phases and predict star age using Gaia DR3 dataset.",
    image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Wearable Health Monitoring System",
    description: "Hardware-software integration using ESP32, Blynk, and Hugging Face AI for real-time health tracking.",
    image: "https://images.unsplash.com/photo-1557825835-b0d771804f32?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Web3 & Trading Automation",
    description: "Automated trading logic and workflow orchestration utilizing n8n, Docker, and the Solana blockchain.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=800&auto=format&fit=crop",
  }
];

export const EXPERIENCES_DATA = [
  {
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
    title: "Faculty of Mathematics and Natural Sciences, IPB University",
    role: "Laboratory Assistant",
    duration: "Present",
    description: "Guiding laboratory sessions, managing technical equipment, and assisting students in hands-on experiments for Basic Physics, Analog Electronics, and Sensors & Transducers courses."
  },
  {
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200",
    title: "Private & Educational Institution Tutoring",
    role: "Physics & Mathematics Tutor",
    duration: "Present",
    description: "Delivering pedagogical explanations and preparing comprehensive learning materials for advanced university-level subjects including Calculus, Mathematical Physics, and Basic Physics 2."
  },
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    title: "Lumora Labs",
    role: "The Engineer & Co-Founder",
    duration: "Jan 2026 - Present",
    description: "Building scalable AI automation workflows, deploying containerized systems via Docker, and developing automated communication infrastructure."
  }
];

export const BLOG_CATEGORIES = [
  {
    id: "anime",
    title: "Anime Reviews",
    size: "large",
    color: "bg-timberwolf/40 border-timberwolf",
    icon: "Tv",
    articles: [
      "Analysis of Frieren's Worldbuilding",
      "Evangelion Retrospective: 25 Years Later",
      "The Visual Directing of Chainsaw Man",
      "Why Vinland Saga Season 2 is a Masterpiece"
    ]
  },
  {
    id: "film",
    title: "Film Reviews",
    size: "small",
    color: "bg-seashell border-timberwolf/50",
    icon: "Clapperboard",
    articles: [
      "Oppenheimer's Sound Design",
      "Dune: Scaling the Unadaptable",
      "The Cinematography of Blade Runner 2049"
    ]
  },
  {
    id: "tech",
    title: "Science & Tech",
    size: "small",
    color: "bg-khaki/20 border-khaki/30",
    icon: "Microchip",
    articles: [
      "Introduction to Physics-Informed Neural Networks",
      "The Future of Web3 Infrastructure",
      "Scaling AI Agents in Production"
    ]
  },
  {
    id: "stories",
    title: "Short Stories",
    size: "large",
    color: "bg-gradient-to-br from-timberwolf/50 to-seashell border-timberwolf",
    icon: "BookOpen",
    articles: [
      "The Last Transmission from Kepler-186f",
      "Echoes of a Digital Ghost",
      "A Walk Through the Neon Rain",
      "The Clockmaker's Paradox"
    ]
  }
];

export const SOCIAL_LINKS = [
  {
    name: "Email",
    icon: "Mail",
    href: "mailto:dzulfikaryudha@gmail.com",
    position: { x: -40, y: -40 },
  },
  {
    name: "LinkedIn",
    icon: "LinkedinIcon", // Using a string to map to the custom SVG component later to avoid React components in data file
    href: "https://www.linkedin.com/in/pranatayudha26/",
    position: { x: 40, y: -40 },
  },
  {
    name: "GitHub",
    icon: "GithubIcon",
    href: "https://github.com/pranata-dev",
    position: { x: -40, y: 40 },
  },
  {
    name: "Twitter",
    icon: "TwitterIcon",
    href: "https://x.com/pranata",
    position: { x: 40, y: 40 },
  },
];
