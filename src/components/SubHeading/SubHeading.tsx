interface SubHeadingProps {
    label: string;
    className?: string;
}

function SubHeading({ label, className }: SubHeadingProps) {
    return (
        <h1 className={`text-primary text-2xl font-medium mt-3 ${className}`}>{label}:</h1>
    )
}

export default SubHeading
