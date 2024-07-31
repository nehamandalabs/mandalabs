'use client'
import React from 'react';
import './styles.css'
import { FlipWords } from "../../components/ui/flip-words";
import Image from 'next/image';
import bg from '../../../public/Lancozen.jpg'


const HeroBanner: React.FC = () => {

  const words = ["Technology","Strategy","Partnership"];

  return (
    <div className="h-[60vh] top-10 lg:h-[95vh] flex text-left w-full items-center pl-8  md:pl-4  relative  md:top-20">
    <div className=" mx-auto  font-normal flex flex-col gap-4 md:gap-14 xl:gap-20 3xl:gap-28 justify-start text-neutral-600 dark:text-neutral-400">
      
    <FlipWords words={words} /> 
    <p className=' text-3xl md:text-6xl lg:text-[70px] 3xl:text-[80px] font-bold text-start md:leading-[80px] text-wrap'>Your Strategic IT Development Partner</p>
     
    </div>
  </div>
  
  );
};

export default HeroBanner;

