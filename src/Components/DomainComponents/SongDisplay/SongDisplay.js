import React from 'react';
import Chord from "../Chord/Chord";
import {commaSeparateList} from "../../../lib/rendering-functions";
class SongDisplay extends React.Component {

    render() {
        return (
            <div>
                <h2>Generated Song Template</h2>
                <h3>Tempo</h3>
                <p>{this.props.songData.tempo}</p>
                <h3>Time Signature</h3>
                <p>{this.props.songData.signature}</p>
                <h3>Key</h3>
                <p>{this.props.songData.key}</p>
                <h3>Scale</h3>
                <p>{this.props.songData.scale ? this.props.songData.scale.name : null}</p>
                <div>{this.props.songData.scale ? commaSeparateList(this.props.songData.scale.notes) : null}</div>
                <h3>Chords</h3>
                <div>{this.props.songData.chords ? this.props.songData.chords.map((chord) => {
                    return <Chord chord={chord} key={chord.degree}/>
                }) : null}</div>
                <h3>Number of Instruments</h3>
                <p>{this.props.songData.numberOfInstruments}</p>
                <h3>Dynamics</h3>
                <div>{this.props.songData.dynamics ? commaSeparateList(this.props.songData.dynamics) : null}</div>
                <h3>Song Structure</h3>
                <p>{this.props.songData.structure}</p>
            </div>
        );
    }
}

export default SongDisplay