import React from "react";
import Link from "next/link";

const Menu = ({ divRef1,divRef2,divRef3, handleClick0, handleClick1, handleClick2, handleClick3 }) => {

  return (
    <div className="fixed top-0 w-full z-50 ">
      <div className="h-16 w-full bg-black flex items-center justify-between">
        <Link href={"/"}>
          <img src="/logolyh.svg" className="w-[320px] h-full ml-8" />
        </Link>
        <div className="mr-16 space-x-9">
        <a href="/" className="text-white font-poppins text-[22px] cursor-pointer">Početna</a>
          <a href="/" className="text-white font-poppins text-[22px] cursor-pointer">Kontakt</a>
          <a href="/o-nama" className="text-white font-poppins text-[22px] cursor-pointer">O nama</a>
        </div>
      </div>
      <div className="bg-[#ff0000] w-full h-1" />
    </div>
  );
};

export default Menu;
