"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Rss, Sparkles } from "lucide-react";

export default function BlogComingSoon() {
  return (
    <section id="blog" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Blog
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Thoughts & writing.
          </h2>
          <Separator className="mt-6 w-12" />
        </motion.div>

        {/* Coming Soon Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 flex items-center justify-center"
        >
          <div className="relative w-full max-w-2xl">
            {/* Animated border glow */}
            <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-transparent via-foreground/10 to-transparent animate-pulse-glow" />

            {/* Card */}
            <div className="relative rounded-2xl border border-border bg-card p-12 sm:p-16 text-center">
              {/* Floating particles */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute h-1 w-1 rounded-full bg-foreground/20"
                    initial={{
                      x: `${20 + i * 15}%`,
                      y: `${30 + (i % 3) * 20}%`,
                    }}
                    animate={{
                      y: [
                        `${30 + (i % 3) * 20}%`,
                        `${10 + (i % 3) * 20}%`,
                        `${30 + (i % 3) * 20}%`,
                      ],
                      opacity: [0.2, 0.6, 0.2],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>

              {/* Icon */}
              <motion.div
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-secondary"
              >
                <Rss className="h-6 w-6 text-muted-foreground" />
              </motion.div>

              {/* Shimmer text */}
              <h3 className="text-2xl font-bold sm:text-3xl">
                <span
                  className="inline-block bg-gradient-to-r from-foreground via-muted-foreground to-foreground bg-clip-text text-transparent animate-shimmer"
                >
                  Coming Soon
                </span>
              </h3>

              {/* Sparkle accent */}
              <motion.div
                className="mt-3 flex items-center justify-center gap-1.5 text-muted-foreground"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Sparkles className="h-3.5 w-3.5" />
                <span className="text-xs font-medium uppercase tracking-widest">
                  Under Construction
                </span>
                <Sparkles className="h-3.5 w-3.5" />
              </motion.div>

              <p className="mt-6 text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
                I&apos;m working on articles about backend development, cloud architecture, 
                DevOps practices, and my journey with Generative AI. Stay tuned for
                deep dives and tutorials.
              </p>

              {/* Decorative dots */}
              <div className="mt-8 flex items-center justify-center gap-2">
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.4, 1, 0.4],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
