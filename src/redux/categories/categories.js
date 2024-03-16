const initialState = [];

function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "status/check":
      return payload;

    default:
      return state;
  }
}

export const checkStatus = function () {
  return { type: "status/check", payload: " under construction" };
};

export default categoriesReducer;
