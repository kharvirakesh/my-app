import { Typography } from '@mui/material';
import React from 'react';
import FeatureCard from './featureCard';
import { benefits } from '../../constants/index';

interface IFeaturesAndBenefitsProps {
  property1: any;
}

const FeaturesAndBenefits = ({ property1 }: IFeaturesAndBenefitsProps) => {
  return (
    <div>
      <Typography className='flex justify-center font-bold text-3xl leading-10 my-9' color='primary'>
        Features & Benefits
      </Typography>

      <div className='flex flex-row justify-center gap-4'>
        {Array.isArray(benefits) && benefits?.length > 1 && benefits?.map((benefit) => {
          return (
            <FeatureCard key={benefit.id} benefit={benefit} />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesAndBenefits;
