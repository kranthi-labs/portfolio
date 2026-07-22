import NavbarLogo from "./NavbarLogo";
import DesktopNav from "./DesktopNav";
import ResumeButton from "./ResumeButton";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header
      className="
      sticky
      top-0
      z-50
      border-b
      border-zinc-800
      bg-zinc-950/80
      backdrop-blur
      "
    >
      <div
        className="
        mx-auto
        flex
        h-18
        max-w-7xl
        items-center
        justify-between
        px-6
        "
      >
        <NavbarLogo />

        <DesktopNav />

        <div className="flex items-center gap-4">
          <ResumeButton />

          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Navbar;