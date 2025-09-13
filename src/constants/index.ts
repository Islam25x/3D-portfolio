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
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
];

export { services, technologies, experiences, testimonials, projects };
