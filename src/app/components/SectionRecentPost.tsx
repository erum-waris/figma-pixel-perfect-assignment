import Link from 'next/link'
import React from 'react'
import RecentPost from './RecentPost'

function SectionRecentPost() {
  return (
    <section className="absolute top-[665px] w-[1440px] h-[502px] bg-recentBg">
    <div className="flex justify-between">
    <h1 className='w-[120px] h-[32px] absolute top-[26px] left-[237px] text-[22px] font-heebo font-500 leading-[32.31px]'>
      Recent Post
    </h1>

     <Link href="/" className='w-[77px] h-[32px] absolute top-[26px] left-[1168px] text-[#F98585] font-heebo text-[22px] font-500 leading-[32.31px]'>View all</Link>

    
  </div>
  <div className='flex flex-col lg:flex-row mx-4 md:mx-14 lg:mx-40 gap-12 h-auto'>
    <div className="absolute left-[238px] top-[78px]">
    <RecentPost />
    </div>
    <div className="absolute left-[763px] top-[78px]">
    <RecentPost />
    </div>
  
  </div>
    
          </section>
  )
}

export default SectionRecentPost