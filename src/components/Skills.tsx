import { Code2, Database, Layout, Terminal } from "lucide-react";
import JournalPanel from "@/components/ui/JournalPanel";

const skillCategories = [
  { 
    title: "Programming Languages", 
    icon: Code2, 
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C#", "Swift"] 
  },
  { 
    title: "Platforms & Frameworks", 
    icon: Layout, 
    skills: ["Android SDK", "FastAPI", "React", "Flask", "Node.js", "Express", "Next.js", "ASP.NET Core"] 
  },
  { 
    title: "Databases & Storage", 
    icon: Database, 
    skills: ["PostgreSQL", "Redis", "SQLite", "ObjectBox"] 
  },
  { 
    title: "Tools & Platforms", 
    icon: Terminal, 
    skills: ["Git", "Docker", "AWS", "GitHub Actions (CI/CD)", "Grafana", "Jira", "n8n", "Cursor", "GitHub Copilot"] 
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 lg:py-16">
      <div className="section-container">
        <JournalPanel 
          label="Skills & Technologies" 
          subtitle="Technical expertise and tools I work with"
          className="animate-fade-up"
        >
          <div className="grid md:grid-cols-2 gap-4">
            {skillCategories.map((category) => (
              <div 
                key={category.title} 
                className="featured-card"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-card flex items-center justify-center border border-border/50">
                    <category.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
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

export default Skills;