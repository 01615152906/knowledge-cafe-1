// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarkes from './Components/Bookmarkes/Bookmarkes'

import Header from './Components/Header/Header'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
 
      <Header></Header>
     <div className=' flex  md:flex  max-w-6xl mx-auto '>

 <Blogs></Blogs>
 <Bookmarkes></Bookmarkes>

     </div>
    
    </>
  )
}

export default App
