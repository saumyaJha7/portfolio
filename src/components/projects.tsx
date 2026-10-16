"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  CardFooter,
} from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SectionHead } from "@/components/section-head";
import { Highlight } from "@/components/ui/highlight";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "DebtGuardian",
    description:
      "A legal platform for settling debts and consulting with lawyers, with guided workflows and expert help.",
    tags: ["Next.js", "React", "Tailwind CSS"],
    github: "https://github.com/saumyaJha7/debtGuardian",
    live: "https://debt-guardian.vercel.app/",
  },
  {
    title: "tweetTube",
    description:
      "A backend project mixing Twitter and YouTube ideas, built for realtime interaction and scalable delivery.",
    tags: ["Express", "Node.js", "MongoDB"],
    github: "https://github.com/saumyaJha7/tweetTube",
    live: "",
  },
  {
    title: "NextJs Auth",
    description:
      "A production ready auth system in Next.js with secure login, JWT sessions, and email verification.",
    tags: ["Next.js", "JWT", "MongoDB"],
    github: "https://github.com/saumyaJha7/NextJs-Auth",
    live: "",
  },
  {
    title: "Expense Tracker",
    description:
      "A simple Python and Notion API tool to record daily expenses with clean categorization.",
    tags: ["Python", "Notion API"],
    github: "https://github.com/saumyaJha7/Expense_Tracker_v1",
    live: "",
  },
];

export default function Projects({ limit }: { limit?: number } = {}) {
  const visible = typeof limit === "number" ? projects.slice(0, limit) : projects;
  const isPreview = typeof limit === "number";
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <SectionHead
        title="Selected work"
        action={isPreview ? { label: "View all", href: "/projects" } : undefined}
      >
        <>
          Projects built around <Highlight>reliable backend systems</Highlight> and
          clean product detail.
        </>
      </SectionHead>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {visible.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardBody>
                <div className="flex items-start justify-between gap-3">
                  <CardTitle>{project.title}</CardTitle>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-all duration-200 group-hover:opacity-100" />
                </div>
                <CardText>{project.description}</CardText>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-gray-300 px-2 py-0.5 text-[11px] text-gray-600 dark:border-gray-700 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CardFooter>
                  <span className="text-xs text-gray-600 dark:text-gray-400">
                    {project.live ? "Live and open source" : "Open source"}
                  </span>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "soft", size: "sm" })}
                      >
                        <GithubIcon className="h-3.5 w-3.5" />
                        Code
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "soft", size: "sm" })}
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Live
                      </a>
                    )}
                  </div>
                </CardFooter>
              </CardBody>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
