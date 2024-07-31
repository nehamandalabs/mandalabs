import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCog } from 'react-icons/fa';
import imm from '@/assets/icon1.svg';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import Image from 'next/image';
import { baseUrl } from '../../../constant';


interface Props {
    className?: string;
    title?: string;
    description?: string;
    imageUrl?: string;
}
const Feature = ({ className, title, description, imageUrl }: Props) => {
    const [isHover, setIsHover] = useState(false);
    const isSmall = useMediaQuery("(max-width: 1224px)");

    return (
        <motion.div
            onHoverStart={() => setIsHover(true)}
            onHoverEnd={() => setIsHover(false)}
            className={`flex bg-[#F2F2F2] z-50 pb-12 md:pb-0 flex-col justify-end !w-[350px] md:!w-[250px] lg:!w-[300px] 2xl:!w-[420px] 3xl:!w-[480px] 3xl:!h-[250px] md:size-72 px-10 py-7 md:p-5 no-scrollbar items-start relative cursor-pointer ${className}`}
        >
            <motion.div className='self-start mb-6 md:mb-0 md:self-end grow shrink-0'>
                <Image
                    src={`${baseUrl}${imageUrl}`}
                    alt='hh'
                    className='transition-all duration-1000'
                    width={!isSmall ? (isHover ? 40 : 80) : 40}
                    height={!isSmall ? (isHover ? 40 : 80) : 40}
                />
            </motion.div>

            <h4 className='text-xl xl:text-2xl mb-2'>{title}</h4>

            <motion.p
                className='no-scrollbar mb-6 z-50 text-sm lg:text-base'
                initial={!isSmall ? { height: '0rem', opacity: 0 } : { height: 'auto', opacity: 1 }}
                animate={!isSmall ? {
                    transition: { type: 'keyframes', damping: 10, stiffness: 100 },
                    height: isHover ? 'auto' : '0rem',
                    overflow: isHover ? 'auto' : 'hidden',
                    opacity: isHover ? 1 : 0
                } : {}}
            >
                {description}
            </motion.p>
        </motion.div>
    );
};

export default Feature;
