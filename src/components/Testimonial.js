import React, { useState } from 'react'
import Card from './Card';
import reviews from '../data'
import {FiChevronLeft, FiChevronRight} from "react-icons/fi";

const Testimonial = (props) => {
    let reviews = props.reviews;
    let [index, setIndex] = useState(0);

    function leftSHiftHandler(){
        if(index-1<0){
            setIndex (reviews.length -1);
        }
        else{
            setIndex (index-1);
        }
    }
    function rightCLickHandler(){
        if(index+1> reviews.length-1){
            setIndex (0);
        }
        else{
            setIndex (index+1);
        }
    }
    function surpriseHandler(){
        setIndex(Math.floor(Math.random()*reviews.length));
    }

  return (
    <div className=' flex flex-col md:relative w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md'>
        <Card review = {reviews[index]}/>

    <div className=' flex text-3xl mt-5 gap-3 text-violet-400 font-bold mx-auto'>
        <button className=' cursor-pointer hover:text-violet-500' onClick={leftSHiftHandler}><FiChevronLeft/></button>
        <button className=' cursor-pointer hover:text-violet-500' onClick={rightCLickHandler}><FiChevronRight/></button>
      </div>

      <div className=' mx-auto mt-6'>
        <button onClick={surpriseHandler} className=' bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-lg text-white '>Surprise Me</button>
      </div>
    </div>
  )
}

export default Testimonial
