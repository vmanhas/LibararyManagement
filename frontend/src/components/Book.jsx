import { useState } from "react";
import "./Book.css";
import BookSidebar from "./BookSidebar";
import BookList from "./Booklist";
export default function Book(){
    const [editbook,seteditbook]=useState(null);
    const student=JSON.parse(localStorage.getItem("student"));
    let isAdmin=false;
    console.log(student);
    if(student.role==="admin")
    {
        isAdmin=true;
    }
    return (

        <>
        <div className="book-main">
        {isAdmin && (<BookSidebar editbook={editbook} seteditbook={seteditbook}></BookSidebar>)}
        
        <BookList seteditbook={seteditbook} isAdmin={isAdmin}></BookList>
        </div>
        </>

    );
}