'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import LogoSrc from '@/assets/logoblack.png';

const Logo = ({ height = 80 }: { height?: number }) => {
    return (
        <Link href='/'>
            <Image src={LogoSrc} alt='Logo' height={height} />
        </Link>
    )
}

export default Logo