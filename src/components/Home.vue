<template>
  <div>
    <label for="minTempo">Minimum Tempo</label><br>
    <input id="minTempo" v-model.number="inputs.minimumTempo" type="number"><br>
    <label for="maxTempo">Maximum Tempo</label><br>
    <input id="maxTempo" v-model.number="inputs.maximumTempo" type="number"><br>
    <label for="minParts">Minimum Song Parts</label><br>
    <input id="minParts" v-model.number="inputs.minAmountOfParts" type="number"><br>
    <label for="maxParts">Maximum Song Parts</label><br>
    <input id="maxParts" v-model.number="inputs.maxAmountOfParts" type="number"><br>
    <label for="minRepeats">Minimum Occurrences Per Part</label><br>
    <input id="minRepeats" v-model.number="inputs.minimumPartRepeats" type="number"><br>
    <label for="maxRepeats">Maximum Occurrences Per Part</label><br>
    <input id="maxRepeats" v-model.number="inputs.maximumPartRepeats" type="number"><br>
    <label for="minDynamics">Minimum Amount of Dynamics</label><br>
    <input id="minDynamics" v-model.number="inputs.minimumAmountOfDynamics" type="number"><br>
    <label for="maxDynamics">Maximum Amount of Dynamics</label><br>
    <input id="maxDynamics" v-model.number="inputs.maximumAmountOfDynamics" type="number"><br>
    <label for="minInstruments">Minimum Amount of Instruments</label><br>
    <input id="minInstruments" v-model.number="inputs.minimumAmountOfInstruments" type="number"><br>
    <label for="maxInstruments">Maximum Amount of Instruments</label><br>
    <input id="maxInstruments" v-model.number="inputs.maximumAmountOfInstruments" type="number"><br>
    <input id="usePopStructure" v-model="inputs.usePopularStructure" type="checkbox">
    <label for="usePopStructure">Use Popular Song Structure</label><br>
    <Button id="submit" @click="generate">Randomize</Button>
  </div>
</template>

<script>
import defaults from "../config/generateDefaults";
import dynamics from "../constants/dynamics"
import {generateSong} from "../lib/generate";

export default {
  data() {
    return {
      inputs: defaults,
      output: {}
    }
  },
  methods: {
    generate() {
      this.inputs.maximumAmountOfDynamics =
          this.inputs.maximumAmountOfDynamics >= dynamics.length
              ? dynamics.length
              : this.inputs.maximumAmountOfDynamics
      this.output = generateSong(this.inputs)
    }
  }
}
</script>

<style scoped>
</style>
