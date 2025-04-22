import { ZapIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2">
      <div className="p-1 bg-primary/10 rounded">
        <ZapIcon className="w-4 h-4 text-primary" />
      </div>
      <span className="text-xl font-bold font-mono">
        ZFit<span className="text-primary">-</span>AI
      </span>
    </Link>
  );
};

export default NavLogo;
