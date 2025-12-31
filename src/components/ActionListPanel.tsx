import { 
  Lightbulb, Code2, Plug, Palette, Database, 
  Settings, Search, TrendingUp, Rocket 
} from "lucide-react";

// Action items data
const actionItems = [
  { icon: Lightbulb, action: "Ideating", label: "Product Ideas" },
  { icon: Code2, action: "Building", label: "Full Stack" },
  { icon: Plug, action: "Designing", label: "Backend APIs" },
  { icon: Palette, action: "Crafting", label: "User Interfaces" },
  { icon: Database, action: "Working", label: "Data Models" },
  { icon: Settings, action: "Automating", label: "Ops Workflows" },
  { icon: Search, action: "Investigating", label: "Production Issues" },
  { icon: TrendingUp, action: "Optimizing", label: "System Performance" },
  { icon: Rocket, action: "Deploying", label: "CI/CD Pipelines" },
];

// Reusable ActionRow component with center-aligned text
const ActionRow = ({ icon: Icon, action, label }: { 
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>, 
  action: string, 
  label: string 
}) => (
  <div className="flex items-center gap-3">
    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
      <Icon className="w-4 h-4 text-primary" strokeWidth={1.5} />
    </div>
    <div className="flex-1 text-center">
      <p className="text-xs text-muted-foreground font-medium leading-tight">{action}</p>
      <p className="text-sm font-semibold text-foreground leading-tight">{label}</p>
    </div>
  </div>
);

// Reusable ActionListPanel component
const ActionListPanel = ({ showWindow = true }: { showWindow?: boolean }) => {
  return (
    <div className="premium-card p-6 h-full flex flex-col">
      <div className="space-y-4 flex-1">
        {/* Mini window preview (optional) */}
        {showWindow && (
          <div className="bg-card rounded-lg p-3 border border-border/50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-red-400/60"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-400/60"></div>
              <div className="w-2 h-2 rounded-full bg-green-400/60"></div>
            </div>
            <div className="space-y-2">
              <div className="h-2 w-3/4 bg-secondary rounded"></div>
              <div className="h-2 w-1/2 bg-secondary rounded"></div>
              <div className="h-2 w-2/3 bg-primary/20 rounded"></div>
            </div>
          </div>
        )}
        
        {/* Action Items List */}
        <div className="space-y-3">
          {actionItems.map((item, index) => (
            <ActionRow
              key={index}
              icon={item.icon}
              action={item.action}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionListPanel;
