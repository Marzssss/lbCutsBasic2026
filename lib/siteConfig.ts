export const siteConfig = {
    businessName: "LB Cuts",
    tagline: "Premium men's grooming & barbershop in Philadelphia with 20+ years of professional experience.",
    description: "LB Cuts offers a premium grooming experience in Fishtown, focusing on great cuts and conversation. Winner of Philly Favorite.",
    addressLines: ["2731 E. Cumberland St", "Philadelphia, PA 19125"],
    phoneDisplay: "(267) 388-3003",
    phoneHref: "tel:12673883003",
    hours: [
        { label: "Mon", value: "Closed" },
        { label: "Tue–Fri", value: "9 AM – 8 PM" },
        { label: "Sat", value: "9 AM – 3 PM" },
        { label: "Sun", value: "Closed" },
    ],
    parkingNote: "FREE PARKING",
    socials: {
        instagram: "#",
        facebook: "#",
        x: "#",
    },
    bookingLink: process.env.NEXT_PUBLIC_SQUIRE_BOOKING_URL || "#",
} as const;
