import React from 'react';
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Feature from "./Feature";
import GetInTouch from "./GetInTouch";
import Footer from "./Footer";

const App = ({title}) => (
  <div>
    <h1>{title}</h1>
    <Navbar></Navbar>
    <Jumbotron />
    <Feature />
    <GetInTouch />
    <Footer />
  </div>
)

export default App;