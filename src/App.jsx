import { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import FAQ from './Components/FAQ/FAQ'


function App() {

 
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

      <ToastContainer />
    </div>
  )
}

export default App
