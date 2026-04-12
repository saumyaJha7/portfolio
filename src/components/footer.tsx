import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4">
      <div className="mx-auto max-w-5xl">
        <Separator className="mb-8" />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Next.js & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
