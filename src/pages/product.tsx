import React from 'react';
import ResponsiveAppBar from '@/components/Appbar';
import Footer from '@/components/Footer.tsx/Footer';
import ProductDetails from '@/components/ProductDetails/ProductDetails';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <ResponsiveAppBar />
            <ProductDetails
                product={{
                    id: 0,
                    name: 'Nikon Z30 Camera',
                    images: [
                        'https://ik.imagekit.io/faskf16pg/dslr-cameras/GoPro_5_Inclusions__4__mfcI-yolN.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661258329305',
                        'https://ik.imagekit.io/faskf16pg/dslr-cameras/GoPro_5_Inclusions__3__q9hKEq2WZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1661427540350'
                    ],
                    description: 'Nikon Z30 Camera',
                    price: 500,
                    rating: 5
                }} />
            <Footer />
        </div>
    );
};

export default Layout;
