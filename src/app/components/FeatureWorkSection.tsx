import React from 'react'
import FeatureWork from './FeatureWork'

function FeatureCard() {
  return (
    <div className="flex flex-col w-[919px] h-[934.2px] absolute top-[1246px]">
         <h2 className='leading-[32.31px] font-heebo font-[500] text-[22px] relative left-[237px] text-black pb-8'>Featured Works</h2>
         <div className="flex flex-col gap-16">
            <FeatureWork href="/images/feature-img-1.svg" position={1310} />
            <FeatureWork href="/images/feature-img-2.svg" position={1601} />
            <FeatureWork href="/images/feature-img-3.svg" position={1892} />
         </div>
    </div>
  )
}

export default FeatureCard