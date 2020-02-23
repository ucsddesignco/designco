import React from "react";
import { spacer2, spacer1, spacer3, spacer4 } from "../constants";
import { Container, Row, Col, Visible, Hidden } from "react-grid-system";

class Role extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hideSidePanel: true };
    this.handlePanel = this.handlePanel.bind(this);
    this.escFunction = this.escFunction.bind(this);
  }

  handlePanel = () => {
    console.log("3");
    // show/hide panel
    this.setState(state => ({
      hideSidePanel: !state.hideSidePanel
    }));

    // reset panel scroll position to the top
    for (let i = 0; i < document.getElementsByClassName("panel").length; i++) {
      document.getElementsByClassName("panel")[i].scrollTop = 0;
    }
  }

  // enables HTML styling for text input from roles.js
  htmlDecode(input){
    var e = document.createElement('div');
    e.innerHTML = input;
    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
  }

  escFunction(event){
    console.log("1");
    if(event.keyCode === 27) {
      console.log("2");
      if(!this.state.hideSidePanel) {
        this.setState(state => ({
          hideSidePanel: !state.hideSidePanel
        }));
      }
    }
  }
  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount(){
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {
    return (
      <div>
        <Col className="roles" style={{ marginBottom: spacer2 }}>
          <a onClick={ this.handlePanel }>
            <span>{this.props.team} Team – {this.props.position}</span>
          </a>
          <a onClick={ this.handlePanel }>
            <img src={require("../images/join/arrow.svg")}/>
          </a>
        </Col>

        {/* darken background */}
        <div className={ this.state.hideSidePanel ? "panel-darken panel-darken-close" : "panel-darken panel-darken-open"} onClick={ this.handlePanel }></div>

        {/* side panel */}
        <div style={ {scrollTop: "0"} } className={ this.state.hideSidePanel ? "panel-wrap panel-wrap-close" : "panel-wrap panel-wrap-open"}>
          <div className="panel">
            <div className="panelNav">
              <span className="x" onClick={ this.handlePanel }></span>
              <div className="apply">
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeqIE9sX8vqb-74C4h_qcNtaCTwgLfILjtoJcgvsnVeGFQxBQ/viewform?usp=sf_link" target="_blank" style={{ textDecoration: "none" }}>
                  Apply
                </a>
              </div>
            </div>
            <div className="panel-content-container">
              <h1 style={{ marginBottom: spacer3 }}>{this.props.team} Team – {this.props.position}</h1>
              <p style={{ marginBottom: spacer3 }}>
                {this.props.description}
              </p>
              
              <h2 style={{ marginBottom: spacer2 }}>You Will Be</h2>
              <div style={{ marginLeft: spacer2, marginBottom: spacer3 }}>
                <p style={{ marginBottom: spacer1 }}
                  dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.duty) }}
                />
              </div>

              <h2 style={{ marginBottom: spacer2 }}>Other General Responsibilites</h2>
              <div style={{ marginLeft: spacer2, marginBottom: spacer3 }}>
                <p style={{ marginBottom: spacer1 }}
                  dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.general) }}
                />
              </div>

              <h2 style={{ marginBottom: spacer2 }}>What You Can Offer</h2>
              <div style={{ marginLeft: spacer2, marginBottom: spacer3 }}>
                <p style={{ marginBottom: spacer1 }}
                  dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.offer) }}
                />
              </div>

              <h2 style={{ marginBottom: spacer2 }}>Extra Credit For</h2>
              <div style={{ marginLeft: spacer2, marginBottom: spacer3 }}>
                <p style={{ marginBottom: spacer1 }}
                  dangerouslySetInnerHTML={{ __html: this.htmlDecode(this.props.ec) }}
                />
              </div>

              <h2 style={{ marginBottom: spacer3 }}>
                Meet your potential teammate, {this.props.name}!
              </h2>
              <Row>
                <Col md={6} className="roleHeadshot" style={{ marginBottom: spacer3 }}>
                  <img src={require("../images/join/" + this.props.name + ".png")} width="100%" alt={ this.props.name }/>
                </Col>
                <Col md={6}>
                  <h3 style={{ marginBottom: spacer2 }}>
                    {this.props.q1}
                  </h3>
                  <p style={{ marginBottom: spacer3 }}>
                    {this.props.a1}
                  </p>

                  <h3 style={{ marginBottom: spacer2 }}>
                    {this.props.q2}
                  </h3>
                  <p style={{ marginBottom: spacer3 }}>
                    {this.props.a2}
                  </p>

                  <h3 style={{ marginBottom: spacer2 }}>
                    {this.props.q3}
                  </h3>
                  <p style={{ marginBottom: spacer3 }}>
                    {this.props.a3}
                  </p>

                  <h3 style={{ marginBottom: spacer2 }}>
                    {this.props.q4}
                  </h3>
                  <p style={{ marginBottom: spacer2 }} 
                    dangerouslySetInnerHTML={{ __html: this.props.a4 ? this.htmlDecode(this.props.a4) : "" }}
                  />
                </Col>
              </Row>
            </div>
          </div> 
        </div>
      </div>
    );
  }
}

export default Role;
