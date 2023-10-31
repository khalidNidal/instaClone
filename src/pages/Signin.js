import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Input from "@mui/joy/Input";

import Stack from "@mui/joy/Stack";
import pic1 from "../assets/instagram-logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import axios from "axios";
import { Box, Container, CssBaseline, Grid, TextField } from "@mui/joy";
import instalogo from "../assets/instagram-1581266_640.webp";
import iphoneInstalogo from "../assets/WhatsApp Image 2023-10-11 at 9.13.25 PM.jpeg";
import { useEffect } from "react";



function Signin() {
  

  const [data, setdata] = useState({
    email: "",
    password: "",
  });


  const userName = localStorage.setItem("userName",JSON.stringify(data));
    

    // const info  = JSON.parse( localStorage.getItem("userName"));
  // // const n = name.userName
  // console.log(info)
  // const name = info.email;
  // console.log(name)

  



  const navigate = useNavigate();
  function handlesignup() {
    axios
      .post("http://16.170.173.197/users/login", data)
      .then((response) => {        
        const id = response.data.user.id;
        const user = response.data.user
        console.log("🚀 ~ file: Signin.js:48 ~ .then ~ id:", id)
        localStorage.setItem("id", id);
        
        const token = response.data.token;
        localStorage.setItem("token", token);
        // if(id=="c226aff7-8509-47ce-959c-fd75fd04033a")
        // {
        //   console.log("==")
        //   console.log("🚀 ~ file: Signin.js:58 ~ .then ~ user.avatar:", user.avatar)
        //   user.avatar = "https://tse4.explicit.bing.net/th?id=OIF.hvxLmfMDQQBIdCqhsFIqRw&pid=Api&P=0&h=220"
        //   console.log("🚀 ~ file: Signin.js:58 ~ .then ~ user.avatar:", user.avatar)

        // }

        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  }
 
  return (
    <Container maxWidth="md">
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          md={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div>
            <img width={500} src={iphoneInstalogo} alt="instagramLogo"></img>
          </div>
        </Grid>

        <Grid>
          <Container maxWidth="md">
            <Box
              sx={{
                m: 30,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div>
                <img width={50} src={instalogo} alt="instagramLogo"></img>
              </div>

              <Box
                component="form"
                noValidate
                sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                onSubmit={(event) => {
                  console.log("event");
                  event.preventDefault();
                  handlesignup();
                }}
              >
            

                <Input placeholder="email" required fullWidth sx={{ borderRadius: "5px" }} id="Email" label="Email" name="Email"  autoFocus
             
             onChange={(e) => {
              setdata({ ...data, email: e.target.value });
            }}
              />



                    



              <Input placeholder="password" required fullWidth sx={{ borderRadius: "5px" }} name="password" label="Password" type="password" id="password" 
               onChange={(e) => {
                setdata({ ...data, password: e.target.value });
              }}
              />

                <Button fullWidth type="submit" >Login</Button>
                <span style={{ textAlign: "center" }}>Or</span>

                <Button
                
                  sx={{ textTransform: "none" }}
                >
                  Login with Facebook
                </Button>

                <p
                  style={{ textAlign: "center" }}
                  component="p"
                  variant="p"
                >
                  Forgot password?
                </p>

                <p
                  style={{ textAlign: "center" }}
                  component="p"
                  variant="p"
                >
                  Don’t have an account?
                  <Link to={"/signup"} variant="body2">
                    {" "}
                    Sign Up
                  </Link>
                </p>
              </Box>
            </Box>
          </Container>
        </Grid>
      </Grid>

     
    </Container>
  );
}

export default Signin;














 // const id = response.data.user.id;
        // console.log(`hhhhhhhhhhhhhhhhhhhhhh ${id}`);
        // localStorage.setItem("id", id);