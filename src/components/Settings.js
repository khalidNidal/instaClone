// import React from "react";
// import Button from "@mui/joy/Button";
// import FormControl from "@mui/joy/FormControl";
// import FormLabel from "@mui/joy/FormLabel";
// import Modal from "@mui/joy/Modal";
// import ModalDialog from "@mui/joy/ModalDialog";
// import Stack from "@mui/joy/Stack";
// import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
// import { useState } from "react";
// import axios from "axios";
// import { Box, Textarea, Typography } from "@mui/joy";
// import Dialog from '@mui/material/Dialog';
// import ListItemText from '@mui/material/ListItemText';
// import ListItem from '@mui/material/ListItem';
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import CloseIcon from '@mui/icons-material/Close';
// import Slide from '@mui/material/Slide';
// import { TextField } from "@mui/material";
// import { useContext } from "react";
// import { Avatarcontext } from "../Context/Avatarcontext";

import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { useState } from "react";
import { useContext } from "react";
import { Avatarcontext } from "../Context/Avatarcontext";
import axios from "axios";
import { Box, TextField } from "@mui/material";
import { Input } from "@mui/base";
import SettingsIcon from "@mui/icons-material/Settings";
import Editpassworddialog from "../components/Editpassworddialog"
import { Link, useNavigate } from "react-router-dom";
import Modaldeleteuser from "../components/Modaldeleteuser"


const token = localStorage.getItem("token");
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Settings() {
  //   const [nameValue, setNameValue] = useState("");
  //   const [bioValue, setBioValue] = useState("");

 

  const userID = localStorage.getItem("id");
  console.log("🚀 ~ file: Settings.js:69 ~ Settings ~ userID:", userID)


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };


  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {

    setOpen(false);
    handleDelete();
    localStorage.removeItem("token");

  };



  function handleDelete() {
    axios
      .delete("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },

          
          "id": userID

        

      })
      .then((response) => {
        console.log(response);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }
  const navigate = useNavigate();

  return (
    <div>
      {/* Edit Button */}
      <SettingsIcon
        className="settingsIcon"
        style={{ marginTop: 20 }}
        onClick={handleClickOpen}
      />

      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", backgroundColor: "black" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
                Settings
            </Typography>
           
          </Toolbar>
        </AppBar>

        <List>
          {/* User name edit bar */}
          <Box sx={{marginBottom:'10px' , marginLeft:'380px'}} >
            
            <Editpassworddialog  primary="password"></Editpassworddialog>

        
          </Box>

          <Divider />

          {/* Bio edit bar */}

          <Box sx={{ display: "flex" }}>
            <ListItem sx={{ width: "50%", textAlign: "center" }} button>
              <ListItemText primary="delete user"  />
            </ListItem>

          
              <Box sx={{ margin: "10px" }}>
                
              </Box>

              <Modaldeleteuser></Modaldeleteuser>
              
          </Box>

          {/* <Divider />

          <Box sx={{ display: "flex" }}>
            <ListItem sx={{ width: "50%", textAlign: "center" }} button>
              <ListItemText primary="Image" secondary={thisavatar} />
            </ListItem>

            <form
              style={{ display: "flex" }}
              id="myForm"
              onSubmit={(e) => {
                e.preventDefault();
                setAvatar(valuse.imgValue);
                handleclearBio();
              }}
            >
              <Box sx={{ margin: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter new bio:"
                  variant="outlined"
                  value={valuse.imgValue}
                  required
                  onChange={(e) => {
                    setValuse({ ...valuse, imgValue: e.target.value });
                  }}
                />
              </Box>
              <Button type="submit">Submit</Button>
            </form>
          </Box> */}

          
        </List>
      </Dialog>
    </div>
  );
}
