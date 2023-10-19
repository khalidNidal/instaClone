import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Storycontext } from './Context/Storycontext';
import { useEffect } from 'react';

const root = ReactDOM.createRoot(document.getElementById('root'));



  // const info  = JSON.parse( localStorage.getItem("userName"));
  // //   // const n = name.userName
  // //   // console.log(info)
  //   const name = info.email;
  //   // console.log(name)

  root.render(
  <React.StrictMode>
    {/* <Storycontext.Provider value={name}> */}
      <App />
    {/* </Storycontext.Provider> */}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
