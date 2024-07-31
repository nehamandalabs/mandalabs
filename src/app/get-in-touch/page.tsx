import ContentLayout from '@/components/content-layout/content-layout';
import { MdOutlinePhoneEnabled } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";
import { GoLocation } from "react-icons/go";
import { Button } from '@/components/ui/button';
import { FaArrowRight } from 'react-icons/fa';

const GetInTouch = () => {
    return (
        <>
            <div className='h-auto pt-[150px] pb-30 z-10 relative bg-white flex flex-col md:flex-row'>
                <ContentLayout>
                    <div className="w-full md:w-1/2 p-8">
                        <h1 className="text-4xl leading-[50px] 3xl:text-5xl 3xl:leading-[70px] text-yellow-500 font-medium mb-20">What is your most pressing<br /> technology need?</h1>
                        <div className="flex items-center mt-10">
                            <MdOutlinePhoneEnabled  className='text-3xl'/>
                            <p className="ml-2  text-xl text-black ">01 - 646 784 5386 <br/> 977 - 9828564288</p>
                        </div>

                        <div className="flex items-center mt-10">
                            <IoMailOutline className='text-3xl' />
                            <p className="ml-2  text-xl text-black ">info@mandalabs.com</p>
                        </div>

                        <div className="flex items-center mt-10">
                            <GoLocation  className='text-3xl' />
                            <p className="ml-2  text-xl text-black ">310 4th Ave S Suite 5010<br/>Minneapolis, MN 55415</p>
                        </div>
                    </div>
                    <div className='w-full md:w-1/2 p-8'>
                        <form className="flex flex-col gap-3" action="https://formsubmit.co/nehashah5396@gmail.com" method="POST" target='blank'>
                            <input type="text" placeholder="Full Name" name='name' className="mb-4  flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400d"  required/>
                            <input type="email" placeholder="Email" name='email' className="mb-4  flex h-10 w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400"  required/>
                            <textarea rows={8} placeholder="Message" name='message' className="mb-4  flex  w-full border-none bg-gray-50 dark:bg-zinc-800 text-black dark:text-white shadow-input rounded-md px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600 disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)] group-hover/input:shadow-none transition duration-400" required></textarea>
                            <label className="flex items-center text-black mb-8">
                                You agree to receive email communication from us by submitting this form.
                            </label>
                            <Button className='mt-0 ml-1 text-md w-[150px] align-middle justify-start' variant='withArrow'>Submit  <FaArrowRight className='ml-2' /></Button>
                        </form>
                    </div>
                </ContentLayout>
            </div>
        </>
    );
}

export default GetInTouch;
