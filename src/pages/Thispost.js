import { Box, Container } from "@mui/system";
import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Profilepic from "../components/Profilepic";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";


export default function Thispost() {
  const token = localStorage.getItem("token");
  const userID = localStorage.getItem("id");
  const [users, setusers] = useState([{}]);
  const [myposts, setmyposts] = useState([{}]);
  // console.log("🚀 ~ file: Thispost.js:21 ~ Thispost ~ myposts:", myposts)
  const [mypost, setmypost] = useState({});
  // console.log("🚀 ~ file: Thispost.js:23 ~ Thispost ~ mypost:", mypost)
  const [user, setuser] = useState({});
  const [liked, setliked] = useState(false);
  

  const [likes, setlikes] = useState(null);

  // console.log("🚀 ~ file: Thispost.js:29 ~ Thispost ~ likes:", likes)

  



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
      }) 
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []);


  useEffect(() => {
    axios
      .get(`http://16.170.173.197/posts/${userID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
      // console.log("🚀 ~ file: Profile.js:112 ~ .then ~ response:", response)
     
        setmyposts(response.data.posts)
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []); 

 

  const { id } = useParams();
  // console.log("🚀 ~ file: Thispost.js:61 ~ Thispost ~ id:", id)
  // console.log(id);

  useEffect(() => {
    users.map((user) => {
      if (user.id == userID) {
        setuser(user);
      }
    });
  });

  useEffect(() => {
    myposts.find((e) => {
      if (e.id == id) {
        setmypost(e);
      }
    });
  },);



  ////////////////////////////////////////



  useEffect(() => {
    axios
      .get(`http://16.170.173.197/posts/likes/${id}`, {

        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // console.log("🚀 ~ file: Thispost.js:93 ~ .then ~ response:", response)
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []);

  

    


  // const numsOfLikes = mypost.likes
  // console.log("🚀 ~ file: Thispost.js:69 ~ Thispost ~ numsOfLikes:", numsOfLikes)


  // const {stateParam} = useLocation().state;
  // const stateval = useLocation().state.stateParam
  // console.log("🚀 ~ file: Thispost.js:9 ~ Thispost ~ id:", id)

  const dateString = mypost.createdAt;
  // console.log("🚀 ~ file: Thispost.js:128 ~ Thispost ~ dateString:", dateString)
  const dateTime = new Date(dateString);
  const date = new Date();
  const passedTime = date - dateTime;

  const secondsDifference = Math.floor(passedTime / 1000);
  const minutesDifference = Math.floor(secondsDifference / 60);
  const hoursDifference = Math.floor(minutesDifference / 60);

  function handleCheckHour(H, M) {
    const daysDifference = Math.floor(H / 24);
    if (H > 24) return daysDifference + " day";
    else if (M <= 0) return " just now";
    else if (H < 1) return M + " min";
    else return H + " hour";
  }


  const location = useLocation();

  console.log(location.pathname);
  return (
    <>
      <Box>
        <Sidebar />
      </Box>

      <Container maxWidth={"sm"}>
        <Profilepic
          name={user.userName}
          id={userID}
          postid={mypost.id}
          timePassed={handleCheckHour(hoursDifference, minutesDifference)}
          avatar={user.avatar}
        />

          <Box sx={{ marginTop: '20px' , textAlign:'center'}}>
            <img height={600} width={550} src={mypost.image}></img>
          </Box>


          <div className="likeswitch">
          {liked ? (
            <div
              onClick={() => {
                setliked(!liked);
                setlikes(likes - 1);
              }}
            >
              <FavoriteIcon />
            </div>
          ) : (
            <div
              onClick={() => {


                  axios
                    .post(`http://16.170.173.197/posts/like/${id}`, {
                      headers: {
                        Authorization: `Bearer ${token}`,
                      },
                     
                    })
                    .then(() => {
                      // console.log("🚀 ~ file: Thispost.js:168 ~ .then ~ response:", response)
                      setliked(!liked);
                      setlikes(likes + 1);
                    })
                    .catch((erorr) => {
                      console.log(erorr);
                    });

                
              }}
            >
              <FavoriteBorderIcon />
            </div>
          )}
          <div className="underPostIcons">
            <div>
              <ChatBubbleOutlineOutlinedIcon />
              <SendIcon />
            </div>

            <div>
              <BookmarkBorderOutlinedIcon />
            </div>
          </div>
        </div>

        <div>
          <p>{likes} like</p>
        </div>

        <div>
          <p>{user.userName}</p>
          <p>{mypost.description}</p>
        </div>

      </Container>
    </>
  );
}
