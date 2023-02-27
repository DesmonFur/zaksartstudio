import React from "react";
import Link from "next/link";

function Footer() {
  return (
    <div className="container mx-auto mt-12 flex h-24 items-center justify-center border-t-2 font-playFairDisplay">
      <span className="text-2xl">Zachary Zeoli</span>
      <div className="ml-12">
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
