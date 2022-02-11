import React from 'react';
import SongDisplay from '../DomainComponents/SongDisplay/SongDisplay'
import InputForm from "../DomainComponents/InputForm/InputForm";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.setSongData = this.setSongData.bind(this);
        this.state = {songData: {}};
    }

    setSongData(songData) {
        this.setState({
            songData: songData
        });
    }

    render() {
        const songData = this.state.songData;
        return (
            <div>
                <h1>Song Randomizer</h1>
                <InputForm setSongData={this.setSongData}/>
                <SongDisplay songData={songData}/>
            </div>
        );
    }
}
