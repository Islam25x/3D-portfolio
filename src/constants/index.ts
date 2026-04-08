import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  threejs,
  webMaster,
  linkDev,
  homeless,
  Exclusive,
  Atmoscan,
  VivaDecor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "front end Developer",
    icon: web,
  },
  {
    title: "Ui / Ux Designer",
    icon: mobile,
  },
  {
    title: "three.js Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "front end internship",
    company_name: "Web master",
    icon: webMaster,
    iconBg: "#0f1020",
    date: "Oct 2024 - Jan 2025",
    points: [
      "built pure Html, css, js projects.",
      "built responsive projects with react bootstrap and tailwind.",
      " recorded videos explain redux and js concepts.",
    ],
  },
  {
    title: "front end internship",
    company_name: "Link development",
    icon: linkDev,
    iconBg: "#ffffff",
    date: " Jul 2025 - Aug 2025",
    points: [
      "Built and enhanced web applications using React (TypeScript), React Query, Context API, Axios, Zod, and Tailwind CSS.",
      "Collaborated in an Agile/Scrum environment, participating in code reviews and feature planning.",
      "integrated REST APIs with Axios, including error handling and request interceptors.",
    ],
  }
];

const testimonials = [
  {
    quote:
      "Islam consistently demonstrated strong ownership and responsibility in his work. He was proactive, receptive to feedback, and always applied improvements effectively. His understanding of JavaScript and React stood out, and it was clear he was genuinely passionate about learning and building.",
    author: "Frontend Team",
    role: "Link Development",
  },
  {
    quote:
      "Islam showed strong ownership and always applied feedback effectively. His skills in React and JavaScript were impressive, and his passion for learning was very clear.",
    author: "Frontend Team Member",
    role: "Link Development",
  },
  {
    quote:
      "Islam takes real ownership of his work and continuously improves based on feedback. He demonstrated solid skills in React and JavaScript, with a clear focus on writing clean, maintainable code.",
    author: "Frontend Team Member",
    role: "Link Development",
  },
  {
    quote:
      "Islam explains complex React concepts in a very simple and practical way. The sessions were clear and focused on real-world usage, not just theory.",
    author: "IEEE Student Participant",
    role: "IEEE",
  },
  {
    quote:
      "The project structure and performance optimization were impressive. It felt like a real production-level application, not a simple demo.",
    author: "Code Reviewer",
    role: "Independent Review",
  },
];

const projects = [
  {
    name: "Homeless",
    description:
      "Developed a property management platform with role-based auth, real-time chat/notifications, dynamic listings, Redux Toolkit, and an admin dashboard.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "RTK query",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: homeless,
    source_code_link: "https://homeless-lovat.vercel.app/",
  },
  {
    name: "Exclusive",
    description:
      "Built an e-commerce website (React + TypeScript) with secure auth (Redux Toolkit), multilingual support (i18next), real-time cart/wishlist.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "bootstrap",
        color: "green-text-gradient",
      },
      {
        name: "RTK",
        color: "pink-text-gradient",
      },
    ],
    image: Exclusive,
    source_code_link: "https://e-commerce-typescript.vercel.app/",
  },
  {
    name: "Atmoscan",
    description:
      "Developed a weather application using React and Tailwind CSS, integrating weather data via Axios API calls. Implemented smooth animations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Atmoscan,
    source_code_link: "https://atmoscan.vercel.app/",
  },
  {
    name: "VivaDeco",
    description:
      "Built a clean and modern interior design landing page focused on strong visual hierarchy, responsive design, and smooth user experience. Emphasized layout structure, spacing, and typography using pure HTML and CSS.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "ui/ux",
        color: "pink-text-gradient",
      },
    ],
    image: VivaDecor,
    source_code_link: "https://islam25x.github.io/VivaDeco/",
  }
];

export { services, technologies, experiences, testimonials, projects };
