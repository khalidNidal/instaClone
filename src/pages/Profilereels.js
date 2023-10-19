import { Container } from "@mui/material";
import React from "react";
import Navbar from "../components/Sidebar";
import profileimg from "../assets/profilepic.jpg";
import SettingsIcon from "@mui/icons-material/Settings";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import GridOnIcon from "@mui/icons-material/GridOn";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import { Link } from "react-router-dom";
import img1 from "../assets/ExplorePics/cristiano-ronaldo-real-madrid-champions-league.jpg";
import img2 from "../assets/ExplorePics/548cf16b77ae0a5a9cd32526127a1c23.jpg";
import img3 from "../assets/ExplorePics/a6ba46e4c2ba063d02356bc0d913cb34.jpg";




const pics = [img1,img2,img3];
const content = pics.map((img) => {

    return (
    <div style={{ marginRight: 5 }}>

        <img style={{ width: 300, height: 300 }} src={img} />

    </div >
  )

})

function Profilereels() {
  return (
    <div className="Explorestrsuc">
      <div>
        <Navbar />
      </div>
      <Container maxWidth="sm">
        <div className="profileInfo">
          <div>
            <img src={profileimg}></img>
          </div>
          <div>
            <div>
              <div className="profileHeader">
                <h3>khalid</h3>
                <button className="btn">Edit profile</button>
                <button className="btn">View actions</button>
                <SettingsIcon style={{ marginTop: 20 }} />
              </div>
              <div className="profiledatainfo">
                <p>3 reels</p>
                <p>777 followers</p>
                <p>777 following</p>
              </div>
              <div>
              <p>Khalid</p>
                <p>noOne</p>
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
            to={"/profile"}
          >
            <div className="switch">
              <AccountBoxOutlinedIcon />
              <span>TAGGED</span>
            </div>
          </Link>
        </div>
        <div className="profileReels">{content}</div>
      </Container>
    </div>
  );
}

export default Profilereels;
