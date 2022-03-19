import React from 'react'
import './about.css'
import img from './Image/img3.jpeg'
const About = () => {
  return (
    <>
      <div className='cont' id='about'>
        <img src={img} className='im' alt='about' />
        <p className='sec'>
          <h2>About the Restro
          </h2>
          <span>Inspired by the great traditions of French gastronomy, chef Jean Imbert creates a dining experience that transcends time and place, returning you to the soulful origins of French dining. The chef makes a tribute to the rich history of our unique restaurant, while giving it a vibrant new glow.We provides the cultural food and pahadi khana.
            Jean Imbert unearths ancient recipes – some 250 years old – to celebrate France’s rich culinary heritage. He presents a playful ode to heritage cuisine, one that crosses trends and centuries while remaining deeply modern.
          </span>
        </p>
      </div>
    </>
  )
}
export default About
