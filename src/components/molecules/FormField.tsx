import React from 'react';
import { cn } from '@/lib/utils';
import { Input, InputProps } from '@/components/atoms/Input';
import { Typography } from '@/components/atoms/Typography';

export interface FormFieldProps extends InputProps {
    label?: string;
    error?: string;
}

const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(({ label, error, className, id, ...props }, ref) => {
    // Generate a fallback ID if none is provided, for accessibility
    const inputId = id || props.name;

    return (
        <div className={cn("flex flex-col gap-1.5", className)}>
            {label && (
                <label
                    htmlFor={inputId}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-slate-700"
                >
                    {label}
                </label>
            )}
            <Input ref={ref} id={inputId} className={cn(error && "border-red-500 focus-visible:ring-red-500")} {...props} />
            {error && (
                <div className="mt-1">
                    <Typography.Small className="text-red-500 font-medium">
                        {error}
                    </Typography.Small>
                </div>
            )}
        </div>
    );
});

FormField.displayName = 'FormField';

export { FormField };
