type SkillBadgeProps = {
  name: string;
  icon?: React.ReactNode;
};

export const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-md bg-muted text-sm font-medium text-foreground gap-2 border border-muted-foreground/20">
      {icon}
      {name}
    </div>
  );
};
