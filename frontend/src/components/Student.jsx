import StudentSidebar from "./StudentSidebar";
import StudentList from "./StudentList";
import "./Student.css"
import { useState } from "react";
export default function Student(){
    const [editstudent,seteditstudent]=useState(null);
    return (
        <>
        <div className="stud">
        <div>
        <StudentSidebar editstudent={editstudent} seteditstudent={seteditstudent}></StudentSidebar>
        </div>
        <div>
        <StudentList oneditstudent={seteditstudent}></StudentList>
        </div>
        </div>
        </>

    );
}