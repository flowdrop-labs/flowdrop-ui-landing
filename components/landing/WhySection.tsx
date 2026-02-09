"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardTitle, AnimatedSection, SectionHeader, Section } from '@/components/ui';
import { Lightbulb, MessageSquare, Heart } from 'lucide-react';
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
                      <Lightbulb className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4 text-center">You already know what to automate.</CardTitle>
                  <p className={cn(typography.body, "text-center")}>Describe it in plain English. Flowdrop turns it into live, working agents. No setup. No learning curve.</p>
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
                  <CardTitle className="mb-4 text-center">One conversation. That's it.</CardTitle>
                  <p className={cn(typography.body, "text-center")}>No triggers. No field mapping. No debugging. You talk. Your agent works.</p>
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
                      <Heart className="w-8 h-8 text-primary-main" />
                    </div>
                  </div>
                  <CardTitle className="mb-4 text-center">Built for the person who gave up.</CardTitle>
                  <p className={cn(typography.body, "text-center")}>You tried the tools. Watched the tutorials. Quit because it felt like coding. If you can describe it, you can automate it.</p>
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
