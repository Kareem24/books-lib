import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { removeBook } from "../redux/books/books";

function Book({ book }) {
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeBook(id));
  };
  const { title, author, id } = book;
  return (
    <li className="flex w-full md:w-1/2 justify-between items-center gap-4 list-none my-4">
      <p>
        <span>{title}</span> by <span>{author}</span>
      </p>
      <button
        className="border-2 border-black px-2 py-1"
        onClick={() => handleDelete(id)}
      >
        delete
      </button>
    </li>
  );
}
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    author: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Book;
