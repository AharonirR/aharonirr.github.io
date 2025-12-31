import { ReactNode } from "react";

interface JournalPanelProps {
  children: ReactNode;
  className?: string;
  id?: string;
  label?: string;
  subtitle?: string;
}

const JournalPanel = ({ children, className = "", id, label, subtitle }: JournalPanelProps) => {
  return (
    <div
      id={id}
      className={`journal-panel p-6 lg:p-8 ${className}`}
    >
      {label && (
        <div className="mb-6 text-center">
          <span className="section-label">
            {label}
          </span>
          {subtitle && (
            <p className="text-muted-foreground text-sm mt-2 max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
          <div className="divider mt-4 max-w-md mx-auto" />
        </div>
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default JournalPanel;