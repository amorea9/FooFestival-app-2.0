import React from "react";
import { useNavigate } from "react-router-dom";
import orangeArrow from "../../media/right-orange-arrow.svg";

function FavouriteCard(props) {
  const navigate = useNavigate();
  //   const toBandPage = () => {
  //     navigate(`/band-page/${props.bandName === "AC/DC" ? "ACDC" : props.bandName}`, { state: { pageName: props.bandName, data: props.data } });
  //   };
  return (
    <div className="band-card band-page-band-card">
      <h3>{props.bandName}</h3>
      <div className="band-card-content">
        <div className="band-card-main-content"></div>
      </div>
      {props.page === "bandPage" ? null : (
        <div className="read-more-btn-container">
          <a name={props.bandName} className="read-more-btn" onClick={props.removeBandFromFavourites}>
            Remove from favourites
          </a>
        </div>
      )}
    </div>
  );
}

export default FavouriteCard;
