// problem 1
// ত োমাকে cubeNumber() নামে একটা function দে ওয়া হয়ে ছে । functionটা একটা input নাম্বার নি বে ।
// Task:
// 1. input নাম্বারটাকে cube করে result টা রি টার্ন করবে ফাংশন থে কে ।
// 2. Bonus: ইনপুট হি সে বে number টাইপ এর পরি বর্তে অন্য কি ছুদি লে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন
// করে দি বে ফাংশন থে কে ।

function cubeNumber(number) {
      if (typeof number !== "number") {
            return "Please provide me a number";
      } else {
            const result = Math.pow(number, 3);
            return result;
      }
}

const positiveNumber = cubeNumber(4);
console.log(positiveNumber);


// problem 2

// 1. ত োমাকে একটা function দে ওয়া হবে called “matchFinder()” যা ইনপুট হি সে বে দইুটা string নি বে ।
// Task:
// 1. যদি প্রথম স্ট্রি ংটির ক োন ো একটি অংশে র সাথে দ্বি তীয় স্ট্রি ংটির পুর োপুরি মি ল খুজে পাও সে ক্ষে ত্রে তুমি
// boolean রি টার্ন করবে এক্ষে ত্রে ত োমাকে true রি টার্ন করতে হবে ।
// 2. আর যদি পুর োপুরি মি ল খুজে না পাও সে ক্ষে ত্রে তুমি boolean false রি টার্ন করবে ।
// 3. Bonus: দটিু ইনপুট স্ট্রি ং দে ওয়া হল ো কি না সে টা validate করবে । যদি দইুটি বা যে ক োন ো একটি ইনপুট স্ট্রি ং
// না হয় সে ক্ষে ত্রে তুমি একটা মি নি ংফুল মে সে জ রি টার্ন করে দি বে ।

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

// problem 3

// ত োমাকে একটা ফাংশন লি খতে হবে যার নাম হবে sortMaker()। এই ফাংশনে র parameter হবে একটি array এবং
// এই array তে সবসময় দইুটি উপাদান থাকবে ।
// Task:
// 1. যদি অ্যারে র দইুটি উপাদান পজি টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি অ্যারে টিকে বড় ো থে কে ছ োট ক্রমে সাজি য়ে রি টার্ন
// করবে ।
// 2. যদি দইুটি উপাদান একই হয় সে ক্ষে ত্রে তুমি এই স্ট্রি ং রি টার্ন করবে ঃ “equal”
// 3. Bonus: যদি অ্যারে র যে ক োন ো একটি উপাদান নে গে টিভ সংখ্যা হয় সে ক্ষে ত্রে তুমি রি টার্ন করবে “Invalid
// Input”

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
                        return 'Invalid input';
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

const inputArr = [2, 3];
const arrResult = sortMaker(inputArr);
console.log(arrResult);

// problem 4

// ত োমাকে একটা function দে ওয়া হবে called “findAddress()” যা ইনপুট হি সে বে একটা object নি বে । Object এর
// তি নটি property থাকবে ।
// Task:
// 1. ত োমাকে ১ম sample output এর format এ output return করতে হবে ।
// 2. Bonus: যদি object এর ক োন ো property missing থাকে সে ক্ষে ত্রে সে ই অংশটুকু double underscore
// দি য়ে replace হবে । (২য় output এর format এ )

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

// Problem - 5
// তুমি দ োকানে একটা চি প্স কি নতে গে লা কি ছুখুচরা টাকার ন োট নি য়ে । একটা canPay() নামে function বানাও যে টা
// ২টা ইনপুট নে ইঃ একটা array, এবং আরে কটা number।
// 1. Array এর প্রত্যে ক টা element ত োমার খুচরা টাকা বঝু াই
// 1 taka
// 2 taka
// 5 taka
// 2. second input টা বঝু াই চি প্স এর দাম।
// Task:
// 1. যদি খুচরা টাকা গুল ো য োগ করে চি প্স এর দামে র সমান বা তার বে শি হয় তাহলে boolean true রি টার্ন
// করবে
// 2. আর যদি ন োটগুল োর য োগফল চি প্স এর দামে র চে য়ে কম হয় সে ক্ষে ত্রে boolean false রি টার্ন করবে ।
// 3. Bonus: ইনপুট এর প্রথম উপাদান empty অ্যারে কি না চে ক করবে । empty অ্যারে হলে মি নি ংফুল মে সে জ
// রি টার্ন করে দি বে ।

function canPay(changeArray, totalDue) {
      if (!Array.isArray(changeArray) || typeof totalDue !== 'number') {
            return 'Please provide me a required input!';
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

const inputArray = canPay([1, 5, 5], 10);
console.log(inputArray);






