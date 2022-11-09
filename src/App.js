import "bootstrap/dist/css/bootstrap.min.css";
import AddOrder from "./components/AddOrder";
import Header from "./components/Header";
import Login from "./components/Login";
import Register from "./components/Register";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <h1> E-Commerce </h1> */}
        <Header></Header>
        <Routes>
          <Route path="/signup" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>

          <Route path="/add-order" element={<AddOrder></AddOrder>}></Route>
          <Route path="/order-list" element={<Home></Home>}></Route>

          {/* <Route path="/" element={<Login></Login>}></Route> */}
          <Route path="/" element={<Login></Login>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
