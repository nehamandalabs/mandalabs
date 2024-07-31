import Image from 'next/image';
import React from 'react';
import { baseUrl } from '../../../constant';

export interface ReviewerProps {
  imageUrl: string;
  name: string;
  designation: string;
  active: number;
  index: number;
}

const Reviewer: React.FC<ReviewerProps> = ({ imageUrl, name, designation, active,index }) => {
const activeUser = active === index;
  const textColor = activeUser ? "text-black" : "text-white";
  const imageOpacity = activeUser ? 1 : 0.5;

  return (
    <div className={`flex items-center border-2 text-center h-[70px] p-5 rounded-xl xl:rounded-2xl ${activeUser ? 'bg-yellow-500 shadow-md  border-yellow-500' : 'opacity-75 border-white'}`}>
      {/* <div className="w-30 h-30 rounded-full overflow-hidden mr-4 flex-2">
        <Image
          src={`${baseUrl}${imageUrl}`}
          alt={name}
          className={`w-[70px] h-[70px] object-cover ${activeUser ? 'opacity-100' : 'opacity-50'}`}
          style={{ opacity: imageOpacity }} // Set opacity directly for compatibility
          width={30}
          height={30}
        />
      </div> */}
      <div className={`flex flex-col flex-8 ${textColor}`}>
        <h4 className="text-lg font-semibold leading-7 ">{name}</h4>
        {/* <p className="text-base leading-6">{designation}</p> */}
      </div>
    </div>
  );
};

export default Reviewer;
