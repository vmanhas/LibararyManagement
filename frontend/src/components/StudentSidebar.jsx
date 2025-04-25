import "./StudentSidebar.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { addstudent, updateStudent } from "../api/studentApi";
import * as yup from "yup";
import { useEffect } from "react";

const schema = yup.object().shape({
  enrollment: yup.string().required("Enrollment is required"),
  email: yup.string().email("Invalid Email").required("Email is required"),
  name: yup.string().required("Name is required"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
    .required("Phone is required"),
  branch: yup.string().required("Branch is required"),
  semester: yup.string().required("Semester is required"),
  password: yup.string().required("Password  is required"),
  role: yup.string().required("Role is required"),
});
export default function StudentSidebar({ editstudent, seteditstudent }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema), // Connect Yup with React Hook Form
  });
  useEffect(() => {
    if (editstudent) {
      Object.keys(editstudent).forEach((key) =>
        setValue(key, editstudent[key])
      );
    } else {
      reset();
    }
  }, [editstudent, reset, setValue]);

  const onSubmit = async (data) => {
    try {
      if (editstudent) {
        console.log("Updating student:", data);
        await updateStudent(editstudent._id, data);
        seteditstudent(null);
      } else {
        console.log("Adding new student:", data);
        await addstudent(data);
        alert("Form has been successfully submitted");
        reset();
      }
      window.location.reload();
    } catch (err) {
      console.error("Error in submitting data:", err);
      alert("Failed to submit form");
    }
  };
  return (
    <>
      <form
        className="student-form"
        onSubmit={handleSubmit(onSubmit, () => {
          window.scrollTo({ top: 0, behavior: "smooth" }); // 👈 this makes sure it scrolls up -- <form className="student-form" onSubmit={handleSubmit(onSubmit)}>
        })}
      >

        <div>
          <label>Enrollment Number:</label>
          <input {...register("enrollment")} />
          {errors.enrollment && <span>{errors.enrollment.message}</span>}
        </div>
        <div>
          <label>Email:</label>
          <input type="email" {...register("email")} />
          {errors.email && <span>{errors.email.message}</span>}
        </div>

        <div>
          <label>Name:</label>
          <input {...register("name")} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>

        <div>
          <label>Phone:</label>
          <input {...register("phone")} />
          {errors.phone && <span>{errors.phone.message}</span>}
        </div>

        <div>
          <label>Branch</label>
          <input {...register("branch")} />
          {errors.branch && <span>{errors.branch.message}</span>}
        </div>
        <div>
          <label>Semester</label>
          <input {...register("semester")} />
          {errors.semester && <span>{errors.semester.message}</span>}
        </div>
        <div>
          <label>Password</label>
          <input {...register("password")} />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <div>
          <label>Role</label>
          <input {...register("role")} />
          {errors.role && <span>{errors.role.message}</span>}
        </div>

        <button type="submit" className="butt">
          {editstudent ? "Update" : "Submit"}
        </button>
      </form>
    </>
  );
}
