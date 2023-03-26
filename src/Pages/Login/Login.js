import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../Images/Kathā-blue logo.png'
const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    useEffect(() => {
        if (localStorage.getItem("chat-app-user")) {
          navigate("/");
        }
      }, []);

    const handleValidation = () => {
        const { username, password } = values;
        if (username === "") {
            toast.error("User name is required.");
            return false;
        } else if (password === "") {
            toast.error("Password is required.");
            return false;
        }
        return true;
    };
    const handleChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        // console.log()
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (handleValidation()) {
            const { username, password } = values;
            const { data } = await axios.post("http://localhost:5000/auth/login", {
                username,
                password
            });

            if (data.status === false) {
                toast.error(data.msg,);
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
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <div className='mb-3'>
                            <input className='outline-sky-800 p-2 w-full rounded-lg '
                                type="text"
                                name='name'
                                placeholder='User Name'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <div className='mb-3'>
                            <input className='outline-sky-800 p-2 w-full rounded-lg'
                                type="password"
                                name='password'
                                placeholder='Your password'
                                onChange={(e) => handleChange(e)}
                            />
                        </div>
                        <button className='btn w-full bg-sky-600 border-none rounded-lg' >Login</button>
                    </form>
                </div>
                <p className='text-center mt-4 font-bold text-white'>Don't Have An Account? <Link className='' to='/signup'>Sign Up</Link></p>
            </div>
        </div>
    );
};

export default Login;