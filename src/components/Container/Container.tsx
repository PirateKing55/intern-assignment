// Container.tsx
import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

const Container = ({ children, className }: ContainerProps) => {
    return (
        <div className={`size-full bg-background ${className} min-h-screen`}>
            {children}
        </div>
    );
};

export default Container;
