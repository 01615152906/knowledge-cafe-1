// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarkes from './Components/Bookmarkes/Bookmarkes'

import Header from './Components/Header/Header'

function App() {


  const [bookmarks, setBookmarks ] = useState([]);

const [readingtime, setReadingTime] = useState(0);




  const handleAddToBookmark = blog =>{

// console.log(blog)
const newBookmarks = [...bookmarks, blog];
setBookmarks(newBookmarks);

  }

const handleMarkAsRead = time =>{
  // console.log('Mark as read',time)


  const newReadingTime = readingtime + time;
  setReadingTime(newReadingTime)
}


  return (
    <>
 
      <Header></Header>
     <div className='flex md:flex max-w-7xl mx-auto '>

 <Blogs handleAddToBookmark={handleAddToBookmark}
handleMarkAsRead = {handleMarkAsRead}
 ></Blogs>
 <Bookmarkes 
 bookmarks={bookmarks}
 readingtime={readingtime}
 ></Bookmarkes>

     </div>
    
    </>
  )

// return (
//   <>
//     <Header />

//     <div className="flex max-w-6xl mx-auto">
//       <Blogs
//         handleAddToBookmark={handleAddToBookmark}
//         handleMarkAsRead={handleMarkAsRead}
//       />

//       <Bookmarks 
//         bookmarks={bookmarks}
//       />
//     </div>
//   </>
// );

}

export default App
