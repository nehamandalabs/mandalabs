"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import Image from "next/image";
import web from '@/assets/macbook-line.svg';
import website from '@/assets/website.svg';
import mobile from '@/assets/mobile.svg';
import software from '@/assets/software.svg';
import uiux from '@/assets/uiux.svg';
import devops from '@/assets/devops.svg'


const capabilitiesData = [
  {
      icon: web,
      title: 'Web App Development',
      description: '',
  },
  {
      icon: mobile,
      title: 'Mobile App Development',
      description: '',
  },
  {
      icon: software,
      title: 'Security Testing',
      description: '',
  },
  {
      icon: website,
      title: 'Website Development',
      description: '',
  },
  {
      icon: uiux,
      title: 'UI/UX Design',
      description: '',
  },
  {
      icon: devops,
      title: 'DevOps',
      description: '',
  },
];
export function Whatwedo() {
  return (
    <div className='flex z-50 bg-gray-100 '>
        <div className='flex gap-10  h-full pt-8 flex-col justify-center items-center w-full'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {capabilitiesData.map((capability, index) => (
                    <div key={index} className='flex flex-col rounded-2xl bg-white p-10 gap-5 mt-5 '>
                        <Image src={capability.icon} height={50} width={50} alt='icon' />
                        <h1 className='text-xl xl:text-2xl font-bold'>{capability.title}</h1>
                        <p className='leading-36 text-xl'>{capability.description}</p>
                    </div>
                ))}
            </div>
        </div>

</div>
  );
}
