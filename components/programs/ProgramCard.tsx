"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Users } from "lucide-react";
import type { Program } from "@/lib/programs";

interface ProgramCardProps {
  program: Program;
  index?: number;
}

/**
 * Image-style card with gradient overlay, program name, duration, and arrow CTA.
 */
export default function ProgramCard({ program, index = 0 }: ProgramCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative rounded-xl overflow-hidden aspect-[3/4] cursor-pointer shadow-card"
      aria-label={program.title}
    >
      {/* Background — photo or gradient fallback */}
      {program.image ? (
        <Image
          src={program.image}
          alt={program.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div
          className={`absolute inset-0 bg-gradient-to-br ${program.gradient ?? "from-[#8B0000] to-[#4a0000]"} transition-transform duration-500 group-hover:scale-105`}
        />
      )}

      {/* Gradient overlay from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      {/* Year badge */}
      {program.year && (
        <div className="absolute top-3 right-3">
          <span className="bg-white/20 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full border border-white/30">
            {program.year}
          </span>
        </div>
      )}

      {/* Content at bottom */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-white font-bold text-base leading-tight mb-1.5">
          {program.title}
        </h3>

        {/* Meta row */}
        <div className="flex items-center gap-3 mb-3">
          <span className="flex items-center gap-1 text-white/70 text-xs">
            <Clock className="w-3 h-3" />
            {program.duration}
          </span>
          {program.seats && (
            <span className="flex items-center gap-1 text-white/70 text-xs">
              <Users className="w-3 h-3" />
              {program.seats} seats
            </span>
          )}
        </div>

        {/* CTA button */}
        <Link
          href="/apply"
          className="flex items-center justify-center gap-1.5 bg-white/10 backdrop-blur-sm hover:bg-white/25 
            border border-white/30 text-white text-xs font-semibold px-3 py-2 rounded-lg
            transition-all duration-200 w-full"
          tabIndex={0}
        >
          Apply Program
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
