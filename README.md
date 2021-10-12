# SongRandomizer
A tool for making a random song format for which to inspire you with.
## Use
SongRandomizer is a Vue app that starts on port 8081

#### OUTPUT
```json
{
  "tempo": 95,
  "signature": "7/4",
  "key": "C#",
  "scale": {
    "name": "HUNGARIAN MINOR",
    "notes": [
      "C#",
      "D#",
      "E",
      "G",
      "G#",
      "A",
      "C"
    ]
  },
  "chords": {
    "i": [
      "C#",
      "E",
      "G#"
    ],
    "ii": [
      "D#",
      "G",
      "A"
    ],
    "iii": [
      "E",
      "G#",
      "C"
    ],
    "iv": [
      "G",
      "A",
      "C#"
    ],
    "v": [
      "G#",
      "C",
      "D#"
    ],
    "vi": [
      "A",
      "C#",
      "E"
    ],
    "vii": [
      "C",
      "D#",
      "G"
    ]
  },
  "numberOfInstruments": 6,
  "dynamics": [
    "BUILD UP",
    "ARPEGGIO",
    "POLY RHYTHM",
    "FADE OUT",
    "POLY METER",
    "BASS DROP"
  ],
  "structure": [
    "B",
    "A",
    "A",
    "A"
  ]
}
```

#### DEFAULTS
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

# song-randomizer Vue Commands

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
