export const personal = {
  name: "Sebastian Galeano",
  role: "FullStack Developer",
  typewriterRoles: [
    "Frontend Developer",
    "Backend Developer",
    "UI Craftsman",
    "Problem Solver",
  ],
  bio: "Desarrollador FullStack con +2 años construyendo productos web de alto rendimiento. Me especializo en React + Next.js para frontend y Node.js + PostgreSQL para backend, con foco en arquitectura limpia y experiencias de usuario memorables.",
  email: "sebastian.galeano20@gmail.com",
  github: "https://github.com/SebastianGaleano20",
  linkedin: "https://linkedin.com/in/sebastiangaleano20",
  // ↓ Actualizar con la URL real de tu deploy (Vercel, dominio propio, etc.)
  siteUrl: "https://sebastiangaleano.dev",
  keywords: [
    "FullStack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Frontend Developer",
    "Backend Developer",
    "JavaScript",
    "TypeScript",
    "PostgreSQL",
    "AWS",
    "Argentina",
    "Sebastian Galeano",
    "Portfolio",
  ],
};

export const skills = {
  Frontend: [
    { name: "JavaScript", icon: "/assets/icons/js.svg" },
    { name: "TypeScript", icon: "/assets/icons/typescript.svg" },
    { name: "React", icon: "/assets/icons/react.svg" },
    { name: "Next.js", icon: "/assets/icons/nextjs.svg" },
    { name: "Astro", icon: "/assets/icons/Astro.svg" },
    { name: "HTML5", icon: "/assets/icons/html.svg" },
    { name: "CSS3", icon: "/assets/icons/css.svg" },
    { name: "TailwindCSS", icon: "/assets/icons/tailwindcss.svg" },
  ],
  Backend: [
    { name: "Node.js", icon: "/assets/icons/nodejs.svg" },
    { name: "NestJS", icon: "/assets/icons/nestjs.svg" },
    { name: "Express", icon: "/assets/icons/express.svg" },
    { name: "PostgreSQL", icon: "/assets/icons/postgre.svg" },
    { name: "Firebase", icon: "/assets/icons/firebase.svg" },
    { name: "Prisma", icon: "/assets/icons/prisma.svg" },
  ],
  Tools: [
    { name: "Git", icon: "/assets/icons/git.svg" },
    { name: "Figma", icon: "/assets/icons/figma.svg" },
    { name: "Postman", icon: "/assets/icons/postman.svg" },
    { name: "Vite", icon: "/assets/icons/vite.svg" },
    { name: "Vitest", icon: "/assets/icons/vitest.svg" },
    { name: "Playwright", icon: "/assets/icons/playwrite.png" },
    { name: "Trello", icon: "/assets/icons/trello.svg" },
    { name: "Linux", icon: "/assets/icons/linux.svg" },
  ],
  DevOps: [
    { name: "AWS", icon: "/assets/icons/aws.svg" },
  ],
};

export const projects = [
  {
    id: 1,
    name: "Project Management App",
    description: "Plataforma fullstack para gestión de proyectos con tableros Kanban y colaboración en equipo.",
    bullets: [
      "Autenticación JWT con sesiones persistentes",
      "Tableros Kanban con drag-and-drop",
      "API REST con Next.js App Router",
    ],
    tech: ["TypeScript", "Next.js", "TailwindCSS"],
    github: "https://github.com/SebastianGaleano20/frontend-challenge",
    live: "https://p-management.vercel.app",
    image: "/assets/images/pjm.jpeg",
  },
  {
    id: 2,
    name: "Escucha Fácil",
    description: "App de música con IA (Cohere API) y comandos de voz para control total de la interfaz.",
    bullets: [
      "Integración Cohere AI para respuestas inteligentes",
      "Comandos de voz nativos del navegador",
      "Backend Node.js + PostgreSQL en AWS",
    ],
    tech: ["JavaScript", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    github: "https://github.com/fernandoderrigo/ProyectoFinal-IntegrarTec",
    live: "https://escuchafacil.vercel.app",
    image: "/assets/images/Ef.png",
  },
  {
    id: 3,
    name: "Barrio Fino Barber",
    description: "Sitio web freelance para barbería con reservas online, galería y diseño 100% responsive.",
    bullets: [
      "Sistema de turnos con calendario interactivo",
      "Galería de imágenes con lazy loading",
      "Deploy automatizado en Vercel con CI/CD",
    ],
    tech: ["JavaScript", "Next.js", "TailwindCSS"],
    github: "https://github.com/SebastianGaleano20/barber-app",
    live: "https://barriofino-barber.vercel.app",
    image: "/assets/images/barber.png",
  },
  {
    id: 4,
    name: "Escucha Fácil API",
    description: "API RESTful con autenticación JWT, validación con Joi y ORM Prisma sobre PostgreSQL.",
    bullets: [
      "JWT + bcrypt para autenticación segura",
      "Validación de schemas con Joi",
      "Prisma ORM + PostgreSQL en AWS RDS",
    ],
    tech: ["JavaScript", "Node.js", "Express", "PostgreSQL", "Prisma"],
    github: "https://github.com/fernandoderrigo/ProyectoFinal-IntegrarTec-Back",
    live: "https://proyectofinal-integrartec-back.onrender.com/api",
    image: "/assets/images/api1.png",
  },
];

export const certifications = [
  {
    entity: "Global Learning",
    year: "2024",
    courses: [
      {
        name: "TypeScript & Testing",
        topics: ["TypeScript config", "Types", "Classes", "Interfaces", "Generics", "Unit/Integration/E2E Testing"],
        image: "/assets/images/GL-C2.jpeg",
      },
      {
        name: "FullStack Developer MERN",
        topics: ["HTML5", "CSS3", "Astro", "React", "Next.js", "TailwindCSS", "Node.js", "Express", "MongoDB", "PostgreSQL", "JWT", "AWS"],
        image: "/assets/images/C1.png",
      },
    ],
  },
  {
    entity: "UTN",
    year: "2023",
    courses: [
      {
        name: "FullStack Developer MERN",
        topics: ["HTML5", "CSS3", "TailwindCSS", "React", "JavaScript", "TypeScript", "Node.js", "Express", "MongoDB"],
        image: "/assets/images/C2.png",
      },
    ],
  },
  {
    entity: "Argentina Programa 4.0",
    year: "2023",
    courses: [
      {
        name: "IT English A1.1",
        topics: ["Technical English for IT environments"],
        image: "/assets/images/C3.png",
      },
      {
        name: "ReactJS",
        topics: ["React hooks", "State management", "Component patterns"],
        image: null,
      },
      {
        name: "Front-End Developer",
        topics: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git", "Testing", "Performance", "Accessibility"],
        image: "/assets/images/C4.png",
      },
    ],
  },
];
