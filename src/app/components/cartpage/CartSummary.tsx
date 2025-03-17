import React from 'react'
import Title from '../Title'
import PriceFormat from '../PriceFormat'

const CartSummary = () => {
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <Title >Cart Summary</Title>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
        <Title className='text-lg font-medium'>Sub Total</Title>
        <PriceFormat amount={100}/>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
        <Title className='text-lg font-medium'>Discount</Title>
        <PriceFormat amount={100}/>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
        <Title className='text-lg font-medium'>Payable Amount</Title>
        <PriceFormat amount={100} className='text-lg font-bold'/>
        </div>
      </div>
    </div>
  )
}

export default CartSummary