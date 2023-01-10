import React from "react";
import { useNavigate } from "react-router-dom";
import orangeArrow from "../../media/right-orange-arrow.svg";

function FavouriteCard(props) {
  const navigate = useNavigate();
  const toBandPage = () => {
    navigate(`/band-page/${props.bandName === "AC/DC" ? "ACDC" : props.bandName}`, { state: props.bandName });
  };
  return (
    <div className="band-card">
      <h3>{props.bandName}</h3>
      <div className="band-card-content">
        <div className="band-card-main-content"></div>
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

export default FavouriteCard;
