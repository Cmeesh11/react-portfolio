import React from 'react';
import HoverableCard from './HoverableCard';

import dailyPlanner from '../../assets/images/daily-planner-img.png';
import ecommerce from '../../assets/images/E-Commerce.png';
import inneed from '../../assets/images/inneed.png';
import javascriptQuiz from '../../assets/images/javascript_quiz.png';
import marvel from '../../assets/images/Marvel-Typing-Trainer.png';
import techBlog from '../../assets/images/Tech-blog.png';
import weatherForecast from '../../assets/images/weather_forecast.png';

import '../../styles.css';

function Portfolio() {
  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-4 col-md-6">
          <a href="https://github.com/Cmeesh11/Daily-Planner">
            <HoverableCard imageSrc={dailyPlanner} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="https://github.com/Cmeesh11/E-Commerce-Back-end">
            <HoverableCard imageSrc={ecommerce} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="https://github.com/Cmeesh11/InNeed">
            <HoverableCard imageSrc={inneed} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="https://github.com/Cmeesh11/Javascript-Quiz">
            <HoverableCard imageSrc={javascriptQuiz} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="https://github.com/Cmeesh11/Marvel-Typing-Trainer">
            <HoverableCard imageSrc={marvel} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="https://github.com/Cmeesh11/Tech-Blog">
            <HoverableCard imageSrc={techBlog} />
          </a>
        </div>
        <div className="col-lg-4 col-md-6">
          <a href="https://github.com/Cmeesh11/Weather-Forecast">
            <HoverableCard imageSrc={weatherForecast} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
