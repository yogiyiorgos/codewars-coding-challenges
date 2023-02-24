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
