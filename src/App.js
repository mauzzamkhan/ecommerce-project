import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home2 from "./components/Home2";
import Cart from "./components/Cart";
import FAddress from "./components/FAddress";
import DetailPage from "./components/DetailPage";
import OrdersList from "./components/OrdersList";
import OrderDetailPage from "./components/OrderDetailPage";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        {/* <Home2/> */}
      </div>
      {/* <div> */}
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/Form_address" element={<FAddress/>} />
          <Route path="/detail-page/:id" element={<DetailPage />} />
          <Route path="/orders-list" element={<OrdersList/>}/>
          <Route path="/order-detail-page" element={<OrderDetailPage/>}/>
        </Routes>
      {/* </div> */}
    </>
  );
}

export default App;
