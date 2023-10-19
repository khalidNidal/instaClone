import { Container } from "@mui/material";
import React from "react";
import profileimg from "../assets/profilepic.jpg";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import GridOnIcon from "@mui/icons-material/GridOn";
import img1 from "../assets/ExplorePics/cristiano-ronaldo-real-madrid-champions-league.jpg";  

import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Storycontext } from "../Context/Storycontext";



const pics = [img1];
const content = pics.map((img) => {

    return (
    <div style={{ marginRight: 5 }}>
        <img style={{ width: 300, height: 300 }} src={img} />
    </div >
  )

})

function Profile() {
  const name = useContext(Storycontext);
  console.log("🚀 ~ file: Profile.js:30 ~ Profile ~ name:", name)

  return (
    <div className="Explorestrsuc">
      <div >
        <Sidebar />
      </div>
      <Container maxWidth="sm">
        <div className="profileInfo">
         
            <img src={profileimg}></img>
          <div>
            <div>
              <div className="profileHeader">
                <h3>{name}</h3>
                <button className="btn">Edit profile</button>
                <button className="btn">View actions</button>
                <SettingsIcon style={{ marginTop: 20 }} />
              </div>
              <div className="profiledatainfo">
                <p>1 post</p>
                <p>777 followers</p>
                <p>777 following</p>
              </div>
              <div>
                <p>{name}</p>
                <p>Details</p>
              </div>
            </div>
          </div>
        </div>
        <div className="switches">
          <Link
            className="posts"
            to={"/profile"}
          >
            <div className="switch">
              <GridOnIcon />
              <span>POSTS</span>
            </div>
          </Link>
          <Link
            className="reels"
            to="/profile/reels"
          >
            <div className="switch">
              <BookmarkBorderIcon />

              <span>REELS</span>
            </div>
          </Link>
          <Link
          className="tagged"
            style={{ textDecoration: "none", color: "white" }}
            to={"/profile"}
          >
            <div className="switch">
              <AccountBoxOutlinedIcon />
              <span>TAGGED</span>
            </div>
          </Link>
        </div>
        <div className="profilePost">{content}</div>
      </Container>
    </div>
  );
}

export default Profile;
