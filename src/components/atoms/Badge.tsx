import React from 'react';
import { cn } from '@/lib/utils';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'danger' | 'destructive' | 'info' | 'neutral';
    children: React.ReactNode;
}

const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(({ className, variant = 'neutral', children, ...props }, ref) => {
    const variants = {
        primary: 'bg-blue-100 text-blue-700 hover:bg-blue-100/80',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200',
        success: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-100/80',
        warning: 'bg-amber-100 text-amber-700 hover:bg-amber-100/80',
        error: 'bg-red-100 text-red-700 hover:bg-red-100/80',
        danger: 'bg-red-100 text-red-700 hover:bg-red-100/80',
        destructive: 'bg-red-100 text-red-700 hover:bg-red-100/80',
        info: 'bg-blue-100 text-blue-700 hover:bg-blue-100/80',
        neutral: 'bg-slate-100 text-slate-700 hover:bg-slate-100/80',
    };

    return (
        <span
            ref={ref}
            className={cn(
                "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-slate-950 focus:ring-offset-2",
                variants[variant] || variants.neutral,
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
});

Badge.displayName = 'Badge';

export { Badge };
