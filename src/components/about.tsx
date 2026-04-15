"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Code2,
  Server,
  Cloud,
  Smartphone,
  Brain,
  Database,
} from "lucide-react";

const skills = [
  { name: "React / Next.js", icon: Code2 },
  { name: "Node.js / Express", icon: Server },
  { name: "MongoDB / PostgreSQL", icon: Database },
  { name: "GenAI / LLMs", icon: Brain },
  { name: "Cloud / AWS", icon: Cloud },
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
    <section id="about" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            About Me
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Building things for the web.
          </h2>
          <Separator className="mt-6 w-12" />
        </motion.div>

        <div className="mt-12 grid gap-12 md:grid-cols-5">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="md:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
          >
            <p> 
              Backend-focused developer specializing in designing <span className="text-foreground font-medium">scalable systems and APIs</span>. I work on structuring server-side architectures, handling data flow across services, and building applications that are reliable and easy to extend.
            </p>
            <p>
              I&apos;ve built and experimented with <span className="text-foreground font-medium">Generative AI</span> applications using LLMs, integrating them into practical workflows rather than standalone demos. My work often sits at the intersection of backend systems and AI.
            </p>
            <p>
              Currently,  I&apos;m deepening my understanding of <span className="text-foreground font-medium">cloud infrastructure and DevOps</span>—focusing on how systems are deployed, scaled, and maintained in production environments.
            </p>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-6"
          >
            <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              What I work with
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 rounded-lg border border-border bg-card p-3 transition-colors hover:bg-accent"
                >
                  <skill.icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-sm font-medium uppercase tracking-widest text-muted-foreground mb-4">
            Technologies
          </h3>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-full px-3 py-1 text-xs font-medium"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
