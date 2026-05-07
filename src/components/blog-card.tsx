"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  imageUrl: string;
  hashnodeUrl: string;
}

export function BlogCard({ id, title, imageUrl, hashnodeUrl }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={hashnodeUrl} target="_blank" rel="noopener noreferrer">
        <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-foreground/50 hover:shadow-lg cursor-pointer">
          {/* Image container */}
          <div className="relative h-48 w-full overflow-hidden bg-muted">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          {/* Content */}
          <div className="p-5 flex flex-col justify-between">
            <h3 className="text-lg font-semibold leading-tight text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
              {title}
            </h3>

            {/* External link indicator */}
            <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
              <span>Read on Hashnode</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
