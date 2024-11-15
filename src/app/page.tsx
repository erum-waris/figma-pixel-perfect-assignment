import React from 'react'
import HeroSection from './components/HeroSection'
import SectionRecentPost from './components/SectionRecentPost'
import FeatureCard from './components/FeatureWorkSection'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function Home() {
  return (
    
    
    <div className="mx-auto w-[1440px] h-[2453px]">
           <Navbar />
   <HeroSection />
   <SectionRecentPost/>
   <FeatureCard/>
   <Footer/>
    </div>
  )
}

export default Home