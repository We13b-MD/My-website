import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import "./Blog.css"
import Footer from "./Components/Footer";

function App({props}) {
  return (
    <>
    <Navbar/>
    <div className = "container">
  <Routes>
<Route path = "/" element = {<Home/>}/>
<Route path = "/Blog" element = {<Blog />}/>
<Route path = "/About" element = {<About/>}/>

</Routes>

<Footer/>
<br/>
    </div>

    </>
  );
}

export default App;
