import React from "react";

import Michael from "../blogImages/michael.jpg"

function About(){

    
return(
<>
<div className="Aboutcontainer">
    <div className = "ImageContainer">
<img src = {Michael} className = "Image" alt = "myImage">


</img>
<div className="Info">
<p className="name"><b>Michael</b></p>
<p className="Job"><b>Web Developer</b></p>
</div>

</div>







<h1 className="AboutMe">About Me</h1>
<div className="AboutContent">
<h2 className="h2Aboutme">  🤝HI I am Idundun Michael</h2>
<p className="Aboutme">Nice meeting you
    I am a JavaScript and Web Developer living in Lagos, Nigeria. I also hold a Bachelors Degree in Business Administration, I have been a JavaScript and Web Developer For 3years.
    With a love for teaching and making impact, started to create Blogs on Programming languages called Michael.Dev 
     Inorder to help Tech NewBies understand the right languages to learn,what programming languages to use for different projects
     and whats's new in the Tech World.In all I am just getting started. </p>
</div>
</div>
</>

)

}

export default About