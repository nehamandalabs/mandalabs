import React from 'react';
import Image from 'next/image';
import { baseUrl } from '../../../constant';

interface TechStackProps {
    title: string;
}

const TechStack = ({title}: TechStackProps) => {
    return (
        <div className=' rounded-lg p-5 size-80 bg-white'>
            <p className='mb-5'>{title}</p>
            <div className="grid grid-cols-2 gap-5 place-items-center">
                <Image src={`${baseUrl}/${title}1.png`} alt={`${title}-1`} className="p-3" width={100} height={100} objectFit='cover'/>
                <Image src={`${baseUrl}/${title}2.png`} alt={`${title}-2`} className="p-3" width={100} height={100}  objectFit='cover'/>
                <Image src={`${baseUrl}/${title}3.png`} alt={`${title}-3`} className="p-3" width={100} height={100}  objectFit='cover'/>
                <Image src={`${baseUrl}/${title}4.png`} alt={`${title}-4`} className="p-3" width={100} height={100}  objectFit='cover'/>
            </div>
        </div>
    );
}

export default TechStack;
