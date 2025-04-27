import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  const student = localStorage.getItem("student");
  const logout = () => {
    // 1. Remove the token and student data from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('student');
    window.location.href = '/';
  };
  
  return (
    <>
      <div className="Nav">
        <div>
          <Link to="/Dashboard">Dashboard</Link>
        </div>
        <div>
          <Link to="/Student">Student</Link>
        </div>
        <div>
          <Link to="/Book">Book</Link>
        </div>
        <div>
          <Link to="/Borrow">Borrow</Link>
        </div>
        {!student ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <button onClick={logout} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>
          Logout
        </button>
      )}
    </div>
       
    </>
  );
}
