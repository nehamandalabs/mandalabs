'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import { Button } from "@/components/ui/button"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Logo from '../logo/logo';
import { motion } from "framer-motion";
import { useScrollDirection, ScrollDirection } from 'react-use-scroll-direction'
import './styles.css'
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import Link from 'next/link'
import Image from 'next/image';
import { PiLockKeyBold } from "react-icons/pi";
import { FaUsers } from "react-icons/fa6";
import { GoStack } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { useDrawerStore } from '@/store/use-drawer-store';

export const DropDownComponent = ({ path, title, description, logo }: { path: string, title: string, description: string, logo: ReactElement }) => {
    const { setIsPageDrawerOpen } = useDrawerStore();
    const router = useRouter();
    const pathname = usePathname();
    return (
        <div
            className="flex p-6 group text-black h-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted no-underline outline-none focus:shadow-md"
            onClick={() => {
                setIsPageDrawerOpen(true);
                const query = `?current_path=${path}`;
                router.push(`${pathname}${query}`);
            }}
        >
            <p className='text:black group-hover:text-yellow-500'>{logo}</p>
            <div className="mb-2 mt-4 text-lg font-medium group-hover:text-yellow-500">
                {title}
            </div>
            <p className="text-sm leading-tight text-muted-foreground">
                {description}
            </p>
        </div>
    )
}

export const menus = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Services',
        path: '#',
        children: [
            {
                title: 'What We Do',
                description: 'Augment your tech teams with our developers, adding the expertise you need.',
                logo: <IoSettingsOutline className="h-6 w-6  " />,
                path: 'what we do'
            },
            {
                title: 'Technologies We Use',
                description: 'Augment your tech teams with our developers, adding the expertise you need.',
                logo: <GoStack className="h-6 w-6 " />,
                path: 'technologies we use'
            },
            {
                title: 'Engagement Models',
                description: 'Augment your tech teams with our developers, adding the expertise you need.',
                logo: <FaUsers className="h-6 w-6 " />,
                path: 'engagement models'
            },
        ]
    },
    {
        name: 'Who we are',
        path: '/who-we-are'
    },
    {
        name: 'Case Study',
        path: '/case-study'
    }

]
const Navbar = ({ isMouseEnter, wrapperRef }: { isMouseEnter: boolean, wrapperRef: any }) => {
    const { scrollDirection } = useScrollDirection(wrapperRef?.current);

    const [constantScrollDirection, setConstantScrollDirection] = useState<ScrollDirection>('UP');

    useEffect(() => {
        if (scrollDirection) {
            setConstantScrollDirection(scrollDirection)
        }
    }, [scrollDirection]);


    return (
        <div className='md:flex gap-10 hidden text-black cursor-pointer justify-between w-full mx-4 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-48'>
            <Logo />
            <div className='flex gap-7 items-center'>
                <motion.div
                    animate={(isMouseEnter || constantScrollDirection === 'UP') ? 'shown' : 'hidden'}
                    variants={{
                        hidden: { opacity: 0 },
                        shown: { opacity: 1 },
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <NavigationMenu>

                        <NavigationMenuList>
                            {
                                menus?.map((eachMenu, index) => (
                                    <NavigationMenuItem key={eachMenu.name} className='menu border-b-[1px] border-transparent'>
                                        <NavigationMenuTrigger showArrow={!!eachMenu?.children} className={navigationMenuTriggerStyle()}>
                                            <a href={eachMenu.path}>
                                                {eachMenu.name}
                                            </a>
                                        </NavigationMenuTrigger>

                                        {
                                            eachMenu?.children &&
                                            <NavigationMenuContent className='bg-white p-4 flex gap-6 justify-center items-center !w-screen !shadow-none !border-none outline-none'>
                                                {eachMenu?.children?.map(item => (
                                                    <div key={item?.path} className='w-[350px] rounded-md border hover:border-yellow-500 bg-white text-black'>
                                                        <DropDownComponent logo={item.logo} title={item.title} description={item.description} path={item?.path} />
                                                    </div>
                                                ))}

                                            </NavigationMenuContent>
                                        }


                                    </NavigationMenuItem>
                                ))
                            }
                        </NavigationMenuList>
                    </NavigationMenu>
                </motion.div>
                <span
                    className={`relative transition-all -z-10 ease-out duration-1000 ${(isMouseEnter || constantScrollDirection === 'UP') ? 'opacity-0 right-96' : 'opacity-1 right-0'} text-xl`}>
                    <Image className=' bg-[#00000020] rounded-sm p-1' width={25} height={25} src={'/burger-white.svg'} alt='burger icon' />
                </span>
                <Link href='/get-in-touch'>
                    <Button className='mt-0 text-md' variant='default'>Get in touch</Button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
