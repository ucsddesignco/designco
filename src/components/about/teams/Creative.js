import React, { useMemo } from "react";
import Members from "../Members";
import { Grid } from "@material-ui/core";
import cross from "../../../images/about/icon-plus.svg";

const CreativeTeam = [
  {
    id: "megan",
    name: "Megan Tan",
    role: "Co-Creative Director",
    link: "http://linkedin.com/in/megan-tan-31a2471a5",
    gradYear: 2023,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837980/designco/about/team-gifs/megan_cpulwb.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182835/designco/about/team-photos/megan_vom41e.png",
  },
  {
    id: "juna",
    name: "Juna Kim",
    role: "Co-Creative Director",
    link: "https://www.junakim.design",
    gradYear: 2023,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837926/designco/about/team-gifs/juna_lsgx1m.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182837/designco/about/team-photos/juna_wkpohp.png",
  },
  {
    id: "leann",
    name: "Leann Gamboa",
    role: "Visual + Brand Designer, Web Developer",
    link: "https://www.linkedin.com/in/leanngamboa/",
    gradYear: 2023,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837972/designco/about/team-gifs/leann_ijibfs.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182835/designco/about/team-photos/leann_y4oc0e.png",
  },
  {
    id: "ricky",
    name: "Ricardo Sedano",
    role: "Visual + Brand Designer",
    link: "linkedin.com/in/ricardo-sedano",
    gradYear: 2023,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837932/designco/about/team-gifs/ricky_ennyxu.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182844/designco/about/team-photos/ricky_p6o1js.png",
  },
  {
    id: "thoa",
    name: "Thoa Nguyen",
    role: "Visual + Brand Designer",
    link: "https://www.linkedin.com/in/thoa-nguyen-99a473217/",
    gradYear: 2025,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837874/designco/about/team-gifs/thoa_irqejb.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182850/designco/about/team-photos/thoa_guvldl.png",
  },
  {
    id: "shawn",
    name: "Shawn Kim",
    role: "Web Dev Lead",
    link: "https://www.linkedin.com/in/shawn-j-kim/",
    gradYear: 2023,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663831878/designco/about/team-gifs/shawn_up1ai3.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182845/designco/about/team-photos/shawn_soi3ap.png",
  },
  {
    id: "meshach",
    name: "Meshach Adoe",
    role: "Web Developer",
    link: "https://www.linkedin.com/in/meshachadoe",
    gradYear: 2023,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837984/designco/about/team-gifs/meshach_oujofy.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182834/designco/about/team-photos/meshach_czxqsg.png",
  },
  {
    id: "tracey",
    name: "Tracey Du",
    role: "Web Developer",
    link: "https://www.linkedin.com/in/traceydu/",
    gradYear: 2024,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837866/designco/about/team-gifs/tracey_jwzaar.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182853/designco/about/team-photos/tracey_tdaqmd.png",
  },
  {
    id: "brian",
    name: "Brian Liu",
    role: "Web Developer",
    link: "https://brianliu1.myportfolio.com",
    gradYear: 2024,
    gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837867/designco/about/team-gifs/brian_figech.gif",
    img: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1665182850/designco/about/team-photos/brian_hh46rt.png",
  },
];

function Creative({ member, index, toggleTEAM }) {
  const teamList = useMemo(() =>
    CreativeTeam.map((item) => (
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

export default Creative;
