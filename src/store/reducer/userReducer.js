const initialState = {
  fullname: "",
  email: "",
  id: "",
  role: "",
  school: "",
  access_token: "",
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      console.log(state, "fuck");
      return {
        ...state,
        id: action.payload.id,
        fullname: action.payload.fullname,
        email: action.payload.email,
        role: action.payload.role,
        school: action.payload.school,
        access_token: action.payload,
      };

    case "LOGOUT":
      return { ...state, state: initialState };

    default:
      return state;
  }
};

export default Reducer;
