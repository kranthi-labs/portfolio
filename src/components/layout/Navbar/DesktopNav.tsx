import { NAVIGATION } from "@/content/navigation";
import NavLink from "./NavLink";

const DesktopNav = () => {
  return (
    <nav className="hidden items-center gap-8 md:flex">
      {NAVIGATION.map((item) => (
        <NavLink
          key={item.title}
          href={item.href}
        >
          {item.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default DesktopNav;