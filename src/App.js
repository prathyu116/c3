import { Routes, Route } from "react-router-dom";
import "./App.css";
import {Home} from "./components/Home";
import {Navbar} from "./components/Navbar";
import { EmployeeList } from "./components/EmployeeList.jsx";
import { EmployeeDetails } from "./components/EmployeeDetails";
import  Login  from "./components/Login";


function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/employees" element={<EmployeeList />}></Route>
        <Route
          path="/employees/:id"
          element={
            // <PrivateRoute>
            <EmployeeDetails />
            // </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
