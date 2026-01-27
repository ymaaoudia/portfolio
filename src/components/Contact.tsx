import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative py-24 px-6">
      {/* Background glow */}
      <div className="accent-glow left-1/2 -translate-x-1/2 bottom-0 animate-glow-pulse" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass rounded-3xl p-8 md:p-12 text-center animate-slide-up">
          <p className="text-primary font-medium tracking-wider uppercase text-sm mb-4">
            {t("contact_title_small")}
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            {t("contact_title_big_prefix")}{" "}
            <span className="gradient-text">
              {t("contact_title_big_highlight")}
            </span>
          </h2>

          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            {t("contact_description")}
          </p>

          {/* Email button */}
          <a
            href="mailto:yanaitaoudia@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-medium bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 mb-8"
          >
            <Send className="w-5 h-5" />
            {t("contact_cta")}
          </a>

          {/* Social links */}
          <div className="flex justify-center gap-4">
            <a
              href="mailto:yanaitaoudia@gmail.com"
              className="glass p-4 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
              aria-label={t("contact_aria_email")}
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://github.com/ymaaoudia"
              className="glass p-4 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
              aria-label={t("contact_aria_github")}
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/yanisaitaoudia/"
              className="glass p-4 rounded-full hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 group"
              aria-label={t("contact_aria_linkedin")}
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground text-sm">
          <p>
            © {new Date().getFullYear()} Yanis Ait-Aoudia.{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
