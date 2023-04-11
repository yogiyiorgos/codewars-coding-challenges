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

### The Supermarket Queue
*The example presents the computer science related idea of a thread pool.*

There is a pool at the self-checkout tills at the supermarket. Write a function to calculate the total time required for all the customers to check out.

Input:
- customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
- n: a positive integer, the number of checkout tills.

Output:
- The function should return an integer, the total time required.

Examples:
```js
console.log(queueTime([5, 3, 4], 1), '12')

console.log(queueTime([10, 2, 3, 3], 2) '10')
// Returns 10, because n=2 and the 2nd, 3rd, 4th persons in the queue finish 
// before the 1st person has finished

console.log(queueTime([2, 3, 10], 2), '12')
```

Clarifications:
- There is only one queue getting served by many tills
- The order of the queue never changes
- The first person in the queue (i.e. the first element in the array) proceeds to a till as soon as it becomes free.

```js
const queueTime = (customers, n) => {
	const tills = Array(n).fill(0)

	for (let i = 0; i < customers.lenght; i++) {
		const nextCustomer = customers[i]
		const nextTill = tills.indexOf(Math.min(...tills))
		tills[nextTill] += nextCustomer
	}
	return Math.max(...tills)
}
```

We begin with initializing an array `tills` of length `n` with zeros.
`const tills = Array(n).fill(0)`
This array represents the time remaining on each checkout till. Initially, all the tills are empty and have zero time remaining.

We loop over each customer in the `customers` array. For each customer, the function finds the checkout till with the minimum time remaining.
`tills.indexOf(Math.min(...tills))`
The `Math.min` method returns the smallest number in the `tills` array, which represents the shortest queue, and the `indexOf` method returns the index of that number in the `tills` array, which represents the till with the shortest queue.

Once the function has found the till with the shortest queue, it adds the time required for the next customer to that till by updating the corresponding element in the `tills` array.
`tills[nextTill] += nextCustomer`

After all the customers have been added to the tills, the function returns the maximum time remaining in the `tills` array using the `Math.max` method. This represent the time required for the last customer to check out, which is the total time required for all the customers to check out.

---

### Count of positives / Sum of negatives
Given an array of integers.
Return an array, where the first element is the count of positive numbers and the second element is the sum of negative numbers. 
0 is neither positive nor negative and if the input is an empty array or is null, return an empty array.

Example: `[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]` -> `[10, -65]`

```js
const countPositivesSumNegatives = (input) {
	if (input == null || input.length === 0) {
		return []
	}

	let count = 0
	let sum = 0
	
	for (let i = 0; i < input.length; i++) {
		if (input[i] > 0) {
			count++
		} else if (input[i] < 0) {
			sum += input[i]
		}
	}
	return [count, sum]
}
```
---

### Highest Scoring Word
Given a string of words, find the highest scoring word.
Each letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.
Return the highest scoring word as a string. If two words are the same, return the word that appears earliest in the original string.
All letters will be lowercase and all inputs will be valid.

Example: `abad -> 8 (1 + 2 + 1 + 4)`

```js
const high = (str) => {
	// Split the given string into an array of words
	let words = str.split(' ')

	let highestScore = 0
	let highestScoreWord = ''

	// Loop through each word
	words.forEach(word => {
		let score = 0

		// Loop through each character of the word and calculate its score
		for (let i = 0; i < word.length; i++) {
			score += word.charCodeAt(i) - 96 
			// Subtracting 96 converts a to 1, b to 2, etc.
		}

		// If the current word's score is higher than the highest score, 
		// update the highest score and word
		if (score > highestScore) {
			highestScore = score
			highestScoreWord = word
		}
	})
	return highestScoreWord
}
```
---

### Bouncing Balls 1st Interpretation
1. A child drops a ball out of a window on the nth floor of a tall building. The height of this floor above ground level, `h`, is known.
2. The ball bounces to two-thirds of its previous height (a bounce of 0.66). This means that if the ball drops from a height of `h`, it will bounce up to a height of `0.66h`.
3. The child's mother is looking out of the window that is 1.5 meters from the ground.
4. We need to determine how many times the mother will see the ball pass in front of her window, including when it's falling and bouncing.

First, we need to check if the input values meet the conditions given in the problem statement. If any of the conditions are not met, we should return -1.

Next, we can calculate the total distance the ball travels before it stops bouncing. This is given by the formula:
`total_distance = h + 0.66h + 0.66^2h + 0.66^3h + ...`

This is an infinite geometric series, which has a closed form solution:
`total_distance = h * (1 + 0.66 + 0.66^2 + 0.66^3 + ...) = h * (1/(1 - 0.66)) = 2.94h`

**The total distance the ball travels before it stops bouncing is 2.94 times the height of the initial drop**

Next, we need to determine how many times the ball passes in front of the mother's window. To do this, we can calculate the height of the ball at each bounce, and check if it higher than the height of the window. If it is, we count it as a pass.

Let's assume that the height of the window is w. The height of the ball at each bounce can be calculated using the formula:
`height = 0.66^n * h`
where `n` is the number of bounces. We can stop counting the bounces when the height of the balls is less than or equal to the height of the window.

```js
const bouncingBall = (h, bounce, window) => {
	if (h <= 0 || bounce <= 0 || bounce >= 1 || window >= h) {
		return -1
	}

	let height  = h
	passes = 0

	while (height > window) {
		passes += 1
		height *= bounce

		if (height > window) {
			passes += 1
		}
	}
	return passes
}
```


### Bouncing Balls 2nd Interpretation
Let's say the height of the floor on which the child is playing is `h` meters. The ball is dropped from this height and it bounces back to 2/3 of its height i.e. at a height of `0.66 * h` meters.

Now, let's assume that the window height of the mother is `w` meters from the ground. We need to calculate the number of times the mother will see the ball pass in front of her window.

To solve this problem, we can use the following steps:
1. We need to check if all the conditions of the problem are met or not.
		`h > 0 && bounce > 0 && bounce < 1 && w < h`
		If any of these conditions are not met, we return -1.
2. If all the conditions are met, then we can calculate the total distance traveled by the ball before it stops bouncing.
		`total_distance = h + (0.66h) + (0.66 * 0.66h) + (0.66 * 0.66 * 0.66h) + ...`
		Since the ball bounces 2/3 of its height each time, the total distance traveled can be expressed as an infinite geometric series with the first term `h` and the common ratio `0.66`.
		`total_distance = h * (1 / (1 - 0.66))
		`total_distance = h / 0.34`
3. Once we have calculated the total distance traveled by the ball, we can calculate the number of times it passes in front of the mother's window.
		`num_passes = 1 + int((total_distance - w) / (0.66h)`
		Here, we add 1 to account for the first time the ball passes in front of the window when it is falling.
---




























When $a \ne 0$, there are two solutions to $(ax^2 + bx + c = 0)$ and they are 
$$ x = {-b \pm \sqrt{b^2-4ac} \over 2a} $$
