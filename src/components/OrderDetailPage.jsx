import { Button } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import "./OrderDetailPage.css";

const OrderDetailPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  const selector = useSelector((state) => state.reducer.orderList);
  console.log(selector, "here in selector");

  console.log(state.orderDetails.Name, "here in state");
  console.log(state.orderItem[0].title, "here in state orderItem");

  // const address = formData.areaAndStreet.concat(
  const address = state.orderDetails.areaAndStreet.concat(
    ",",
    state.orderDetails.cityDistrict,
    " ",
    state.orderDetails.Landmark,
    " - ",
    state.orderDetails.pincode,
    ", ",
    state.orderDetails.state,
    ", ",
    state.orderDetails.locality
  );

  return (
    <>
      <div>
        {/* <p>{state.orderDetails.Name}</p> */}
      </div>
      <div>
        <p>{state.orderItem.title}</p>
      </div>

      <div className="main_container_order_detail">
        <section className="warper_order_detail">
          <div className="order_address_section">
            <Button onClick={() => navigate(-1)}>Go Back</Button>
            <p className="Sub_Heading">Delivery Address</p>
            <p className="main_text">{state.orderDetails.Name}</p>
            <p>{address}</p>
            <p className="main_text">
              Phone Number : {state.orderDetails.mobile}
            </p>
            <p style={{ marginTop: "24px" }}>
              This Address is also track by : {state.orderDetails.mobile}
            </p>
          </div>
          <div>
            {state.orderItem.map((data, index) => {
              return (
                <div className="order_product_details">
                  <div className="row">
                    <div className="col_4_product_details">
                      <div className="col_4_img">
                        <img
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                          src={data.thumbnail}
                          alt="thumbnail"
                        />
                      </div>
                      <div className="col_8_details">
                        <p
                          className="title_of_product"
                          onClick={() => navigate(`/detail-page/${state.id}`)}
                        >
                          {data.title}
                        </p>
                        <p className="details_of_product">
                          Brand : {data.brand}
                        </p>
                        <p className="details_of_product">
                          Discount : {data.discountPercentage}
                        </p>
                        <p
                          className="price_of_product"
                          style={{ marginRight: "12px", marginTop: "12px" }}
                        >
                          $ {data.price}
                        </p>
                      </div>
                    </div>
                    <div className="col_6_order_status">
                      <h1>hi</h1>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default OrderDetailPage;
