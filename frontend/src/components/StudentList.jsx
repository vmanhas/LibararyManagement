import { useState, useEffect } from "react";
import { getStudent } from "../api/studentApi";
import { deleteStudent } from "../api/studentApi";
import StudentSidebar from "./StudentSidebar";
import Student from "./Student";
import "./StudentList.css";
import { Button } from "@mui/material";
import {deleteBorrow} from "../api/borrowApi";
const StudentList = ({ oneditstudent }) => {
  const [query, setquery] = useState("");
  const [student, setstudent] = useState([]);
  const fetchStudent = async () => {
    try {
      const response = await getStudent();
      setstudent(response);
    } catch (err) {
      console.log(err);
      alert("Error fetching student");
    }
  };

  useEffect(() => {
    fetchStudent(); // Fetch students when component mounts
  }, []);
  const handledelete = async (id) => {
    try {
      await deleteBorrow(id);
      await deleteStudent(id);

      fetchStudent();
    } catch (err) {
      console.log(err);
    }
  };
  const onUpdate = async (s) => {
    oneditstudent(s);
  };

  return (
    <>
      <div className="lis">
        <input
          onChange={(e) => setquery(e.target.value)}
          type="search"
          placeholder="Search for students"
        />

        <div className="stud">
          <table>
            <thead>
              <tr>
                <th>Enrollment</th>
                <th>Email</th>
                <th>Name</th>
                <th>Phone</th>
                <th>Branch</th>
                <th>Semester</th>
                {/* <th>Password</th> */}
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {student
                .filter((item) =>
                  query === ""
                    ? item
                    : item.name.toLowerCase().includes(query.toLowerCase())
                )
                .map((x) => (
                  <tr key={x._id}>
                    <td>{x.enrollment}</td>
                    <td>{x.email}</td>
                    <td>{x.name}</td>
                    <td>{x.phone}</td>
                    <td>{x.branch}</td>
                    <td>{x.semester}</td>
                    {/* <td>{x.password}</td> */}
                    <td>{x.role}</td>
                    <td>
                      {
                        <>
                          <Button
                            variant="outlined"
                            color="error"
                            size="large"
                            onClick={() => (handledelete(x._id))}
                          >
                            Del
                          </Button>{" "}
                          <Button
                            variant="outlined"
                            size="large"
                            onClick={() => onUpdate(x)}
                          >
                            update
                          </Button>
                        </>
                      }
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
export default StudentList;
