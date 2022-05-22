import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

const LoginAndRegistration = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState(""); 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errors, setErrors] = useState({});
    const navigate = useNavigate()

    // Based on instructor Josh's Login model
    const onRegisterHandler =  (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/user', {
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
                navigate("")
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
                navigate("/Gamepartyfinder/home")
            })
            .catch( err => {
                console.log(err.response.data);
            })
    }

}

export default LoginAndRegistration;