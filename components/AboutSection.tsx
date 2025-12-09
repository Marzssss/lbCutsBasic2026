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
        <section className="py-24 bg-[#080808] border-t border-white/5">
            <Container>
                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
                    {/* Left Column - Narrative */}
                    <div className="col-span-12 lg:col-span-5">
                        <span className="label-text mb-6 block">About LB Cuts</span>

                        <h2 className="text-3xl md:text-5xl font-display text-white mb-8 leading-tight">
                            More than a cut. <br />
                            <span className="text-white/40 italic">A ritual.</span>
                        </h2>

                        <div className="space-y-6 text-lg text-white/60 leading-relaxed">
                            <p>
                                LB Cuts wasn't founded to be just another barbershop. It was built to return to the fundamentals of men's grooming: consistency, craft, and community.
                            </p>
                            <p>
                                Located in the heart of Fishtown, we treat barbering like tailoring. Every service is a private consultation, ensuring you walk out looking—and feeling—executive.
                            </p>
                        </div>
                    </div>

                    {/* Right Column - Why Clients Come Back */}
                    <div className="col-span-12 lg:col-span-7 flex flex-col justify-center">
                        <span className="label-text mb-8 block lg:hidden">The Standard</span>

                        <div className="grid gap-6">
                            {features.map((feature, idx) => (
                                <div
                                    key={feature.title}
                                    className="group p-8 border border-white/5 hover:border-white/20 hover:bg-white/[0.02] transition-all duration-500 rounded-lg"
                                >
                                    <h3 className="text-xl text-white font-medium mb-2 group-hover:translate-x-2 transition-transform duration-500">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/50 text-sm md:text-base group-hover:translate-x-2 transition-transform duration-500 delay-75">
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
