
function cubeNumber(number) {
  if (typeof number !== "number") {
    return "Please provide me a positive number";
  } else {
    const result = Math.pow(number, 3);
    return result;
  }
}


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


function findAddress(obj) {
  if (typeof obj !== "object") {
    return "please provide me an object"
  } else {
    const street = obj.street || "__";
    const house = obj.house || "__";
    const society = obj.society || "__";

    return street + ',' + house + ',' + society;
  }
}


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

