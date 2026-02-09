"use client"

import React from 'react';
import { Section, AnimatedSection } from '@/components/ui';
import { useCaseRows } from '@/content/landing.config';
import type { UseCaseItem } from '@/content/landing.config';
import { SEO } from '@/lib/seo-constants';
import {
  Mail,
  MessageSquareReply,
  Languages,
  Inbox,
  Headphones,
  FileText,
  Bell,
  CalendarPlus,
  AlarmClock,
  CalendarDays,
  ClipboardList,
  Globe,
  Calculator,
  Receipt,
  Shield,
  CreditCard,
  CircleDollarSign,
  Tag,
  Search,
  Percent,
  TrendingDown,
  GitCompare,
  Handshake,
  FilePenLine,
  Telescope,
  Users,
  FileSpreadsheet,
  Presentation,
  Plane,
  ChefHat,
  Share2,
  Newspaper,
  Target,
  Send,
  Briefcase,
  UsersRound,
  ChartColumn,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Mail,
  MessageSquareReply,
  Languages,
  Inbox,
  Headphones,
  FileText,
  Bell,
  CalendarPlus,
  AlarmClock,
  CalendarDays,
  ClipboardList,
  Globe,
  Calculator,
  Receipt,
  Shield,
  CreditCard,
  CircleDollarSign,
  Tag,
  Search,
  Percent,
  TrendingDown,
  GitCompare,
  Handshake,
  FilePenLine,
  Telescope,
  Users,
  FileSpreadsheet,
  Presentation,
  Plane,
  ChefHat,
  Share2,
  Newspaper,
  Target,
  Send,
  Briefcase,
  UsersRound,
  ChartColumn,
};

const pillStyles: Record<UseCaseItem['style'], string> = {
  default: 'border border-white/10',
  outline: 'border-2 border-white/20 bg-white/[0.02]',
  dark: 'bg-zinc-800/60 border border-zinc-600/40',
  radial: 'bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(255,255,255,0.06),transparent)] border border-white/10',
  darker: 'bg-zinc-900/80 border border-white/5',
  dashed: 'border-2 border-dashed border-zinc-500/50',
};

function UseCasePill({ item }: { item: UseCaseItem }) {
  const Icon = iconMap[item.icon];
  const styleClass = pillStyles[item.style] || pillStyles.default;

  return (
    <span className={`inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-medium shrink-0 ${styleClass} ${item.style === 'dashed' ? 'text-zinc-400' : 'text-zinc-300'}`}>
      {Icon && <Icon className="size-4 shrink-0 text-zinc-400" aria-hidden="true" />}
      {item.label}
    </span>
  );
}

function MarqueeRow({ items, direction, copies = 4 }: { items: UseCaseItem[]; direction: 'left' | 'right'; copies?: number }) {
  const allItems = Array.from({ length: copies }, () => items).flat();

  return (
    <div
      className="group flex overflow-hidden p-2 flex-row"
      style={{
        '--duration': '45s',
        '--gap': '0.5rem',
      } as React.CSSProperties}
    >
      <div
        className={`flex shrink-0 justify-around gap-[var(--gap)] sm:gap-3 animate-usecase-marquee flex-row ${direction === 'left' ? 'reverse' : ''}`}
        style={{ '--marquee-copies': copies } as React.CSSProperties}
      >
        {allItems.map((item, idx) => (
          <UseCasePill key={`${item.label}-${idx}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function UseCaseMarqueeSection() {
  return (
    <Section borderedTop>
      <AnimatedSection className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16 flex flex-col gap-8 sm:gap-12">
        {/* Header */}
        <div className="flex flex-col items-center justify-center gap-1 sm:gap-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-white text-center text-balance">
            What can {SEO.siteName} do for you?
          </h2>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-text-muted text-center text-balance">
            One platform, thousands of use cases
          </h2>
        </div>

        {/* Marquee rows */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-xl gap-2 min-w-0">
          {useCaseRows.map((row, idx) => (
            <MarqueeRow
              key={idx}
              items={row.items}
              direction={row.direction}
            />
          ))}

          {/* Edge fade overlays */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 md:w-24 bg-gradient-to-r from-background/90 via-background/60 to-transparent z-10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 md:w-24 bg-gradient-to-l from-background/90 via-background/60 to-transparent z-10"
            aria-hidden="true"
          />
        </div>

        {/* Bottom note */}
        <span className="text-sm sm:text-base text-zinc-400 text-pretty text-center italic">
          PS. Your AI agents can learn any task you describe in plain English
        </span>
      </AnimatedSection>
    </Section>
  );
}
