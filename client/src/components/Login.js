import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = (props) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onLoginHandler = (e) => {
    e.preventDefault();
    axios.get('http://localhost:8000/api/users/byemail/' + email + '/' + password)
        .then(res=>{
            console.log(res);
            console.log(res.data.user[0]);
            props.changeUser(res.data.user[0]);
            navigate('/home');
        })
        .catch(err=>console.log(err))
  }

  return (
    <div className="login-box"> 
    <h2>Financial Times</h2>
    <form className="Form" onSubmit={ onLoginHandler }>
      <div className="user-box">
        <input
        type="text"
        onChange={(e) => setEmail(e.target.value)}
        />
        <label>Email</label>
      </div>

      <div className="user-box">
        <input
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        />
        <label>Password</label>
      </div>

      <button type="submit">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Login
      </button>

        {/* <button className="FormButton" type="submit">Submit</button> */}
        {/* <button onClick={async() => await handleLogout}>Logout</button> */}
    </form>
    <p>Don't have an account? Register <Link to = "/register">Here</Link></p>
    </div>
  );
};

export default Login;