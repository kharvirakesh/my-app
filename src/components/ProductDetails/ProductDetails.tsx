import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import { Typography, Button, Grid } from '@mui/material';

interface IProductDetailsProps {
  product: {
    id: number;
    name: string;
    images: string[];
    description: string;
    price: number;
    rating: number;
  };
}

const ProductDetails: React.FC<IProductDetailsProps> = ({ product }) => {
  const { name, images, description, price, rating } = product;

  return (
    <div className="container mx-auto p-4">
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          {/* Iterate over the images and render a ReactImageMagnify component for each */}
          {images?.map((image, index) => (
            <ReactImageMagnify
              key={index}
              {...{
                smallImage: {
                  alt: 'Product Image',
                  isFluidWidth: true,
                  src: image,
                },
                largeImage: {
                  src: image,
                  width: 800,
                  height: 800,
                },
                enlargedImagePosition: 'beside', // Set to 'beside'
              }}
            />
          ))}
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" gutterBottom>
            {name}
          </Typography>
          <Typography variant="body1" paragraph>
            {description}
          </Typography>
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
    </div>
  );
};

export default ProductDetails;
