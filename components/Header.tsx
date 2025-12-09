"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Barbers", href: "#team" },
    { name: "Gallery", href: "#gallery" },
    { name: "Booking", href: "#booking" },
    { name: "Hours", href: "#location" },
];

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[var(--ease-luxury)] border-b ${isScrolled || isMobileMenuOpen
                        ? "bg-[rgba(5,5,5,0.85)] backdrop-blur-xl border-[rgba(255,255,255,0.08)] py-4"
                        : "bg-transparent border-transparent py-6"
                    }`}
            >
                <Container className="flex items-center justify-between">
                    {/* Logo / Wordmark */}
                    <Link
                        href="/"
                        className="text-2xl tracking-tighter font-bold text-white z-50 relative group select-none"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        LB CUTS
                        <span className="text-[var(--color-accent-dim)] opacity-40">.</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="label-text text-white/70 hover:text-white transition-colors duration-300 relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                        <Link
                            href="#booking"
                            className="btn-primary ml-4 text-xs tracking-widest uppercase px-6 py-3 hover:scale-105 active:scale-95"
                        >
                            Book Appointment
                        </Link>
                    </nav>

                    {/* Mobile Hamburger */}
                    <button
                        className="lg:hidden flex flex-col justify-center items-center w-12 h-12 z-50 relative rounded-full hover:bg-white/5 transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle menu"
                        aria-expanded={isMobileMenuOpen}
                    >
                        <span
                            className={`w-6 h-[1px] bg-white transition-all duration-500 ease-[var(--ease-luxury)] ${isMobileMenuOpen ? "rotate-45 translate-y-[1px]" : "-translate-y-[3px]"
                                }`}
                        />
                        <span
                            className={`w-6 h-[1px] bg-white transition-all duration-500 ease-[var(--ease-luxury)] ${isMobileMenuOpen ? "-rotate-45" : "translate-y-[3px]"
                                }`}
                        />
                    </button>
                </Container>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-[var(--bg-0)] transition-all duration-700 ease-[var(--ease-luxury)] lg:hidden ${isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950 to-black pointer-events-none" />

                <div className="relative h-full flex flex-col justify-center items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`font-display text-4xl text-white/90 hover:text-white hover:scale-105 transition-all duration-500 ease-[var(--ease-luxury)] ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                                }`}
                            style={{ transitionDelay: `${100 + idx * 50}ms` }}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div
                        className={`mt-8 transition-all duration-700 delay-300 ${isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                    >
                        <Link
                            href="#booking"
                            className="btn-primary text-sm tracking-widest px-8 py-4"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Book Now
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
