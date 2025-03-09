"use client";
import Container from './Container'
import Image from 'next/image'
import ProductCart from './ProductCart';
import { ProductType } from '../../../type';

interface Props {
     products:ProductType[]
}

const ProductList = ({products}:Props) => {
    console.log(products);
    
  return (
    <Container className='py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5'>
        {products?.map((item:ProductType)=>(
           <ProductCart key={item?.id} product={item}/>
        ))

        }
    </Container>
  )
}

export default ProductList