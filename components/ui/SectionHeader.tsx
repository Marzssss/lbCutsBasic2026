import React from "react";

interface SectionHeaderProps {
    overline?: string;
    title: string;
    description?: string;
    align?: "left" | "center" | "right";
    className?: string;
    gradient?: boolean;
}

export function SectionHeader({
    overline,
    title,
    description,
    align = "center",
    className = "",
    gradient = true,
}: SectionHeaderProps) {
    const alignStyles = {
        left: "text-left",
        center: "text-center mx-auto",
        right: "text-right ml-auto",
    };

    return (
        <div className={`max-w-3xl mb-16 md:mb-20 ${alignStyles[align]} ${className}`}>
            {overline && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--bg-glass)] border border-[var(--border-alpha)] backdrop-blur-md mb-6 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-[var(--emerald-start)] to-[var(--emerald-mid)] animate-pulse" />
                    <span className="text-[10px] md:text-xs font-bold tracking-[0.15em] uppercase text-[var(--text-secondary)]">
                        {overline}
                    </span>
                </div>
            )}
            <h2
                className={`
                    text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.1] mb-5
                    animate-fade-in-up delay-100
                    ${gradient
                        ? 'bg-gradient-to-b from-white via-white/90 to-white/60 bg-clip-text text-transparent'
                        : 'text-white'
                    }
                `}
            >
                {title}
            </h2>
            {description && (
                <p className="text-[var(--text-secondary)] text-lg md:text-xl leading-relaxed max-w-2xl mx-auto animate-fade-in-up delay-200">
                    {description}
                </p>
            )}
        </div>
    );
}

