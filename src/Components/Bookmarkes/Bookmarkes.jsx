
// import React from 'react';
import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarkes = ({bookmarks}) => {
    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-10 pt-4 rounded-xl">
            
            <h2 className="text-3xl text-center ">Bookmarked Blogs :  {bookmarks.length}</h2>

            {
                bookmarks.map(bookmark => <Bookmark
                key={bookmark.id}
                bookmark={bookmark}
                ></Bookmark>)
            }
        </div>
    );
};

Bookmarkes.PropTypes={
    bookmarks: PropTypes.array
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