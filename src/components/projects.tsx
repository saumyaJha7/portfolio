"use client";

import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { GithubIcon } from "@/components/icons";

const projects = [
  {
    title: "AI Chat Platform",
    description:
      "A real-time chat application powered by LLMs with context-aware responses, streaming output, and conversation history management.",
    tags: ["Next.js", "OpenAI", "Node.js", "MongoDB"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Cloud Deploy Pipeline",
    description:
      "Automated CI/CD pipeline with Docker containerization, GitHub Actions workflows, and multi-environment deployment to AWS.",
    tags: ["Docker", "AWS", "GitHub Actions", "Node.js"],
    github: "https://github.com",
    live: "",
  },
  {
    title: "REST API Microservices",
    description:
      "A scalable microservices architecture with authentication, rate limiting, caching layers, and comprehensive API documentation.",
    tags: ["Express", "PostgreSQL", "Redis", "Docker"],
    github: "https://github.com",
    live: "",
  },
  {
    title: "Portfolio Website",
    description:
      "This minimal, monochrome portfolio built with Next.js and shadcn/ui featuring smooth animations and dark mode support.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "shadcn/ui"],
    github: "https://github.com",
    live: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Projects
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Selected work.
          </h2>
          <Separator className="mt-6 w-12" />
        </motion.div>

        {/* Project grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full border border-border bg-card transition-all duration-300 hover:border-foreground/20 hover:shadow-lg hover:shadow-foreground/5">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg font-semibold">
                      {project.title}
                    </CardTitle>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <CardDescription className="mt-1 leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="outline"
                        className="rounded-full text-[11px] font-normal text-muted-foreground"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={buttonVariants({ variant: "ghost", size: "sm" }) + " h-8 gap-1.5 text-xs"}
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
                      className={buttonVariants({ variant: "ghost", size: "sm" }) + " h-8 gap-1.5 text-xs"}
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
