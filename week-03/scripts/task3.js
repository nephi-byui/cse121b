/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2

// Step 2: In the function, return the sum of the parameters number1 and number2

function add(number1, number2) {
    float1 = parseFloat(number1)
    float2 = parseFloat(number2)
    sum = float1 + float2;
    return sum
};

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function

const addend_1Element = document.getElementById('addend1')
const addend_2Element = document.getElementById('addend2')
const sumElement = document.getElementById('sum')
const addButton = document.getElementById('addNumbers')

function addNumbers() {

    let addend1 = addend_1Element.value
    let addend2 = addend_2Element.value
    sum = add(addend1,addend2)
    sumElement.value = sum
}

addButton.onclick = addNumbers

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers

var subtract = function(minuend, subtrahend) {
    minuend_float = parseFloat(minuend)
    subtrahend_float = parseFloat(subtrahend)
    difference = minuend_float - subtrahend_float;
    return difference
};

const minuendElement = document.getElementById('minuend')
const subtrahendElement = document.getElementById('subtrahend')
const differenceElement = document.getElementById('difference')
const subtractButton = document.getElementById('subtractNumbers')

function subtractNumbers() {    
    let minuend = minuendElement.value
    let subtrahend = subtrahendElement.value
    difference = subtract(minuend, subtrahend)
    differenceElement.value = difference
}

subtractButton.onclick = subtractNumbers

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers

multiply = (factor1, factor2) => {
    float_factor1 = parseFloat(factor1)
    float_factor2 = parseFloat(factor2)
    product = float_factor1 * float_factor2
    return product
}

const factor1_Element = document.getElementById('factor1')
const factor2_Element = document.getElementById('factor2')
const productElement = document.getElementById('product')
const multiplyButton = document.getElementById('multiplyNumbers')

function multiplyNumbers() {    
    let factor1 = factor1_Element.value
    let factor2 = factor2_Element.value
    product = multiply(factor1, factor2)
    productElement.value = product
}

multiplyButton.onclick = multiplyNumbers

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers

function divide(dividend, divisor) {
    dividend = parseFloat(dividend)
    divisor = parseFloat(divisor)
    quotient = dividend / divisor
    return quotient
};

const dividendElement = document.getElementById('dividend')
const divisorElement = document.getElementById('divisor')
const quotientElement = document.getElementById('quotient')
const divideButton = document.getElementById('divideNumbers')

function divideNumbers() {    
    let dividend = dividendElement.value
    let divisor = divisorElement.value
    quotient = divide(dividend, divisor)
    quotientElement.value = quotient
}

divideButton.onclick = divideNumbers

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date

const today = new Date();

// Step 2: Declare a variable to hold the current year

let year

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2

year = today.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year

const yearElement = document.getElementById('year');
yearElement.value = year

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25

let numbersArray
numbersArray = Array.from({length:25},(a,b)=>b+1)

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"

const arrayElement = document.getElementById('array');
arrayElement.innerHTML = numbersArray

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )

let oddNumbers = numbersArray.filter(number => number % 2 == 1)
const oddsArrayElement = document.getElementById('odds');
oddsArrayElement.innerHTML = oddNumbers

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"

let evenNumbers  = numbersArray.filter(number => number % 2 == 0)
const evensArrayElement = document.getElementById('evens');
evensArrayElement.innerHTML = evenNumbers

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"

const reducerFunction = (num1, num2) => num1 + num2;

sumOfArray = numbersArray.reduce(reducerFunction)
const sumOfArrayElement = document.getElementById('sumOfArray');
sumOfArrayElement.innerHTML = sumOfArray

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"

multipliedByTwo = numbersArray.map(num => num * 2);
const multipliedElement = document.getElementById('multiplied');
multipliedElement.innerHTML = multipliedByTwo


// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"

sumOfMultipliedByTwo = multipliedByTwo.reduce(reducerFunction)
const sumOMultipliedElement = document.getElementById('sumOfMultiplied');
sumOMultipliedElement.innerHTML = sumOfMultipliedByTwo



/* set links without chaning HTML */


const HomeLinkElement = document.getElementById('menu')

links = document.getElementsByTagName('a')
console.log(links)

//
// links[1].href = "../week-01/hello.html"
links[2].href = "../week-02/task2.html"
