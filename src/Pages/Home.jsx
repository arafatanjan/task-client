import React from 'react';
import Banner from '../Components/home/Banner';
import Products from '../Components/home/Products';
import Accordian from '../Components/home/Accordian';
import { useLoaderData } from "react-router-dom";
import CardComponent from '../Components/home/CardComponent';
import Header from '../Components/home/Header';
import Liveshopping from '../Components/home/Liveshopping';
import MuslimFashion from '../Components/home/MuslimFashion';


const Home = () => {
    const data = useLoaderData();
   //console.log(data);
    return (
        <div>
        <Header/>
            <Banner/>
             <Products/> 
             <Liveshopping/>
            {/* <Accordian/> */}
            {/* <CardComponent/>  */}
            <MuslimFashion/>
            
            
        </div>
    );
};

export default Home;