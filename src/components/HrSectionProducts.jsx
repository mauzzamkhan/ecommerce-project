import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./HrSectionProducts.css";

const HrSectionProducts = ({ sectionName, Title }) => {
  // const [value, setValue] = React.useState(1);

  const navigate = useNavigate();

  console.log(sectionName, "section Hr ");
  return (
    <>
      <div className="Warper">
        <section className="Warper-header">
          <h1 className="text-heading">{Title}</h1>

          <Button variant="contained" sx={{ borderRadius: "2px" }}>
            View More
          </Button>
        </section>
        <section className="cardWarper">
          {sectionName.map((item, index) => {
            return (
              // <Link to={`/detail-page/${item.id}`} className="Card" key={index}>
              <div
                onClick={() => navigate(`/detail-page/${item.id}`)}
                className="Card-pro"
                key={index}
              >
                <img src={item.thumbnail} alt="Product-Thumbnail" />
                <p>{item.title}</p>
                <section className="content-card">
                {/* <section className="rating-container">
                  <span className="rating-text">{item.rating}</span>
                  <Rating
                    name="size-small"
                    value={value}
                    max={1}
                    sx={{ fontSize: "14px", color: "#ffffff" }}
                  />
                </section> */}
                <span className="price-offer">
                  <span className="rate-">
                  $ {item.price}
                  </span>
                  <span className="discount-offer">{item.discountPercentage}% Off</span>
                </span>
                </section>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
};

export default HrSectionProducts;
