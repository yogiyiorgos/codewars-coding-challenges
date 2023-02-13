### Binary Addition
Implement a function that adds two numbers together and returns their sum in binary, as a string.

```js
const addBinary = (a, b) => {
	let decNum = a + b
	let binNum = decNum.toString(2)
	return binNum
}
```
---

### Count the number of duplicates
Write a function that will return the count of **distinct case-insensitive** characters and numeric digits that occur more than once in the input string. The input string contains only letters of the alphabet and numeric digits.

```js
const duplicateCount = (text) =>{
	let charCounts = {}
	let duplicates = 0

	for (let i = 0; i < text.length; i++) {
		let char = text[i].toLowerCase()

		if (!charCounts[char]) {
			charCounts[char] = 1
		} else {
			charCounts[char]++

			if (charCounts[char] === 2) {
				duplicates++
			}
		}
	}
	return duplicates
}
```
---

### Word order
Sort a given string, where each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9.

If the input string is empty, return an empty string.

Example: `"is2 Thi1s T4est 3a" --> "Thi1s is2 3a T4est`

```js
const order = (words) => {
	if (!words) return ''

	const wordsArr = words.split(' ')
	const result = []

	// Iterate over the possible position numbers
	for (let i = 1; i <= wordsArr.length; i++) {
		// Check each word in the array
		for (let j = 0; j < wordsArr.length; j++) {
			// If the word contains the current position number
			if (wordsArr[j].includes(i)) {
				// Push the word into the result array
				result.push(wordsArr[j])
			}
		}
	}
	return result.join(' ')
}
```

