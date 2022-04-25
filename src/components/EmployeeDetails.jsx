import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export const EmployeeDetails = () => {
        const [first, setfirst] = useState({})
        const { id } = useParams();
        const { isAuth } = useContext(AuthContext);
        useEffect(() => {
          axios.get(`http://localhost:8080/employee/${id}`).then(({ data }) => {
            console.log("xxxxxxxxx",data);
            setfirst(data)
          });
        }, []);
        console.log(first);
        if (!isAuth) {
          return <Navigate to={"/login "} />;
        }


  return (
    <div className="user_details">
      <img className="user_image" src={first.image} />
      <h4 className="user_name">{first.username}</h4>
      <span className="user_salary">$ {first.salary}</span>
      {/* <span className="tasks">
        {first.tasks.map((item) => {
          return <li className="task">{item}</li>;
        })}
      </span> */}
      Status: <b className="status">{first.status}</b>
      Title: <b className="title">{first.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
