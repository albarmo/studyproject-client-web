import axios from "axios";

export const getCourse = () => {
  return (dispatch) => {
    axios({
      method: "GET",
      url: "http://localhost:5000/course",
    })
      .then(({ data }) => {
        dispatch({ type: "GET_COURSE", payload: data });
        console.log(data, "data action");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
