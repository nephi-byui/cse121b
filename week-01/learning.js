
let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total(1,2,3,4,5,6,7,8,9,10)

console.log("The total is "+theTotal)


function total(...theNumbers){
	let sum = 0
	for(let aNumber in theNumbers){
		sum += aNumber*1//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	return sum
}

/* extra practice code */

console.log("")

function addition(addend,addend2) {
	sum = (addend + addend2)
	return sum
}

sum = addition(1,1)
console.log("1 + 1 = " + sum);

function subtraction(minuend,subtrahend) {
	difference = (minuend - subtrahend)
	return difference
}

difference = subtraction(1,1)
console.log("1 - 1 = " + difference);