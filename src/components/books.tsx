"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardBody, CardTitle, CardText } from "@/components/ui/card";
import { SectionHead } from "@/components/section-head";
import { Highlight } from "@/components/ui/highlight";

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
    category: "Self improvement",
    description:
      "A practical guide to clear thinking, handling rejection, and building an independent perspective.",
    quote: "Admire. Never follow.",
    coverUrl: "/books/RBE.webp",
  },
  {
    title: "Fear",
    author: "Osho",
    category: "Psychology",
    description:
      "A look at the roots of fear and why accepting vulnerability helps you grow.",
    quote: "The unknown is the doorway to growth.",
    coverUrl: "/books/fear.jpg",
  },
  {
    title: "The Almanack of Naval Ravikant",
    author: "Eric Jorgenson",
    category: "Wisdom",
    description:
      "Collected ideas on wealth, decisions, and treating happiness as a skill you practice.",
    quote: "Escape competition through authenticity.",
    coverUrl: "/books/almanack.webp",
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "History",
    description:
      "How shared stories and revolutions shaped cooperation at a global scale.",
    quote: "History widens our horizons.",
    coverUrl: "/books/sapiens.webp",
  },
];

const BookCard = ({ book }: { book: Book }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card className="h-full">
      <CardBody className="flex-row items-stretch gap-5 p-4 sm:flex">
        <div className="flex shrink-0 flex-col items-center justify-center px-2 py-1 select-none">
          <div
            className="relative flex items-center justify-center"
            style={{ perspective: "1000px", width: "115px", height: "170px" }}
          >
            <div
              className="relative h-full w-full"
              style={{
                transformStyle: "preserve-3d",
                transform: isHovered ? "scale(1.02)" : "none",
                transition: "transform 0.3s ease",
              }}
            >
              <div
                className="absolute rounded-r border border-neutral-300 bg-white shadow-sm"
                style={{ inset: "3px 3px 3px 5px", transform: "translateZ(-2px)" }}
              />
              <div
                className="absolute rounded-r border border-neutral-300 bg-neutral-50 shadow-sm"
                style={{ inset: "3px 5px 3px 5px", transform: "translateZ(-4px)" }}
              />
              <div
                className="absolute inset-0 rounded-r border border-neutral-800 bg-neutral-900 shadow-md"
                style={{ transform: "translateZ(-7px)" }}
              />
              <div
                className="absolute inset-0 origin-left overflow-hidden rounded-r shadow-xl"
                style={{
                  transformStyle: "preserve-3d",
                  transform: isHovered ? "rotateY(-30deg)" : "rotateY(0deg)",
                  transition: "transform 0.3s ease",
                }}
              >
                <Image
                  src={book.coverUrl}
                  alt={book.title}
                  fill
                  className="rounded-r object-cover"
                  sizes="115px"
                />
                <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-gradient-to-r from-black/40 to-transparent" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-1 flex-col justify-between space-y-3"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div>
            <span className="text-[11px] font-medium tracking-wider text-muted-foreground uppercase">
              {book.category}
            </span>
            <CardTitle className="mt-1">{book.title}</CardTitle>
            <p className="text-[11px] font-medium text-muted-foreground">by {book.author}</p>
            <CardText className="mt-2">{book.description}</CardText>
          </div>
          <div className="mt-2 border-l-2 border-orange-100 pl-3.5 dark:border-orange-900/40">
            <p className="text-xs text-muted-foreground italic leading-relaxed">
              &ldquo;{book.quote}&rdquo;
            </p>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default function Books() {
  return (
    <section id="books" className="scroll-mt-24 py-16 sm:py-20">
      <SectionHead title="Books I recommend">
        <>
          Reading that shaped <Highlight>how I think and build</Highlight>, kept
          short and practical.
        </>
      </SectionHead>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {booksData.map((book, i) => (
          <motion.div
            key={book.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <BookCard book={book} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
