import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about", sectionId: "about" },
  { label: "Experience", href: "#experience", sectionId: "experience" },
  { label: "Skills", href: "#skills", sectionId: "skills" },
  { label: "Projects", href: "#projects", sectionId: "projects" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Find which section is currently in view
      const sections = navLinks.map(link => document.getElementById(link.sectionId));
      const scrollPosition = window.scrollY + 120;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].sectionId);
          return;
        }
      }
      setActiveSection("");
    };
    
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-card/90 backdrop-blur-md border-b border-border/50 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <nav className="section-container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-lg font-semibold text-foreground tracking-tight hover:text-primary transition-colors">
            Nir Aharon
          </a>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`nav-link ${activeSection === link.sectionId ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary ml-4">
              Let's build something
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2.5 text-foreground rounded-lg hover:bg-secondary/50 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 flex flex-col gap-2 bg-card/95 backdrop-blur-md -mx-5 px-5 animate-fade-in">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                className={`text-base font-medium py-3 px-3 rounded-lg transition-colors ${
                  activeSection === link.sectionId 
                    ? 'text-primary bg-primary/5' 
                    : 'text-foreground hover:bg-secondary/50'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn-primary text-center mt-3" 
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's build something
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;