import { useState, useEffect } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#projects", labelKey: "nav_projects" },
    { href: "#about", labelKey: "nav_about" },
    { href: "#contact", labelKey: "nav_contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "fr" : "en");
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? "py-4" : "py-6"}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
          <a href="#" className="font-bold text-xl">
            <span className="gradient-text">Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {t(link.labelKey)}
              </a>
            ))}

            <button onClick={toggleLanguage} className="flex items-center gap-2">
              <Globe className="w-4 h-4" />
              <span className="uppercase">
                {language === "en" ? "fr" : "en"}
              </span>
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
