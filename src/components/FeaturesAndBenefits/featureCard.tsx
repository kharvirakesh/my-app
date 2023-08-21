import { Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

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
    return (
        <div className='h-auto w-auto border-solid border-2 rounded flex flex-row p-6 items-center hover:bg-[#343070] hover:border-none'>
            <div>
                <Image
                    src={svg}
                    width={70}
                    height={70}
                    alt="name"
                />
            </div>
            <div className='ml-5 font-bold text-3xl leading-10'>
                <Typography color='primary'>
                    <b>{name ?? ''}</b>
                </Typography>
            </div>
        </div>
    );
};

export default FeatureCard;
