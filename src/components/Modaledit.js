import * as React from "react";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import Modal from "@mui/joy/Modal";
import ModalDialog from "@mui/joy/ModalDialog";
import DialogTitle from "@mui/joy/DialogTitle";
import DialogContent from "@mui/joy/DialogContent";
import Stack from "@mui/joy/Stack";
import Add from "@mui/icons-material/Add";
import { useState } from "react";
import { useEffect } from "react";
import PositionedMenu from "./Postoption";
import axios from "axios";


const token = localStorage.getItem("token");

export default function Modaledit(props) {
  

  const [image, setimage] = useState(null);
  const [description, setdescription] = useState("");

  function handelupdate() {
    const id = props.id;
    console.log(id);
    axios
      .request({
        method: "put",
        url: `http://16.170.173.197/posts/${id}`,
        data: {
          description: description,
        },
        
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });

      changePosition()
  }

  function refresh() {  
    window.location.reload()    
  }

  function resetPos(){
    localStorage.setItem('scroll',0)
  }

  useEffect (()=>{

    const scroll  = JSON.parse( localStorage.getItem("scroll"));
    window.scrollTo(0,scroll)
    setTimeout(resetPos,2000)

  },[])
  // const handleimgchange = (event) => {
  //   const file = event.target.files[0];
  //   setimage(file);
  //   // console.log(read);
  // };
 
  function changePosition(){
    var scrollPosition = window.scrollY;
    localStorage.setItem('scroll',scrollPosition)
    
      setTimeout(refresh , 2000)
  }

      
  return (
    <>
      <Modal open={props.open} onClose={() => props.setopen(false)}>
        <ModalDialog>
          <DialogTitle>Edit  post</DialogTitle>

        
          
          <form id="form"
            onSubmit={(event) => {
              event.preventDefault();
              props.setopen(false);
              

              // refresh()
            }}
          >
            <Stack spacing={2}>
              <FormControl>
                <FormLabel>New Image</FormLabel>
                <Button
                  component="label"
                >
                  choose img
                <input
                  type="file"
                  accept="image/*"
                  // onChange={handleimgchange}
                  style={{ display: "none" }}
                />
                </Button>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Input
                  required
                  onChange={(e) => {
                    setdescription(e.target.value);
                  }}
                />
              </FormControl>
              <Button
              id="but"
                onClick={() => {
                  handelupdate();
                  // changePosition()
                  
                }}
                type="submit"
              >
                Edit
              </Button>
            </Stack>
          </form>
        </ModalDialog>
      </Modal>
    </>
  );
}
