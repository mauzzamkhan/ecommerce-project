import React from "react";
import "./Categorybar.css";
import offer from "./assets/category-imgs/offer-img.png";
import mobile from "./assets/category-imgs/mobile.png";
import grocery from "./assets/category-imgs/grocery.png";
import fashion from "./assets/category-imgs/fashion.png";
import Electronics from "./assets/category-imgs/Electronics.png";
import { Link } from "react-router-dom";

const CategoryBar = () => {
  const category = [
    { img: offer, title: "Top Offer",urlText:"/"},
    { img: mobile, title: "Mobiles" ,urlText:"/"},
    { img: grocery, title: "Grocery" ,urlText:"/"},
    { img: fashion, title: "Fashion" ,urlText:"/"},
    { img: Electronics, title: "Electronics" ,urlText:"/"},
  ];

  return (
    <>
      <div className="category-container">
        <section className="category-cards">
          {category.map((item, index) => {
            return (
            <>
            <section 
            
            key={index}
            className="card-category"
            >
              <Link to={item.urlText} style={{color:"black",textDecoration:'none',}}>

              <img className="category-img" src={item.img} alt="" />
              <p className="category-title">{item.title}</p>
              </Link>
            </section>
            </>)})}
        </section>
      </div>
    </>
  );
};
export default CategoryBar;
