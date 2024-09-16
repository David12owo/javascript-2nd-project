// factorial of a given number
function factorial(d) {
  if (d === 0) {
    return 1;
  } else {
    return d * factorial(d - 1);
  }
}
console.log(factorial(5));

// prime number checks
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(7));

// fibonacci series
function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}
console.log(fibonacci(6));
