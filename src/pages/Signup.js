import { Button, Container } from "@mui/joy";
import React from "react";
import phone from "../assets/instagram-1581266_640.webp";
import { Link, useNavigate } from "react-router-dom";
import phone2 from "../assets/WhatsApp Image 2023-10-11 at 9.13.25 PM.jpeg";
import { Typography, Grid, Box, TextField, CssBaseline } from "@mui/material";
import instalogo from "../assets/instagram-1581266_640.webp";
import iphoneInstalogo from "../assets/WhatsApp Image 2023-10-11 at 9.13.25 PM.jpeg";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Storycontext } from "../Context/Storycontext";

function Signup() {



  const [data, setdata] = useState({
    userName: "",
    email: "",
    password: "",
  });


    
      const userName = localStorage.setItem("userName",JSON.stringify(data));
    

  //   // const name = JSON.parse( localStorage.getItem("userName"));
  //   // const n = name.userName
  //   // console.log(n)
  
  const navigate = useNavigate();
  function handlesignup() {

    axios
      .post("http://16.170.173.197/users/signup", data)
      .then((response) => {
        const token = response.data.token;
        localStorage.setItem("token", token);
        navigate("/  ");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <Container maxWidth="md">
     
      <CssBaseline />
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid
          item
          sm={false}
          md={6}
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            alignItems: "center",
            my: -1,
          }}
        >
          <div>
            <img width={500} src={iphoneInstalogo} alt="instagramLogo"></img>
          </div>{" "}
        </Grid>

        <Grid item xs={12} md={6}
         onSubmit={(event) => {
           event.preventDefault();
          handlesignup();
        }}
        >
          <Container maxWidth="xs">
            
              <Box
                sx={{
                  m: 30, mx: 4,
               
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <div>
                  <img width={50} src={instalogo} alt="instagramLogo"></img>
                </div>

                <Typography component="p" variant="p" textAlign="center">
                  Sign up to see photos and videos from your friends
                </Typography>

               

                <span style={{ fontSize: 20 }}> or</span>

                <Box
                  component="form"
                  noValidate
                  sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}
                >
                  <TextField
                    required  
                    fullWidth
                    sx={{ borderRadius: "7px" }}
                    id="Email"
                    label="Email"
                    name="Email"
                    autoComplete="Email"
                    onChange={(e) => {
                      setdata({ ...data, email: e.target.value });
                    }}
                  />
                  <TextField
                    required
                    fullWidth
                    sx={{ borderRadius: "7px" }}
                    id="Username"
                    label="Username"
                    name="Username"
                    autoComplete="Username"
                    onChange={(e) => {
                      setdata({ ...data, userName: e.target.value });
                    }}
                  />
                  <TextField
                    required
                    fullWidth
                    sx={{ borderRadius: "7px" }}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={(e) => {
                      setdata({ ...data, password: e.target.value });
                    }}
                  />

                  <Button
                    type="submit"
                    fullWidth
                   
                  >
                    Sign Up
                  </Button>

                  <p style={{ textAlign: "center" }}>
                    By signing up, you agree to our Terms, Data Policy and
                    Cookies Police
                  </p>

                  <p style={{ textAlign: "center" }}>
                    Have an account?
                    <Link to={"/signin"} variant="body2">
                      Log In
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

export default Signup;
