import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";

const About = (props) => {
  const [id, setid] = useState();
  const [fname, setfname] = useState();
  const [lname, setlname] = useState();
  const [email, setemail] = useState();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [fnameValidation, setfnameValidation] = useState(false);
  const [lnameValidation, setlnameValidation] = useState(false);
  const [emailValidation, setemailValidation] = useState(false);
  const [email2Validation, setemail2Validation] = useState(false);

  useEffect(() => {
    if (props.data.updateData.length > 0) {
      setid(props.data.updateData[0].id);
      setfname(props.data.updateData[0].first_name);
      setlname(props.data.updateData[0].last_name);
      setemail(props.data.updateData[0].email);
    }
  }, [props.data]);

  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const onValidate = (e) => {
    // if (document.getElementById("fname").value === "") {
    //   setfnameValidation(true);
    // }
    // if (document.getElementById("lname").value === "") {
    //   setlnameValidation(true);
    // }
    if (document.getElementById("email").value === "") {
      setemailValidation(true);
    } else if (
      !re.test(String(document.getElementById("email").value).toLowerCase())
    ) {
      setemail2Validation(true);
    }
    if (
      // document.getElementById("fname").value !== "" &&
      // document.getElementById("lname").value !== "" &&
      document.getElementById("email").value !== "" &&
      re.test(String(document.getElementById("email").value).toLowerCase())
    ) {
      props.data.updateLoading = true;
      // setIsLoggedIn(true)
      setTimeout(() => {
        console.log("set time out");
        props.data.updateLoading = false;
        setIsLoggedIn(true);
      }, 1000);
      // setIsLoggedIn(true);
      // props.data.updateLoading = true
      props.saveUser({
        id: props.data.updateData[0].id,
        first_name: fname,
        last_name: lname,
        email: email,
      });
    }
  };

  if (isLoggedIn) {
    return <Redirect to="/authors" />;
  }

  console.log(props.data.updateData);

  return (
    <div className="container">
      <h1>Update Author</h1>
      <form style={{ marginTop: "30px" }}>
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            type="number"
            id="id"
            className="form-control"
            value={id}
            readOnly
            onChange={(e) => setid(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="fname" className="form-label">
            First Name
          </label>
          <input
            type="text"
            id="fname"
            className="form-control"
            value={fname}
            onChange={(e) => {
              setfname(e.target.value);
              setfnameValidation(false);
            }}
          />
          {fnameValidation && (
            <div id="fnameValidate">Please Enter First name</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lname" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            if="lname"
            className="form-control"
            value={lname}
            onChange={(e) => {
              setlname(e.target.value);
              setlnameValidation(false);
            }}
          />
          {lnameValidation && (
            <div id="lnameValidate">Please Enter Last name</div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
              setemailValidation(false);
              setemail2Validation(false);
            }}
          />
          {emailValidation && <div id="emailValidate">Please Enter Email</div>}
          {email2Validation && (
            <div id="emailValidate">Please Enter Valid Email</div>
          )}
        </div>
        <button
          type="button"
          className="btn btn-primary updatebtn"
          onClick={(e) => {
            onValidate(e);
          }}
        >
          Update &nbsp;{props.data.updateLoading && <div id="loading"></div>}
        </button>
      </form>
    </div>
  );
};

export default About;
