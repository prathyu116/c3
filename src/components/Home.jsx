import { useEffect, useState } from "react";
import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Home = () => {
      const { employee } = useContext(AuthContext);

  const [totalE,setTotalE]=useState()
  const [TerminatedE,setTerminatedE]=useState(0)
  const [promoted,setPromoted]=useState(0)
  const [newE,setNewE]=useState(0)
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
    // useEffect(() => {
    //   getData();
 
    // }, []);
    //   const getData = async () => {
    //     const data = await fetch(`http://localhost:8080/employee`).then((d) => d.json());
    //     SetEmployee(data);
    //   };
    //     console.log(employee);

  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">:{employee.length}</span>
        </div>
        <div>
          Total Terminated: <span className="total_terminated">{TerminatedE}</span>
        </div>
        <div>
          Total Promoted: <span className="total_promoted">{promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{newE}</span>
        </div>
      </div>
    </>
  );
};
