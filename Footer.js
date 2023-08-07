import React from 'react';
import { FaLinkedin, FaTwitter,FaGithub} from "react-icons/fa";
import '../Blog.css'

function Footer() {
  return (
    <>
    <footer className='footer' style={styles.footer}>
      <p style = {styles.p}>&copy;{new Date().getFullYear()} 
      Your Company. All rights reserved. <div  style = {styles.div}>
         <a href= "https://twitter.com/IdundunM?s=08"><FaTwitter className = "iconsAnimate" size = {20} style = {{color:"white"}}/> </a>
      <a href = "https://www.linkedin.com/in/michael-damilare-12516a261">
        <FaLinkedin className = "iconsAnimate" size = {20} style = {{color:"white"}}/></a> <a  href="https://github.com/We13b-MD?tab=repositories"><FaGithub className = "iconsAnimate" style = {{color:"white"}} size = {20}/></a> </div></p>
    </footer>
    </>
  );
};

const styles = {
  footer: {
    backgroundColor:"#333",
    backdropFilter:"blur(2px)",
    color: 'white',
    textAlign: 'center',
    padding: 0,
    paddingTop:"0px",
    position: 'fixed',
    bottom: 0,
    marginTop:"-50px",
    width: '100%',
marginBottom: '-30px'
  },

 p:{
fontSize:"15px",
gap:"3rem",


 },
 a:{
    color:"white",
gap:"5rem"
 },
 
 div :{
    marginLeft:"750px",
color: "green",
wordSpacing: "0.8rem",
marginBottom: "35px",
 }
};

export default Footer;