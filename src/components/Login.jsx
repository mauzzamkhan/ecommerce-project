import { Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

// import './Components/Login/Elogin.css';
import "./Login.css";
import loginImage from "./assets/loginImage.svg";
import bgimage from "./assets/background-imgfor-login.png"

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
// console.log(formData)
  const loginApi = () =>{
      axios.post("https://dummyjson.com/auth/login",formData)
      .then((response) =>{

        console.log("Done");
        alert("api call completed")
      })
      .catch((error)=>{
        console.log(error);
      })
      console.log()


  }


  const [formValidation , setFormValidation] = useState({
    isEmailValid: true,
    isPasswordValid: true,
  })
  const passwordRegex =/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;
  const emailRegex =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // const handlePasswordValidation=()=>{
  //   if(passwordRegex.test(formData.password)){
  //       setFormValidation((prevState)=>({
  //           ...prevState,
  //           isPasswordValid:true,
  //       }));
  //   }else{
  //       setFormValidation((prevState)=>({
  //           ...prevState,
  //           isPasswordValid:false,
  //       }));
  //   }
  // }

  // const handleEmailValidation=()=>{
  //   if(emailRegex.test(formData.email) ){
  //       setFormValidation((prevState) =>({
  //           ...prevState,
  //           isEmailValid: true ,
  //       }));
  //   }else{
  //       setFormValidation((prevState) => ({
  //           ...prevState,
  //           isEmailValid: false,
  //       }));

  //   }
  // }

  return (
    <>
      <section className="Login-mein-section">

        <div className="Col-6-img-bg">

          <img src={bgimage} />

        </div>


        <div className="Col-6 Login-inputs">

          <h1>Login</h1>

          <TextField
            error={!formValidation.isEmailValid}
            helperText={!formValidation.isEmailValid && "Invalid Email"}
            // onBlur={handleEmailValidation}
            className="input-email"
            type={"email"}
            label="Enter Email"
            value={formData.username}
            onChange={(event) => {
                setFormData((prevState) => ({
                ...prevState,
                username: event.target.value,
              }));

              setFormValidation((prevState) =>({
                ...prevState,
                isEmailValid: true ,
            }));
            }

            }
          />
          <TextField
          error={!formValidation.isPasswordValid}
          helperText={!formValidation.isPasswordValid&&"Invalid Password"}
            // onBlur={handlePasswordValidation}
            className="input-pass"
            type={"password"}
            label="Enter Password"
            value={formData.password}
            onChange={(event) => {
                setFormData((prevState) =>({
                    ...prevState,
                    password: event.target.value,
                }));
                setFormValidation((prevState)=>({
                    ...prevState,
                    isPasswordValid:true,
                }));
            
            }
            }
          />
          <Button variant="contained" className="Login-btn" onClick={loginApi}>
            Login
          </Button>
        </div>
      </section>
    </>
  );
};

export default Login;
