import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Kathā-blue logo.png'
const Navbar = () => {
    return (
        <div className="navbar bg-base-100 h-28">
            <div className="navbar-start lg:mx-10">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Service</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <img className='' style={{ height: '140px', width: '200px' }} src={logo} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='hover:bg-sky-600 hover:text-white rounded-full p-2 px-3 mx-4'>Home</li>
                    <li className='hover:bg-sky-600 hover:text-white rounded-full p-2 px-3 mx-4'>About</li>
                    <li className='hover:bg-sky-600 hover:text-white rounded-full p-2 px-3 mx-4'>Service</li>
                    <li className='hover:bg-sky-600 hover:text-white rounded-full p-2 px-3'>Contact</li>
                </ul>
            </div>
            <div className="navbar-end lg:mr-11">
                <Link to={'/login'}>
                    <button style={
                        {
                            border: '2px solid #2575bc',
                            borderRadius: '20px'
                        }
                    } className="mx-3 p-2 px-5 hover:bg-sky-600 hover:text-white">Login</button>
                </Link>
                <Link to={'/signup'}>
                    <button style={
                        {
                            borderRadius: '20px'
                        }
                    } className="p-2 py-3 px-5 bg-sky-600 border-blue hover:text-black hover:bg-sky-400 text-white">SignUP</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;