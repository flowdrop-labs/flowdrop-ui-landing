"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Section, AnimatedSection, SectionHeader, CTAButton, Button } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { useAnalytics } from '@/lib/usePostHog';

interface VideoSectionProps {
  videoId: string;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function VideoSection({ 
  videoId, 
  title = "See Flowdrop in Action", 
  subtitle = "Watch how easy it is to build powerful automations",
  className 
}: VideoSectionProps) {
  const { track } = useAnalytics();

  return (
    <Section className={cn("py-12 lg:py-20", className)}>
      <AnimatedSection className="max-w-6xl mx-auto">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          align="center"
          level="h2"
          className="mb-12"
          subtitleClassName={cn(typography.bodyLarge, 'text-text-secondary')}
        />

        <div className="relative group">
          {/* Video Container */}
          <div className="relative aspect-video w-full max-w-4xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-gradient-to-br from-primary-main/10 to-purple-700/10 border border-primary-main/20">
            {/* YouTube Embed */}
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1&showinfo=0&enablejsapi=1`}
              title={title}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
            
            {/* Overlay for hover effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-primary-main/20 rounded-full blur-sm group-hover:bg-primary-main/30 transition-colors duration-300" />
          <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-500/20 rounded-full blur-sm group-hover:bg-purple-500/30 transition-colors duration-300" />
        </div>

        {/* Call-to-action below video */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-8 flex flex-col items-center gap-4"
        >
          <CTAButton
            onClick={() => {
              track.buttonClick('Build your first workflow', 'video-section');
              window.location.href = 'https://app.flowdrop.ai/';
            }}
            className="max-w-[300px]"
          >
            Build your first workflow
          </CTAButton>
          <Button
            variant="outline"
            size="sm"
            className="text-text-secondary border-white/20 hover:border-white/30"
            onClick={() => {
              track.buttonClick('Browse docs', 'video-section');
              window.location.href = '/docs';
            }}
          >
            Browse docs
          </Button>
          <p className={cn(typography.body, "text-text-secondary max-w-2xl mx-auto text-sm")}>
            Get started in minutes. No credit card required.
          </p>
        </motion.div>
      </AnimatedSection>
    </Section>
  );
}
