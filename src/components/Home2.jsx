import { Rating } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { manipulateCart } from "../redux/cart/cart-action";
import { API_DATA } from "../redux/cart/cart-constants";
import CarouselItem from "./Carousel";
import CategoryBar from "./Categorybar";
import "./Home.css";
import HrSectionProducts from "./HrSectionProducts";

const Home2 = () => {
  const [data, setData] = useState([]);

  const [value, setValue] = React.useState(1);

  const [bestPrice, setBestPrice] = useState([]);

  const [bestDiscount, setBestDiscount] = useState([]);
  const [highRating, setHighRating] = useState([]);
  const [fastSelling, setFastSelling] = useState([]);
  const [mobiles, setMobiles] = useState([]);

  const navigate = useNavigate();

  const getApidataCall = () => {
    axios
      .get("https://dummyjson.com/products?limit=100") //?limit=100
      .then((res) => {
        
        setData(res.data.products);
        // dispatch(manipulateCart(API_DATA, res.data.products));
        console.log("response;;;;;;here", res);
      })
      .catch((err) => {
        console.log("error  ;;;", err);
      });
  };

  // this is old type
  useEffect(() => {
    getApidataCall();
  }, []);

  // new type
  useEffect(() => {
    filterProducts();
  }, [data]);

  const dispatch = useDispatch();

  dispatch(manipulateCart(API_DATA, data));

  const filterProducts = () => {
    let price = data.filter((item) => {
      return item.price > 400 && item.price < 800;
    });
    setBestPrice([...price]);

    let discount = data.filter((item) => {
      return item.discountPercentage > 17;
    });
    setBestDiscount([...discount]);

    let rating = data.filter((item) => {
      return item.rating > 4.9;
    });
    setHighRating([...rating]);

    let sellingStock = data.filter((item) => {
      return item.stock < 20;
    });
    setFastSelling([...sellingStock]);

    let mobiles = data.filter((item) => {
      let fushion =
        item.category === "tops" ||
        item.category === "smartphones" 
        // item.category === "womens-dresses" ||
        // item.category === "mens-shirts" ||
        // item.category === "womens-jewellery"

      // return item.category=="smartphones" ;
      // console.log(fushion, "here in fushionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
      return fushion;
    });

    setMobiles([...mobiles]);
  };

  return (
    <>
      {/* <Header data={data} /> */}

      <CategoryBar />
      <CarouselItem />
      {/* <HrSectionProducts Name={bestPrice} Title={"Best Price For Today"}/> */}
      {/* <div>
        <h1>home page</h1>
      </div> */}

      <HrSectionProducts
        sectionName={bestPrice}
        Title={"Best Price For Today"}
      />
      <HrSectionProducts
        sectionName={bestDiscount}
        Title={"Best Discount For Today"}
      />
      <HrSectionProducts
        sectionName={highRating}
        Title={"Highest Rated Product"}
      />
      <HrSectionProducts
        sectionName={fastSelling}
        Title={"Top Selling Products"}
      />
      <HrSectionProducts sectionName={mobiles} Title={"Mobiles"} />

      {/* <HrSectionProducts sectionName={props} Title={"Best Price For Today"} />
          <HrSectionProducts sectionName={props} Title={"Best Price For Today"}/>
          <HrSectionProducts sectionName={props} Title={"Best Price For Today"}/> */}
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
                      <span>
                        <div className="rating-container">
                          <span className="rating-text-home">
                            {item.rating}
                          </span>
                          <Rating
                            name="size-small"
                            value={value}
                            max={1}
                            sx={{ fontSize: "12px", color: "#fff" }}
                          />
                        </div>
                      </span>
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
