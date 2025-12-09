import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
    variant?: "default" | "elevated" | "glass";
}

export function Card({
    children,
    className = "",
    hoverEffect = true,
    variant = "default"
}: CardProps) {
    const baseStyles = "rounded-2xl md:rounded-3xl p-6 md:p-8 overflow-hidden relative transition-all duration-500 ease-[var(--ease-spring)]";

    const variantStyles = {
        default: `
            bg-[linear-gradient(145deg,rgba(255,255,255,0.04)_0%,rgba(255,255,255,0.01)_100%)]
            border border-[var(--border-subtle)]
            backdrop-blur-xl
            shadow-[0_4px_24px_rgba(0,0,0,0.2)]
        `,
        elevated: `
            bg-[linear-gradient(165deg,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0.02)_100%)]
            border border-[var(--border-alpha)]
            backdrop-blur-2xl
            shadow-[0_8px_32px_rgba(0,0,0,0.3),inset_0_1px_0_rgba(255,255,255,0.1)]
        `,
        glass: `
            bg-[var(--bg-glass)]
            border border-[var(--border-alpha)]
            backdrop-blur-2xl
            shadow-[0_16px_48px_rgba(0,0,0,0.4)]
        `,
    };

    const hoverStyles = hoverEffect
        ? `
            hover:-translate-y-2
            hover:border-[rgba(0,245,160,0.3)]
            hover:shadow-[0_16px_48px_rgba(0,0,0,0.4),0_0_30px_var(--emerald-glow-soft)]
        `
        : "";

    return (
        <div className={`${baseStyles} ${variantStyles[variant]} ${hoverStyles} ${className}`}>
            {/* Premium inner glow */}
            <div className="absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(0,245,160,0.05)_0%,transparent_70%)] group-hover:opacity-100" />
            <div className="relative z-10 h-full">{children}</div>
        </div>
    );
}

