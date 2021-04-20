import axios from "axios";
import { ADD_USER, DELETE_USER, SAVE_USER, UPDATE_USER, USER_DATA } from "./ActionType";

export const userData = (users) => {
    return {
        type: USER_DATA,
        data : users
    };
}

export const addUser = (data, props) => {
    return (dispatch) => {
        axios
          .post("https://reqres.in/api/users?page=1",  {data} )
          .then((response) => {
            console.log(response);
            dispatch({
              type: ADD_USER,
              data: response.data.data,
            });
          })
          .catch((error) => {
            console.log(error);
          });
    }

}

export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(`https://reqres.in/api/users/${id}`)
      .then((response) => {
        console.log(response);
        dispatch({
          type: DELETE_USER,
          id: id,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const updateUser = (data) => {
  return (dispatch) => {
    axios
      .get(`https://reqres.in/api/users/${data.id}`)
      .then((response) => {
        console.log(response.data.data.id);
        dispatch({
          type: UPDATE_USER,
          response: response.data.data
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const saveUser = (data) => {
  return (dispatch) => {
    axios
      .put(`https://reqres.in/api/users/${data.id}`, {data})
      .then((response) => {
        console.log(response);
        dispatch({
          type: SAVE_USER,
          data: data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};