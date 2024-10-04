import React, { useMemo } from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";
import { team } from "../../../team";

const InternalTeam = [
  {
    id: "naomikim",
    name: "Naomi Kim",
    role: "Director of Operations",
    link: "https://www.linkedin.com/in/naomi-kim-12ba19259/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728018461/designco/about/fa24-photos/naomi_fwn7on.webp",
  },
  {
    id: "ariantalai",
    name: "Ariana Talai",
    role: "Finance Coordinator",
    link: "https://www.linkedin.com/in/arianatalai/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728018461/designco/about/fa24-photos/ariana_ow9bvw.webp",
  },
  {
    id: "danielletrinh",
    name: "Danielle Trinh",
    role: "Operations Coordinator",
    link: "https://www.linkedin.com/in/danielle-trinh/",
    gradYear: 2027,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728018461/designco/about/fa24-photos/danielle_lnoflx.webp",
  },
  {
    id: "nataliekim",
    name: "Natalie Kim",
    role: "Operations Coordinator",
    link: "https://www.linkedin.com/in/kimnatalie/",
    gradYear: 2026,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728018461/designco/about/fa24-photos/natalie_hg9u66.webp",
  },
  {
    id: "junejung",
    name: "June Jung",
    role: "Operations Coordinator",
    link: "https://www.linkedin.com/in/jiyoon-june-jung/",
    gradYear: 2025,
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1728021795/designco/about/fa24-photos/june_luqsw2.webp",
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
