import React, { useEffect, useState } from "react";

const Updates = () => {
    const [updatenews, setupdatenews] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=9cf8288e473548d7918868d5f0a0f8f3`;
        fetch(url).then((response) => response.json()).then((data) => setupdatenews(data.articles));
    }, []);

    return (
        <div className="news-container">
            {updatenews.map((item, index) => {
                return (
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
                );
            })}
        </div>
    );
};

export default Updates;
