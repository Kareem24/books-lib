import { BrowserRouter, Route, Routes } from "react-router-dom";
import Books from "./pages/Books";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
