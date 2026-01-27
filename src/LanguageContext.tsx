import { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    /* NAV */
    nav_projects: "Projects",
    nav_about: "About",
    nav_contact: "Contact",

    /* HERO */
    hero_subtitle: "Portfolio",
    hero_title: "Hi, I'm",
    hero_description:
      "A passionate student exploring the intersection of technology and creativity. Here's a collection of my school projects and experiments.",
    hero_cta_work: "View My Work",
    hero_cta_about: "About Me",

    /* PROJECTS */
    projects_title_small: "My Work",
    projects_title_big: "Featured Projects",
    projects_description:
      "A selection of projects I've worked on during my studies, ranging from web applications to data analysis.",
projects_title_big_prefix: "Featured",
projects_title_big_highlight: "Projects",

project_ecommerce_title: "E-Commerce Platform",
project_ecommerce_desc:
  "A full-stack online store with cart functionality, user authentication, and payment integration.",

project_campus_title: "Campus Borrow Application",
project_campus_desc:
  "A native Kotlin application for peer-to-peer item sharing. Built with real-time API.",

project_game_title: "Adventure Games",
project_game_desc:
  "A 2D/3D game with a linear gameplay transition from a 2D environment into a 3D world.",

project_portfolio_title: "Portfolio Website",
project_portfolio_desc: "Personal portfolio showcasing projects.",


    /* ABOUT */
    about_title_small: "About Me",
    about_title_big: "Passionate about",
    about_title_highlight: "creating",

    about_p1:
      "I'm a dedicated student with a strong passion for technology and design. Currently pursuing my studies, I spend my time building projects that challenge me to learn and grow.",

    about_p2:
      "My journey into programming started with curiosity and has evolved into a deep appreciation for clean code, intuitive design, and meaningful user experiences.",

    about_p3:
      "When I'm not coding, you can find me exploring new frameworks or brainstorming my next big idea.",

    /* SKILLS */
    skill_dev_title: "Development",
    skill_dev_desc: "React, Java, Html-CSS, Javascript, Kotlin",

    skill_design_title: "Design",
    skill_design_desc: "UI/UX, Figma, Responsive Design",

    skill_problem_title: "Problem Solving",
    skill_problem_desc: "Algorithms, Data Structures",

    skill_learning_title: "Learning",
    skill_learning_desc: "Always exploring new technologies",

      contact_title_small: "Get In Touch",
        contact_title_big_prefix: "Let's",
        contact_title_big_highlight: "Connect",
        contact_description:
          "I'm always open to discussing new projects, creative ideas, or opportunities to be part of something amazing.",
        contact_cta: "Say Hello",

        contact_aria_email: "Email",
        contact_aria_github: "GitHub",
        contact_aria_linkedin: "LinkedIn",

        footer_built_with_passion: "Built with passion.",

  },

  fr: {
    /* NAV */
    nav_projects: "Projets",
    nav_about: "À propos",
    nav_contact: "Contact",
    /* PROJECTS */
    projects_title_big_prefix: "Projets",
    projects_title_big_highlight: "en vedette",

    project_ecommerce_title: "Plateforme e-commerce",
    project_ecommerce_desc:
      "Boutique en ligne avec panier, authentification utilisateur et intégration de paiement.",

    project_campus_title: "Application de prêt",
    project_campus_desc:
      "Application Kotlin native pour le partage d’objets entre étudiants avec API temps réel.",

    project_game_title: "Jeux d’aventure",
    project_game_desc:
      "Jeu 2D/3D avec une transition fluide d’un environnement 2D vers un monde 3D.",

    project_portfolio_title: "Site portfolio",
    project_portfolio_desc:
      "Portfolio personnel mettant en valeur mes projets.",

    /* HERO */
    hero_subtitle: "Portfolio",
    hero_title: "Salut, je suis",
    hero_description:
      "Étudiant passionné explorant l’intersection entre la technologie et la créativité. Voici une sélection de mes projets scolaires et expérimentations.",
    hero_cta_work: "Voir mes projets",
    hero_cta_about: "À propos de moi",

    /* PROJECTS */
    projects_title_small: "Mes projets",
    projects_title_big: "Projets en vedette",
    projects_description:
      "Une sélection de projets réalisés durant mes études, allant du développement web à l’analyse de données.",

    /* ABOUT */
    about_title_small: "À propos de moi",
    about_title_big: "Passionné par",
    about_title_highlight: "la création",

    about_p1:
      "Étudiant motivé avec une forte passion pour la technologie et le design. Actuellement en études, je consacre mon temps à créer des projets qui me poussent à apprendre et à progresser.",

    about_p2:
      "Mon parcours en programmation a commencé par curiosité et s’est transformé en une réelle du design intuitif et des expériences utilisateur pertinentes.",

    about_p3:
      "Lorsque je ne code pas, j’explore de nouveaux frameworks ou je réfléchis à ma prochaine idée.",

    /* SKILLS */
    skill_dev_title: "Développement",
    skill_dev_desc: "React, Java, Html-CSS, Javascript, Kotlin",

    skill_design_title: "Design",
    skill_design_desc: "UI/UX, Figma, Design adaptatif",

    skill_problem_title: "Résolution de problèmes",
    skill_problem_desc: "Algorithmes, Structures de données",

    skill_learning_title: "Apprentissage",
    skill_learning_desc: "Toujours en train d’explorer de nouvelles technologies",

      contact_title_small: "Contact",
    contact_title_big_prefix: "Restons",
    contact_title_big_highlight: "en contact",
    contact_description:
      "Je suis toujours ouvert à discuter de nouveaux projets, d’idées créatives ou d’opportunités pour faire partie de quelque chose d’exceptionnel.",
    contact_cta: "Dire bonjour",

    contact_aria_email: "Email",
    contact_aria_github: "GitHub",
    contact_aria_linkedin: "LinkedIn",

    footer_built_with_passion: "Conçu avec passion.",

  },
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const savedLang = localStorage.getItem("lang") as Language;
    if (savedLang) setLanguage(savedLang);
  }, []);

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const t = (key: string) => translations[language][key] || key;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
