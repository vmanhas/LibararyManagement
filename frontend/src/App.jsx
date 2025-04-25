// import { useEffect, useState } from "react";
// import axios from "axios";
import "./App.css";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Book from "./components/Book";
import Dashboard from "./components/Dashboard";
import Student from "./components/Student";
import router from "./routes/AppRoutes";
function App() {
  

  // const [data, setdata] = useState("");

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:8080/user");

  //       console.log("Response:", response);
  //       setdata(response.data.message); // Use "name" from backend JSON
  //     } catch (err) {
  //       console.error("Error fetching data:", err);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <>
      <RouterProvider router={router} />
      {/* {console.log({data})}; */}
    </>
  );
}

export default App;
