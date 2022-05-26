import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = (props) => {
    const [firstName, setFirstName] = useState(""); 
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const onRegisterHandler = (e) => {
        e.preventDefault();
        if(password == confirmPassword){
            axios.post('http://localhost:8000/api/users', {
                firstName,
                lastName,
                email,
                password,
                confirmPassword
            })
                .then(res=>{
                    console.log(res.data.error);
                    if(res.data.error){
                        setErrors(res.data.error.errors);
                        console.log(res.data.error.errors);
                    } else {
                        navigate('/');
                    }
                })
                .catch(err=>{
                    console.log(err.response.data.errors);
                    setErrors(err.response.data.errors);
                })
        } else {
            setErrors({confirmPassword: {
                message: "Passwords must match"
            }})
        }
    };
    return (
        <div className="login-box">
            <h2>Financial Times</h2>
            <form className="Form" onSubmit={ onRegisterHandler }>
                <div className="user-box">
                    <input 
                    type={"text"}
                    onChange={(e) => setFirstName(e.target.value)}
                    />
                    <label> First Name: {" "} </label>
                    <p>{
                        errors.firstName ? 
                        errors.firstName.message : null
                    }</p>
                </div>
                <div className="user-box">
                    <input 
                    type={"text"}
                    onChange={(e) => setLastName(e.target.value)}
                    />
                    <label> Last Name: {" "} </label>
                    <p>{
                        errors.lastName ? 
                        errors.lastName.message : null
                    }</p>
                </div>

                <div className="user-box">
                    <input 
                    type={"text"}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                    <label> Email: {" "} </label>
                    <p>{
                        errors.email ? 
                        errors.email.message : null
                    }</p>
                </div>

                <div className="user-box">
                    <input 
                    type={"text"}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <label> Password: {" "} </label>
                    <p>{
                        errors.password ? 
                        errors.password.message : null
                    }</p>
                </div>

                <div className="user-box">
                    <input 
                    type={"text"}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <label> Confirm Password: {" "} </label>
                    <p>{
                        errors.confirmPassword ? 
                        errors.confirmPassword.message : null
                    }</p>
                </div>
                    
                <button type="submit">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Create Account
                </button>
                <br/>
                <br/>
                <Link to = "/"> 
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Login 
                </Link>
            </form>
        </div>
    );
}

export default Register;