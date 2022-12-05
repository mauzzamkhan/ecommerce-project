import React from "react";
import "./Header.css";
import { createTheme, ThemeProvider, Box, Badge } from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
// import { Link, NavLink, Route, Routes, Switch } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import fliLogo from "./assets/flipkar-logo.png";
// import { useState } from "react";

const Header = (data) => {
  // const [masterData, setMasterData] = useState([]);

  const cartLength = useSelector((state) => state.reducer.cartItems);

  const apiData = useSelector((state) => state.reducer.apiData);

  const loginApiData = useSelector((state) => state.reducer.loginApiData);
  console.log(loginApiData, "+++++++++++++++++++++loginApiData");

  console.log(apiData, "here in Api DATA");

  console.log(cartLength, "here in header");

  const theme = createTheme({
    TextField: {
      paddingTop: 0,
    },
    input: {
      paddingTop: "0px",
    },
  });

  console.log(data, "here in header file ");

  // useEffect(() => {
  //   if (!masterData.length) {
  //     setMasterData(apiData);
  //   }
  // }, [apiData]);

  // const handleSearch = (text) => {
  //   if (text.trim() !== "") {
  //     let tempArr = masterData.filter((item) =>
  //       item.title.toLowerCase().includes(text.trim().toLowerCase())
  //     );
  //     dispatch(manipulateCart(API_DATA, tempArr));

  //     // console.log("here in tempArraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",tempArr);
  //   } else {
  //     dispatch(manipulateCart(API_DATA, masterData));
  //   }
  // };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="Navbar-container">
          <nav className="navbar-sub-container">
            <NavLink to="/">
              <img className="Logo" src={fliLogo} alt="logo"/>
            </NavLink>

            <span className="text-field">
              {/* <TextField
                label="Search Products"
                fullWidth
                sx={{padding:"8px 16px",}}
                //  onChange={(e)=>handleSearch(e.target.value)}
              /> */}
              <input
                className="search-input-field"
                type="text"
                placeholder="Search for products, brands and more"
                // onChange={(e) => handleSearch(e.target.value)}
              />

              <Box>
                <Badge color="primary">
                  <SearchIcon
                    sx={{
                      fontSize: "28px",
                      color: "#2874f0",
                      marginLeft: "12px",
                      cursor: "pointer",
                    }}
                  />
                </Badge>
              </Box>
            </span>

            <div className="nav-links">
              <NavLink className={"btnOrder"} to="/orders-list">
                Orders
              </NavLink>
              <NavLink className={"btnLogin"} to="/login">
                Login
              </NavLink>
            </div>
            <Link to="/cart">
              <div className="icon-section">
                <Box>
                  <Badge
                    badgeContent={cartLength.length}
                    color="primary"
                    sx={{ color: "#fff" }}
                  >
                    <ShoppingCartOutlined
                      sx={{
                        fontSize: 24,
                        color: "#fff",
                        marginLeft: "12px",
                      }}
                    />
                  </Badge>
                </Box>
              </div>
            </Link>
            <div className="profile-img-content">
              <img
                src={loginApiData.image}
                alt="profileImg"
                className="profile-Img"
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "baseline",
                  marginLeft: "20px",
                }}
              >
                <span style={{ fontSize: "14px", color: "#fff" }}>
                  {loginApiData.firstName}
                </span>
                <span style={{ fontSize: "10px", color: "#fff" }}>
                  {loginApiData.lastName}
                </span>
              </div>
            </div>
          </nav>
        </div>
      </ThemeProvider>
    </>
  );
};

export default Header;
