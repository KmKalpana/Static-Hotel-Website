import React, { useState } from 'react'
import './slider.css'
import { Image } from './image'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {Image.map((slide, index) => {
        return (
          <div id='main' key={index} className={index === current ? 'slide active' : 'slide'}>
            <div key={index}>
              {index === current && (
                <img src={slide.imgsrc} className='image' />
              )}
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ImageSlider
