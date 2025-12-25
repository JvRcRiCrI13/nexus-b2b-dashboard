"use client";

import React from "react";
import { BackButton } from "@/components/atoms/BackButton";
import { ProfileForm } from "@/components/organisms/settings/ProfileForm";
import { Card } from "@/components/atoms/Card";
import { Bell, Shield } from "lucide-react";
import { Button } from "@/components/atoms/Button";

export default function SettingsPage() {
    return (
        <div className="p-8 space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-5xl mx-auto">
            {/* Header */}
            <div>
                <BackButton href="/dashboard" />
                <h1 className="text-2xl font-bold text-slate-900">Configuración</h1>
                <p className="text-slate-500">Gestiona tu perfil y preferencias de la cuenta</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main Profile Column */}
                <div className="lg:col-span-2 space-y-6">
                    <Card className="p-6">
                        <div className="mb-6">
                            <h2 className="text-lg font-semibold text-slate-900">Perfil Personal</h2>
                            <p className="text-sm text-slate-500">Actualiza tu información pública y detalles de contacto.</p>
                        </div>
                        <ProfileForm />
                    </Card>
                </div>

                {/* Sidebar Column */}
                <div className="space-y-6">
                    {/* Security */}
                    <Card className="p-6">
                        <div className="flex items-center gap-3 mb-4 text-slate-900">
                            <Shield className="h-5 w-5 text-indigo-600" />
                            <h3 className="font-semibold">Seguridad</h3>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <p className="text-sm font-medium text-slate-700">Contraseña</p>
                                <p className="text-xs text-slate-500">Último cambio hace 3 meses</p>
                            </div>
                            <Button variant="secondary" size="sm" className="w-full justify-center">
                                Cambiar Contraseña
                            </Button>
                        </div>
                    </Card>

                    {/* Notifications */}
                    <Card className="p-6">
                        <div className="flex items-center gap-3 mb-4 text-slate-900">
                            <Bell className="h-5 w-5 text-indigo-600" />
                            <h3 className="font-semibold">Notificaciones</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Email Marketing</span>
                                <div className="h-5 w-9 bg-indigo-600 rounded-full cursor-pointer relative">
                                    <div className="absolute top-1 right-1 h-3 w-3 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Alertas de Proyecto</span>
                                <div className="h-5 w-9 bg-indigo-600 rounded-full cursor-pointer relative">
                                    <div className="absolute top-1 right-1 h-3 w-3 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm text-slate-600">Nuevos Clientes</span>
                                <div className="h-5 w-9 bg-slate-200 rounded-full cursor-pointer relative">
                                    <div className="absolute top-1 left-1 h-3 w-3 bg-white rounded-full shadow-sm"></div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
