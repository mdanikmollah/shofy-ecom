"use client";
import React from 'react'
import Container from '../components/Container'
import CartProducts from '../components/cartpage/CartProducts'

const CartPage = () => {
  return (
    <Container className='py-10'>
      <CartProducts/>
    </Container>
  )
}

export default CartPage