"use client";

import React from "react";
import { Button } from "@/components/atoms/Button";
import { signIn } from "next-auth/react";
import Image from "next/image";

interface SocialButtonProps {
    provider: 'google' | 'demo';
}

export const SocialButton = ({ provider }: SocialButtonProps) => {
    const [isLoading, setIsLoading] = React.useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        try {
            const authProvider = provider === 'demo' ? 'credentials' : provider;
            const result = await signIn(authProvider, {
                callbackUrl: "/dashboard",
                redirect: false, // Prevent automatic redirect to handle errors/loading
            });

            if (result?.error) {
                console.error("Login Error:", result.error);
                setIsLoading(false);
                // Ideally show a toast here
            } else if (result?.ok) {
                window.location.href = "/dashboard";
            } else {
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Login Exception:", error);
            setIsLoading(false);
        }
    };

    return (
        <Button
            variant="secondary"
            className="w-full bg-white hover:bg-slate-50 border-slate-200 text-slate-700 shadow-sm transition-all hover:shadow-md"
            onClick={handleLogin}
            whileTap={{ scale: 0.98 }}
            isLoading={isLoading}
        >
            {provider === 'google' && (
                <div className="flex items-center justify-center gap-3">
                    <Image
                        src="https://authjs.dev/img/providers/google.svg"
                        alt="Google Logo"
                        width={20}
                        height={20}
                    />
                    <span className="font-medium">Continuar con Google</span>
                </div>
            )}
            {provider === 'demo' && (
                <span className="font-medium text-indigo-700">Acceso Demo (Sin Google)</span>
            )}
        </Button>
    );
};
