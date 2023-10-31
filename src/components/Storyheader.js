import React from "react";
import { useContext } from "react";
import { Avatarcontext } from "../Context/Avatarcontext";
import { Storycontext } from "../Context/Storycontext";

function Storyheader(props) {
  const name = useContext(Storycontext);
  const user = useContext(Avatarcontext);

  return (
    <>
    <div className="story-header" >

      <div className="postName">
        <div className="storyBorder">
          <img src={props.avatar}></img>
        </div>
        <div className="postHeaderInfo">
          <div>
            <p> {user.userName}</p>
          </div>
          <div className="timeOut">
            <p>9999h</p>
          </div>

         
        </div>
      </div>

      
    </div>
      <div style={{marginTop:'15px'}}>
        <img width={500} src={props.imgsrc}/>
      </div>
      </>
  );
}

export default Storyheader;
