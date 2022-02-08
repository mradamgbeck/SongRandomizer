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

    <span>Preferred Keys</span><br>
    <select multiple v-model="inputs.preferredKeys">
      <option v-for="(note , index) in notes" :value="note" :key="index">{{ note }}</option>
    </select><br>

    <span>Preferred Time Signatures</span><br>
    <select multiple v-model="inputs.preferredSignatures">
      <option v-for="(signature , index) in signatures" :value="signature" :key="index">{{ signature }}</option>
    </select><br>

    <input id="usePopStructure" v-model="inputs.usePopularStructure" type="checkbox">
    <label for="usePopStructure">Use Popular Song Structure</label><br><br>

    <Button id="submit" @click="generate">Randomize</Button><br>
  </div>
</template>

<script>
import defaults from "../config/generateDefaults";
import notes from "../constants/notes"
import signatures from "../constants/signatures"
import {generateSong} from "../lib/generate";

export default {
  name: "SongMenu",
  data() {
    return {
      inputs: defaults,
      notes: notes,
      signatures: signatures
    }
  },
  emits: ['songOutput'],
  methods: {
    generate() {
      this.$emit('songOutput', generateSong(this.inputs))
    }
  }
}
</script>

<style scoped>

</style>