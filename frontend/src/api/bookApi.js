import axios from 'axios';
const API_URL='http://localhost:8080/book';

export const addbook=async(book)=>{
    try{
        const response=await axios.post(API_URL,book);
        return response.data;
    }catch(err){
        console.err("Something wrong",err.message);

    }
}

export const getbook=async()=>{
    try{
        const token=localStorage.getItem("token");
        const response=await axios.get(API_URL,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });
        return response.data;
    }catch (err) {
        console.log(err);
        alert(`Unauthorized ${err}`);
        // localStorage.removeItem("token");
       
    }
}
export const deleteBook=async(id)=>{
    try{
        await axios.delete(`${API_URL}/${id}`);

    }catch(err)
    {
        console.log(err.message);
        throw err;
    }
}
export const updateBook=async(id,updateddata)=>{
    try{
       const response= await axios.put(`${API_URL}/${id}`,updateddata);
       return response.data;

    }catch(err){
        console.log(err);
        throw err;
    }
}