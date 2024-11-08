import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import {Link} from 'react-scroll'
function Hero() {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>Get Your Pensions and VAT Reports Together</h1>
        <p> Combining your pensions and VAT reports with Wende's company can help you keep track of your money, putting you in control of your finances.</p>
        <Link to='about' offset={-150} className='btn' >Find Out more<img src={dark_arrow} alt="" /></Link>
      </div>

      
    </div>
  )
}

export default Hero
