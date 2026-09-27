import { cn } from "@/lib/utils";

export function Tag({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "inline-flex h-6 items-center rounded-full border border-line bg-muted/40 px-2 font-code text-xs text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export function IconTile({ className, ...props }: React.ComponentProps<"span">) {
  return (
    <span
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-md border border-line bg-muted/40 text-muted-foreground [&_svg]:size-3.5",
        className
      )}
      {...props}
    />
  );
}
