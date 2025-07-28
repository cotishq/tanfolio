
import { Clock, Code, ExternalLink, Github } from "lucide-react";

export function ComingSoonCard() {
  return (
     <div className="group relative overflow-hidden rounded-xl border border-dashed border-muted bg-card/30 backdrop-blur-sm hover:bg-card/50 transition-all duration-500 h-full">
      <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center">
        <div className="text-center">
          <Clock size={32} className="text-muted-foreground mx-auto mb-3 opacity-50" />
          <div className="text-lg font-display text-muted-foreground mb-1">Coming Soon</div>
          <div className="text-xs text-muted-foreground/70">Next project in development</div>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-lg font-display mb-2 text-muted-foreground">
          Something Amazing
        </h3>
        <p className="text-muted-foreground/70 text-sm mb-4 font-body leading-relaxed">
          Currently brewing the next big thing. Stay tuned for updates on this exciting project.
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {["React", "TypeScript", "Next.js"].map((item, index) => (
            <div 
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-muted/30 rounded-md text-xs font-medium text-muted-foreground/70"
            >
              <Code size={10} />
              {item}
            </div>
          ))}
          <div className="px-2 py-1 bg-muted/20 rounded-md text-xs font-medium text-muted-foreground/50">
            +more
          </div>
        </div>

        <div className="flex gap-3 pt-3 border-t border-border/30">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
            <Github size={12} />
            Soon
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground/50">
            <ExternalLink size={12} />
            Soon
          </div>
        </div>
      </div>
    </div>
  );
}
