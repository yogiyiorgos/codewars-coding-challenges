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
---

### Find the stray number
In an odd-length array of integers, in which all of them are the same, except for one signle number, return that single different number.

Example: `[1, 1, 2] ==> 2`

```js
const stray = (numbers) => {
	for (let i = 0; i < numbers.length; i++) {
		if (numbers.indexOf(numbers[i] === numbers.lastIndexOf(numbers[i]))){
			return numbers[i]
		}
	}
}
```
---

### Difference of volumes of cuboids
Create a program that takes two lists of integers, `a` and `b`. Each list will constst of 3 positive integers above 0, representing the dimensions of cuboids `a` and `b`. You must find the difference of the cuboids' volumes regardless of which is bigger.

Example: `([2, 2, 3], [5, 4, 1])` `a = 12` `b = 20` the function returns `8`

```js
const findDifference = (a, b) => {
	const cuboidA = a.reduce(
		(acc, cur) => acc * cur
	)

	const cuboidB = b.reduce(
		(acc, cur) => acc * cur
	)

	if (cuboidA > cuboidB) {
		return cuboidA - cuboidB
	} else {
		return cuboidB - cuboidA
	}
}
```
---

### Vowel Count
Return the number (count) of vowels in the given string.
Consider `a`, `e`, `i`, `o`, `u` as vowels, but not `y`.
The input string will only consist of lower case letters and/or spaces.

```js
const getCount = (str) => {
	let vowels = 'aeiou'
	let count = 0

	for (let i = 0; i < str.length; i++) {
		if (vowels.includes(str[i])) {
			count++
		}
	}
	return count
}
```
---

### Delete ocuurences of an element if occures more than n times
Given a list and a number, create a new list that contains each number of `list` at most `n` times, without reordering.

Example: for `n = 2` `[1, 2, 3, 1, 2, 1, 2, 3]` -> `[1, 2, 3, 1, 2, 3]`
					 `n = 1` `[20, 37, 20, 21]` -> `[20, 37, 21]`

```js
const deleteNth = (arr, n) => {
	// Keep track of how many times each element has appeared so far
	const count = {}
	// Array that contains the elements that have not appeared more than N times
	const result = []

	for (let i = 0; i < arr.length; i++) {
		const num = arr[i]

		// If the current element has not appeared before
		if (count[num] === undefined) {
			// Set count to 1 and add it to the result
			count[num] = 1
			result.push(num)
		// If the current element has appeared before but < n times
		} else if (count[num] < n) {
			// Increment the count and and it to result
			count[num]++
			result.push(num)
		}
	}
	return result
}
```