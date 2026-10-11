import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { Backdrop } from "@/components/backdrop";
import { Highlight } from "@/components/ui/highlight";
import About from "@/components/about";
import Projects from "@/components/projects";
import Experiences from "@/components/experiences";
import BlogComingSoon from "@/components/blog-coming-soon";
import Books from "@/components/books";
import Contact from "@/components/contact";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Experiences", href: "#experiences" },
  { label: "Blog", href: "#blog" },
  { label: "Books", href: "#books" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const FOOTER_SECTIONS = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#projects" },
      { label: "Experiences", href: "#experiences" },
      { label: "Blog", href: "#blog" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Books", href: "#books" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
  },
  {
    title: "Social",
    wide: true,
    links: [
      { label: "GitHub", href: "https://github.com/saumyaJha7", external: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jhasaumya/", external: true },
      { label: "X", href: "https://x.com/SaumyaJ92279765", external: true },
      { label: "Email", href: "mailto:saumyajha.error@gmail.com", external: true },
    ],
  },
];

function SiteLogo() {
  return (
    <a href="#home" aria-label="Saumya Jha home" className="inline-flex items-center gap-3">
      <span className="font-brand text-xl font-medium tracking-tight text-foreground">
        Saumya Jha
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <div className="relative isolate flex min-h-full flex-col overflow-x-clip">
      <Backdrop />
      <Navbar logo={<SiteLogo />} layout="menu" links={NAV_LINKS} />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col p-6 sm:p-12">
        <div id="home" className="flex min-h-[80vh] items-center py-12">
          <Hero
            badge="Open to opportunities"
            title="Designing powerful backend systems"
            primary={{ label: "View projects", href: "#projects" }}
            secondary={{ label: "Contact me", href: "#contact" }}
          >
            <>
              Shipping <Highlight>scalable and maintainable codebases</Highlight> with
              robust APIs, GenAI experiments, and production ready DevOps workflows.
            </>
          </Hero>
        </div>
        <Projects />
        <Experiences />
        <BlogComingSoon />
        <Books />
        <About />
        <Contact />
      </main>
      <Footer
        logo={<SiteLogo />}
        tagline="Full stack developer building reliable systems"
        owner="Saumya Jha"
        sections={FOOTER_SECTIONS}
      />
    </div>
  );
}
