"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { GithubIcon, LinkedinIcon } from "@/components/icons";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
import { cn } from "@/lib/utils";
import { FloatingDockContainer } from "./ui/floating-dock-container";

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
            Shipping scalable, fault-tolerant, and maintainable codebases.
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

        <FloatingDockContainer />
      </div>
    </section>
  );
}
