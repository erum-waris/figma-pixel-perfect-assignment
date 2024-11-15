import React from 'react'
import HeroSection from './components/HeroSection'
import SectionRecentPost from './components/SectionRecentPost'
import FeatureCard from './components/FeatureWorkSection'

function Home() {
  return (
    // converted pixels into rem 
    
    <div className="mx-auto w-[1440px] h-[2453px]">
   
   <HeroSection />
   <SectionRecentPost/>
   <FeatureCard/>
      
    </div>
  )
}

export default Home