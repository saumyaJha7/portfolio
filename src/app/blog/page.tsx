import type { Metadata } from "next";
import BlogComingSoon from "@/components/blog-coming-soon";

export const metadata: Metadata = {
  title: "Blog: Saumya Jha",
  description: "Short explainers on systems I find interesting, written for builders.",
};

export default function BlogPage() {
  return <BlogComingSoon />;
}
