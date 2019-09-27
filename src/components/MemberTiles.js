import React from "react";
import { spacer2, spacer1, spacer3 } from "../constants";

class MemberTiles extends React.Component {
  render() {
    return (
      <div class="members" style={{ marginBottom: spacer3 }}>
        <a href={this.props.link} target="blank">
          <img
            src={require(`../images/team/${this.props.id}.png`)}
            alt={this.props.name}
          />
        </a>

        <h3 style={{ marginTop: spacer1 }}>{this.props.name} </h3>
        <p className="text_small" style={{ marginTop: spacer1 }}>
          {" "}
          {this.props.position}{" "}
        </p>
        <p className="text_caption" style={{ marginTop: spacer1 }}>
          {this.props.year}
        </p>
      </div>
    );
  }
}

export default MemberTiles;
