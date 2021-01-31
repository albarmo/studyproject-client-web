const initialState = {
  fullname: "",
  email: "",
  id: "",
  role: "",
  school: "",
  access_token: "",
  isLogin: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        fullname: action.payload.fullname,
        email: action.payload.email,
        role: action.payload.role,
        school: action.payload.school,
        access_token: action.payload.access_token,
        isLogin: true,
      };

    case "LOGOUT":
      return { state: initialState };

    default:
      return state;
  }
};

export default userReducer;
