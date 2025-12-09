import React from "react";
import { Container } from "@/components/ui/Container";
import { team } from "@/lib/teamData";

export function TeamSection() {
    return (
        <section id="team" className="py-24 bg-[#080808]">
            <Container>
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/5 pb-8">
                    <div>
                        <span className="label-text mb-4 block">The Atelier</span>
                        <h2 className="text-3xl md:text-5xl font-display text-white">Barbers</h2>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                    {team.map((member, idx) => (
                        <div
                            key={member.name}
                            className="group flex flex-col items-center text-center space-y-4"
                        >
                            {/* Portrait Placeholder */}
                            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-neutral-900 border border-white/10 group-hover:border-white/30 transition-all duration-500 overflow-hidden grayscale group-hover:grayscale-0 relative">
                                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-3xl italic">
                                    {member.name.charAt(0)}
                                </div>
                            </div>

                            <div className="space-y-1">
                                <h3 className="text-lg text-white font-medium">{member.name}</h3>
                                <p className="text-[10px] uppercase tracking-widest text-white/40">{member.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
