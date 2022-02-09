import React from 'react';

class SongDisplay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.table(this.props.songdata)
        return (
            <div>
                <h2>OUTPUT DUDE</h2>
                <span>Tempo: {this.props.songdata.tempo}</span><br/>
                <span>Key: {this.props.songdata.key}</span><br/>
                <span>Time Signature: {this.props.songdata.signature}</span><br/>
                <span>Number of Instruments: {this.props.songdata.numberOfInstruments}</span><br/>
                {/*<span>Dynamics:</span>*/}
                {/*<ul v-for="(dynamic, index) in songData.dynamics" :key="index">{{ dynamic }}</ul>*/}
                {/*<span>Scale:</span><br/>*/}
                {/*<li>*/}
                {/*    <ul>{this.props.songdata.scale.name}</ul>*/}
                {/*    <ul>{this.props.songdata.scale.notes}</ul>*/}
                {/*</li>*/}
                {/*<span>Chords:</span><br>*/}
                {/*<Chord v-for="(chord , index) in songData.chords" :key="index" :chord=chord></Chord>*/}
                {/*<span>Song Structure:</span><br/>*/}
                {/*<li>*/}
                {/*    <ul>{this.props.songdata.structure}</ul>*/}
                {/*</li>*/}
            </div>
        );
    }
}

export default SongDisplay