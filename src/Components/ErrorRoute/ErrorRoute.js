import React from 'react';
import { Link } from 'react-router-dom';

const ErrorRoute = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1579373903781-fd5c0c30c4cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80")` }}>
                <div className="hero-overlay bg-opacity-80"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">ERROR 404</h1>
                        <p className="mb-5">Looks like the you've entered a invalid URL</p>
                        <Link to='/' className="btn btn-primary">Home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ErrorRoute;