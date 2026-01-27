import ProjectCard from "./ProjectCard";
import { useLanguage } from "@/LanguageContext";

import greenpulseImg from "../assets/greenpulse.png";
import shareitImg from "../assets/shareit.png";
import portfolioImg from "../assets/portfolio.png";
import jeuxImg from "../assets/2d3d.png";

const projects = [
  {
    titleKey: "project_ecommerce_title",
    descKey: "project_ecommerce_desc",
    tags: ["SpringBoot", "Java", "CSS"],
    image: greenpulseImg,
    githubUrl: "https://github.com/ymaaoudia/Green-Pulse",
  },
  {
    titleKey: "project_campus_title",
    descKey: "project_campus_desc",
    tags: ["Kotlin", "API"],
    image: shareitImg,
    githubUrl: "#",
  },
  {
    titleKey: "project_game_title",
    descKey: "project_game_desc",
    tags: ["Unity", "C#"],
    image: jeuxImg,
    liveUrl: "https://ymaita.itch.io/allen",
    githubUrl: "#",
  },
  {
    titleKey: "project_portfolio_title",
    descKey: "project_portfolio_desc",
    tags: ["React", "Tailwind", "Framer"],
    image: portfolioImg,
    githubUrl: "#",
  },
];

const Projects = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="accent-glow -left-48 top-1/2 animate-glow-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {t("projects_title_small")}
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t("projects_title_big_prefix")}{" "}
            <span className="gradient-text">
              {t("projects_title_big_highlight")}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("projects_description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.titleKey}
              title={t(project.titleKey)}
              description={t(project.descKey)}
              tags={project.tags}
              image={project.image}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
              delay={0.1 * (index + 1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
