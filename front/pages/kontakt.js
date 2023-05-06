import { useState } from "react";
import Menu from "../components/Menu";
import { motion } from 'framer-motion';
import Link from "next/link";


export default function Kontakt() {
    const [showCopied, setShowCopied] = useState(false);
    const [isShown, setIsShown] = useState(false);

    return (
        <div className="xl:h-screen w-full relative overflow-hidden">
            <Menu />
            <div className='h-full xl:h-screen w-full relative flex flex-col xl:flex-row'>
                <div className="mt-[68px]">
                    <div className="h-[300px] xl:h-screen w-screen xl:w-[500px] 3xl:w-[700px] 5xl:w-[1000px] overflow-hidden relative">
                        <img src="/slikakontakt.jpg" className="w-full xl:w-[1000px] inset-0 object-cover object-center absolute h-[400px] xl:h-screen" />
                    </div>
                </div>
                <div className='flex flex-col mt-[50px] lg:mt-[100px] xl:mt-[150px] mx-[20px] lg:mx-[50px]'>
                    <h1 className='text-[40px] lg:text-[60px] 2xl:text-[70px] 4xl:text-[80px] font-poppins font-bold text-stone-800' >Kontakt</h1>
                    <p className='text-black text-[18px] lg:text-[20px] 2xl:text-[22px] 4xl:text-[24px] mt-[15px] leading-[1.3]'>Ova stranica je informativnog karaktera.<br className=""/> Za više informacija i
                        narudžbe možete se obratiti našem prodajnom predstavniku na:
                    </p>
                    <div className='pt-[30px] 3xl:pt-[95px]  z-20'>
                        <p className='text-black font-poppins text-[26px] md:text-[22px] lg:text-[24px] 2xl:text-[26px] 4xl:text-[28px] font-light leading-[2] tracking-wide'>EMAIL</p>
                        <div className='flex flex-col'>
                            <div className='flex justify-between cursor-pointer'
                                onClick={() => {
                                    navigator.clipboard.writeText('loveyourhair.solomun@gmail.com');
                                    setShowCopied(true);
                                }}
                            >
                                <p className='text-black font-poppins text-[16px] xs5:text-[20px] md:text-[28px] lg:text-[32px] 2xl:text-[34px] 4xl:text-[34px] font-normal leading-[1.3] tracking-wide xs:pr-[20px]'>loveyourhair.solomun@gmail.com</p>
                                <div className="pr-[5px] flex justify-center items-center">
                                    {showCopied ? (
                                        <motion.div className='flex'>
                                            <motion.div
                                                variants={{
                                                    initial: {
                                                        fill: "#4D42C4",
                                                    },
                                                }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: [0.6, 0.05, -0.01, 0.9],
                                                }}
                                                className="w-[18px] xl:w-[26px] fill-black">
                                                <svg className={``} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14">
                                                    <defs>
                                                    </defs>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path
                                                                d="M6.74,14a1,1,0,0,1-.35-.06,1,1,0,0,1-.32-.22L.29,8a1,1,0,0,1,0-1.38.94.94,0,0,1,1.34,0l5.11,5L18.34.28a1,1,0,0,1,1.37,0A.91.91,0,0,1,20,1a.91.91,0,0,1-.29.67L7.41,13.72a1,1,0,0,1-.32.22A1,1,0,0,1,6.74,14Z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </motion.div>
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            className="w-[16px] md:w-[12px] 1xl:w-[14px] 2xl:w-[20px] "
                                            variants={{
                                                initial: {
                                                    fill: "#34343F",
                                                },
                                                hover: {
                                                    fill: "#4D42C4"
                                                },
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                ease: [0.6, 0.05, -0.01, 0.9],
                                            }}
                                        >
                                            <object classID='w-[16px] md:w-[12px] 1xl:w-[14px] 2xl:w-[20px] fill-white'>
                                                <svg className={`${isShown ? 'opacity-0' : 'opacity-100 fill-black'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 21">
                                                    <defs>
                                                    </defs>
                                                    <g id="Layer_2" data-name="Layer 2">
                                                        <g id="Layer_1-2" data-name="Layer 1">
                                                            <path d="M18,4.42V19.5A1.54,1.54,0,0,1,16.5,21H4.65V19.5H16.5V4.42Z" />
                                                            <path
                                                                d="M13.55.45A1.44,1.44,0,0,0,12.5,0H1.5a1.44,1.44,0,0,0-1,.45A1.44,1.44,0,0,0,0,1.5v14a1.44,1.44,0,0,0,.45,1,1.44,1.44,0,0,0,1,.45h11A1.54,1.54,0,0,0,14,15.5V1.5A1.44,1.44,0,0,0,13.55.45ZM12.5,15.5H1.5V1.5h11Z" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </object>
                                        </motion.div>
                                    )}
                                </div>
                            </div>
                            <div className='h-[1px] 5xl:w-full bg-black mt-[5px]'></div>

                        </div>
                    </div>


                    <div className="pt-[30px] 3xl:pt-[95px] z-20 pb-[100px]">
  <p className="text-black font-poppins text-[26px] md:text-[22px] lg:text-[24px] 2xl:text-[26px] 4xl:text-[28px] font-light leading-[2] tracking-wide">MOBITEL</p>
  <div className="flex flex-col">
    <div className="flex justify-between cursor-pointer" onClick={() => {
      window.location.href = "tel:+385915285447";
    }}>
      <p className="text-black font-poppins text-[16px] xs5:text-[20px] md:text-[28px] lg:text-[32px] 2xl:text-[34px] 4xl:text-[34px] font-normal leading-[1.3] tracking-wide xs:pr-[20px]">+385 91 5285 447</p>
      <div className="pr-[5px] flex justify-center items-center ">
        <div className="w-[22px] md:w-[24px] 1xl:w-[26px] 2xl:w-[34px] ">
          <object classID="w-[16px] md:w-[12px] 1xl:w-[14px] 2xl:w-[18px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone-call" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
              <path d="M15 7a2 2 0 0 1 2 2" />
              <path d="M15 3a6 6 0 0 1 6 6" />
            </svg>
          </object>
        </div>
      </div>
    </div>
    <div className="h-[1px] 5xl:w-full bg-black mt-[5px]"></div>
  </div>
</div>

                </div>
            </div>
        </div>
    );
}