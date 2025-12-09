import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

interface TeamCardProps {
    name: string;
    role: string;
    specialties?: readonly string[];
    imageSrc?: string;
}

export function TeamCard({ name, role, specialties, imageSrc }: TeamCardProps) {
    return (
        <div className="group flex flex-col items-center text-center">
            {/* Avatar Container with Glow */}
            <div className="relative mb-5">
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--emerald-start)] to-[var(--emerald-mid)] rounded-full blur-[25px] opacity-0 group-hover:opacity-40 transition-all duration-500" />

                {/* Avatar */}
                <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-2 border-[var(--border-alpha)] group-hover:border-[var(--emerald-start)] transition-all duration-500 z-10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
                    {imageSrc ? (
                        <Image src={imageSrc} alt={name} fill className="object-cover" />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[var(--bg-2)] via-[var(--bg-1)] to-[var(--bg-2)] text-3xl md:text-4xl font-bold text-[var(--text-tertiary)] group-hover:text-[var(--emerald-start)] transition-all duration-500">
                            {name.charAt(0)}
                        </div>
                    )}
                </div>
            </div>

            {/* Name */}
            <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-[var(--emerald-start)] transition-colors duration-300">
                {name}
            </h3>

            {/* Role */}
            <p className="text-xs text-[var(--text-secondary)] uppercase tracking-[0.1em] mb-4">
                {role.split("·")[0].trim()}
            </p>

            {/* Specialty Tags */}
            {specialties && specialties.length > 0 && (
                <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                    {specialties.map((specialty) => (
                        <span
                            key={specialty}
                            className="px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider rounded-full bg-[rgba(255,255,255,0.04)] border border-[var(--border-subtle)] text-[var(--text-tertiary)] group-hover:border-[rgba(0,245,160,0.2)] group-hover:text-[var(--text-secondary)] transition-all duration-300"
                        >
                            {specialty}
                        </span>
                    ))}
                </div>
            )}

            {/* Book Button */}
            <Button
                href="#booking"
                variant="secondary"
                size="sm"
                className="opacity-70 group-hover:opacity-100 transition-all duration-300 text-xs"
            >
                Book with {name}
            </Button>
        </div>
    );
}
