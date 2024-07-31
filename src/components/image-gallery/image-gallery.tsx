import React from 'react';
import CS1 from '@/assets/cs-1.png';
import CS2 from '@/assets/cs-2.png';
import CS3 from '@/assets/cs-3.png';
import CS4 from '@/assets/cs-4.png';
import CS5 from '@/assets/cs-5.png';
import CS6 from '@/assets/cs-6.png';
import Image from 'next/image';

const ImageGallery: React.FC = () => {
  const shuffledImages = [CS1, CS2, CS3, CS4, CS5, CS6];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
      {shuffledImages.map((image, index) => (
        <div key={index} className="flex items-center justify-center">
          <Image src={image} alt={`Image ${index + 1}`} objectFit="cover" className="rounded-lg" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
