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

export const userRegister = (payload) => {
  console.log(payload, "action");
  return (dispatch) => {
    const {
      classType,
      email,
      fileList,
      fullname,
      gender,
      password,
      phone_number,
      school,
    } = payload;

    console.log(email);
    axios({
      method: "POST",
      url: "http://localhost:5000/user/register",
      data: {
        fullname: fullname,
        profile_image: fileList,
        phone_number: phone_number,
        email: email,
        gender: gender,
        class: classType,
        school: school,
        password: password,
      },
    })
      .then(({ data }) => {
        console.log("success register new user", data);
        swal("Success Created new Account!", data.email);
      })
      .catch((error) => {
        console.log(error, "error while register - userAction");
      });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    console.log("userlogout action");
    dispatch({ type: "LOGOUT" });
  };
};
