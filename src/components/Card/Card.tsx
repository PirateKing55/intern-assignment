import React from 'react'

interface CardProps extends React.HTMLProps<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

function Card({ children, className, ...props }: CardProps) {
    return (
        <div className={`${className}`} {...props}>
            {children}
        </div>
    )
}

export default Card
