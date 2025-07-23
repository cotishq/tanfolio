
import { Code } from "lucide-react";

export function ComingSoonCard() {
  return (
     <div className="relative overflow-hidden rounded-xl border border-dashed border-muted-foreground/20 bg-muted/20 backdrop-blur-sm">
      <div className="p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
          <Code className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-display mb-2">More Projects</h3>
        <p className="text-muted-foreground font-body">
         New drops coming soon. You won't want to miss this bug—uh, feature.
        </p>
        
        
        <div className="flex justify-center gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <div 
              key={i}
              className="w-2 h-2 bg-primary/40 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 0.5}s` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
