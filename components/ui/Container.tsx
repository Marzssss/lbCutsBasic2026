import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`mx-auto max-w-7xl px-6 md:px-12 lg:px-16 ${className}`}>
            {children}
        </div>
    );
}
