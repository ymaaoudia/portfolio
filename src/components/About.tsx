import { Code, Palette, Lightbulb, GraduationCap } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

const skills = [
  { icon: Code, titleKey: "skill_dev_title", descKey: "skill_dev_desc" },
  { icon: Palette, titleKey: "skill_design_title", descKey: "skill_design_desc" },
  { icon: Lightbulb, titleKey: "skill_problem_title", descKey: "skill_problem_desc" },
  { icon: GraduationCap, titleKey: "skill_learning_title", descKey: "skill_learning_desc" },
];

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="glow-dot -right-48 top-0 animate-glow-pulse" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column */}
          <div className="animate-slide-up">
            <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
              {t("about_title_small")}
            </p>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              {t("about_title_big")}{" "}
              <span className="gradient-text">
                {t("about_title_highlight")}
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground">
              <p>{t("about_p1")}</p>
              <p>{t("about_p2")}</p>
              <p>{t("about_p3")}</p>
            </div>
          </div>

          {/* Right column - Skills */}
          <div className="grid grid-cols-2 gap-4">
            {skills.map((skill, index) => {
              const Icon = skill.icon;

              return (
                <div
                  key={skill.titleKey}
                  className="glass glass-hover rounded-2xl p-6 animate-slide-up"
                  style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  <h3 className="font-semibold mb-2">
                    {t(skill.titleKey)}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {t(skill.descKey)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
