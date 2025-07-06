
// import React from 'react';
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarkes = ({bookmarks, readingtime}) => {
    return (


        
<div className="md:w-1/3">

  <h1 className="text-center text-4xl font-bold pt-2">Bookmarked</h1>

        <div className=" bg-gray-300  mx-10  p-5 rounded-xl">

          
            <div>
                <h2 className="text-4xl text-center">Spent time on read : {readingtime}</h2>
            </div>
            <h2 className="text-3xl text-center ">Bookmarked Blogs :  {bookmarks.length}</h2>

            {
                bookmarks.map((bookmark, idx) => <Bookmark
                key={idx}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>

</div>
    );
};

Bookmarkes.PropTypes={
    bookmarks: PropTypes.array,
    readingtime: PropTypes.number
}

export default Bookmarkes;



// import PropTypes from "prop-types";
// // import Bookmark from "./Bookmark"; // child component

// const Bookmarkes = ({ bookmarks }) => {
//     return (
//         <div className="md:w-1/3">
//             <h2 className="text-3xl">Bookmarked Blogs: {bookmarks.length}</h2>

//             {
//                 bookmarks.map(bookmark => (
//                     <Bookmark
//                         key={bookmark.id}
//                         bookmark={bookmark}
//                     />
//                 ))
//             }
//         </div>
//     );
// };

// // Bookmarkes.propTypes = {
// //     bookmarks: PropTypes.array.isRequired
// // };

// export default Bookmarkes;