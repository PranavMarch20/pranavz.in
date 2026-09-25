import type { ComponentType, SVGProps } from "react";

type TechBadgeProps = {
    children: React.ReactNode;
    Icon: ComponentType<SVGProps<SVGSVGElement>>;
    effect: boolean;
};

export function TechBadge({ children, Icon, effect }: TechBadgeProps) {
    return (
        <span className={`group inline-flex items-center ${effect ? "gap-0" : "gap-1.5"} cursor-default rounded-md shadow-xs border border-dashed border-accent/40 bg-accent/7 px-2 py-1.5 text-[12px] font-semibold leading-4 text-muted-foreground outline-none transition-all duration-300 ease-out hover:scale-[1.03] hover:gap-1.5 hover:border-accent/40 hover:bg-accent/7 hover:shadow-sm focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:gap-1.5 hover:delay-0`}>
            <Icon className="size-4 rounded-xs"/>
            {children}
        </span>
    );
}