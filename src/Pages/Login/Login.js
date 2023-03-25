import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Kathā.png'
const Login = () => {
    return (
        <div className='flex justify-center h-screen items-center bg-slate-800'>
            <div className='border rounded-3xl bg-slate-600 px-16 py-7'>
                <img style={{ width: '300px', height: '200px' }} src={logo} alt="" />
                <div className=''>
                    <form>
                        <div className='mb-3'>
                            <input className='outline-green-800 p-2 w-full rounded-lg ' type="text" name='name' id='' placeholder='User Name' />
                        </div>
                        <div className='mb-3'>
                            <input className='outline-green-800 p-2 w-full rounded-lg' type="password" name='password' id='' placeholder='Your password' />
                        </div>
                        <button className='btn w-full bg-green-600 border-none rounded-lg' >Login</button>
                    </form>
                </div>
                <p className='text-center mt-4 font-bold text-white'>Don't Have An Account? <Link className='' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;