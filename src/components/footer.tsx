import { Separator } from "@/components/ui/separator";
import { TextHover } from "@/components/ui/text-hover-container";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="px-6 pb-8 pt-4">
      <div className="mx-auto max-w-5xl">
        <Separator className="mb-8" />
        <TextHover />
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Saumya Jha. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground flex  justify-center items-center gap-x-1">
            Built with{" "}
            <Heart className="w-5 h-5 text-red-500 fill-red-500 animate-pulse" />{" "}
            using Next.js & shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
