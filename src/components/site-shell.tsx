import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Backdrop } from "@/components/backdrop";
import { FooterBottom } from "@/components/footer-bottom";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Experiences", href: "/#experiences" },
  { label: "Blog", href: "/blog" },
  { label: "Books", href: "/#books" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

const FOOTER_SECTIONS = [
  {
    title: "Navigate",
    links: [
      { label: "Home", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Experiences", href: "/#experiences" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "More",
    links: [
      { label: "Books", href: "/#books" },
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "Social",
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
    <a href="/" aria-label="Saumya Jha home" className="inline-flex items-center gap-3">
      <span className="font-brand text-xl font-medium tracking-tight text-foreground">
        Saumya Jha
      </span>
    </a>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative isolate flex min-h-full flex-col overflow-x-clip">
      <Backdrop />
      <Navbar logo={<SiteLogo />} layout="menu" links={NAV_LINKS} />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col p-6 sm:p-12">
        {children}
      </main>
      <FooterBottom />
      <Footer
        logo={<SiteLogo />}
        tagline="Full stack developer building reliable systems"
        owner="Saumya Jha"
        sections={FOOTER_SECTIONS}
      />
    </div>
  );
}
