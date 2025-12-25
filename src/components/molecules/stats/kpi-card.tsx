import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface KpiCardProps {
    title: string;
    value: string;
    icon: LucideIcon;
    description?: string;
    trend?: {
        value: string;
        direction: 'up' | 'down' | 'neutral';
    };
    className?: string; // Adding standard className prop for flexibility
}

export const KpiCard = ({ title, value, icon: Icon, description, trend, className }: KpiCardProps) => {
    return (
        <div className={cn("rounded-xl border border-slate-200 bg-white p-6 shadow-sm", className)}>
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="text-sm font-medium text-slate-500">
                    {title}
                </h3>
                <Icon className="h-4 w-4 text-slate-500" />
            </div>
            <div>
                <div className="text-2xl font-bold mt-2 text-slate-900">{value}</div>
                {(description || trend) && (
                    <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        {trend && (
                            <span
                                className={cn(
                                    trend.direction === 'up' && "text-emerald-500",
                                    trend.direction === 'down' && "text-rose-500",
                                    trend.direction === 'neutral' && "text-slate-500"
                                )}
                            >
                                {trend.value}
                            </span>
                        )}
                        {description && (
                            <span className="text-slate-500">
                                {description}
                            </span>
                        )}
                    </p>
                )}
            </div>
        </div>
    );
};
