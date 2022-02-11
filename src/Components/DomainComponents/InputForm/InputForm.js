import React from 'react';
import generateSong from '../../../lib/generate'
import {Button, TextField} from "@material-ui/core";
import defaults from "../../../config/generate-defaults";
import Checkbox from "../../FormComponents/Checkbox";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputParameters: defaults
        };
        this.updateSongData = this.updateSongData.bind(this);
        this.updateInputParameters = this.updateInputParameters.bind(this);

    }

    updateInputParameters(e, parameter) {
        this.setState(prevState => {
                let newState = {
                    inputParameters: {
                        ...prevState.inputParameters,
                    }
                };
                newState.inputParameters[parameter] = e.target.value
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
                        this.updateInputParameters(e, 'minimumTempo')
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
                        this.updateInputParameters(e, 'maximumTempo')
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
                        this.updateInputParameters(e, 'minAmountOfParts')
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
                        this.updateInputParameters(e, 'maxAmountOfParts')
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
                        this.updateInputParameters(e, 'minimumPartRepeats')
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
                        this.updateInputParameters(e, 'maximumPartRepeats')
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
                        this.updateInputParameters(e, 'minimumAmountOfDynamics')
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
                        this.updateInputParameters(e, 'maximumAmountOfDynamics')
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
                        this.updateInputParameters(e, 'minimumAmountOfInstruments')
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
                        this.updateInputParameters(e, 'maximumAmountOfInstruments')
                    }}
                />
                <br/>
                <Checkbox
                    label="Popular song structure"
                    value={defaults.usePopularStructure}
                    onChange={(e)=>{this.updateInputParameters(e, 'usePopularStructure')}}
                />
                <br/>
                <Button variant="contained" onClick={this.updateSongData}>Generate Song</Button>
            </div>
        );
    }
}

export default InputForm