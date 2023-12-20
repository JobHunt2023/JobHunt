import React from 'react'
import { HeroSec } from '../components/homePage/HeroSec'
import { Services } from '../components/homePage/Services'
import { Companies } from '../components/homePage/Companies'
import { HowItWorks } from '../components/homePage/HowItWorks'
import Connections from '../components/profilepage/Connections'

export const Home = () => {
  return (
    <>
    <HeroSec />
    <div className="bg-[#E8E6DA50] p-16 mt-52">
    <Services />
    </div>
    <div className="text-[#3B564D] text-4xl font-bold text-center pt-16">How it works ?</div>
    <HowItWorks />
    
    <Companies />
    <Connections />
    </>
  )
}
