'use client'
import React, { useState, useEffect } from 'react';
import Navbar from '../navbar/navbar';
import './styles.scss'
import MobileNav from '../navbar/mobile-nav';
import { ScrollDirection, useScrollDirection } from 'react-use-scroll-direction';

const Header = ({ wrapperRef }: { wrapperRef?: any }) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false);

    const { scrollDirection } = useScrollDirection(wrapperRef?.current);

    const [constantScrollDirection, setConstantScrollDirection] = useState<ScrollDirection>('UP');

    useEffect(() => {
        if (scrollDirection) {
            setConstantScrollDirection(scrollDirection)
        }
    }, [scrollDirection]);

    // const { scrolled } = useScrollStore();



    return (
        <header
            onMouseOver={() => setIsMouseEnter(true)}
            onMouseLeave={() => setIsMouseEnter(false)}
            className={`flex fixed m-auto w-full z-[49] cursor-pointer py-3 ${constantScrollDirection ==='DOWN' ? ' backdrop-filter backdrop-blur-md bg-opacity-50' : 'backdrop-filter backdrop-blur-md  '}`}>
            <Navbar wrapperRef={wrapperRef} isMouseEnter={isMouseEnter} />
            <MobileNav />
        </header>
    );
};

export default Header;
