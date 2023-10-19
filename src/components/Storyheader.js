import React from "react";
import { useContext } from "react";
import img from "../assets/StoriesAvatars/driver.png";
import { Storycontext } from "../Context/Storycontext";

function Storyheader(props) {
  const name = useContext(Storycontext);

  return (
    <>
    <div className="story-header" >

      <div className="postName">
        <div className="storyBorder">
          <img src={img}></img>
        </div>
        <div className="postHeaderInfo">
          <div>
            <p> {name}</p>
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
