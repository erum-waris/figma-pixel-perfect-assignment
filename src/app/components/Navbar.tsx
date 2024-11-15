import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
function Navbar() {
  return (
    <nav className={`${inter.className} relative lg:top-[-2px] w-[1440px] h-[67px]`}>
      <ul className="relative w-[283px] h-[24px] top-[66px]">
        <Link
          href="/"
          className="absolute left-[1088px]  text-[20px] md:text-[28px] lg:text-[30px] sm:text-[24px] "
        >
          Works
        </Link>

        <Link
          href="/"
          className="absolute left-[1201px]  text-[20px] md:text-[28px] lg:text-[30px] sm:text-[24px]  "
        >
          Blog
        </Link>

        <Link
          href="/"
          className="absolute left-[1294px]  text-[20px] md:text-[28px] lg:text-[30px] sm:text-[24px] "
        >
          Contact
        </Link>
      </ul>
     
    </nav>
    
  );
}

export default Navbar;
