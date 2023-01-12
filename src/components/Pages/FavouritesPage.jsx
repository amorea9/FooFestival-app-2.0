import React from "react";
import { useOutletContext } from "react-router-dom";
import FavouriteCard from "../Reusable components/FavouriteCard";

function Favourites(props) {
  const {
    favourites: [favouriteList, setFavouriteList],
  } = useOutletContext();
  console.log(favouriteList);

  const removeBandFromFavourites = (e) => {
    let selectedFav = e.target.name;
    console.log("remove");
    console.log(selectedFav);
    setFavouriteList((prevList) => prevList.filter((band) => band !== selectedFav));
  };

  return (
    <section className="favourite-page">
      <h1>Your favourites</h1>
      {favouriteList != "" ? (
        <div className="bands-list-wrapper">
          {favouriteList.map((band) => {
            return <FavouriteCard bandName={band} removeBandFromFavourites={removeBandFromFavourites} setFavouriteList={setFavouriteList} favouriteList={favouriteList} key={band} />;
          })}
        </div>
      ) : (
        <div className="user-message">
          <h3>Looks like you have no favourites yet!</h3>
          <p>Add your favourites to your favourites list by clicking the heart when browsing the schedule.</p>
        </div>
      )}
    </section>
  );
}

export default Favourites;
