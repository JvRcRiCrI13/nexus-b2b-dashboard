import React from 'react';
import { cn } from '@/lib/utils';
import { Typography } from '@/components/atoms/Typography';

export const UserProfile = ({ imageSrc, name, role, className }) => {
    return (
        <div className={cn("flex items-center gap-3 p-2", className)}>
            <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200 bg-slate-100">
                {imageSrc ? (
                    <img src={imageSrc} alt={name} className="h-full w-full object-cover" />
                ) : (
                    <div className="flex h-full w-full items-center justify-center bg-slate-200 text-slate-500">
                        <span className="text-sm font-bold">{name ? name.charAt(0).toUpperCase() : 'U'}</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col overflow-hidden">
                <Typography.Text className="truncate text-sm font-medium text-slate-900 mt-0 leading-tight">
                    {name || 'User'}
                </Typography.Text>
                <Typography.Small className="truncate text-xs text-slate-500 font-normal">
                    {role || 'Guest'}
                </Typography.Small>
            </div>
        </div>
    );
};
