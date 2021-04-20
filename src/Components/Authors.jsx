import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { userData } from "../Redux/Actions/UserAction";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Authors = (props) => {
  console.log(props.data.users);

  const dispatch = useDispatch();

  const fatchUsers = async () => {
    const response = await axios
      .get("https://reqres.in/api/users?page=1")

      .catch((err) => {
        console.log("Error", err);
      });
    dispatch(userData(response.data.data));
  };

  useEffect(() => {
    fatchUsers();
  }, []);

  useEffect(() => {
    if (props.data.saveData === true) {
      toast.success("Add data sucessfull", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      props.data.saveData = false;
    }

    if (props.data.saveUpdateData === true) {
      toast.success("Update data sucessfull", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      props.data.saveUpdateData = false;
    }
    if (props.data.deleteData === true) {
      toast.success("Delete data sucessfull", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      props.data.deleteData = false;
    }
  });
  return (
    <div className="container">
      <h1>Authors</h1>
      <NavLink className="navlink" to="/authors/add-author">
        <button className="btn btn-success add-btn">Add Auther</button>
      </NavLink>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {props.data.users.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.id}</td>
                <td>{value.first_name}</td>
                <td>{value.last_name}</td>
                <td>{value.email}</td>
                <td>
                  <NavLink
                    className="navlink"
                    to={"/authors/" + value.id}
                  >
                    <button
                      className="btn btn-info"
                      onClick={() =>
                        props.updateUser({
                          id: value.id,
                          first_name: value.first_name,
                          last_name: value.last_name,
                          email: value.email,
                        })
                      }
                    >
                      Update
                    </button>
                  </NavLink>
                  &nbsp;&nbsp;&nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => props.deleteUser(value.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  );
};

export default Authors;
