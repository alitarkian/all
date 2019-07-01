import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './footer';
import '../../css/header.css';

function home() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default home;