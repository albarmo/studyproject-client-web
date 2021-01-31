const initialState = {
  course: [],
};

const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_COURSE":
      console.log(action.payload, "courseReducer");
      return { ...state, course: action.payload };

    default:
      return state;
  }
};

export default courseReducer;
