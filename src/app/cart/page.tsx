import React from 'react'
import Container from '../components/Container'
import CartProducts from '../components/cartpage/CartProducts'
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const CartPage = async() => {
  const session = await getServerSession();
  
  if (!session?.user) {
    redirect("/")
  }
  return (
    <Container className='py-10'>
      <CartProducts/>
    </Container>
  )
}

export default CartPage