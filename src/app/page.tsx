import SiteHero from "@/components/site-hero";
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";
import BlogComingSoon from "@/components/blog-coming-soon";
import Books from "@/components/books";
import About from "@/components/about";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <>
      <SiteHero />
      <Projects limit={4} />
      <Experiences />
      <BlogComingSoon limit={2} />
      <Books />
      <About />
      <Contact />
    </>
  );
}
