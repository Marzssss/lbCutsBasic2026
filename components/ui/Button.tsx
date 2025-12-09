import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    href?: string;
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
    className?: string;
    glow?: boolean;
}

export function Button({
    variant = "primary",
    href,
    size = "md",
    children,
    className = "",
    glow = true,
    ...props
}: ButtonProps) {
    // Base styles with premium transitions
    const baseStyles =
        "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-400 ease-[var(--ease-spring)] active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none relative overflow-hidden";

    // Size variants with premium spacing
    const sizeStyles = {
        sm: "px-5 py-2.5 text-sm",
        md: "px-7 py-3.5 text-base",
        lg: "px-10 py-5 text-lg tracking-wide",
    };

    // Visual variants with full gradient and glow system
    const visualStyles = {
        primary: `
            bg-gradient-to-r from-[var(--emerald-start)] via-[var(--emerald-mid)] to-[var(--emerald-end)]
            bg-[length:200%_auto]
            text-black font-bold
            ${glow ? 'shadow-[0_0_20px_var(--emerald-glow-soft),0_4px_16px_rgba(0,0,0,0.3)]' : 'shadow-md'}
            hover:bg-[position:right_center]
            hover:shadow-[0_0_30px_var(--emerald-glow),0_0_60px_var(--emerald-glow-soft),0_8px_24px_rgba(0,0,0,0.4)]
            hover:-translate-y-0.5
            border border-transparent
            before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700
        `,
        secondary: `
            bg-transparent
            border border-[var(--border-alpha)]
            text-[var(--text-primary)]
            hover:bg-[rgba(0,245,160,0.05)]
            hover:border-[var(--emerald-start)]
            hover:text-[var(--emerald-start)]
            ${glow ? 'hover:shadow-[0_0_20px_var(--emerald-glow-soft)]' : ''}
        `,
        ghost: `
            bg-transparent
            border-none
            text-[var(--text-secondary)]
            hover:text-[var(--emerald-start)]
            hover:bg-[rgba(255,255,255,0.03)]
        `,
    };

    const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${visualStyles[variant]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedStyles}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedStyles} {...props}>
            {children}
        </button>
    );
}
