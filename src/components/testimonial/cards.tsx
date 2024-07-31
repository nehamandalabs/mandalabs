import React, { useEffect, useState } from 'react';
import './card.scss'; // Import your custom styles if you're using an external CSS file

const Cards = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="relative h-auto px-2 flex flex-col items-center justify-start md:hidden">
            {/* Card 1 */}
            <div className="p-4 relative mb-4 w-80 h-48 bg-neutral-800 shadow-lg rounded-lg transition-transform duration-300">
                <h2 className="text-lg font-bold border-b-2">Rapid Project Turnarounds</h2>
                <ul className="mt-2 list-disc pl-5 text-white">
                    <li>You have projects with <span className="text-yellow-500">tight deadlines.</span></li>
                    <li>You are adding new clients.</li>
                    <li>Resources are at <span className="text-yellow-500">max capacity.</span></li>
                </ul>
            </div>

            {/* Card 2 */}
            <div
                className="p-4 relative mb-4 w-80 h-48 bg-neutral-800 shadow-lg rounded-lg transition-transform duration-300 sticky-card"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                <h2 className="text-lg font-bold border-b-2">Exploring New Verticals</h2>
                <p className="mt-2 text-white">
                    You want to explore <span className="text-yellow-500">new markets</span> without worrying about impact on <span className="text-yellow-500">operational workload.</span>
                </p>
            </div>

            {/* Card 3 */}
            <div className="p-4 relative mb-4 w-80 h-48 bg-neutral-800 shadow-lg rounded-lg transition-transform duration-300">
                <h2 className="text-lg font-bold border-b-2">Validate Ideas / MVP Quickly</h2>
                <p className="mt-2 text-white">
                    You have an <span className="text-yellow-500">idea</span> worth pursuing and want a <span className="text-yellow-500">proof of concept.</span>
                </p>
            </div>

            {/* Card 4 */}
            <div className="p-4 relative mb-4 w-80 h-48 bg-neutral-800 shadow-lg rounded-lg transition-transform duration-300">
                <h2 className="text-lg font-bold border-b-2">Niche Expertise</h2>
                <p className="mt-2 text-white">
                    Your project requires a <span className="text-yellow-500">specialized skillset</span> for a <span className="text-yellow-500">short period of time.</span>
                </p>
            </div>

            {/* Card 5 */}
            <div className="p-4 relative mb-4 w-80 h-48 bg-neutral-800 shadow-lg rounded-lg transition-transform duration-300">
                <h2 className="text-lg font-bold border-b-2">Security Testing</h2>
                <p className="mt-2 text-white">
                    You want <span className="text-yellow-500">peace of mind</span> that your apps are not <span className="text-yellow-500">compromised.</span>
                </p>
            </div>
        </div>
    );
};

export default Cards;
