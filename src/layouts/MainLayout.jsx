import React from 'react';
import Navbar from '../Components/home/NavbarPage';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Components/home/Footer';

const MainLayout = () => {
    const location = useLocation();

    const noNavbarRoutes = ['/merchantcorner'];

    return (
        <div>
            {!noNavbarRoutes.includes(location.pathname) && <Navbar />}
            
            <Outlet/>
           
            <Footer/>
        </div>
    );
};

export default MainLayout;