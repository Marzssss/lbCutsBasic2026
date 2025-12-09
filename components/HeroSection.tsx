import React from "react";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden">
            {/* Background - Deep Slate / Texture */}
            <div className="absolute inset-0 bg-[#050505] z-0" />
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] z-0 pointer-events-none" />

            {/* Subtle Spotlight */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-white/[0.03] blur-[120px] rounded-full pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <Container className="relative z-10 w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                {/* Left Content - Editorial Typography */}
                <div className="col-span-12 lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <div className="mb-6 flex items-center gap-3 animate-fade-in-up">
                        <span className="h-[1px] w-8 bg-white/30" />
                        <span className="text-[11px] uppercase tracking-[0.2em] text-white/60 font-medium">
                            Est. Philadelphia
                        </span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] font-bold tracking-[-0.03em] text-white mb-8 animate-fade-in-up delay-100">
                        Precision Cuts. <br />
                        <span className="font-display font-normal italic text-white/80">Tailored For You.</span>
                    </h1>

                    <p className="text-lg text-white/60 max-w-md leading-relaxed mb-10 animate-fade-in-up delay-200">
                        A modern atelier for men’s grooming. Experience consistency, craft, and conversation in Fishtown.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in-up delay-300">
                        <a
                            href="#booking"
                            className="bg-white text-black px-8 py-4 rounded-full font-medium tracking-wide hover:bg-gray-200 transition-colors duration-300"
                        >
                            Book Appointment
                        </a>
                        <a
                            href="#team"
                            className="px-8 py-4 rounded-full font-medium tracking-wide text-white border border-white/20 hover:bg-white/5 transition-colors duration-300"
                        >
                            View Barbers
                        </a>
                    </div>
                </div>

                {/* Right Image - Monochrome Portrait */}
                <div className="col-span-12 lg:col-span-6 relative h-[60vh] lg:h-[75vh] w-full animate-soft-slide delay-200">
                    <div className="absolute inset-0 bg-zinc-900 rounded-[2rem] overflow-hidden grayscale contrast-[1.1] brightness-[0.9]">
                        {/* Placeholder for Shop Image */}
                        <div className="w-full h-full bg-[linear-gradient(45deg,#111,#222)] opacity-80" />
                    </div>

                    {/* Floating Badge */}
                    <div className="absolute bottom-8 left-8 bg-black/80 backdrop-blur-md border border-white/10 p-6 rounded-xl max-w-[200px]">
                        <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Current Wait</p>
                        <p className="text-xl text-white font-display italic">Accepting Walk-ins</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
