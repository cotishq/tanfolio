'use client';

import { useEffect, useState } from 'react';
import { quotes } from '@/config/Quote';

export const Quote = () => {
  const [currentQuote, setCurrentQuote] = useState<{
    quote: string;
    author: string;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setCurrentQuote(randomQuote);
    
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  if (!currentQuote) return null;

  const { quote, author } = currentQuote;

  return (
    <section id="quote">
      <div
        className={`relative w-full px-8 py-8 border border-border rounded-2xl bg-muted/20 dark:bg-muted/10 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-500 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        } hover:scale-[1.01] group`}
      >
        <svg
          aria-hidden="true"
          width="64"
          height="52"
          viewBox="0 0 150 100"
          className="absolute top-4 left-6 fill-neutral-300 dark:fill-white/10 transition-all duration-300 group-hover:fill-muted/40 dark:group-hover:fill-white/15"
        >
          <path d="M25.086 77.292c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622C1.054 58.534 0 53.411 0 47.686c0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C28.325 3.917 33.599 1.507 39.324 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.130 4.520.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Zm54.24 0c-4.821 0-9.115-1.205-12.882-3.616-3.767-2.561-6.78-6.102-9.04-10.622-2.11-4.52-3.164-9.643-3.164-15.368 0-5.273.904-10.396 2.712-15.368 1.959-4.972 4.746-9.567 8.362-13.786a59.042 59.042 0 0 1 12.43-11.3C82.565 3.917 87.839 1.507 93.564 0l11.074 13.786c-6.479 2.561-11.677 5.951-15.594 10.17-3.767 4.219-5.65 7.835-5.65 10.848 0 1.356.377 2.863 1.130 4.52.904 1.507 2.637 3.089 5.198 4.746 3.767 2.41 6.328 4.972 7.684 7.684 1.507 2.561 2.26 5.5 2.26 8.814 0 5.123-1.959 9.19-5.876 12.204-3.767 3.013-8.588 4.52-14.464 4.52Z" />
        </svg>

        <blockquote className="relative z-10 flex flex-col justify-center min-h-[120px]">
          <p className="text-lg md:text-xl font-medium font-body text-foreground italic leading-relaxed tracking-wide text-center">
            "{quote}"
          </p>
          <footer className="mt-4 text-center font-mono text-sm text-primary/70 transition-colors duration-300 hover:text-primary">
            — {author}
          </footer>
        </blockquote>
        
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </section>
  );
};
