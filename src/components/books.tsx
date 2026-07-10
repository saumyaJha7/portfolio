"use client";

import React, { useState } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Book {
  title: string;
  author: string;
  category: string;
  description: string;
  quote: string;
  coverUrl: string;
}

const booksData: Book[] = [
  {
    title: "The Rudest Book Ever",
    author: "Swetabh Gangwar",
    category: "Self-Improvement & Philosophy",
    description:
      "A no-nonsense, practical guide to freeing your mind from bullshit. It teaches you how to think instead of what to think, how to deal with rejections, and how to build a stable, independent perspective.",
    quote: "Admire. Never Follow!",
    coverUrl: "/books/RBE.webp",
  },
  {
    title: "Fear: Understanding and Accepting Insecurities of life",
    author: "Osho",
    category: "Spirituality & Psychology",
    description:
      "A profound examination of the roots of fear and insecurity in life. Osho guides readers to see fear as an opportunity to grow, urging acceptance of vulnerability rather than resistance.",
    quote: "The unknown is not your enemy; it is the doorway to growth.",
    coverUrl: "/books/fear.jpg",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    category: "Wealth, Health & Wisdom",
    description:
      "A curated collection of Naval Ravikant's wisdom on building wealth, learning decision-making, and mastering the skill of happiness. A guide to understanding that happiness is a choice you practice.",
    quote:
      "Escape competition through authenticity.",
    coverUrl: "/books/almanack.webp",
  },
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    category: "History & Anthropology",
    description:
      "An intellectual journey exploring how cognitive, agricultural, and scientific revolutions shaped human societies. It details how shared myths enable large-scale cooperation.",
    quote:
      "We study history not to predict the future, but to widen our horizons.",
    coverUrl: "/books/sapiens.webp",
  },
  
];

const BookCard = ({ book }: { book: Book }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col sm:flex-row items-center sm:items-stretch gap-5 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:border-foreground/15 hover:shadow-md hover:shadow-foreground/[0.01]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3D Book Illustration Container */}
      <div className="flex flex-col items-center justify-center px-2 py-1 select-none">
        <div
          className="relative flex items-center justify-center"
          style={{
            perspective: "1000px",
            width: "115px",
            height: "170px",
          }}
        >
          {/* Book Wrapper (No tilt, simple scale up slightly) */}
          <div
            className="relative w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transform: isHovered
                ? "rotateY(0deg) rotateX(0deg) scale(1.02)"
                : "rotateY(0deg) rotateX(0deg)",
              transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
          >
            {/* Pages - Layer 1 */}
            <div
              className="absolute bg-white border border-neutral-300 rounded-r shadow-sm"
              style={{
                inset: "3px 3px 3px 5px",
                transform: "translateZ(-2px)",
                transformStyle: "preserve-3d",
              }}
            />
            {/* Pages - Layer 2 */}
            <div
              className="absolute bg-neutral-50 border border-neutral-300 rounded-r shadow-sm"
              style={{
                inset: "3px 5px 3px 5px",
                transform: "translateZ(-4px)",
                transformStyle: "preserve-3d",
              }}
            />
            {/* Pages - Layer 3 (Page lines effect) */}
            <div
              className="absolute border-y border-r border-neutral-200 rounded-r shadow-sm"
              style={{
                inset: "3px 6px 3px 5px",
                transform: "translateZ(-5px)",
                transformStyle: "preserve-3d",
                background:
                  "repeating-linear-gradient(to bottom, #ffffff, #ffffff 2px, #f1f1f1 2px, #f1f1f1 4px)",
              }}
            />

            {/* Back Cover */}
            <div
              className="absolute inset-0 bg-neutral-900 border border-neutral-800 rounded-r shadow-md"
              style={{
                transform: "translateZ(-7px)",
                transformStyle: "preserve-3d",
              }}
            />

            {/* Front Cover (Opens straight outward) */}
            <div
              className="absolute inset-0 rounded-r shadow-xl overflow-hidden origin-left"
              style={{
                transformStyle: "preserve-3d",
                transform: isHovered ? "rotateY(-30deg)" : "rotateY(0deg)",
                transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <Image
                src={book.coverUrl}
                alt={book.title}
                fill
                className="object-cover rounded-r"
                sizes="115px"
                priority
              />
              {/* Cover Spine Shadow & Highlights */}
              <div className="absolute left-0 top-0 bottom-0 w-2.5 bg-gradient-to-r from-black/40 to-transparent" />
              <div className="absolute left-0.5 top-0 bottom-0 w-[1px] bg-white/20" />
            </div>
          </div>
        </div>
      </div>

      {/* Book Information Section */}
      <div className="flex-1 flex flex-col justify-between space-y-3">
        <div>
          <div className="flex flex-wrap items-center">
            <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
              {book.category}
            </span>
          </div>
          <h3 className="mt-0.5 text-base font-bold tracking-tight text-foreground">
            {book.title}
          </h3>
          <p className="text-[11px] font-medium text-muted-foreground">
            by {book.author}
          </p>

          <p className="mt-2 text-xs text-muted-foreground/80 leading-relaxed">
            {book.description}
          </p>
        </div>

        {/* Favorite Quote Block */}
        <div className="relative border-l-2 border-primary/50 pl-3.5 py-1.5 mt-2 bg-gradient-to-r from-primary/[0.04] to-transparent rounded-r-md">
          <p className="text-[10.5px] italic text-foreground/80 leading-relaxed">
            &ldquo;{book.quote}&rdquo;
          </p>
        </div>
      </div>
    </div>
  );
};

export default function Books() {
  return (
    <section id="books" className="py-24 px-6 bg-card/25 border-y border-border/40">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <div className="flex flex-col">
          <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
            Library
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl flex items-center gap-2">
            Books I Recommend <BookOpen className="h-6 w-6 text-muted-foreground/80" />
          </h2>
          <Separator className="mt-6 w-12" />
        </div>

        {/* Book Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {booksData.map((book) => (
            <BookCard key={book.title} book={book} />
          ))}
        </div>
      </div>
    </section>
  );
}
