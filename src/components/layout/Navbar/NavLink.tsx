type Props = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: Props) => {
  return (
    <a
      href={href}
      className="
        text-sm
        font-medium
        text-zinc-400
        transition-colors
        duration-200
        hover:text-white
      "
    >
      {children}
    </a>
  );
};

export default NavLink;