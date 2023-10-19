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

function App() {

  
  function getData(){   
    const info  = JSON.parse( localStorage.getItem("userName"));
    // return info.email
    // // const n = name.userName
    // console.log(info)
    const name = info.email;  
    console.log("🚀 ~ file: App.js:24 ~ getData ~ name:", name)
    return name
  }

  return (
    // <Storycontext.Provider value={name}>
    <Storycontext.Provider value={getData()}>

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

        <Route
          path="/signin"
          element={
            <Backtosign>
              <Signin />
            </Backtosign>
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
    </Storycontext.Provider>


  );
}

export default App;
