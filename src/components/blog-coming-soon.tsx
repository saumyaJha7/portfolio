"use client";

import { motion } from "framer-motion";
import { SectionHead } from "@/components/section-head";
import { Highlight } from "@/components/ui/highlight";
import { BlogCard } from "@/components/blog-card";

const blogs = [
  {
    id: "1",
    title: "How whatsapp works even without internet?",
    imageUrl: "/blog02Cover.png",
    articleUrl: "https://medium.com/@jhasaumya554/how-whatsapp-works-even-without-internet-eedd556f76a0",
  },
  {
    id: "2",
    title: "Why React is fast: understanding React internals",
    imageUrl: "/blog01Cover.png",
    articleUrl: "https://medium.com/@jhasaumya554/why-react-is-fast-understanding-react-internals-ee67e84f1f7a",
  },
];

export default function BlogComingSoon({ limit }: { limit?: number } = {}) {
  const visible = typeof limit === "number" ? blogs.slice(0, limit) : blogs;
  const isPreview = typeof limit === "number";
  return (
    <section id="blog" className="scroll-mt-24 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true }}
      >
        <SectionHead
          title="Thoughts and writing"
          action={isPreview ? { label: "View all", href: "/blog" } : undefined}
        >
          <>
            Short explainers on <Highlight>systems I find interesting</Highlight>,
            written for builders.
          </>
        </SectionHead>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
        {visible.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))}
      </div>
    </section>
  );
}
