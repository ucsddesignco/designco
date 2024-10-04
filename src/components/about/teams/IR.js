import React, { useMemo } from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";

const IRTeam = [
  {
    id: "tylershin",
    name: "Tyler Shin",
    role: "Director of Industry Relations",
    link: "https://www.linkedin.com/in/tylerjshin/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017862/designco/about/fa24-photos/tyler_ms1ofc.webp",
  },
  {
    id: "jennyhoang",
    name: "Jenny Hoang",
    role: "Industry Relations Coordinator",
    link: "https://www.linkedin.com/in/jennyhoangxi/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017865/designco/about/fa24-photos/jenny_b9mhqs.webp",
  },
  {
    id: "kairitanaka",
    name: "Kairi Tanaka",
    role: "Industry Relations Coordinator",
    link: "https://www.linkedin.com/in/kairi-tanaka/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017863/designco/about/fa24-photos/kairi_f8yrlp.webp",
  },
  {
    id: "laurenpak",
    name: "Lauren Pak",
    role: "Industry Relations Coordinator",
    link: "https://www.linkedin.com/in/lauren-pak-18b9a7229/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017862/designco/about/fa24-photos/lauren_quz6z3.webp",
  },

  {
    id: "winston",
    name: "Winston Jeffries",
    role: "Industry Relations Coordinator",
    link: "https://www.linkedin.com/in/winstonjeffries/",
    gradYear: 2026,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017863/designco/about/fa24-photos/winston_doqari.webp",
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
