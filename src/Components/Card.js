import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";



const Card = (props) => {
    let review = props.review;
    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[55]" src={review.image}/>
            </div>
            <div className="bg-violet-500 absolute top-[-115px] z-[9] left-[10px] rounded-full w-[140px] h-[140px] "></div>
            <div className="text-center mt-7">
                <h2 className="font-bold text-2xl capitalize">{review.name}</h2>
            </div>
            <div className="text-center mt-5 ">
                <p className="text-violet-300 uppercase text-sm">{review.job}</p>
            </div>
            <div className="text-violet-500 mx-auto mt-5 ">
                <FaQuoteLeft></FaQuoteLeft>
            </div>
            <div className="text-center mt-5 text-slate-500">
                <p>
                    {review.text}
                </p>
            </div>
            <div className="text-violet-500 mx-auto mt-5 ">
                <FaQuoteRight></FaQuoteRight>
            </div>
        </div>
    );
};

export default Card;
