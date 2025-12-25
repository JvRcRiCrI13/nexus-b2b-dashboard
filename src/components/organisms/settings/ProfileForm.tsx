"use client";

import React from "react";
import { Button } from "@/components/atoms/Button";
import { Input } from "@/components/atoms/Input";
import { Camera, Save } from "lucide-react";
import { toast } from "sonner";

import Image from "next/image";

export const ProfileForm = () => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success("Perfil actualizado correctamente");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {/* Avatar Section */}
            <div className="flex items-center gap-6">
                <div className="relative group">
                    <div className="relative h-24 w-24 rounded-full bg-slate-200 overflow-hidden border-4 border-white shadow-lg">
                        <Image
                            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Diego"
                            alt="Avatar"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <button type="button" className="absolute bottom-0 right-0 p-2 bg-indigo-600 rounded-full text-white shadow-md hover:bg-indigo-700 transition-colors">
                        <Camera className="h-4 w-4" />
                    </button>
                </div>
                <div>
                    <h3 className="font-medium text-slate-900">Foto de Perfil</h3>
                    <p className="text-sm text-slate-500">JPG, GIF o PNG. Máx 1MB.</p>
                </div>
            </div>

            {/* Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Nombre Completo</label>
                    <Input defaultValue="Diego Admin" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Input defaultValue="diego@admin.com" type="email" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Cargo / Role</label>
                    <Input defaultValue="Super Admin" disabled className="bg-slate-50 text-slate-500" />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Empresa</label>
                    <Input defaultValue="Diego B2B Inc." />
                </div>
            </div>

            <div className="pt-4 border-t border-slate-100 flex justify-end">
                <Button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    <Save className="h-4 w-4 mr-2" />
                    Guardar Cambios
                </Button>
            </div>
        </form>
    );
};
