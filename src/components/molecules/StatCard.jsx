import React from 'react';
import { cn } from '@/lib/utils';
import { Card } from '@/components/atoms/Card';
import { Typography } from '@/components/atoms/Typography';

const StatCard = ({ title, value, icon: Icon, trend, className, ...props }) => {
    return (
        <Card className={cn("p-6 flex items-start justify-between", className)} {...props}>
            <div className="flex flex-col gap-1">
                <span className="text-sm font-medium text-slate-500">{title}</span>
                <Typography.H2 className="text-2xl font-bold pb-0">{value}</Typography.H2>
                {trend && (
                    <span className={cn("text-xs font-medium", trend.startsWith('+') ? "text-emerald-600" : "text-red-600")}>
                        {trend} from last month
                    </span>
                )}
            </div>
            {Icon && (
                <div className="p-2 bg-slate-100 rounded-lg text-slate-600">
                    <Icon className="h-5 w-5" />
                </div>
            )}
        </Card>
    );
};

export { StatCard };
