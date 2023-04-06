import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { fromImageToUrl, API_URL } from '../components/urls'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import SmoothScrollbarWrapper from '../components/SmoothScrollbar'
import { motion } from 'framer-motion'
import Menu from '../components/Menu'
import { twoDecimals } from '@/components/format'
import Slider from '@/components/Slider'


export default function Home({products}) {
  return (
    <SmoothScrollbarWrapper>
        <Menu />
        <Slider />
      <div className='flex flex-col items-center bg-white'>
        <h1 className='text-[200px]'>Proizvodi</h1>
        <div className='grid grid-cols-4 ' style={{ gap: '40px' }}>

          {products.data.map((product) => (
              <Link href={`/products/${product.attributes.slug}`}>
              <motion.div 
              initial={{scale: 1}}
              whileHover={{scale: 1.05}}
              className='w-full bg-white drop-shadow-lg'>
                <img src={fromImageToUrl(product.attributes.image.data.attributes)} className='w-[350px] h-[350px]'/>
                <div className='ml-[5px]'>
                  <h2  className='text-[26px] font-medium'>{product.attributes.title}</h2>
                  <p className='text-[18px] text-gray-600'>{product.attributes.description}</p>
                  <div className='flex space-x-3'>
                    <p className='text-[18px] font-medium'>{twoDecimals(product.attributes.price)} €</p>
                    <p className='text-[18px] text-gray-400'>{twoDecimals(product.attributes.pricehrk)} KN</p>
                  </div>
                </div>
              </motion.div>
          </Link>
          ))}

        </div>
      </div>
    </SmoothScrollbarWrapper>
  )
}

export async function getServerSideProps() {
  console.log(process.env.NEXT_PUBLIC_API_URL)
  const product_res = await fetch(`${API_URL}/api/products?populate=*`);
  const products = await product_res.json()

  return {
    props: {
      products,
    },
  }
}
