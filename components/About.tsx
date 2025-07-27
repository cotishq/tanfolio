"use client";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { PiHandbag } from "react-icons/pi";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 pt-32 pb-20 bg-background text-foreground"
    >
      <div className="max-w-3xl w-full flex flex-col items-start text-left space-y-8 font-body">
        
        
        <div className="flex items-center space-x-4">
          <Image
            src="/avatar.jpg"
            alt="Tanishq Avatar"
            width={80}
            height={80}
            className="rounded-full border border-muted-foreground shadow-md"
          />
          <div>
            <h1 className="text-3xl md:text-4xl font-display text-primary tracking-wide">
              TANISHQ
            </h1>
            <p className="text-sm text-muted-foreground">@tanishqstwt</p>
          </div>
        </div>

        
        <div className="space-y-4 text-base md:text-lg leading-relaxed">
          <p>
            I'm <strong>Tanishq</strong>, a developer who enjoys building things that work and occasionally{" "}
            <span className="text-red-400">(breaking)</span> them to learn why they don't.
          </p>
          <p>
            I like working <strong>across the stack</strong> — blending design with development to craft clean,
            functional, and fast experiences.
          </p>
          <p>
            When I'm <strong>not on keyboard</strong>, you'll probably find me at gym or catching up on some much needed sleep
          </p>
          <p>
            I'm currently available for internships, full-time opportunities, and freelance projects. If you're looking for someone passionate, skilled, and ready to contribute, I'm here to help bring your ideas to life!
          </p>
        </div>

        
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center space-x-2 px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <a href="https://twitter.com/tanishqstwt"><span className="text-sm text-green-400">Available for new opportunities</span></a>
          </div>

          <a href="mailto:tanishqp101204@gmail.com?subject=Interested in hiring you" className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-primary text-primary rounded-full hover:bg-primary hover:text-background transition" >
            <PiHandbag className="w-4 h-4" />

            Deploy me
            
          </a>
        </div>

        
        <Separator />
        
        <div className="w-full">
          <p className="text-sm text-muted-foreground mb-4">
            Where you can Connect with Me (ofcourse digitally)
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
            <a
              href="mailto:tanishqp101204@gmail.com"
              className="flex items-center space-x-2 px-3 py-2 text-sm border border-muted-foreground/30 rounded-md hover:border-muted-foreground hover:bg-muted-foreground/10 transition"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>Email Me</span>
            </a>
            <a
              href="https://twitter.com/tanishqstwt"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 text-sm border border-muted-foreground/30 rounded-md hover:border-muted-foreground hover:bg-muted-foreground/10 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              <span>Twitter</span>
            </a>
            <a
              href="https://github.com/cotishq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 text-sm border border-muted-foreground/30 rounded-md hover:border-muted-foreground hover:bg-muted-foreground/10 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com/in/tanishq-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-3 py-2 text-sm border border-muted-foreground/30 rounded-md hover:border-muted-foreground hover:bg-muted-foreground/10 transition"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        <Separator />

      </div>
    </section>
  );
};

export default About;