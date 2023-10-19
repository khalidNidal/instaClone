import React from "react";
import Sidebar from "../components/Sidebar";
import { Container } from "@mui/material";

import cr1 from "../assets/ExplorePics/548cf16b77ae0a5a9cd32526127a1c23.jpg"
import cr2 from "../assets/ExplorePics/a6ba46e4c2ba063d02356bc0d913cb34.jpg"
import cr3 from "../assets/ExplorePics/ap22364795346345-2c6120b6fd7a4e91f1b49c8bafa1d3b9ae28e482.jpg"
import cr4 from "../assets/ExplorePics/cristiano-ronaldo-real-madrid-champions-league.jpg"
import cr5 from "../assets/ExplorePics/cristiano-ronaldo-real-madrid-champions-league.jpg"



const pics = [
 cr1,
 cr2,
 cr3,
 cr4,
 cr5,
];
const picsss = pics.map((pic) => {
  return (
    <div className="explorePics" >
      <img  width= {320}  height={310}  src={pic} />
    </div>
  );
});

function Explore() {
  return (
    <div className="Explorestrsuc">
      <div>
        <Sidebar />
      </div>
      <Container maxWidth="sm">
        <div className="explorestruc">{picsss}</div>
      </Container>
    </div>
  );
}

export default Explore;
