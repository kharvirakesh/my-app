import React, { useState } from 'react';
import { Typography, Button, Grid, Stack } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import PaymentIcon from '@mui/icons-material/Payment';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

interface IProductDetailsProps {
  product: {
    id: number;
    name: string;
    images: any[];
    description: string;
    price: number;
    rating: number;
  };
}

const ProductDetails: React.FC<IProductDetailsProps> = ({ product }) => {
  const { name, images, description, price, rating } = product;
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index);
  };

  return (
    <div className="container mx-auto p-4">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <div className='p-20'>
            {/* Iterate over the images and render a ReactImageMagnify component for each */}
            <Carousel
              showThumbs={false}
              selectedItem={selectedImageIndex}
              onClickItem={(index) => handleImageClick(index)}
            >
              {images?.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    alt={`Product Image ${index}`}
                    width={500}
                    height={500}
                    objectFit="contain"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h6" gutterBottom>
            <b>{name}</b>
          </Typography>
          <Typography variant="body1" paragraph style={{ borderBottom: '1px solid #ccc' }}>
            {description}
          </Typography>

          <div className='py-3'>
            <Stack direction='row' className='p-3'>
              <EventAvailableIcon /> &nbsp;
              <Typography>
                Great quality promise
              </Typography>
            </Stack>

            <Stack direction='row' className='p-3'>
              <AirportShuttleIcon /> &nbsp;
              <Typography>
                FREE delivery & returns
              </Typography>
            </Stack>

            <Stack direction='row' className='p-3'>
              <PaymentIcon /> &nbsp;
              <Typography>
                Pay on delivery available
              </Typography>
            </Stack>
          </div>

          <div>
            <Button variant='contained' color='primary'>
              Select Dates &nbsp; <CalendarMonthIcon />
            </Button>
          </div>

          <Typography variant="h6">
            Price: ${price}
          </Typography>
          <Typography variant="h6">
            Rating: {rating} / 5
          </Typography>
          <Button variant="outlined" color="primary">
            Buy Now
          </Button>
        </Grid>
      </Grid>

      {/* Display the selected image from the carousel in the magnifier area */}
      {/* <div className="w-64 mt-4">
        <Image
          src={images[selectedImageIndex]}
          alt={`Product Image ${selectedImageIndex}`}
          width={300}
          height={300}
          objectFit="cover"
        />
      </div> */}

      {/* Display the image carousel */}
      {/* <Carousel
        showThumbs={false}
        selectedItem={selectedImageIndex}
        onClickItem={(index) => handleImageClick(index)}
      >
        {images?.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              alt={`Product Image ${index}`}
              width={800}
              height={800}
              objectFit="contain"
            />
          </div>
        ))}
      </Carousel> */}
    </div>
  );
};

export default ProductDetails;
