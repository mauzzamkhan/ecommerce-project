import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const Home2 = () => {
  const [data, setData] = useState([]);
  const [masterData, setMasterData] = useState([]);
  const [value, setValue] = React.useState(1);

  const navigate = useNavigate();

  const getApidataCall = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products);
        console.log("response;;;;;;", res);
      })
      .catch((err) => {
        console.log("error  ;;;", err);
      });
  };

  useEffect(() => {
    getApidataCall();
  }, []);

  // console.log(data)

  return (
    <>
      <div>
        <h1>home page</h1>
      </div>
      <div className="main-container-home">
        <div className="conatiner-all-products">
          <div className="product-card">
            {data.map((item, index) => (
              <div key={index}>
                <div
                  className="card"
                  onClick={() => navigate(`/detail-page/${item.id}`)}
                >
                  <div className="image-container">
                    <img
                      className="image-thumbnail"
                      src={item.thumbnail}
                      alt=""
                    />
                  </div>
                  <div className="content-product">
                    <h3 className="Title">{item.title}</h3>
                    <div className="paragraph-div">
                      <span className="paragraph">{item.description}</span>
                    </div>
                    <div className="content-price-ratinng">
                      <span className="price-text">$ {item.price}</span>
                      <span className="discountPercentage">
                        {item.discountPercentage}% off
                      </span>
                      {/* <span>
                        <div className="rating-container">
            <span className="rating-text-home">{item.rating}</span>
            <Rating
              name="size-small"
              value={value}
              max={1}
              sx={{ fontSize: "12px", color: "#fff" }}
            />
          </div>
          </span> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Home2;
