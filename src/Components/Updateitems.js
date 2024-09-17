import React from 'react';

const Updateitems = ({ updatenews }) => {
  return (
    <div className="news-container">
      {updatenews.map((item, index) => (
        <div className="card" key={index}>
          <img
            src={item.urlToImage || "https://via.placeholder.com/150"}
            className="card-img-top"
            alt={item.title || "News image"}
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <a href={item.url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Updateitems;
