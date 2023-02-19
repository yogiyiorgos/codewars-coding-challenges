### A needle in the haystack
Write a function `findNeedle()` that takes an `array` full of junk but containing one `"needle"`. After your function finds the needle it should return a string message:
`"found the needle at position "` plus the `index`

Example:
`["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"`

```js
const findNeedle = (array) => {
	for (let i = 0; i < array.length; i++) {
		if (array[i] === 'needle') {
			return `found the needle at position ${i}`
		}
	}
}
```
---

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

### Delete occurences of an element if occures more than n times
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
---

### Build a pile of cubes
Construct a building that is a pile of n cubes. The cube at the bottom will be a volume of $n^3$, the cube above will have volume of $(n-1)^3$ and so on until the top, which will have a volume of $1^3$.

The parameter of the function findNb will be an integer m and you have to teturn the integer n such as $n^3+(n-1)^3+(n-2)^3+...+1^3=m$ if such n exists, or -1 if there is no such n.

```js
const findNb = (m) => {
	// Keep track of the total volume of cubes added so far
	let sum = 0
	// n represents the number of cubes
	let n = 1

	while (sum < m) {
		sum += Math.pow(n, 3)
		n++
	}
	return sum === m ? n - 1 : -1
}
```
---

### Running sum of 1d array
Given an array `nums`. We define a runnig sum of an array as `sunningSum[i] = sum(nums[0]...nums[i])`. Return the running sum of `nums`.

Example: 
Input: `nums = [1, 2, 3, 4`
Output: `[1, 3, 6, 10]`
Explanation: `Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4`

```js
const runningSum = (nums) => {
	// Keep track of the running sum
	let runningSum = 0
	// Store the running sum values for each index in the input array
	let result = []

	for (let i = 0; i < nums.lenght; i++) {
		// Add the value of the i index to the running sum variable
		runningSum += nums[i]
		// Store the result in the result array at the same index i
		result[i] = runningSum
	}
	return result
}
```
---

### Abbreviate a two word name
Write a function to convert a name into initials. The function takes two words with one space in between them.
The output should be two capital letters with a dot separating them.

Example: `Sam Harris` => `S.H`, `patrick feeney` => `P.F`

```js
const abbrevName = (name) => {
	const names = name.split(' ')
	const initials = names.map(n => n[0].toUpperCase()).join('.')
	return initials
}
```
---

### Two Sum
Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.
You may assume that each input would have __exactly one solution__, and may not use the same element twice.
You can return the answer in any order.

Example:
Input: `nums = [2, 7, 11, 15], target = 9`
Output: `[0, 1]`
Explanation: `Because nums[0] + nums[1] == 9, we return [0, 1]`

```js
const twoSum = (numbers, target) => {
	for (let i = 0; i < numbers.length - 1; i++) {
		for (let j = i + 1; j < numbers.length; j ++) {
			if (numbers[i] + numbers[j] === target) {
				return [i, j]
			}
		}
	}
}
```
---





































When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are 
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$