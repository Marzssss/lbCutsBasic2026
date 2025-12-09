import React from "react";
import { Container } from "@/components/ui/Container";
import { services } from "@/lib/servicesData";

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-[#050505]">
            <Container>
                {/* Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-8">
                    <div>
                        <span className="label-text mb-4 block">Rate Card</span>
                        <h2 className="text-4xl md:text-5xl font-display text-white">Service Menu</h2>
                    </div>
                </div>

                {/* Service Grid */}
                <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
                    {services.map((service, idx) => (
                        <div
                            key={service.name}
                            className="group flex flex-col gap-3 pb-8 border-b border-white/5 hover:border-white/20 transition-colors duration-500"
                        >
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-xl md:text-2xl text-white font-medium group-hover:pl-2 transition-all duration-300">
                                    {service.name}
                                </h3>
                                <span className="text-xs uppercase tracking-widest text-white/40">Book via Squire</span>
                            </div>
                            <p className="text-white/50 leading-relaxed text-sm md:text-base max-w-md">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <a
                        href="#booking"
                        className="inline-block border-b border-white/30 pb-1 text-sm uppercase tracking-widest text-white/60 hover:text-white hover:border-white transition-all duration-300"
                    >
                        View Full Pricing & Availability
                    </a>
                </div>
            </Container>
        </section>
    );
}

