import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

// Initialize the Notion Client
export const notion = process.env.NOTION_TOKEN
  ? new Client({ auth: process.env.NOTION_TOKEN })
  : null;

const n2m = notion ? new NotionToMarkdown({ notionClient: notion }) : null;

// ============================================================================
// HARDCODED FALLBACK DATA
// ============================================================================

const FALLBACK_PROJECTS = [
  {
    id: "proj-1",
    title: "Lumora Labs",
    year: "2024",
    shortSummary: "Automated communication infrastructure and enterprise LLM integration.",
    fullDescription: "An AI automation agency focusing on optimizing operations for businesses. Leading the development of scalable automated communication infrastructure, integrating large language models with enterprise APIs, and automating complex workflows (e.g., Docker orchestration via n8n). Also developing scalable training pipelines for small language models and researching efficient fine-tuning techniques like QLoRA.",
    techStack: ["React", "Python", "Docker", "n8n", "LLMs"],
    githubLink: "#",
    liveLink: "#",
    images: [
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "proj-2",
    title: "Stellar Evolution Simulator",
    year: "2023",
    shortSummary: "Computer vision pipeline for celestial body tracking and data aggregation.",
    fullDescription: "An automated pipeline that processes raw telescope feeds to identify and track celestial bodies. Uses OpenCV and a custom neural network to filter out atmospheric noise and classify objects in real-time. Capable of mapping multi-body gravitational systems across vast distances.",
    techStack: ["Python", "OpenCV", "PyTorch", "C++"],
    githubLink: "#",
    liveLink: "#",
    images: [
      "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "proj-3",
    title: "Belajar Bareng Nata",
    year: "2023",
    shortSummary: "Interactive physics tutoring platform and concept visualizer.",
    fullDescription: "A personalized tutoring platform designed to simplify complex scientific concepts into intuitive explanations. Features a custom simulation engine built with WebAssembly to visualize entropy generation, thermodynamics, and electromagnetism dynamically in the browser.",
    techStack: ["Next.js", "WebAssembly", "Framer Motion", "Tailwind CSS"],
    githubLink: "#",
    liveLink: "#",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "proj-4",
    title: "Quantum State Visualizer",
    year: "2022",
    shortSummary: "Interactive 3D visualization of qubit states.",
    fullDescription: "A web-based simulation engine for visualizing single and multi-qubit states using Bloch spheres and interactive unitary transformations. Built to help students grasp quantum superposition and entanglement visually.",
    techStack: ["React", "Three.js", "TypeScript"],
    githubLink: "#",
    liveLink: "#",
    images: [
      "https://images.unsplash.com/photo-1639762681485-074b7f4ec651?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1621504450181-5d156fd53608?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "proj-5",
    title: "Wearable Health IoT",
    year: "2022",
    shortSummary: "Decentralized data collection system for continuous biometric logging.",
    fullDescription: "An IoT architecture using microcontrollers to continuously log biometric and environmental data (temperature, pressure, humidity). Data is piped securely via MQTT to a centralized PostgreSQL database and visualized in real-time on a secure Next.js dashboard.",
    techStack: ["Node.js", "MQTT", "PostgreSQL", "Next.js"],
    githubLink: "#",
    liveLink: "#",
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?auto=format&fit=crop&q=80&w=800"
    ]
  }
];

const FALLBACK_EXPERIENCES = [
  {
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1200",
    title: "Lumora Labs",
    organization: "Lumora Labs",
    role: "The Engineer & Co-Founder",
    duration: "Jan 2026 - Present",
    date: "2023 — PRES.",
    description: "Building scalable AI automation workflows, deploying containerized systems via Docker, and developing automated communication infrastructure."
  },
  {
    image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&q=80&w=1200",
    title: "Faculty of Mathematics and Natural Sciences, IPB University",
    organization: "Faculty of Mathematics and Natural Sciences, IPB University",
    role: "Laboratory Assistant",
    duration: "Present",
    date: "2021 — 2023",
    description: "Guiding laboratory sessions, managing technical equipment, and assisting students in hands-on experiments for Basic Physics, Analog Electronics, and Sensors & Transducers courses."
  },
  {
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1200",
    title: "Private & Educational Institution Tutoring",
    organization: "Private & Educational Institution Tutoring",
    role: "Physics & Mathematics Tutor",
    duration: "Present",
    date: "2021 — 2023",
    description: "Delivering pedagogical explanations and preparing comprehensive learning materials for advanced university-level subjects including Calculus, Mathematical Physics, and Basic Physics 2."
  }
];

const FALLBACK_BLOG_CATEGORIES = [
  {
    id: "anime",
    title: "Anime Reviews",
    size: "large",
    color: "bg-timberwolf/40 border-timberwolf",
    imageSrc: "/anime-reviewe.webp",
    articles: [
      { title: "Analysis of Frieren's Worldbuilding", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "Evangelion Retrospective: 25 Years Later", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "The Visual Directing of Chainsaw Man", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "Why Vinland Saga Season 2 is a Masterpiece", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." }
    ]
  },
  {
    id: "film",
    title: "Music & Movie Reviews",
    size: "small",
    color: "bg-seashell border-timberwolf/50",
    imageSrc: "/music-review.webp",
    articles: [
      { title: "Oppenheimer's Sound Design", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "Dune: Scaling the Unadaptable", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "The Cinematography of Blade Runner 2049", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." }
    ]
  },
  {
    id: "tech",
    title: "Science & Tech",
    size: "small",
    color: "bg-khaki/20 border-khaki/30",
    imageSrc: "/tech-review.webp",
    articles: [
      { title: "Introduction to Physics-Informed Neural Networks", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "The Future of Web3 Infrastructure", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "Scaling AI Agents in Production", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." }
    ]
  },
  {
    id: "stories",
    title: "Book Reviews",
    size: "large",
    color: "bg-gradient-to-br from-timberwolf/50 to-seashell border-timberwolf",
    imageSrc: "/books-review.webp",
    articles: [
      { title: "The Last Transmission from Kepler-186f", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "Echoes of a Digital Ghost", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "A Walk Through the Neon Rain", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." },
      { title: "The Clockmaker's Paradox", summary: "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context." }
    ]
  }
];

// ============================================================================
// DATA TRANSFORMERS & FETCHER FUNCTIONS
// ============================================================================

export type Project = typeof FALLBACK_PROJECTS[0];
export type Experience = typeof FALLBACK_EXPERIENCES[0];
export type BlogCategory = typeof FALLBACK_BLOG_CATEGORIES[0];

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractText(property: any): string {
  if (!property) return "";
  if (property.type === "title") return property.title[0]?.plain_text || "";
  if (property.type === "rich_text") return property.rich_text[0]?.plain_text || "";
  if (property.type === "select") return property.select?.name || "";
  if (property.type === "date") return property.date?.start || "";
  if (property.type === "url") return property.url || "";
  return "";
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractFiles(property: any): string[] {
  if (!property || !property.files) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return property.files.map((f: any) => f.file?.url || f.external?.url || "").filter(Boolean);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function extractMultiSelect(property: any): string[] {
  if (!property || !property.multi_select) return [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return property.multi_select.map((s: any) => s.name);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformNotionToProject(page: any): Project {
  return {
    id: page.id,
    title: extractText(page.properties.Title),
    year: extractText(page.properties.Year),
    shortSummary: extractText(page.properties["Short Summary"]),
    fullDescription: extractText(page.properties["Full Description"]),
    techStack: extractMultiSelect(page.properties["Tech Stack"]),
    githubLink: extractText(page.properties["GitHub Link"]),
    liveLink: extractText(page.properties["Live Link"]),
    images: extractFiles(page.properties.Images),
  };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function transformNotionToExperience(page: any): Experience {
  const org = extractText(page.properties.Organization);
  return {
    image: extractFiles(page.properties["Background Image"])[0] || "",
    title: org,
    organization: org,
    role: extractText(page.properties.Role),
    duration: extractText(page.properties.Duration),
    date: extractText(page.properties["Date Range"]),
    description: extractText(page.properties.Description),
  };
}

export async function getProjects(): Promise<Project[]> {
  if (!notion || !process.env.NOTION_PROJECTS_ID) {
    return FALLBACK_PROJECTS;
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_PROJECTS_ID,
    });

    return response.results.map(transformNotionToProject);
  } catch (error) {
    console.error("Failed to fetch projects from Notion:", error);
    return FALLBACK_PROJECTS;
  }
}

export async function getExperiences(): Promise<Experience[]> {
  if (!notion || !process.env.NOTION_EXPERIENCES_ID) {
    return FALLBACK_EXPERIENCES;
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_EXPERIENCES_ID,
      sorts: [
        {
          property: 'Date Range',
          direction: 'descending'
        }
      ]
    });

    return response.results.map(transformNotionToExperience);
  } catch (error) {
    console.error("Failed to fetch experiences from Notion:", error);
    return FALLBACK_EXPERIENCES;
  }
}

export async function getBlogCategories(): Promise<BlogCategory[]> {
  if (!notion || !process.env.NOTION_BLOG_ID) {
    return FALLBACK_BLOG_CATEGORIES;
  }

  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_ID,
    });

    const categoriesMap: Record<string, { title: string, summary: string }[]> = {};
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    for (const page of response.results as any[]) {
      const title = extractText(page.properties.Title);
      const cat = extractText(page.properties.Category);
      const summary = extractText(page.properties.Summary) || "This is a comprehensive exploration of the subject, analyzing its historical impact, core structural mechanics, and underlying philosophical themes in a modern context.";
      
      if (title && cat) {
        if (!categoriesMap[cat]) categoriesMap[cat] = [];
        categoriesMap[cat].push({ title, summary });
      }
    }

    const categories = FALLBACK_BLOG_CATEGORIES.map(template => {
      const matchingCat = Object.keys(categoriesMap).find(k => k.toLowerCase() === template.title.toLowerCase());
      return {
        ...template,
        articles: matchingCat ? categoriesMap[matchingCat] : []
      };
    });

    return categories;
  } catch (error) {
    console.error("Failed to fetch blog categories from Notion:", error);
    return FALLBACK_BLOG_CATEGORIES;
  }
}

export interface BlogPost {
  title: string;
  category: string;
  date: string;
  content: string;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  if (!notion || !process.env.NOTION_BLOG_ID || !n2m) {
    return null;
  }

  try {
    // Fetch all posts and find the matching post in-memory 
    // This allows us to match the auto-generated slug from the UI (which uses the Title)
    // without requiring a strict 'Slug' column in Notion.
    const response = await notion.databases.query({
      database_id: process.env.NOTION_BLOG_ID,
    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let targetPage: any = null;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    for (const page of response.results as any[]) {
      const title = extractText(page.properties.Title);
      const generatedSlug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

      // Also check if they provided an explicit Slug property just in case
      const explicitSlug = extractText(page.properties.Slug);

      if (generatedSlug === slug || explicitSlug === slug) {
        targetPage = page;
        break;
      }
    }

    if (!targetPage) return null;

    const pageId = targetPage.id;
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);

    return {
      title: extractText(targetPage.properties.Title),
      category: extractText(targetPage.properties.Category),
      date: extractText(targetPage.properties.Date),
      content: mdString.parent || ""
    };
  } catch (error) {
    console.error("Failed to fetch blog post from Notion:", error);
    return null;
  }
}
