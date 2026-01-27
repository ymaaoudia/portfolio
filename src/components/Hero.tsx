import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
      {/* Background glow effects */}
      <div className="glow-dot -top-48 -left-48 animate-glow-pulse" />
      <div
        className="accent-glow top-1/2 -right-36 animate-glow-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <div
          className="glass glass-hover rounded-3xl p-8 md:p-12 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {t("hero_subtitle")}
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            {t("hero_title")}{" "}
            <span className="gradient-text">Yanis</span>
          </h1>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            {t("hero_description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="glass px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground group"
            >
              {t("hero_cta_work")}
              <ArrowDown className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-y-1" />
            </a>

            <a
              href="#about"
              className="px-8 py-4 rounded-full font-medium border border-border/50 transition-all duration-300 hover:border-primary/50 hover:text-primary"
            >
              {t("hero_cta_about")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
