<template>
  <div>
    <span>Your song, my liege.</span><br><br>
    <span>Tempo: {{ songData.tempo }}</span><br>
    <span>Key: {{ songData.key }}</span><br>
    <span>Time Signature: {{ songData.signature }}</span><br>
    <span>Number of Instruments: {{ songData.numberOfInstruments }}</span><br>
    <span>Dynamics:</span>
    <ul v-for="(dynamic, index) in songData.dynamics" :key="index">{{ dynamic }}</ul>
    <span>Scale:</span><br>
    <ul>{{ songData.scale.name }}</ul>
    <ul>{{ songData.scale.notes }}</ul>
    <span>Chords:</span><br>
    <Chord v-for="(chord , index) in songData.chords" :key="index" :chord=chord></Chord>
    <span>Song Structure:</span><br>
    <ul>{{ songData.structure }}</ul>
  </div>
</template>

<script>
import Chord from "@/components/Chord";

export default {
  components: {
    Chord
  },
  name: "SongDisplay",
  props: ['songData']
}
</script>

<style scoped>

</style>