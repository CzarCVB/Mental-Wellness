import "./QFlip.scss";
import { Fragment } from "react";
import cardBack from "../../asset/img/cardBack.jpg"
import { NavLink } from "react-router-dom";
import { questions } from "../../asset/data/data";

const FlipCard = (props) => {
  const flipCardData = questions.map((item, i) => {
    return (
      <div>
        <div class="card-containerzz">
          <div class="cardoza">
            <div class="frontey">
              <h2 class="sub-titlezz">Question {i+1}</h2>
              <h1 class="titlezz">{item.q}</h1>
              <img id="imageCard" src={cardBack} alt="" />
            </div>
            <div class="backey">
              <h3 class="synopsisz">Answer:</h3>
              <p id="paraMain">{item.a}</p>
              <NavLink to = "/consult#top">
              <div class="conzbtn">
                <i class="fa fa-user"></i>Consult A Doctor?
              </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <Fragment>{flipCardData}</Fragment>;
};

export default FlipCard;
