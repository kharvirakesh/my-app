import React from 'react';
import Image from 'next/image';
import playStoreIcon from '../../../public/playstore.a7ef70fe.svg';
import appleStoreIcon from '../../../public/apple_store.35cc9699.svg';
import logo from '../../../public/MyChoize-logo.0a3a4fd4.svg';

interface IFooterProps {
    property1: any;
}

const Footer: React.FC<IFooterProps> = ({ property1 }: IFooterProps) => {
    return (
        <footer className="bg-gray-900 text-white py-6">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between items-center">
                    {/* Social Media Links */}
                    <div className="mb-4 sm:mb-0">
                        <a href="#" className="mr-4">Facebook</a>
                        <a href="#" className="mr-4">Twitter</a>
                        <a href="#">Instagram</a>
                    </div>

                    {/* Company Name */}
                    <div className="text-lg font-semibold">
                        <Image
                            src={logo}
                            alt="Download on Play Store"
                            className="mr-4"
                            height={150}
                            width={150}
                        />
                    </div>

                    {/* Copyright Information */}
                    <div>
                        &copy; {new Date().getFullYear()} MyChoize All rights reserved.
                    </div>
                </div>

                {/* Icons */}
                <div className="flex justify-center mt-6">
                    {/* Play Store Icon */}
                    <a href="#">
                        <Image
                            src={playStoreIcon}
                            alt="Download on Play Store"
                            className="mr-4"
                            height={60}
                            width={120}
                        />
                    </a>
                    {/* App Store Icon */}
                    <a href="#">
                        <Image
                            src={appleStoreIcon}
                            alt="Download on the App Store"
                            height={60}
                            width={120}
                        />
                    </a>
                </div>

                {/* Location */}
                <div className="mt-4">
                    Your Company Address, City, State, Zip Code
                </div>
            </div>
        </footer>
    );
};

export default Footer;
