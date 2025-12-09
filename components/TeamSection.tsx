import React from "react";
import { Container } from "@/components/ui/Container";
import { team } from "@/lib/teamData";

export function TeamSection() {
    return (
        <section id="team" className="py-16 sm:py-24 bg-[#080808] overflow-hidden">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 sm:mb-16 border-b border-white/5 pb-6 sm:pb-8">
                    <div>
                        <span className="label-text mb-3 sm:mb-4 block">The Atelier</span>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-display text-white">Barbers</h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8">
                    {team.map((member, idx) => (
                        <div
                            key={member.name}
                            className="group flex flex-col items-center text-center space-y-2 sm:space-y-4"
                        >
                            {/* Portrait Placeholder */}
                            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-40 md:h-40 rounded-full bg-neutral-900 border border-white/10 group-hover:border-white/30 transition-all duration-500 overflow-hidden grayscale group-hover:grayscale-0 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-xl sm:text-2xl md:text-3xl italic">
                                    {member.name.charAt(0)}
                                </div>
                            </div>

                            <div className="space-y-0.5 sm:space-y-1">
                                <h3 className="text-sm sm:text-base md:text-lg text-white font-medium">{member.name}</h3>
                                <p className="text-[8px] sm:text-[10px] uppercase tracking-widest text-white/40">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
