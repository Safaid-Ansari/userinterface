import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
// import { json } from "react-router-dom";
// import "../styles/AddOrder.css";
function AddOrder() {
  const [listTitle, setListTitle] = useState("");
  const [listDescription, setListDescription] = useState("");

  const navigate = useNavigate();

  const addOrder = async () => {
    let list = { listTitle, listDescription };

    let user = localStorage.getItem("user");
    let data = JSON.parse(user);
    console.log("data", data);
    console.log(data.token);
    let result = await fetch("http://localhost:8000/url/add-order", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${data.token} `,
      },

      body: JSON.stringify({
        listTitle: listTitle,
        listDescription: listDescription,
      }),
    });

    result = await result.json();
    console.log("result", result);
    if (result.success) {
      navigate("/order-list");
    } else {
      navigate("/add-order");
    }

    console.log("product ", list);
    localStorage.setItem("user_id", JSON.stringify(data.userId));
  };
  return (
    <div>
      <div className="container ">
        <h1 className="heading ">Create Order Now </h1>
        <Form className="form-control my-3 form ">
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>List Title </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter List Title "
              value={listTitle}
              required
              onChange={(e) => setListTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>List Description </Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter List Description "
              value={listDescription}
              required
              onChange={(e) => setListDescription(e.target.value)}
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
