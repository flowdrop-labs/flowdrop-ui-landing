"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, AnimatedSection, Section } from '@/components/ui';
import { Lightbulb, MessageSquare, Heart, MessageCircle, Cloud, Globe } from 'lucide-react';
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
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="h-full min-h-[280px]"
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4 flex-1 flex flex-col min-h-0">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <Lightbulb className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>You already know what to automate.</h3>
                    <p className={cn(typography.body, "text-center flex-1 min-h-0")}>Describe it in plain English. Flowdrop turns it into live, working agents. No setup. No learning curve.</p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="h-full min-h-[280px]"
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4 flex-1 flex flex-col min-h-0">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <MessageSquare className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>One conversation. That's it.</h3>
                    <p className={cn(typography.body, "text-center flex-1 min-h-0")}>No triggers. No field mapping. No debugging. You talk. Your agent works.</p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="h-full min-h-[280px]"
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4 flex-1 flex flex-col min-h-0">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <Heart className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>Built for the person who gave up.</h3>
                    <p className={cn(typography.body, "text-center flex-1 min-h-0")}>You tried the tools. Watched the tutorials. Quit because it felt like coding. If you can describe it, you can automate it.</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>

          <div className="mt-10">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.05 }}
                className="h-full min-h-[280px]"
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4 flex-1 flex flex-col min-h-0">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <MessageCircle className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>Chat Anywhere</h3>
                    <p className={cn(typography.body, "text-center flex-1 min-h-0")}>Talk to your agent on Slack, Discord, Telegram, or email. No app to download. Just message it wherever you already are.</p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="h-full min-h-[280px]"
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4 flex-1 flex flex-col min-h-0">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <Cloud className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>Runs in the Cloud</h3>
                    <p className={cn(typography.body, "text-center flex-1 min-h-0")}>No computers to leave on. No hardware to buy. No technical stuff to figure out. Your agent lives online and just works.</p>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="h-full min-h-[280px]"
              >
                <Card variant="glass" hover className={landingCard.feature}>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-4xl" />
                  <div className="relative h-0">
                    <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                  </div>
                  <div className="relative pt-4 flex-1 flex flex-col min-h-0">
                    <div className="flex justify-center mb-6">
                      <div className="p-4 bg-primary-main/20 rounded-4xl">
                        <Globe className="w-8 h-8 text-primary-main" />
                      </div>
                    </div>
                    <h3 className={cn("text-xl font-semibold leading-none tracking-tight text-text-primary mb-4 text-center")}>Browses the Web</h3>
                    <p className={cn(typography.body, "text-center flex-1 min-h-0")}>Your agent can visit websites, read pages, and grab info for you. Right out of the box. No setup needed.</p>
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
