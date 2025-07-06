
// import React from 'react';


import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";

const Blogs = ({handleAddToBookmark}) => {

const [blogs, setBlogs] = useState([]);
useEffect(() =>{

fetch('Blogs.json')
.then(res => res.json())
// .then(data => console.log(data))
.then(data => setBlogs(data))


},[])

    return (
        <div className="md: w-2/3 ">
          <h1 className="text-3xl">Blogs: {blogs.length}</h1> 

{
    blogs.map(blog =>
        <Blog
        
        key={blog.id}
        blog={blog}
        handleAddToBookmark = {handleAddToBookmark}
        ></Blog>
    )
}


        </div>
    );
};


Blogs.PropTypes = {
    handleAddToBookmark:PropTypes.fun 
}

export default Blogs;