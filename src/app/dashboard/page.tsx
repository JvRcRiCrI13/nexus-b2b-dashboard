"use client";

import React, { useState } from 'react';
import { DashboardTemplate } from '@/components/templates/DashboardTemplate';
import { ProjectTable, Project, MOCK_PROJECTS } from '@/components/organisms/ProjectTable';
import { Button } from '@/components/atoms/Button';
import { Plus, DollarSign, LayoutDashboard, Clock } from 'lucide-react';
import { Modal } from '@/components/molecules/Modal';
import { NewProjectForm } from '@/components/organisms/NewProjectForm';
import { toast } from 'sonner';
import { KpiCard } from '@/components/molecules/stats/kpi-card';

export default function DashboardPage() {
    const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleCreateProject = async (data: { name: string; client: string; amount?: string; date?: string }) => {
        setIsLoading(true);

        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1000));

        const newProject: Project = {
            id: Math.random().toString(36).substr(2, 9),
            name: data.name,
            client: data.client,
            amount: data.amount || '$0.00',
            dueDate: data.date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
            status: 'In Progress', // Default status
        };

        setProjects((prev) => [newProject, ...prev]);
        setIsLoading(false);
        setIsModalOpen(false);
        toast.success("Proyecto creado exitosamente", { description: `${newProject.name} ha sido agregado.` });
    };

    return (
        <DashboardTemplate
            title="Proyectos"
            action={
                <Button className="gap-2" onClick={() => setIsModalOpen(true)}>
                    <Plus className="w-4 h-4" />
                    Nuevo Proyecto
                </Button>
            }
        >
            <div className="grid gap-4 md:grid-cols-3 mb-8">
                <KpiCard
                    title="Total Revenue"
                    value="$45,231.89"
                    icon={DollarSign}
                    trend={{ value: "+20.1%", direction: "up" }}
                    description="from last month"
                />
                <KpiCard
                    title="Active Projects"
                    value="+12"
                    icon={LayoutDashboard}
                    trend={{ value: "+180.1%", direction: "up" }}
                    description="from last month"
                />
                <KpiCard
                    title="Time on Track"
                    value="86.5%"
                    icon={Clock}
                    trend={{ value: "-4.5%", direction: "down" }}
                    description="from last week"
                />
            </div>

            <ProjectTable projects={projects} />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Crear Nuevo Proyecto"
            >
                <NewProjectForm
                    onSubmit={handleCreateProject}
                    onCancel={() => setIsModalOpen(false)}
                    isLoading={isLoading}
                />
            </Modal>
        </DashboardTemplate>
    );
}
