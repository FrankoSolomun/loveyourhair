import { motion } from "framer-motion";
import { useState, useEffect } from "react";



export default function FilterMob (props){
    const [open, setOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [showFilters, setShowFilters] = useState(false);
    const [tempSelectedCategories, setTempSelectedCategories] = useState([]);
  
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
    return(
        <div>
                <motion.div className={` w-full overflow-hidden py-[16px] lg:py-6 2xl:py-6 4xl:py-8 ${!props.last&&'border-b'} border-black cursor-pointer text-black font-poppins`} onClick={() => setOpen(!open)}>
                    <div>
                        <div className="flex w-full items-center" >
                            <motion.div
                            initial={{x:-600}}
                            whileInView={{x:0}}
                            viewport={{
                                once: true
                              }}
                              transition={{
                                duration: 1.5,
                                ease: [0.1,0.7,0.2,1],
                                delay: 0.2
                              }}
                            className="text-[16px] md:text-[20px] lg:text-[22px] 2xl:text-[26px] 4xl:text-[30px] w-full overflow-hidden relative xl:block hidden">
                                Filteri..
                            </motion.div>
                            <motion.div
                            className="text-[16px] md:text-[20px] lg:text-[22px] 2xl:text-[26px] 4xl:text-[30px] w-full overflow-hidden relative block xl:hidden">
                                Filteri..
                            </motion.div>
                            <motion.svg animate={{rotate: open?0:-90}}  xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer focus:outline-none" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                {open?<path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />:<path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />}
                            </motion.svg>
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
                            
                        <div className='flex flex-col space-y-2 xl:mt-[137px] 2xl:mt-[162px] 5xl:mt-[187px] mr-[50px]'>
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
                <span className="font-poppins font-semibold text-[20px] w-[200px]">Hair</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                  checked={tempSelectedCategories.includes("hair")}
                  onChange={() => handleClick("hair")}
                />
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                <span className="font-poppins font-semibold text-[20px] w-[200px]">Face</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                  checked={tempSelectedCategories.includes("face")}
                  onChange={() => handleClick("face")}
                />
              </label>
              <label className="flex items-center cursor-pointer hover:bg-gray-100 px-3 py-2">
                <span className="font-poppins font-semibold text-[20px] w-[200px]">Body</span>
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600 rounded accent-[#ff0000]"
                  checked={tempSelectedCategories.includes("body")}
                  onChange={() => handleClick("body")}
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
    );
}