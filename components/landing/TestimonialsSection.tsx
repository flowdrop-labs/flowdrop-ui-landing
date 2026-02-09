"use client"

import React from 'react';
import { AnimatedSection, SectionHeader, Section } from '@/components/ui';
import { testimonials } from '@/content/landing.config';
import { cn } from '@/lib/utils';

const DURATION = 40; // seconds for full loop

function TestimonialCard({ t, className }: { t: (typeof testimonials)[0]; className?: string }) {
  return (
    <div
      className={cn(
        "flex-shrink-0 w-[320px] sm:w-[380px] rounded-4xl p-5 sm:p-6",
        "bg-gradient-to-br from-neutral-800/60 to-neutral-700/40 backdrop-blur-sm",
        "border border-white/10 hover:border-primary-main/20",
        "transition-colors duration-300",
        className
      )}
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-white font-semibold text-sm bg-gradient-to-br from-gray-600 to-gray-700 border border-gray-500/30 flex-shrink-0">
          {t.initials}
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-white text-sm truncate">{t.name}</div>
          <div className="text-xs text-gray-400 truncate">{t.role}</div>
        </div>
      </div>
      <blockquote className="text-gray-300 text-sm sm:text-base leading-relaxed line-clamp-3">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
    </div>
  );
}

export default function TestimonialsSection() {
  const items = [...testimonials, ...testimonials];

  return (
    <Section borderedTop containerClassName="max-w-none px-0">
      <AnimatedSection className="overflow-hidden">
          <div className="container mx-auto px-6 max-w-7xl">
            <SectionHeader
              title="What Our Users Say"
              subtitle="Real feedback from builders who are already cranking with Flowdrop"
              align="center"
              level="h2"
              className="max-w-4xl mx-auto"
            />
          </div>

          <div className="relative mt-12 w-full overflow-hidden">
            {/* Gradient masks for clean fade edges */}
            <div
              className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10"
              aria-hidden="true"
            />

            <div
              className="marquee-track marquee-pause-on-hover flex gap-4 sm:gap-6 w-max"
              style={{ ['--marquee-duration' as string]: `${DURATION}s` }}
            >
              {items.map((t, idx) => (
                <TestimonialCard key={idx} t={t} />
              ))}
            </div>
          </div>
        </AnimatedSection>
    </Section>
  );
}
