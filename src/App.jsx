import React, { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/programs/Programs'
import Title from './components/title/Title'
import About from './components/about/About'
import Testimonail from './components/testimonials/Testimonail'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import FAQ from './components/faq/FAQ'

function App() {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className='container'>
        <Title subTitle= 'Our Services' title ='What We Provide'/>
      <Programs/>
      <About/>
     
      <Title subTitle= 'TESTIMONAILS' title ='What Customers Say'/>
      <Testimonail/>
      <FAQ/>
      <Title subTitle= 'Contact Us' title ='Get in Touch'/>
      <Contact/>
      <Footer/>

      </div>
    
    </div>
  )
}

export default App
