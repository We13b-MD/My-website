import React from "react";
import {useState} from "react";

function Blog(){

    const [blogs, setblogs] = useState([
        {id: 1, title:"React vs Angular", content:"Angular JS and React JS  are both powerful JavaScript frameworks they are widely used for building web applications.While they share similar goals there are several key differences between the two These factors account for their differences:Architecture, Learning curve, Performance, Community and Ecosystem, Use Cases.", url:"https://www.simform.com/blog/angular-vs-react/", text:"Read More", timestamp:new Date().toLocaleString()},
        {id: 2, title: "React vs Vue", content:"React JS and Vue.JS are both popular JavaScript frameworks used for building web applications.While they both focus on user interfaces and have a component-based design, there are clear distinctions between the two.These differences are based on these  factors: Learning curve, Performance, Flexibility and Scalability, Use Cases.", url:"https://www.monterail.com/blog/vue-vs-react", text:"Read More",timestamp:new Date().toLocaleString()},
        {id: 3, title: "React vs ReactNative", content:"ReactJS is an open source library used to build the user interface for web applications while React Native is an open source javascript framework used for developing a mobile application for iOS Android and Windows ReactNative is the same as react only that it uses Native components instead of Web components as building blocks.It targets mobile platforms rather than the browser." ,url:"https://www.javatpoint.com/reactjs-vs-reactnative", text:"Read More", timestamp:new Date().toLocaleString()},
        {id: 4, title: "React in 2023", content:"ReactJS is a widely adopted framework with an active community, and its expected that new features and improvements will continue to be added to the framework to enhance its functionality and the evolving needs of the developers.Updates include: Concurrent Rendering, Server components, Improved performance, Enhanced developer tools, Accessiblity Enhancements, Integration with other frameworks. Read More. ", url:"https://betterprogramming.pub/exciting-react-features-in-2023-a-look-into-the-future-of-web-development-440107a3129d", text:"Read More", timestamp:new Date().toLocaleString()}      
    
       ]
    )


return(

<div className="dynamic-blog">
<h1>React Blog</h1>
{blogs.map((blog,index)=>(
<div className = "blog" key = {index}>
<h2> {blog.title}</h2>
<p className = "timeStamp">{blog.timestamp} </p>
<p>{blog.content}</p>
<a className = "ReadMoreLink" href = {blog.url}  target = "_blank" rel = "noopener noreferrer" >{blog.text}</a>
</div>


))}

      </div>
)

}

 

export default Blog;
