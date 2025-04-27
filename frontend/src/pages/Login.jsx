import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [enrollment, setenrollment] = useState("");
  const [password, setpassword] = useState("");
  const [errors, seterrors] = useState({});
  const handleOnchange = (e) => {
    if (e.target.name === "enrollment") {
      setenrollment(e.target.value);
    }
    else if (e.target.name === "password") {
      setpassword(e.target.value);
    }
  };
  const validate = () => {
    const newErrors = {};
    if (enrollment.trim().length === 0) {
      newErrors.enrollment = "Enrollment required";
    }

    if (password.trim().length === 0) {
      newErrors.password = "Password required";
    }
    return newErrors;
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      const validationErrors = validate();
      seterrors(validationErrors);

      if (Object.keys(validationErrors).length === 0) {
        const response = await axios.post("http://localhost:8080/login", {
          enrollment,
          password,
        });
        if (response.status === 200) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("student", JSON.stringify(response.data.student));
            alert(`Login successfull ${response.data.message}`);
            window.location.href = '/';

        }
      }
    } catch (err) {
      if (err.response) {
        alert(`Error ${err.response.data.message}`);
      }else{
        alert("Server Error");
      }
    }
  };
  return (
    <>
      <form onSubmit={handlesubmit}>
        <label htmlFor="enrollment">Enrollment</label>
        <input
          type="text"
          id="enrollment"
          name="enrollment"
          value={enrollment}
          onChange={handleOnchange}
        />
        {errors.enrollment && (
          <span style={{ color: "red" }}>{errors.enrollment}</span>
        )}
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" value={password} onChange={handleOnchange}/>
        {errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
