// problem 1

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide me a positive number";
  } else {
    const result = Math.pow(number, 3);
    return result;
  }
}

const positiveNumber = cubeNumber(4);
console.log(positiveNumber);


// problem 2

function matchFinder(string1, string2) {
  if (typeof string1 !== "string" || typeof string2 !== "string") {
    return "Please provide me valid String!";
  } else {
    if (string1.includes(string2)) {
      return true;
    } else {
      return false;
    }
  }
}

const inputString = matchFinder("Peter Parker", "pet");
console.log(inputString);

// problem 4

function findAddress(obj) {
  if (typeof obj !== "object") {
    return "please provide me an object"
  } else {
    const street = obj.street || "_";
    const house = obj.house || "_";
    const society = obj.society || "_";

    return street + ',' + house + ',' + society;
  }


}

const inputObject = {
  street: 10,
  // house: '15A',
  society: 'Earth Perfect'
}

console.log(findAddress(inputObject));


// problem 5

function canPay(changeArray, totalDue) {
  if (!Array.isArray(changeArray) || typeof totalDue !== 'number') {
    return 'Please provide me a valid input!';
  }
  else if (changeArray.length === 0) {
    return 'please provide me an array of numbers!'
  } else {
    let totalAmount = 0;
    for (let number of changeArray) {
      totalAmount += number;
    }
    if (totalAmount >= totalDue) {
      return true;
    }
    else {
      return false;
    }
  }
}

const inputArray = canPay([1, 2, 5], 10);
console.log(inputArray);

// console.log('======================');



function sortMaker(arr) {
  if (!Array.isArray(arr)) {
    return 'Please provide me an array!'
  }
  else if (arr.length === 2 && arr[0] === arr[1]) {
    return 'equal';
  }
  else {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (element < 0) {
        return 'invalid input';
      }
    }
  }
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] < arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

const inputArr = [2, 2];
const arrResult = sortMaker(inputArr);
console.log(arrResult);
