export function FiIcon({
    name,
    size,
    className = "",
}: {
    name: string;
    size?: number;
    className?: string;
}) {
    return (
        <i
            className={`fi-rr-${name} ${className}`}
            style={size ? { fontSize: size } : undefined}
            aria-hidden="true"
        />
    );
}