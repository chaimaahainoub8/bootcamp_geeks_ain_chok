import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Requires install
import { Carousel } from 'react-responsive-carousel';

const DailyChallenge = () => (
  <div className="container mt-3 w-50">
    <h2>Day 1 Daily Challenge</h2>
    <div className="card p-3">
      <Carousel>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduYA9.jpg" alt="Hong Kong" />
              <p className="legend">Hong Kong</p>
          </div>
          <div>
              <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" alt="Macao" />
              <p className="legend">Macao</p>
          </div>
      </Carousel>
      <small>(Note: Run `npm install react-responsive-carousel` for this to work)</small>
    </div>
  </div>
);
export default DailyChallenge;