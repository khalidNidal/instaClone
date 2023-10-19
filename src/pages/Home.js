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



function Home() {


  const token = localStorage.getItem("token");

  const [posts, setpost] = useState([{}]);
  
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
        setpost(response.data.posts);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []); 
  
  const displayPosts =
    posts ? (
      posts.map((post) => {
        if (post.user == undefined) {
          return null;
        }
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
          />

     

          </>
        );
      })
    ) : (
      <div>Loading...</div>
    );



    
    
    

      
        
        // let text = document.querySelector("#text")
       
        // settext.addEventListener('click',()=>{


        // })
        
      //   pp.addEventListener('click',() =>{
      //   // Get the current scroll position
      //   var scrollPosition = window.scrollY;
      //   localStorage.setItem('scroll',scrollPosition)
        
      //   console.log("🚀 ~ file: Home.js:17 ~ pp.addEventListener ~ scrollPosition:", scroll)
        
        
      //   // Refresh the page
        
      //   console.log("after reloading ")
        
      //   window.location.reload()
        
        
        
        
        
      //   // After the page has reloaded, set the scroll position back to its previous value
      // })
      // const scroll  = JSON.parse( localStorage.getItem("scroll"));
      // window.scrollTo(0,scroll)

      
      // function changePosition(){
        //   console.log("asd")
        //   // window.scrollTo(0,300000)
        //   var scrollPosition = window.scrollY;
        //   localStorage.setItem('scroll',scrollPosition)
        //   window.location.reload()
        //   localStorage.setItem('scroll',0)
      //   return 'asd'
        
      // }
      
      
      // const scroll  = JSON.parse( localStorage.getItem("scroll"));
      // window.scrollTo(0,scroll)
  return (
      // <Storycontext.Provider value={name}>
    <div className="homepage">
      <Box>

        <Sidebar/>
        
      </Box>



      <div className="homedivs">
        <div className="content">
          <Container maxWidth="md">
            <Story/>
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
              <Addfollower  />
              <Addfollower  />
              
            </div>
          </Container>
        </div>
      </div>
    </div>
  // </Storycontext.Provider>
    
  );
}

export default Home;
