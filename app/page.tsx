import React from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TeamSection } from "@/components/TeamSection";
import { BookingSection } from "@/components/BookingSection";
import { GallerySection } from "@/components/GallerySection";
import { HoursLocationSection } from "@/components/HoursLocationSection";
import { SiteFooter } from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg-0)] text-white selection:bg-white/20 selection:text-white">
      <Header />

      <div className="flex flex-col">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TeamSection />
        <BookingSection />
        <GallerySection />
        <HoursLocationSection />
      </div>

      <SiteFooter />
    </main>
  );
}
