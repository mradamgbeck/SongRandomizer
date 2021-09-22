# SongRandomizer
A tool for making a random song format for which to inspire you with.
## Use
SongRandomizer is a node express app that starts on port 3000

### POST `http://localhost:3000/generate`
#### INPUT 
- `tempoLowerBound`
  - The minimum bpm the generated tempo can be
- `tempoHigherBound`
  - The maximum bpm the generated tempo can be
- `minAmountOfParts`
  - The minimum amount of parts in the song structure
- `maxAmountOfParts`
  - The maximum amount of parts in the song structure
- `partRepeatLowerBound`
  - The minimum amount of times a part will appear in the song structure
- `partRepeatHigherBound`
  - The maximum amount of times a part will appear in the song structure
- `amountOfDynamicsLower`
  - The minimum number of dynamic features the generator will choose randomly
- `amountOfDynamicsHigher`
  - The maximum number of dynamic features the generator will choose randomly
- `amountOfInstrumentsLower`
  - The minimum amount of suggested voices
- `amountOfInstrumentsHigher`
  - The maximum amount of suggested voices
- `usePopularStructure`
  - Whether or not the generator chooses the structure from a list of popular song structures
- `preferredKeys`
  - A list of the keys for the generator to limit itself to

#### JSON EXAMPLE
```json
{
	"tempoLowerBound": 90,
	"tempoHigherBound": 150,
	"minAmountOfParts": 2,
	"maxAmountOfParts": 4,
	"partRepeatLowerBound": 1,
	"partRepeatHigherBound": 3,
	"amountOfDynamicsLower": 2,
	"amountOfDynamicsHigher": 6,
	"amountOfInstrumentsLower": 1,
	"amountOfInstrumentsHigher": 6,
	"usePopularStructure": false,
	"preferredKeys": [
		"A",
		"C",
		"E",
		"F#"
	]
}
```
#### CURL COMMAND
```bash
curl --location --request POST 'http://localhost:3000/generate' \
--header 'Content-Type: application/json' \
--data-raw '{
	"tempoLowerBound": 90,
	"tempoHigherBound": 150,
	"minAmountOfParts": 2,
	"maxAmountOfParts": 4,
	"partRepeatLowerBound": 1,
	"partRepeatHigherBound": 3,
	"amountOfDynamicsLower": 2,
	"amountOfDynamicsHigher": 6,
	"amountOfInstrumentsLower": 1,
	"amountOfInstrumentsHigher": 6,
	"usePopularStructure": false,
	"preferredKeys": [
		"A",
		"C",
		"E",
		"F#"
	]
}'
```

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
    "tempoLowerBound": 1,
    "tempoHigherBound": 999,
    "minAmountOfParts": 1,
    "maxAmountOfParts": 26,
    "partRepeatLowerBound": 1,
    "partRepeatHigherBound": 10,
    "amountOfDynamicsLower": 1,
    "amountOfDynamicsHigher": dynamics.length,
    "amountOfInstrumentsLower": 1,
    "amountOfInstrumentsHigher": 999,
    "usePopularStructure": true,
    "preferredKeys": ["A","A#","B","C","C#","D","D#","E","F","F#","G","G#"]
}
```
## To Do:
- Make song structure start with `A` and each new part be named appropriately i.e. `AABACBAD` instead of `BBABDABD`
- Add ability to prefer a list of scales and time signatures
- Add more dynamics
- find some way to programatically know when to use sharps or flats (currently all sharps)
- Compose an actual song using the template
