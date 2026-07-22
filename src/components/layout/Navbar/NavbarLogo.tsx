import { Link } from "react-router-dom";

import { PROFILE } from "@/content/profile";

const NavbarLogo = () => {
  return (
    <Link
      to="/"
      className="text-xl font-bold tracking-tight transition hover:opacity-80"
    >
      {PROFILE.name.split(" ")[0]}
      <span className="text-blue-500">.</span>
    </Link>
  );
};

export default NavbarLogo;