import { useDispatch } from "react-redux";
import { checkStatus } from "../redux/categories/categories";
const Categories = function () {
  const dispatch = useDispatch();

  return (
    <div className="p-4">
      <button
        className="border-2 border-black px-2 py-1"
        onClick={() => dispatch(checkStatus)}
      >
        check status
      </button>
    </div>
  );
};

export default Categories;
