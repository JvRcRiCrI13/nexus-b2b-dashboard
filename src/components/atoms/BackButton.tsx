"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface BackButtonProps {
    className?: string;
    label?: string;
    href?: string;
}

export const BackButton = ({ className, label = "Volver", href }: BackButtonProps) => {
    const router = useRouter();

    const handleClick = () => {
        if (href) {
            router.push(href);
        } else {
            router.back();
        }
    };

    return (
        <Button
            variant="ghost"
            size="sm"
            onClick={handleClick}
            className={cn("text-slate-500 hover:text-slate-900 hover:bg-slate-100 -ml-2 mb-2", className)}
        >
            <ArrowLeft className="h-4 w-4 mr-1" />
            {label}
        </Button>
    );
};
