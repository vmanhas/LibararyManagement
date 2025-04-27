import axios from "axios";
const API_URL = "http://localhost:8080/student";

export const addstudent = async (student) => {
  try {
    const response = await axios.post(API_URL, student);
    return response.data; // Return data if needed
  } catch (error) {
    if (error.response && error.response.status === 401) {
      alert("Enrollment number already exists!");
    } else {
      alert("An error occurred!");
    }
    throw error;
  }
};

export const getStudent = async () => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(API_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    if (err.response) {
      alert(`Error : ${err.response.data.message}`);
    }
  }
};

export const deleteStudent = async (id) => {
  try {
    const token = localStorage.getItem("token");
    await axios.delete(`${API_URL}/${id}`,{
      headers:{
        Authorization:`Bearer ${token}`,
    },
    });
  } catch (err) {
    console.log(err.message);
    throw err;
  }
};

export const updateStudent = async (id, student) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.put(`${API_URL}/${id}`, student,{
      headers:{
        Authorization:`Bearer ${token}`,
    },
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error updating student:",
      error.response?.data || error.message
    );
    throw error;
  }
};
