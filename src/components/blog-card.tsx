"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Card, CardBody, CardTitle, CardText, CardFooter, CardMedia } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";

interface BlogCardProps {
  id: string;
  title: string;
  imageUrl: string;
  articleUrl: string;
}

export function BlogCard({ title, imageUrl, articleUrl }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      viewport={{ once: true }}
      className="h-full"
    >
      <Link href={articleUrl} target="_blank" rel="noopener noreferrer" className="block h-full">
        <Card className="h-full">
          <CardMedia>
            <Image src={imageUrl} alt={title} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
          </CardMedia>
          <CardBody>
            <CardTitle className="line-clamp-2">{title}</CardTitle>
            <CardText>Read the full breakdown on Medium.</CardText>
            <CardFooter>
              <span className="text-xs text-gray-500 dark:text-gray-400">Medium article</span>
              <span className={buttonVariants({ variant: "soft", size: "sm" })}>
                Read <ExternalLink className="h-3.5 w-3.5" />
              </span>
            </CardFooter>
          </CardBody>
        </Card>
      </Link>
    </motion.div>
  );
}
