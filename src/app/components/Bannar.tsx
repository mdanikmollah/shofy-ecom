import React from 'react'
import Container from './Container'
import { banner } from '../constants'
import Image from 'next/image'
import Button from './Button'
import { GoArrowRight } from 'react-icons/go'

const Bannar = () => {
  return (
    <div className='bg-[#115061] py-20 text-themeWhite'>
      <Container className='flex flex-col gap-5 md:flex-row md:items-center justify-between'>
        <div className="flex flex-col gap-5">
          <p className='text-base font-semibold'>{banner?.priceText}</p>
          <h2 className='text-5xl font-bold max-w-[500px]'>{banner?.title}</h2>
          <p className='text-lg font-bold'>
            {banner?.textOne} {" "} <span className='text-lightYellow mx-1'>{banner?.offerPrice}</span>
            {banner?.textTwo}
          </p>
          <Button 
            href={banner?.buttonLink} 
            className="flex items-center gap-1 bg-themeWhite text-black rounded-md w-32 px-0 justify-center text-sm font-semibold hover:bg-transparent hover:text-themeWhite py-3 border border-transparent hover:border-white/40 duration-200">
              Shop Now 
              <GoArrowRight className='text-lg'/>
          </Button>
        </div>
        <Image src={banner?.image} alt="bannerImage"/>
      </Container>
    </div>
  )
}

export default Bannar