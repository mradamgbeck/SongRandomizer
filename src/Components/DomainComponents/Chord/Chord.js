import React from 'react';
import {commaSeparateList} from "../../../lib/rendering-functions";

class Chord extends React.Component {

    render() {
        return (
            <div>
                <p>{this.props.chord.degree}:{commaSeparateList(this.props.chord.triad)}</p>
            </div>
        );
    }
}

export default Chord