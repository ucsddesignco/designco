import React from "react";
import { spacer1, spacer3 } from "../constants";

class MemberTiles extends React.Component {
  constructor(props) {
    super(props);
    this.removeDuotone = this.removeDuotone.bind(this);
    this.addDuotone = this.addDuotone.bind(this);
    this.state = { duotone: true };
  }

  removeDuotone = () => {
    this.setState({
      duotone: false,
    });
  };

  addDuotone = () => {
    this.setState({
      duotone: true,
    });
  };

  // componentDidMount() {
  //   this.props.pictures.forEach((picture) => {
  //     new Image().src = picture.fileName;
  //   });
  // }

  render() {
    return (
      <div className="members" style={{ marginBottom: spacer3 }}>
        <a href={this.props.link} target="blank">
          <img
            src={
              this.state.duotone
                ? require(`../images/team/duotone/${this.props.id}-duotone.jpg`)
                    .default
                : require(`../images/team/${this.props.id}.jpg`).default
            }
            alt={this.props.name}
            onMouseOver={this.removeDuotone}
            onMouseOut={this.addDuotone}
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
