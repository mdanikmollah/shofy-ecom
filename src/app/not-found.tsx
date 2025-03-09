import React from 'react'
import Image from 'next/image'
import Container from './components/Container'
import { notFound } from './assets'
import Button from './components/Button'

const NotFoundPage = () => {
  return (
   <Container className='flex flex-col gap-2 items-center py-10'>
    <Image src={notFound} alt='notFound' className='max-w-60'/>
    <p className='text-xl font-semibold'>Oops! Page not found</p>
    <p className='text-sm text-gray-500 max-w-80 text-center'>Whoops, this is embarrassing. Looks like the page you were looking for wasn't found.</p>
    <Button href='/'>Back to Home</Button>
   </Container>
  )
}

export default NotFoundPage