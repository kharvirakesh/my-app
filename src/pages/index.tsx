// @react-server use client
import { Inter } from 'next/font/google';
import ResponsiveAppBar from '@/components/Appbar';
import { ThemeProvider } from '@mui/material';
import { theme } from '../theme/theme';
import createEmotionCache from '../utils/createEmotionCache';
import { CacheProvider } from '@emotion/react';
import FeaturesAndBenefits from '@/components/FeaturesAndBenefits/features';

// Explicitly define the types for the props
interface HomeProps {
  Component: React.ComponentType<any>;
  emotionCache?: ReturnType<typeof createEmotionCache>;
  pageProps: Record<string, any>;
}

const inter = Inter({ subsets: ['latin'] });

const clientSideEmotionCache = createEmotionCache();

export default function Home({ Component, emotionCache = clientSideEmotionCache, pageProps }: HomeProps) {
  // Add some console.log statements to debug
  console.log('Component:', Component);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        {/* Check if Component is valid */}
        {Component ? <Component {...pageProps} /> : null}
        <ResponsiveAppBar />
        <FeaturesAndBenefits property1={undefined} />
      </ThemeProvider>
    </CacheProvider>
  );
}
