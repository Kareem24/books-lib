import Book from "../components/Book";
import Form from "../components/Form";
import { useSelector } from "react-redux";

export default function Books() {
  const books = useSelector((store) => store.books);
  return (
    <main className="p-4">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
      <Form />
    </main>
  );
}
