"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle, AnimatedSection, SectionHeader, Section } from '@/components/ui';
import { Brain, MessageSquare, Moon } from 'lucide-react';
import { typography } from '@/lib/styles';
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
              <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-0">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                      <Brain className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4 text-center">Your apps. One brain.</CardTitle>
                  <p className={cn(typography.body, "text-center")}>Everything you use, connected. Your AI sees your email, your calendar, your documents, your socials. It understands your world.</p>
                </CardContent>
              </Card>

              <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-0">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                      <MessageSquare className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4 text-center">Say it. It's built.</CardTitle>
                  <p className={cn(typography.body, "text-center")}>No learning curve. No technical skills. Describe what you need like you'd tell a friend. Watch it come to life.</p>
                </CardContent>
              </Card>

              <Card variant="glass" hover className="p-6 border-primary-main/20 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-primary-main/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative h-0">
                  <div className="absolute top-2 right-2 w-2 h-2 bg-primary-main/60 rounded-full group-hover:bg-primary-main group-hover:scale-125 transition-all duration-300" />
                </div>
                <CardContent className="pt-4">
                  <div className="flex justify-center mb-6">
                    <div className="p-4 bg-primary-main/20 rounded-4xl">
                      <Moon className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4 text-center">Works while you live.</CardTitle>
                  <p className={cn(typography.body, "text-center")}>Your AI doesn't clock out. It handles the busywork at 2 AM so your morning starts with progress, not catch-up.</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto">
            <Card variant="glass" className="p-8 border-primary-main/30 bg-gradient-to-r from-primary-main/10 to-purple-700/10 shadow-[0_4px_24px_0_rgba(20,20,40,0.18)] relative overflow-hidden group hover:shadow-[0_8px_32px_0_rgba(139,92,246,0.15)] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 rounded-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-main/5 via-transparent to-purple-700/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <div className="relative z-10">
                <p className={cn(typography.bodyLarge, "font-semibold text-primary-light group-hover:text-primary-main transition-colors duration-300 italic")}>You've always known AI could help you. Now it actually does.</p>
              </div>
            </Card>
          </div>
        </AnimatedSection>
    </Section>
  );
}
