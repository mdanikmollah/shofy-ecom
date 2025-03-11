"use client";
import React, { useEffect, useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { LuEye } from 'react-icons/lu'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { ProductType, StateType } from '../../../type'
import { addToFavorite } from '../redux/shofySlice';
import toast from 'react-hot-toast';

const Sidebar = ({product}:{product:ProductType}) => {
  const { favorite } = useSelector((state:StateType) => state?.shofy)
  const [ existingProduct, setExistingProduct ] = useState<ProductType | null>(null)
  const dispatch = useDispatch()
  useEffect(()=>{
      const availableProduct = favorite?.find((item)=> item?.id === product?.id )
      if (availableProduct) {
        setExistingProduct(availableProduct)
      }else{
        setExistingProduct(null)
      }
    },[favorite,product])

    const handleFavorite = () => {
      dispatch(addToFavorite(product))
      if (existingProduct) {
        toast.success("Remove form favorite successfully")
      }else{
        toast.success("Added to favorite successfully")
      }
    }
  return (
    <div className='absolute right-2 bottom-44 border flex flex-col text-2xl border-borderColor bg-white rounded-md overflow-hidden transform translate-x-20 group-hover:translate-x-0 duration-300 z-40'>
      <button className='p-2 hover:bg-skyColor/10 hover:text-skyColor duration-200'>
        <FiShoppingCart/>
      </button>
      <button className='p-2 hover:bg-skyColor/10 hover:text-skyColor duration-200 border-y border-y-borderColor'>
        <LuEye/>
      </button>
      <button onClick={handleFavorite} className='p-2 hover:bg-skyColor/10 hover:text-skyColor duration-200'>
        {/* <MdFavoriteBorder/> */}
        {existingProduct? (<MdFavorite className='text-skyColor'/>) : ( <MdFavoriteBorder/>)}
      </button>
    </div>
  )
}

export default Sidebar