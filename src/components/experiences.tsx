"use client";

import { motion } from "framer-motion";
import { Card, CardBody, CardTitle, CardText, CardFooter } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { SectionHead } from "@/components/section-head";
import { Highlight } from "@/components/ui/highlight";

const experiences = [
  {
    role: "Technical Lead",
    organization: "CampusCrafters",
    period: "Mar 2026 to Present",
    description:
      "Leading technical development and architecture for a platform that supports campus growth.",
    tags: ["Leadership", "Ownership"],
    liveLink: "https://www.campuscrafters.com/",
    linkedin: "https://www.linkedin.com/company/campuscraftersofficial/",
  },
  {
    role: "Development Lead",
    organization: "AWS Cloud Club I2IT",
    period: "Feb 2026 to Present",
    description:
      "Mentoring members and guiding cloud projects built with AWS services and best practices.",
    tags: ["AWS", "Cloud"],
    liveLink: "https://awscloudclubi2it.xyz/",
    linkedin: "https://www.linkedin.com/company/awsi2it/",
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="scroll-mt-24 py-16 sm:py-20">
      <SectionHead title="Roles and leadership">
        <>
          Teams where I focus on <Highlight>ownership and mentoring</Highlight> as
          much as shipping.
        </>
      </SectionHead>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {experiences.map((item, i) => (
          <motion.div
            key={item.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardBody>
                <div className="flex flex-col gap-1">
                  <CardTitle>{item.role}</CardTitle>
                  <p className="text-sm font-medium text-muted-foreground">
                    {item.organization}
                  </p>
                  <p className="text-xs font-medium tracking-wide text-muted-foreground uppercase">
                    {item.period}
                  </p>
                </div>
                <CardText>{item.description}</CardText>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-gray-200 px-2 py-0.5 text-[11px] text-gray-500 dark:border-gray-700 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <CardFooter>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Leadership role
                  </span>
                  <div className="flex gap-2">
                    {item.liveLink && (
                      <a
                        href={item.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "soft", size: "sm" })}
                      >
                        Live site
                      </a>
                    )}
                    {item.linkedin && (
                      <a
                        href={item.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={buttonVariants({ variant: "soft", size: "sm" })}
                      >
                        LinkedIn
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
