function FizzBuzz(num1, num2) {
  let returnValue = '';
  for (let i = 1; i <= 100; i++) {
    if (i % num1 === 0 && i % num2 === 0) {
      returnValue += 'FizzBuzz ';
    } else if (i % 3 === 0) {
      returnValue += 'Fizz ';
    } else if (i % 5 === 0) {
      returnValue += 'Buzz ';
    } else {
      returnValue += i + ' ';
    }
  }
  return returnValue;
}

// Call nd use FizzBuzz
function go() {
  let output = '';
  let val1 = document.getElementById('fizzValue').value;
  let val2 = document.getElementById('buzzValue').value;
  output = FizzBuzz(val1, val2);
  document.getElementById('results').innerHTML = output;
}
