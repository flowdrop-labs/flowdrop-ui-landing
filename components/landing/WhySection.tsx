"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, AnimatedSection, Section } from '@/components/ui';
import { Lightbulb, MessageSquare, Heart } from 'lucide-react';
import { typography, landingCard } from '@/lib/styles';
import { cn } from '@/lib/utils';

export default function WhySection() {
  return (
    <Section>
      <AnimatedSection className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={cn(typography.h2, "mb-6")}>Why Flowdrop?</h2>
            <p className="text-2xl md:text-3xl font-bold text-primary-main tracking-tight italic">
              Finally, help.
            </p>
          </div>

          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <Lightbulb className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>You already know what to automate.</h3>
                    <p className={cn(typography.body, "text-center")}>Describe it in plain English. Flowdrop turns it into live, working agents. No setup. No learning curve.</p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <MessageSquare className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>One conversation. That's it.</h3>
                    <p className={cn(typography.body, "text-center")}>No triggers. No field mapping. No debugging. You talk. Your agent works.</p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <Heart className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>Built for the person who gave up.</h3>
                    <p className={cn(typography.body, "text-center")}>You tried the tools. Watched the tutorials. Quit because it felt like coding. If you can describe it, you can automate it.</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card variant="glass" className={cn(landingCard.cta, landingCard.ctaWhyHover)}>
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                <div className="relative z-10">
                  <p className={cn(typography.bodyLarge, "font-semibold text-primary-light group-hover:text-primary-main transition-colors duration-300 italic")}>You've always known AI could help you. Now it actually does.</p>
                </div>
              </Card>
            </motion.div>
          </div>
        </AnimatedSection>
    </Section>
  );
}
