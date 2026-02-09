"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, Section, Card } from '@/components/ui';
import { typography, landingCard } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { X, AlertCircle, BookOpen } from 'lucide-react';

export default function AudienceSection() {
  return (
    <Section>
      <AnimatedSection className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn(typography.h2, "mb-4")}>Built for people doing the work of 10.</h2>
            <p className={cn(typography.bodyLarge, "text-text-secondary max-w-3xl mx-auto")}>
              You don't have time to learn another tool.
            </p>
          </div>

          <div className="mb-16">
            <h3 className={cn(typography.h3, "text-center mb-12 text-text-primary")}>You've felt this:</h3>
            
            <div className="space-y-6 max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card variant="glassSolid" hover noGlow className={landingCard.pain}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-main/10 rounded-xl flex-shrink-0">
                      <AlertCircle className="w-7 h-7 text-primary-main" />
                    </div>
                    <p className={cn(typography.bodyLarge, "text-text-primary flex-1 text-lg")}>
                      You know AI could help. You just can't make it stick.
                    </p>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card variant="glassSolid" hover noGlow className={landingCard.pain}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-main/10 rounded-xl flex-shrink-0">
                      <BookOpen className="w-7 h-7 text-primary-main" />
                    </div>
                    <p className={cn(typography.bodyLarge, "text-text-primary flex-1 text-lg")}>
                      You've tried the tutorials. You're still copying between tabs.
                    </p>
                  </div>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card variant="glassSolid" hover noGlow className={landingCard.pain}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-main/10 rounded-xl flex-shrink-0">
                      <X className="w-7 h-7 text-primary-main" />
                    </div>
                    <p className={cn(typography.bodyLarge, "text-text-primary flex-1 text-lg")}>
                      You don't need another tool to learn. You need help that just works.
                    </p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card variant="glass" className={cn(landingCard.cta, landingCard.ctaFlowdropHover, "inline-block")}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                <div className="relative z-10">
                  <p className={cn(typography.bodyLarge, "font-semibold text-primary-light group-hover:text-primary-main transition-colors duration-300")}>
                    That's why we built Flowdrop
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
      </AnimatedSection>
    </Section>
  );
}
