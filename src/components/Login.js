import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// import Header from "./Header";
function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    let data = { phone, password };
    console.log(data);
    let result = await fetch("http://localhost:8000/url/login-user", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    result = await result.json();
    console.log(result);
    if (result.success) {
      navigate("/add-order");
    } else {
      navigate("/login");
    }

    console.log(result.success);
    localStorage.setItem("user", JSON.stringify(result));
  };

  return (
    <>
      <div className="container ">
        <h1 className="heading ">Sign-In</h1>
        <Form className="form-control my-3 form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone"
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your details with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary outlined-primary" onClick={login}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
