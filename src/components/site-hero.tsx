"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { FloatingDockContainer } from "@/components/ui/floating-dock-container";

export default function SiteHero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[80vh] items-center justify-center"
    >
      <div className="relative z-10 mx-auto max-w-3xl text-center">
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

        <div>
          <motion.div className="relative mx-4 my-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row">
            <LayoutTextFlip
              text="Designing"
              words={[
                "powerful backend systems",
                "distributed architectures",
                "AI-integrated applications",
                "production-ready infrastructure",
              ]}
            />
          </motion.div>
          <p className="mt-4 text-center text-base text-neutral-600 dark:text-neutral-400">
            Shipping <Highlight>scalable and maintainable codebases</Highlight>.
            Building robust backend systems, experimenting with GenAI, and
            deploying production-ready applications with DevOps workflows.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <Button size="lg" className="rounded-full px-8 font-medium" asChild>
            <a href="/projects">View Projects</a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 font-medium"
            asChild
          >
            <a href="/#contact">Contact Me</a>
          </Button>
        </motion.div>

        <FloatingDockContainer />
      </div>
    </section>
  );
}
