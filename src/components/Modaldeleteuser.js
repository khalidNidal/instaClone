import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { orange, red } from '@mui/material/colors';
import { createTheme } from '@mui/system';
import { ThemeProvider } from 'styled-components';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const userID = localStorage.getItem("id");
  const navigate = useNavigate();
const token = localStorage.getItem("token");


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const color = red[800]
  
  

  const handleSave = () => {

    setOpen(false);
    handleDelete();
    localStorage.clear();

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



  return (
    <div>
      <Button
      
              onClick={()=>{
              handleClickOpen()
                // handleSave()
                // navigate("/signin")

              }}
              type="submit" color="warning" sx={{margin:'20px'}}>Delete</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete this user</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Typography color={color}>

            Warning this will delete this user and u will cant recover it
            </Typography>
          </DialogContentText>
         
        </DialogContent>
        <DialogActions sx={{margin:'auto' , gap:'10px'}}>
          <Button onClick={handleClose}>Cancel</Button>
          <form
          onClick={()=>{
             handleSave()
             navigate("/signin")
          }}
          >
          <Button variant='outlined' onClick={handleClose} color='warning'>Delete</Button>
          </form>
        </DialogActions>
      </Dialog>
    </div>
  );
}