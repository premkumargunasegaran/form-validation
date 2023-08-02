import { React, useEffect, useState } from "react";
import axios from "axios";

function UserForm() {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const [check, setcheck] = useState(false);
  const [errors, seterrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    check: "",
  });

  const oncheckChange = () => {
    setcheck(!check);
  };

  const handleonchange = (e) => {
    const { name, value, check } = e.target;
    setformdata((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };

  useEffect(() => {
    validation();
  }, [formdata, check]);

  const validation = () => {
    let isValid = true;
    let newerror = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      check: "",
    };
    if (!formdata.firstname) {
      isValid = false;
      newerror.firstname = "First Name Required";
    }
    if (!formdata.lastname) {
      isValid = false;
      newerror.lastname = "Lastname Name Required";
    }
    if (!formdata.email) {
      isValid = false;
      newerror.email = "Email Name Required";
    }
    if (!formdata.password) {
      isValid = false;
      newerror.password = "password Name Required";
    }
    if (!check) {
      isValid = false;
      newerror.check = "Please Accept our Terms and conditions";
    }
    seterrors(newerror);
    return isValid;
  };

  const handlesubmit = async (e) => {
    e.preventDefault();

    const datas = {
      firstname: formdata.firstname,
      lastname: formdata.lastname,
      email: formdata.email,
      password: formdata.password,
      checkbox: check,
    };

    if (validation()) {
      // Perform form submission or other actions here
      console.log(datas);
      try {
        return await axios.post("http://localhost:8000/formdata", datas);
      } catch (error) {
        console.log(error);
      }
      setformdata({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
      });
      setcheck(false);
    }
  };

  return (
    <div>
      <form>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstname"
            onChange={handleonchange}
            value={formdata.firstname}
          />
          {errors.firstname && (
            <span className="text-danger">{errors.firstname}</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            value={formdata.lastname}
            onChange={handleonchange}
            name="lastname"
            className="form-control"
          />
          {errors.lastname && (
            <span className="text-danger">{errors.lastname}</span>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            value={formdata.email}
            onChange={handleonchange}
            name="email"
            type="email"
            className="form-control"
          />
          {errors.email && <span className="text-danger">{errors.email}</span>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            value={formdata.password}
            onChange={handleonchange}
            name="password"
            type="password"
            className="form-control"
          />
          {errors.password && (
            <span className="text-danger">{errors.password}</span>
          )}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            checked={check}
            className="form-check-input"
            name="check"
            onChange={oncheckChange}
            // onChange={() => {
            //   setcheck(!check);
            // }}
          />
          <label className="form-check-label">Check me out</label>
        </div>
        {errors.check && (
          <span className="text-danger d-block">{errors.check}</span>
        )}
        <button
          type="submit"
          className="btn btn-primary"
          onClick={handlesubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;
