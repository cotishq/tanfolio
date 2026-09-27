import React from 'react';
import { Panel, PanelContent, PanelDescription, PanelHeader, PanelTitle } from './Panel';

const Blogs = () => {
  return (
    <Panel id="blog" className="font-body">
      <PanelHeader>
        <PanelTitle>
          <a href="#blog">Blogs &amp; Notes</a>
        </PanelTitle>
        <PanelDescription>
          Currently drafting thoughts, dev notes, and breakdowns. Stay tuned for upcoming technical write-ups
          and insights from my journey.
        </PanelDescription>
      </PanelHeader>

      <PanelContent className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
        Writing in Progress...
      </PanelContent>
    </Panel>
  );
};

export default Blogs;
