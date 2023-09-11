// import React, { useState } from "react";
import { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let reviews = props.reviews;

  const [index,setIndex] = useState(0)

  function shiftLeftHanler(){
    if(index-1 <0){
      setIndex(reviews.length -1);
    }
    else{
      setIndex(index-1);
    }
  }

  function shiftRightHanler(){
    if(index+1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index+1);
    }
  }
  function surprisemeHanler(){
   let randomIndex =  Math.floor(Math.random() * reviews.length);
   setIndex(randomIndex);
  }

  return (
    <div className="w-[85vw] md:w-[700px] bg-white flex flex-col items-center justify-center mt-10 ml-10 p-10 transition-all duration-700">
      <Card review={reviews[index]}></Card>

      <div className="text-3xl text-violet-600 font-bold flex mt-5 gap-3 mx-auto">

        <button className="cursor-pointer hover:tex-violet-800" onClick={shiftLeftHanler}>
          <FiChevronLeft></FiChevronLeft>
        </button>

        <button className="cursor-pointer hover:tex-violet-800" onClick={shiftRightHanler}>
          <FiChevronRight></FiChevronRight>
        </button>

      </div>

      <div>
        <button onClick={surprisemeHanler} className="bg-violet-600 hover:bg-violet-800 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg">
          Surpise me
        </button>
      </div>

    </div>
  );
};

export default Testimonial;
