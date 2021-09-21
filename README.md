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
- `popularStructure`
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
	"popularStructure": false,
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
	"popularStructure": false,
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
	"key": "F#",
	"dynamics": [
		"BUILD UP",
		"ARPEGGIO",
		"BASS DROP",
		"DANCE BEAT",
		"DECEPTIVE CADENCE"
	],
	"numberOfInstruments": 3,
	"numberOfParts": 3,
	"scale": "EGYPTIAN",
	"signature": "6/8",
	"structure": [
		"A",
		"B",
		"C",
		"B"
	],
	"tempo": 145
}
```