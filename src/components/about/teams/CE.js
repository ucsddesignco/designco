import React from "react";
import Members from "../Members";
import Member from "../../../components/MemberTiles";
import { Grid } from "@material-ui/core";
import cross from '../../../images/about/icon-plus.svg';
import { Container, Row, Col } from "react-grid-system";
import { team } from "../../../team.js"

const teamList = team.map((member) => (
  <Col sm={6} md={4}>
    <Member
      id={member.id}
      name={member.name}
      position={member.role}
      year={member.gradYear}
      link={member.link}
    />
  </Col>
));

function CE({ member, index, toggleTEAM }) {

    const CETeam = [
      {
        id: "emilyyu",
        name: "Emily Yu",
        role: "Director of Community",
        link: "https://www.linkedin.com/in/emily-yu-365943225/",
        gradYear: 2025,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837892/designco/about/team-gifs/emilyyu_zp81xq.gif",
      },
      {
        id: "grace",
        name: "Grace Lin",
        role: "Community Engagement Director",
        link: "https://www.linkedin.com/in/graceerya/",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837895/designco/about/team-gifs/grace_oswykx.gif",
      },
      {
        id: "jonathan",
        name: "Jonathan Lum",
        role: "Community Engagement Director",
        link: "https://www.linkedin.com/in/jonathan-lum/",
        gradYear: 2023,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837918/designco/about/team-gifs/jonathan_xodsgp.gif",
      },
      {
        id: "sabrina",
        name: "Sabrina Mao",
        role: "Community Engagement Director",
        link: "https://www.linkedin.com/in/sabrina-mao-2aba501b8/",
        gradYear: 2024,
        gif: "https://res.cloudinary.com/design-co-ucsd/image/upload/v1663837929/designco/about/team-gifs/sabrina_ibfl8t.gif",
      },
  ]

  return (
    <div>
        <div 
            className="team-border"
            key={index}
            onClick={() => toggleTEAM(index)}
        >
            <div className="team-container-top">
                <div className="team-title">{member.team}</div>
                <img className={"team-cross" + (member.open ? "-open" : "")} src={cross}  />
            </div>
        </div>
        <div className={"team " + (member.open ? "open" : "")}>
            <div className="team-border-container">
                <div className="team-container">
                    <div className="gridContainer" >
                        {CETeam.map((item) => (
                          <div className="team-card">
                            <a href={item.link} target="_blank">
                              <img className="team-card-image" src={item.img} alt="" />
                            </a>
                            <div className="team-card-name">{item.name}</div>
                            <div className="team-card-title">{item.role}</div>
                            <div className="team-card-year">{item.gradYear}</div>
                          </div>
                        ))}
                    </div>
                </div>     
            </div>
        </div>
    </div>
  );
}

export default CE;