import React from "react";
import img from "../assets/StoriesAvatars/driver.png";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useContext } from "react";
import { Storycontext } from "../Context/Storycontext";
import Postoption from "./Postoption";




function Profilepic(props) {






  
  function cheackId() {
    if(props.id == localStorage.getItem("id")){
      return <Postoption id={props.postid} />
    }
  }

  return (
    <div className="postHeader">  

      <div className="postName">
        <div className="postBorder">
          <img src={props.avatar}></img>
        </div>
        <div className="postHeaderInfo">
          <div>
            <p>
              {props.name}
            </p>
          </div>
          <div className="timeOut"/>
            <p style={{color:'gray' , marginLeft:'7px'}}>{props.timePassed}</p>
         
        </div>
      </div>

      <div className="more">
      {cheackId()}
      </div>
    </div>
  );
}

export default Profilepic;
