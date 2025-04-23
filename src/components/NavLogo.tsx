import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavLogo = () => {
  return (
    <Link href="/" className="flex items-center gap-2  ">
      <div className=" rounded">
        {/* <ZapIcon className="w-4 h-4 text-primary" /> */}
        <Image src={"/logo.png"} alt="ZFit" width={20} height={20} />
      </div>
      <span className="text-xl font-bold font-mono">
        ZFit<span className="text-primary">-</span>AI
      </span>
    </Link>
  );
};

export default NavLogo;
