import React from "react";
import Profilepic from "./Profilepic";
import { Container } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SendIcon from "@mui/icons-material/Send";
import cr7 from "../assets/download.jpg";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useState } from "react";
function Post(props) {
  const [liked, setliked] = useState(false);
  const[likes , setlikes] = useState(props.likes);

  return (
    <Container maxWidth="sm">
      <div className="containPosts">
        <div>
        <Profilepic name={props.name} id ={props.id} postid={props.postid} />
        </div>

        <div style={{ marginTop: 10 }}>
          <img height={600} width={550} src={props.img}></img>
        </div>

        <div className="likeswitch">
          {liked ? <div onClick={() => {
            
            setliked(!liked) 
            setlikes(likes - 1) 
            }}
            >
            
            <FavoriteIcon /></div> : <div onClick={() => {
             setliked(!liked)
            setlikes(likes + 1) 

            }}
            >

            
             <FavoriteBorderIcon /></div>}
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
          <p >{likes} like</p>
        </div>

        <div>
          <p>{props.name}</p>
          <p>
             {props.dis}
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Post;
