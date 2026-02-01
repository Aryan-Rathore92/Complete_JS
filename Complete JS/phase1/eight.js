// ************************* Object ***********************//
// Object use for find diffrent details of a particular person
// let obj = {
//     name:"Aryan",
//     age: 18,
//     food:"Pizza",
//     height:188.5
// }
// // ********** first method to excess value from object **************//
// // console.log(obj.age);// 18
// // console.log(obj.food);// Pizza
// // console.log(obj.name);// Aryan

// // ********** second method to excess value from object **************//
// console.log(obj['name']);// 18
// console.log(obj['food']);// Pizza
// console.log(obj['name']);// Aryan

// let aa = "name";
// console.log(obj[aa]);// Aryan

// // ******************** Nesting and deep access ***************//
// const user = {
//     name:"Aryan",
//     address:{
//         city:"Muzaffarnagar",
//         pin:251316,
//         location:{
//             lat:23.2,
//             lng:77.4,
//         },
//     },
// };
// console.log(user.address.location.lng);// 77.4

// // ********************* Object Destructuring ***************//
// let {lat,lng} = user.address.location
// console.log(lat,lng);// 23.2 77.4

// **************** Looping Through Objects **********************//

// let obj1 = {
//     name: "Aryan",
//     age:18,
//     email:"123@gmail.com",
// };
// for(let key in obj1){
//     console.log(key);// name age email   
//     console.log(key,obj1[key]);//name Aryan  age 18 email 123@gmail.com   
// }

//************ Object.keys(), Object.values(), Object.entries() ****************//
// let obj = {
//     name: "Aryan",
//     age:18,
//     email:"123@gmail.com",
// };
//console.log(Object.keys(obj)); //  ['name', 'age', 'email']
//console.log(Object.values(obj));// ['Aryan', 18, '123@gmail.com']
// console.log(Object.entries(obj));
// Output of third console
// (3) [Array(2), Array(2), Array(2)]
// 0: (2) ['name', 'Aryan']
// 1: (2) ['age', 18]
// 2:  (2) ['email', '123@gmail.com']

//***********  Copying Objects:spread,Object assign ,deep clone **************//
// ******************* spread ****************//
// let obj2 = {...obj}
// console.log(obj2);// {name: 'Aryan', age: 18, email: '123@gmail.com'}

//************** Object assign ********************//
// let obj2 = Object.assign({},obj);
// console.log(obj2); 
// Output==>
// age: 18
// email: "123@gamil.com"
// name: "Aryan"

// let obj2 = Object.assign({price:Infinity},obj);
// console.log(obj2); // {price: Infinity, name: 'Aryan', age: 18, email: '123@gmail.com'}

// ****************** deep clone **********************//

// let obj = {
//     name: "Aryan",
//     age:18,
//     email:"123@gmail.com",
//     address:{
//         city:"MZN",
//     },
// };
// Only first keys and values inside the object only give the value and other object inside 
// one object gives refernce that is not good
// let obj2 = {...obj};
// obj2.address.city = "Delhi";

//let obj2 = JSON.parse(JSON.stringify(obj));// This is good it solve the bugs of deep clone

// ****************** optional chaining **************************//
// let obj = {
//     name: "Aryan",
//     age:18,
//     email:"123@gmail.com",
//     addresss:{
//         city:"MZN",
//     },
// };

// let optionalchain = obj?.address?.city;// Using this method we don't face the error it gives undefined
// console.log(optionalchain);// undefined

// ***************** computed properties ****************//
let role = "admin";
let obj = {
    name: "Aryan",
    age:18,
    email:"123@gmail.com",
    addresss:{
        city:"MZN",
    },
    [role]:"sarthakk",
};
// {name: 'Aryan', age: 18, email: '123@gmail.com', addresss: {…}, admin: 'sarthakk'}