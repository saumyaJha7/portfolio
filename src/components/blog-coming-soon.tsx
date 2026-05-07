"use client";

import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { BlogCard } from "@/components/blog-card";

// Blog data - Update this array with your blog posts
const blogs = [
  {
    id: "1",
    title: "Why React is Fast: Understanding React Internals",
    imageUrl: "/blog01Cover.png",
    hashnodeUrl: "https://why-react-is-fast.hashnode.dev/why-react-is-fast-understanding-react-internals",
  },
];

export default function BlogComingSoon() {
  return (
    <section id="blog" className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-6xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Blog
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Thoughts & writing.
          </h2>
          <Separator className="mt-6 w-12" />
        </motion.div>

        {/* Blog grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <BlogCard
              key={blog.id}
              {...blog}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
