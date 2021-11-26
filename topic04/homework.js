// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

function my_pow(base, exp) {
    if (exp === 0) {
        return 1;
    } else {
        return base * my_pow(base, exp - 1);
    }
}

console.log(my_pow(2, 4));

// 2. Write functions min and max that will find min and max number in array using apply

let arrNum = [3000, -23, 33, 99999, -12, 23, -43, 100500];

function myMathMin(arrOfNumbers) {
    return Math.min.apply(null, arrOfNumbers)
}

function myMathMax(arrOfNumbers) {
    return Math.max.apply(null, arrOfNumbers);
}

console.log(myMathMin(arrNum));
console.log(myMathMax(arrNum));

// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, brand and color.
//    Please make examples for three different cars

const nissan = {
    brand: "Nissan",
    color: "black",
    registration: "BC87654"
};

const chevrolet = {
    brand: "Chevrolet",
    color: "asphalt",
    registration: "BO64532"
};

const pontiac = {
    brand: "Pontiac",
    color: "white",
    registration: "AT64539"
};

function carInfo(name) {
    console.log(`This ${this.color} colored ${this.brand} with registration number ${this.registration} belongs to ${name}`);
}

carInfo.call(nissan, "Anna");
carInfo.call(chevrolet, "Nick");
carInfo.call(pontiac, "Sasha");

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 

function greet(person) {
    if (person.name === 'amy') {
        return 'hey amy'
    } else {
        return 'hey arnold'
    }
}

const amy = {name: 'amy'};
console.log(greet(amy));

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it does not do what we expect - fix that(find two solutions)

for (let i = 0; i < 4; i++) {
    setTimeout(() => console.log(i), 0)
}

let i = 0;
while (i < 4) {
    (function (i) {
        setTimeout(() => console.log(i), 0)
    })(i)
    i++
}