import React from "react";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/servicesData";

export function ServicesSection() {
    return (
        <section id="services" className="py-16 sm:py-24 bg-[#050505] w-full max-w-[100vw]">
            <Container>
                {/* Header */}
                <div className="mb-12 sm:mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 border-b border-white/10 pb-6 sm:pb-8">
                    <div className="text-left">
                        <span className="label-text mb-3 sm:mb-4 block text-left">Rate Card</span>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display text-white text-left">Service Menu</h2>
                    </div>
                </div>

                {/* Service Grid */}
                <div className="grid md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-8 sm:gap-y-12">
                    {services.map((service, idx) => (
                        <div
                            key={service.name}
                            className="group flex flex-col gap-2 sm:gap-3 pb-6 sm:pb-8 border-b border-white/5 hover:border-white/20 transition-colors duration-500"
                        >
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0">
                                <h3 className="text-lg sm:text-xl md:text-2xl text-white font-medium group-hover:pl-2 transition-all duration-300">
                                    {service.name}
                                </h3>
                                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-white/40">Book via Squire</span>
                            </div>
                            <p className="text-white/50 leading-relaxed text-sm sm:text-base max-w-md">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 sm:mt-16 text-center">
                    <a
                        href="#booking"
                        className="inline-block border-b border-white/30 pb-1 text-xs sm:text-sm uppercase tracking-widest text-white/60 hover:text-white hover:border-white transition-all duration-300"
                    >
                        View Full Pricing & Availability
                    </a>
                </div>
            </Container>
        </section>
    );
}

