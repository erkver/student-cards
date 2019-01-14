import React from "react";
import "../styles/StudentCard.scss"

const StudentCard = ({name, from, funFact, cityOrCountry, indoorsOrOutdoors, travel, topsOrSubway, dogOrCat, index, total}) => {
  return (
    <div className="main-card-cont">
      <p id="index">{index} of {total}</p>
      <h1>{name}</h1>
      <div className="info-cont">
        <h3>From:</h3>
        <h4>{from}</h4>
      </div>
      <div className="info-cont">
        <h3>Fun Fact:</h3>
        <h4>{funFact}</h4>
      </div>
      <h2 className="q-list">Would you rather...</h2>
      <div className="answer-cont">
        <h2>...live in the city or country?</h2>
        <p>{cityOrCountry ? cityOrCountry : "N/A"}</p>
      </div>
      <div className="answer-cont">
        <h2>...be indoors or outdoors?</h2>
        <p>{indoorsOrOutdoors ? indoorsOrOutdoors : "N/A"}</p>
      </div>
      <div className="answer-cont">
        <h2>...travel everyday or never leave home?</h2>
        <p>{travel ? travel : "N/A"}</p>
      </div>
      <div className="answer-cont">
        <h2>...eat at Top's or Subway?</h2>
        <p>{topsOrSubway ? topsOrSubway : "N/A"}</p>
      </div>
      <div className="answer-cont">
        <h2>...have a dog or cat?</h2>
        <p>{dogOrCat ? dogOrCat : "N/A"}</p>
      </div>
    </div>
  )
}

export default StudentCard;