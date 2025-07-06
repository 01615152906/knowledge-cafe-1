// import React from 'react';
// import { FaBeer } from 'react-icons/fa';
import { BsBookmark } from "react-icons/bs";
import PropTypes from 'prop-types';
const Blog = ({blog}) => {
const { title, cover, author, authorimg, readingtime, posteddate, hashtags} = blog;

    return (
        <div className='mb-20'> 

<img className='w-full mb-8 rounded-xl ' src={cover} alt={`Cover picture of the title ${title}`} />


<div className='flex justify-between mb-4'>

    <div className='flex '>
<img className='w-14 rounded-full' src={authorimg} alt="" />

<div className='ml-6'>
    <h3 className='text-2xl'>{author}</h3>
    <p>{posteddate}</p>
</div>
    </div>

    <div>
<span>{readingtime} min read</span>

<button> <BsBookmark /> </button>
    </div>

</div>





           <h2 className='text-3xl mb-4' > {title}</h2> 



<p>
    {
        hashtags.map((hash, idx) => (
            <span key={idx}>
                <a href="">#{hash}</a>{" "}
            </span>
        ))
    }
</p>



        </div>
    );
};



Blog.PropTypes={
    blog:PropTypes.object.isRequired
}

export default Blog;