import Link from 'next/link';
import React from 'react'
import { FaFacebookSquare, FaInstagram,FaTwitter,FaLinkedin } from "react-icons/fa";
import { Heebo } from 'next/font/google';

const heebo = Heebo({ subsets: ['latin'] });

function Footer() {
  return (
    <div className=" mx-auto w-[1440px] relative top-[2239px] bg-myFooter h-[243px] py-10">


        <Link href="/" className="text-[30px] text-[#21243D]  absolute top-[2288px] left-[578px]"> <FaFacebookSquare /></Link>
            <Link href="/" className="text-[30px] text-[#21243D] absolute top-[2288px] left-[659px]"> <FaInstagram /></Link>
            <Link href="/" className="text-[30px] text-[#21243D]  absolute top-[2288px] left-[740px]"> <FaTwitter /> </Link>
            <Link href="/" className="text-[30px] text-[#21243D]  absolute top-[2288px] left-[827px]"> <FaLinkedin /></Link>
      
        <p className={`${heebo.className} absolute left-[543px] top-[2354.67px] leading-[32.31px] font-[500] w-[354px] h-[32px] text-myBlack text-[22px]`}> Copyright ©2020 All rights reserved </p>
    </div>
  )
}

export default Footer