"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Card } from "@/components/atoms/Card";

const data = [
    { name: "En Progreso", value: 12, color: "#4f46e5" }, // Indigo 600
    { name: "Completados", value: 19, color: "#10b981" }, // Emerald 500
    { name: "En Espera", value: 5, color: "#f59e0b" },  // Amber 500
    { name: "Revisión", value: 3, color: "#6366f1" },   // Indigo 500
];

export const ProjectDistribution = () => {
    return (
        <Card className="p-6">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Distribución de Proyectos</h3>
            <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} strokeWidth={0} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                            itemStyle={{ color: '#1e293b', fontWeight: 600 }}
                        />
                        <Legend
                            verticalAlign="bottom"
                            height={36}
                            iconType="circle"
                            formatter={(value) => <span className="text-slate-600 font-medium ml-1">{value}</span>}
                        />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};
