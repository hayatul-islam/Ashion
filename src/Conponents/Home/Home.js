import React from 'react';
import Header from '../Header/Header';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <Products />
        </div>
    );
};

export default Home;