import React from 'react';
import MenuBar from '../pages/shared/menubar/MenuBar';
import Footer from '../pages/shared/footer/Footer';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div >
            <MenuBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;