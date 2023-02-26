## Palindrome number
Given an integer `x`, return `true` if `x` is a __palindrome__, and `false` otherwise.

Example 1:
Input: `x = 121`
Output: `true`
Explanation: `121 reads as 121 from left to right and from right to left`.

Example 2:
Input `x = -121`
Output: `false`
Explanation: `From left to right, it reads -121. From right to left, it becomes 121-`.

```js
const isPalindrome = (x) => {
	let str = x.toString()
	let rev = str.split('').reverse().join('')

	return str === rev
}

console.log(isPalindrome(121), 'true')
console.log(isPalindrome(123), 'false')
```
---

## Roman to Integer

## Longest Common Prefix
Write a function to find the longest common prefix string amongst an array of strings. Strings consist only of lowercase English letters.
If there is no commin prefix, return an empty string `''`.

Example 1:
Input: `strs = ['flower', 'flow', 'flight']`
Output: `'fl'`

Example 2:
Input: `strs = ['dog', racecar', 'car']`
Output: `''`
Explanation: There is no common prefix among the input strings.

```js
const longestCommonPrefix = (strs) => {
	if (!strs.length) return ''

	// Set initial prefix to the first string in the array
	let prefix = strs[0]

	// Loop through the remaining strings in the array
	for (let i = 1; i < strs.length; i++) {
		// Check if the current prefix is a substring at the beginning of the current string
		while (strs[i].indexOf(prefix) !== 0) {
			// If not, remove the last character of the prefix
			prefix = prefix.substring(0, prefix.length -1)

			// If the prefix is now empty, there is no common prefix
			if (!prefix) return ''
		}
	}
	return prefix
}
```
