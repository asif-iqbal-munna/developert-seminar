import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <header className="bg-light p-5 text-center">
            <div className="contianer">
                <div className="row">
                    <h1>Welcome To The <span className="text-info">Biggest Developers Seminar</span> In USA</h1>
                    <h3>Total Budget For The Seminar: $1000000</h3>
                </div>
            </div>
        </header>
    );
};

export default Header;