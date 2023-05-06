import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { fromImageToUrl, API_URL } from '../components/urls'
import fetch from 'isomorphic-fetch'
import Link from 'next/link'
import SmoothScrollbarWrapper from '../components/SmoothScrollbar'
import { motion, useScroll, useTransform } from 'framer-motion'
import Menu from '../components/Menu'
import { twoDecimals } from '@/components/format'
import Slider from '@/components/Slider'
import Footer from '@/components/Footer'
import { useState, useEffect, useRef } from 'react';
import FilterMob from '@/components/FilterMob'

export default function Home({ products }) {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, .2], [0, -125])
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [showFilters, setShowFilters] = useState(false);
  const [tempSelectedCategories, setTempSelectedCategories] = useState([]);
  const [open, setOpen] = useState(false);


  useEffect(() => {
    if (showFilters) {
      setTempSelectedCategories(selectedCategories);
    }
  }, [showFilters]);

  const handleClick = (category) => {
    const index = tempSelectedCategories.indexOf(category);
    if (index === -1) {
      setTempSelectedCategories([...tempSelectedCategories, category]);
    } else {
      const newSelectedCategories = [...tempSelectedCategories];
      newSelectedCategories.splice(index, 1);
      setTempSelectedCategories(newSelectedCategories);
    }
  };

  const handleConfirm = () => {
    if (tempSelectedCategories.includes("all")) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(tempSelectedCategories);
    }
    setShowFilters(true);
  };

  const handleReset = () => {
    if (showFilters) {
      setSelectedCategories([]);
      setTempSelectedCategories([]);
      setShowFilters(false);
    } else {
      setTempSelectedCategories([]);
    }
  };

  const filteredProducts = showFilters
    ? products.data.filter((product) => {
      if (selectedCategories.length === 0 || selectedCategories.includes("all")) {
        return true;
      } else {
        return selectedCategories.includes(product.attributes.collectiontype);
      }
    })
    : products.data;

  const divRef0 = useRef(null);
  const divRef1 = useRef(null);
  const divRef2 = useRef(null);
  const divRef3 = useRef(null);

  const handleClick0 = () => {
    divRef0.current.scrollIntoView({ behavior: "smooth" }) + 150;
  };
  const handleClick1 = () => {
    divRef1.current.scrollIntoView({ behavior: "smooth" }) + 150;
  };

  const handleClick2 = () => {
    divRef2.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleClick3 = () => {
    divRef3.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className='relative' ref={divRef0}>
      <Menu
        divRef1={divRef1}
        divRef2={divRef2}
        divRef3={divRef3}
        handleClick0={handleClick0}
        handleClick1={handleClick1}
        handleClick2={handleClick2}
        handleClick3={handleClick3}
      />
      <div className='flex items-center justify-center z-[23432423] mb-[50px]'>
          <div className='max-w-[1680px] flex flex-col items-center lg:flex-row pt-[100px] lg:pt-[120px] xl:pt-[90px] 3xl:pt-[120px] 4xl:pt-[120px] 5xl:pt-[100px]'>
            <Slider divRef1={divRef1} divRef0={divRef0}/>
            <div className='lg:ml-[50px] 3xl:ml-[80px] mt-[70px] md:mt-[100px] max-w-[800px]  lg:mr-[30px] 3xl:mr-[45px] 4xl:mr-[75px] mx-[20px] md:mx-[50px] lg:mx-0'>
              <img src='/selective.png' className='w-[350px] md:w-[450px] 3xl:max-w-[500px] 4xl:w-[550px] h-[50px] md:h-[70px] 3xl:h-[80px] mb-[30px]'/>
              <div className='w-full h-px bg-gray-300' />
              <p className='text-gray-600 text-[18px] 3xl:text-[22px] mt-[15px]'>Selective Professional je ekskluzivni talijanski brend, ponosno
proizvedan 100% u Italiji, s više od 30 godina iskustva.
Zastupljen je u 70 zemlja diljem svijeta .
Proizvodi su rezultat izražene kreativnosti ,originalnosti i
strasti za ljepotu kose.
Uvjerite se zašto je jedan od najviše hvaljenih talijanskih
brendova.</p>
              <div className='flex flex-col w-full justify-center items-center mt-[70px] md:mt-[70px] space-y-5'>
                <button className='bg-[#1f1e1f] text-white text-[23px] font-poppins px-7 py-[10px] border-2 border-white hover:bg-white hover:text-[#1f1e1f] hover:border-2 hover:border-[#1f1e1f] transition duration-[600ms]' onClick={handleClick1}>Naši proizvodi</button>
                {/* <button className='bg-black text-white text-[23px] font-poppins px-7 py-[10px] border-2 border-white hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-[600ms]'>Kontaktirajte nas</button> */}
              </div>
            </div>
          </div>
        </div>
      <motion.div

        className='w-full bg-white h-full flex flex-col'>
        <div className='flex w-full h-full xl:pl-[30px] 3xl:pl-[75px] 5xl:pl-[125px] 6xl:pl-[100px] 7xl:pl-0 6xl:justify-center justify-center xl:justify-start'>
          <div className='flex flex-col space-y-2 xl:mt-[137px] 2xl:mt-[162px] 5xl:mt-[187px] mr-[50px] xl:block hidden'>
            <h1 className='text-[30px] font-poppins font-bold text-stone-800 mt-[40px] px-3'>Filteri..</h1>
            <div className='w-full h-px bg-gray-300' />

            <div className='space-y-2 pt-[15px] pb-[20px]'>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                <span className="font-poppins font-semibold text-[20px] w-[200px]">All</span>
                <input
                  type="checkbox"
                  className="checked:form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                  checked={tempSelectedCategories.length === 0 || tempSelectedCategories.includes('all')}
                  onChange={() => handleClick("all")}
                />
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                <span className="font-poppins font-semibold text-[20px] w-[200px]">Njega za kosu</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                  checked={tempSelectedCategories.includes("njega")}
                  onChange={() => handleClick("njega")}
                />
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                <span className="font-poppins font-semibold text-[20px] w-[200px]">Tehnički proizvodi</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                  checked={tempSelectedCategories.includes("tehnicki")}
                  onChange={() => handleClick("tehnicki")}
                />
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                <span className="font-poppins font-semibold text-[20px] w-[200px]">Styling za kosu</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                  checked={tempSelectedCategories.includes("styling")}
                  onChange={() => handleClick("styling")}
                />
              </label>
            </div>
            <div className='w-full h-px bg-gray-300' />

            <div className='w-full flex flex-col space-y-2'>
              <button
                className={`py-2 px-4 font-poppins ${tempSelectedCategories.length === 0 ? 'bg-gray-200' : 'bg-[#ff0000] text-white'
                  }`}
                onClick={tempSelectedCategories.length === 0 ? null : handleConfirm}
              >
                Confirm
              </button>
              {showFilters && (
                <button className='py-2 px-4  font-poppins bg-gray-200 text-black' onClick={handleReset}>
                  Reset
                </button>
              )}
            </div>
          </div>


          <motion.div
            className='flex flex-col bg-white max-w-[1680px] ' >
            <div className='bg-transparent w-full h-[100px]' ref={divRef1} />
            <div className='mx-[30px] md:mx-0'>
              <h1 className='text-[50px] font-poppins font-bold text-stone-800' >Proizvodi</h1>
              <div className='w-full h-px bg-gray-300' />
            </div>

            {/* MOBITEL FILTERI */}
            <div className='xl:hidden mx-[30px] md:mx-0'>
              <motion.div className={` w-full overflow-hidden   border-gray-300 border-b cursor-pointer text-stone-800 font-poppins`} >
                <div>
                  <div className="flex w-full items-center" >
                    <motion.div
                      initial={{ x: -600 }}
                      whileInView={{ x: 0 }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 1.5,
                        ease: [0.1, 0.7, 0.2, 1],
                        delay: 0.2
                      }}
                      className="text-[16px] md:text-[20px] lg:text-[22px] 2xl:text-[26px] 4xl:text-[30px] w-full overflow-hidden relative xl:block hidden">
                    </motion.div>
                    <div className='flex justify-between items-center w-full py-3' onClick={() => setOpen(!open)}>
                      <motion.div
                        className="text-[20px] md:text-[20px] lg:text-[22px] 2xl:text-[26px] 4xl:text-[30px] w-full overflow-hidden relative block xl:hidden font-poppins text-bold">
                        Filteri..
                      </motion.div>
                      <motion.svg animate={{ rotate: open ? 0 : -90 }} xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer focus:outline-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        {open ? <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" /> : <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />}
                      </motion.svg>
                    </div>
                  </div>
                  <motion.div
                    initial={{
                      height: 0,
                      padding: 0,
                    }}
                    animate={{
                      height: open ? 'auto' : 0,
                    }}
                    className="overflow-hidden "
                  >
                    <div className="pt-8 md:text-[16px] xl:text-[18px] 4xl:text-[20px] ">

                      <div className='flex flex-col space-y-2 '>

                        <div className='space-y-2 pb-[20px]'>
                          <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                            <span className="font-poppins font-semibold text-[20px] w-full">All</span>
                            <input
                              type="checkbox"
                              className="checked:form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                              checked={tempSelectedCategories.length === 0 || tempSelectedCategories.includes('all')}
                              onChange={() => handleClick("all")}
                            />
                          </label>
                          <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                            <span className="font-poppins font-semibold text-[20px] w-full">Njega za kosu</span>
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                              checked={tempSelectedCategories.includes("njega")}
                              onChange={() => handleClick("njega")}
                            />
                          </label>
                          <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                            <span className="font-poppins font-semibold text-[20px] w-full">Tehnički proizvodi</span>
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                              checked={tempSelectedCategories.includes("tehnicki")}
                              onChange={() => handleClick("tehnicki")}
                            />
                          </label>
                          <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                            <span className="font-poppins font-semibold text-[20px] w-full">Styling za kosu</span>
                            <input
                              type="checkbox"
                              className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                              checked={tempSelectedCategories.includes("styling")}
                              onChange={() => handleClick("styling")}
                            />
                          </label>
                        </div>
                        <div className='w-full h-px bg-gray-300' />

                        <button
                          className={`py-2 px-4 font-poppins ${tempSelectedCategories.length === 0 ? 'bg-gray-200' : 'bg-[#ff0000] text-white'
                            }`}
                          onClick={tempSelectedCategories.length === 0 ? null : handleConfirm}
                        >
                          Confirm
                        </button>
                        {showFilters && (
                          <button className='py-2 px-4  font-poppins bg-gray-200 text-black' onClick={handleReset}>
                            Reset
                          </button>
                        )}
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* MOBITEL FILTERI */}


            <div className='flex flex-col items-center'>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 5xl:grid-cols-4 mb-[100px] mt-[50px] 2xl:mt-[75px] 5xl:mt-[100px] mx-[30px] md:mx-0' style={{ gap: '35px' }}>
                {filteredProducts.map((product) => (

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
                      <img src={fromImageToUrl(product.attributes.image.data.attributes)} className='w-full md:w-[300px] xl:w-[250px] 2xl:w-[300px] md:h-[300px] xl:h-[250px] 2xl:h-[300px]' />
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
          </motion.div>
        </div>
      </motion.div>
      <div ref={divRef2}>
        <Footer />
      </div>
    </div>
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
