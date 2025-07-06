// import React from 'react';
// import { FaBeer } from 'react-icons/fa';

import { BsBookmark } from "react-icons/bs";
import PropTypes from 'prop-types';
const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {
const { id, title, cover, author, authorimg, readingtime, posteddate, hashtags} = blog;

    return (
        <div className='mb-20 space-y-4'> 

<img className='w-full mb-8 rounded-xl ' src={cover} alt={`Cover picture of the title ${title}`} />


<div className='flex justify-between mb-4 '>

    <div className='flex '>
<img className='w-14 rounded-full' src={authorimg} alt="" />

<div className='ml-6'>
    <h3 className='text-2xl'>{author}</h3>
    <p>{posteddate}</p>
</div>
    </div>`1    `

    <div>
<span>{readingtime} min read</span>

<button onClick={() => handleAddToBookmark (blog) }
 className='ml-2 text-red-600 text-1xl'>
     <BsBookmark /> </button>
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

<button 
onClick={ () => handleMarkAsRead(id, readingtime)}
className="text-purple-800 font-bold underline"
>Mark as read</button>


        </div>
    );
};






// import { BsBookmark } from "react-icons/bs";
// import PropTypes from 'prop-types';

// const Blog = ({ blog }) => {
//   const {
//     title,
//     cover,
//     author,
//     authorimg,
//     readingtime,
//     posteddate,
//     hashtags,
//   } = blog;

//   return (
//     <div className="mb-20">
//       <img
//         className="w-full mb-8 rounded-xl"
//         src={cover}
//         alt={`Cover picture of the title ${title}`}
//       />

//       <div className="flex justify-between mb-4">
//         <div className="flex">
//           <img
//             className="w-14 h-14 object-cover rounded-full"
//             src={authorimg}
//             alt={author}
//           />

//           <div className="ml-6">
//             <h3 className="text-2xl">{author}</h3>
//             <p>{posteddate}</p>
//           </div>
//         </div>

//         <div className="flex items-center text-gray-600">
//           <span>{readingtime} min read</span>
//           <button className="ml-2 text-2xl text-red-600  ">
//             <BsBookmark />
//           </button>
//         </div>
//       </div>

//       <h2 className="text-3xl mb-4 font-semibold">{title}</h2>

//       <p className="text-gray-700">
//         {hashtags.map((hash, idx) => (
//           <span key={idx}>
//             <a href="#" className="mr-2 text-blue-500">#{hash}</a>
//           </span>
//         ))}
//       </p>
//     </div>
//   );
// };



Blog.PropTypes={
    blog:PropTypes.object.isRequired
    // handleAddToBookmark: PropTypes.func
}



export default Blog;