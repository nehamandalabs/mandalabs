'use client';
import HeroBanner from "@/components/hero-banner/hero-banner"
import Loading from "@/components/loading/loading";
import Testimonial from "@/components/testimonial/testimonial";
import WhyUs from "@/components/why-us/why-us";
import { Suspense, useEffect, useState } from "react";
import { Inter } from 'next/font/google';
import { TracingBeam } from '@/components/ui/tracing-beam'
import { InfiniteMovingCardsDemo } from "@/components/InfinitemovingCard/InfiniteMovingCard";

const inter = Inter({ subsets: ['greek-ext'] })

export default function Home() {
    const [loading, setLoading] = useState(true);

    const sleep = (ms: any) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
    };

    useEffect(() => {
        const fetchData = async () => {
            const isFirstTime = window.sessionStorage.getItem('isFirstTime');
            if (isFirstTime === "true") {
                setLoading(false);
                return;
            } else {
                await sleep(5000);
                setLoading(false);
                window.sessionStorage.setItem('isFirstTime', "true");
            }

        };

        fetchData();
    }, []);


    return (
        <div className={inter.className}>
            <Suspense fallback={<p>Loading...</p>}>
                {loading && <Loading />}
                <div className="hidden md:block">
                    <TracingBeam>
                        <HeroBanner />
                        <Testimonial />
                        <WhyUs />
                        <InfiniteMovingCardsDemo />
                    </TracingBeam>
                </div>

                <div className="block md:hidden">
                    <HeroBanner />
                    <Testimonial />
                    <WhyUs />
                    <InfiniteMovingCardsDemo />
                </div>


            </Suspense>
        </div>
    )
}
