import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";
import BlogComingSoon from "@/components/blog-coming-soon";
import Books from "@/components/books";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Projects />
        <Experiences />
        <BlogComingSoon />
        <Books />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
