import React from 'react';
import { cn } from '@/lib/utils';

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
}

const H1 = React.forwardRef<HTMLHeadingElement, TypographyProps>(({ className, children, ...props }, ref) => (
    <h1
        ref={ref}
        className={cn("scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-slate-900", className)}
        {...props}
    >
        {children}
    </h1>
));
H1.displayName = 'Typography.H1';

const H2 = React.forwardRef<HTMLHeadingElement, TypographyProps>(({ className, children, ...props }, ref) => (
    <h2
        ref={ref}
        className={cn("scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-slate-900", className)}
        {...props}
    >
        {children}
    </h2>
));
H2.displayName = 'Typography.H2';

const Text = React.forwardRef<HTMLParagraphElement, TypographyProps>(({ className, children, ...props }, ref) => (
    <p
        ref={ref}
        className={cn("leading-7 [&:not(:first-child)]:mt-6 text-slate-700", className)}
        {...props}
    >
        {children}
    </p>
));
Text.displayName = 'Typography.Text';

const H4 = React.forwardRef<HTMLHeadingElement, TypographyProps>(({ className, children, ...props }, ref) => (
    <h4
        ref={ref}
        className={cn("scroll-m-20 text-xl font-semibold tracking-tight text-slate-900", className)}
        {...props}
    >
        {children}
    </h4>
));
H4.displayName = 'Typography.H4';

const Small = React.forwardRef<HTMLElement, TypographyProps>(({ className, children, ...props }, ref) => (
    <small
        ref={ref}
        className={cn("text-sm font-medium leading-none text-slate-500", className)}
        {...props}
    >
        {children}
    </small>
));
Small.displayName = 'Typography.Small';

export const Typography = {
    H1,
    H2,
    H4,
    Text,
    Small,
};
