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
    <div className="bg-bg-light-color p-16 mt-52">
    <Services />
    </div>
    <div className="text-dark-color text-4xl font-bold text-center pt-16">How it works ?</div>
    <HowItWorks />
    
    <Companies />
    <Connections />
    </>
  )
}
