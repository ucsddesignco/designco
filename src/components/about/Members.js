import React, { useState } from "react";

function Members({ faq, index }) {

  return (
    <div>
        <div className="team-card"
          key={index}
        >
            <div className="team-card-name">{faq.name}</div>
            <div className="team-card-title">{faq.title}</div>
            <div className="team-card-year">{faq.year}</div>
      </div>
    </div>
  );
}

export default Members;