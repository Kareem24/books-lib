import PropTypes from "prop-types";
function Book({ book }) {
  const { title, author } = book;
  return (
    <li className="flex w-full md:w-1/2 justify-between items-center gap-4 list-none my-4">
      <p>
        <span>{title}</span> by <span>{author}</span>
      </p>
      <button className="border-2 border-black px-2 py-1">delete</button>
    </li>
  );
}
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number,
    author: PropTypes.string,
    title: PropTypes.string,
  }),
};

export default Book;
