import { Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';

interface IFeatureCardProps {
    benefit: IBenefit;
}

interface IBenefit {
    id: number;
    name: string;
    svg: any;
}

const FeatureCard = ({ benefit }: IFeatureCardProps) => {
    const { id, name, svg } = benefit;
    const [isHovered, setIsHovered] = useState(false);

    const containerStyle = {
        border: isHovered ? 'none' : '2px solid', // Border changes on hover
        color: isHovered ? 'white' : 'white', // Text color changes on hover
      };

    return (
        <div key={id} className='h-auto w-auto border-solid border-2 rounded flex flex-row p-6 items-center hover:bg-[#343070] hover:border-transparent hover:text-white'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        >
            <div>
                <Image
                    src={svg}
                    width={70}
                    height={70}
                    alt="name"
                    style={containerStyle}
                />
            </div>
            <div className='ml-5 font-bold text-3xl leading-10'>
                <Typography>
                    <b>{name ?? ''}</b>
                </Typography>
            </div>
        </div>
    );
};

export default FeatureCard;
