"use client";

import { motion } from "framer-motion";
import { SectionHead } from "@/components/section-head";
import { Highlight } from "@/components/ui/highlight";
import {
  Code2,
  Server,
  Cloud,
  Brain,
  Database,
} from "lucide-react";

const skills = [
  { name: "React and Next.js", icon: Code2 },
  { name: "Node.js and Express", icon: Server },
  { name: "MongoDB and PostgreSQL", icon: Database },
  { name: "GenAI and LLMs", icon: Brain },
  { name: "Cloud and AWS", icon: Cloud },
];

const techStack = [
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Git",
  "REST APIs",
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <SectionHead title="Building things for the web">
          <>
            Backend focused, with care for <Highlight>simple and reliable detail</Highlight> across
            the stack.
          </>
        </SectionHead>
      </motion.div>

      <div className="mt-8 grid gap-10 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          viewport={{ once: true }}
          className="space-y-5 leading-relaxed text-neutral-700 md:col-span-3 dark:text-neutral-400"
        >
          <p>
            Backend focused developer working on{" "}
            <Highlight>scalable systems and APIs</Highlight> that stay reliable as
            they grow.
          </p>
          <p>
            I build with <Highlight>generative AI in real workflows</Highlight>,
            using LLMs where they solve a clear problem.
          </p>
          <p>
            Currently learning more about{" "}
            <Highlight>cloud and DevOps practices</Highlight> for deploying and
            maintaining production systems.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="space-y-4 md:col-span-2"
        >
          <h3 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
            What I work with
          </h3>
          <div className="grid grid-cols-1 gap-3">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="card-chai flex items-center gap-3 p-3 sm:opacity-90 sm:hover:opacity-100"
              >
                <skill.icon className="h-4 w-4 text-muted-foreground" />
                <span className="font-montserrat text-sm font-semibold">{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        viewport={{ once: true }}
        className="mt-10"
      >
        <h3 className="mb-4 text-xs font-medium tracking-wider text-muted-foreground uppercase">
          Technologies
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded border border-gray-300 px-2.5 py-1 text-xs text-gray-700 dark:border-gray-700 dark:text-gray-400"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
