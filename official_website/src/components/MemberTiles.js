import React from 'react';
import { spacer2, spacer1 } from '../constants';

class MemberTiles extends React.Component{
    render(){
        return(
            <div class="members">
                <a href={this.props.portfolio} target="blank">
                    <img src= {this.props.imageLink} alt= {this.props.name}/>
                </a>
                
                <h3 style={{marginTop: spacer1}}>{this.props.name} </h3>
                <p style={{marginTop: spacer1}}> {this.props.position} </p>
                <div className="year" style={{marginTop: spacer1}}> {this.props.year} </div>
                <br style={{clear: "both"}}/>
            </div>
        );
    }
}

export default MemberTiles;