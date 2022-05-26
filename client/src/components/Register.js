import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Registration = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("")
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


    // Based on instructor Josh's Login model
    const onRegisterHandler =  (e) => {
      console.log("firstName:" + firstName);
      e.preventDefault();
      axios.post('http://localhost:8000/api/user/:id', {
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
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
                     </div>

                     <div className="user-box">
                         <input 
                         type={"text"}
                         onChange={(e) => setLastName(e.target.value)}
                         />
                         <label> Last Name: {" "} </label>
                     </div>

                     <div className="user-box">
                         <input 
                         type={"text"}
                         onChange={(e) => setEmail(e.target.value)}
                         />
                         <label> Email: {" "} </label>
                     </div>

                     <div className="user-box">
                         <input 
                         type={"text"}
                         onChange={(e) => setPassword(e.target.value)}
                         />
                         <label> Password: {" "} </label>
                     </div>

                     <div className="user-box">
                         <input 
                         type={"text"}
                         onChange={(e) => setConfirmPassword(e.target.value)}
                         />
                         <label> Confirm Password: {" "} </label>
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
                     <Link to = "/login"> 
                     <span></span>
                     <span></span>
                     <span></span>
                     <span></span>
                     Login 
                     </Link>
              </form>
           </div>
  );
};

export default Registration;