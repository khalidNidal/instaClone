import React from "react";
import img from "../assets/StoriesAvatars/graduated-student.png";
import { Button } from "@mui/material";
import { Storycontext } from "../Context/Storycontext";
import { useContext } from "react";


function Newfollowers() {
  const name = useContext(Storycontext);
  return (
    <div className="accountSide">
      <div>
        <div className="border">
          <img src={img}></img>
        </div>
      </div>
      <div>
        <div>
          <p >{name}</p>
        </div>
        <div>
          <p className="accountName">
            Khlaid Nidal
          </p>
        </div>
      </div>
      <div className="switch">
        <Button  size="small">
          switch
        </Button>
      </div>
    </div>
  );
}

export default Newfollowers;
