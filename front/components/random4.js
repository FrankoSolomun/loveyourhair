import React, { useEffect, useState } from 'react';
import { fromImageToUrl, API_URL } from '../components/urls'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { twoDecimals } from '@/components/format'




export default function Random4() {
  const [products, setProducts] = useState();

  useEffect(() => {
    getProducts().then((products) => {
      console.log(products);
      setProducts(products.props.products);
    });
  }, []);

  return (

    <div className='w-full h-full flex flex-col justify-center items-center'>
      <div className='max-w-[1680px] flex flex-col mx-[30px]'>
        <h1 className='text-[50px] font-poppins font-bold text-stone-800 mb-[7px]' >Drugi proizvodi</h1>
        <div className='w-full h-px bg-gray-300' />
        <div className='grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 5xl:grid-cols-4 mb-[100px] mt-[50px] 2xl:mt-[75px] 5xl:mt-[100px] mx-[30px] md:mx-0' style={{ gap: '35px' }}>
          {products?.data?.map((product) => (
            <Link href={`/products/${product.attributes.slug}`}>
              <motion.div
                      initial={{ scale: 1 }}
                      whileHover="hovering"
                      variants={{
                        hovering: {
                          scale: 1.02,
                          transition: { duration: 0.2 },
                        },
                      }
                      }
                      className='w-full bg-white drop-shadow-lg cursor-pointer'>
                      <img src={fromImageToUrl(product.attributes.image.data.attributes)} className='w-full md:w-[300px] xl:w-[250px] 2xl:w-[300px] 4xl:h-[300px]' />
                      <div className='w-full h-px bg-gray-300' />
                      <div className='mx-[15px] mt-[16px]'>
                        <h2 className='text-[24px] 2xl:text-[26px] font-medium'>{product.attributes.title}</h2>
                        <p className='text-[17px] 2xl:text-[18px] text-gray-600'>{product.attributes.description}</p>
                        <div className='flex space-x-3'>
                          <p className='text-[18px] font-medium'>{twoDecimals(product.attributes.price)} €</p>
                          <p className='text-[18px] text-gray-400'>{twoDecimals(product.attributes.pricehrk)} KN</p>
                        </div>
                        <div className='pb-[23px]'>
                          <motion.button
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className='bg-gray-200 text-neutral-900 font-medium text-[18px] w-full h-[50px] mt-[10px]'>Saznaj više...</motion.button>
                        </div>
                      </div>
                    </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>

  );

}

async function getProducts() {
  const product_res = await fetch(`${API_URL}/api/products?populate=*`);
  const products = await product_res.json()

  // Shuffle the products array randomly
  const shuffledProducts = products.data.sort(() => 0.5 - Math.random());

  // Select the first 4 products from the shuffled array
  const selectedProducts = shuffledProducts.slice(0, 4);

  return {
    props: {
      products: { data: selectedProducts },
    },
  }
}