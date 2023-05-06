import React from "react";
import Link from "next/link";
import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { BrowserView, MobileView, isBrowser, isMobile, isTablet } from 'react-device-detect';
import { motion } from "framer-motion";


const Menu = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const [firstDivHeight, setFirstDivHeight] = useState(0);
  const firstDivRef = useRef(null);

  useLayoutEffect(() => {
    function updateFirstDivHeight() {
      let height;
      if (isMobile) {
        height = window.visualViewport.height;
      } else if (isTablet) {
        height = window.innerHeight;
      } else {
        height = "100vh"
      }
      setFirstDivHeight(height);
    }

    updateFirstDivHeight();

    return () => {
      window.removeEventListener("resize", updateFirstDivHeight);
    };
  }, []);

  useEffect(() => {
    if (clicked) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'auto';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
    }
  }, [clicked]);
  return (
    <div className="fixed top-0 w-full z-[100] ">
      <div className="h-16 w-full bg-[#1f1e1f] flex items-center justify-between">
        <Link href={"/"}>
          <img src="/logolyh.svg" className="w-[200px] xl:w-[320px] h-full ml-5 xl:ml-8" />
        </Link>
        <div className="mr-16 space-x-9 xl:block hidden">
          <a href="/" className="text-white font-poppins text-[22px] cursor-pointer">Početna</a>
          <a href="/kontakt" className="text-white font-poppins text-[22px] cursor-pointer">Kontakt</a>
          <a href="/o-nama" className="text-white font-poppins text-[22px] cursor-pointer">O nama</a>
        </div>
        <div className='absolute top-[14px] right-[20px] md:right-[40px]  cursor-pointer block xl:hidden' onClick={handleClick}>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu-2" width="38" height="38" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        <motion.div
        className="absolute top-0 left-0 w-full h-screen bg-[#1f1e1f] z-[99] justify-center items-center flex flex-col"
        initial={{ opacity: 0 }}
        animate={{ opacity: clicked ? 1 : 0,
          pointerEvents: clicked ? 'auto' : 'none',
        }}
        >
                    <img src="/logolyh.svg" className="absolute w-[200px] top-2 left-5 h-[50px]" />

          <div className='absolute top-[10px] right-[15px] cursor-pointer' onClick={handleClick}>
              <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col space-y-10">
              <button className="bg-gray-200 px-6 py-3 rounded-full"><a href="/" className="text-[32px] font-poppins font-semibold text-[#1f1e1f]">Početna</a></button>
              <button className="bg-gray-200 px-6 py-3 rounded-full"><a href="/kontakt" className="text-[32px] font-poppins font-semibold text-[#1f1e1f]">Kontakt</a></button>
              <button className="bg-gray-200 px-6 py-3 rounded-full"><a href="/o-nama" className="text-[32px] font-poppins font-semibold text-[#1f1e1f]">O nama</a></button>
            </div>
        </motion.div>

      </div>
      <div className="bg-[#ff0000] w-full h-1" />
    </div>
  );
};

export default Menu;
