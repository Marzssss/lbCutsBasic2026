import React from "react";
import { Container } from "@/components/ui/Container";

const features = [
    {
        title: "Precision Fades",
        text: "Clean lines and seamless blends tailored to your head shape.",
    },
    {
        title: "Real Connection",
        text: "A shop where conversation is as authentic as the craft.",
    },
    {
        title: "Consistency",
        text: "The same high-quality cut, every single time you visit.",
    },
];

export function AboutSection() {
    return (
        <section className="py-16 sm:py-24 bg-[#080808] border-t border-white/5 w-full max-w-[100vw]">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 lg:gap-24 w-full">
                    {/* Left Column - Narrative */}
                    <div className="col-span-1 lg:col-span-5 text-left w-full max-w-full">
                        <span className="label-text mb-4 sm:mb-6 block text-left">About LB Cuts</span>

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-display text-white mb-6 sm:mb-8 leading-tight break-words max-w-full">
                            More than a cut. <br />
                            <span className="text-white/40 italic">A ritual.</span>
                        </h2>

                        <div className="space-y-4 sm:space-y-6 text-base sm:text-lg text-white/60 leading-relaxed max-w-full">
                            <p className="break-words">
                                LB Cuts wasn't founded to be just another barbershop. It was built to return to the fundamentals of men's grooming: consistency, craft, and community.
                            </p>
                            <p className="break-words">
                                Located in the heart of Fishtown, we treat barbering like tailoring. Every service is a private consultation, ensuring you walk out looking—and feeling—executive.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Why Clients Come Back */}
                    <div className="col-span-1 lg:col-span-7 flex flex-col justify-center text-left">
                        <span className="label-text mb-6 sm:mb-8 block lg:hidden text-left">The Standard</span>

                        <div className="grid gap-4 sm:gap-6">
                            {features.map((feature, idx) => (
                                <div
                                    key={feature.title}
                                    className="group p-4 sm:p-6 md:p-8 border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500 rounded-lg"
                                >
                                    <h3 className="text-lg sm:text-xl text-white font-medium mb-1 sm:mb-2 group-hover:translate-x-2 transition-transform duration-500 break-words">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/50 text-sm sm:text-base group-hover:translate-x-2 transition-transform duration-500 delay-75 break-words">
                                        {feature.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
