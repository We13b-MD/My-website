import {Link, useMatch, useResolvedPath} from "react-router-dom";
import ReactLogo  from "../blogImages/Reactlogo2.png";

function Navbar(){
    const path = window.location.pathname; 

return(
<>
<nav className="nav">
<div className = "BasicsReact"><img className="reactImage" src ={ReactLogo} alt = "React Logo"></img> Michael.Dev</div>
<ul>
<CustomLink to = "/">Home</CustomLink>
<CustomLink to = "/Blog">Blog</CustomLink>
<CustomLink to = "/About">About</CustomLink>

</ul>
</nav>




</>



)
}

function CustomLink({to,children,...props}){
const ResolvedPath = useResolvedPath(to)
const isActive = useMatch({path:ResolvedPath.pathname, end: true})
const path = window.location.pathname
return(
<>
<li  className = {path=== to ? "active":""}>
< Link to = {to} {...props}>{children}</Link>
</li>


</>



)
}

export default Navbar;