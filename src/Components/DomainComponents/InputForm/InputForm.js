import React from 'react';
import generateSong from '../../../lib/generate'
import defaults from "../../../config/generate-defaults";
import Checkbox from "../../FormComponents/Checkbox/Checkbox";
import '../../../styles.css'

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputParameters: defaults
        };
        this.updateSongData = this.updateSongData.bind(this);
        this.updateInputParameters = this.updateInputParameters.bind(this);

    }

    updateInputParameters(value, parameter) {
        this.setState(prevState => {
                let newState = {
                    inputParameters: {
                        ...prevState.inputParameters,
                    }
                };
                newState.inputParameters[parameter] = value
                return newState;
            }
        )
    }

    updateSongData() {
        let generatedSong = generateSong(this.state.inputParameters);
        this.props.setSongData(
            generatedSong
        )
    }

    render() {
        return (
            <div className={'containment-div'}>
                <h2>Song Input Parameters</h2>
                <div className={'info-section-div'}>
                    <h3>Tempo</h3>
                    <label className={'input-label'}>
                        Minimum Tempo:
                        <input
                            className={'input-number'}
                            type="number"
                            defaultValue={defaults.minimumTempo}
                            onChange={(e) => {
                                this.updateInputParameters(e.target.value, 'minimumTempo')
                            }}
                        /></label>

                    <label className={'input-label'}>
                        Maximum tempo:
                        <input
                            className={'input-number'}
                            type="number"
                            defaultValue={defaults.maximumTempo}
                            onChange={(e) => {
                                this.updateInputParameters(e.target.value, 'maximumTempo')
                            }}
                        />
                    </label>
                </div>

                <div className={'info-section-div'}>
                    <h3>Song Parts</h3>
                <label className={'input-label'}>
                    Minimum song parts:
                    <input
                        className={'input-number'}
                        type="number"
                        defaultValue={defaults.minAmountOfParts}
                        onChange={(e) => {
                            this.updateInputParameters(e.target.value, 'minAmountOfParts')
                        }}
                    />
                </label>
                <label className={'input-label'}>
                    Maximum song parts:
                    <input
                        className={'input-number'}
                        type="number"
                        defaultValue={defaults.maxAmountOfParts}
                        onChange={(e) => {
                            this.updateInputParameters(e.target.value, 'maxAmountOfParts')
                        }}
                    />
                </label>
                <label className={'input-label'}>
                    Minimum song part occurrences:
                    <input
                        className={'input-number'}
                        type="number"
                        defaultValue={defaults.minimumPartRepeats}
                        onChange={(e) => {
                            this.updateInputParameters(e.target.value, 'minimumPartRepeats')
                        }}
                    />
                </label>
                <label className={'input-label'}>
                    Maximum song part occurrences:
                    <input
                        className={'input-number'}
                        type="number"
                        defaultValue={defaults.maximumPartRepeats}
                        onChange={(e) => {
                            this.updateInputParameters(e.target.value, 'maximumPartRepeats')
                        }}
                    />
                </label>
                    <Checkbox
                        label="Use popular song structure: "
                        default={defaults.usePopularStructure}
                        onChange={this.updateInputParameters}
                        parameter={'usePopularStructure'}
                    />
                </div>

                <div className={'info-section-div'}>
                    <h3>Dynamics</h3>
                <label className={'input-label'}>
                    Minimum amount of dynamics:
                    <input
                        className={'input-number'}
                        type="number"
                        defaultValue={defaults.minimumAmountOfDynamics}
                        onChange={(e) => {
                            this.updateInputParameters(e.target.value, 'minimumAmountOfDynamics')
                        }}
                    />
                </label>
                <label className={'input-label'}>
                    Maximum amount of dynamics:
                    <input
                        className={'input-number'}
                        type="number"
                        defaultValue={defaults.maximumAmountOfDynamics}
                        onChange={(e) => {
                            this.updateInputParameters(e.target.value, 'maximumAmountOfDynamics')
                        }}
                    />
                </label>
                </div>

                <div className={'info-section-div'}>
                    <h3>Instruments</h3>
                <label className={'input-label'}>
                    Minimum amount of instruments:
                    <input
                        className={'input-number'}
                        type="number"
                        defaultValue={defaults.minimumAmountOfInstruments}
                        onChange={(e) => {
                            this.updateInputParameters(e.target.value, 'minimumAmountOfInstruments')
                        }}
                    />
                </label>
                <label className={'input-label'}>
                    Maximum amount of instruments:
                    <input
                        className={'input-number'}
                        type="number"
                        defaultValue={defaults.maximumAmountOfInstruments}
                        onChange={(e) => {
                            this.updateInputParameters(e.target.value, 'maximumAmountOfInstruments')
                        }}
                    />
                </label>
                </div>

                <button className={'button'} onClick={this.updateSongData}>Generate Song</button>
            </div>
        );
    }
}

export default InputForm