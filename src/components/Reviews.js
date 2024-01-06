import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_OPTIONS } from "../utils/constants";

const Reviews = () => {
  const URLId = useParams();
  const [reviews, setReviews] = useState([]);
  const [slicedReviews, setSlicedReviews] = useState([]);
  const [selectedValue, setSelectedValue] = useState("");
  const [dropDownlength, setDropDownLength] = useState(1);
  const createArr = (N) => Array.from({ length: N }, (_, index) => index + 1);
  let reviewPerPage = 5;
  const dropDownlengthArr = createArr(dropDownlength);

  useEffect(() => {
    reviewAPI(URLId);
  }, []);



  const handleSelectChange = (event) => {
    reviewPerPage = (event.target.value)
    setSlicedReviews(reviews.slice(0,reviewPerPage));
    setSelectedValue(event.target.value);
  };
  const reviewAPI = async (URLId) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${URLId.movieId}/reviews`,
      API_OPTIONS
    );
    const result = await data.json();
    const { results } = result;
    setDropDownLength(Math.ceil(results.length / reviewPerPage));
    setReviews(results);
    setSlicedReviews(results.slice(0,reviewPerPage))
  };


  return (
    <>
      <div>
        <div>
          <select
            className="border border-black"
            value={selectedValue}
            onChange={handleSelectChange}
          >
            {dropDownlengthArr.map((value) => (
              <option
                key={dropDownlengthArr.index}
                value={dropDownlengthArr.value}
              >{value*reviewPerPage}</option>
            ))}
          </select>
        
        </div>
        {slicedReviews.map((review, index) => {
          return (
            <div key={index} className="flex pl-6">
              <div className="font-bold">{review.author_details.username}</div>-
              {review.content}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Reviews;
