import { GraduationCap, BookOpen } from "lucide-react";
import JournalPanel from "@/components/ui/JournalPanel";

const Education = () => {
  return (
    <section id="education" className="py-16 lg:py-20">
      <div className="section-container">
        <JournalPanel label="Education" className="animate-fade-up">
          <div className="featured-card text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-card flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  B.Sc. in Computer & Cognitive Science
                </h3>
                
                <div className="inline-flex items-center gap-2 text-muted-foreground mb-3">
                  <BookOpen className="w-4 h-4" strokeWidth={1.5} />
                  <span className="text-sm">Open University of Israel</span>
                </div>
                
                <p className="text-muted-foreground leading-relaxed max-w-[60ch] mx-auto">
                  Completed while working full-time, demonstrating strong self-discipline and independent learning.
                </p>
              </div>
            </div>
          </div>
        </JournalPanel>
      </div>
    </section>
  );
};

export default Education;