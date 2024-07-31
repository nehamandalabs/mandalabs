'use client'
import React, { useState, useEffect, useRef }  from 'react';
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerOverlay,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"
import { useDrawerStore } from '@/store/use-drawer-store';
import { Button } from '@/components/ui/button';
import { Cross, X } from 'lucide-react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { FaArrowRight } from 'react-icons/fa';
import { Whatwedo } from '../services/Whatwedo';
import { Technologiesweuse } from '../services/Technologiesweuse';
import { Engagementmodels } from '../services/Engagementmodels';

export const DrawerPage = () => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const currentPath = searchParams?.get('current_path');

    const { isPageDrawerOpen, setIsPageDrawerOpen } = useDrawerStore();

    const services = ["what we do", "technologies we use", "engagement models"];


    return (
         <Drawer open={isPageDrawerOpen} onRelease={() => setIsPageDrawerOpen(false)}>
            <DrawerContent data-vaul-no-drag className={`top-1 md:top-20 3xl:top-40 mx-auto w-[100%] md:w-[90%] 3xl:w-[85%] bg-white border-0 border-none ring-0 outline-none`}>
                <DrawerHeader>
                    <div className=" flex text-xs md:text-base gap-2 md:gap-10 justify-center my-10">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                onClick={() => {
                                    const query = `?current_path=${service}`;
                                    router.push(`${pathname}${query}`);
                                }}

                            >
                                <p className={`bg-gray-100 px-2 md:px-6 py-4 rounded-lg uppercase text-gray-600 hover:text-yellow-500 ${currentPath?.includes(service) ? "bg-white shadow-lg text-yellow-500" : ""}`}>{service}</p>
                            </div>
                        ))}
                    </div>
                </DrawerHeader>
                <DrawerClose className='absolute right-10 top-4 lg:right-20 lg:top-8 z-[55] bg-gray-100 rounded-full p-1' onClick={() => setIsPageDrawerOpen(false)}>
                    <X className='h-5 w-5' />
                </DrawerClose>
                <div className='bg-gray-100 overflow-y-auto md:overflow-hidden h-full'>
                    <main className='h-auto 2xl:h-[450px] 3xl:h-[550px] flex flex-col justify-center items-center'>
                        {currentPath?.includes("what") && <Whatwedo />}
                        {currentPath?.includes("technologies") && <Technologiesweuse />}
                        {currentPath?.includes("engagement") && <Engagementmodels />}
                    </main>
                    <DrawerFooter className='bg-gray-100 h-full'>
                        <div className='flex justify-center items-center'>
                            <Button variant='withArrow' onClick={() => {
                                router.push('./get-in-touch')
                                setIsPageDrawerOpen(false);
                                }}>Let&apos;s Discuss Today <FaArrowRight className='ml-5'/>
                            </Button>
                        </div>
                    </DrawerFooter>
                </div>
            </DrawerContent>
        </Drawer>
    );
}
