"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, BarChart3, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserProfile } from "@/components/molecules/UserProfile";
import { signOut } from "next-auth/react";

export interface SidebarProps {
    isCollapsed: boolean;
    className?: string;
}

const NAV_ITEMS = [
    { icon: LayoutDashboard, label: "Dashboard", href: "/dashboard" },
    { icon: BarChart3, label: "Analytics", href: "/analytics" },
    { icon: Settings, label: "Settings", href: "/settings" },
];

export const Sidebar = ({ isCollapsed, className }: SidebarProps) => {
    const pathname = usePathname();

    return (
        <aside
            className={cn(
                "flex h-screen flex-col border-r border-slate-200 bg-white transition-all duration-300",
                isCollapsed ? "w-[70px]" : "w-64",
                className
            )}
        >
            {/* Header */}
            <div className={cn("flex h-16 items-center border-b border-slate-100", isCollapsed ? "justify-center" : "px-6")}>
                <div className="flex items-center gap-2 overflow-hidden">
                    <div className="h-8 w-8 shrink-0 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
                        D
                    </div>
                    {!isCollapsed && (
                        <span className="text-lg font-bold text-slate-900 whitespace-nowrap">
                            Diego B2B
                        </span>
                    )}
                </div>
            </div>

            {/* Nav */}
            <nav className="flex-1 space-y-2 py-4 px-2">
                {NAV_ITEMS.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;

                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 rounded-lg py-2 transition-colors",
                                isCollapsed ? "justify-center px-0" : "px-4",
                                isActive
                                    ? "bg-slate-100 text-blue-600"
                                    : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
                            )}
                            title={isCollapsed ? item.label : undefined}
                        >
                            <Icon
                                className={cn(
                                    "shrink-0",
                                    isActive ? "text-blue-600" : "text-slate-500",
                                    "h-5 w-5"
                                )}
                            />
                            {!isCollapsed && (
                                <span className="text-sm font-medium whitespace-nowrap">
                                    {item.label}
                                </span>
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer */}
            <div className="border-t border-slate-100 p-2 space-y-2">
                {isCollapsed ? (
                    <div className="flex flex-col gap-2 items-center">
                        <div className="h-8 w-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-600">
                            DA
                        </div>
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                            title="Cerrar Sesión"
                        >
                            <LogOut className="h-5 w-5" />
                        </button>
                    </div>
                ) : (
                    <div className="flex items-center justify-between px-2">
                        <UserProfile
                            name="Diego Admin"
                            role="Super Admin"
                            imageSrc="https://api.dicebear.com/7.x/avataaars/svg?seed=Diego"
                            className="px-0"
                        />
                        <button
                            onClick={() => signOut({ callbackUrl: "/" })}
                            className="p-2 text-slate-400 hover:text-red-500 transition-colors"
                            title="Cerrar Sesión"
                        >
                            <LogOut className="h-5 w-5" />
                        </button>
                    </div>
                )}
            </div>
        </aside>
    );
};
