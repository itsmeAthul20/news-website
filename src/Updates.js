import React, { useEffect, useState } from "react";
import Updateitems from "./Components/Updateitems";

const Updates = ({ category }) => {
  const [updatenews, setupdatenews] = useState([]);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=9cf8288e473548d7918868d5f0a0f8f3`;
    
   
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.articles && data.articles.length > 0) {
          setupdatenews(data.articles);
        } else {
          console.error("No articles found for this category:", category);
          setupdatenews([]); 
        }
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, [category]);

  return (
    <>
      {updatenews.length > 0 ? (
        <Updateitems updatenews={updatenews} />
      ) : (
        <p className="text-center">No news available for {category}.</p> 
      )}
    </>
  );
};

export default Updates;
