import { Mail, Github, Linkedin, Send } from "lucide-react";
import JournalPanel from "@/components/ui/JournalPanel";

const Contact = () => {
  return (
    <section id="contact" className="py-12 lg:py-16 pb-20">
      <div className="section-container">
        <JournalPanel 
          label="Contact" 
          subtitle="Let's discuss your next project"
          className="animate-fade-up"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-3">
              Let's Work Together
            </h3>
            <p className="body-text mb-8 max-w-[60ch] mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to reach out.
            </p>
            
            {/* Email Card */}
            <a 
              href="mailto:aharonick@gmail.com"
              className="featured-card flex flex-col items-center gap-3 mb-8 no-underline max-w-md mx-auto"
            >
              <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center border border-border/50">
                <Mail className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5 uppercase tracking-wide font-medium">Email</p>
                <p className="font-semibold text-foreground">aharonick@gmail.com</p>
              </div>
            </a>
            
            {/* Social Links */}
            <div>
              <p className="section-label mb-4">Find me on</p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a 
                  href="https://github.com/aharonick" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Github className="w-4 h-4" strokeWidth={1.5} />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://linkedin.com/in/nir-aharon" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                  <span>LinkedIn</span>
                </a>
                <a 
                  href="mailto:aharonick@gmail.com"
                  className="btn-primary flex items-center gap-2"
                >
                  <Send className="w-4 h-4" strokeWidth={1.5} />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </div>
        </JournalPanel>
      </div>
    </section>
  );
};

export default Contact;