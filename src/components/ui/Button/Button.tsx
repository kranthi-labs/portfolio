import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/cn";

const buttonVariants = cva(
    "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-300",
    {
        variants: {
            variant: {
                primary:
                    "bg-primary text-white hover:bg-primary-hover",

                outline:
                    "border border-border hover:bg-card",

                ghost:
                    "hover:bg-card",
            },

            size: {
                sm:
                    "h-9 px-4 text-sm",

                md:
                    "h-11 px-6",

                lg:
                    "h-14 px-8 text-lg",
            },
        },

        defaultVariants: {
            variant: "primary",

            size: "md",
        },
    }
);

type ButtonProps =
    React.ButtonHTMLAttributes<HTMLButtonElement> &
    VariantProps<typeof buttonVariants>;

const Button = ({
    className,

    variant,

    size,

    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(
                buttonVariants({
                    variant,

                    size,
                }),

                className
            )}
            {...props}
        />
    );
};

export default Button;