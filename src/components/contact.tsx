"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { buttonVariants } from "@/components/ui/button";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com",
    icon: LinkedinIcon,
  },
  {
    name: "Twitter / X",
    href: "https://x.com",
    icon: TwitterIcon,
  },
  {
    name: "Email",
    href: "mailto:your@email.com",
    icon: Mail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Contact
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s connect.
          </h2>
          <Separator className="mt-6 w-12" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-12 max-w-xl"
        >
          <p className="text-muted-foreground leading-relaxed">
            I&apos;m always open to discussing new opportunities, interesting projects, 
            or just having a chat about tech. Feel free to reach out through any of 
            the channels below.
          </p>

          {/* Social links */}
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {socials.map((social, i) => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 + i * 0.05 }}
                viewport={{ once: true }}
                className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition-all duration-200 hover:border-foreground/20 hover:bg-accent"
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span className="text-sm font-medium">{social.name}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.a>
            ))}
          </div>

          {/* Direct CTA */}
          <div className="mt-8">
            <a
              href="mailto:your@email.com"
              className={buttonVariants({ size: "lg" }) + " rounded-full px-8 font-medium"}
            >
              <Mail className="mr-2 h-4 w-4" />
              Send me an email
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
