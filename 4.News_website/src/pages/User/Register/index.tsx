import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Helmet } from "react-helmet";

const Register: React.FC = () => {
  const initialValues = {
    userType: "",
    username: "",
    fullName: "",
    email: "",
    password: "",
    name: "",
    description: "",
    isAdmin: false,
  };

  const validationSchemaUser = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,
        "Password must contain at least 1 uppercase, 1 lowercase, 1 digit"
      )
      .required("Password is required"),
  });

  const validationSchemaPublisher = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string()
      .min(5, "Password must be at least 5 characters")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/,
        "Password must contain at least 1 uppercase, 1 lowercase, 1 digit"
      )
      .required("Password is required"),
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
  });

  const handleRegister = async (values: any) => {

  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Register | TIME</title>
        <link rel="icon" href="https://png.pngtree.com/png-clipart/20211017/original/pngtree-letter-t-logo-png-image_6854722.png" />
      </Helmet>
      <Formik
        initialValues={initialValues}
        validationSchema={
          initialValues.userType === "user"
            ? validationSchemaUser
            : validationSchemaPublisher
        }
        onSubmit={handleRegister}
      >
        {({ values, setFieldValue }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              margin: "0 auto",
            }}
          >
            <p
              style={{ fontSize: "24px", fontWeight: "600", marginTop: "40px" }}
            >
              Create your account.
            </p>
            <p style={{ margin: "15px", fontSize: "18px" }}>
              Already have a TIME account?{" "}
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "#e90606" }}
              >
                Sign in.
              </Link>
            </p>
            <div>
              <label>
                <Field
                  style={{ margin: "8px" }}
                  type="radio"
                  name="userType"
                  value="user"
                  checked={values.userType === "user"}
                  onChange={() => setFieldValue("userType", "user")}
                />
                User
              </label>
              <label>
                <Field
                  style={{ margin: "8px" }}
                  type="radio"
                  name="userType"
                  value="publisher"
                  checked={values.userType === "publisher"}
                  onChange={() => setFieldValue("userType", "publisher")}
                />
                Publisher
              </label>
            </div>
            {(values.userType === "user" ||
              values.userType === "publisher") && (
              <div>
                {/*  Inputs for user */}
                {values.userType === "user" && (
                  <>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      type="text"
                      name="fullName"
                      placeholder="Enter your fullName"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="fullName"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      type="text"
                      name="password"
                      placeholder="Enter your password"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <label>
                      <Field
                        type="checkbox"
                        name="isAdmin"
                        checked={values.isAdmin}
                        onChange={() =>
                          setFieldValue("isAdmin", !values.isAdmin)
                        }
                      />
                      Admin?
                    </label>
                  </>
                )}

                {/* Inputs for publisher */}
                {values.userType === "publisher" && (
                  <>
                    <Field
                      type="text"
                      name="username"
                      placeholder="Enter your username"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="username"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      type="text"
                      name="email"
                      placeholder="Enter your email"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      type="text"
                      name="description"
                      placeholder="Enter your description"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="description"
                      component="div"
                      style={{ color: "red" }}
                    />
                    <Field
                      type="text"
                      name="password"
                      placeholder="Enter your password"
                      style={{
                        width: "100%",
                        marginBottom: "20px",
                        padding: "8px",
                        border: "1px solid black",
                        borderRadius: "5px",
                      }}
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </>
                )}

                <button
                  type="submit"
                  style={{
                    width: "100%",
                    backgroundColor: "#e90606",
                    color: "white",
                    border: "none",
                    marginTop: "30px",
                    padding: "10px 20px",
                    borderRadius: "5px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "16px",
                    display: "block",
                  }}
                  disabled={!values.userType}
                >
                  CREATE ACCOUNT
                </button>
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
