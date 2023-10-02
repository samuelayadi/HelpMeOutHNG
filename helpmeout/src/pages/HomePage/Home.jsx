import React from 'react'
import NavBar from '../../components/SharedLayout/NavBar'
import HeroSection from '../../components/Hero/HeroSection'
import FeaturedSection from '../../components/FeaturedSection'
import HowItWorks from '../../components/HowItWorks'
import Footer from '../../components/SharedLayout/Footer'

const Home = () => {
  return (
    <div>
        <NavBar/>
        <HeroSection/>
        <FeaturedSection/>
        <HowItWorks/>
        <Footer/>
    </div>
  )
}

export default Home