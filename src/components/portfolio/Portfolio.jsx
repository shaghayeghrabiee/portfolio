import React from "react";
import img1 from "../../asset/portfolio-1.jpg";
import img2 from "../../asset/portfolio-2.jpg";
import img3 from "../../asset/portfolio-4.jpg";
import img4 from "../../asset/portfolio-3.jpg";
import "./portfolio.css";
const data = [
  {
    id: 1,
    image: img1,
    title: "Movie App",
    github: "https://github.com/shaghayeghrabiee/movie-app",
  },
  {
    id: 2,
    image: img2,
    title: "online shop",
    github: "https://github.com/shaghayeghrabiee/WebSite-OnlineShop-React",
  },
  {
    id: 3,
    image: img3,
    title: "single page app vanilla",
    github: "https://github.com/shaghayeghrabiee/single-page-app-vanilla",
  },
  {
    id: 4,
    image: img4,
    title: "Car shop",
    github: "https://github.com/shaghayeghrabiee/Bootstrap",
  },
];
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>
      <div className="container portfolio_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item_image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-action">
                <a href={github} target="_blank" className="btn">
                  Github
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
