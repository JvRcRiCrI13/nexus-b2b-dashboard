import React from "react";
import { Badge } from "@/components/atoms/Badge";
import { Typography } from "@/components/atoms/Typography";
import { SearchInput } from "@/components/molecules/SearchInput";

export interface Project {
    id: string;
    name: string;
    client: string;
    dueDate: string;
    amount: string;
    status: 'In Progress' | 'Completed' | 'Delayed';
}

export const MOCK_PROJECTS: Project[] = [
    { id: '1', name: 'Website Redesign', client: 'Acme Corp', status: 'In Progress', amount: '$12,000', dueDate: 'Oct 24, 2023' },
    { id: '2', name: 'Mobile App', client: 'Stark Ind', status: 'Completed', amount: '$45,000', dueDate: 'Nov 02, 2023' },
    { id: '3', name: 'Cloud Migration', client: 'Wayne Ent', status: 'Delayed', amount: '$8,500', dueDate: 'Sep 15, 2023' },
    { id: '4', name: 'Dashboard UI', client: 'Cyberdyne', status: 'In Progress', amount: '$5,000', dueDate: 'Dec 10, 2023' },
    { id: '5', name: 'API Integration', client: 'Massive Dynamic', status: 'Completed', amount: '$15,000', dueDate: 'Jan 05, 2024' },
    { id: '6', name: 'Security Audit', client: 'Globex', status: 'In Progress', amount: '$3,200', dueDate: 'Feb 20, 2024' },
];

export interface ProjectTableProps {
    projects?: Project[];
}

export const ProjectTable = ({ projects = MOCK_PROJECTS }: ProjectTableProps) => {
    const getStatusVariant = (status: Project['status']) => {
        switch (status) {
            case 'Completed': return 'success' as const;
            case 'In Progress': return 'info' as const;
            case 'Delayed': return 'destructive' as const;
            default: return 'neutral' as const;
        }
    };

    return (
        <div className="w-full space-y-4">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <Typography.H2 className="text-lg font-semibold text-slate-900 border-none m-0 p-0">
                    Proyectos Activos
                </Typography.H2>
                <div className="w-full sm:w-72">
                    <SearchInput />
                </div>
            </div>

            {/* Table Container */}
            <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm">
                <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4">
                                <Typography.Small className="font-semibold text-slate-500 uppercase tracking-wider">
                                    Proyecto
                                </Typography.Small>
                            </th>
                            <th className="px-6 py-4">
                                <Typography.Small className="font-semibold text-slate-500 uppercase tracking-wider">
                                    Cliente
                                </Typography.Small>
                            </th>
                            <th className="px-6 py-4">
                                <Typography.Small className="font-semibold text-slate-500 uppercase tracking-wider">
                                    Fecha
                                </Typography.Small>
                            </th>
                            <th className="px-6 py-4">
                                <Typography.Small className="font-semibold text-slate-500 uppercase tracking-wider">
                                    Monto
                                </Typography.Small>
                            </th>
                            <th className="px-6 py-4 text-right">
                                <Typography.Small className="font-semibold text-slate-500 uppercase tracking-wider">
                                    Estado
                                </Typography.Small>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {projects.map((project) => (
                            <tr key={project.id} className="hover:bg-slate-50/50 transition-colors">
                                <td className="p-4 px-6">
                                    <Typography.Text className="text-slate-900 font-medium m-0">
                                        {project.name}
                                    </Typography.Text>
                                </td>
                                <td className="p-4 px-6">
                                    <Typography.Text className="text-slate-500 m-0">
                                        {project.client}
                                    </Typography.Text>
                                </td>
                                <td className="p-4 px-6">
                                    <Typography.Text className="text-slate-500 m-0">
                                        {project.dueDate}
                                    </Typography.Text>
                                </td>
                                <td className="p-4 px-6">
                                    <Typography.Text className="text-slate-600 font-medium m-0">
                                        {project.amount}
                                    </Typography.Text>
                                </td>
                                <td className="p-4 px-6 text-right">
                                    <Badge variant={getStatusVariant(project.status)}>
                                        {project.status}
                                    </Badge>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
