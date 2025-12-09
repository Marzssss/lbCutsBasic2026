import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
    return (
        <div className={`mx-auto max-w-7xl w-full px-4 sm:px-8 md:px-12 lg:px-16 box-border ${className}`}>
            {children}
        </div>
    );
}
