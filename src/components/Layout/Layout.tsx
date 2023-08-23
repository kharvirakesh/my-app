import { Box } from '@mui/material';
import React from 'react'
import ResponsiveAppBar from '../Appbar';
import Footer from '../Footer.tsx/Footer';

interface ILayoutProps {
    Component: any;
    pageProps: any;
}

const Layout = ({ Component, pageProps }: ILayoutProps) => {
    return (
        <Box>
            <ResponsiveAppBar />
            <Component {...pageProps} />
            <Footer />
        </Box>
    )
}

export default Layout