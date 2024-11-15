import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
import { Heebo } from 'next/font/google';

const heebo = Heebo({ subsets: ['latin'] });

function Footer() {
  return (
    <div className=" w-[1440px] relative bg-myFooter h-[243px] mx-auto top-[1560px]">
    <Link href="/" className="text-[30px] text-[#21243D]  absolute left-[578px]"> <FaFacebookSquare /></Link>
        <Link href="/" className="text-[30px] text-[#21243D] absolute left-[659px]"> <FaInstagram /></Link>
        <Link href="/" className="text-[30px] text-[#21243D]  absolute left-[740px]"> <FaTwitter /> </Link>
        <Link href="/" className="text-[30px] text-[#21243D]  absolute left-[827px]"> <FaLinkedin /></Link>
  
    <p className={`${heebo.className} absolute left-[543px] leading-[32.31px] pt-16 font-[500] w-[354px] h-[32px] text-myBlack text-[22px]`}> Copyright ©2020 All rights reserved </p>
</div>
  )
}

export default Footer