import React, { useMemo } from 'react';
import cross from '../../../images/about/icon-plus.svg';

const MarketingTeam = [
  {
    id: 'annalin',
    name: 'Anna Lin',
    role: 'Co-Director of Marketing',
    link: 'https://www.linkedin.com/in/anna-lin-/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728019116/designco/about/fa24-photos/anna_cby3tq.webp',
  },
  {
    id: 'laurenpak',
    name: 'Lauren Pak',
    role: 'Co-Director of Marketing',
    link: 'https://www.linkedin.com/in/lauren-pak-18b9a7229/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728019111/designco/about/fa24-photos/lauren_gdzrr0.webp',
  },
  {
    id: 'janzlercunanan',
    name: 'Janzler Cunanan',
    role: 'Media Coordinator',
    link: 'https://www.linkedin.com/in/janzler/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728019111/designco/about/fa24-photos/janzler_s9uhdc.webp',
  },
  {
    id: 'justinkim',
    name: 'Justin Kim',
    role: 'Media Coordinator',
    link: 'https://www.linkedin.com/in/justindkim1060/',
    gradYear: 2026,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728019111/designco/about/fa24-photos/justin_oludqt.webp',
  },
  {
    id: 'teresanguyen',
    name: 'Teresa Nguyen',
    role: 'Media Coordinator',
    link: 'https://www.linkedin.com/in/teresatnguyen/',
    gradYear: 2025,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728019111/designco/about/fa24-photos/teresa_edkq9b.webp',
  },
  {
    id: 'nicolezhi',
    name: 'Nicole Zhi',
    role: 'Content Writer',
    link: 'https://www.linkedin.com/in/nicolezhi/',
    gradYear: 2026,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728019111/designco/about/fa24-photos/nicole_svgwcp.webp',
  },
  {
    id: 'soniaklein',
    name: 'Sonia Klein',
    role: 'Content Writer',
    link: 'https://www.linkedin.com/in/sonia-klein-ba0737216/',
    gradYear: 2026,
    img: 'https://res.cloudinary.com/design-co-ucsd/image/upload/v1728019112/designco/about/fa24-photos/sonia_y4ss3d.webp',
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

export default Marketing;
