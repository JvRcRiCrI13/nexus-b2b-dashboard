"use client";

import React from "react";
import { Card } from "@/components/atoms/Card";
import { ArrowUpRight } from "lucide-react";

const clients = [
    { name: "Acme Cloud", revenue: "$45,200", projects: 5, status: "Active" },
    { name: "Global Systems", revenue: "$32,150", projects: 3, status: "Active" },
    { name: "Stark Industries", revenue: "$28,900", projects: 2, status: "Review" },
    { name: "Wayne Enterprises", revenue: "$24,500", projects: 4, status: "Active" },
    { name: "Cyberdyne", revenue: "$18,200", projects: 1, status: "On Hold" },
];

export const TopClients = () => {
    return (
        <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900">Top Clientes</h3>
                <button className="text-sm text-indigo-600 font-medium hover:text-indigo-700 flex items-center gap-1 transition-colors">
                    Ver todos <ArrowUpRight className="h-4 w-4" />
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-100 text-left">
                            <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Cliente</th>
                            <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Proyectos</th>
                            <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Revenue</th>
                            <th className="pb-3 text-xs font-semibold text-slate-400 uppercase tracking-wider text-right">Estado</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                        {clients.map((client) => (
                            <tr key={client.name} className="group hover:bg-slate-50 transition-colors">
                                <td className="py-4 text-sm font-medium text-slate-900">{client.name}</td>
                                <td className="py-4 text-sm text-slate-500">{client.projects}</td>
                                <td className="py-4 text-sm font-semibold text-slate-700">{client.revenue}</td>
                                <td className="py-4 text-right">
                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${client.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                                            client.status === 'Review' ? 'bg-indigo-50 text-indigo-700' :
                                                'bg-amber-50 text-amber-700'
                                        }`}>
                                        {client.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};
