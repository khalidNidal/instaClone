import * as React from "react";
import Modal from "@mui/material/Modal";
import pic from "../assets/download.jpg";
import { Container } from "@mui/system";
import { useState } from "react";
import Storyheader from "./Storyheader";
import { Storycontext } from "../Context/Storycontext";
import { useContext } from "react";

const fitWidth = 'fit-content'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height:650,
  boxShadow: 24,
  
};



export default function StoryModal(props) {
  const [open, setOpen] = useState(props.value);
  // const name = useContext(Storycontext);
  // console.log(name)
  
  function handleClose() {
   setOpen(false);
  } 

  return (
    <>    
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
        aria-labelledby="modal-modal-title"
        >

          <Modal
          open={open}
          onClose={handleClose}
          aria-describedby="modal-modal-description"
          aria-labelledby="modal-modal-title"
          >
            
        <Container sx={{width:fitWidth}}>
          <Storyheader imgsrc = {pic} ></Storyheader>

          


        </Container >
        </Modal>

         
      </Modal>

      
    </>
  );
}
