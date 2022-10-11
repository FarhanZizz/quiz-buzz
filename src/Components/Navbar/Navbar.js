import React from 'react';
const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost normal-case text-xl">QuizBuzz</a>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Statistics</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;