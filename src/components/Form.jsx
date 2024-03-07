import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/books/books";
import store from "../redux/configureStore";
function Form() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [author, setAutor] = useState("");
  const handleSubmit = function (e) {
    e.preventDefault();
    if (!title && !author) return;
    const book = {
      id: new Date().getTime(),
      title,
      author,
    };
    dispatch(addBook(book));
    setAutor("");
    setTitle("");
    console.log(book);
    console.log(store.getState());
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <label htmlFor="author">
        <input
          name="author"
          type="text"
          id="author"
          placeholder="author"
          className="border-2 border-black "
          value={author}
          onChange={(e) => setAutor(e.target.value)}
        />
      </label>
      <button type="submit" className="border-2 border-black px-2 py-1">
        submit
      </button>
    </form>
  );
}
export default Form;
