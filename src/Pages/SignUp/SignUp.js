import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Images/Kathā.png'

const SignUp = () => {
    const [error, setError] = useState(null)
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // if (handleValidation()) {
        //   const { email, username, password } = values;
        //   const { data } = await axios.post(registerRoute, {
        //     username,
        //     email,
        //     password,
        //   });

        //   if (data.status === false) {
        //     toast.error(data.msg, toastOptions);
        //   }
        //   if (data.status === true) {
        //     localStorage.setItem(
        //       process.env.REACT_APP_LOCALHOST_KEY,
        //       JSON.stringify(data.user)
        //     );
        //     navigate("/");
        //   }
        // }
    };
    return (
        <div className='flex justify-center h-screen items-center bg-slate-800'>
            <div className='border rounded-3xl bg-slate-600 px-16 py-7'>
                <img style={{ width: '300px', height: '200px' }} src={logo} alt="" />
                <div className=''>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-3'>
                            <input className='outline-green-800 p-2 w-full rounded-lg ' type="text" name='name' id='' placeholder='Your Name' />
                        </div>
                        <div className='mb-3'>
                            <input className='outline-green-800 p-2 w-full rounded-lg' type="email" name='email' id='' placeholder='Your email address' />
                        </div>
                        <div className='mb-3'>
                            <input className='outline-green-800 p-2 w-full rounded-lg' type="password" name='password' id='' placeholder='Your password' />
                        </div>
                        <div className='mb-3'>
                            <input className=' p-2 w-full outline-green-800 rounded-lg' type="password" name='Confirm' id='' placeholder='Confirm Your Password' />
                        </div>
                        <p className='text-error'>{error}</p>
                        <button className='btn w-full bg-green-600 border-none rounded-lg' >Submit</button>
                    </form>
                </div>
                <p className='text-center mt-4 font-bold text-white'>Already Have an account? <Link className='' to='/login'>Login</Link></p>    
            </div>
        </div>
    );
};

export default SignUp;