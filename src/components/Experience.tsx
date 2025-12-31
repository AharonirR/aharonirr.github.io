import { useState } from "react";
import { MapPin, ChevronDown, ChevronUp, Calendar } from "lucide-react";
import JournalPanel from "@/components/ui/JournalPanel";
import ActionListPanel from "@/components/ActionListPanel";

const experienceItems = [
  "Owned issues end-to-end: investigation, root cause analysis, fix, and rollout",
  "Built and maintained internal tools for operational data analysis and team workflows",
  "Improved reliability by strengthening monitoring/alerting and automating recurring operational tasks",
  "Collaborated with cross-functional stakeholders to align requirements and deliver maintainable solutions",
  "Worked daily with CI/CD pipelines, cloud infrastructure, and production debugging"
];

const Experience = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? experienceItems : experienceItems.slice(0, 3);
  const hasMoreItems = experienceItems.length > 3;

  return (
    <section id="experience" className="py-12 lg:py-16">
      <div className="section-container">
        <JournalPanel 
          label="Experience" 
          subtitle="Professional journey and key accomplishments"
          className="animate-fade-up"
        >
          {/* Two-column layout on desktop */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-8 lg:items-stretch">
            {/* Left Column - Experience Card */}
            <div className="experience-card h-full text-center">
            {/* Header Row */}
            <div className="flex flex-col items-center gap-2 mb-4">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Software Engineer
                </h3>
                <p className="text-sm text-muted-foreground font-medium">
                  Internal Tools & Automation
                </p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  <MapPin className="w-3.5 h-3.5 text-primary" strokeWidth={1.5} />
                  <span>Nayax — Herzliya</span>
                </div>
                <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Calendar className="w-3 h-3" strokeWidth={1.5} />
                  <span>Present</span>
                </div>
              </div>
            </div>
            
            {/* Divider */}
            <div className="divider my-4" />
            
            {/* Description */}
            <p className="body-text mb-5 max-w-[60ch] mx-auto">
              Building internal tools and automation for production operations—analyzing machine and transaction data, supporting configuration flows, and improving incident troubleshooting across teams.
            </p>
            
            {/* Highlights */}
            <ul className="space-y-3 max-w-[60ch] mx-auto">
              {visibleItems.map((item, index) => (
                <li key={index} className="body-text">
                  {item}
                </li>
              ))}
            </ul>

            {/* Show more/less toggle */}
            {hasMoreItems && (
              <div className="flex justify-center mt-4">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="toggle-button"
                >
                  {isExpanded ? (
                    <>
                      <ChevronUp className="w-4 h-4 toggle-icon transition-transform" strokeWidth={1.5} />
                      Show less
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 toggle-icon transition-transform" strokeWidth={1.5} />
                      Show {experienceItems.length - 3} more
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
          
          {/* Right Column - Action List Panel */}
          <div className="hidden lg:block h-full">
            <ActionListPanel showWindow={true} />
          </div>
        </div>
        </JournalPanel>
      </div>
    </section>
  );
};

export default Experience;