import * as React from "react";
import IconButton from "@mui/joy/IconButton";
import Menu from "@mui/joy/Menu";
import MenuItem from "@mui/joy/MenuItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListDivider from "@mui/joy/ListDivider";
import MoreVert from "@mui/icons-material/MoreVert";
import Edit from "@mui/icons-material/Edit";
import DeleteForever from "@mui/icons-material/DeleteForever";
import MenuButton from "@mui/joy/MenuButton";
import Dropdown from "@mui/joy/Dropdown";
import axios from "axios";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import { useState } from "react";
import Modaledit from "./Modaledit";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export default function Postoption(props) {
  const [open, setopen] = useState(false);
  
  
  function passopen() {
    setopen(!open);
  }
  
  function handeledit() {
    setopen(true);
    // console.log(open);
  }
  const token = localStorage.getItem("token");
  function handeldelete(id) {
    axios
    .request({
      method: "delete",
      url: `http://16.170.173.197/posts/${id}`,
        data: {
          id: id,
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
  }
  return (
    <div>
      <Dropdown
      >
        <MenuButton
           size="sm"
        >
          <MoreHorizIcon/>
        </MenuButton>

        <Menu placement="bottom-end">
          <MenuItem
            onClick={() => {
              handeledit();
            }}
          >
            Edit
          </MenuItem>

          <ListDivider />

          <MenuItem
            onClick={() => {
              handeldelete(props.id);
            }}
            color="danger"
          >

              <ListItemDecorator sx={{ color: "inherit" }}>
                <DeleteForever />
              </ListItemDecorator>{" "}
            Delete
          </MenuItem>
        </Menu>
      </Dropdown>
<Modaledit id={props.id} open={open} setopen={passopen} />
    </div>
  );
}
