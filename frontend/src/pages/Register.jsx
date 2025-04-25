import { useState } from "react";
import "./Register.css";
import axios from "axios";
import Student from "../components/Student";

function Register() {
  const [formdata, setformdata] = useState({
    enrollment: "",
    email: "",
    name: "",
    phone: "",
    branch: "",
    semester: "",
    password: "",
    role:"",
  });
  const [errors, seterrors] = useState({});
  const validate = () => {
    const newerrors = {};
    if (!formdata.enrollment.trim()) {
      newerrors.enrollment = "Enrollment is required";
    }
    if (!formdata.email.trim()) {
      newerrors.email = "Email is required";
    }
    if (!formdata.name.trim()) {
      newerrors.name = "Name is required";
    }
    if (!formdata.phone.trim()) {
      newerrors.phone = "Phone is required";
    }
    if (!formdata.branch.trim()) {
      newerrors.branch = "Branch is required";
    }
    if (!formdata.semester.trim()) {
      newerrors.semester = "Semester is required";
    }
    if (!formdata.password.trim()) {
      newerrors.password = "Password is required";
    }
    if(!formdata.role.trim())
    {
      newerrors.role="Role is required";
    }
    return newerrors;
  };

  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    seterrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await axios.post(
          "http://localhost:8080/register",
           formdata
        );
        if (response.status === 200) {
          alert(response.data.message);
          console.log("Registration successful");
          // Optionally clear thehtmlForm
          setformdata({
            enrollment: "",
            email: "",
            name: "",
            phone: "",
            branch: "",
            semester: "",
            password: "",
          });
        }
      } catch (err) {
        if (err.response) {
          alert(`Error: ${err.response.data.message}`);
        } else {
          alert("Something went wrong");
        }
      }
    }
  };

  return (
    <>
      <div className="main">
      <form onSubmit={handlesubmit}>
        <div>
          <label htmlFor="enrollment">Enrollment</label>
          <input
            type="text"
            name="enrollment"
            id="enrollment"
            value={formdata.enrollment}
            onChange={handlechange}
          />
          {errors.enrollment && (
            <span style={{ color: "red" }}>{errors.enrollment}</span>
          )}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" onChange={handlechange}  value={formdata.email} />
          {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" onChange={handlechange}  value={formdata.name}/>
          {errors.name && <span style={{ color: "red" }}>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" onChange={handlechange} value={formdata.phone} />
          {errors.phone && <span style={{ color: "red" }}>{errors.phone}</span>}
        </div>
        <div>
          <label htmlFor="branch">Branch</label>
          <input
            type="text"
            name="branch"
            id="branch"
            onChange={handlechange}
            value={formdata.branch}
          />
          {errors.branch && (
            <span style={{ color: "red" }}>{errors.branch}</span>
          )}
        </div>
        <div>
          <label htmlFor="semester">Semester</label>
          <input
            type="text"
            name="semester"
            id="semester"
            onChange={handlechange}
            value={formdata.semester}
          />
          {errors.semester && (
            <span style={{ color: "red" }}>{errors.semester}</span>
          )}
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={handlechange}
            value={formdata.password}
          />
          {errors.password && (
            <span style={{ color: "red" }}>{errors.password}</span>
          )}
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <input
            type="text"
            name="role"
            id="role"
            onChange={handlechange}
            value={formdata.role}
          />
          {errors.role && (
            <span style={{ color: "red" }}>{errors.role}</span>
          )}
        </div>
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  );
}
export default Register;
