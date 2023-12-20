import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function TopBar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        {/* <Image src="/assets/logo.svg" alt="Logo" width={28} height={28} /> */}

        <p className="text-heading3-bold text-light-1">CRUD</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <h3>Hello World</h3>
        </div>
      </div>
    </nav>
  );
}
