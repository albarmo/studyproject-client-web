import axios from "axios";

export const userLogin = (email, password) => {
  return (dispatch) => {
    console.log(email, password, "dari user action");
    axios({
      method: "POST",
      url: "http://localhost:5000/user/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then(({ data }) => {
        dispatch({ type: "LOGIN", payload: data });
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
