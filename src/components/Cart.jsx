import React, { useEffect, useState } from "react";
import reducer from "../redux/cart/cart-reducer";
import { useSelector, useDispatch } from "react-redux";
import { ICON_TEMPLATES } from "froala-editor";
import "./Cart.css";
import { TextField } from "@mui/material";
import { manipulateCart } from "../redux/cart/cart-action";
import { REMOVE_ITEM, UPDATE_QTY } from "../redux/cart/cart-constants";

const Cart = () => {
  const [totalCal, setTotalCal] = useState({
    price: 0.0,
    discount: 0.0,
    deliveryCharge: 4,
    total: 0.0,
  });
  const cartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cartItems.length) {
      var totalTemp = 0;
      var priceTemp = 0;
      var discountTemp = 0;

      cartItems.map((item) => {
        discountTemp =
          (discountTemp + (item.price * item.discountPercentage) / 100) *
          item.qty;
        totalTemp = (totalTemp + item.price) * item.qty;
        priceTemp = (totalTemp + discountTemp) * item.qty;
      });

      setTotalCal((prevState) => ({
        ...prevState,
        price: Math.floor(priceTemp).toFixed(2),
        discount:  Math.floor(discountTemp).toFixed(2),
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
                        <img className="img-prod-cart" src={item.thumbnail} />
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
                          <button className="roundbtn">-</button>
                        </span>
                        <span>
                          <input
                            className="input-qty"
                            type="text"
                            value={item.qty}
                          />
                        </span>
                        <span onClick={() => handleUpdateQty(index, true)}>
                          <button className="roundbtn">+</button>
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
            </div>
            <div className="col-4-cart">
              <h1>total price section</h1>
              <div className="total price">
                <div className="price-line">
                  <span>Price</span>
                  <span>{totalCal.price}</span>
                </div>
                <div className="price-line">
                  <span>Discount</span>
                  <span>{totalCal.discount}</span>
                </div>
                <div className="price-line">
                  <span>Delivery Charges</span>
                  <span>{totalCal.deliveryCharge}</span>
                </div>
                <div className="price-line">
                  <span>Total</span>
                  <span>{totalCal.total}</span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Cart is empty </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
