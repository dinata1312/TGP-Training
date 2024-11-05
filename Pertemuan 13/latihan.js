function isArithmeticSequence(arr) {
  if (arr.length <= 1) return true;

  const difference = arr[1] - arr[0];
  for (let i = 2; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] !== difference) {
      return false;
    }
  }
  return true;
}

function gcd(firstNumber, secondNumber) {
  // Function to calculate the Greatest Common Divisor (GCD) using the Euclidean algorithm
  while (secondNumber !== 0) {
    const temp = secondNumber;
    secondNumber = firstNumber % secondNumber; // Update secondNumber to the remainder
    firstNumber = temp; // Update firstNumber to the previous secondNumber
  }
  return firstNumber; // The GCD is the last non-zero remainder
}

// TEST CASES
console.log(gcd(12, 10)); // 2
console.log(gcd(50, 40)); // 10
console.log(gcd(24, 30)); // 6
console.log(gcd(17, 23)); // 1
