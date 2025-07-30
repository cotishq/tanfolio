import { Clock, Code, ExternalLink, Github } from "lucide-react";

export function ComingSoonCard() {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-muted bg-muted/40 dark:bg-card/30 backdrop-blur-sm hover:bg-muted/60 dark:hover:bg-card/50 transition-all duration-500 h-full">
      <div className="relative h-48 bg-gradient-to-br from-muted/10 to-background flex items-center justify-center">
        <div className="text-center">
          <Clock size={32} className="text-foreground/40 mx-auto mb-3" />
          <div className="text-lg font-display text-foreground mb-1">Coming Soon</div>
          <div className="text-xs text-muted-foreground">Next project in development</div>
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-display mb-2 text-foreground">
          Something Amazing
        </h3>
        <p className="text-muted-foreground text-sm mb-4 font-body leading-relaxed">
          Currently building a pixelated parallel space. Stay tuned for a 2D metaverse like no other.
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {["WebRTC", "Phaser.js", "Next.js"].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-1 px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground"
            >
              <Code size={10} />
              {item}
            </div>
          ))}
          <div className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground/60">
            +more
          </div>
        </div>

        <div className="flex gap-3 pt-3 border-t border-border">
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Github size={12} />
            Soon
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <ExternalLink size={12} />
            Soon
          </div>
        </div>
      </div>
    </div>
  );
}
