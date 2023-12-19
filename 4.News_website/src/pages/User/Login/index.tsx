import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Helmet } from "react-helmet";

const Login: React.FC = () => {
  const initialValues = {
    username: "",
    password: "",
  };

  const handleLogin = (values: any) => {
  };

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login | TIME</title>
        <link rel="icon" href="https://png.pngtree.com/png-clipart/20211017/original/pngtree-letter-t-logo-png-image_6854722.png" />
      </Helmet>
      <Formik
        initialValues={initialValues}
        onSubmit={handleLogin}
      >
        <Form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            margin: "0 auto",
          }}
        >
          <p style={{ fontSize: "24px", fontWeight: "600", marginTop: "40px" }}>
            Sign In
          </p>
          <p style={{ margin: "15px", fontSize: "18px" }}>
            Don’t have an account?{" "}
            <Link to="/register" style={{ textDecoration: "none", color: "#e90606" }}>
              Create one.
            </Link>
          </p>
          <Field
            type="text"
            name="username"
            placeholder="Enter your username"
            style={{
              width: "30%",
              marginBottom: "20px",
              padding: "8px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          />
          <ErrorMessage name="username" component="div" style={{ color: "red" }} />
          <Field
            type="password"
            name="password"
            placeholder="Enter your password"
            style={{
              width: "30%",
              marginBottom: "40px",
              padding: "8px",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          />
          <ErrorMessage name="password" component="div" style={{ color: "red" }} />
          <button
            type="submit"
            style={{
              width: "30%",
              backgroundColor: "#e90606",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "16px",
            }}
          >
            SIGN IN
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
