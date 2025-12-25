import React, { useState } from 'react';
import { Sidebar } from '@/components/organisms/sidebar/sidebar';
import { Typography } from '@/components/atoms/Typography';
import { Menu, ChevronLeft } from 'lucide-react';

interface DashboardTemplateProps {
    children: React.ReactNode;
    title?: string;
    action?: React.ReactNode;
}

export const DashboardTemplate = ({ children, title, action }: DashboardTemplateProps) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            {/* Sidebar */}
            <div className="relative h-full">
                <Sidebar isCollapsed={isCollapsed} />

                {/* Collapse Toggle Button */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-9 z-50 flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 text-slate-500"
                >
                    {isCollapsed ? <Menu className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative">
                {/* Header */}
                <header className="px-8 py-6 bg-white border-b border-slate-200 flex justify-between items-center sticky top-0 z-10">
                    <Typography.H2 className="text-2xl font-bold text-slate-900 border-none pb-0 mt-0">
                        {title || 'Dashboard'}
                    </Typography.H2>

                    {action && (
                        <div>
                            {action}
                        </div>
                    )}
                </header>

                {/* Content Body */}
                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};
