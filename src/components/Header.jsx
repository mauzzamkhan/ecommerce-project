import React from "react";
import "./Header.css";
import Logo1 from "./assets/Logo1.svg";
import {
  createTheme,
  ThemeProvider,
  TextField,
  Box,
  Badge,
} from "@mui/material";
import { ShoppingCartOutlined } from "@mui/icons-material";
import { red } from "@mui/material/colors";
import { Link, NavLink, Route, Routes, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Cart from "./Cart";
import DetailPage from "./DetailPage";
import Home2 from "./Home2";
import { useSelector } from "react-redux";

const Header = () => {
  const cartLength = useSelector((state) => state.cartItems);
  const theme = createTheme({
    TextField: {
      paddingTop: 0,
    },
    input: {
      paddingTop: "0px",
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className="Navbar-container">
          <nav className="navbar-sub-container">
            <NavLink to="/">
              <img className="Logo" src={Logo1} />
            </NavLink>

            <span className="text-field">
              <TextField
                label="Search Products"
                fullWidth
                //  onChange={(e)=>handleSearch(e.target.value)}
              />
            </span>

            <div className="nav-links">
              <NavLink className={"btnLogin"} to="/login">
                Login
              </NavLink>
            </div>
            <Link to="/cart">
              <div className="icon-section">
                <Box>
                  <Badge badgeContent={cartLength.length} color="primary">
                    <ShoppingCartOutlined
                      sx={{
                        fontSize: 24,
                        color: "#2874F0",
                        marginLeft: "12px",
                      }}
                    />
                  </Badge>
                </Box>
              </div>
            </Link>
          </nav>
        </div>
      </ThemeProvider>

      <div>
        <Routes>
          <Route path="/" element={<Home2 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail-page/:id" element={<DetailPage />} />
        </Routes>
      </div>
    </>
  );
};

export default Header;
