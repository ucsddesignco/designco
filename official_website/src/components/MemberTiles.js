import React from 'react';

class MemberTiles extends React.Component{
    render(){
        return(
            <div class="members" style={this.props.style}>
                <a href={this.props.portfolio} target="blank">
                    <img src= {this.props.imageLink} alt= {this.props.name}/>
                </a>
                
                <h3>{this.props.name} </h3>
                <div className="positionName"> {this.props.position} </div>
                <div className="year"> {this.props.year} </div>
                <br style={{clear: "both"}}/>
            </div>
        );
    }
}

export default MemberTiles;