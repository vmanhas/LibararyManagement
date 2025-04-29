
import { useEffect, useState } from "react";
import "../components/Dashboard.css";
import axios from "axios";

export default function Dashboard() {
   const [stat,setstat]=useState({});
   useEffect(()=>{
    fetchdata();
    
   },[])
   const fetchdata=async()=>{
    
    try{
        console.log("he");
        const response=await axios.get("http://localhost:8080/dashboard/stat");
        setstat(response.data);
    
    }catch(err)
    {
        if(err.response)
        {
            alert(`Error ${err}`);
        }
    }
   }

  return (
    <div className="dashboard-container dash">
      <h1 className="dashboard-heading">Admin Dashboard</h1>
      <div className="cards-container">
        <div className="card">
          <h2>Total Books</h2>
          <p>{stat.book}</p> {/* Ideally fetched from backend */}
        </div>
        <div className="card">
          <h2>Total Students</h2>
          <p>{stat.student}</p>
        </div>
        <div className="card">
          <h2>Books Borrowed</h2>
          <p>{stat.borrow}</p>
        </div>
      </div>
    </div>
  );
}
