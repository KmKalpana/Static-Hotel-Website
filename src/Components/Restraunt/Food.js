import React from 'react'
import './food.css'
import img from './images/img7.jpg'
// import ImageSlider from './Slider'
// import { Image } from './image'
const Food = () => {
  return (
    <>
      <div className='conten' id='restraunt'>
        <img src={img} className='first_food' alt='restraunt' />
        <p className='second_food'>
          <h2>About
          </h2>
          <span>Inspired by the great traditions of French gastronomy, chef Jean Imbert creates a dining experience that transcends time and place, returning you to the soulful origins of French dining. The chef makes a tribute to the rich history of our unique restaurant, while giving it a vibrant new glow.We provides the cultural food and pahadi khana.
          </span>
        </p>
        {/** <ImageSlider slides={Image} /> */}
      </div>
    </>
  )
}
export default Food
