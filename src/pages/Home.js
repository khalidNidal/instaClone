import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import Story from "../components/Story";
import Post from "../components/Post";
import Newfollowers from "../components/Newfollowers";
import Addfollower from "../components/Addfollower";
import { useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Storycontext } from "../Context/Storycontext";
import styled from "styled-components";
import { Style } from "@mui/icons-material";
import cr7 from "../assets/download.jpg";
import { useLocation } from "react-router-dom";

function Home() {
  // props.info()

  // function r (){

  //   window.location.reload()
  // }

  // useEffect(()=>{
  //   // r()
  // },[r()])




  const token = localStorage.getItem("token");
  const [posts, setpost] = useState([{}]);
  const [users, setusers] = useState([{}]);
  const userID = localStorage.getItem("id");
  const [thisPosts, setThisPosts] = useState([{}]);
  // console.log("🚀 ~ file: Home.js:26 ~ Home ~ thisPosts:", thisPosts)
  const [thisUser, setThisUser] = useState([{}]);
  // console.log("🚀 ~ file: Home.js:26 ~ Home ~ thisPosts:", thisUser.avatar)

  function handleCheckHour(H, M) {
    const daysDifference = Math.floor(H / 24);
    if (H > 24) return daysDifference + " day";
    else if (M <= 0) return " just now";
    else if (H < 1) return M + " min";
    else return H + " hour";
  }

  useEffect(() => {
    setpost([{}]);
  }, []);
  useEffect(() => {
    axios
      .get("http://16.170.173.197/posts", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const posts = response.data.posts;
        setpost(posts.reverse());
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []);

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
            // console.log("🚀 ~ file: Home.js:98 ~ posts.map ~ post.user.avatar :", post.user.avatar )
            // user.avatar =
            //   "https://tse4.explicit.bing.net/th?id=OIF.hvx mfMDQQBIdCqhsFIqRw&pid=Api&P=0&h=220";

            setThisPosts(user.posts);
            setThisUser(user);
          }
        });
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []);

  const displayPosts = posts ? (
    posts.map((post) => {
      if (post.user == undefined) {
        return null;
      }

      
      const dateString = post.createdAt;
      const dateTime = new Date(dateString);
      const date = new Date();
      const passedTime = date - dateTime;

      const secondsDifference = Math.floor(passedTime / 1000);
      const minutesDifference = Math.floor(secondsDifference / 60);
      const hoursDifference = Math.floor(minutesDifference / 60);

      // if (post.user.id === "c226aff7-8509-47ce-959c-fd75fd04033a") {
      //   setThisPosts(post)
      // }

      
        
    


      return (
        <>
          <Post
            name={post.user.userName}
            img={post.image}
            dis={post.description}
            likes={post.likes.length}
            id={post.user.id}
            postid={post.id}
            key={post.id}
            timePassed={handleCheckHour(hoursDifference, minutesDifference)}
            avatar={post.user.avatar}
          />
        </>
      );
    })
  ) : (
    <div>Loading...</div>
  );


  // useEffect(() => {
  //         setTimeout(() => {
  //           window.location.reload();
  //         },3000)
  // },[])

  return (
    // <Storycontext.Provider value={name}>
    <div className="homepage">
      <Box>
        <Sidebar 
        
        />
      </Box>

      <div className="homedivs">
        <div className="content">
          <Container maxWidth="md">
            <Story 
            avatar={thisUser.avatar} 
            />

            {displayPosts}
            {/* <Post></Post> */}
          </Container>
        </div>
        <div className="newfollower">
          <Container maxWidth="sm">
            <div className="Bnewfollower">
              <Newfollowers />
              <div className="knownPeople">
                <p>Suggestions for you</p>
                <p>See More</p>
              </div>
              <Addfollower />
              {/* {addfoloower} */}
              <Addfollower />
              <Addfollower />
            </div>
          </Container>
        </div>
      </div>
    </div>
    // </Storycontext.Provider>
  );
}

export default Home;
