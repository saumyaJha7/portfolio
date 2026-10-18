"use client";

import { motion } from "framer-motion";
import { Highlight } from "@/components/ui/highlight";
import { Code2, Server, Cloud, Brain, Database } from "lucide-react";

const skills = [
  { name: "React and Next.js", icon: Code2 },
  { name: "Node.js and Express", icon: Server },
  { name: "MongoDB and PostgreSQL", icon: Database },
  { name: "GenAI and LLMs", icon: Brain },
  { name: "Cloud and AWS", icon: Cloud },
];

const techGroups = [
  {
    title: "App Development",
    items: ["React", "Next.js", "TypeScript", "React Native", "Expo", "Tailwind CSS"],
  },
  {
    title: "Backend Engineering",
    items: ["Node.js", "Express.js", "NestJS", "REST APIs", "WebSockets", "OpenAPI"],
  },
  {
    title: "Data & Security",
    items: ["PostgreSQL", "MongoDB", "Redis", "Prisma", "JWT", "OAuth 2.0", "RBAC"],
  },
  {
    title: "Production & Operations",
    items: [
      "Docker",
      "AWS",
      "Linux",
      "Git",
      "GitHub Actions",
      "CI/CD",
      "Jest",
      "Playwright",
      "Sentry",
      "Nginx",
      "BullMQ",
    ],
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 pt-16 pb-4 sm:pt-20 sm:pb-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
        className="card-chai rounded-[calc(var(--radius)+8px)] p-6 sm:p-10"
      >
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-5">
            <h2 className="text-2xl font-medium sm:text-[30px]">
              Building things for app and web both
            </h2>
            <div className="space-y-5 leading-relaxed text-neutral-700 dark:text-neutral-400">
              <p>
                Backend focused developer working on{" "}
                <Highlight>scalable systems and APIs</Highlight> that stay
                reliable as they grow.
              </p>
              <p>
                I build with <Highlight>generative AI in real workflows</Highlight>,
                using LLMs where they solve a clear problem.
              </p>
              <p>
                Currently learning more about{" "}
                <Highlight>cloud and DevOps practices</Highlight> for deploying
                and maintaining production systems.
              </p>
            </div>
          </div>

          <div className="space-y-4">
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
                  <span className="font-montserrat text-sm font-semibold">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-6 md:flex-row md:gap-10">
          <h3 className="shrink-0 text-xs font-medium tracking-wider text-muted-foreground uppercase md:w-48">
            Technologies
          </h3>
          <div className="flex-1 space-y-6">
            {techGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-medium tracking-wider text-muted-foreground uppercase">
                  {group.title}
                </h4>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded border border-gray-300 px-2.5 py-1 text-xs text-gray-700 dark:border-gray-700 dark:text-gray-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}