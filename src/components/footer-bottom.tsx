import { TextHover } from "@/components/ui/text-hover-container";
import { Heart } from "lucide-react";

export function FooterBottom() {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-8 sm:px-12">
      <TextHover />
      <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Saumya Jha. All rights reserved.
        </p>
        <p className="flex items-center justify-center gap-x-1 text-xs text-muted-foreground">
          Built with{" "}
          <Heart className="h-5 w-5 animate-pulse fill-red-500 text-red-500" />{" "}
          using Next.js and shadcn/ui
        </p>
      </div>
    </div>
  );
}
