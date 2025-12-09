"use client";

import { useEffect } from "react";
import { siteConfig } from "@/lib/siteConfig";

export function SquireBookingWidget() {
    useEffect(() => {
        // IMPORTANT:
        // Do NOT invent Squire URLs.
        // Leave clear TODO comments where the real Squire code will go.
    }, []);

    return (
        <div className="space-y-6 text-center h-full flex flex-col justify-center items-center p-8">
            <p className="text-sm text-white/40 tracking-wide uppercase">
                Secure Booking via Squire
            </p>

            {/* Placeholder for the widget iframe/injection */}
            <div
                id="squire-booking-widget"
                className="w-full max-w-md aspect-[4/5] rounded-xl bg-white/[0.02] border border-white/10 flex flex-col items-center justify-center gap-4"
            >
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center">
                    <span className="text-white/50 text-xl">S</span>
                </div>
                <span className="text-white/30 text-xs tracking-widest uppercase">Widget Loading...</span>
            </div>

            <div className="pt-4">
                <a
                    href={siteConfig.bookingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border-b border-white/30 pb-1 text-xs uppercase tracking-widest text-white/50 hover:text-white hover:border-white transition-all duration-300"
                >
                    Or Book Directly on Squire
                </a>
            </div>
        </div>
    );
}
