// import axios from "axios";
// import { useContext, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AuthContext } from "../contexts/AuthContext";

// export const Login = () => {
//   //  use reqres to log user in.
//   const [form, setForm] = useState({});
//         const { id } = useParams();

//   const { toggleAuth, } = useContext(AuthContext);
//      const navigate = useNavigate();

//   const handlechange = (e) => {
//     let { name, value } = e.target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };

//   const postForm = () => {
//     axios
//       .post(`https://reqres.in/api/users/${id}`, form)
//       .then(function (response) {
//         toggleAuth(response.data.token);
//         navigate(-2) //for after login


//         console.log(response.data.token);
//       })
//       .catch(function (error) {
//         alert("user not found");
//         console.log(error);
//       });
//   };


//   return (
//     <div className="loginform">
//       <input name="username" type="text" placeholder="Enter username" className="login_username" onChange={(e) => handlechange(e)} />
//       <input name="password" type="text" placeholder="Enter password" className="login_password" onChange={(e) => handlechange(e)} />
//       <input type="submit" value="SIGN IN" className="login_submit" onClick={postForm} />
//     </div>
//   );
// };

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

const Login = () => {
  const { handleAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder="name" /> <input type="password" placeholder="password" />
      <input
        onClick={() => {
          handleAuth(true);
          navigate(-1); //for after login
          // or -2
        }}
        type="submit"
        value="submit"
      />
    </div>
  );
};

export default Login;