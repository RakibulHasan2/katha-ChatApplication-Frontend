import React from 'react';
import headerPic from '../../Images/header.png'
import { BsCheckSquare } from 'react-icons/bs';

import './Header.css'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='lg:flex justify-evenly items-center header-container'>
            <div className='header-info lg:ml-20'>
                <h1 className='text-5xl font-bold text-white'>Chat With Random <br />
                    Strangers I am...
                </h1>
                <div className='flex justify-between mt-5'>
                    <BsCheckSquare className='bg-white mt-4 mr-5'></BsCheckSquare>
                    <p className='text-white font-bold'>By using Katha, you accept the Termns and Privacy Policy. <br /> You must be 10+ or 12+ with parental permission</p>
                </div>
                <Link><button className='btn mt-4 mx-5 bg-purple-800 border-none rounded-3xl'>Start Chatting</button></Link>
            </div>
            <img src={headerPic} alt="" />
        </div>
    );
};

export default Header;