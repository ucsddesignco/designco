import React, { useMemo } from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";

const IRTeam = [
  {
    id: "winston",
    name: "Winston Jeffries",
    role: "Director of Industry Relations",
    link: "https://www.linkedin.com/in/winstonjeffries",
    gradYear: 2026,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822353/designco/about/sp23-photos/Winston_fdsez0.webp",
  },
  {
    id: "elise",
    name: "Elise Kim",
    role: "Former Industry Relations Director",
    link: "https://www.linkedin.com/in/eliserosek",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822352/designco/about/sp23-photos/Elise_l0fvst.webp",
  },
  {
    id: "kairi",
    name: "Kairi Tanaka",
    role: "Industry Relations Coordinator",
    link: "https://www.linkedin.com/in/kairi-tanaka",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822353/designco/about/sp23-photos/Kairi_esabn8.webp",
  },
  {
    id: "micah",
    name: "Micah Andres",
    role: "Industry Relations Coordinator",
    link: "https://www.linkedin.com/in/micah-andres213",
    gradYear: 2026,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822364/designco/about/sp23-photos/Micah_i0dgib.webp",
  },
  
];

function IR({ member, index, toggleTEAM }) {
  const teamList = useMemo(() =>
    IRTeam.map((item) => (
      <div className="team-card">
        <a href={item.link} target="_blank" rel="noreferrer">
          <img
            className="team-card-image"
            src={item.img}
            alt=""
            loading="lazy"
          />
        </a>
        <div className="team-card-name">{item.name}</div>
        <div className="team-card-title">{item.role}</div>
        <div className="team-card-year">{item.gradYear}</div>
      </div>
    ))
  );

  return (
    <div>
      <div
        className="team-border"
        key={index}
        onClick={() => toggleTEAM(index)}
      >
        <div className="team-container-top">
          <div className="team-title">{member.team}</div>
          <img
            className={"team-cross" + (member.open ? "-open" : "")}
            src={cross}
          />
        </div>
      </div>
      <div className={"team " + (member.open ? "open" : "")}>
        <div className="team-border-container">
          <div className="team-container">
            <div className="gridContainer">{teamList}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IR;
