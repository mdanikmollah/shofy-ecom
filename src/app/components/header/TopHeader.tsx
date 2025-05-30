import Container from '../Container'
import React from 'react'
import { CiDeliveryTruck } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const TopHeader = () => {
  return (
    <div className='bg-[#010f1c] text-gray-200'>
      <Container className='flex items-center justify-between'>
        <p className='w-full md:w-auto text-sm flex items-center justify-center md:justify-normal font-medium py-1 '><CiDeliveryTruck className='text-[#ffb342] text-2xl mr-1'/> FREE Express Shipping On Orders $570+</p>
        <div className="hidden md:inline-flex items-center text-sm text-white">
         <p className='headerTopMenu'>English <IoIosArrowDown className='mt-1'/></p>
         <p className='headerTopMenu'>USD <IoIosArrowDown className='mt-1'/></p>
         <p className='headerTopMenu'>Setting <IoIosArrowDown className='mt-1'/></p>
        </div>
      </Container>
    </div>
  )
}

export default TopHeader