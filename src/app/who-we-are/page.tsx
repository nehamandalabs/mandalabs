"use client"
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../../components/ui/hero-highlight";
import React, { FC } from 'react';
import Image from 'next/image';
import about from '../../../public/about.png';
import core1 from '../../../public/core1.svg'
import core2 from '../../../public/core2.svg'
import core3 from '../../../public/core3.svg'

const page: FC = () => {
  return (
    <div className='mt-[10rem] relative min-h-[100vh]'>
      <div className='flex flex-col justify-center w-full items-center py-8 gap-6'>
        <h1 className='text-neutral-600 text-6xl text-center 3xl:text-[80px] font-bold mb-8'>
          Our Story
        </h1>
      </div>
      <div className='flex flex-col gap-4 text-base md:text-xl lg:text-3xl  md:gap-24 items-center justify-center w-full px-1 md:px-10 2xl:px-80'>
        <div className='flex gap-4 md:gap-8 xl:gap-14'>
          <Image src={about} alt="image_describing_about_us"  objectFit="cover" className='rounded-2xl h-[25rem] w-[30vw]' />

          <p className=' py-2'>When I was managing technology teams, temporary contract engagements provided tremendous value – solving for resource constraints, filling a gap in a specific skill set/expertise, or large projects with tight timelines.<br /><br />

            But the very nature of these engagements meant that folks who built it would no longer be part of our team after some time, primarily due to budgetary constraints.<br /><br />

            This cycle was huge pain point of mine. <br /><br />
          </p>
        </div>
        <div className='flex flex-row-reverse   gap-4 md:gap-8 xl:gap-14'>
          <Image src={about} alt="image_describing_about_us" objectFit="cover"  className='rounded-2xl h-[25rem] w-[30vw]' />

          <p className=' py-2'>
            <span className='font-bold'>  …New project &gt; Hire resources &gt; Onboard/orient resources &gt; Develop &gt; Project ends &gt; Resources leave &gt; Knowledge lost &gt; Time passes &gt; New project…</span><br /><br />

            I wished for an option where we had the flexibility to extend our team and engage resources as needed towards high-value deliverables, adding new features, support/maintain legacy code, as well as clean up technical debt.
            <br /><br />
          </p>
        </div>
        <div className='flex  gap-4 md:gap-8 xl:gap-14'>
          <Image src={about} alt="image_describing_about_us"  objectFit="cover" className='rounded-2xl h-[25rem] w-[30vw]' />

          <p className=' py-2'>
            That is exactly what we do.<br /><br />

            We provide optionality – so that you have all the levers at your disposal to balance between exploring new opportunities, managing existing stakeholders, and maintaining quality systems.

            <br /><br />We believe in creating strong, long-lasting partnerships with our clients, forged through repeated transparent interactions to build trust and work together as one team.<br /><br />

            <span className=' flex justify-end'>
              – Subir<br />
              (Founder/CEO)
            </span>
          </p>
        </div>
      </div>
      <div className='py-[6.25rem] px-4 md:px-[15rem]'>
        <h1 className='text-yellow-500 text-2xl md:text-6xl'>Our core values</h1>
        <h1 className='text-neutral-600 text-2xl  md:text-6xl'>drive our team philosophy and culture.</h1>
        <div className='flex flex-col md:flex md:flex-row justify-between items-center gap-10 my-20'>
          <div className=' w-[300px] h-[250px] md:w-[28.4375rem] md:h-[16.25rem] rounded-3xl shadow-lg flex flex-col justify-center items-start gap-10 p-10'>
            <Image
              src={core1}
              alt=""
              className='bg-white p-4 shadow-lg rounded-full h-[4.5rem] w-[4.5rem]'
            />
            <div className='flex flex-col gap-2'>
              <p className='text-yellow-500 text-2xl uppercase tracking-[2px] font-bold'>Transparency</p>
              <p className='text-xl'>as the solid foundation to build trust.</p>
            </div>
          </div>
          <div className='w-[300px] h-[250px] md:w-[28.4375rem] md:h-[16.25rem] rounded-3xl shadow-lg flex flex-col justify-center items-start gap-10 p-10'>
            <Image
              src={core2}
              alt=""
              className='bg-white p-4 shadow-lg rounded-full h-[4.5rem] w-[4.5rem]'
            />
            <div className='flex flex-col gap-2'>
              <p className='text-yellow-500 text-2xl uppercase tracking-[2px] font-bold'>Trust</p>
              <p className='text-xl'>to build a team, and community.</p>
            </div>
          </div>
          <div className='w-[300px] h-[250px] md:w-[28.4375rem] md:h-[16.25rem] rounded-3xl shadow-lg flex flex-col justify-center items-start gap-10 p-10'>
            <Image
              src={core3}
              alt=""
              className='bg-white p-4 shadow-lg rounded-full h-[4.5rem] w-[4.5rem]'
            />
            <div className='flex flex-col gap-2'>
              <p className='text-yellow-500 text-2xl uppercase tracking-[2px] font-bold'>Teamwork</p>
              <p className='text-xl'>to unlock unlimited upside.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
