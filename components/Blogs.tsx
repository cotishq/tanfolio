import React from 'react';

const Blogs = () => {
  return (
    <section className="py-16" id="blog">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-2xl font-display mb-3">Blogs & Notes</h2>
          <p className="font-body leading-relaxed">
            Currently drafting thoughts, dev notes, and breakdowns. Stay tuned for upcoming technical write-ups 
            and insights from my journey.
          </p>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
          Writing in Progress...
        </div>
      </div>
    </section>
  );
};

export default Blogs;