import React from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

interface ServiceCardProps {
    name: string;
    description: string;
}

// Map service names to appropriate icons
const getServiceIcon = (name: string) => {
    if (name.toLowerCase().includes("beard")) {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
                <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                <path d="M9 9h.01M15 9h.01" />
                <path d="M7 16c0 2 2.5 4 5 4s5-2 5-4" />
            </svg>
        );
    }
    if (name.toLowerCase().includes("superhero") || name.toLowerCase().includes("kid")) {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        );
    }
    if (name.toLowerCase().includes("clean")) {
        return (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
            </svg>
        );
    }
    // Default scissors icon for haircuts
    return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="6" cy="6" r="3" />
            <circle cx="6" cy="18" r="3" />
            <line x1="20" y1="4" x2="8.12" y2="15.88" />
            <line x1="14.47" y1="14.48" x2="20" y2="20" />
            <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
    );
};

export function ServiceCard({ name, description }: ServiceCardProps) {
    return (
        <Card
            variant="elevated"
            className="flex flex-col h-full group bg-[linear-gradient(145deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.01)_100%)] border-[rgba(255,255,255,0.06)] hover:border-[rgba(0,245,160,0.35)] hover:bg-[linear-gradient(145deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]"
        >
            {/* Icon with premium glow */}
            <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--bg-1)] to-[var(--bg-2)] border border-[var(--border-alpha)] flex items-center justify-center text-[var(--emerald-start)] shadow-[0_4px_20px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.05)] group-hover:shadow-[0_4px_30px_rgba(0,0,0,0.4),0_0_25px_var(--emerald-glow-soft)] transition-all duration-500">
                <div className="w-6 h-6 transition-transform duration-500 group-hover:scale-110">
                    {getServiceIcon(name)}
                </div>
            </div>

            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--emerald-start)] transition-colors duration-300">
                {name}
            </h3>

            <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 flex-grow">
                {description}
            </p>

            <div className="mt-auto pt-5 border-t border-[rgba(255,255,255,0.05)]">
                <Button
                    href="#booking"
                    variant="ghost"
                    size="sm"
                    glow={false}
                    className="w-full text-xs uppercase tracking-[0.15em] bg-[rgba(255,255,255,0.03)] hover:bg-gradient-to-r hover:from-[var(--emerald-start)] hover:via-[var(--emerald-mid)] hover:to-[var(--emerald-end)] hover:text-black border-0 rounded-xl"
                >
                    Book for Pricing
                </Button>
            </div>
        </Card>
    );
}
