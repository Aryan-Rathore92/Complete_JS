// ******************** Array ********************//
// *********** method 01 *************//
let marks = [10,20,30,40];
console.log(marks[0]); //10
console.log(marks[3]); //40
console.log(marks[50]); //undefined

// *********** method 02 *************//
let arr = new Array();// This is also array
// ******* modify array **************//
let array = [1,2,3,4]
array[2] = 100;
console.log(array); //  [1, 2, 100, 4]

// ******************* Array Methods ******************//

// ************ push() *************//
let arr1 = [1,2,3,4,5];
arr1.push(700000) // value dalne ke liye array me
console.log(arr1); //  [1, 2, 3, 4, 5, 700000]

// ************ pop() **************//
let arr2 = [1,2,3,4,5];
arr2.pop(); // Last value will be remove of array
console.log(arr2);// [1, 2, 3, 4]

// ************ shift() *************//
let arr3 = [1,2,3,4,5];
arr3.shift();// Remove first value of the array
console.log(arr3);// [2, 3, 4, 5]

// ************ unshift() ************//
let arr4 = [1,2,3,4,5];
arr4.unshift(100);// This add the value starting of the array
console.log(arr4);// [100, 1, 2, 3, 4, 5]

// ************ splice() ***********//
let arr5 = [1,2,3,4,5,6];
arr5.splice(2,1);// This use for remove the value between to the array
console.log(arr5);// [1, 2, 4, 5, 6]
arr5.splice(2,2);
console.log(arr5);// [1, 2, 5, 6]

// ********** slice() **************//
let arr6 = [1,2,3,4,5,6];
let newarr = arr6.slice(0,4);// This curved a part of the array 
console.log(newarr);// [1, 2, 3, 4]

// ************* reverse *************//
let arr7 = [1,2,3,4,5,6];
arr7.reverse(); // This method revers of the array
console.log(arr7);// [6, 5, 4, 3, 2, 1]

// ************* sort ****************//
let arr8 = [10,36,6,44,2,501];

// Assending sorted array
let sort = arr8.sort( function (a,b) {
    return a-b; // return assending order array
});
console.log(arr8);// [2, 6, 10, 36, 44, 501]

// Dessending sorted array
let sr = arr8.sort( function (a,b) {
    return b-a; // return dessending order array
});
console.log(arr8);// [501, 44, 36, 10, 6, 2]

// *********** forEach() ******************//
let arr9 = [11,5,543,27,81];
arr9.forEach(function (val) { // forEach runing for each element
    console.log(val + 5);// 16 10 548 32 86
});

// ***************** map() *****************//
let arr10 = [11,5,543,27,81];
// map sirf tab use karna hai jab aapko ek new array
// banana hai pichhle array ke data ke basics par 

// map dikhte hai mann me ek blank array bana liya karo
// If we don't do return then it give undefined for every element

let newarr10 = arr10.map(function(val) {
    return 12;
});
console.log(newarr10); // [12, 12, 12, 12, 12]

let maparr = arr10.map(function(val) {
    if(val>10) return val;
});
console.log(maparr); // [11, undefined, 543, 27, 81]
// jab bhi aapko koi case dikh jaaye jaha per ek array se new array banega 
// and wo naya array kuchh values ko rakhega tab [map] lagega

// ******************* filter() ********************//
let arr11 = [1,2,3,4,5,6,7,8,9];

// +++++++ true case of filter +++++++++++//
let newarray1filter = arr11.filter(function(val) {
    if(val > 4) return true; // If the return true then it will takes the values from old array
});
console.log(newarray1filter); // [5, 6, 7, 8, 9]

// +++++++ false case of filter +++++++++++//
let newarray2filter = arr11.filter(function(val) {
     return false; // If the return false then it will not takes the values from old array
});
console.log(newarray2filter); // []

// ********************* reduce() *********************//
let arr12 = [1,2,3,4,5,6];

let ans = arr12.reduce(function(accumulator, val) {
    return accumulator + val; // In this method accumulator reminde his last(first) value
},0);
console.log(ans);// 21

// ************** find() *******************//
let arr13 = [
    { id: 1, key: 1},
    { id: 2, key: 2},
    { id: 3, key: 1}
];

let value = arr13.find(function (val) {
    return val.key === 1;
});
console.log(value); // {id: 1, key: 1}

// *************** some() *********************//
let arr14 = [10,20,60,90,120];

let any = arr14.some(function (val) {
    return val > 85; // This method gives the result in boolean form(true/false)
});
console.log(any); // true

// ****************** every() ********************//
let arr15 = [10,20,60,90,120];

let each = arr15.every(function (val) {
    return val > 5;// This method check the condition for every element
                  // also return the boolean type result like(true/false)
});
console.log(each);// true

// ************* Destructuring and spread operator *************************//

// **************** Destructuring *******************//
let arr16 = [1,2,3,4,5];
let [a,b, ,c] = arr16;
console.log([a,b, ,c]); // [1, 2, empty, 4]

// ******************** spread operator ********************//
let arr17 = [1,2,3,4,5,6,7,8,9];
// let newarr17 = arr17; // You can not directly copy one array to another array
let newarr17 = [...arr17];
console.log(newarr17);// [1, 2, 3, 4, 5, 6, 7, 8, 9]