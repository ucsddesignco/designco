import React, { useMemo } from 'react';
import Members from '../Members';
import { Grid } from '@material-ui/core';
import cross from '../../../images/about/icon-plus.svg';

const CreativeTeam = [
  {
    id: 'thoa',
    name: 'Thoa Nguyen',
    role: 'Director of Creative',
    link: 'https://www.linkedin.com/in/thoanguyen',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822365/designco/about/sp23-photos/Thoa_rwbx6w.webp',
  },
  {
    id: 'widya',
    name: 'Made Widyadhari',
    role: 'Visual + Brand Designer',
    link: 'https://www.linkedin.com/in/made-widyadhari',
    gradYear: 2024,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822366/designco/about/sp23-photos/Widya_fqrqpx.webp',
  },
  {
    id: 'katie',
    name: 'Katie Murakoshi',
    role: 'Visual + Brand Designer',
    link: 'https://www.linkedin.com/in/katie-murakoshi-571280273',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822369/designco/about/sp23-photos/Katie_rexdfv.webp',
  },
  {
    id: 'luca',
    name: 'Luca Pfister',
    role: 'Visual + Brand Designer',
    link: 'https://www.linkedin.com/in/lucapfister021',
    gradYear: 2026,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822363/designco/about/sp23-photos/Luca_smobnb.webp',
  },
  {
    id: 'tracey',
    name: 'Tracey Du',
    role: 'Web Developer',
    link: 'https://www.linkedin.com/in/traceydu/',
    gradYear: 2024,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822366/designco/about/sp23-photos/Tracey_gcsxws.webp',
  },
  {
    id: 'brian',
    name: 'Brian Liu',
    role: 'Web Developer',
    link: 'https://www.linkedin.com/in/brianliu1412',
    gradYear: 2024,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822363/designco/about/sp23-photos/Brian_akb62f.webp',
  },
  {
    id: 'aaron',
    name: 'Aaron Chan',
    role: 'Web Developer',
    link: 'https://www.linkedin.com/in/aaronchan32/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1703822367/designco/about/sp23-photos/Aaron_royi1n.webp',
  },
];

function Creative({ member, index, toggleTEAM }) {
  const teamList = useMemo(() =>
    CreativeTeam.map((item) => (
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
            className={'team-cross' + (member.open ? '-open' : '')}
            src={cross}
          />
        </div>
      </div>
      <div className={'team ' + (member.open ? 'open' : '')}>
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
