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

const token = localStorage.getItem("token");
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Editprofile() {
//   const [nameValue, setNameValue] = useState("");
//   const [bioValue, setBioValue] = useState("");
  const[valuse, setValuse] = useState({
    nameValue:"",
    bioValue:"",
    imgValue:"",
});


  const user = useContext(Avatarcontext);
  const thisUser = user.userName;
  const thisbio = user.bio;
  const thisavatar = user.avatar;

   
  
 
  const userID = localStorage.getItem("id");

  const [userName, setUserName] = useState("");
  const [bio, setBio] = useState("");
  const [avatar, setAvatar] = useState("");
//   console.log("🚀 ~ file: Editprofile.js:71 ~ Editprofile ~ avatar:", avatar)


  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleSave = () => {
    setOpen(false);
    handleupdate();
  };

  function handleclearName() {

    setValuse({...valuse,nameValue:""});
    // setValuse({...valuse,bioValue:" "});
    
  }
  function handleclearBio() {

    // setValuse({...valuse,nameValue:"null"});
    setValuse({...valuse,bioValue:" "});
    
  }

  const formdata = new FormData();

  formdata.append("id", userID);
  formdata.append("userName", userName);
  formdata.append("bio", bio);
  formdata.append("avatar", avatar)

  function handleupdate() {
    axios
      .put("http://16.170.173.197/users", formdata, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }

  return (
    
    <div>
     

    
        {/* Edit Button */}
      <Button
      
        variant="outlined"
        sx={{
          borderColor: "white",
          color: "white",
          marginTop: "10px",
          margin: "10px",
        }}
        onClick={handleClickOpen}
      >
        Edit{" "}
      </Button>

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
              your profile
            </Typography>
            <Button autoFocus color="inherit" onClick={handleSave}>
              save
            </Button>
          </Toolbar>
        </AppBar>

        <List>
            {/* User name edit bar */}
          <Box sx={{ display: "flex" }}>
            <ListItem sx={{ width: "50%", textAlign: "center" }} button>
              <ListItemText primary="user name" secondary={thisUser} />
            </ListItem>

            <form
              style={{ display: "flex" }}
              id="myForm"
              onSubmit={(e) => {
                e.preventDefault();
                setUserName(valuse.nameValue);
                handleclearName();
              }}
            >
              <Box sx={{ margin: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter new user name:"
                  variant="outlined"
                  value={valuse.nameValue}
                  required
                  onChange={(e) => {
                setValuse({...valuse,nameValue:e.target.value});
                  }}
                />
              </Box>
              <Button type="submit">Submit</Button>
            </form>
          </Box>

          <Divider />

          {/* Bio edit bar */}

          <Box sx={{ display: "flex" }}>
            <ListItem sx={{ width: "50%", textAlign: "center" }} button>
              <ListItemText primary="bio" secondary={thisbio} />
            </ListItem>

            <form
              style={{ display: "flex" }}
              id="myForm"
              onSubmit={(e) => {
                e.preventDefault();
                setBio(valuse.bioValue);
                handleclearBio();
              }}
            >
              <Box sx={{ margin: "10px" }}>
                <TextField
                  id="outlined-basic"
                  label="Enter new bio:"
                  variant="outlined"
                  value={valuse.bioValue}
                  required
                  onChange={(e) => {
                    setValuse({...valuse,bioValue   :e.target.value});
                  }}
                />
              </Box>
              <Button type="submit">Submit</Button>
            </form>
          </Box>

          <Divider />


          
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
                    setValuse({...valuse,imgValue:e.target.value});
                  }}
                />
              </Box>
              <Button type="submit">Submit</Button>
            </form>
          </Box>



        </List>
      </Dialog>
    </div>
  );
}
