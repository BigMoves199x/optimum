import React from 'react';
import Header from '../ui/Header';
import LoginForm from '../ui/LoginForm';
import Promotions from '../ui/Promotions';
import Promotionz from '../ui/Promotionz';
import Footer from '../ui/Footer';

const Home = () => {
    return (
        <div className="bg-gray-200 min-h-screen">
            <Header />
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="flex justify-center">
                        <LoginForm />
                    </div>
                    <div className="flex justify-center">
                        <Promotionz />
                    </div>
                    <div className="flex justify-center">
                        <Promotions />
                    </div>
                </div>
            </div>
            <Footer />

        </div>
    );
};

export default Home;
