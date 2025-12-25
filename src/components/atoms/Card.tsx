import React from 'react';
import { cn } from '@/lib/utils';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    className?: string;
    children?: React.ReactNode;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(({ className, children, ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={cn(
                "rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
});

Card.displayName = 'Card';

export { Card };
