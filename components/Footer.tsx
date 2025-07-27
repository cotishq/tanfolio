
import { BsTwitterX } from "react-icons/bs"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { SiLeetcode } from "react-icons/si"

export const Footer = () => {
    return (
        <footer className="py-10 text-sm text-muted-foreground text-center">
            <p className="mb-2 font-mono text-red-500 font-display tracking-wide hover:text-red-400 transition-colors duration-300">
                cotishq.dev
            </p>
            
            <p className="mb-1">
                Built with focus, <span className="text-amber-600">caffeine</span> & <span className="italic text-purple-400">a hint of chaos</span>
            </p>
            
            <p className="mb-1">
                © {new Date().getFullYear()} Tanishq Patil. All rights reserved.
            </p>
            
            <p className="text-xs mt-2 text-muted-foreground/60 hover:text-muted-foreground/80 transition-colors duration-200">
                Still scrolling? You're persistent. I like that. 
                <span className="ml-1 animate-pulse">👀</span>
            </p>

            <div className="mt-6 flex justify-center gap-5 text-muted-foreground">
        <a
          href="https://github.com/cotishq"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-white transition"
        >
          <FaGithub size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/tanishq-dev/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-white transition"
        >
          <FaLinkedin size={20} />
        </a>
        <a
          href="mailto:tanishqp101204@gmail.com"
          aria-label="Email"
          className="hover:text-white transition"
        >
          <FiMail size={20} />
        </a>
        <a
          href="https://x.com/tanishqstwt"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="hover:text-white transition"
        >
          <BsTwitterX size={20} />
        </a>
        <a
          href="https://leetcode.com/u/TanishqPatil/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Leetcode"
          className="hover:text-white transition"
        >
          <SiLeetcode size={20} />
        </a>
      </div>
        </footer>
    )
}