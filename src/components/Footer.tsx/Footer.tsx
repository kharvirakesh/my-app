import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import Image from 'next/image';
import logo from '../../../public/MyChoize-logo.0a3a4fd4.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

interface IFooterProps {}

const Footer: React.FC<IFooterProps> = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <Box className="container mx-auto p-8">
        <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Box className="text-center md:text-left flex flex-col items-center md:items-start">
            <Box className="text-lg font-semibold pb-2">
              <Image
                src={logo}
                alt="Download on Play Store"
                className="mr-4"
                height={150}
                width={150}
              />
            </Box>
            <Typography className="text-center md:text-left">
              MyChoize self drive cars is a self drive brand owned by ORIX,
              Japan’s second largest self drive car rental company
            </Typography>
            <Box className="py-4 space-x-2 flex justify-center md:justify-start">
              <FacebookIcon />
              <InstagramIcon />
              <TwitterIcon />
            </Box>
          </Box>
          <Box className="text-center md:text-left">
            <Typography className="inline-block border-b-2 border-white pb-2">
              <b>Helpful Links</b>
            </Typography>
            <Typography className="pt-4">About</Typography>
            <Typography>Deals</Typography>
            <Typography>Contact</Typography>
            <Typography>FAQ</Typography>
            <Typography>Terms & Conditions</Typography>
            <Typography>Privacy Policy</Typography>
          </Box>
          <Box className="text-center md:text-left">
            <Typography className="inline-block border-b-2 border-white pb-2">
              <b>Reach Us</b>
            </Typography>
            <Box className="py-4 space-x-2">
              <Stack direction="row" className="inline-flex space-x-2">
                <ShareLocationIcon />
                <Typography>
                  ORIX Auto Infrastructure Services Limited. Plot No - 94, Marol
                  Co-operative Industrial Estate, Andheri-Kurla Road, Andheri(E),
                  Mumbai - 400059
                </Typography>
              </Stack>
              <Stack direction="row" className="inline-flex space-x-2">
                <MailOutlineIcon />
                <Typography>carrentals@orixindia.com</Typography>
              </Stack>
              <Stack direction="row" className="inline-flex space-x-2">
                <PhoneInTalkIcon />
                <Typography>+91 95-1234-1234</Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
