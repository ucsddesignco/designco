import React, { useState, useMemo } from "react";
import Members from "../Members";
import Member from "../../../components/MemberTiles";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";
import { Container, Row, Col } from "react-grid-system";
import { team } from "../../../team.js";

const CETeam = [
  {
    id: "lenapham",
    name: "Lena Pham",
    role: "Director of Community Engagement",
    link: "https://www.linkedin.com/in/lenaphamm/",
    gradYear: 2026,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728016588/designco/about/fa24-photos/Lena_valer7.webp",
  },
  {
    id: "daniellu",
    name: "Daniel Lu",
    role: "Community Engagement Coordinator",
    link: "https://www.linkedin.com/in/dan-iel-lu/",
    gradYear: 2027,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728016588/designco/about/fa24-photos/Daniel_kr0fwg.webp",
  },
  {
    id: "irenejoo",
    name: "Irene Joo",
    role: "Community Engagement Coordinator",
    link: "https://www.linkedin.com/in/irenejoo/",
    gradYear: 2026,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728016588/designco/about/fa24-photos/Irene_hjb958.webp",
  },
  {
    id: "shinhyepark",
    name: "Shinhye Park",
    role: "Community Engagement Coordinator",
    link: "https://www.linkedin.com/in/shinhye-park-2ss3/",
    gradYear: 2026,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728016588/designco/about/fa24-photos/Shinhye_hyui6o.webp",
  },
];

function CE({ member, index, toggleTEAM }) {
  const teamList = useMemo(() =>
    CETeam.map((item) => (
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

export default CE;
