import { cn } from "@/lib/cn";
import Container from "../Container";

type Props = {
  id?: string;

  children: React.ReactNode;

  className?: string;
};

const Section = ({
  id,

  children,

  className,
}: Props) => {
  return (
    <section
      id={id}
      className={cn(
        "py-24 md:py-32",
        className
      )}
    >
      <Container>{children}</Container>
    </section>
  );
};

export default Section;