import dailyPlanner from '../../assets/images/daily-planner-img.png';
import ecommerce from '../../assets/images/E-Commerce.png';
import inneed from '../../assets/images/inneed.png';
import javascriptQuiz from '../../assets/images/javascript_quiz.png';
import marvel from '../../assets/images/Marvel-Typing-Trainer.png';
import techBlog from '../../assets/images/Tech-blog.png';
import weatherForecast from '../../assets/images/weather_forecast.png';

const style = {
  card: {
    width: '18.6rem',
  }
}

function Portfolio() {
  return(
    <div className='container'>
      <div className='row'>
        <div className="card m-3" style={style.card}>
          <img src={dailyPlanner} alt="daily planner" className="card-img"/>
        </div>
        <div className="card m-3" style={style.card}>
          <img src={ecommerce} alt="ecommerce" className="card-img"/>
        </div>
        <div className="card m-3" style={style.card}>
          <img src={inneed} alt="inneed" className="card-img"/>
        </div>
        <div className="card m-3" style={style.card}>
          <img src={javascriptQuiz} alt="Javascript Quiz" className="card-img"/>
        </div>
        <div className="card m-3" style={style.card}>
          <img src={marvel} alt="Marvel Typing Trainer" className="card-img"/>
        </div>
        <div className="card m-3" style={style.card}>
          <img src={techBlog} alt="Tech Blog" className="card-img"/>
        </div>
        <div className="card m-3" style={style.card}>
          <img src={weatherForecast} alt="Weather Forecast" className="card-img"/>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;