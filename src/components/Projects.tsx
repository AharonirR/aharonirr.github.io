import { Star } from "lucide-react";
import JournalPanel from "@/components/ui/JournalPanel";

const projects = [
  {
    title: "Automated Datacenter Failover Tool",
    description: "A one-click automated failover system for switching services and WAF configurations across three global datacenters. Reduced failover time by 93% (from ~5 minutes to ~20 seconds).",
    tech: ["Python", "FastAPI", "JavaScript", "TypeScript", "React", "REST APIs"],
    featured: true,
  },
  {
    title: "Marshall / VPOS Device Simulator",
    description: "Desktop simulator emulating Android-based payment terminal communication over TCP, enabling QA and engineering testing without physical hardware.",
    tech: ["C#", ".NET Framework", "WinForms", "TCP/IP", "Marshall/VPOS Protocol"],
    featured: true,
  },
  {
    title: "AI-Powered Internal Assistant",
    description: "Internal assistant using ChatGPT API and n8n to provide real-time operational guidance for NOC, PayOps, and Support teams.",
    tech: ["Python", "JavaScript", "Node.js", "FastAPI", "n8n", "ChatGPT API"],
    featured: false,
  },
  {
    title: "3D Portfolio Website",
    description: "Interactive 3D portfolio website using Three.js with a responsive web interface.",
    tech: ["JavaScript", "Three.js", "React", "Node.js"],
    featured: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 lg:py-16">
      <div className="section-container">
        <JournalPanel 
          label="Projects" 
          subtitle="A selection of projects showcasing my approach to solving complex problems"
          className="animate-fade-up"
        >
          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {projects.map((project) => (
              <div 
                key={project.title}
                className={`${project.featured ? 'featured-card md:col-span-2' : 'premium-card'} text-center`}
              >
                {project.featured && (
                  <div className="inline-flex items-center gap-1.5 mb-3">
                    <Star className="w-3.5 h-3.5 text-primary" fill="currentColor" strokeWidth={1.5} />
                    <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                      Featured
                    </span>
                  </div>
                )}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="body-text text-sm mb-4 max-w-[60ch] mx-auto">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {project.tech.map((tech) => (
                    <span key={tech} className="accent-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </JournalPanel>
      </div>
    </section>
  );
};

export default Projects;