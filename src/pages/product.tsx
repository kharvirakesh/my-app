import React from 'react';
import ResponsiveAppBar from '@/components/Appbar';
import Footer from '@/components/Footer.tsx/Footer';
import ProductDetails from '@/components/ProductDetails/ProductDetails';
import svg1 from '../../public/dslr_3_9sh_KCAXcM.webp';
import svg2 from '../../public/GoPro_5_Inclusions__2__eTX3CcqIyV.webp';
// dslr_4_5-L94tVLv

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <ProductDetails
                product={{
                    id: 0,
                    name: 'Nikon Z30 Camera',
                    images: [
                        svg1,
                        svg2,
                    ],
                    description: 'Rent with confidence',
                    price: 500,
                    rating: 5
                }} />
            <Footer />
        </div>
    );
};

export default Layout;
