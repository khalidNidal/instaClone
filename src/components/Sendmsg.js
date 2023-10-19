import React from "react";
import img from "../assets/StoriesAvatars/graduated-student.png";

function Sendmsg(props) {
  return (
    <>   
     <div className="direct">
      <div>
        <div className="border">
          <img src={img}></img>
        </div>
      </div>
      <div style={{  marginLeft:' 10px'}}>
        <div>
          <p >ahmad</p>
        </div>
        <div>
        <p style={{color:'gray'}}>hi</p>
        </div>
      </div>
      <div className="since">
     <h5>2s</h5>
     </div>
    </div>
    

     </>



       

  );
}

export default Sendmsg;
