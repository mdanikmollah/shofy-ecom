"use client"
import React, { useEffect } from 'react'
import Container from '../components/Container'
import { redirect, useSearchParams } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { resetCart } from '../redux/shofySlice'
import toast from 'react-hot-toast'
import Button from '../components/Button'

const SuccessPage = () => {
  const searchParams = useSearchParams()
  const sessionId = searchParams.get("session_id");
  const dispatch = useDispatch()

  !sessionId && redirect("/");

  useEffect(()=>{
    if (sessionId) {
      dispatch(resetCart())
      toast.success("Payment received successfully!")
    }
  },[sessionId,dispatch])
  return (
    <Container>
      <div className="min-h-[400px] flex flex-col items-center justify-center gap-y-5">
        <h2 className='text-2xl md:text-4xl font-bold text-center'>Your Payment Accepted By Shofy.com </h2>
        <p className='text-base tracking-wide max-w-3xl mt-1'>You can view your orders or continue shopping with us
        </p>
        <div className="flex items-center gap-x-5">
            <Button href='/orders' className='rounded-md'>
                View Orders
            </Button>
            <Button href='/' className='rounded-md'>
                Continue Shopping
            </Button>
        </div>
      </div>
    </Container>
  )
}

export default SuccessPage