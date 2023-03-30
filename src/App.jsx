import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'

function App() {

const handleBookmark = (id, title) =>{

  console.log(id, title)
}



  // handle mark as read section  
const [readTime, setReadTime] = useState(0);

const handleMarkRead = (time) => {
  const previousReadTime = JSON.parse(localStorage.getItem("readTime"))
if(previousReadTime){
const totalReadTime = previousReadTime + parseInt(time);


setReadTime(totalReadTime);
localStorage.setItem("readTime", JSON.stringify(totalReadTime));

}

else{
  setReadTime(time);
  localStorage.setItem("readTime", time)
}




}


  return (
    <div className="App">
      <Header></Header>
      <div className='container'>

        <Blogs readTime={readTime} handleBookmark={handleBookmark} handleMarkRead={handleMarkRead}></Blogs>
      </div>

    </div>
  )
}

export default App
