import React from "react";


import Reactimage4 from "../blogImages/Reactimage4.jpeg"
import ReactLogo  from "../blogImages/Reactlogo2.png"
import ReactImage7 from "../blogImages/ReactImage7.jpg"
import ReactImage8 from "../blogImages/ReactImage8.jpg"

function Home(){
    

    

        function showContent(){
        document.querySelector(".HomeParagraph").classList.add("active")

 }
 function showContent2(){
    document.querySelector(".HomeParagraph2").classList.add("active")

}
function showContent3(){
    document.querySelector(".HomeParagraph3").classList.add("active")

}
 function HideContent(){
    document.querySelector(".HomeParagraph").classList.remove("active")
}

function HideContent2(){
    document.querySelector(".HomeParagraph2").classList.remove("active")
}
function HideContent3(){
    document.querySelector(".HomeParagraph3").classList.remove("active")
}

return(
<>
<div className = "HomeContainer">
<h1 className = "HomeTitle"> A Comprehensive Guide to the Basics of React</h1>


<section>
    <div className = "Card">
     
<div className="left" id = "left" >
<h3>What is React ?</h3>
<img onMouseEnter={showContent}  onMouseLeave={HideContent}src = {ReactLogo} className = "ReactImage6" alt = "ReactImage6" /> 
<div className = "card-content">  
<p   className="HomeParagraph  "> React is a declarative , efficient and flexible JavaScript 
library for building reusable UI components. It is an open-source, component-based front-end library
which is responsible for the view layer of the application. 
</p>
</div>
</div>
     
<div className="left" id = "left" >
<h3>Why React ?</h3>
<img onMouseEnter={showContent2}  onMouseLeave={HideContent2}src = {ReactImage7} className = "ReactImage7" alt = "ReactImage6" /> 
<div className = "card-content">  
<p   className="HomeParagraph2  "> The main objective of ReactJS is to develop User Interfaces 
(UI) that improve the speed of the apps. It is uses virtual DOM (JavaScript Object), which improves the performance of the application.
The JavaScript Virtual DOM is faster than the regular DOM. 
</p>
</div>
</div>
     
<div className="left" id = "left" >
<h3>Thinking in React </h3>
<img onMouseEnter={showContent3}  onMouseLeave={HideContent3}src = {ReactImage8} className = "ReactImage8" alt = "ReactImage6" /> 
<div className = "card-content">  
<p   className="HomeParagraph3  "> 
Thinking in React involves breaking down your application's user interface into a hierarchy of modular, reusable components.
 By focusing on data flow, state management, and reusability, you can create well-organized, maintainable,
  and performant React applications. </p>
</div>
</div>
</div>
<div className="right"></div>


</section>
</div>
</>


)

}

export default Home