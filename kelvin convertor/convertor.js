const kelvin = 0;
// value of kelvin.

let celsius = kelvin - 273;
// celsius convertor
let newton = celsius * (33 / 100)
newton = Math.floor(newton)

let fahrenheit = celsius * (9 / 5) + 32;
// Convert celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit)
// rounds down and returns the largest integer less than or equal to a given number.

console.log("The temperature is " + fahrenheit + " degrees Fahrenheit")
console.log("The temperature is " + newton + " degrees newton")
