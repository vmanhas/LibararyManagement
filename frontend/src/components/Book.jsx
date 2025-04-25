import { useState } from "react";
import "./Book.css";
import BookSidebar from "./BookSidebar";
import BookList from "./Booklist";
export default function Book(){
    const [editbook,seteditbook]=useState(null);
    return (

        <>
        <div className="book-main">
        <BookSidebar editbook={editbook} seteditbook={seteditbook}></BookSidebar>
        <BookList seteditbook={seteditbook}></BookList>
        </div>
        </>

    );
}