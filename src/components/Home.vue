<template>
  <div>
    <SongMenu @songOutput="updateSong($event)"></SongMenu>
    <hr>
    <SongDisplay v-if="songData.tempo > 0" v-bind:songData="this.songData"></SongDisplay>
  </div>
</template>

<script>
import SongMenu from "@/components/SongMenu";
import SongDisplay from "@/components/SongDisplay";

export default {
  components:{
    SongMenu,
    SongDisplay
  },
  data() {
    return {
      songData: {
        tempo: 0
      }
    }
  },
  methods: {
    updateSong(event){
      this.songData = event
      console.log(this.songData)
    }
  }
}
</script>

<style scoped>
</style>
