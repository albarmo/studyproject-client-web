import axios from "axios";

export const getFaculty = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "http://localhost:5000/faculty",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((action) => {
        console.log(action.data, "action get faculties");
        dispatch({ type: "GET_FACULTIES", payload: action.data });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
};
