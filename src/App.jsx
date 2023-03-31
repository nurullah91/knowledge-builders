import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import FAQ from './Components/FAQ/FAQ'

function App() {

  // const [mark, setMark] = useState([])
  
  
  
  // const handleBookmark = (blog) =>{
  //   let newBookMark = [...mark,blog];
  //   setMark(newBookMark);
  // }


  //   const exist = mark.find(blogID => blogID.id === blog.id);

  //   if(!exist){
  //     newBookMark = [...mark, blog]
  //   }

  //   else{

  //   }
  // const previousBookMarked = JSON.parse(localStorage.getItem("BookMarked"));
  // if(previousBookMarked){
  //   setBlogTitle(previousBookMarked);
  // }
  
  // else{
  // }
  // // const newBookmark = {"title": title}
  // // bookmarked.push(newBookmark);
  
  // // localStorage.setItem('BookMarked', JSON.stringify(bookmarked));
  // //   console.log(bookmarked)
  // }
  // // handle mark as read section  



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

        <Blogs readTime={readTime}  handleMarkRead={handleMarkRead}></Blogs>
        <FAQ></FAQ>
      </div>

    </div>
  )
}

export default App
