import React from "react";
import styled from "styled-components";
import { useFormik } from "formik";
import { signUpSchema } from "../schemas";

const initialValues = {
  name: "",
  email: "",
  password: "",
  confirm_password: "",
};

const MyForm = () => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: signUpSchema,
      onSubmit: (values, action) => {
        console.log(
          "🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values",
          values
        );
        action.resetForm();
      },
    });
  console.log(
    "🚀 ~ file: Registration.jsx ~ line 25 ~ Registration ~ errors",
    errors
  );
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h3>CONTACT US</h3>
        <div className="inputBlock">
          <label htmlFor="name">Name</label>
          <input
            type="name"
            autoComplete="off"
            name="name"
            id="name"
            placeholder="Type your Name"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && touched.name ? (
            <p className="form-error">{errors.name}</p>
          ) : null}
        </div>
        <div className="inputBlock">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            autoComplete="off"
            id="email"
            placeholder="Type your Email"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <p className="form-error">{errors.email}</p>
          ) : null}
        </div>
        <div className="inputBlock">
          <label htmlFor="message">Your Feedback</label>
          <input
            className="textarea"
            name="message"
            autoComplete="off"
            id="message"
            placeholder="Type your Message here"
          />
        </div>
        <div className="modal-buttons">
          <button className="input-button" type="submit">
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};
const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem;
  color: white;
  @media (max-width: 768px) {
    margin: 1rem 0;
  }
  a {
    color: white;
    font-weight: 600;
    text-decoration: none;
  }
  input {
    margin: 0.8rem;
    width: 22rem;
    padding: 0.7rem;
  }
  .textarea {
    width: 17.3rem;
    height: 6rem;
  }
  button {
    width: 10rem;
    height: 4rem;
    color: white;
    font-weight: 500;
    font-size: 1.2rem;
    background: rgb(63, 63, 63);

    &:hover {
      color: white;
      background: black;
      border-radius: 0.1rem;
    }
  }
`;
export default MyForm;
