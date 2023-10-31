import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { orange, red } from "@mui/material/colors";
import { createTheme } from "@mui/system";
import { ThemeProvider } from "styled-components";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import swal from 'sweetalert';


export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const color = red[500];

  const token = localStorage.getItem("token");
  const [posts, setpost] = useState([{}]);
  const [users, setusers] = useState([{}]);
  const userID = localStorage.getItem("id");
  const [thisPosts, setThisPosts] = useState([{}]);
  // console.log("🚀 ~ file: Home.js:26 ~ Home ~ thisPosts:", thisPosts)
  const [thisUser, setThisUser] = useState([{}]);
  // console.log("🚀 ~ file: Home.js:26 ~ Home ~ thisPosts:", thisUser.avatar)

  const [thisEmail, setThisEmail] = useState("");
  useEffect(() => {
    setThisEmail(thisUser.email);
  });

  const [emailCheck, setEmailCheck] = useState("");
  const [newPass, setNewPass] = useState("");
  const [newPassCheck, setNewPassCheck] = useState("");

  

  useEffect(() => {
    axios
      .get("http://16.170.173.197/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const users = response.data.users;
        setusers(users);
        users.map((user) => {
          if (user.id == userID) {
            setThisPosts(user.posts);
            setThisUser(user);
          }
        });
      })
      .catch((erorr) => {
        console.log(erorr);
      });
  }, []);

  const formdata = new FormData();

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

  function handleEditPassword() {
    if (thisEmail === emailCheck ) {
      console.log("the same name");
      if (newPass === newPassCheck) {
        console.log("the same pass");

        formdata.append("password", newPassCheck);

        handleupdate();
        swal("", "the password changed", "success");
      }
      else{
        swal("There is something wrong", "the password is not symmetric !", "error");
      }
    }
    else{
      swal("There is something wrong", "the email is not true !", "error");
    }
  }

  return (
    <div>
      <Button
        variant="outlined"
        color="info"
        sx={{
          width: "300px",
          height: "70px",
          marginLeft: "5px",
          color: "black",
        }}
        onClick={handleClickOpen}
      >
        Security
      </Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit your password</DialogTitle>
        <DialogContent>
          <TextField
            onChange={(e) => {
              setEmailCheck(e.target.value);
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Enter Your Email"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setNewPass(e.target.value);
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Enter your new password"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            onChange={(e) => {
              setNewPassCheck(e.target.value);
            }}
            autoFocus
            margin="dense"
            id="name"
            label="Rewrite the new password"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => {
              handleClose();
              handleEditPassword();
              
            }}
            >
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
