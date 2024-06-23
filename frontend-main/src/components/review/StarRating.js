import React from "react";
import ReactStars from "react-rating-stars-component";

// const ratingChanged = (newRating) => {
//   console.log(newRating);
// };


export default function StarRating({title,value,...props}){
  return (
    <div>
      <h3>{title}</h3>
      <ReactStars
        count={5}
        edit={false}
        size={24}
        isHalf={true}
        emptyIcon={<i className="far fa-star"></i>}
        halfIcon={<i className="fa fa-star-half-alt"></i>}
        fullIcon={<i className="fa fa-star"></i>}
        activeColor="#ffd700"
        value = {value}
      />
    </div>
  )
}
