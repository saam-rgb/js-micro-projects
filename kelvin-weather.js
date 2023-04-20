// the given temperature in kelvin is 293k and should keep const as variable type so that kelvin value wont be changed
const kelvin= 0;
// celsius is 273 degree less than kelvin so 273 is subtracted from kelvin
let celsius= kelvin-273;
// from celcius it is converted to fahrenheit and below is the formula
let fahrenheit= celsius* (9/5)+32;
// most of the time when degree is converted from celsius to fehrenheit, the output will be in decimal. So to avoid that we will be rounding off the decimal value using .floor() method
fahrenheit=Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
// TO find Newton temp we are using the formula celsius *(33/100)
let newton= celsius *(33/100);
newton=Math.floor(newton);
console.log(`The temperature is ${newton} degree Newton`)