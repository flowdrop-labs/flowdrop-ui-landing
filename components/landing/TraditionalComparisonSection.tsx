"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Section, AnimatedSection } from '@/components/ui';
import { traditionalComparison } from '@/content/landing.config';

function GradientDivider() {
  return (
    <div className="w-full max-w-full flex flex-wrap items-center justify-center gap-2 sm:gap-4 min-h-[40px] sm:min-h-[46px] px-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="272"
        height="2"
        viewBox="0 0 272 2"
        fill="none"
        className="shrink min-w-0 flex-1 max-w-[120px] sm:max-w-[180px] md:max-w-[272px] h-0.5"
        aria-hidden="true"
      >
        <path d="M272 1L0.5 0.999976" stroke="url(#gradient_left)" />
        <defs>
          <linearGradient id="gradient_left" x1="272.5" y1="1.49831" x2="0.500004" y2="0.998287" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c084fc" />
            <stop offset="0.165" stopColor="#6D28D9" />
            <stop offset="1" stopColor="#1A1A1D" />
          </linearGradient>
        </defs>
      </svg>
      <span className="mx-1 sm:mx-4 shrink-0 text-xs sm:text-sm text-zinc-400">
        {traditionalComparison.sectionLabel}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="272"
        height="2"
        viewBox="0 0 272 2"
        fill="none"
        className="shrink min-w-0 flex-1 max-w-[120px] sm:max-w-[180px] md:max-w-[272px] h-0.5"
        aria-hidden="true"
      >
        <path d="M0 1L271.5 1" stroke="url(#gradient_right)" />
        <defs>
          <linearGradient id="gradient_right" x1="-0.5" y1="0.501689" x2="271.5" y2="1.00169" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#c084fc" />
            <stop offset="0.165" stopColor="#6D28D9" />
            <stop offset="1" stopColor="#1A1A1D" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function parseCallout(text: string) {
  // Replaces <text> with highlighted spans
  const parts = text.split(/(<[^>]+>)/g);
  return parts.map((part, i) => {
    if (part.startsWith('<') && part.endsWith('>')) {
      const inner = part.slice(1, -1);
      return (
        <span key={i} className="bg-red-500/10 text-red-500 px-1 py-0.5 rounded-md">
          {inner}
        </span>
      );
    }
    return part;
  });
}

export default function TraditionalComparisonSection() {
  const data = traditionalComparison;

  return (
    <Section borderedTop>
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 py-12 sm:py-20 md:py-32 flex flex-col gap-3">
        {/* Gradient divider */}
        <GradientDivider />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center text-balance mb-6 sm:mb-10"
        >
          {data.headline}
        </motion.h2>

        {/* Two-column comparison */}
        <div className="flex flex-col md:flex-row items-stretch min-w-0 mt-4 sm:mt-7 md:gap-0">
          {/* Traditional column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex-1 md:pr-10 min-w-0 flex flex-col gap-2 pb-6 md:pb-0"
          >
            <p className="text-base sm:text-lg font-medium text-zinc-400 italic mb-1">
              {data.traditionalLabel}
            </p>
            <ul className="flex flex-col gap-2 sm:gap-3 text-pretty">
              {data.traditionalSteps.map((step, idx) => (
                <li key={idx} className="flex justify-between gap-2 text-sm sm:text-base text-zinc-400">
                  <span className="min-w-0">{step.label}</span>
                  <span className="shrink-0 tabular-nums">
                    {step.time} {step.unit}
                  </span>
                </li>
              ))}
            </ul>

            {/* Total */}
            <p className="mt-3 pt-3 border-t-2 border-white/20 flex justify-between text-base sm:text-lg font-medium text-white">
              <span className="italic">Total</span>
              <span className="tabular-nums font-medium text-xl">
                {data.totalTime} {data.totalUnit}
              </span>
            </p>

            {/* Non-technical callout */}
            <p className="mt-3 text-sm font-medium text-zinc-300 text-pretty italic leading-relaxed">
              {parseCallout(data.nonTechnicalCallout)}
            </p>
          </motion.div>

          {/* Divider */}
          <div
            className="w-full md:w-[2px] h-[2px] md:h-auto md:min-h-px shrink-0 bg-white/10"
            aria-hidden="true"
          />

          {/* Flowdrop column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex-1 md:pl-10 min-w-0 flex flex-col justify-center pt-6 md:pt-0 gap-3"
          >
            <p className="text-base sm:text-lg font-medium text-zinc-400 italic">
              {data.productLabel}
            </p>
            <p className="text-2xl sm:text-4xl font-semibold text-white tabular-nums">
              {data.productTime}
            </p>
            <p className="text-sm sm:text-base text-zinc-400 text-pretty leading-relaxed">
              {data.productDescription}
            </p>
            <p className="text-sm sm:text-base text-zinc-400 text-pretty leading-relaxed">
              {data.productSubtext}
            </p>
          </motion.div>
        </div>
      </AnimatedSection>
    </Section>
  );
}
