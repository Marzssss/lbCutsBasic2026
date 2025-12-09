import React from "react";
import { Container } from "@/components/ui/Container";

export function GallerySection() {
    const items = [1, 2, 3, 4, 5, 6];

    return (
        <section id="gallery" className="py-16 sm:py-24 bg-[#080808] overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4">
                    <div>
                        <span className="label-text mb-3 sm:mb-4 block">Portfolio</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-display text-white">Recent Work</h2>
                    </div>
                    <a
                        href="https://instagram.com/lbcuts"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:block text-xs sm:text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                    >
                        Index
                    </a>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
                    {items.map((item) => (
                        <div
                            key={item}
                            className="aspect-square relative group bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-[var(--ease-luxury)] block cursor-pointer"
                        >
                            {/* Placeholder for real images */}
                            <div className="absolute inset-0 bg-[linear-gradient(45deg,#151515,#1a1a1a)]" />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                <span className="text-white font-medium tracking-widest uppercase text-[10px] sm:text-xs">View</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 sm:mt-8 text-center md:hidden">
                    <a
                        href="https://instagram.com/lbcuts"
                        className="text-xs sm:text-sm uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                    >
                        View More on Instagram
                    </a>
                </div>
            </Container>
        </section>
    );
}
