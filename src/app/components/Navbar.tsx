import React from "react";
import { Inter } from "next/font/google";
import Link from "next/link";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });
function Navbar() {
  return (
    <nav className={`${inter.className} relative right-10 w-[1440px] h-[67px]`}>
      <ul className="absolute w-[283px] h-[24px] top-[66px]">
        <Link
          href="/"
          className="absolute left-[1088px]  text-sm md:text-xl lg:text-[20px] sm:text-xl "
        >
          Works
        </Link>

        <Link
          href="/"
          className="absolute left-[1201px]  text-sm md:text-xl lg:text-[20px] sm:text-xl  "
        >
          Blog
        </Link>

        <Link
          href="/"
          className="absolute left-[1294px] text-sm md:text-xl lg:text-[20px] sm:text-xl "
        >
          Contact
        </Link>
      </ul>
     
    </nav>
    
  );
}

export default Navbar;