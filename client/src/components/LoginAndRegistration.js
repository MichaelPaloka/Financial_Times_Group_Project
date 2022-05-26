import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginAndRegistration = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    // Based on instructor Josh's Login model
    const onRegisterHandler =  (e) => {
        console.log("firstName:" + firstName);
        e.preventDefault();
        axios.post('http://localhost:8000/api/user/:id', {
            firstName,
            lastName,
            email,
            password,
            confirmPassword
        },
        {
            withCredentials: true
        }
        )
            .then( res => {
                console.log(res);
                console.log(res.data);
                navigate("/home")
            })
            .catch( err => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
            })
    }


    // Based on instructor Josh's Login model
    const onLoginHandler = (e) => {
        e.preventDefault();
        const postData = { email, password};
        axios.post('http://localhost:8000/api/user/login', postData, {
            withCredentials: true
        })
            .then( res => {
                console.log(res);
                navigate("/home")
            })
            .catch( err => {
                console.log(err.response.data);
            })
    }

    return (
        <div className="bg-gray-500 h-screen">
            <div className="flex justify-center space-x-2 align-middle pr-10">
                <h1 className="text-white pr-10 text-4xl">Financial Times</h1>
                <form onSubmit={onLoginHandler}>
                    <div className="mb-4">
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="text-lg text-white">Email:</label>
                                <div>
                                    <input type="email" onChange = {(e) => setEmail(e.target.value)} />
                                </div>
                        </div>
                        {/* Password */}
                        <div className="mt-5">
                            <label htmlFor="password" className="text-lg text-white">Password:</label>
                                <div>
                                    <input type="password" onChange = {(e) => setPassword(e.target.value)} />
                                </div>
                        </div>
                    </div>
                    <div className="ml-10 h-10 mt-4">
                        <button type='submit' className="align-middle border-4 border-black p-3 align-center bg-white">LOGIN</button>
                    </div>
                </form>
            </div>
            
            
            <div className="flex justify-center align-middle pt-20">
                <div>
                    <form onSubmit={onRegisterHandler}>
                        <h3 className="text-white text-3xl pb-5">Create an Account Below!</h3>
                        <div>
                            {/* First Name */}
                            <div>
                                <label htmlFor="firstName" className="text-lg text-white mt-5">First Name:</label>
                                    <div>
                                        <input type="text" onChange = {(e) => setFirstName(e.target.value)} />
                                    </div>
                            </div>
                            {errors.firstName && (
                                    <p className="text-red-500">{errors.firstName.message}</p>
                            )}
                            {/* Last Name */}
                            <div>
                                <label htmlFor="lastName" className="text-lg text-white mt-5">Last Name:</label>
                                    <div>
                                        <input type="text" onChange = {(e) => setLastName(e.target.value)} />
                                    </div>
                            </div>
                            {errors.lastName && (
                                    <p className="text-red-500">{errors.lastName.message}</p>
                            )}
                        </div>
                        <div>
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="text-lg text-white mt-5">Email:</label>
                                    <div>
                                        <input type="email" onChange = {(e) => setEmail(e.target.value)} />
                                    </div>
                            </div>
                            {errors.email && (
                                    <p className="text-red-500">{errors.email.message}</p>
                            )}
                        </div>
                        <div>
                            {/* Password */}
                            <div>
                                <label htmlFor="password" className="text-lg text-white mt-5">Password:</label>
                                    <div>
                                        <input type="password" onChange = {(e) => setPassword(e.target.value)} />
                                    </div>
                            </div>
                            {errors.password && (
                                    <p className="text-red-500">{errors.password.message}</p>
                            )}
                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirmPassword" className="text-lg text-white mt-5">Confirm Password:</label>
                                    <div>
                                        <input type="password" onChange = {(e) => setConfirmPassword(e.target.value)} />
                                    </div>
                            </div>
                            {errors.confirmPassword && (
                                    <p className="text-red-500">{errors.confirmPassword.message}</p>
                            )}
                        </div>
                        <div className="ml-10 h-10 mt-10">
                            <button type='submit' className="align-middle border-4 border-black p-3 align-center bg-white">CREATE ACCOUNT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default LoginAndRegistration;