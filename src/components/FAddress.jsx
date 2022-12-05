import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import "./Cart.css";
import "./FAdress.css";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { manipulateCart } from "../redux/cart/cart-action";
import { useNavigate } from "react-router-dom";

import { EMPTY_CART, ORDER_LIST } from "../redux/cart/cart-constants";

const FAddress = () => {
  const [data, setData] = useState({
    Name: "",
    mobile: "",
    pincode: "",
    locality: "",
    areaAndStreet: "",
    cityDistrict: "",
    state: "",
    Landmark: "",
    AlternatePhone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  // Accessing Data From reducer in reduer cartItems
  const cartItems = useSelector((state) => state.reducer.cartItems);

  const dispatch = useDispatch();

  // function created to go OrdersList Page//
  // In this fn sending an Object in this Object has cartItems & FormData Object Name orderList//

  const goToOrdersPage = () => {
    const orderList = [
      {
        orderItem: [...cartItems],
        orderDetails: data,
      },
    ];
    // sending to reducer in orderList
    dispatch(manipulateCart(ORDER_LIST, orderList));
    console.log(orderList, "Here in orderList in Fadd");

    // onClicking the Btn CartItem will be Empty
    dispatch(manipulateCart(EMPTY_CART, cartItems));
    navigate("/orders-list");
  };
  // setting FormData in data Hook
  const handleClick = () => {
    setData(data);
    console.log(data);
  };
  console.log(cartItems);

  return (
    <>
      <div className="main-contai-form">
        <div className="wraper">
          <div className="col-8-add">
            <div className="header">
              <h1 className="heading-add">Delivery Address</h1>
            </div>
            <div className="content-add">
              <div className="container-of-fields">
                <div className="row-form">
                  <span style={{ marginRight: "12px" }}>
                    <TextField
                      type="text"
                      label="Name"
                      sx={{ width: "280px", backgroundColor: "#ffffff" }}
                      onChange={(e) => handleChange(e)}
                      name="Name"
                      value={data.Name}
                    />
                  </span>
                  <span>
                    <TextField
                      type="number"
                      label="10-digit mobile number"
                      sx={{ width: "280px", backgroundColor: "#ffffff" }}
                      onChange={(e) => handleChange(e)}
                      name="mobile"
                      value={data.mobile}
                    />
                  </span>
                </div>
                <div className="row-form" style={{ marginTop: "12px" }}>
                  <span style={{ marginRight: "12px" }}>
                    <TextField
                      type="number"
                      label="Pincode"
                      sx={{ width: "280px", backgroundColor: "#ffffff" }}
                      onChange={(e) => handleChange(e)}
                      name="pincode"
                      value={data.pincode}
                    />
                  </span>
                  <span>
                    <TextField
                      type="text"
                      label="Locality"
                      sx={{ width: "280px", backgroundColor: "#ffffff" }}
                      onChange={(e) => handleChange(e)}
                      name="locality"
                      value={data.locality}
                    />
                  </span>
                </div>
                <div className="row-form" style={{ marginTop: "12px" }}>
                  <span style={{ marginRight: "12px" }}>
                    <TextField
                      label="Address  (Area and Street)"
                      type="text"
                      multiline
                      maxRows={4}
                      fullWidth
                      sx={{ backgroundColor: "#ffffff" }}
                      value={data.areaAndStreet}
                      onChange={(e) => handleChange(e)}
                      name="areaAndStreet"
                    />
                  </span>
                </div>
                <div className="row-form" style={{ marginTop: "12px" }}>
                  <span style={{ marginRight: "12px" }}>
                    <TextField
                      type="text"
                      label="City/District/Town"
                      value={data.cityDistrict}
                      sx={{ width: "280px", backgroundColor: "#ffffff" }}
                      onChange={(e) => handleChange(e)}
                      name="cityDistrict"
                    />
                  </span>
                  <span>
                    <TextField
                      type="text"
                      label="State"
                      sx={{ width: "280px", backgroundColor: "#ffffff" }}
                      value={data.state}
                      onChange={(e) => handleChange(e)}
                      name="state"
                    />
                  </span>
                </div>
                <div className="row-form" style={{ marginTop: "12px" }}>
                  <span style={{ marginRight: "12px" }}>
                    <TextField
                      type="text"
                      label="Landmark"
                      value={data.Landmark}
                      sx={{ width: "280px", backgroundColor: "#ffffff" }}
                      onChange={(e) => handleChange(e)}
                      name="Landmark"
                    />
                  </span>
                  <span>
                    <TextField
                      type="number"
                      label="Alternate Phone (Optional)"
                      value={data.AlternatePhone}
                      sx={{ width: "280px", backgroundColor: "#ffffff" }}
                      onChange={(e) => handleChange(e)}
                      name="AlternatePhone"
                    />
                  </span>
                </div>
              </div>
              <Button
                variant="contained"
                onClick={() => {
                  handleClick();
                  goToOrdersPage();
                }}
                sx={{
                  marginTop: "12px",
                  padding: "16px 30px",
                  width: "270px",
                  fontSize: "14px",
                  fontFamily: "roboto",
                  textTransform: "uppercase",
                  borderRadius: "2",
                  fontWeight: "500",
                  lineHeight: "16px",
                }}
              >
                Save and Deliver Here
              </Button>
            </div>
          </div>
          <div className="col-4-cart">
            <div className="total-price-section">
              <h1 className="headeing-for-price">PRICE DETAILS</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAddress;
