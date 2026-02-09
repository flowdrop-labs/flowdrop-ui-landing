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
