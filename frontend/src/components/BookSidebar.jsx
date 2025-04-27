import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { addbook, updateBook } from "../api/bookApi";
import "./BookSidebar.css";
import { useEffect } from "react";
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
const schema = yup.object().shape({
  bookid: yup.string().required("Bookid is required"),
  title: yup.string().required("Title is required"),
  author: yup.string().required("Author is required"),
  price: yup.string().required("Price is required"),
  category: yup.string().required("Category is required"),
  count: yup.string().required("Count is required"),
});
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
export default function BookSidebar({ editbook, seteditbook }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  useEffect(() => {
    if (editbook) {
      Object.keys(editbook).forEach((key) =>
        setValue(key, editbook[key])
      );
    } else {
      reset();
    }
  }, [editbook, reset, setValue]);
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
  const OnSubmit = async (data) => {
    try {
        if(editbook)
        {
            console.log("Updating student:", data);
            await updateBook(editbook._id,data);
            seteditbook(null);
        }
        else
        {
            console.log("Adding new book");
            await addbook(data);
            console.log("book saved");
        }
     
    } catch (err) {
      console.log("Error", err.message);
    }

    window.location.reload();

  };
  return (
    <>
      <form className="book-form" onSubmit={handleSubmit(OnSubmit)}>
        <div>
          <label>Book Id</label>
          <input {...register("bookid")} />
          {errors.bookid && <span>{errors.bookid.message}</span>}
        </div>
        <div>
          <label>Title</label>
          <input {...register("title")} />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div>
          <label>Author</label>
          <input {...register("author")} />
          {errors.author && <span>{errors.author.message}</span>}
        </div>

        <div>
          <label>Price</label>
          <input {...register("price")} />
          {errors.price && <span>{errors.price.message}</span>}
        </div>

        <div>
          <label>Category</label>
          <input {...register("category")} />
          {errors.category && <span>{errors.category.message}</span>}
        </div>
        <div>
          <label>Count</label>
          <input {...register("count")} />
          {errors.count && <span>{errors.count.message}</span>}
        </div>
        <button type="submit">{editbook?"update":"submit"}</button>
      </form>
    </>
  );
}
