import React from 'react';
import Image from 'next/image';

interface Proptype{
   href: string;
   position:number;
}
function FeatureWork(props: Proptype) {
  return (
   <section className='flex '>
     <div className={`relative top-${props.position}px left-[237px] rounded-[6px]`}>
        <Image src={props.href} alt='Designing' width={246} height={180}
        className='w-[246px] h-[180px]'/>

</div>
<div className='w-[623.46px] h-[272.1px] relative left-[300px]'>
    <h2 className='text-[30px] w-[305px] h-[44px] font-heebo font-bold leading-[44.06px]'>Designing Dashboards</h2>
   <div className='flex'>
   <span className='bg-[#F98585] w-[68px] h-[24px] absolute top-[56.1px] left-[1.46px] rounded-[50px] font-heebo text-[18px] text-white font-bold leading-[26.44px] text-center'>2020</span>
   <p className='w-[97px] h-[29px] font-heebo text-[20px] font-normal leading-[29.38px] absolute top-[52.1px] left-[92.46px] flex justify-center items-center'> Dashboard</p>
   </div>
    <p  className="w-[622px] h-[170px] absolute top-[102.1px] left-[1.46px] font-heebo text-[18px] font-light leading-[26.44px]">
    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
    </p>
</div>
   </section>
  )
}

export default FeatureWork