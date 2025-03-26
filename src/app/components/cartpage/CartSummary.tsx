import React, { useEffect, useState } from 'react'
import Title from '../Title'
import PriceFormat from '../PriceFormat'
import { ProductType } from '../../../../type'
import Button from '../Button';
import toast from 'react-hot-toast';

interface Props {
  cart: ProductType[];
}

const CartSummary = ({cart}:Props) => {
  const [totalAmt, setTotalAmt] = useState(0);
  const [discountAmt,setDiscountAmt] = useState(0);

  useEffect(()=>{
    let amt = 0;
    let discount = 0;
    cart?.map((item)=>{
      amt += item?.price * item?.quantity!;
      discount += ((item?.price * item?.quantity!) / 100) * item?.quantity!;
    });
    setTotalAmt(amt);
    setDiscountAmt(discount);
  },[cart])

  const handlecheckout = () => {
    toast.success("Cheackout is comming soon!")
  }
  return (
    <div className="bg-gray-100 rounded-lg px-4 py-6 sm:p-10 lg:col-span-5 mt-10 lg:mt-0">
      <Title >Cart Summary</Title>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
        <Title className='text-lg font-medium'>Sub Total</Title>
        <PriceFormat amount={totalAmt}/>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
        <Title className='text-lg font-medium'>Discount</Title>
        <PriceFormat amount={discountAmt}/>
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center justify-between">
        <Title className='text-lg font-medium'>Payable Amount</Title>
        <PriceFormat amount={totalAmt-discountAmt} className='text-lg font-bold'/>
        </div>
        <Button onClick={handlecheckout}>Checkout</Button>
      </div>
    </div>
  )
}

export default CartSummary