import axios from "axios";
const API_URL = "http://localhost:8080/borrow";

export const addborrow = async (bookid) => {
  try {
    const student = JSON.parse(localStorage.getItem("student"));
    const response = await axios.post(API_URL, {
      bookid,
      studentid: student.id,
    });
    return response.data;
  } catch (err) {
    if (err.response) {
      alert(`Error ${err.response.data.message}`);
    }
  }
};

export const getborrow = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (err) {
    console.log(err);
    alert(`Unauthorized ${err}`);
    // localStorage.removeItem("token");
  }
};
export const returnBorrow = async (bookid) => {
  try {
    const student = JSON.parse(localStorage.getItem("student"));
    const response = await axios.put(API_URL, {
      bookid,
      studentid: student.id,
    });
    return response.data;
  } catch (err) {
    console.log(err);
    // if (err.response) {
    //   alert(`Error ${err.response.data.message}`);
    // }
  }
};

export const deleteBorrow = async (id) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};
// export const updateBorrow=async(id,updateddata)=>{
//     try{
//        const response= await axios.put(`${API_URL}/${id}`,updateddata);
//        return response.data;

//     }catch(err){
//         console.log(err);
//         throw err;
//     }
// }
