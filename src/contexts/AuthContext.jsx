import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [employee, SetEmployee] = useState([]);
    const [token, setToken] = useState("");

  const [isAuth, setIsAuth] = useState(false);
  const handleAuth = (state) => {
    setIsAuth(state);
    setToken(token);
    
  };
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(`http://localhost:8080/employee`).then((d) => d.json());
    SetEmployee(data);
  };
  console.log(employee);
  return <AuthContext.Provider value={{ employee,isAuth,handleAuth ,token}}>{children}</AuthContext.Provider>;
};
