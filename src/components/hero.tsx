"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { GithubIcon, LinkedinIcon } from "@/components/icons";

import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";

export default function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const words = ["better", "modern", "scalable"];

  return (
    
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-6"
    >
      {/* Subtle grid background */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,_var(--border)_1px,_transparent_1px),_linear-gradient(to_bottom,_var(--border)_1px,_transparent_1px)] bg-[size:4rem_4rem] opacity-40" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-foreground/40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-foreground" />
            </span>
            Open to opportunities
          </span>
        </motion.div>

        

        <motion.h1
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className={cn(
        "relative mb-6 max-w-2xl text-left text-4xl leading-normal font-bold tracking-tight text-zinc-700 md:text-7xl dark:text-zinc-100",
      )}
      layout
    >
      <div className="inline-block">
        Building <ContainerTextFlip words={words} /> solutions 

      </div>
    </motion.h1>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-full px-8 font-medium"
            onClick={() => handleScroll("#projects")}
          >
            View Projects
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 font-medium"
            onClick={() => handleScroll("#contact")}
          >
            Contact Me
          </Button>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8 flex items-center justify-center gap-3"
        >
          <a
            href="https://github.com/saumyajha7"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/jhasaumya/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2.5 text-muted-foreground hover:text-foreground hover:bg-accent transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="h-5 w-5" />
          </a>
        </motion.div>

        
      </div>
    </section>
  );
}
