import React from 'react'
import { ProductType } from '../../../../type'
import Image from 'next/image'
import Link from 'next/link'
import PriceFormat from '../PriceFormat'
import AddToCartButton from '../AddToCartButton'
import { IoClose } from 'react-icons/io5'
import { useDispatch } from 'react-redux'
import { removeFromCart } from '@/app/redux/shofySlice'
import toast from 'react-hot-toast'
import { FaCheck } from 'react-icons/fa'

const CartProduct = ({product}:{product:ProductType}) => {
  const dispatch = useDispatch()
  const handleRemoveProduct = () => {
    dispatch(removeFromCart(product?.id));
    toast.success(`${product?.title.substring(0,20)} Deleted Succesfully!`)
  }
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
       <div className="ml-4 sm:ml-6 flex flex-1 flex-col justify-between">
        <div className="relative pr-9 sm:grid sm:grid-cols-4 sm:pr-0">
          <div className="flex flex-col gap-1 col-span-5">
            <h3 className='text-base font-semibold w-full'>{product?.title.substring(0,80)}</h3>
            <p>
              Brand: <span className='font-medium'>{product?.brand}</span>
            </p>
            <p>
              Category: <span className='font-medium capitalize'>{product?.category}</span>
            </p>
            <div className="flex items-center gap-6 mt-2">
              <PriceFormat amount={product?.price * product?.quantity!}/>
              <AddToCartButton product={product}/>
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="absolute right-0 top-0">
              <button onClick={handleRemoveProduct} className='p-2 text-gray-800 bg-gray-50 hover:bg-gray-100 hover:text-red-700'>
                <IoClose/>
              </button>
            </div>
          </div>
        </div>
        <div className="">
            {product?.availabilityStatus && (
              <p className='flex space-x-2 text-sm text-gray-700'>
                <FaCheck className='text-lg text-green-500'/>{" "} <span>In Stock</span>
              </p>
            )}
            <p>
              you are saving{" "}
              <PriceFormat className='text-green-500' amount={product?.price *  (product?.discountPercentage / 100) * product?.quantity!}/>
            </p>
          </div>
       </div>
    </div>
  )
}

export default CartProduct