import React from "react";
import { Container } from "@/components/ui/Container";
import { SquireBookingWidget } from "./SquireBookingWidget";

export function BookingSection() {
    return (
        <section id="booking" className="py-24 bg-[#050505]">
            <Container>
                <div className="flex flex-col items-center text-center mb-16">
                    <span className="label-text mb-4">Appointments</span>
                    <h2 className="text-3xl md:text-5xl font-display text-white mb-6">
                        Secure Your Spot
                    </h2>
                    <p className="text-white/50 max-w-lg mx-auto">
                        Select your preferred barber and time. We recommend booking 2-3 days in advance for peak hours.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white/[0.02] border border-white/10 rounded-2xl overflow-hidden min-h-[600px] relative">
                        {/* Loading/Fallback State (Visual only, widget handles actual loading) */}
                        <div className="absolute inset-0 flex items-center justify-center -z-10">
                            <span className="text-white/20 animate-pulse">Loading Schedule...</span>
                        </div>

                        <SquireBookingWidget />
                    </div>
                </div>
            </Container>
        </section>
    );
}

