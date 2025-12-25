"use client";

import React, { useState } from 'react';
import { Button } from '@/components/atoms/Button';
import { FormField } from '@/components/molecules/FormField';

export interface NewProjectFormProps {
    onSubmit: (data: any) => void;
    onCancel: () => void;
    isLoading?: boolean;
}

export const NewProjectForm = ({ onSubmit, onCancel, isLoading }: NewProjectFormProps) => {
    const [formData, setFormData] = useState({
        name: '',
        client: '',
        amount: '',
        date: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
                <FormField
                    label="Nombre del Proyecto"
                    name="name"
                    placeholder="Ej: Rediseño Web Corporativo"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <FormField
                    label="Cliente"
                    name="client"
                    placeholder="Ej: Acme Corp"
                    value={formData.client}
                    onChange={handleChange}
                    required
                />
                <div className="grid grid-cols-2 gap-4">
                    <FormField
                        label="Monto"
                        name="amount"
                        placeholder="$0.00"
                        value={formData.amount}
                        onChange={handleChange}
                    />
                    <FormField
                        label="Fecha de Entrega"
                        name="date"
                        type="date"
                        value={formData.date}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3 pt-2">
                <Button type="button" variant="ghost" onClick={onCancel} disabled={isLoading}>
                    Cancelar
                </Button>
                <Button type="submit" variant="primary" isLoading={isLoading}>
                    Crear Proyecto
                </Button>
            </div>
        </form>
    );
};
