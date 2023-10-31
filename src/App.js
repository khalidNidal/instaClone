import "./Style.css";
import { BrowserRouter, Routes, Route, Await } from "react-router-dom";
import Home from "./pages/Home";
import Messages from "./pages/Messages";
import Explore from "./pages/Explore";
import Profile from "./pages/Profile";
import Profilereels from "./pages/Profilereels";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Protecthome from "./Routes/Protecthome";
import Backtosign from "./Routes/Backtosign";
import { Storycontext } from "./Context/Storycontext";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Avatar } from "@mui/material";
import { Avatarcontext } from "./Context/Avatarcontext";
import Thispost from "./pages/Thispost";
import Backtosigncopy from "./Routes/Backtosigncopy";


function App() {

  
  function getData(){   
    const info  = JSON.parse( localStorage.getItem("userName"));
    // return info.email
    // // const n = name.userName
    // console.log(info)
    if(info.email==null)
    return null
    const name = info.email;  
    // console.log("🚀 ~ file: App.js:24 ~ getData ~ name:", name)
    return name
  }

  const token = localStorage.getItem("token");
  const [thisPosts, setThisPosts] = useState([{}]);
  const [thisUser, setThisUser] = useState([{}]);
  const [users, setusers] = useState([{}]);
  const userID = localStorage.getItem("id");

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

  return (
    // <Storycontext.Provider value={name}>
    // <Storycontext.Provider value={getData()} >
    <Avatarcontext.Provider value={thisUser}>
    <BrowserRouter>
      <Routes>
        
        <Route path="/"
          element={
            <Protecthome>
              <Home />
            </Protecthome>
          }
        />

        {/* <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<Signup/>}/> */}
        
        <Route path="/messages" element={<Messages/>} />
        <Route path="/explore" element={<Explore/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/profile/reels" element={<Profilereels/>}/>
        <Route path="/profile/thispost/:id" element={<Thispost/>} />
        {/* <Route path="/thispost" element={<Thispost/>} /> */}

        <Route
          path="/signin"
          element={
            // <Backtosigncopy>
              <Signin />
             /* </Backtosigncopy>  */
          }
        />
        <Route
          path="/signup"
          element={
            <Backtosign>
              <Signup />
             </Backtosign>
          }
        />


      </Routes>
    </BrowserRouter>
    </Avatarcontext.Provider>
    // </Storycontext.Provider> 


  );
}

export default App;
