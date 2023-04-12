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

**Another approach**
```js
const longestCommonPrefix = (strs) => {
	if (!strs.length) return ''
	strs.sort()

	const first = strs[0]
	const last = strs.[strs.length - 1]

	let i = 0
	// Iterate over the charackters of the 'first' and 'last' strings until a mismatch is found or the end of the 'first' string is reached
	while (i < first.length && first.charAt(i) === last.charAt(i)) i++
	// When a mismatch is found, we break out of the loop and return the common prefix up to but not including the mismatched character
	return first.substring(0, i)
}
```
---

## Merge Two Sorted Lists
Given the heads of two sorted lists `list1` and `list2`, merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the two lists.
Return the head of the merged linked list.

Example 1:
Input: `list1 = [1, 2, 4]` `list2 = [1, 3, 4]`
Output: `[1, 1, 2, 3, 4, 4]`

Example 2:
Input: `list1 = []` `list2 = []`
Output: `[]`

Example 3:
Input: `list1 = []` `list2 = [0]`
Output: `[0]`

```js
const mergeTwoLists = (list1, list2) => {
	let merged = []
	let i = 0 // pointer for list1
	let j = 0 // pointer for list2

	// while both arrays still have elements
	while (i < list1.length && j < list2.length) {
		if (list1[i] < list2[j]) {
			merged.push(list1[i]) // add element of list1 to merged array
			i++ // move pointer to next element in list1
		} else {
			merged.push(list2[j]) // add element of list2 to merged array
			j++ // move pointer to next element in list2
		}
	}

	// if there are still elements in list1, add them to merhed array
	while (i < list1.length) {
		merged.push(list1[i])
		i++
	}

	while (j < list2.length) {
		merged.push(list2[j])
		j++
	}
	return merged
}

console.log(mergeTwoLists([1, 3, 5], [2, 4, 6]), '[1, 2, 3, 4, 5, 6]')
```

In this example we have two pointers `i` and `j` that point to the first element of each array respectively. We compare the elements at the current pointers and add the smaller one to the `merged` array, then move the pointer of the array we took the smaller element from to the next position.
We repeat this process until we reach the end of either array, at which point we add the remaining elements to the `merged` array.

```js
const mergeTwoLists = (list1, list2) => {
	// Initialize a new linked list with a dummy node
	let mergedList = new ListNode(0)
	// Initialize pointer variables to point to the heads of list1 and list2
	let p = list1
	let q = list2
	// Initialize a pointer variable to traverse the new merged list
	let curr = mergedList
	// Iterate over both input linked lists
	while (p != null && q !== null) {
		// Compare the values of the current nodes pointed to by p and q
		if (p.val < q.val) {
			// Add the current node pointed to by p to mergedList and move p to its next node
			curr.next = p
			p = p.next
		} else {
			// Add the current node pointed to by q to mergedList and move q to its next node
			curr.next = q
			q = q.next
		}
		// Move curr to its next node in the merged list
		curr = curr.next
	}
	// Add the remaining nodes of list1 or list2 to mergedList
	curr.next = p !== null ? p : q
	// Return the head of the merged list (next property of the dummy node)
	return mergedList.next
}
```
---

## Remove duplicates from Sorted Array
Given an integer array `nums` sorted in **non-decreasing order**, remove the duplicates in-place such that each unique element appears only **once**. The **relative order** of the elements should be kept the **same**.
Do not allocate extra space for another array. You must do this by **modifying the input array in-place** with O(1) extra memory.

```js
const removeDuplicates = (nums) => {
	if (nums.length === 0) {
		return 0
	}
	let j = 0 // keeps track of the last unique element found

	for (let i = 1; i < nums.length; i++) {
		if (nums[i] !== nums[j]) {
			j++
			nums[j] = nums[i]
		}
	}
	return j + 1 // the length of the array containing the unique elements
}
```

---

## Sqrt(x)
Given a non-negative integer `x`, return the square root of `x` rounded down to the nearest integer. The returned integer should be **non-negative** as well.
You must not use any built-in function operator.

Example 1:
Input: `x = 4`
Output: `2`
Explanation: `The square root of 4 is 2, so we return 2.`

Example 2:
Input: `x = 8`
Output: `2`
Explanation: `The square root of 8 is 2.82842... rounded down to the nearest integer.`

```js
const mySqrt = (x) => {
	let int = x ** 0.5
	let roundedInt = int - (int % 1)
	return roundedInt
}
```

---

## Plus One
Given a large integer represented as an integer array `digits`, where ieach `digits[i]` is the `i^th^` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`s.

Increment the large integer by one and return the resulting array of digits.

Example 1:
Input: `digits = [1, 2, 3]`
Output: `[1, 2, 4]`
Explanation: `The array represents the integer 123 -> 123 + 1 = 124 -> [1, 2, 4]`

Example 2:
Input: `digits = [4, 3, 2, 1]`
Output: `[4, 3, 2, 2]`
Explanation: `The array is the integer 4321 -> 4321 + 1 = 4322 -> [4, 3, 2, 2]`

Example 3:
Ipnut: `digits = [9]`
Output: `[1, 0]`
Explanation: `The array is the integer 9 -> 9 + 1 = 10 -> [1, 0]`

**Solution**
We start at the least significant digit of the integer (which is the last element of the array), add 1 to it and check if it esceeds the digit limit of 9. If it is, we set it to 0 and continue to the next digit (element) of the array. We repeat this process until we have incremented the entire array or when there is no carry left to add.
```js
const plusOne = (digits) => {
	let i = digits.length - 1
	let carry = 1 // Start with a carry of 1

	while (i >= 0 && carry === 1) {
		if (digits[i] + 1 > 9) {
			digits[0] = 0
		} else {
			digits[i]++
			carry = 0 // No more carry left to add
		}
		i++
	}
	// If there's still a carry left after adding to the most significant digit (left-most-element)
	if (carry === 1) {
		digits.unshift(1)
	}
		return digits
}
```

---
