import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, Button } from '@/components/ui';
import { cn } from '@/lib/utils';
import { typography } from '@/lib/styles';
import { Star } from 'lucide-react';

type IconProps = { className?: string };

type PlanCardProps = {
  name: string;
  description: string;
  price: string;
  period: string;
  IconComponent: React.ComponentType<IconProps>;
  features: string[];
  ctaLabel: string;
  onCta: () => void;
  highlight?: boolean;
  hovered?: boolean;
  loading?: boolean;
  disabled?: boolean;
  prevPlanName?: string;
  discount?: {
    originalPrice: string;
    discountAmount: string;
    savingsText: string;
  };
};

export default function PlanCard({
  name,
  description,
  price,
  period,
  IconComponent,
  features,
  ctaLabel,
  onCta,
  highlight = false,
  hovered = false,
  loading = false,
  disabled = false,
  prevPlanName,
  discount,
}: PlanCardProps) {
  const hasDiscount = !!discount;
  
  return (
    <Card 
      variant={highlight ? 'glass' : 'default'}
      hover={true}
      className={cn(
        'h-full relative transition-all duration-500 ease-out overflow-visible',
        highlight && 'border-primary-main/30 bg-gradient-to-br from-primary-main/10 via-primary-main/5 to-purple-700/10 shadow-2xl shadow-primary-main/20',
        hasDiscount && 'border-orange-500/40 bg-gradient-to-br from-orange-500/10 via-orange-500/5 to-orange-600/10 shadow-2xl shadow-orange-500/20',
        hovered && !hasDiscount && 'border-primary-main/50 bg-gradient-to-br from-primary-main/15 via-primary-main/8 to-purple-700/15 shadow-2xl shadow-primary-main/30',
        hovered && hasDiscount && 'border-orange-500/60 bg-gradient-to-br from-orange-500/15 via-orange-500/8 to-orange-600/15 shadow-2xl shadow-orange-500/30'
      )}
    >
      {hasDiscount && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full px-4 py-1.5 shadow-lg flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 text-white fill-white" />
            <span className="text-xs font-bold text-white">{discount.discountAmount}</span>
          </div>
        </div>
      )}

      <CardHeader>
        <div className="flex items-center space-x-3 mb-2">
          <IconComponent className={cn('w-6 h-6', hasDiscount ? 'text-orange-500' : 'text-primary-main')} />
          <CardTitle className="text-2xl">{name}</CardTitle>
        </div>
        <CardDescription>{description}</CardDescription>
        {prevPlanName && (
          <p className="text-sm text-text-muted mt-1">Includes all features from {prevPlanName}</p>
        )}
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center">
          {hasDiscount ? (
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <span className="text-lg text-text-muted line-through">{discount.originalPrice}</span>
                <span className={cn('text-4xl font-bold', hasDiscount ? 'text-orange-500' : 'text-white')}>{price}</span>
                <span className="text-text-muted ml-1">{period}</span>
              </div>
              <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-lg px-3 py-1.5 inline-block">
                <span className="text-sm font-semibold text-yellow-400">{discount.savingsText}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-baseline justify-center">
              <span className="text-4xl font-bold">{price}</span>
              <span className="text-text-muted ml-1">{period}</span>
            </div>
          )}
        </div>

        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <span className={typography.bodySmall}>{feature}</span>
            </li>
          ))}
        </ul>

        <div className="pt-4">
          <Button
            variant="primary"
            size="lg"
            className={cn(
              'w-full text-white font-semibold btn-hover-ready rounded-full',
              hasDiscount && 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
              hovered && !hasDiscount && 'btn-liquid ring-white-glow',
              hovered && hasDiscount && 'ring-orange-400/50 shadow-lg shadow-orange-500/30'
            )}
            onClick={onCta}
            loading={loading}
            disabled={disabled}
          >
            {loading ? 'Redirecting...' : ctaLabel}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}








