import i18n from "i18next";
import { initReactI18next } from "react-i18next";

export const LANGUAGE_STORAGE_KEY = "language";

export type AppLanguage = "en" | "ar";

const SUPPORTED_LANGUAGES: AppLanguage[] = ["en", "ar"];

const getInitialLanguage = (): AppLanguage => {
    if (typeof window === "undefined") return "en";
    const stored = localStorage.getItem(LANGUAGE_STORAGE_KEY);
    if (stored === "en" || stored === "ar") return stored;
    return "en";
};

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: {
                app_name: "Islam Portfolio",
                nav: {
                    about: "About",
                    work: "Work",
                    contact: "Contact",
                },
                header: {
                    role: "Frontend Engineer",
                    logoAlt: "Logo",
                },
                home: {
                    role: "Frontend Engineer",
                    introLine1: "I build fast, scalable web apps that actually ship.",
                    introLine2: "built with React, TypeScript & clean architecture",
                    cta: "Work With Me",
                    avatarAlt: "Islam avatar",
                    whatsappMessage: "Hi Islam, I saw your portfolio",
                },
                about: {
                    sub: "Introduction",
                    title: "Overview.",
                    typewriter: [
                        "I turn ideas into real web applications.",
                        "Scalable SaaS dashboards built for production.",
                        "Powered by React & TypeScript.",
                        "Fast. Clean. User-focused.",
                        "Let's build something that actually works.",
                    ],
                },
                services: {
                    frontend: "Front End Developer",
                    uiux: "UI / UX Designer",
                    three: "Three.js Developer",
                },
                work: {
                    sub: "What I have done so far",
                    title: "Work Experience.",
                    experiences: {
                        exp1: {
                            title: "Front End Internship",
                            company: "Web Master",
                            date: "Oct 2024 - Jan 2025",
                            points: [
                                "Built pure HTML, CSS, JS projects.",
                                "Built responsive projects with React Bootstrap and Tailwind.",
                                "Recorded videos explaining Redux and JavaScript concepts.",
                            ],
                        },
                        exp2: {
                            title: "Front End Internship",
                            company: "Link Development",
                            date: "Jul 2025 - Aug 2025",
                            points: [
                                "Built and enhanced web applications using React (TypeScript), React Query, Context API, Axios, Zod, and Tailwind CSS.",
                                "Collaborated in an Agile/Scrum environment, participating in code reviews and feature planning.",
                                "Integrated REST APIs with Axios, including error handling and request interceptors.",
                            ],
                        },
                    },
                },
                tech: {
                    title: "Technologies I use to build",
                    highlight: " scalable products",
                },
                projects: {
                    sub: "My work",
                    title: "Projects.",
                    typewriter: [
                        "Real projects. Real results.",
                        "Each one solves a real problem - not just UI.",
                        "Built with scalable architecture and clean code.",
                        "Live demos. Source code. Full transparency.",
                        "Explore the work - and imagine yours next.",
                    ],
                    items: {
                        finexa: {
                            name: "Finexa",
                            description:
                                "Built a production-grade AI financial platform with feature-based architecture, React Query caching, dashboard analytics, voice-to-transaction workflows, OCR receipt parsing, and reusable TypeScript components.",
                        },
                        homeless: {
                            name: "Homeless",
                            description:
                                "Developed a property management platform with role-based auth, real-time chat/notifications, dynamic listings, Redux Toolkit, and an admin dashboard.",
                        },
                        exclusive: {
                            name: "Exclusive",
                            description:
                                "Built an e-commerce website (React + TypeScript) with secure auth (Redux Toolkit), multilingual support (i18next), real-time cart/wishlist.",
                        },
                        atmoscan: {
                            name: "Atmoscan",
                            description:
                                "Developed a weather application using React and Tailwind CSS, integrating weather data via Axios API calls. Implemented smooth animations.",
                        },
                        vivadeco: {
                            name: "VivaDeco",
                            description:
                                "Built a clean and modern interior design landing page focused on strong visual hierarchy, responsive design, and smooth user experience. Emphasized layout structure, spacing, and typography using pure HTML and CSS.",
                        },
                    },
                },
                testimonials: {
                    sub: "What others say",
                    title: "Testimonials.",
                    items: {
                        t1: {
                            quote:
                                "Islam consistently demonstrated strong ownership and responsibility in his work. He was proactive, receptive to feedback, and always applied improvements effectively. His understanding of JavaScript and React stood out, and it was clear he was genuinely passionate about learning and building.",
                            author: "Frontend Team",
                            role: "Link Development",
                        },
                        t2: {
                            quote:
                                "Islam showed strong ownership and always applied feedback effectively. His skills in React and JavaScript were impressive, and his passion for learning was very clear.",
                            author: "Frontend Team Member",
                            role: "Link Development",
                        },
                        t3: {
                            quote:
                                "Islam takes real ownership of his work and continuously improves based on feedback. He demonstrated solid skills in React and JavaScript, with a clear focus on writing clean, maintainable code.",
                            author: "Frontend Team Member",
                            role: "Link Development",
                        },
                        t4: {
                            quote:
                                "Islam explains complex React concepts in a very simple and practical way. The sessions were clear and focused on real-world usage, not just theory.",
                            author: "IEEE Student Participant",
                            role: "IEEE",
                        },
                        t5: {
                            quote:
                                "The project structure and performance optimization were impressive. It felt like a real production-level application, not a simple demo.",
                            author: "Code Reviewer",
                            role: "Independent Review",
                        },
                    },
                },
                contact: {
                    sub: "Get in touch",
                    title: "Contact.",
                    subject: "New Contact Message",
                    form: {
                        nameLabel: "Your Name",
                        namePlaceholder: "Your name",
                        emailLabel: "Your Email",
                        emailPlaceholder: "Your email address",
                        messageLabel: "Your Message",
                        messagePlaceholder:
                            "Describe your idea, requirements, or what you need help with...",
                        sending: "Sending...",
                        send: "Send",
                    },
                    toasts: {
                        validation: "Please fill in all fields!",
                        success: "Thank you. I will get back to you as soon as possible.",
                        error: "Ahh, something went wrong. Please try again.",
                    },
                },
                loader: {
                    loading: "Loading Portfolio...",
                },
            },
        },
        ar: {
            translation: {
                app_name: "معرض أعمال إسلام",
                nav: {
                    about: "نبذة",
                    work: "الخبرات",
                    contact: "تواصل",
                },
                header: {
                    role: "مهندس واجهات أمامية",
                    logoAlt: "الشعار",
                },
                home: {
                    role: "مهندس واجهات أمامية",
                    introLine1: "أبني تطبيقات ويب سريعة وقابلة للتوسع وتُطلق فعلاً.",
                    introLine2: "مبنية بـ React و TypeScript وهيكلية نظيفة.",
                    cta: "اعمل معي",
                    avatarAlt: "صورة أفاتار إسلام",
                    whatsappMessage: "مرحباً إسلام، شاهدت بورتفوليو أعمالك",
                },
                about: {
                    sub: "مقدمة",
                    title: "نظرة عامة.",
                    typewriter: [
                        "أحوّل الأفكار إلى تطبيقات ويب حقيقية.",
                        "لوحات تحكم SaaS قابلة للتوسع وجاهزة للإنتاج.",
                        "مبنية بـ React و TypeScript.",
                        "سريع. نظيف. يركز على المستخدم.",
                        "خلّينا نبني شيئاً يعمل فعلاً.",
                    ],
                },
                services: {
                    frontend: "مطوّر واجهات أمامية",
                    uiux: "مصمم UI/UX",
                    three: "مطوّر Three.js",
                },
                work: {
                    sub: "ما قمت به حتى الآن",
                    title: "الخبرات العملية.",
                    experiences: {
                        exp1: {
                            title: "تدريب مطوّر واجهات أمامية",
                            company: "ويب ماستر",
                            date: "أكتوبر 2024 - يناير 2025",
                            points: [
                                "أنشأت مشاريع بـ HTML وCSS وJavaScript فقط.",
                                "أنشأت مشاريع متجاوبة باستخدام React Bootstrap وTailwind.",
                                "سجّلت فيديوهات تشرح مفاهيم Redux وJavaScript.",
                            ],
                        },
                        exp2: {
                            title: "تدريب مطوّر واجهات أمامية",
                            company: "لينك ديفيلوبمنت",
                            date: "يوليو 2025 - أغسطس 2025",
                            points: [
                                "طوّرت وحسّنت تطبيقات ويب باستخدام React (TypeScript)، React Query، Context API، Axios، Zod وTailwind CSS.",
                                "تعاونت ضمن بيئة Agile/Scrum وشاركت في مراجعات الكود وتخطيط الميزات.",
                                "دمجت REST APIs باستخدام Axios مع معالجة الأخطاء واعتراضات الطلبات.",
                            ],
                        },
                    },
                },
                tech: {
                    title: "التقنيات التي أستخدمها لبناء",
                    highlight: " منتجات قابلة للتوسع",
                },
                projects: {
                    sub: "أعمالي",
                    title: "المشاريع.",
                    typewriter: [
                        "مشاريع حقيقية. نتائج حقيقية.",
                        "كل مشروع يحل مشكلة حقيقية - وليس مجرد واجهة.",
                        "مبني بهيكلية قابلة للتوسع وكود نظيف.",
                        "عروض مباشرة. كود المصدر. شفافية كاملة.",
                        "استكشف الأعمال - وتخيّل عملك التالي.",
                    ],
                    items: {
                        finexa: {
                            name: "فينكسا",
                            description:
                                "منصة مالية مدعومة بالذكاء الاصطناعي بمستوى إنتاجي، تم بناؤها باستخدام هيكلية Feature-Based، مع تخزين مؤقت للبيانات باستخدام React Query، ولوحات تحكم تحليلية، وسير عمل لتحويل الصوت إلى معاملات مالية، واستخراج بيانات الفواتير باستخدام OCR، ومكونات قابلة لإعادة الاستخدام باستخدام TypeScript.",
                        },
                        homeless: {
                            name: "هوملس",
                            description:
                                "طوّرت منصة لإدارة العقارات مع صلاحيات متعددة، دردشة/إشعارات فورية، قوائم ديناميكية، Redux Toolkit، ولوحة تحكم إدارية.",
                        },
                        exclusive: {
                            name: "إكستكلوسيف",
                            description:
                                "بنيت متجراً إلكترونياً (React + TypeScript) مع مصادقة آمنة (Redux Toolkit)، دعم متعدد اللغات (i18next)، وسلة/مفضلة فورية.",
                        },
                        atmoscan: {
                            name: "أتموسكان",
                            description:
                                "طوّرت تطبيق طقس باستخدام React وTailwind CSS مع دمج بيانات الطقس عبر Axios وتنفيذ حركات سلسة.",
                        },
                        vivadeco: {
                            name: "فيفا ديكو",
                            description:
                                "بنيت صفحة هبوط لتصميم داخلي نظيفة وحديثة تركز على تسلسل بصري قوي، وتصميم متجاوب، وتجربة مستخدم سلسة. ركزت على هيكلية التخطيط والمسافات والطباعة باستخدام HTML وCSS فقط.",
                        },
                    },
                },
                testimonials: {
                    sub: "ماذا يقول الآخرون",
                    title: "آراء العملاء.",
                    items: {
                        t1: {
                            quote:
                                "أظهر إسلام باستمرار إحساساً قوياً بالمسؤولية والملكية في عمله. كان مبادراً ومتقبلاً للملاحظات ويطبق التحسينات بفعالية. كان فهمه لـ JavaScript وReact مميزاً، وكان واضحاً شغفه الحقيقي بالتعلّم والبناء.",
                            author: "فريق الواجهات",
                            role: "لينك ديفيلوبمنت",
                        },
                        t2: {
                            quote:
                                "أظهر إسلام مسؤولية قوية وكان يطبق الملاحظات دائماً بفعالية. مهاراته في React وJavaScript كانت مميزة، وشغفه بالتعلّم كان واضحاً جداً.",
                            author: "عضو فريق الواجهات",
                            role: "لينك ديفيلوبمنت",
                        },
                        t3: {
                            quote:
                                "يتحمّل إسلام ملكية حقيقية لعمله ويحسّنه باستمرار بناءً على الملاحظات. أظهر مهارات قوية في React وJavaScript مع تركيز واضح على كتابة كود نظيف وقابل للصيانة.",
                            author: "عضو فريق الواجهات",
                            role: "لينك ديفيلوبمنت",
                        },
                        t4: {
                            quote:
                                "يشرح إسلام مفاهيم React المعقّدة بطريقة بسيطة وعملية جداً. كانت الجلسات واضحة ومركّزة على الاستخدام الحقيقي وليس مجرد نظرية.",
                            author: "مشارك طلابي IEEE",
                            role: "IEEE",
                        },
                        t5: {
                            quote:
                                "كانت بنية المشروع وتحسين الأداء مبهرة. بدا وكأنه تطبيق بمستوى إنتاجي حقيقي، وليس مجرد عرض بسيط.",
                            author: "مراجع كود",
                            role: "مراجعة مستقلة",
                        },
                    },
                },
                contact: {
                    sub: "تواصل معي",
                    title: "تواصل.",
                    subject: "رسالة تواصل جديدة",
                    form: {
                        nameLabel: "اسمك",
                        namePlaceholder: "اكتب اسمك",
                        emailLabel: "بريدك الإلكتروني",
                        emailPlaceholder: "اكتب بريدك الإلكتروني",
                        messageLabel: "رسالتك",
                        messagePlaceholder: "اشرح فكرتك أو متطلباتك أو ما تحتاج المساعدة فيه...",
                        sending: "جارٍ الإرسال...",
                        send: "إرسال",
                    },
                    toasts: {
                        validation: "من فضلك املأ جميع الحقول!",
                        success: "شكراً لك. سأرد عليك في أقرب وقت ممكن.",
                        error: "عذراً، حدث خطأ ما. حاول مرة أخرى.",
                    },
                },
                loader: {
                    loading: "جارٍ تحميل البورتفوليو...",
                },
            },
        },
    },
    lng: getInitialLanguage(),
    fallbackLng: "en",
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {
        escapeValue: false,
    },
});

export default i18n;
