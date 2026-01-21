"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection, Section, Card } from '@/components/ui';
import { typography } from '@/lib/styles';
import { cn } from '@/lib/utils';
import { X, AlertCircle, BookOpen } from 'lucide-react';

export default function AudienceSection() {
  return (
    <Section>
      <AnimatedSection className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={cn(typography.h2, "mb-6")}>Built for people who'd rather do the work than learn the tool.</h2>
            <p className={cn(typography.bodyLarge, "text-text-secondary max-w-3xl mx-auto mb-6")}>
              You're not a developer. You're not trying to become one. You just want AI that works, connected to your apps, running while you focus on what matters.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              {['Founders', 'Creators', 'Marketers', 'Agencies', 'Teams of one doing the work of ten'].map((role, idx) => (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="px-4 py-2 bg-primary-main/10 border border-primary-main/20 rounded-full text-sm font-semibold text-primary-main"
                >
                  {role}
                </motion.span>
              ))}
            </div>
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
                <Card variant="glass" className="p-6 border-primary-main/10 hover:border-primary-main/30 transition-all duration-300">
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
                <Card variant="glass" className="p-6 border-primary-main/10 hover:border-primary-main/30 transition-all duration-300">
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
                <Card variant="glass" className="p-6 border-primary-main/10 hover:border-primary-main/30 transition-all duration-300">
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
              <Card variant="glass" className="p-8 border-primary-main/30 bg-gradient-to-r from-primary-main/10 to-purple-700/10 inline-block">
                <p className={cn(typography.bodyLarge, "font-semibold text-primary-main")}>
                  That's why we built Flowdrop
                </p>
              </Card>
            </motion.div>
          </div>
      </AnimatedSection>
    </Section>
  );
}
