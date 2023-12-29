import React, { useMemo } from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";
import { team } from "../../../team";

const InternalTeam = [
  {
    id: "naomi",
    name: "Naomi Kim",
    role: "Co-Director of Operations",
    link: "https://www.linkedin.com/in/naomi-kim-12ba19259/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822354/designco/about/sp23-photos/Naomi_wcpwc9.webp",
  },
  {
    id: "june",
    name: "June Jung",
    role: "Co-Director of Operations",
    link: "https://www.linkedin.com/in/jiyoon-june-jung",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822355/designco/about/sp23-photos/June_jd5xeo.webp",
  },
  {
    id: "jocelyn",
    name: "Jocelyn Horng",
    role: "Former Director of Operations",
    link: "https://www.linkedin.com/in/jocelyn-horng-2b84121b1/",
    gradYear: 2024,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822356/designco/about/sp23-photos/Jocelyn_z3t7qs.webp",
  },
  {
    id: "sujana",
    name: "Sujana Nagasuri",
    role: "Operations Coordinator",
    link: "https://www.linkedin.com/in/sujana-nagasuri-943493238/",
    gradYear: 2024,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822356/designco/about/sp23-photos/Sujana_zbvytu.webp",
  },
  {
    id: "mandy",
    name: "Mandy Lai",
    role: "Finance Coordinator",
    link: "https://www.linkedin.com/in/mandy-lai-4179b91a1/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822353/designco/about/sp23-photos/Mandy_ruvmvr.webp",
  },
  {
    id: "cindy",
    name: "Cindy Peng",
    role: "Operations Coordinator",
    link: "https://www.linkedin.com/in/cindy-peng-45a6131bb",
    gradYear: 2024,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822353/designco/about/sp23-photos/Cindy_ltoi5h.webp",
  },
];

function Internal({ member, index, toggleTEAM }) {
  const teamList = useMemo(() =>
    InternalTeam.map((item) => (
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

export default Internal;
