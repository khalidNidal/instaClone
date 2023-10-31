import React from "react";
import ilogo from "../assets/instagram-logo.png";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import SlideshowIcon from "@mui/icons-material/Slideshow";
import ExploreIcon from "@mui/icons-material/Explore";
import ChatIcon from "@mui/icons-material/Chat";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import profilepic from "../assets/profilepic.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import Modalcreate from "./Modalcreate";
import { useContext } from "react";
import { Storycontext } from "../Context/Storycontext";
import { Button } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatarcontext } from "../Context/Avatarcontext";
import { PropaneSharp } from "@mui/icons-material";
import Editprofile from "./Editprofile";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

let iconStyle = {
  color: "white",
  textDecoration: "none",
}


function Sidebar(props) {
  const name = useContext(Storycontext);
  const user = useContext(Avatarcontext);
  
  // console.log("🚀 ~ file: Sidebar.js:2W6 ~ Sidebar ~ name:", name)
  

  const token = localStorage.getItem("token");
  const [posts, setpost] = useState([{}]);
  const [users, setusers] = useState([{}]);
  const userID = localStorage.getItem("id");
  const [thisPosts, setThisPosts] = useState([{}]);
  // console.log("🚀 ~ file: Home.js:26 ~ Home ~ thisPosts:", thisPosts)
  const [thisUser, setThisUser] = useState([{}]);
  
  const avatar = thisUser.avatar


  useEffect(() => {
    axios
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const users = response.data.users;
        setusers(users);
        users.map((user) => {
          if (user.id == userID) {
    
            setThisPosts(user.posts);
            setThisUser(user);
          }
        });
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []);
  const navigate = useNavigate();


<Editprofile></Editprofile>

  // const { setOpen } = useContext(usecontext);
  return (
    <div className="Navcont">
      <div className="logo ">
        <img className="ilogo" src={ilogo}/>
      </div>
      <div className="navs">
        <div className="icons">
          <HomeIcon sx={{ fontSize: 28 }} className="Icon" />
          <Link style={iconStyle} to={"/"}>
            <span> Home</span>
          </Link>
        </div>
        <div className="icons">
          <SearchIcon sx={{ fontSize : 28 }} className="Icon"/>
          <span>Search</span>
        </div>
        <div className="icons">
          <ExploreIcon sx={{ fontSize : 28 }} className="Icon"/>
          <Link
            style={iconStyle}
            to={"/explore"}
          >
            <span>Explore</span>
          </Link>
        </div>
        <div className="icons">
          <SlideshowIcon sx={{ fontSize : 28 }} className="Icon"/>
          <span>Reels</span>
        </div>
        <div className="icons">
          <ChatIcon sx={{ fontSize : 28 }} className="Icon"/>
          <Link
            style={iconStyle}
            to={"/messages"}
          >
            <span>Messages</span>
          </Link>
        </div>
        <div className="icons">
          <FavoriteBorderIcon sx={{ fontSize : 28 }} className="Icon"/>
          <span>Notifications</span>
        </div>
        <Modalcreate className="Icon"/>
        <div className="icons">
          <img src={avatar}  style={{marginRight:"7px",width:'35px'}}  className="profile-pic"></img>
          <Link
            style={iconStyle}
            to={"/profile"}
          >
            <span style={{fontSize:'15px'}} >{thisUser.userName}</span>
          </Link>
        </div>
        <div>
          
          
          <Button 
          sx={{
            textDecoration:'none',
            color:'white',
          }}
          onClick={(()=>{
              
            localStorage.clear();
            
           <Link to={'/'} ></Link>
             navigate("/signin");


          }       
          )} 
          >
            <LogoutIcon sx={{marginRight:'5px'}}></LogoutIcon>
          sign Out
          </Button>
          
        

        </div>
        <div className="menu-item icons">
          <MenuIcon />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
