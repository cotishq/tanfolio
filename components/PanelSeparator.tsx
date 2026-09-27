import { cn } from "@/lib/utils";

export function PanelSeparator({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "h-8 border-x border-line diagonal-stripes screen-line-top screen-line-bottom",
        className
      )}
      aria-hidden
    />
  );
}
