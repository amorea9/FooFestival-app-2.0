import React from "react";
import { useNavigate } from "react-router-dom";
import emptyHeart from "../../media/favourites-empty.svg";
import fullHeart from "../../media/favourites-full.svg";
import orangeArrow from "../../media/right-orange-arrow.svg";

function BandCard(props) {
  //navigate allows us to pass a path and a state (data) through the link to a different route

  const navigate = useNavigate();
  const toBandPage = () => {
    navigate(`/band-page/${props.bandName === "AC/DC" ? "ACDC" : props.bandName}`, { state: { pageName: props.bandName, data: props.data } });
  };

  return (
    <div className="band-card">
      <h3>{props.bandName}</h3>
      <div className="band-card-content">
        <div className="band-card-main-content">
          <p>Playing at {props.stage}</p>
          <p> {props.day} </p>
          <p>
            {props.start} - {props.end}
          </p>
        </div>
        <div className="band-card-side-content">
          {props.favouriteList != undefined ? (
            props.favouriteList.find((band) => band === props.bandName) ? (
              <img name={props.bandName} onClick={props.removeBandFromFavourites} className="full-heart-icon" src={fullHeart} alt="full heart icon" />
            ) : (
              <img name={props.bandName} onClick={props.addBandToFavourites} className="empty-heart-icon" src={emptyHeart} alt="empty heart icon" />
            )
          ) : null}
        </div>
      </div>
      {props.page === "bandPage" ? null : (
        <div className="read-more-btn-container">
          <a className="read-more-btn" onClick={() => toBandPage()}>
            Read more <img className="bi-arrow-right" src={orangeArrow} alt="orange arrow icon" />
          </a>
        </div>
      )}
    </div>
  );
}

export default BandCard;
