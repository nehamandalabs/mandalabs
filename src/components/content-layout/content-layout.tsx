import React from 'react';

interface ContentLayoutProps {
    children: any;
    className?: string;
}
const ContentLayout = ({ children , className}: ContentLayoutProps) => {
  return (
    <section className={`flex flex-col md:flex md:flex-row justify-between w-full mx-1 md:mx-20 lg:mx-32 xl:mx-40 2xl:mx-48 ${className}`}>
      {children}
    </section>
  );
};

export default ContentLayout;
