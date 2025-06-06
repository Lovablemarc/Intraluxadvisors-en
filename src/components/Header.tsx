import { useLanguage } from "@/lib/LanguageContext";
import { getText } from "@/lib/translations";
import LanguageSwitcher from "./LanguageSwitcher";
import { useState, useEffect } from "react";
import Logo from "./Logo";
import { Linkedin } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface NavItem {
  id: string;
  key: string;
  path: string;
}

export default function Header() {
  const { language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/" || location.pathname === "/";

  const navItems: NavItem[] = [
    { id: "why", key: "nav_intrastat", path: "/#why" },
    { id: "process", key: "nav_process", path: "/#process" },
    { id: "b2b", key: "nav_b2b", path: "/#b2b" },
    { id: "resources", key: "nav_resources", path: "/#resources" },
    { id: "contact", key: "nav_contact", path: "/#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    if (!isHomePage) {
      window.location.href = path;
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-white py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/en" className="flex items-center py-4">
              <Logo />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex flex-col items-end">
            <div className="flex items-center space-x-6 mb-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => {
                    if (!isHomePage) {
                      e.preventDefault();
                      window.location.href = item.path;
                    }
                  }}
                  className="text-darkText hover:text-gold transition-colors"
                >
                  {getText(item.key, language)}
                </a>
              ))}
              <LanguageSwitcher />
              <a 
                href="https://www.linkedin.com/company/intraluxadvisors" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-darkText hover:text-gold transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>We speak:</span>
              <div className="flex items-center space-x-2">
                <img src="https://flagcdn.com/24x18/lu.png" alt="Luxembourgish" title="Luxembourgish" className="w-6 h-4 rounded shadow-sm" />
                <img src="https://flagcdn.com/24x18/fr.png" alt="French" title="French" className="w-6 h-4 rounded shadow-sm" />
                <img src="https://flagcdn.com/24x18/de.png" alt="German" title="German" className="w-6 h-4 rounded shadow-sm" />
                <img src="https://flagcdn.com/24x18/gb.png" alt="English" title="English" className="w-6 h-4 rounded shadow-sm" />
                <img src="https://flagcdn.com/24x18/es.png" alt="Spanish" title="Spanish" className="w-6 h-4 rounded shadow-sm" />
              </div>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-darkText"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="container mx-auto px-4 py-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.path}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.path);
                  }}
                  className="block py-2 text-darkText hover:text-gold transition-colors"
                >
                  {getText(item.key, language)}
                </a>
              ))}
              <div className="py-2">
                <LanguageSwitcher />
              </div>
              <div className="flex items-center gap-2 py-4 border-t border-gray-100">
                <span className="text-sm text-gray-600">We speak:</span>
                <div className="flex items-center space-x-2">
                  <img src="https://flagcdn.com/24x18/lu.png" alt="Luxembourgish" title="Luxembourgish" className="w-6 h-4 rounded shadow-sm" />
                  <img src="https://flagcdn.com/24x18/fr.png" alt="French" title="French" className="w-6 h-4 rounded shadow-sm" />
                  <img src="https://flagcdn.com/24x18/de.png" alt="German" title="German" className="w-6 h-4 rounded shadow-sm" />
                  <img src="https://flagcdn.com/24x18/gb.png" alt="English" title="English" className="w-6 h-4 rounded shadow-sm" />
                  <img src="https://flagcdn.com/24x18/es.png" alt="Spanish" title="Spanish" className="w-6 h-4 rounded shadow-sm" />
                </div>
              </div>
              <div className="py-2 border-t border-gray-100">
                <a 
                  href="https://www.linkedin.com/company/intraluxadvisors" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-darkText hover:text-gold transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                  <span>Follow us on LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
