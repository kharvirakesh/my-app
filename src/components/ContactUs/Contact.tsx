import React, { forwardRef, ForwardedRef } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface IContactProps {
  // Add a ref prop of type MutableRefObject or RefObject
  // Use ForwardedRef to define the correct type for ref
  ref?: ForwardedRef<HTMLDivElement | null>;
}

// Use forwardRef to forward the ref to the DOM element
const Contact: React.ForwardRefRenderFunction<HTMLDivElement, IContactProps> = ({}, ref) => {
  return (
    <div id="contact" className="bg-gray-100 px-20 py-5">
      <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
        <Typography className='flex justify-center font-bold text-3xl leading-10 my-9' color='primary'>
          Contact Us
        </Typography>
        <form>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextField
              label="Name"
              variant="outlined"
              size='small'
              required
              className="mb-4"
            />
            <TextField
              label="Email"
              size='small'
              variant="outlined"
              required
              className="mb-4"
            />
          </div>
          <TextField
            label="Message"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            required
            className="mb-4"
          />
          <Button variant="outlined" color="primary" size="large">
            Send Message
          </Button>
        </form>
      </div>
    </div>
  );
};

// Use React.forwardRef to forward the ref to the DOM element
export default forwardRef(Contact);
