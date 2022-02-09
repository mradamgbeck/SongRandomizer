import React from 'react';
import generateSong from '../../../lib/generate'
import {Button, TextField} from "@material-ui/core";
import defaults from "../../../config/generate-defaults";

class InputForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputParameters: defaults
        };
        this.updateSongData = this.updateSongData.bind(this);

    }

    updateSongData() {
        this.props.setSongData(
            generateSong(this.state.inputParameters)
        )
    }

    render() {
        return (
            <div>
                <h2>INPUT DUDE</h2>
                <TextField
                    id="outlined-number"
                    label="Minimum tempo"
                    type="number"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={defaults.minimumTempo}
                    onChange={(e) => {
                        this.setState({inputParameters: {minimumTempo: e.target.value}})
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
                        this.setState({inputParameters: {maximumTempo: e.target.value}})
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
                        this.setState({inputParameters: {minAmountOfParts: e.target.value}})
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
                        this.setState({inputParameters: {maxAmountOfParts: e.target.value}})
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
                        this.setState({inputParameters: {minimumPartRepeats: e.target.value}})
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
                        this.setState({inputParameters: {maximumPartRepeats: e.target.value}})
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
                        this.setState({inputParameters: {minimumAmountOfDynamics: e.target.value}})
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
                        this.setState({inputParameters: {maximumAmountOfDynamics: e.target.value}})
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
                        this.setState({inputParameters: {minimumAmountOfInstruments: e.target.value}})
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
                        this.setState({inputParameters: {maximumAmountOfInstruments: e.target.value}})
                    }}
                />
                <br/>
                <Button variant="contained" onClick={this.updateSongData}>Generate Song</Button>
            </div>
        );
    }
}

export default InputForm