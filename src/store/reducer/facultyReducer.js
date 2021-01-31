const initialState = {
  faculties: [],
};

const facultyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_FACULTIES":
      console.log(action.payload, "from faculty reducers");
      return {
        ...state,
        faculties: action.payload,
      };

    default:
      return state;
  }
};

export default facultyReducer;
