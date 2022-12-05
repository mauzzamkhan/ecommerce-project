import React from "react";
import { useSelector } from "react-redux";
import "./OrderList.css";
import "./HrSectionProducts.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const OrdersList = () => {
  const [orderList, setOrderList] = useState([]);

  console.log("here in orderList;;;;;;;;;;;;;;;;;;;;;;;;;;;", orderList);

  // const cartItems1 = useSelector((state) => state.reducer.cartItems);

  // Accessing Data From reducer in reduer orderList
  const orderitem = useSelector((state) => state.reducer.orderList);

  //
  useEffect(() => {
    if (orderitem) {
      setOrderList(orderitem);

      console.log("JEEEEEEEEEEEEEEEEEEEE: ", orderitem);
    }
  }, [orderitem]);

  const navigate = useNavigate();

  return (
    <>
      <h1>Ordered List</h1>

      <div className="main-container-orderList">
        <section className="col-4-left-orderList">
          <div className="header-side">
            <h1 className="heading-side-bar">Filter Orders</h1>
          </div>
        </section>
        <section className="col-8-right-orderList">
          {orderList.map((data, index) => {
            console.log(data, "here in orderlist");
            return (
              <div
                onClick={() =>
                  navigate(`/order-detail-page`, {
                    // replace: true,
                    state: data,
                  })
                }
                key={index}
              >
                {data &&
                  data.orderItem.map((item, index) => {
                    console.log(item, "here in item in nested");
                    return (
                      <div className="order-item">
                        <section className="img-order-item">
                          <img
                            className="img-thumbnail"
                            src={item.thumbnail}
                            alt="thumbnail"
                          />
                        </section>

                        <section className="text-area">
                          <h1 className="product-title">{item.title}</h1>
                          <p className="brand">Brand: {item.brand}</p>
                        </section>
                        <section className="price-section">
                          <h5 className="price-order">$ {item.price}</h5>
                        </section>
                        <section className="status-section">
                          <div className="status"></div>
                          <span className="status-title">
                            Cancelled on Tue Aug 23
                          </span>
                          <p className="status-discription">
                            You requested a cancellation due to quality issues
                            with the product.{" "}
                          </p>
                        </section>
                      </div>
                    );
                  })}
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default OrdersList;
