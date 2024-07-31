"use client";
import React from "react";
import TechStack from "./TechStack";


export function Technologiesweuse() {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full '>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-8  my-10">
        <TechStack title='Web' />
        <TechStack title='Mobile' />
        <TechStack title='Cloud' />
        <TechStack title='Deployment' />
      </div>
    </div>
  );
}
