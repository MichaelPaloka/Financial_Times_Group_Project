import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 
  const [successMsg, setSuccessMsg] = useState("");
  const [err, setErr] = useState("");


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
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post("http://localhost:8000/api/logout");
      setSuccessMsg(response.msg);
      navigate("/ticketList");
    } catch (error) {
      console.log(err.response);
    }
    // axios
    // .get("http://localhost:8000/logout")
    // .then((response) => console.log(response))
    // .catch((error) => console.log(error));
  };

  return (
    <div className="login-box"> 
    <h2>Financial Times</h2>
           <form className="Form" onSubmit={ onLoginHandler }>
                    <div className="user-box">
                      <input
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Username</label>
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
         </div>
  );
};

export default Login;