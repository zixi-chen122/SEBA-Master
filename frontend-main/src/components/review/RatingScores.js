import React from "react";
import StarRating from "./StarRating";

const ratingChanged = (newRating) => {
  console.log(newRating);
};


export default function RatingScores({ratings,...props}){
 
  return(
  <div>
   <h2>Overall Rating</h2>
    <StarRating
      title=""
      value={ratings.overall}
    />
    <h2>Rating by feature</h2>
    <StarRating
      title="Quality "
      value={ratings.quality}
    />   
    <StarRating
      title="Price"
      value={ratings.price}
    />   
    <StarRating
      title="Transport"
      value={ratings.transport}
    />
    <StarRating
      title="Efficiency"
      value={ratings.efficiency}
    />
  </div>)
  ;
}
