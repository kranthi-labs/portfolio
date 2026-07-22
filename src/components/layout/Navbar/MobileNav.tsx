import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <button
      className="
      md:hidden
      rounded-lg
      p-2
      hover:bg-zinc-800
      "
    >
      <Menu />
    </button>
  );
};

export default MobileNav;