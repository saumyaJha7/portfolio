import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "@/components/icons";

export function FloatingDockContainer() {
  const links = [
    {
      title: "Linkedin",
      icon: (
        <LinkedinIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/jhasaumya/",
    },
    {
      title: "Twitter",
      icon: (
        <TwitterIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/SaumyaJ92279765",
    },
    {
      title: "GitHub",
      icon: (
        <GithubIcon className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/saumyaJha7",
    },
  ];
  return (
    <div className="flex items-center justify-center pt-7">
      <FloatingDock items={links} />
    </div>
  );
}
