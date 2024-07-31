'use client'
import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import { Menu } from 'lucide-react'
import Logo from '../logo/logo'
import { DropDownComponent, menus } from './navbar'
import Link from 'next/link'
import { useDrawerStore } from '@/store/use-drawer-store'
import AOS from 'aos';
import "aos/dist/aos.css";
import { Button } from '../ui/button'
import { useRouter, usePathname } from 'next/navigation'

export default function MobileNav() {

    const { navState, steNavState, setIsPageDrawerOpen } = useDrawerStore();
    const [openServices, setOpenServices] = useState<Boolean>(false);
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        AOS.init({
            startEvent: 'DOMContentLoaded',
            initClassName: 'aos-init',
        });
    }, [])


    return (
        <div className='block md:hidden'>
            <Sheet>
                <div className='flex items-center justify-between w-full'>
                    <span className='ml-5'> <Logo height={60} /></span>
                    <SheetTrigger className='absolute right-6 text-black'><Menu /></SheetTrigger>
                </div>
                <SheetContent className='text-black w-full bg-white '>
                    <SheetHeader>
                        <SheetTitle className='flex items-center gap-4 mt-4'>
                            <span className='bg-white rounded-xl'>
                                <Logo height={60} />
                            </span>
                            <h1 data-aos="fade-right" className='text-3xl'>Mandalabs</h1>
                        </SheetTitle>

                        <NavigationMenu>
                            <NavigationMenuList className='flex flex-col items-start gap-4'>
                                {
                                    menus?.map((eachMenu, index) => (
                                        <NavigationMenuItem key={eachMenu.name} className='flex flex-col'>
                                            <NavigationMenuTrigger showArrow={!!eachMenu?.children} onClick={() => {
                                                if (eachMenu.name === 'Services') {
                                                    setOpenServices(!openServices);
                                                } else {
                                                    window.location.href = eachMenu.path; // This will handle the navigation for other menu items
                                                }
                                            }} className='px-1'>
                                                {eachMenu.name !== 'Services' ? (
                                                    <SheetClose asChild>
                                                        <Link data-aos="fade-right" className={`text-[18px] ${index === 0 && 'ml-1'}`} href={eachMenu.path}>
                                                            {eachMenu.name}
                                                        </Link>
                                                    </SheetClose>
                                                ) : (
                                                    <span data-aos="fade-right" className={`text-[18px] ${index === 0 && 'ml-1'}`}>
                                                        {eachMenu.name}
                                                    </span>
                                                )}
                                            </NavigationMenuTrigger>


                                            {eachMenu?.children && openServices &&
                                                <div className='flex flex-col items-start relative left-8 gap-4 mt-4'>
                                                    {eachMenu?.children?.map(item => (
                                                        <div key={item?.path} className=''>
                                                            <SheetClose asChild>
                                                                <div data-aos="fade-right"
                                                                    onClick={() => {
                                                                        setIsPageDrawerOpen(true);
                                                                        const query = `?current_path=${item.path}`;
                                                                        router.push(`${pathname}${query}`);

                                                                    }}>{item.title}</div>
                                                            </SheetClose>

                                                        </div>
                                                    ))}

                                                </div>
                                            }
                                        </NavigationMenuItem>
                                    ))
                                }
                            </NavigationMenuList>
                            <Link href='/get-in-touch'>
                                <Button className='mt-8 text-md' variant='default'>Get in touch</Button>
                            </Link>
                        </NavigationMenu>
                    </SheetHeader>
                </SheetContent>

            </Sheet>

        </div>
    )
}
