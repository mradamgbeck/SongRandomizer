import React from 'react';
import generateSong from '../../../lib/generate'
import {Button, TextField} from "@material-ui/core";
import defaults from "../../../config/generate-defaults";
import Checkbox from "../../FormComponents/Checkbox/Checkbox";

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
            <div>
                <h2>Song Input Parameters</h2>
                <TextField
                    id="outlined-number"
                    label="Minimum tempo"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.minimumTempo}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'minimumTempo')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Maximum tempo"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.maximumTempo}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'maximumTempo')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Minimum song parts"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.minAmountOfParts}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'minAmountOfParts')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Maximum song parts"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.maxAmountOfParts}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'maxAmountOfParts')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Minimum song part occurrences"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.minimumPartRepeats}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'minimumPartRepeats')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Maximum song part occurrences"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.maximumPartRepeats}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'maximumPartRepeats')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Minimum amount of dynamics"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.minimumAmountOfDynamics}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'minimumAmountOfDynamics')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Maximum amount of dynamics"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.maximumAmountOfDynamics}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'maximumAmountOfDynamics')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Minimum amount of instruments"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.minimumAmountOfInstruments}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'minimumAmountOfInstruments')
                    }}
                />
                <br/>
                <TextField
                    id="outlined-number"
                    label="Maximum amount of instruments"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.maximumAmountOfInstruments}
                    onChange={(e) => {
                        this.updateInputParameters(e.target.value, 'maximumAmountOfInstruments')
                    }}
                />
                <br/>
                <Checkbox
                    label="Popular song structure"
                    default={defaults.usePopularStructure}
                    onChange={this.updateInputParameters}
                    parameter={'usePopularStructure'}
                />
                <br/>
                <Button variant="contained" onClick={this.updateSongData}>Generate Song</Button>
            </div>
        );
    }
}

export default InputForm