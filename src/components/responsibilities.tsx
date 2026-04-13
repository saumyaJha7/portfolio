"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const responsibilities = [
  {
    role: "Technical Lead",
    organization: "CampusCrafters",
    period: "March 2026 — Present",
    description:
      "I lead the technical development and architecture of a platform designed to strengthen the campus's growth eco-system.",
    icon: Users,
    tags: ["Leadership", "Decision Making", "Ownership"],
    liveLink: "https://www.campuscrafters.com/",
    linkedin: "https://www.linkedin.com/company/campuscraftersofficial/",
  },
  {
    role: "Development Lead",
    organization: "AWS Cloud Club I2IT",
    period: "Feb 2026 — Present",
    description:
      "Leading the development team of the AWS Cloud Club, mentoring members and guiding the creation of cloud-based projects using AWS technologies.",
    icon: Award,
    tags: ["AWS", "Cloud Computing", "Ownership"],
    liveLink: "https://awscloudclubi2it.xyz/",
    linkedin: "https://www.linkedin.com/company/awsi2it/",
  }
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

                <div className="flex items-center gap-2 pt-3">
                  {item.liveLink && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1.5 text-xs rounded-full border-primary/20 hover:border-primary/50"
                      
                    >
                      <a href={item.liveLink} target="_blank" rel="noopener noreferrer">
                        
                        Live Link
                      </a>
                    </Button>
                  )}
                  {item.linkedin && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 gap-1.5 text-xs rounded-full border-primary/20 hover:border-primary/50"
                      
                    >
                      <a href={item.linkedin} target="_blank" rel="noopener noreferrer">
                        
                        LinkedIn
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
