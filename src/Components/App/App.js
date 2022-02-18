import React from 'react';
import SongDisplay from '../DomainComponents/SongDisplay/SongDisplay'
import InputForm from "../DomainComponents/InputForm/InputForm";
import "../../styles.css";

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.setSongData = this.setSongData.bind(this);
        this.state = {songData: {}};
    }

    setSongData(songData) {
        this.setState({
            songData: songData,
            songHasGenerated: true
        });
    }

    render() {
        const songHasGenerated = this.state.songHasGenerated;
        const songData = this.state.songData;
        return (
            <div className={'invisible-containment-div'}>
                <div className={'containment-div'}>
                    <h1>Song Randomizer</h1>
                    <p><a href={'https://github.com/mradamgbeck/SongRandomizer'}>Github</a></p>
                </div>
                <InputForm setSongData={this.setSongData}/>
                {songHasGenerated ? <SongDisplay songData={songData}/> : null}
            </div>
        );
    }
}
