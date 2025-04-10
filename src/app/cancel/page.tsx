import React from 'react'
import Container from '../components/Container'
import Title from '../components/Title'
import Button from '../components/Button'

const CancelPage = () => {
  return (
    <Container className='py-10'>
        <Title>Your payment has been cancelled</Title>
        <p className='text-base tracking-wide max-w-3xl mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dicta aliquid fugiat dolorem, magni et ab ipsa minus aspernatur unde corrupti nihil iure illo optio accusamus mollitia cumque blanditiis. Porro iure iste doloremque eum laborum, deleniti atque exercitationem, saepe esse praesentium nihil. Repellendus deserunt mollitia dignissimos recusandae at error ipsa.
        </p>
        <div className="mt-5 flex items-center gap-x-5">
            <Button href='/' className='rounded-md'>
                Continue Shopping
            </Button>
            <Button href='/cart' className='rounded-md'>
                View Cart
            </Button>
        </div>

    </Container>
  )
}

export default CancelPage