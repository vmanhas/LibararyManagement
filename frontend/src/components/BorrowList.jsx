// import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { getborrow } from "../api/borrowApi";
export default function BorrowList(){
    const [borrow,setborrow]=useState("");

    const fetchBorrow=async()=>{
        try{
            const borrow=await getborrow();
            setborrow(borrow);
            
        }catch(err)
        {
            console.log(err);
        }

    };
    useEffect(() => {
        fetchBorrow();
      }, []);
    return (
        <>
    
        </>

    );
}