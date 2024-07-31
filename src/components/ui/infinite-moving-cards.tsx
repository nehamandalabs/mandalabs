"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import './style.css';
import sanitizeHtml from 'sanitize-html';
import parse from 'html-react-parser';
import Image from "next/image";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string;
        name: string;
        title: string;
        imageUrl: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            });

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    const cleanHtml = (dirtyHtml: string) => {
        return sanitizeHtml(dirtyHtml, {
            allowedTags: ['b', 'i', 'em', 'strong', 'a', 'p', 'br', 'span'],
            allowedAttributes: {
                'a': ['href'],
                'span': ['class']
            }
        });
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "scroller relative z-20 w-[85rem] 3xl:w-[110rem] overflow-hidden ",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    " flex min-w-full h-[300px] md:h-[400px] shrink-0 gap-2 md:gap-14 py-4 w-max flex-nowrap",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (

                    <li
                        key={item.quote}
                        className="w-[350px] max-w-full text-black  relative rounded-3xl border shadow-md flex-shrink-0 px-4 py-4 md:px-8 md:py-16 md:w-[450px] 2xl:w-[650px]"
                        style={{
                            background:
                                "white",
                        }}

                    >
                        <blockquote>
                            <div className="relative z-20 mb-6 flex flex-row items-center">
                                <div className="flex gap-2 md:gap-4 ">
                                    <div >
                                        <Image src={item.imageUrl} alt="images" width={50} height={50} className="rounded-full"/>
                                    </div>
                                    <div className="flex flex-col md:gap-1">
                                        <span className="text-base md:text-lg  leading-[1.6] font-bold">
                                            {item.name}
                                        </span>
                                        <span className=" text-xs md:text-sm leading-[1.6] text-gray-700 font-normal">
                                            {item.title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div
                                aria-hidden="true"
                                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                            ></div>
                            <span className=" relative z-20 text-lg md:text-2xl md:leading-[1.6] font-normal ">
                                {parse(cleanHtml(item.quote))}

                            </span>

                        </blockquote>
                    </li>
                ))}
            </ul>
        </div>
    );
};
