import Book from "../components/Book";
import Form from "../components/Form";
import { books } from "../data";

export default function Books() {
  return (
    <main className="p-4">
      {books.map((book) => (
        <Book book={book} key={book.id} />
      ))}
      <Form />
    </main>
  );
}
