# SongRandomizer
- A tool for making a random song format for which to inspire you with.
- [Deployed on Heroku](https://song-randomizer.herokuapp.com/)
## Use
SongRandomizer is a Vue app that starts on port 8080 by default
### Build
`npm run build`
### Serve
`npm run serve`

## DEFAULTS
-If nothing is set, these are the following default settings:
```json
{
    "minimumTempo": 1,
    "maximumTempo": 999,
    "minAmountOfParts": 1,
    "maxAmountOfParts": 26,
    "minimumPartRepeats": 1,
    "maximumPartRepeats": 10,
    "minimumAmountOfDynamics": 1,
    "maximumAmountOfDynamics": dynamics.length,
    "minimumAmountOfInstruments": 1,
    "maximumAmountOfInstruments": 999,
    "usePopularStructure": true,
    "preferredKeys": ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"]
}
```
## To Do:
- Make song structure start with `A` and each new part be named appropriately i.e. `AABACBAD` instead of `BBABDABD`
- Add ability to prefer a list of scales
- find some way to programatically know when to use sharps or flats (currently all sharps)
- Make chord degrees correct for each scale (lowercase numeral for minor, uppercase for major, and degree mark for diminished chords)
- Output relative key and related keys (for borrowing chords)
- Output chord diagrams
- Output scale diagrams
- Devise a system for knowing the names of created chords
- Add structure to each dynamic with links to tutorials