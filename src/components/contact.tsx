"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Highlight } from "@/components/ui/highlight";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/saumyajha7",
    icon: GithubIcon,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/jhasaumya/",
    icon: LinkedinIcon,
  },
  {
    name: "Twitter",
    href: "https://x.com/SaumyaJ92279765",
    icon: TwitterIcon,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-medium sm:text-[30px]">Lets connect</h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-neutral-700 md:text-lg dark:text-neutral-400">
            Open to <Highlight>new opportunities and ideas</Highlight>. Reach out
            about projects, roles, or a quick chat on tech.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-8 flex w-full flex-wrap items-center justify-center gap-4"
        >
          <a
            href="mailto:saumyajha.error@gmail.com"
            className={buttonVariants({ variant: "solid", size: "lg" })}
          >
            <Mail className="h-4 w-4" aria-hidden />
            Email me
          </a>
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              <social.icon className="h-4 w-4" />
              {social.name}
              <ArrowUpRight className="h-3.5 w-3.5 opacity-60" aria-hidden />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
