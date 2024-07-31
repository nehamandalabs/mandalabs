import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';
import { FaArrowRight } from 'react-icons/fa';
import Feature from '../feature/feature';
import './styles.scss';

const WhyUs = () => {
    const Router = useRouter();

    return (
        <div className='flex  xl:min-h-screen items-center mt-20'>
            <div className='flex flex-col justify-start text-start w-full mx-1 xl:mx-16 3xl:mx-[122px]'>
                <div className='font-light mb-10  text-center md:!leading-[72px] line-150 text-shadow text-xl md:text-4xl md:text-start lg:text-[55px]  3xl:text-6xl text-neutral-600'> <span className='text-yellow-500'>Leverage technology</span><br /> as a  strategic enabler for your business</div>
                <div className={`why-us `}>
                    <Feature className='feature-1' title='Optionality' description='In a dynamic and unpredictable world, our team provides you with the flexibility to navigate technology changes seamlessly - add new features, reduce team workload, take on new projects, pay off tech debt' imageUrl='/icon1.svg' />
                    <Feature className='feature-2' title='Unlimited Upside' description='Partnering together - at a fraction of your average cost - limits downside risk, while unlocking unlimited upside in high value, high impact, best-in-class technology deliverables.' imageUrl='/icon2.svg' />
                    <Feature className='feature-3' title='Excellence' description='We work together to produce high-quality technological outcomes for your clients. Every. Single. Time. Consistent quality compounds over time into unbeatable excellence for your team and your organization.' imageUrl='/icon3.svg' />
                </div>
                <div className='flex justify-center'>
                <Button variant='withArrow' className='xl:mt-14' onClick={()=>Router.push('/get-in-touch')}>Let&apos;s Discuss Today <FaArrowRight className='ml-2 ' /> </Button>
                </div>
            </div>
        </div>
    )
}

export default WhyUs