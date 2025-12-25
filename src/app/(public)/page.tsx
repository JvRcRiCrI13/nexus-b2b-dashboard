"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { ArrowRight, CheckCircle2, Building2, Globe2, Cpu } from "lucide-react";
import { Input } from "@/components/atoms/Input";
import { motion } from "framer-motion";

// Simple Header Component
const Header = () => (
    <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-white/80 backdrop-blur-sm border-b border-slate-100 transition-all">
        <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold shrink-0">
                D
            </div>
            <span className="text-lg md:text-xl font-bold text-slate-900 whitespace-nowrap">Diego B2B</span>
        </div>
        <Link href="/login">
            <Button variant="ghost" className="font-semibold text-slate-600 hover:text-indigo-600">
                Login
            </Button>
        </Link>
    </header>
);

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white">
            <Header />

            {/* HERO SECTION */}
            <section className="relative flex flex-col items-center justify-center min-h-[85vh] px-6 pt-20 text-center bg-gradient-to-b from-slate-50 to-white">
                <div className="max-w-4xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-medium"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                        </span>
                        v2.0 is live
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-[1.1]"
                    >
                        Gestión de Proyectos que <br />
                        <span className="text-indigo-600">desafía la gravedad</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-xl text-slate-500 leading-relaxed"
                    >
                        Simplifica, organiza y escala tus operaciones B2B con una plataforma diseñada para equipos de alto rendimiento. Sin fricción.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
                    >
                        <Link href="/dashboard">
                            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-8 h-12 text-lg shadow-lg hover:shadow-indigo-200 transition-all">
                                Registrarme
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Background Decorative Elements */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.6, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-100/50 rounded-full blur-3xl -z-10"
                />
            </section>

            {/* CLIENTS SECTION */}
            <section className="py-16 bg-slate-50 border-y border-slate-100">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <span className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-8 block">
                        Trusted by innovative teams
                    </span>
                    <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Client 1 */}
                        <div className="flex items-center gap-2 text-slate-600 font-bold text-xl">
                            <Building2 className="h-8 w-8" />
                            <span>Acme Corp</span>
                        </div>
                        {/* Client 2 */}
                        <div className="flex items-center gap-2 text-slate-600 font-bold text-xl">
                            <Globe2 className="h-8 w-8" />
                            <span>Global Tech</span>
                        </div>
                        {/* Client 3 */}
                        <div className="flex items-center gap-2 text-slate-600 font-bold text-xl">
                            <Cpu className="h-8 w-8" />
                            <span>FutureSyx</span>
                        </div>
                        {/* Client 4 */}
                        <div className="flex items-center gap-2 text-slate-600 font-bold text-xl">
                            <CheckCircle2 className="h-8 w-8" />
                            <span>Stark Ind</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CONTACT SECTION */}
            <section className="py-24 px-6 bg-white">
                <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h2 className="text-4xl font-bold text-slate-900">Hablemos</h2>
                        <p className="text-lg text-slate-600">
                            ¿Listo para transformar tu flujo de trabajo? Contáctanos para una demostración personalizada o para resolver tus dudas.
                        </p>

                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4 text-slate-600">
                                <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <span className="font-bold">E</span>
                                </div>
                                <span>contacto@diegob2b.com</span>
                            </div>
                            <div className="flex items-center gap-4 text-slate-600">
                                <div className="h-10 w-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                                    <span className="font-bold">T</span>
                                </div>
                                <span>+1 (555) 123-4567</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
                        <form className="space-y-5">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-700">Nombre Completo</label>
                                <Input id="name" placeholder="Tu nombre" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Corporativo</label>
                                <Input id="email" type="email" placeholder="nombre@empresa.com" />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-700">Mensaje</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full rounded-md border border-slate-200 bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-slate-400 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-600 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="¿En qué podemos ayudarte?"
                                />
                            </div>
                            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white h-12">
                                Enviar Mensaje
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Simple */}
            <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-100 bg-slate-50">
                © 2024 Diego B2B Inc. All rights reserved.
            </footer>
        </div>
    );
}
