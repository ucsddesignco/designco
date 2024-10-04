import React, { useMemo } from 'react';
import cross from '../../../images/about/icon-plus.svg';

const CreativeTeam = [
  {
    id: 'lucapfister',
    name: 'Luca Pfister',
    role: 'Director of Creative',
    link: 'https://www.linkedin.com/in/lucapfister021/',
    gradYear: 2026,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017123/designco/about/fa24-photos/luca_qfyfw5.webp',
  },
  {
    id: 'allisonhuang',
    name: 'Allison Huang',
    role: 'Visual + Brand Designer',
    link: 'https://www.linkedin.com/in/allisonhuangg/',
    gradYear: 2026,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017123/designco/about/fa24-photos/allison_ragn64.webp',
  },
  {
    id: 'ivanrim',
    name: 'Ivan Rim',
    role: 'Visual + Brand Designer',
    link: 'https://www.linkedin.com/in/irim/',
    gradYear: 2026,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017123/designco/about/fa24-photos/ivan_zvvcy4.webp',
  },
  {
    id: 'kelliehuang',
    name: 'Kellie Huang',
    role: 'Visual + Brand Designer',
    link: 'https://www.linkedin.com/in/kelliehuang/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017126/designco/about/fa24-photos/kellie_cnztmf.webp',
  },
  {
    id: 'aaronchan',
    name: 'Aaron Chan',
    role: 'Lead Web Developer',
    link: 'https://www.linkedin.com/in/aaronchan32',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017125/designco/about/fa24-photos/aaron_tyaoxq.webp',
  },
  {
    id: 'edwardnew',
    name: 'Edward New',
    role: 'Web Developer',
    link: 'https://www.linkedin.com/in/edward-new/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017122/designco/about/fa24-photos/edward_qrk06b.webp',
  },
  {
    id: 'sahilgathe',
    name: 'Sahil Gathe',
    role: 'Web Developer',
    link: 'https://www.linkedin.com/in/sahilgathe/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017123/designco/about/fa24-photos/sahil_zrbce0.webp',
  },
  {
    id: 'victorhsiao',
    name: 'Victor Hsiao',
    role: 'Web Developer',
    link: 'https://www.linkedin.com/in/hsiaovictor/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728017125/designco/about/fa24-photos/victor_gxca1t.webp',
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
