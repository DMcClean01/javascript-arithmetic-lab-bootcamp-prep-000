<<<<<<< HEAD
var number 10

function add5() {
  number += 5
}

function divideBy3() {
  number /=3
}

divideBy3()

console.log(number) // 3.333333333335

add5()

console.log(number) // 8.333333333335

//reset number
number = 10

add5()

console.log(number) // 15

divideBy3()

console.log(number) // 5
=======
function add(a, b) {
  return 1 + 80;
} // 81

function subtract() {
  expect(subtract(a, b)).toEqual(60 - 40);
} // 20

function multiply() {
  expect(multiply(a, b)).toEqual(2 * 30);
} // 6.8 (there's that floating-point arithmetic again...)

function divide() {
  expect(divide(a, b)).toEqual(5.0 / 2.5);
} // 2
>>>>>>> c46f0592cdbc51490df78c2256b7c10ee14389f7
