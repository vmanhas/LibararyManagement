import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar(){
    return (
        <>
        <div className='Nav'>
            <div><Link to="/Dashboard">Dashboard</Link></div>
            <div><Link to="/Student">Student</Link></div>
            <div><Link to="/Book">Book</Link></div>
            <div><Link to="/Register">Register</Link></div>
            <div><Link to="/Login">Login</Link></div>


        </div>
        
        </>

    );
}