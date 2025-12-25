"use client";

import React from 'react';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    size?: 'sm' | 'md' | 'lg' | 'icon';
    isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    variant = 'primary',
    size = 'md',
    isLoading,
    disabled,
    children,
    whileTap = { scale: 0.95 },
    ...props
}, ref) => {
    const variants = {
        primary: 'bg-slate-900 text-white hover:bg-slate-800 shadow-sm',
        secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200',
        danger: 'bg-red-500 text-white hover:bg-red-600 shadow-sm',
        ghost: 'bg-transparent text-slate-700 hover:bg-slate-50',
    };

    const sizes = {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
        icon: 'h-10 w-10',
    };

    return (
        <motion.button
            ref={ref}
            disabled={disabled || isLoading}
            whileTap={!disabled && !isLoading ? whileTap : undefined}
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 disabled:pointer-events-none disabled:opacity-50',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children as React.ReactNode}
        </motion.button>
    );
});

Button.displayName = 'Button';

export { Button };
