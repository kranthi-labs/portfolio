import { cn } from "@/lib/cn";

type Props = {

    children: React.ReactNode;

    className?: string;

};

const Card = ({
    children,

    className,
}: Props) => {

    return (

        <div
            className={cn(
                "rounded-3xl border border-border bg-card p-8",
                className
            )}
        >
            {children}
        </div>

    );

};

export default Card;