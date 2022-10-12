import React from 'react';

import './Header.css'
const Header = () => {
    return (

        <div className="hero screen" style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")`
        }}>
            <div className="hero-overlay bg-opacity-70"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className='mb-5 text-4xl font-bold'>Welcome to Quiz Buzz</h1>
                    <p className="mb-5">Welcome to the world's largest quiz community. Play a quiz or create your own. Join a virtual or live event.</p>
                    <a className="btn btn-primary">Get Started</a>
                </div>
            </div>
        </div>

    );
};

export default Header;