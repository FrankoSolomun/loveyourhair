import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import { useRef } from 'react'

const divStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundSize: 'cover',
  height: '100%',
}
const slideImages = [
  {
    url: 'slide1.jpg',
  },
  {
    url: 'slide2.jpg',
  },
  {
    url: 'slide3.jpg',
  },
];

export default function Slideshow({ divRef1, divRef0 }) {


  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, .2], [0, -100])

  return (
    <div className="relative w-[350px] xs4:w-[390px] md:w-[550px] lg:w-[450px] xl:w-[550px] 2xl:w-[650px] 3xl:w-[650px] 4xl:w-[650px] 5xl:w-[800px] lg:ml-[30px] 2xl:ml-[30px] 3xl:ml-[45px] 4xl:ml-[75px] 5xl:ml-0 border-2 border-black" >
      <Slide
        duration={4000} // 8 seconds delay between slides
        prevArrow={<div style={{ color: 'red' }}><svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] 2xl:w-[60px] 3xl:w-[70px] 4xl:w-[80px] 5xl:w-[100px]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="15 6 9 12 15 18" />
        </svg></div>}
        nextArrow={<div style={{ color: 'blue' }}><svg xmlns="http://www.w3.org/2000/svg" className="w-[50px] 2xl:w-[60px] 3xl:w-[70px] 4xl:w-[80px] 5xl:w-[100px]" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <polyline points="9 6 15 12 9 18" />
        </svg></div>}
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} className='h-[410px] md:h-[500px] lg:h-[480px] xl:h-[550px] 2xl:h-[650px] 3xl:h-[650px] 4xl:h-[650px] 5xl:h-[800px]'>
            <motion.div
              className='z-20'
              style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
            </motion.div>

            <div className='bg-transparent w-full h-[30px] md:h-[30px] absolute bottom-[130px] z-10' ref={divRef1} />
          </div>
        ))}
      </Slide>
    </div>
  )
}

