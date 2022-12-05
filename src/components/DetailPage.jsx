import { Button, Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./DetailPage.css";

import { useSelector, useDispatch } from "react-redux";
import { manipulateCart } from "../redux/cart/cart-action";
import { ADD_ITEM } from "../redux/cart/cart-constants";

const DetailPage = () => {
  const [data1, setData1] = useState({});

  const [value, setValue] = React.useState(1);

  const [isGotoCartVisible, setIsGotoCartVisible] = useState(false);

  const params = useParams();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.reducer.cartItems);

  const detailData = () => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => {
        setData1({ ...res.data, qty: 1 })
        console.log("response::::::::", res)
      })
      .catch((err) => ("error::::::::", err))
  };

  useEffect(() => {
    detailData();
  }, []);

  useEffect(() => {
    if (cartItems.filter((item) => item.id === data1.id).length) {
      setIsGotoCartVisible(true);
    } else {
      setIsGotoCartVisible(false);
    }
  }, [cartItems, data1]);

  const handleAddToCart = () => {
    dispatch(manipulateCart(ADD_ITEM, data1));
  };
  // const handleBuyNow = () => {};

  const handleGotoCart = () => {
    navigate("/cart");
  };

  console.log(data1, "here in images");
  return (
    <>
      <div className="main-container-detail-page">
        <div>
          <div className="col-4" style={{ display: "flex" }}>
            <div className="side-img-col">
              <div className="side-img-container">
                <img className="side-img" src={data1.images} alt="preview-img"/>
              </div>
            </div>
            <div className="product-image">
              <img className="product-thumbnail" src={data1.thumbnail} alt="thumbnail" />
            </div>
          </div>
          {/* <div> */}
          <div className="buttons">
            <Button
              sx={{ width: "249px" }}
              variant="contained"
              style={{ marginRight: "12px" }}
              onClick={handleAddToCart}
            >
              Buy Now
            </Button>
            {isGotoCartVisible ? (
              <Button
                sx={{ width: "249px" }}
                variant="outlined"
                onClick={handleGotoCart}
              >
                Go to Cart
              </Button>
            ) : (
              <Button
                sx={{ width: "249px" }}
                variant="outlined"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
            )}
          </div>
          {/* </div> */}
        </div>
        <div className="Content-of-product">
          {/* <h1>this is a detail page</h1> */}
          <h1 className="title-detail-page">{data1.title}</h1>
          <div className="rating-container">
            <span className="rating-text">{data1.rating}</span>
            <Rating
              name="size-small"
              value={value}
              max={1}
              sx={{ fontSize: "14px", color: "#ffffff" }}
            />
          </div>
          <section className="pricing">
            <span>
              <h1 className="price-title">${data1.price}</h1>
            </span>
            <span>
              <p className="discount-text">{data1.discountPercentage} Off</p>
            </span>
          </section>
          <div className="Description-container">
            <p className="description-text">Description :</p>
            {/* <div className="Description-text"> */}
            {/* </div> */}
            <p className="Description-text-api">{data1.description}</p>
            {/* <div className="Description-api">
            </div> */}
            <div></div>
          </div>
          <div>
            <p className="stock">
              {data1.stock <= 33
                ? `Only ${data1.stock} Available`
                : "Available"}
            </p>
          </div>
        </div>
      </div>
      {/* <h1>{state.item.id}</h1> */}
    </>
  );
};
export default DetailPage;
