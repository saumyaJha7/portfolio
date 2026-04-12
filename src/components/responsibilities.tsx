"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Briefcase } from "lucide-react";

const responsibilities = [
  {
    role: "Technical Club Head",
    organization: "College Tech Club",
    period: "2025 — Present",
    description:
      "Leading a team of 20+ members in organizing technical events, hackathons, and workshops. Driving initiatives in web development, cloud computing, and open-source contributions.",
    icon: Users,
    tags: ["Leadership", "Event Management", "Mentoring"],
  },
  {
    role: "AWS Cloud Club Lead",
    organization: "AWS Cloud Club",
    period: "2025 — Present",
    description:
      "Steering cloud computing initiatives, hosting hands-on workshops on AWS services, and building a community of cloud enthusiasts. Organizing meetups and study groups.",
    icon: Award,
    tags: ["AWS", "Cloud Computing", "Community Building"],
  },
  {
    role: "Open Source Contributor",
    organization: "Various Projects",
    period: "2024 — Present",
    description:
      "Contributing to open-source projects, participating in Hacktoberfest, and maintaining personal projects. Building tools that solve real developer problems.",
    icon: Briefcase,
    tags: ["Open Source", "Collaboration", "Git"],
  },
];

export default function Responsibilities() {
  return (
    <section id="responsibilities" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Responsibilities
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Roles & leadership.
          </h2>
          <Separator className="mt-6 w-12" />
        </motion.div>

        {/* Timeline */}
        <div className="mt-12 space-y-0">
          {responsibilities.map((item, i) => (
            <motion.div
              key={item.role}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline line */}
              {i < responsibilities.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-px bg-border" />
              )}

              {/* Timeline dot */}
              <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-border bg-card">
                <item.icon className="h-3 w-3 text-muted-foreground" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-base font-semibold">{item.role}</h3>
                  <span className="text-xs text-muted-foreground font-medium">
                    {item.period}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground font-medium">
                  {item.organization}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {item.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="rounded-full text-[11px] font-normal text-muted-foreground"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
