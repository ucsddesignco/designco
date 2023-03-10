import React, { useMemo } from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";
import { team } from "../../../team";

const InternalTeam = [
  {
    id: "jodie",
    name: "Jodie Li",
    role: "Operations Director",
    link: "https://www.jodieli.site/",
    gradYear: 2023,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837969/designco/about/team-gifs/jodie_r35qrx.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182884/designco/about/team-photos/jodie_j3lvvh.png",
  },
  {
    id: "donna",
    name: "Donna Kim",
    role: "Operations Coordinator",
    link: "https://www.linkedin.com/in/dawnakim/",
    gradYear: 2023,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837953/designco/about/team-gifs/donna_rfkg32.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182885/designco/about/team-photos/donna_x8myvy.png",
  },
  {
    id: "jocelyn",
    name: "Jocelyn Horng",
    role: "Operations Coordinator",
    link: "https://www.linkedin.com/in/jocelyn-horng-2b84121b1/",
    gradYear: 2024,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837957/designco/about/team-gifs/jocelyn_jkigbr.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182886/designco/about/team-photos/jocelyn_etsjxs.png",
  },
  {
    id: "sujana",
    name: "Sujana Nagasuri",
    role: "Operations Coordinator",
    link: "https://www.linkedin.com/in/sujana-nagasuri-943493238/",
    gradYear: 2024,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837859/designco/about/team-gifs/sujana_liqfys.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182885/designco/about/team-photos/sujana_ebknos.png",
  },
  {
    id: "mandy",
    name: "Mandy Lai",
    role: "Finance Coordinator",
    link: "https://www.linkedin.com/in/mandy-lai-4179b91a1/",
    gradYear: 2025,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837968/designco/about/team-gifs/mandy_bebrif.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182884/designco/about/team-photos/mandy_izsnqe.png",
  },
];

function Internal({ member, index, toggleTEAM }) {
  const teamList = useMemo(() =>
    InternalTeam.map((item) => (
      <div className="team-card">
        <a href={item.link} target="_blank" rel="noreferrer">
          <img
            className="team-card-image"
            src={`/team-photos/${item.id}.jpg`}
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
