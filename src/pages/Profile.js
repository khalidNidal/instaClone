import { Box, Button, Container } from "@mui/material";
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
import Editprofile from "../components/Editprofile";

import Modalcreate from "../components/Modalcreate";
import { Avatarcontext } from "../Context/Avatarcontext";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Thispost from "./Thispost";
import { PlusOneTwoTone } from "@mui/icons-material";
import Settings from "../components/Settings";

// const pics = [img1];
// const content = pics.map((img) => {
//   return (
//     <div style={{ marginRight: 5 }}>
//       <img style={{ width: 300, height: 300 }} src={img} />
//     </div>
//   );
// });
const token = localStorage.getItem("token");
const userID = localStorage.getItem("id");
// console.log("🚀 ~ file: Profile.js:34 ~ userID:", userID);

function Profile() {

  const token = localStorage.getItem("token");
  const [posts, setpost] = useState([{}]);
  const [users, setusers] = useState([{}]);
  const userID = localStorage.getItem("id");
  const [thisPosts, setThisPosts] = useState([{}]);
  // console.log("🚀 ~ file: Home.js:26 ~ Home ~ thisPosts:", thisPosts)
  const [thisUser, setThisUser] = useState([{}]);

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


  const user = useContext(Avatarcontext);
  const avatar = thisUser.avatar;
  // const post =user.posts



  const [myposts, setmyposts] = useState([{}]);
  console.log("🚀 ~ file: Profile.js:84 ~ Profile ~ myposts:", myposts)
  // console.log("🚀 ~ file: Profile.js:60 ~ Profile ~ myposts:", myposts)
  

  const content = myposts.map((post) => {
    if (post == null) return false;
    return (
      <div>
        {/* <Link  params={{ testvalue: "hello" }}  to={'./thispost'}> */}
        <Link
          to={{
            pathname: `./thispost/${post.id}`,
            state: { stateParam: true },
          }}
        >
          <img
          className="profileImage"
            style={{
              width: 300,
              height: 300,
              margin: "10px",
              border: "solid 0.2px rgba(255,255,255 ,0.3 )",
            }}
            src={post.image}
          />
          {/* props.params.prop2 */}
        </Link>
      </div>
    );
  });

  let postsNumber = myposts.length;
 

  useEffect(() => {
    axios
      .get(`http://16.170.173.197/posts/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log("🚀 ~ file: Profile.js:112 ~ .then ~ response:", response)

        setmyposts(response.data.posts.reverse());
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []);

  // console.log("🚀 ~ file: Profile.js:36 ~ Profile ~ num:", num)

  // console.log("🚀 ~ file: Profile.js:67 ~ Profile ~ user.bio:", user.bio)
  return (
    <div className="Explorestrsuc">
      <div style={{ marginBottom: "20px" }}>
        <Sidebar avatar={avatar} />
      </div>
      <Container maxWidth="md">
        <div style={{ marginLeft: "70px" }}>
          <div style={{ marginLeft: "50px" }}>
            <div className="profileInfo">
              <img src={avatar}></img>
              <div>
                <div>
                  <div className="profileHeader">
                    <h3>{thisUser.userName}</h3>
                    <Editprofile />
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "white",
                        color: "white",
                        marginTop: "10px",
                        margin: "10px",
                      }}
                    >
                      ViewEdits{" "}
                    </Button>{" "}
                    <Settings/>
                  </div>
                  <div className="profiledatainfo">
                    <p> {postsNumber} post</p>
                    <p>777 followers</p>
                    <p>777 following</p>
                  </div>
                  <div>
                    <p>{thisUser.userName}</p>
                    <p>{thisUser.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="switches">
            <Link className="posts" to={"/profile"}>
              <div className="switch">
                <GridOnIcon />
                <span>POSTS</span>
              </div>
            </Link>
            <Link className="reels" to="/profile/reels">
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
        </div>
        <div className="profilePost">{content} </div>
      </Container>
    </div>
  );
}

export default Profile;
