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
    titleKey: "nav.about",
  },
  {
    id: "work",
    titleKey: "nav.work",
  },
  {
    id: "contact",
    titleKey: "nav.contact",
  },
];

const services = [
  {
    titleKey: "services.frontend",
    icon: web,
  },
  {
    titleKey: "services.uiux",
    icon: mobile,
  },
  {
    titleKey: "services.three",
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
    titleKey: "work.experiences.exp1.title",
    companyKey: "work.experiences.exp1.company",
    icon: webMaster,
    iconBg: "#0f1020",
    dateKey: "work.experiences.exp1.date",
    pointsKeys: [
      "work.experiences.exp1.points.0",
      "work.experiences.exp1.points.1",
      "work.experiences.exp1.points.2",
    ],
  },
  {
    titleKey: "work.experiences.exp2.title",
    companyKey: "work.experiences.exp2.company",
    icon: linkDev,
    iconBg: "#ffffff",
    dateKey: "work.experiences.exp2.date",
    pointsKeys: [
      "work.experiences.exp2.points.0",
      "work.experiences.exp2.points.1",
      "work.experiences.exp2.points.2",
    ],
  }
];

const testimonials = [
  {
    quoteKey: "testimonials.items.t1.quote",
    authorKey: "testimonials.items.t1.author",
    roleKey: "testimonials.items.t1.role",
  },
  {
    quoteKey: "testimonials.items.t2.quote",
    authorKey: "testimonials.items.t2.author",
    roleKey: "testimonials.items.t2.role",
  },
  {
    quoteKey: "testimonials.items.t3.quote",
    authorKey: "testimonials.items.t3.author",
    roleKey: "testimonials.items.t3.role",
  },
  {
    quoteKey: "testimonials.items.t4.quote",
    authorKey: "testimonials.items.t4.author",
    roleKey: "testimonials.items.t4.role",
  },
  {
    quoteKey: "testimonials.items.t5.quote",
    authorKey: "testimonials.items.t5.author",
    roleKey: "testimonials.items.t5.role",
  },
];

const projects = [
  {
    nameKey: "projects.items.homeless.name",
    descriptionKey: "projects.items.homeless.description",
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
    nameKey: "projects.items.exclusive.name",
    descriptionKey: "projects.items.exclusive.description",
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
    nameKey: "projects.items.atmoscan.name",
    descriptionKey: "projects.items.atmoscan.description",
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
    nameKey: "projects.items.vivadeco.name",
    descriptionKey: "projects.items.vivadeco.description",
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
