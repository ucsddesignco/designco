import React from "react";

class Button extends React.Component {
  static defaultProps = {
    color: "#fff",
    bgColor: "#000",
    link: "#",
    text: ""
  };
  render() {
    return (
      <div style={this.props.style}>
        <a
          className="button text_caption"
          style={{
            color: this.props.color,
            backgroundColor: this.props.bgColor,
            borderColor: this.props.bgColor
          }}
          href={this.props.link}
        >
          {this.props.text}
        </a>
      </div>
    );
  }
}

export default Button;
