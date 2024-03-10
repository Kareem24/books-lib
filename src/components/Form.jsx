import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/books";
import { v4 as uuidv4 } from "uuid";
function Form() {
  const dispatch = useDispatch();
  const [bookDetails, setBookDetails] = useState({ title: "", author: "" });
  const handleSubmit = function (e) {
    e.preventDefault();
    const { title, author } = bookDetails;
    if (!title && !author) return;
    const book = {
      id: uuidv4(),
      title,
      author,
    };
    dispatch(addBook(book));
    console.log(book);
    setBookDetails({ title: "", author: "" });
  };
  return (
    <form
      className="flex flex-col gap-5 items-start justify-start"
      onSubmit={handleSubmit}
    >
      <label htmlFor="title">
        <input
          name="title"
          type="text"
          id="title"
          placeholder="title"
          className="border-2 border-black"
          value={bookDetails.title}
          onChange={(e) =>
            setBookDetails({ ...bookDetails, title: e.target.value })
          }
        />
      </label>
      <label htmlFor="author">
        <input
          name="author"
          type="text"
          id="author"
          placeholder="author"
          className="border-2 border-black "
          value={bookDetails.author}
          onChange={(e) =>
            setBookDetails({ ...bookDetails, author: e.target.value })
          }
        />
      </label>
      <button type="submit" className="border-2 border-black px-2 py-1">
        submit
      </button>
    </form>
  );
}
export default Form;
