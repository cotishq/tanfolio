import { STACK } from "@/config/stack";
import { Panel, PanelDescription, PanelHeader, PanelTitle } from "./Panel";
import { SkillBadge } from "./Skillbadge";

const ID = "stack";

const Skills = () => {
  return (
    <Panel id={ID} className="font-body">
      <PanelHeader>
        <PanelTitle>
          <a href={`#${ID}`}>Stack</a>
        </PanelTitle>
        <PanelDescription>
          This list grows faster than my GitHub stars — and I kinda <span className="text-primary">like</span> that.
        </PanelDescription>
      </PanelHeader>

      <div className="relative [--col-left-width:12rem]">
        <div
          className="pointer-events-none absolute inset-y-0 left-(--col-left-width) w-px border-r border-dashed border-line max-sm:hidden"
          aria-hidden
        />

        {STACK.map(({ category, items }, index) => {
          const categoryId = `${ID}-${category.toLowerCase()}`;

          return (
            <div
              key={category}
              className="grid items-start gap-y-2 border-b border-line py-4 last:border-none sm:grid-cols-[var(--col-left-width)_1fr]"
            >
              <div id={categoryId} className="pl-4 text-base leading-6">
                <span className="mr-1.5 font-code text-sm text-muted-foreground/80 select-none" aria-hidden>
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                {category}
              </div>

              <ul aria-labelledby={categoryId} className="flex flex-wrap gap-1.5 px-4">
                {items.map((item) => (
                  <li key={item.name} className="flex">
                    <SkillBadge name={item.name} icon={item.icon} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Panel>
  );
};

export default Skills;
