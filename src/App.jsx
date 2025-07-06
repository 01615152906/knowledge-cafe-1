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
  const handleAddToBookmark = blog =>{

console.log(blog)
const newBookmarks = [...bookmarks, blog];
setBookmarks(newBookmarks);

  }
  return (
    <>
 
      <Header></Header>
     <div className=' flex  md:flex  max-w-6xl mx-auto '>

 <Blogs handleAddToBookmark={handleAddToBookmark}  ></Blogs>
 <Bookmarkes 
 bookmarks={bookmarks}
 ></Bookmarkes>

     </div>
    
    </>
  )
}

export default App
