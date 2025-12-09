import React from "react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";

export function HoursLocationSection() {
    return (
        <section id="location" className="py-16 sm:py-24 bg-white text-black overflow-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24">
                    {/* Info Side */}
                    <div className="flex flex-col justify-center">
                        <span className="label-text text-black/40 mb-6 sm:mb-8 block">Visit Us</span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mb-8 sm:mb-12">
                            Fishtown<br />Headquarters
                        </h2>

                        <div className="space-y-8 sm:space-y-12">
                            {/* Address */}
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">Location</h3>
                                <p className="text-base sm:text-xl leading-relaxed max-w-sm">
                                    {siteConfig.addressLines.map((line) => (
                                        <span key={line} className="block">{line}</span>
                                    ))}
                                </p>
                            </div>

                            {/* Hours */}
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">Hours</h3>
                                <div className="space-y-2 text-base sm:text-lg">
                                    {siteConfig.hours.map((item) => (
                                        <div key={item.label} className="flex justify-between max-w-sm border-b border-black/10 pb-2">
                                            <span className="text-black/60">{item.label}</span>
                                            <span className="font-medium">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Contact */}
                            <div>
                                <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-3 sm:mb-4">Contact</h3>
                                <a
                                    href={siteConfig.phoneHref}
                                    className="text-xl sm:text-2xl font-display hover:opacity-60 transition-opacity"
                                >
                                    {siteConfig.phoneDisplay}
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Map Side */}
                    <div className="relative h-[350px] sm:h-[450px] lg:h-auto bg-neutral-100 grayscale hover:grayscale-0 transition-all duration-700 rounded-lg overflow-hidden">
                        <iframe
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            scrolling="no"
                            marginHeight={0}
                            marginWidth={0}
                            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=2731%20E.%20Cumberland%20St%20Philadelphia,%20PA%2019125+(LB%20Cuts)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                            className="absolute inset-0 w-full h-full"
                            title="LB Cuts Location"
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}
