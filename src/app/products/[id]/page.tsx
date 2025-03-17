import Container from '@/app/components/Container'
import ProductImages from '@/app/components/ProductImages';
import { getData } from '@/app/helper';
import React from 'react'
import { ProductType } from '../../../../type';
import ProductPrice from '@/app/components/ProductPrice';
import { MdStar } from 'react-icons/md';
import { FaRegEye } from 'react-icons/fa';
import PriceFormat from '@/app/components/PriceFormat';
import AddToCartButton from '@/app/components/AddToCartButton';
import { paymentImage } from '@/app/assets';
import Image from 'next/image';

interface Props {
  params:{
    id: string;
  };
}

const SingleProductPage = async({params}: Props) => {
  const { id } = params;
  const endpoint = `https://dummyjson.com/products/${id}`
  const product:ProductType = await getData(endpoint)
  
  
  
  return (
    <Container className='py-10 grid grid-cols-1 md:grid-cols-2 gap-10'>
      {/* Product Images */}
      <ProductImages images={product?.images}/>
      {/* Product Details */}
      <div className="flex flex-col gap-4">
        <h2 className='font-bold text-3xl'>{product?.title}</h2>
        <div className="flex items-center justify-between gap-5">
          <ProductPrice product={product}/>
          <div className="flex items-center gap-1"> 
            <div className="text-base text-lightText flex items-center">
              {Array?.from({length:5})?.map((_,index)=>{
                const filled = index + 1 <= Math.floor(product?.rating);
                const halffilled = 
                index + 1 > Math.floor(product?.rating) && 
                index < Math.ceil(product?.rating);
                return <MdStar key={index} className={`${filled? "text-[#fa8900]":halffilled? "text-[#f7ca00]": "text-lightText"}`}/>
              })}
            </div>
            <p className='text-base font-semibold'>{`(${product?.rating?.toFixed(1)}) reviews`}</p>
          </div>
        </div>
        <p className='flex items-center'>
          <FaRegEye className='mr-1'/>{" "}
          <span className='font-semibold mr-1'>250+</span>peoples are viewing this right now
        </p>
        <p>
          You are saving {" "}
          <PriceFormat 
            amount={(product?.price * product?.discountPercentage) / 100}
            className='text-base font-semibold text-green-500'
          /> {" "}
          upon purchase
        </p>
        <div className="">
          <p className='text-sm tracking-wide'>{product?.description}</p>
          <p className='text-base'>{product?.warrantyInformation}</p>
        </div>
        <p>
          Brand: <span className='font-medium'>{product?.brand}</span>
        </p>
        <p>
          Category:{" "} 
          <span className='font-medium capitalize'>{product?.category}</span>
        </p>
        <p>
          Tags:{" "}
          {product?.tags?.map((item,index)=>(
            <span key={index} className='font-medium capitalize'>
              {item}
              {index < product?.tags?.length - 1 && ", "} 
            </span>
          ))}
        </p>
          <AddToCartButton product={product} className="rounded-md uppercase font-semibold"/>
        <div className='bg-[#f7f7f7] p-5 rounded-md flex flex-col items-center justify-center gap-2'>
          <Image src={paymentImage} alt="payment" className='w-auto object-cover'/>
          <p className='font-semibold'>Guaranteed safe & secure checkout</p>
        </div>
        {/* Product review */}
      </div>
        <div className="p-10 bg-[#f7f7f7] md:col-span-2 flex items-center gap-10">
          {product?.reviews?.map((item)=>(
            <div
              key={item?.reviewerName}
              className='bg-white/80 p-5 border-[1px] border-amazonOrangeDark/50 rounded-md hover:border-amazonOrangeDark hover:bg-white duration-200 flex flex-col gap-1'
            >
              <p className='text-base font-semibold'>{item?.comment}</p>
              <div className="text-xs">
                <p className='font-semibold'>{item?.reviewerName}</p>
                <p className=''>{item?.reviewerEmail}</p>
              </div>
              <div className="flex items-center">
                <div className="flex items-center">
                  {Array?.from({length:5})?.map((_, index)=>(
                    <MdStar
                      key={index}
                      className={`${index < item?.rating? "text-yellow-500" : "text-lightText"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))
          }
        </div>
    </Container>
  )
}

export default SingleProductPage