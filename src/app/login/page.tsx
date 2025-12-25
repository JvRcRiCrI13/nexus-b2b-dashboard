"use client";

import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { SocialButton } from "@/components/atoms/SocialButton";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Button } from "@/components/atoms/Button";

export default function LoginPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border border-slate-100"
            >
                {/* Close Button */}
                <Link href="/" className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors">
                    <X className="h-5 w-5" />
                </Link>

                <div className="text-center mb-8">
                    <div className="h-10 w-10 bg-indigo-600 rounded-lg mx-auto flex items-center justify-center text-white font-bold text-xl mb-4">
                        D
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Bienvenido de nuevo</h1>
                    <p className="text-sm text-slate-500 mt-2">
                        Ingresa a tu dashboard para gestionar proyectos
                    </p>
                </div>

                <div className="space-y-4">
                    <Button
                        variant="secondary"
                        className="w-full bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-sm transition-all hover:shadow-md"
                        onClick={() => signIn("credentials", { callbackUrl: "/dashboard" })}
                    >
                        <div className="flex items-center justify-center gap-3">
                            <img
                                src="https://authjs.dev/img/providers/google.svg"
                                alt="Google Logo"
                                width={20}
                                height={20}
                            />
                            <span className="font-medium">Continuar con Google</span>
                        </div>
                    </Button>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <span className="w-full border-t border-slate-200" />
                        </div>
                        <div className="relative flex justify-center text-xs uppercase">
                            <span className="bg-white px-2 text-slate-400">O ingresa con</span>
                        </div>
                    </div>

                    <Button
                        variant="secondary"
                        className="w-full bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-indigo-100"
                        onClick={() => signIn("credentials", { callbackUrl: "/dashboard" })}
                    >
                        Acceso Demo (Sin Google)
                    </Button>
                </div>

                <div className="mt-8 text-center text-xs text-slate-500">
                    ¿No tienes cuenta?{" "}
                    <Link href="/" className="text-indigo-600 hover:underline">
                        Contactar Soporte
                    </Link>
                </div>
            </motion.div>
        </div>
    );
}
