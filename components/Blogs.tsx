import { ArrowUpRight, Newspaper } from "lucide-react";
import { BLOGS } from "@/config/blogs";
import { Panel, PanelDescription, PanelHeader, PanelTitle, PanelTitleSup } from "./Panel";
import { IconTile } from "./Tag";

const Blogs = () => {
  return (
    <Panel id="blog" className="font-body">
      <PanelHeader>
        <PanelTitle>
          <a href="#blog">Blogs &amp; Notes</a>
          <PanelTitleSup>({BLOGS.length})</PanelTitleSup>
        </PanelTitle>
        <PanelDescription>
          Write-ups from the work.
        </PanelDescription>
      </PanelHeader>

      <div>
        {BLOGS.map((blog) => (
          <div key={blog.url} className="flex items-center border-b border-line last:border-none">
            <IconTile className="mx-4">
              <Newspaper />
            </IconTile>

            <div className="flex flex-1 items-center gap-3 border-l border-dashed border-line p-4">
              <div className="flex-1">
                <h3 className="mb-0.5 text-lg leading-snug font-medium">{blog.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {blog.source}
                  <span className="tabular-nums"> · {blog.date}</span>
                </p>
              </div>

              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Read ${blog.title}`}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
};

export default Blogs;
