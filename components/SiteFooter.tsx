import React from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

export function SiteFooter() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-16 sm:py-24 border-t border-[rgba(255,255,255,0.08)] bg-[var(--bg-0)] overflow-hidden">
            <Container className="flex flex-col items-center">

                {/* Minimal Brand */}
                <Link
                    href="/"
                    className="text-2xl sm:text-3xl font-bold tracking-tighter text-white mb-8 sm:mb-12 opacity-90 hover:opacity-100 transition-opacity"
                >
                    LB CUTS
                </Link>

                {/* Clean Navigation */}
                <nav className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-6 mb-12 sm:mb-16">
                    {["Services", "Barbers", "Gallery", "Booking"].map((item) => (
                        <Link
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/60 hover:text-white transition-colors duration-300"
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Minimal Divider */}
                <div className="w-8 h-[1px] bg-white/20 mb-8 sm:mb-12" />

                {/* Copyright & Info */}
                <div className="text-center space-y-3 sm:space-y-4">
                    <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-white/40">
                        Est. 2024 · Fishtown, Philadelphia
                    </p>
                    <p className="text-[9px] sm:text-[10px] text-white/30 font-light">
                        &copy; {currentYear} {siteConfig.businessName}.
                    </p>
                </div>
            </Container>
        </footer>
    );
}
