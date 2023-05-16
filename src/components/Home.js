import React, { useEffect, useState } from "react";
import Header from "./Header";
import "../styles/Home.css";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  // const user_id = localStorage.getItem("user_id");
  const fetchData = async () => {
    let result = await fetch(`http://localhost:8000/url`);

    result = await result.json();
    console.log(result);
    setData(result);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="homeContainer">
        <div className="addTopic">
          <h2 className="heading-two"> Create List </h2>
          <Link to="/add-order">
            <img
              src="https://cdn3.iconfinder.com/data/icons/eightyshades/512/14_Add-1024.png"
              alt="add icon"
            ></img>
          </Link>
        </div>

        <div className="topicList">
          <h2 style={{ position: "relative", left: "8%" }}>
            Item List <i className="fa-solid fa-house"></i>
          </h2>
        </div>
        <div className="tableList">
          <Table striped bordered hover>
            <thead>
              <tr style={{ textAlign: "center" }}>
                <th
                  style={{
                    marginLeft: "20px",
                    position: "absolute",
                    left: "23%",
                  }}
                >
                  ListTitle
                </th>
                <th>ListDescription</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center", fontSize: "20px" }}>
              {data.map((order, index) => {
                return (
                  <tr key={index}>
                    <td style={{ position: "relative", left: "8%" }}>
                      {order.listTitle}
                    </td>
                    <td>{order.listDescription}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default Home;
