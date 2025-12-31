import { 
  Github, Linkedin, Mail, ArrowDown
} from "lucide-react";
import JournalPanel from "@/components/ui/JournalPanel";

const Hero = () => {
  return (
    <section id="about" className="pt-28 pb-12 lg:pt-32 lg:pb-16">
      <div className="section-container">
        <JournalPanel className="animate-fade-up overflow-visible">
          <div className="relative px-6 sm:px-8 pt-6">
            {/* Main Content - Centered */}
            <div className="max-w-3xl mx-auto text-center">
              
              {/* Name - Hero Focal Point */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-foreground mb-4 tracking-tight leading-[1.3] break-words px-2">
                Nir Aharon
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-lg sm:text-xl md:text-xl lg:text-2xl text-muted-foreground font-semibold mb-6">
                Software Engineer | Full-Stack
              </h2>
              
              {/* About Me */}
              <div className="mb-8">
                <h3 className="section-label mb-4">
                  About Me
                </h3>
                <div className="space-y-4 body-text max-w-2xl mx-auto">
                  <p>
                    I'm a Software Engineer with production experience building mobile and backend systems, 
                    internal tooling, and automation. I've worked with AI-powered workflows and agent-style 
                    automation to reduce operational friction, improve reliability, and accelerate delivery.
                  </p>
                  <p>
                    I'm comfortable owning projects end-to-end, and I work well in teams—communicating clearly, 
                    aligning with stakeholders, and shipping maintainable solutions.
                  </p>
                </div>
              </div>
              
              {/* CTAs - Centered */}
              <div className="flex flex-wrap gap-4 mb-8 justify-center">
                <a href="#projects" className="btn-primary">
                  View Projects
                </a>
                <a href="#contact" className="btn-secondary">
                  Get in Touch
                </a>
              </div>
              
              {/* Social Links - Centered */}
              <div className="flex gap-3 justify-center">
                <a 
                  href="https://github.com/aharonick" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" strokeWidth={1.5} />
                  <span className="tooltip">GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/nir-aharon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                  <span className="tooltip">LinkedIn</span>
                </a>
                <a 
                  href="mailto:aharonick@gmail.com"
                  className="social-icon-btn"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  <span className="tooltip">Email</span>
                </a>
              </div>
            </div>
          </div>
        </JournalPanel>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-10">
          <a href="#experience" className="scroll-indicator animate-gentle-bounce" aria-label="Scroll to experience">
            <ArrowDown className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;