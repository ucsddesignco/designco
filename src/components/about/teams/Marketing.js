import React, { useMemo } from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";

const MarketingTeam = [
  {
    id: "frances",
    name: "Frances Sy",
    role: "Director of Marketing",
    link: "https://www.linkedin.com/in/francesasy",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822370/designco/about/sp23-photos/Frances_fljypo.webp",
  },
  {
    id: "emilyjao",
    name: "Emily Jao",
    role: "Former Director of Marketing",
    link: "https://www.linkedin.com/in/emily-jao",
    gradYear: 2024,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822369/designco/about/sp23-photos/Emily_ynky2j.webp",
  },
  {
    id: "brian",
    name: "Brian Liu",
    role: "Media Coordinator",
    link: "https://www.linkedin.com/in/brianliu1412",
    gradYear: 2024,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822363/designco/about/sp23-photos/Brian_akb62f.webp",
  },
  {
    id: "teresea",
    name: "Teresa Nguyen",
    role: "Media Coordinator",
    link: "https://www.linkedin.com/in/teresatnguyen",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822361/designco/about/sp23-photos/Teresa_ypnpye.webp",
  },
  {
    id: "sophie",
    name: "Sophie Huynh",
    role: "Content Writer",
    link: "https://www.linkedin.com/in/sophiehuynhh",
    gradYear: 2026,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822372/designco/about/sp23-photos/Sophie_zvfrvh.webp",
  },
  {
    id: "lauren",
    name: "Lauren Pak",
    role: "Content Writer",
    link: "https://www.linkedin.com/in/lauren-pak-18b9a7229",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822372/designco/about/sp23-photos/Lauren_m9zx4e.webp",
  },
];

function Marketing({ member, index, toggleTEAM }) {
  const teamList = useMemo(() =>
    MarketingTeam.map((item) => (
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

export default Marketing;
