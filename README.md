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
  "key": "F",
  "dynamics": [
    "FADE OUT",
    "BREAK DOWN",
    "BUILD UP",
    "DANCE BEAT",
    "DECEPTIVE CADENCE",
    "POLY METER"
  ],
  "numberOfInstruments": 4,
  "numberOfParts": 4,
  "scale": {
    "name": "MINOR BLUES",
    "notes": [
      "F",
      "G#",
      "A#",
      "B",
      "C",
      "D#",
      "F"
    ]
  },
  "signature": "7/4",
  "structure": [
    "B",
    "D",
    "A",
    "C",
    "B",
    "D",
    "A",
    "C"
  ],
  "tempo": 98
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
- Produce the notes of the scale
- Produce the chords typically used with the scale
- Add more dynamics
- find some way to programatically know when to use sharps or flats (currently all sharps)
- Compose an actual song using the template
