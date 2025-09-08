import React from 'react'
import HeroSection from '../components/homepage/HeroSection'
import Aboutcomponent from '../components/homepage/About'
import Services from '../components/homepage/Services'
import Testimonials from '../components/homepage/Testimonials'
import Fleet from '../components/homepage/Fleet'

function Homepage() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Aboutcomponent />
      <Fleet />
      <Testimonials />
      
    </div>
  )
}

export default Homepage