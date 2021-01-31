import axios from "axios";
import swal from "sweetalert";

export const userLogin = (email, password) => {
  return (dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/user/login",
      data: {
        email: email,
        password: password,
      },
    })
      .then(({ data }) => {
        console.log("success login", data);
        dispatch({ type: "LOGIN", payload: data });
        localStorage.setItem("access_token", data.access_token);
      })
      .catch((error) => {
        console.log("failed login");
        console.log(error);
        dispatch({ type: "LOGOUT" });
        swal("Ops!", "email or password wrong!");
      });
  };
};

export const userRegister = (data, email) => {
  console.log(data, "parameter <<< action <<< register");
  return (dispatch) => {
    axios({
      method: "POST",
      url: "http://localhost:5000/user/register",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then(({ data }) => {
        console.log("success register new user", email);
        swal("Success Created new Account!", email);
      })
      .catch((error) => {
        console.log(error.message, "error while register - userAction");
      });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    console.log("userlogout action");
    dispatch({ type: "LOGOUT" });
  };
};
