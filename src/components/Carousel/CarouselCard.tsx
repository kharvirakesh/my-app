import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router'

interface ICarouselCardProps {
  cameras: ICameras;
}

interface ICameras {
  id: number;
  name: string;
  svg1: any;
  svg2: any;
  actualPrice: number,
  discountPrice: number,
}

const CarouselCard = ({ cameras }: ICarouselCardProps) => {
  const { id, name, svg1, svg2, actualPrice, discountPrice } = cameras;
  const router = useRouter()

  const [hoverImage, sethoverImage] = useState<boolean>(false);

  const handleViewPrice = () => {
    router.push({
      pathname:'/product',
      query:'id=',
    });
  };

  const onMouseEnter = () => {
    sethoverImage(true);
  };

  const onMouseLeave = () => {
    sethoverImage(false);
  };

  return (
    <Box
      className={`border-solid border-2 rounded-lg flex flex-col p-6 items-center w-[250px] shadow-md transform ${hoverImage ? 'scale-105' : ''
        } transition-transform`}
      key={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Box>
        <Image
          src={!hoverImage ? svg1 : svg2}
          width={250}
          height={250}
          alt="name"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        // style={containerStyle}
        />
      </Box>
      <Box className='flex justify-start'>
        <Typography>
          <b>{name && name.length > 22 ? `${name.substring(0, 22)}...` : name}</b>
        </Typography>
      </Box>
      <Box className='flex justify-start'>
        <Typography>
          <span className="line-through text-xs">
            ₹{actualPrice}&nbsp;
          </span>
          <span style={{ color: "#3877CC" }}>
            ₹{discountPrice}
          </span>&nbsp;-&nbsp;
          <span style={{ color: "#57BB63" }}>
            28% OFF
          </span>
        </Typography>
      </Box>
      <Box className='my-2'>
        <Button variant='outlined' color='primary' onClick={handleViewPrice}>View Details</Button>
      </Box>
    </Box>
  )
}

export default CarouselCard