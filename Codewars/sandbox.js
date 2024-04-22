function primeFactors(n) {
	if (n <= 1) {
		return 'Invalid input. Number must be greater than 1.'
	}

	let result = ''
	let divisor = 2

	while (n > 1) {
		let count = 0

		while (n % divisor === 0) {
			n /= divisor
			count++
		}

		if (count > 0) {
			result += `(${divisor}`
			if (count > 1) {
				result += `**${count}`
			}
			result += ')'
		}
		divisor++
	}
	return result
}

const a = 86242
console.log(primeFactors(a))

const b = 7775460
console.log(primeFactors(b))

const c = 7919
console.log(primeFactors(c))
