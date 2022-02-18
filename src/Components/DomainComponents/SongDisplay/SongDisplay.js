import React from 'react';
import Chord from "../Chord/Chord";
import {commaSeparateList, newLineSeparateList} from "../../../lib/rendering-functions";
import '../../../styles.css'

class SongDisplay extends React.Component {
    render() {
        return (
            <div className={'containment-div'}>
                <h2>Generated Song Template</h2>
                <div className={'info-section-div'}>
                    <h3>Tempo</h3>
                    <p>{this.props.songData.tempo}</p>
                </div>
                <div className={'info-section-div'}>
                    <h3>Time Signature</h3>
                    <p>{this.props.songData.signature}</p>
                </div>
                <div className={'info-section-div'}>
                    <h3>Key</h3>
                    <p>{this.props.songData.key}</p>
                </div>
                <div className={'info-section-div'}>
                    <h3>Scale</h3>
                    <p>{this.props.songData.scale ? this.props.songData.scale.name : null}</p>
                    <div>{this.props.songData.scale ? commaSeparateList(this.props.songData.scale.notes) : null}</div>
                </div>
                <div className={'info-section-div'}>
                    <h3>Chords</h3>
                    <div>{this.props.songData.chords ? this.props.songData.chords.map((chord) => {
                        return <Chord chord={chord} key={chord.degree}/>
                    }) : null}</div>
                </div>
                <div className={'info-section-div'}>
                    <h3>Number of Instruments</h3>
                    <p>{this.props.songData.numberOfInstruments}</p>
                </div>
                <div className={'info-section-div'}>
                    <h3>Dynamics</h3>
                    <div>{this.props.songData.dynamics ? newLineSeparateList(this.props.songData.dynamics) : null}</div>
                </div>
                <div className={'info-section-div'}>
                    <h3>Song Structure</h3>
                    <p>{this.props.songData.structure}</p>
                </div>
            </div>
        );
    }
}

export default SongDisplay