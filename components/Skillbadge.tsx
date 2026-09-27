type SkillBadgeProps = {
  name: string;
  icon?: React.ReactNode;
};

export const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <span className="flex h-6 items-center gap-1.5 rounded-full border border-line bg-muted/40 px-2 font-code text-xs text-foreground [&_svg]:size-3.5 [&_svg]:shrink-0 [&_svg]:text-muted-foreground">
      {icon}
      {name}
    </span>
  );
};
