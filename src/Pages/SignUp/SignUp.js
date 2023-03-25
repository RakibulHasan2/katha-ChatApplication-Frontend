import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import logo from '../../Images/Kathā.png'

const SignUp = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const toastOptions = {
        position: "bottom-right",
        autoClose: 1000,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
    };

    const handleValidation = () => {
        const { password, confirmPassword, username, email } = values;
        if (password !== confirmPassword) {
            console.log(password, confirmPassword)
            toast.error(
                "Password and confirm password should be same.",
                toastOptions
            );
            return false;
        } else if (username.length < 3) {
            toast.error(
                "Username should be greater than 3 characters.",
                toastOptions
            );
            return false;
        } else if (password.length < 8) {
            toast.error(
                "Password should be equal or greater than 8 characters.",
                toastOptions
            );
            return false;
        } else if (email === "") {
            toast.error("Email is required.", toastOptions);
            return false;
        }
        return true;
    };

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log()
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { email, username, password } = values;
            const { data } = await axios.post("http://localhost:5000/auth/register", {
                username,
                email,
                password,
            });

            if (data.status === false) {
                toast.error(data.msg, toastOptions);
            }
            if (data.status === true) {
                localStorage.setItem(
                    "chat-app-user",
                    JSON.stringify(data.user)
                );
                navigate("/");
            }
        }
    };
    return (
        <div className='flex justify-center h-screen items-center bg-slate-800'>
            <div className='border rounded-3xl bg-slate-600 px-16 py-7'>
                <img style={{ width: '300px', height: '200px' }} src={logo} alt="" />
                <div className=''>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <input
                                className='outline-green-800 p-2 px-6 w-full rounded-lg '
                                type="text"
                                name='username'
                                placeholder='User Name'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                className='outline-green-800 p-2 px-6 w-full rounded-lg'
                                type="email"
                                name='email'
                                placeholder='Your email address'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                className='outline-green-800 p-2 px-6 w-full rounded-lg'
                                type="password"
                                name='password'
                                placeholder='Your password'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <input
                                className='p-2 w-full outline-green-800 rounded-lg px-6'
                                type="password"
                                name='confirmPassword'
                                placeholder='Confirm Your Password'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button className='btn w-full bg-green-600 border-none rounded-lg' >Submit</button>
                    </form>
                </div>
                <p className='text-center mt-4 font-bold text-white'>Already Have an account? <Link className='' to='/login'>Login</Link></p>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default SignUp;