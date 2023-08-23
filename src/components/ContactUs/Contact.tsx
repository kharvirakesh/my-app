import React from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';

interface IContactProps { }

const Contact: React.FC<IContactProps> = () => {
  return (
    <div className="bg-gray-100 px-20 py-5">
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
              // width='240'
              // fullWidth
              required
              className="mb-4"
            />
            <TextField
              label="Email"
              size='small'
              variant="outlined"
              // fullWidth
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

export default Contact;
