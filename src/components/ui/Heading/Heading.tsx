import { cn } from "@/lib/cn";

type Props = {
  title: string;

  subtitle?: string;

  align?: "left" | "center";

  className?: string;
};

const Heading = ({
  title,

  subtitle,

  align = "left",

  className,
}: Props) => {
  return (
    <div
      className={cn(
        align === "center"
          ? "text-center"
          : "text-left",
        className
      )}
    >
      <h2 className="text-4xl font-bold tracking-tight text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 max-w-2xl text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default Heading;