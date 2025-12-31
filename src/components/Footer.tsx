import { ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="py-6 border-t border-border/50">
      <div className="section-container">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Nir Aharon</p>
          <button 
            onClick={scrollToTop} 
            className="btn-secondary p-2"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;