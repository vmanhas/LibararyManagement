import { useEffect, useState } from "react";
import { getbook} from "../api/bookApi";
import "./Booklist.css";
import  {deleteBook} from "../api/bookApi";
const BookList = ({seteditbook}) => {
  const [query, setquery] = useState("");
  const [book, setbook] = useState([]);

  const fetchbook = async (data) => {
    try {
      const response = await getbook(data);
      setbook(response);
    } catch (err) {
      console.log(err);
      alert("Error fetching book");
    }
  };
  useEffect(() => {
    fetchbook();
  }, []);
  const ondel=async(id)=>{
    try{
      await deleteBook(id);
      fetchbook();

    }catch(err){
      console.log(err);
      throw err;

    }
  }
  const onupdate=async(x)=>{
   seteditbook(x);
  }
  return (
    <>
      <div className="lis">
        <input
          onChange={(e) => setquery(e.target.value)}
          type="search"
          placeholder="Search for books"
        />
        <div className="boss">
          <table>
            <thead>
              <tr>
                <th>Bookid</th>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Category</th>
                <th>Count</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {book
                .filter((item) =>
                  query === ""
                    ? item
                    : item.title.toLowerCase().includes(query.toLowerCase())
                )
                .map((x) => (
                  <tr key={x._id}>
                    <td>{x.bookid}</td>
                    <td>{x.title} </td>
                    <td>{x.author}</td>
                    <td>{x.price} </td>
                    <td>{x.category}</td>
                    <td>{x.count} </td>
                    <td>
                      {
                        <>
                          <button onClick={()=>ondel(x._id)}type="submit">Del</button>
                          <button onClick={()=>onupdate(x)}type="submit">Update</button>
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
export default BookList;
