"use client";

import React from "react";
import { motion } from "framer-motion";
import { ResponsiveContainer } from "recharts";
import { RevenueChart } from "@/components/organisms/analytics/RevenueChart";
import { ProjectDistribution } from "@/components/organisms/analytics/ProjectDistribution";
import { TopClients } from "@/components/organisms/analytics/TopClients";
import { KpiCard } from "@/components/molecules/stats/kpi-card";
import { BackButton } from "@/components/atoms/BackButton";
import { DollarSign, Users, CheckCircle, AlertCircle } from "lucide-react";

export default function AnalyticsPage() {
    return (
        <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
                <BackButton href="/dashboard" />
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-900">Analytics</h1>
                        <p className="text-slate-500">Resumen y métricas de rendimiento del negocio</p>
                    </div>
                </div>
            </div>

            {/* KPI Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <KpiCard
                    title="Ingresos Totales"
                    value="$124,500"
                    icon={DollarSign}
                    trend={{ value: "12.5%", direction: 'up' }}
                />
                <KpiCard
                    title="Clientes Activos"
                    value="42"
                    icon={Users}
                    trend={{ value: "8.2%", direction: 'up' }}
                />
                <KpiCard
                    title="Tasa de Entrega"
                    value="94.5%"
                    icon={CheckCircle}
                    trend={{ value: "2.1%", direction: 'up' }}
                />
                <KpiCard
                    title="Por Facturar"
                    value="$12,200"
                    icon={AlertCircle}
                    trend={{ value: "5.4%", direction: 'down' }}
                />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <RevenueChart />
                </div>
                <div>
                    <ProjectDistribution />
                </div>
            </div>

            {/* Detailed Insights */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <TopClients />
                </div>
                {/* Placeholder for Recent Activity or other metric */}
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 flex flex-col items-center justify-center text-center space-y-3">
                    <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600">
                        <Users className="h-6 w-6" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-slate-900">Próximamente</h3>
                        <p className="text-sm text-slate-500">Más insights en desarrollo...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
