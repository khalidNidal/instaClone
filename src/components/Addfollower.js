import React from "react";
import img1 from "../assets/StoriesAvatars/saleswoman.png";
import { Button } from "@mui/material";
import { useState } from "react";

function Addpeople(props) {
  const [add, setAdd] = useState(false);

  return (
    <div className="Suggestions">
      <div>
        <div className="border">
          <img src={img1}></img>
        </div>
      </div>


      <div>
        <div>
          <p>jana</p>
        </div>
        <div>
          <p >
            jannna 
          </p>
        </div>
      </div>
      <div className="follow">
        <Button
          onClick={() => {
            setAdd(!add);
          }}
          variant="text"
          size="small"
        >
          {add ? "Requsted" : "Follow"}
        </Button>
      </div>
    </div>
  );
}

export default Addpeople;
