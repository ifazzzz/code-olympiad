import React, { createContext } from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../Components/Footer';
import Header from '../Components/Header';


export const TopicsContext = createContext();

const Main = () => {
    const {data} = useLoaderData()
    // console.log(data);
    return (
        <div>
            <TopicsContext.Provider value={data}>
                <Header></Header>
                <Outlet></Outlet>
                <Footer></Footer>
            </TopicsContext.Provider>          
        </div>
    );
};

export default Main;