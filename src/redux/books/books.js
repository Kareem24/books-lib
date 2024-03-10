const initialState = [];

function bookReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "book/add":
      return [...state, payload];
    case "book/remove":
      return state.filter((item) => item.id !== payload);
    default:
      return state;
  }
}

export const addBook = function (book) {
  return { type: "book/add", payload: book };
};
export const removeBook = function (id) {
  return { type: "book/remove", payload: id };
};

export default bookReducer;
