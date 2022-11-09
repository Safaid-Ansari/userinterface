import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css";
// import Header from "./Header";
function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const signUp = async () => {
    let data = { name, phone, password, confirm_password };
    // console.log(data);

    let result = await fetch("http://localhost:8000/url/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });
    result = await result.json();
    if (result.success) {
      navigate("/login");
    }
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
  };

  return (
    <>
      {/* <Header></Header> */}
      <div className="container ">
        <h1 className="heading ">Sign-Up</h1>
        <Form className="form-control my-3 form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name </Form.Label>{" "}
            <i class="fa-solid fa-house-user"></i>
            <Form.Control
              type="text"
              placeholder="Enter Name "
              value={name}
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Phone"
              value={phone}
              required
              onChange={(e) => {
                setPhone(e.target.value);
              }}
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
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="confirm password"
              value={confirm_password}
              required
              onChange={(e) => {
                setConfirmPassword(e.target.value);
              }}
            />
          </Form.Group>

          <Button variant="primary outlined-primary" onClick={signUp}>
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Register;
