import React from "react";


function ImageHover({name,job,ImageUrl}){
return(
<>
<div className = "ImageContainer">
<img className="Image" ></img>

<div className="Info">
<p className="name">{name}</p>
<p className="Job">{job}</p>
</div>
</div>
</>


)

}

export default ImageHover;