import React, { useState } from "react";
import Creative from "../teams/Creative";
import CE from "../teams/CE";
import IR from "../teams/IR";
import Marketing from "../teams/Marketing";
import Internal from "../teams/Internal";
import './styles.scss'

function Accordion() {
  const [creative, setcreative] = useState([
    {
      team: "Creative",
      open: false,
    }
  ]);

  const [ce, setce] = useState([
    {
      team: "Community Engagement",
      open: false,
    }
  ]);

  const [ir, setir] = useState([
    {
      team: "Industry Relations",
      open: false,
    }
  ]);

  const [marketing, setmarketing] = useState([
    {
      team: "Marketing",
      open: false,
    }
  ]);

  const [internal, setinternal] = useState([
    {
      team: "Internal",
      open: false,
    }
  ]);
    
  const toggleCE = (index) => {
    setce(
      ce.map((faq, i) => {
        if (i == index) {
          faq.open = !faq.open;
        } else {
          faq.open = false; //keeps the panel closed
        }
        return faq;
      })
    );
  };

  const toggleCreative = (index) => {
    setcreative(
      creative.map((faq, i) => {
        if (i == index) {
          faq.open = !faq.open;
        } else {
          faq.open = false; //keeps the panel closed
        }
        return faq;
      })
    );
  };

  const toggleIR = (index) => {
    setir(
      ir.map((faq, i) => {
        if (i == index) {
          faq.open = !faq.open;
        } else {
          faq.open = false; //keeps the panel closed
        }
        return faq;
      })
    );
  };

  const toggleMarketing = (index) => {
    setmarketing(
      marketing.map((faq, i) => {
        if (i == index) {
          faq.open = !faq.open;
        } else {
          faq.open = false; //keeps the panel closed
        }
        return faq;
      })
    );
  };

  const toggleInternal = (index) => {
    setinternal(
      internal.map((faq, i) => {
        if (i == index) {
          faq.open = !faq.open;
        } else {
          faq.open = false; //keeps the panel closed
        }
        return faq;
      })
    );
  };

  return (
    <div>
      <div className="teams">
        {ce.map((faq, i) => (
          <CE member={faq} index={i} toggleTEAM={toggleCE} />
        ))}
        {creative.map((faq, i) => (
          <Creative member={faq} index={i} toggleTEAM={toggleCreative} />
        ))}
        {ir.map((faq, i) => (
          <IR member={faq} index={i} toggleTEAM={toggleIR} />
        ))}
        {internal.map((faq, i) => (
          <Internal member={faq} index={i} toggleTEAM={toggleInternal} />
        ))}
        {marketing.map((faq, i) => (
          <Marketing member={faq} index={i} toggleTEAM={toggleMarketing} />
        ))}
      </div>
    </div>
  );
}

export default Accordion;