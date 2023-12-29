import React, { useState, useMemo } from "react";
import Members from "../Members";
import Member from "../../../components/MemberTiles";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";
import { Container, Row, Col } from "react-grid-system";
import { team } from "../../../team.js";

const CETeam = [
  {
    id: "emilyyu",
    name: "Emily Yu",
    role: "Director of Community Engagement",
    link: "https://www.linkedin.com/in/emily-yu-365943225/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822357/designco/about/sp23-photos/EmilyYu_b4wdlu.webp",
  },
  {
    id: "hieu",
    name: "Hieu Phan",
    role: "Community Engagement Coordinator",
    link: "https://www.linkedin.com/in/hieuphanv",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822359/designco/about/sp23-photos/Hieu_k7uug7.webp",
  },
  {
    id: "sabrina",
    name: "Sabrina Mao",
    role: "Community Engagement Coordinator",
    link: "https://www.linkedin.com/in/sabrina-mao-2aba501b8/",
    gradYear: 2024,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822359/designco/about/sp23-photos/Sabrina_nosaqb.webp",
  },
  {
    id: "fiona",
    name: "Fiona Tang",
    role: "Community Engagement Coordinator",
    link: "https://www.linkedin.com/in/fionaltang",
    gradYear: 2024,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822358/designco/about/sp23-photos/Fiona_crzgx9.webp",
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
