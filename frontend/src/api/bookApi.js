import axios from 'axios';
const API_URL='http://localhost:8080/book';

export const addbook=async(book)=>{
    try{
        const token = localStorage.getItem("token");
        const response = await axios.post(API_URL, book, {
            headers: {
              Authorization: `Bearer ${token}`,         
            },
          });
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
        const token=localStorage.getItem("token");
        await axios.delete(`${API_URL}/${id}`,{
            headers:{
                Authorization:`Bearer ${token}`,
            },
        });

    }catch(err)
    {
      if(err.response)
      {
        alert(`Error ${err.response.data.message}`);
      }
    }
}
export const updateBook=async(id,updateddata)=>{
    try{
        const token=localStorage.getItem("token");
       const response= await axios.put(`${API_URL}/${id}`,updateddata,{
        headers:{
            Authorization:`Bearer ${token}`,
        },
       });
       return response.data;

    }catch(err){
        if(err.response)
        {
            alert(`Error ${err.response.data.message}`);
        }
    }
}