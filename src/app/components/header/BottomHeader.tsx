import React from 'react'
import Container from '../Container'
import { navigation } from '@/app/constants'
import Link from 'next/link'

const BottomHeader = () => {
  return (
    <div className='border-b border-b-gray-400'>
       <Container className='flex items-center justify-between py-1'>
          <div className="text-xs md:text-sm font-medium flex items-center gap-2 md:gap-5">
            {navigation?.map((item)=>(
               <Link 
                key={item?.title}
                href={item?.href}
                className='hover:text-themeColor duration-200'
                >
                 {item?.title}
               </Link> 
            ))}
            <Link 
             href={"/signin"}
             className='hover:text-themeColor duration-200'
             >
              Please login to view your cart
            </Link>
          </div>
          <p className='hidden md:inline-flex text-xs text-gray-400 font-medium'>Hotline: <span className='text-black'>+88 01752689765</span></p>
       </Container> 
    </div>
  )
}

export default BottomHeader