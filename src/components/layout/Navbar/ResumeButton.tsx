import { Download } from "lucide-react";

import { PROFILE } from "@/content/profile";

const ResumeButton = () => {
  return (
    <a
      href={PROFILE.resume}
      download
      className="
      hidden
      md:inline-flex
      items-center
      gap-2
      rounded-lg
      border
      border-zinc-700
      px-4
      py-2
      text-sm
      transition
      hover:bg-zinc-800
      "
    >
      <Download size={16} />

      Resume
    </a>
  );
};

export default ResumeButton;