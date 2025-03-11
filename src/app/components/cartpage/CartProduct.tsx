import React from 'react'
import { ProductType } from '../../../../type'
import Image from 'next/image'
import Link from 'next/link'

const CartProduct = ({product}:{product:ProductType}) => {
  return (
    <div className='flex py-6 sm:py-10'>
        <Link 
          href={{
            pathname: `/products/${product?.id}`,
            query: { id: product?.id },
          
       }}
       className='h-24 w-24 sm:h-48 sm:w-48 border border-skycolor/30 hover:border-skyColor overflow-hidden flex items-center justify-center rounded-md'
       >
       <Image
         src={product?.images[0]}
         alt="product-image"
         width={500}
         height={500}
         priority={true} 
         className='w-full h-full p-2 rounded-md object-contain bg-[#f7f7f7] hover:scale-110 duration-200'
        />
       </Link>
       {/* Details */}
    </div>
  )
}

export default CartProduct