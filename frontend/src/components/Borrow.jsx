import { useEffect, useState } from "react";
import { getborrow } from "../api/borrowApi";
export default function Borrow() {
  const student = JSON.parse(localStorage.getItem("student"));
  const [borrow, setborrow] = useState([]);
  useEffect(() => {
    fetchborrow();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const fetchborrow = async () => {
    try {
      let response = await getborrow();
      console.log("Response:-", response);
      if (student.role === "student") {
        response = response.filter((x) => x.student._id === student.id);
      }
      setborrow(response);
    } catch (err) {
      if (err.response) {
        alert(`Error ${err.response.data.message}`);
      }
    }
  };

  return (
    <>
      <>
        <table border="1">
          <thead>
            <tr>
              <th>Student</th>
              <th>Book Details</th>
            </tr>
          </thead>
          <tbody>
            {borrow.map((x, index) => (
              <tr key={index}>
                <td>{x.student.name}</td>
                <td>
                  <table border="1">
                    <thead>
                      <tr>
                        <th>Book Title</th>
                        <th>Borrow Date</th>
                        <th>Return Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>{x.book.title}</td> 
                        <td>{x.borrowedAt}</td>
                        <td>{x.returnedAt}</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </>
  );
}
