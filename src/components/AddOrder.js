import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { json } from "react-router-dom";
// import "../styles/AddOrder.css";
function AddOrder() {
  const [userId, setUserId] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const addOrder = async () => {
    let product = { userId, subTotal, phone };

    let user = localStorage.getItem("user");
    let data = JSON.parse(user);
    console.log(data.user.token);
    let result = await fetch("http://localhost:8000/url/add-order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${data.user.token} `,
      },

      body: JSON.stringify({
        user_id: userId,
        sub_total: subTotal,
        phone_number: phone,
      }),
    });

    result = await result.json();
    console.log("result", result);
    if (result.success) {
      navigate("/order-list");
    } else {
      navigate("/add-order");
    }

    console.log("product ", product);
    localStorage.setItem("user_id", JSON.stringify(userId));
  };
  return (
    <div>
      <div className="container ">
        <h1 className="heading ">Create Order Now </h1>
        <Form className="form-control my-3 form ">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>User Id </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter User_Id "
              value={userId}
              required
              onChange={(e) => setUserId(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your details with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Sub_Total </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Sub_Total "
              value={subTotal}
              required
              onChange={(e) => setSubTotal(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Phone </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Phone Number  "
              value={phone}
              required
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary outlined-primary" onClick={addOrder}>
            Add
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default AddOrder;
