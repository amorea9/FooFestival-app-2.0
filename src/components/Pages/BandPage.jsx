import React, { useState } from "react";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function BandPage(props) {
  //using this const to render the see more in the band card in the list view but not on the band page view
  const page = "bandPage";
  //have to use location to pass data from the link to the page
  const { state } = useLocation();
  const { pageName, data } = state;
  //location as current band
  const currentBand = state.pageName;
  const bandsList = state.data;

  const [bandDisplayed, setBandDisplayed] = useState({
    name: "",
    members: [],
    genre: "",
    logoCredits: "",
    logo: "",
    bio: "",
  });

  //fetching detailed bands data
  useEffect(() => {
    async function getBands() {
      const res = await fetch("https://morning-mountain-4570.fly.dev/bands");
      const bands = await res.json();
      //define the corresponding band that has to be displayed
      defineBand(bands);
    }
    getBands();
  }, []);

  function defineBand(bands) {
    //filtering to find the band with the same name as the current one in the path
    const bandOnDisplay = bands.filter((band) => band.name === currentBand);
    //setting the band
    setBandDisplayed({
      name: bandOnDisplay[0].name,
      members: bandOnDisplay[0].members,
      genre: bandOnDisplay[0].genre,
      logoCredits: bandOnDisplay[0].logoCredits,
      logo: bandOnDisplay[0].logo,
      bio: bandOnDisplay[0].bio,
    });
  }

  let logoPath = `https://morning-mountain-4570.fly.dev/logos/${bandDisplayed.logo}`;

  //may be https when we change to fly
  //finding the data for the currently displaying band
  const bandData = bandsList.find((band) => {
    band.act === bandDisplayed.name;
    return band;
  });

  return (
    <section id="singleBandPage">
      <h1>{bandDisplayed.name}</h1>
      <div className="single-band-content">
        <div className="band-info-wrapper">
          {bandDisplayed.logo.includes("https") ? <img src={bandDisplayed.logo} alt={bandDisplayed.logoCredits} /> : <img src={logoPath} alt={bandDisplayed.logoCredits} />}

          <h3>{bandDisplayed.name}</h3>
          <p>{bandDisplayed.bio}</p>
          <p className="genre">
            Genre : <span>{bandDisplayed.genre}</span>
          </p>
          <div className="members-section">
            {bandDisplayed.members.length > 1 ? (
              <>
                <p> Members :</p>
                <ul className="members-list" aria-label="Members:">
                  {bandDisplayed.members.map((member) => {
                    return <li key={member}>{member}</li>;
                  })}
                </ul>
              </>
            ) : (
              <p>
                {" "}
                Members : <span> {bandDisplayed.members}</span>
              </p>
            )}
          </div>
          {bandDisplayed.logoCredits && (
            <div className="credits-section">
              <p>Credits:</p>
              <p>{bandDisplayed.logoCredits}</p>
            </div>
          )}
        </div>

        <div className="live-next">
          <h3>
            See <span>{bandDisplayed.name}</span> live:
          </h3>

          <h4>
            {bandData.day}, July{" "}
            {bandData.day === "Monday"
              ? "17th"
              : bandData.day === "Tuesday"
              ? "18th"
              : bandData.day === "Wednesday"
              ? "19th"
              : bandData.day === "Thursday"
              ? "20th"
              : bandData.day === "Friday"
              ? "21st"
              : bandData.day === "Saturday"
              ? "22nd"
              : bandData.day === "Sunday"
              ? "23rd"
              : null}
          </h4>
          <div className="band-card band-page-band-card">
            <div className="band-card-content">
              <div className="band-card-main-content band-page-details-card">
                <h4>{bandData.stage}</h4>
                <p>
                  {bandData.start} - {bandData.end}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BandPage;
