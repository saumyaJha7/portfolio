"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/saumyajha7",
    icon: GithubIcon,
    color: "hover:border-foreground/30 hover:bg-foreground/5 text-foreground",
    iconColor: "group-hover:text-foreground",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jhasaumya/",
    icon: LinkedinIcon,
    color: "hover:border-foreground/30 hover:bg-foreground/5 text-foreground",
    iconColor: "group-hover:text-foreground",
  },
  {
    name: "Twitter / X",
    href: "https://x.com/SaumyaJ92279765",
    icon: TwitterIcon,
    color: "hover:border-foreground/30 hover:bg-foreground/5 text-foreground",
    iconColor: "group-hover:text-foreground",
  },
  {
    name: "Email",
    href: "mailto:saumyajha.error@gmail.com",
    icon: Mail,
    color: "hover:border-primary/30 hover:bg-primary/5 text-primary",
    iconColor: "group-hover:text-primary",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="mx-auto max-w-3xl flex flex-col items-center text-center">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-5xl bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
            Let&apos;s connect.
          </h2>
          <Separator className="mt-6 w-12 mx-auto" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-8 w-full"
        >
          <p className="text-muted-foreground leading-relaxed text-lg max-w-lg mx-auto">
            I&apos;m always open to discussing new opportunities, interesting
            projects, or just having a chat about tech. Feel free to reach out
            through any of the channels below.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4 w-full max-w-2xl mx-auto">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                viewport={{ once: true }}
                className={`group flex items-center gap-3 rounded-full border border-border bg-card/40 backdrop-blur-md px-6 py-3 transition-all duration-300 ${social.color} hover:shadow-lg hover:shadow-black/5 dark:hover:shadow-white/5`}
              >
                <social.icon className={`h-5 w-5 text-muted-foreground transition-colors ${social.iconColor}`} />
                <span className="text-sm font-semibold tracking-wide">
                  {social.name}
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-inherit transition-colors" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
