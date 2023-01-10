import BandCard from "./BandCard";
import { useState } from "react";

function BandsList(props) {
  // const [favourite, setFavourite] = useState([]);
  // //const [favouriteStatus, setFavouriteStatus] = useState(false);

  // const addBandToFavourites = (e) => {
  //   console.log(e.target.name);

  //   const favouriteList = props.filteredList.filter((item) => {
  //     item.bandName === e.target.name;
  //     console.log("bandfav", item.bandName);
  //   });
  //   setFavourite(favouriteList);
  //   // const favouriteList = props.filteredList.map((item) => {
  //   //   if (item.bandName === e.target.name) {
  //   //     return { ...item, favourite: !item.favourite };
  //   //   } else {
  //   //     return { ...item };
  //   //   }
  //   // });
  //   // setFavourite(favouriteList);
  // };
  //console.log("favourites", favourite);

  return (
    <div className="bands-list">
      {props.filter.stage === "all" && props.filter.day === "all" && props.filter.search ? <h2> Results for "{props.filter.search}"</h2> : props.filter.stage === "all" && props.filter.day === "all" ? <h2>Full lineup</h2> : null}
      {props.filter.search && props.filter.stage === "Midgard" && props.filter.day === "all" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.stage === "Midgard" && props.filter.day === "all" ? <h2>Midgard</h2> : null}
      {props.filter.search && props.filter.stage === "Vanaheim" && props.filter.day === "all" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.stage === "Vanaheim" && props.filter.day === "all" ? <h2>Vanaheim</h2> : null}
      {props.filter.search && props.filter.stage === "Jotunheim" && props.filter.day === "all" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.stage === "Jotunheim" && props.filter.day === "all" ? <h2>Jotunheim</h2> : null}
      {props.filter.search && props.filter.day === "Monday" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.day === "Monday" ? <h2>Monday, July 17th</h2> : null}
      {props.filter.search && props.filter.day === "Tuesday" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.day === "Tuesday" ? <h2>Tuesday, July 18th</h2> : null}
      {props.filter.search && props.filter.day === "Wednesday" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.day === "Wednesday" ? <h2>Wednesday, July 19th</h2> : null}
      {props.filter.search && props.filter.day === "Thursday" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.day === "Thursday" ? <h2>Thursday, July 20th</h2> : null}
      {props.filter.search && props.filter.day === "Friday" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.day === "Friday" ? <h2>Friday, July 21st</h2> : null}
      {props.filter.search && props.filter.day === "Saturday" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.day === "Saturday" ? <h2>Saturday, July 22nd</h2> : null}
      {props.filter.search && props.filter.day === "Sunday" ? <h2> Results for "{props.filter.search}"</h2> : props.filter.day === "Sunday" ? <h2>Sunday, July 23rd</h2> : null}
      <div className="bands-list-wrapper">
        {props.filteredList.map((show) => {
          return show.act != "break" ? (
            <BandCard
              start={show.start}
              end={show.end}
              stage={show.stage}
              day={show.day}
              act={show.act}
              bandName={show.act}
              key={show.act}
              id={Date.now()}
              addBandToFavourites={props.addBandToFavourites}
              removeBandFromFavourites={props.removeBandFromFavourites}
              favouriteList={props.favouriteList}
              data={props.filteredList}
            />
          ) : null;
        })}
      </div>
    </div>
  );
}

export default BandsList;
