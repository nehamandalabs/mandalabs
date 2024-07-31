"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem]  mx-4 md:mx-0 rounded-md flex flex-col antialiased dark:bg-black dark:bg-grid-white/[0.05] justify-center 3xl:justify-start relative overflow-hidden">
      <h1 className="text-3xl md:text-6xl text-start md:leading-[5rem] text-yellow-500 mb-4">What Our Clients Say</h1>
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Mandalabs has been an incredable strategic <span class='gradient-bg'>partner</span>  <b>for my team and </b>our customers. I would highly recommend Mandalabs.",
    name: "Jeanne Tompkins",
    title: "Division VP @ BI Worldwide",
    imageUrl: '/jeanne.png',
  },
  {
    quote:
      "A seamless extension of our local <span class='gradient-bg'>development team...</span> <b>a serious differentiator and value </b>proposition in the IT services industry!!",
    name: "Brian Kant",
    title: "Application Manager @ BI Worldwide",
    imageUrl: '/brian.png',
  },
  {
    quote: "Fully integrated into our development workflow and <b>I'm able to focus on a single </b>project and <span class='gradient-bg'>make proactiove </span>improvements on our products. It's been a game changer!",
    name: "Marty Kokes",
    title: "Senior Javascript Engineer @ BI Worldwide",
    imageUrl: '/marty.png',
  },
  {
    quote:
      "This partnership has helped <b>our team complete steep requirements </b>when we were just drowing in work.",
    name: "Erick Lee",
    title: "Senior Javascript Engineer @ BI Worldwide",
    imageUrl: '/erick.png',
  },

];
