import { Typography, Box } from '@mui/material';
import React, { useEffect } from 'react';
// import FeatureCard from './featureCard';
import { cameras } from '../../constants/index';
import TrendingTabs from './Tabs';
import CarouselCard from './CarouselCard';

interface ICarouselProps {
    property1: any;
}

const Carousel = ({ property1 }: ICarouselProps) => {

    // Add a useEffect to ensure Tabs are only rendered on the client side
    useEffect(() => {
        // Import and initialize any client-side-only components or libraries here
    }, []);

    return (
        <div className='my-10'>
            <Typography className='flex justify-center font-bold text-3xl leading-10 my-9' color='primary'>
                Trending offers
            </Typography>

            <Box className='mx-10'>
                <TrendingTabs />
            </Box>


            <div className='flex flex-row justify-center gap-4'>
                {Array.isArray(cameras) && cameras?.length > 1 && cameras?.map((camera) => {
                    return (
                        <>
                        <CarouselCard cameras={camera}/>
                        </>
                        // <FeatureCard key={benefit.id} benefit={benefit} />
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
