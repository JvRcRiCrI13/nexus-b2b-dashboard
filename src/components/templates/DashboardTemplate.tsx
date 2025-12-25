import React, { useState } from 'react';
import { Sidebar } from '@/components/organisms/sidebar/sidebar';
import { Typography } from '@/components/atoms/Typography';
import { Menu, ChevronLeft } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DashboardTemplateProps {
    children: React.ReactNode;
    title?: string;
    action?: React.ReactNode;
}

export const DashboardTemplate = ({ children, title, action }: DashboardTemplateProps) => {
    // Desktop state
    const [isCollapsed, setIsCollapsed] = useState(false);
    // Mobile state
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    // Close mobile menu when clicking outside (overlay)
    const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

    // Prevent scrolling when mobile menu is open
    React.useEffect(() => {
        if (isMobileOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileOpen]);

    return (
        <div className="flex h-screen bg-slate-50 overflow-hidden">
            {/* Mobile Overlay */}
            {isMobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm transition-opacity"
                    onClick={() => setIsMobileOpen(false)}
                />
            )}

            {/* Sidebar Container */}
            <div className={cn(
                "fixed inset-y-0 left-0 z-50 h-full transition-transform duration-300 md:relative md:translate-x-0 bg-white shadow-xl md:shadow-none border-r border-slate-200",
                isMobileOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <Sidebar isCollapsed={isCollapsed} className="h-full" />

                {/* Desktop Collapse Toggle */}
                <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="absolute -right-3 top-9 z-50 hidden md:flex h-6 w-6 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm hover:bg-slate-50 text-slate-500"
                >
                    {isCollapsed ? <Menu className="h-3 w-3" /> : <ChevronLeft className="h-3 w-3" />}
                </button>
            </div>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto relative w-full">
                {/* Header */}
                <header className="px-6 md:px-8 py-6 bg-white border-b border-slate-200 flex justify-between items-center sticky top-0 z-30">
                    <div className="flex items-center gap-4">
                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-md"
                            onClick={toggleMobile}
                        >
                            <Menu className="h-6 w-6" />
                        </button>

                        <Typography.H2 className="text-xl md:text-2xl font-bold text-slate-900 border-none pb-0 mt-0">
                            {title || 'Dashboard'}
                        </Typography.H2>
                    </div>

                    {action && (
                        <div>
                            {action}
                        </div>
                    )}
                </header>

                {/* Content Body */}
                <div className="p-4 md:p-8">
                    {children}
                </div>
            </main>
        </div>
    );
};
