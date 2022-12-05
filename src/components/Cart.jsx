import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { Button } from "@mui/material";
import { manipulateCart } from "../redux/cart/cart-action";
import { REMOVE_ITEM, UPDATE_QTY } from "../redux/cart/cart-constants";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CartEmpty from "./assets/Cart_emty.png";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [totalCal, setTotalCal] = useState({
    price: 0.0,
    discount: 0.0,
    deliveryCharge: 4,
    total: 0.0,
  });

  const navigate = useNavigate();

  const cartItems = useSelector((state) => state.reducer.cartItems);

  console.log(cartItems, "here in cart");

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems.length) {
      var totalTemp = 0;
      var priceTemp = 0;
      var discountTemp = 0;
      cartItems.map((item) => {
        
        console.log(item, "here in CartItem in Price");
        discountTemp =
          (discountTemp + (item.price * item.discountPercentage) / 100) *
          item.qty;
        totalTemp = (totalTemp + item.price) * item.qty;
        // priceTemp = (totalTemp + discountTemp) * item.qty;
        priceTemp = totalTemp + discountTemp;
        console.log(priceTemp, "priceTemp here");
      });

      setTotalCal((prevState) => ({
        ...prevState,
        price: Math.floor(priceTemp).toFixed(2),
        discount: Math.floor(discountTemp).toFixed(2),
        total: Math.floor(totalTemp).toFixed(2),
      }));
    }
  }, [cartItems]);

  const handleRemove = (item) => {
    dispatch(manipulateCart(REMOVE_ITEM, item.id));
  };

  const handleUpdateQty = (index, isIncrease) => {
    var tempData = cartItems;
    if (isIncrease) {
      tempData[index].qty += 1;
    } else {
      if (tempData[index].qty > 1) {
        tempData[index].qty -= 1;
      } else {
        handleRemove(tempData[index]);
        return;
      }
    }
    dispatch(manipulateCart(UPDATE_QTY, tempData));
  };

  const handleGoToHome = () => {
    navigate("/");
  };
  const handleGoToOrderedList = () => {
    navigate("/Form_address");

    // dispatch(manipulateCart(EMPTY_CART,cartItems))
  };
  return (
    <>
      <div className="main-contai-cart">
        {cartItems.length ? (
          <div className="wraper">
            <div className="col-8-cart">
              {cartItems &&
                cartItems.map((item, index) => (
                  <div className="cart-item-list" style={{}}>
                    <div className="inner-cart">
                      <div className="img-cart">
                        <img className="img-prod-cart" src={item.thumbnail} alt="Thumbnail" />
                      </div>

                      <div className="cart-content">
                        <h2 className="cart-title">{item.title}</h2>
                        <p className="paragraph-cart">{item.description}</p>
                        <p className="brand-name">{item.brand}</p>
                        <div className="price-content">
                          <span className="price-cart">${item.price}</span>
                          <span className="discount-cart">
                            {item.discountPercentage}% Off
                          </span>
                        </div>
                      </div>
                      <p style={{ fontSize: "12px" }}>
                        Delivery by Tomorrow, Sun | Free₹120
                      </p>
                    </div>
                    <div className="cart-qty-delete">
                      <div className="qty-cart">
                        <span onClick={() => handleUpdateQty(index)}>
                          <button className="roundbtn">
                            <RemoveIcon sx={{ fontSize: "12px" }} />
                          </button>
                        </span>
                        <span>
                          <input
                            className="input-qty"
                            type="text"
                            value={item.qty}
                          />
                        </span>
                        <span onClick={() => handleUpdateQty(index, true)}>
                          <button className="roundbtn">
                            <AddIcon sx={{ fontSize: "12px" }} />
                          </button>
                        </span>
                      </div>
                      <div className="save-remove">
                        <span>
                          <span className="saveforl">SAVE FOR LETER</span>
                        </span>
                        <span onClick={() => handleRemove(item)}>
                          <span className="saveforl-remove">REMOVE</span>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

              <div className="sticky-btn-container">
                <div className="container-btn-buy">
                  <Button
                    onClick={handleGoToOrderedList}
                    variant="contained"
                    sx={{
                      padding: "16px 30px",
                      width: "250px",
                      fontSize: "16px",
                      fontFamily: "roboto",
                      textTransform: "uppercase",
                      borderRadius: "2",
                      fontWeight: "500",
                      lineHeight: "16px",
                    }}
                  >
                    Place Order
                  </Button>
                </div>
              </div>
            </div>
            <div className="col-4-cart">
              <div className="total-price-section">
                <h1 className="headeing-for-price">PRICE DETAILS</h1>
              </div>
              <div className="total-price">
                <div className="price-line">
                  <span>Price</span>
                  <span>$ {totalCal.price}</span>
                </div>
                <div className="price-line">
                  <span>Discount</span>
                  <span className="dis-price">$ {totalCal.discount}</span>
                </div>
                <div className="price-line">
                  <span>Delivery Charges</span>
                  <span className="dis-price">$ {totalCal.deliveryCharge}</span>
                </div>
                <div className="total-price-line">
                  <span className="total-text">Total</span>
                  <span className="total-text">$ {totalCal.total}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="cart-is-empty"
            style={{ boxShadow: "rgb(0 0 0 / 20%) 0px 1px 2px 0px" }}
          >
            <img className="img-empty-cart" src={CartEmpty} alt="" />

            <h1 className="cart-empty-heading">Cart is empty </h1>
            <p className="sub-heading-cart">Add items to it now.</p>
            <Button
              onClick={handleGoToHome}
              sx={{
                fontSize: "14px",
                backgroundColor: "#2874f0",
                padding: "12px 72px",
                fontFamily: "roboto",
                boxShadow: "0 2px 4px 0 rgb(0 0 0 / 20%);",
                borderRadius: "4px",
                marginTop: "20px",
              }}
              variant="contained"
            >
              Shop Now
            </Button>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
