import Image from 'next/image'
import React from 'react'

function HeroSection() {
  return (
    <section className='w-[1440px] h-[800px] left-[-2.5px] pb-9'>
        <div className='font-heebo absolute top-[249px] left-[231px] w-[521px] h-[124px] leading-[61px]'>
            <h1 className='text-[48px] font-[900] mb-5'>Hi, I am John <br />
             Creative Technologist</h1>
            <p className='w-[497px] h-[66px] text-[1rem] leading-[23.5px] font-[400] mb-5 '>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <button className='mt-5 bg-[#F98585] w-[205px] h-[50px] rounded-[2px] flex justify-center items-center text-white hover:bg-[#AA5486] transition-colors duration-300 ease-linear' style={{boxShadow:"0 4px 4px 0 #4141418a"}}>Download Resume</button>
        </div>
        <div className='absolute top-[246px] left-[969px]  w-[292px] h-[299px] '>
        <Image
        src="/images/hero-image.svg"
        alt="hero image"
        width="300"
         height="300"
         className=' w-[292px] h-[299px]'
      />
        
        </div>
    </section>
  )
}

export default HeroSection