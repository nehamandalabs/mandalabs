'use client';
import NextLink from 'next/link';
import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';
import ContentLayout from '../content-layout/content-layout';
import { Button } from '../ui/button';

interface TitleProps {
  title: string;
  tags: string[];
  isActive: boolean;
  onHover: () => void;
  link: string;
}

const Title: React.FC<TitleProps> = ({ title, tags, isActive, onHover, link }) => {
  return (
    <div
      className='flex justify-between w-100 items-center cursor-pointer h-10'
      onMouseEnter={onHover}
    >
      <NextLink href={link} passHref className='no-underline text-white-500'>
        <h1 className="text-4xl font-bold text-white" >{title}</h1>
      </NextLink>
      <div className="text-white flex gap-10">
        {isActive && tags.map((tag, index) => (
          <Button
            key={index}
            variant='tags'
          >
            {tag}
          </Button>
        ))}
      </div>
    </div>
  );
};

const WhatWeOffer: React.FC = () => {
  const titles = [
    { title: 'Innovate and Design', tags: ['UI/UX Design', 'Research', 'Branding'], background: '/ai.png', pageLink: '/innovate-and-design' },
    { title: 'Security Testing', tags: ['VAPT', 'Audit', 'Consulting'], background: '/st.jpg' },
    { title: 'Team Augmentation', tags: ['DevOps & SysAdmin', 'Webs apps & Websites'], background: '/id.jpg' },
    { title: 'Data & AI', tags: ['ML', 'LLMs', 'Analytics'], background: '/st.jpg' },
  ];

  const [activeTitle, setActiveTitle] = useState(titles[0].title);
  const [lastHoveredTitle, setLastHoveredTitle] = useState(titles[0].title); // Initialize with the title of the first item

  const handleTitleHover = (title: string) => {
    setLastHoveredTitle(title);
    const tags = titles.find((t) => t.title === title)?.tags || [];
  };

  // Define an animated background based on the lastHoveredTitle
  const backgroundStyles = useSpring({
    backgroundImage: `url(${titles.find((t) => t.title === lastHoveredTitle)?.background})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  });

  return (
    <animated.div
      className={`h-full flex transition-all duration-300 ease-in-out`}
      style={backgroundStyles}
    >
      <div className='flex w-full pb-30 pt-30' style={{ background: 'rgba(0,0,0,0.8)' }}>
        <ContentLayout>
          <div className="flex flex-col w-full gap-20">
            <h1 className="text-2xl text-white">What We Offer</h1>
            {titles.map((titleData) => (
              <Title
                key={titleData.title}
                title={titleData.title}
                link={titleData.pageLink || ''}
                tags={titleData.tags}
                isActive={activeTitle === titleData.title}
                onHover={() => {
                  setActiveTitle(titleData.title);
                  handleTitleHover(titleData.title);
                }}
              />
            ))}
          </div>
        </ContentLayout>
      </div>
    </animated.div>
  );
};

export default WhatWeOffer;
