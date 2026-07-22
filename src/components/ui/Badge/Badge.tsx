import { cn } from "@/lib/cn";

type Props = {

    children: React.ReactNode;

    className?: string;

};

const Badge = ({
    children,

    className,
}: Props) => {
    return (

        <span
            className={cn(
                "rounded-full border border-border bg-card px-4 py-2 text-sm text-muted",
                className
            )}
        >
            {children}
        </span>

    );
};

export default Badge;