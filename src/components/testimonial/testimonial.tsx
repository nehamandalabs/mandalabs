import React, { useState, useEffect } from 'react';
import Reviewer from '../reviewer/reviewer';
import { Button } from '../ui/button';
import { GoArrowRight } from "react-icons/go";
import { useRouter } from 'next/navigation';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../../components/ui/accordion"
import Card from "./cards"

const users = [
    {
        id: 1,
        name: 'Rapid Project Turnarounds',
        imageUrl: '/fullyintegrated.png',
        heading: '',
        designation: 'Transform tight TIMELINES into TRIUMPHS.',
        review: '<ul></li>You have projects with <span class= "text-yellow-500">tight deadlines.</li></span><li> You are adding new clients. <li/><li>Resources are at <span class= "text-yellow-500">max capacity.</span><li/></ul>',
        companyImageUrl: '/biw.png'
    },
    {
        id: 2,
        name: 'Exploring New Verticals',
        imageUrl: '/projectbased.png',
        designation: 'Opportunity cost of pursuing a new market = ZERO.',
        heading: '',
        review:
            'You want to explore <span class= "text-yellow-500">new markets</span> without worrying about impact on <span class= "text-yellow-500">operational workload.</span>',
        companyImageUrl: '/biw.png'
    },
    {
        id: 3,
        name: 'Validate Ideas / MVP Quickly',
        imageUrl: '/teamaugmentation.png',
        heading: '',
        designation: 'Drive innovation || ZERO to ONE at the speed of thought.',
        review:
            'You have an <span class= "text-yellow-500">idea</span> worth pursuing and want a <span class= "text-yellow-500">proof of concept.</span>',
        companyImageUrl: '/biw.png'
    },
    {
        id: 4,
        name: 'Niche Expertise',
        imageUrl: '/securitytesting.png',
        heading: '',
        designation: 'On-demand assistance that keeps projects ON TRACK.',
        review:
            'Your project requires a <span class= "text-yellow-500">specialized skillset</span> for a <span class= "text-yellow-500">short period of time.</span>',
        companyImageUrl: '/biw.png'
    },
    {
        id: 5,
        name: 'Security Testing',
        imageUrl: '/securitytesting.png',
        heading: '',
        designation: 'Continued focus on core business activities.',
        review:
            'You want <span class= "text-yellow-500">peace of mind</span> that your apps are not  <span class= "text-yellow-500">compromised.</span>',
        companyImageUrl: '/biw.png'
    },

];
const Testimonial = () => {
    const [selectedUser, setSelectedUser] = useState(0);
    const Router = useRouter();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSelectedUser((prevUser) => (prevUser + 1) % users.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='w-full flex justify-center'>
                <div className="flex items-center h-auto w-[90vw] xl:w-[75vw] 3xl:w-[70vw] justify-center">
                    <div className="flex flex-col flex-1 border-2  shadow-inner pb-16 py-10  bg-neutral-600 text-white rounded-[2rem] h-full  justify-center items-center px-1 md:px-10 lg:px-20">
                        <h1 className='text-xl md:text-4xl xl:text-5xl 3xl:text-6xl  3xl:leading-[7rem] mb-[40px] text-white mx-4 md:mx-0 '>What is your most pressing technology need? </h1>
                        <div className="hidden md:flex md:flex-row gap-10 xl:gap-20 w-full ">
                            <div className="user-list flex flex-col gap-10 w-full md:w-[250px] lg:w-[20vw]">
                                {users.map((user, index) => (
                                    <div
                                        key={user.id}
                                        onClick={() => setSelectedUser(index)}
                                        onMouseEnter={() => setSelectedUser(index)}
                                        className={`cursor-pointer w-full ${index === selectedUser ? 'text-blue-500' : ''}`}
                                    >
                                        <Reviewer imageUrl={user.imageUrl} name={user.name} designation={user.designation} active={selectedUser} index={index} />
                                    </div>
                                ))}
                            </div>
                            <div className="review-content w-[70%]">
                                <div key={users[selectedUser].id} className="xl:p-4  flex flex-col justify-between items-end h-full">
                                    <div className='h-auto'>
                                        <span className='text-4xl leading-[45px] xl:text-5xl font-bold xl:leading-[65px] text-white rounded-md py-10 transition-all duration-1000 h-auto ' dangerouslySetInnerHTML={{ __html: users[selectedUser].review }} />
                                    </div>
                                    <div className='flex  justify-between w-full items-end gap-4'>
                                        <p className=' text-base xl:text-xl pb-[19.5px]'>{users[selectedUser].designation}</p>
                                        <Button variant={"withArrow"} className='text-xl' onClick={() => Router.push('/get-in-touch')}>Let&apos;s Discuss <GoArrowRight className='ml-2' /></Button>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="relative h-auto px-2 flex flex-col items-center justify-start md:hidden">
                            {users.map((user, index) => {
                                 const isActive = scrollY;       
                                   return(
                                    <div className="p-4 relative mb-4 w-80 h-48 bg-neutral-800 shadow-lg rounded-lg transition-transform duration-300" key={index}>
                                        <h2 className="text-lg font-bold border-b-2">{user.name}</h2>
                                        <span className="mt-2" dangerouslySetInnerHTML={{ __html: user.review }} />
                                    </div>
                                   )
                               
                            })}
                        </div>
                        {/* <div className='md:hidden'>
                            {users.map((user, index) => (
                                <div key={user.id} className='w-[90vw] px-4 py-2'>
                                    <Accordion type="single" collapsible className="w-full">
                                        <AccordionItem value="item-1">
                                            <AccordionTrigger className='text-xl border-b-2 w-full'>{user.name}</AccordionTrigger>
                                            <AccordionContent>
                                            <p className='text-xl pt-4' dangerouslySetInnerHTML={{ __html: user.review }}/>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </Accordion>
                                </div>
                            ))}
                        </div> */}

                    </div>
                </div>
            </div>
        </>
    );

};

export default Testimonial;
