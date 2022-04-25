import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";
export const EmployeeList = () => {
          const { employee } = useContext(AuthContext);
          console.log("UUUUUU", employee);

  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details
      <div className="employee_card">
        <img className="employee_image" />
        <span className="employee_name"></span>
        <span className="employee_title"></span>
      </div> */}
      {
          employee.map((item)=>{
              return (
                <a key={item.id} href={`/employees/${item.id}`}>
                  <div className="employee_card">
                    <img className="employee_image" src={item.image} />
                    <p className="employee_name">{item.employee_name}</p>
                    <p className="employee_title">{item.title}</p>
                  </div>
                </a>
              );
          })
      }
    </div>
  );
};
