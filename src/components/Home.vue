<template>
  <div>
    <input v-model.number="inputs.minimumTempo" placeholder="Lowest Tempo" type="number">
    <input v-model.number="inputs.maximumTempo" placeholder="Highest Tempo" type="number">
    <input v-model.number="inputs.minAmountOfParts" placeholder="Minimum Song Parts" type="number">
    <input v-model.number="inputs.maxAmountOfParts" placeholder="Maximum Song Parts" type="number">
    <input v-model.number="inputs.minimumPartRepeats" placeholder="Minimum Occurrences of a Part" type="number">
    <input v-model.number="inputs.maximumPartRepeats" placeholder="Maximum Occurrences of a Part" type="number">
    <input v-model.number="inputs.minimumAmountOfDynamics" placeholder="Minimum Amount of Dynamics" type="number">
    <input v-model.number="inputs.maximumAmountOfDynamics" placeholder="Maximum Amount of Dynamics" type="number">
    <input v-model.number="inputs.minimumAmountOfInstruments" placeholder="Minimum Amount of Instruments" type="number">
    <input v-model.number="inputs.maximumAmountOfInstruments" placeholder="Minimum Amount of Instruments" type="number">
    <Button @click="generate">Randomize</Button>
  </div>
</template>

<script>
import defaults from "../config/generateDefaults";
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
      this.output = generateSong(this.inputs)
    }
  }
}
</script>

<style scoped>
</style>
