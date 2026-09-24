type TechBadgeProps = {
    children: React.ReactNode;
};

export function TechBadge({ children }: TechBadgeProps) {
    return (
        <span className="inline-flex items-center rounded-lg border-2 border-dotted border-accent px-2 py-1 text-[12px] leading-4 text-muted-foreground">
            {children}
        </span>
    );
}