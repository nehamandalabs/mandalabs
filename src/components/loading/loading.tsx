import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import LoadingImage from '@/assets/load.png';
import { motion } from "framer-motion";

const Loading = () => {
    const [childAnimationComplete, setChildAnimationComplete] = useState(false);
    const [bgColor, setBgColor] = useState('white');

    useEffect(() => {
        const isFirstTime = window.localStorage.getItem('isFirstTime');
        if (isFirstTime === "true") {
            setBgColor('white');
        } else {
            setBgColor('black');
        }
    }, []);

    return (
        <motion.div
            initial={{ y: '0%' }}
            animate={childAnimationComplete ? { y: ['0%', '-100%'] } : {}}
            transition={{
                duration: 1.5
            }}
            className={`w-full fixed z-50 h-screen bg-${bgColor} flex items-center justify-center`}>
            <motion.div
                onAnimationComplete={() => setChildAnimationComplete(true)}
                initial={{ y: 1000, scale: 1.8 }}
                animate={{ y: [800, -20, 10], scale: [2, 1.6] }}
                transition={{ duration: 1.5 }}>
                <Image src={LoadingImage} alt="Loading" className="w-[600px]" />
            </motion.div>
        </motion.div>
    );
}

export default Loading;
