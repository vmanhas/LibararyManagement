import { createBrowserRouter } from "react-router-dom";
import Book from "../components/Book";
import Dashboard from "../components/Dashboard";
import Student from "../components/Student";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
const router = createBrowserRouter([
  {

    path: "/",
    element: (
      <>
        <Navbar />
        
      </>
    ),
  },
  {
    path: "/Dashboard",
    element: (
      <>
        <Navbar />
        <Dashboard />
      </>
    ),
  },
  {
    path: "/Student",
    element: (
      <>
        <Navbar />
        <Student />
      </>
    ),
  },
  {
    path: "/Book",
    element: (
      <>
        <Navbar />
        <Book />
      </>
    ),
  },
  {
    path: "/Home",
    element:(
      <>
      
      <Home/>
      </>
    )

  },
  {
    path:"/Register",
    element:(
      <>
      <Navbar/>
      <Register/>
      </>
    )
  },
  {
    path:"/Login",
    element:(
      <>
      <Navbar/>
      <Login/>
      </>
    )
  }
  
]);

export default router;
