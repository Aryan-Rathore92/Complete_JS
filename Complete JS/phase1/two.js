// primitives --> aisi saari value jinko copy
//  karne par tumhe ek real copy mil jaaye
// string, number, boolean, null, undefind, symbol, bigInt

// reference(non-primitive)--> inko copy karne par real copy nahi
//  milegi but aapko reference milega parent ka
// Array, objects, functions

// null --> ka matlab hai app ne jan bhujkar koi value nhi di
// undefind --> appne ek variable banaya aur usse value nhi di  to jo value by default mili vo hai undefind

// symbol --> unique immuatable value create karta hai

/* Extra hai 
// future me hum koi librearies use karenge ab iss case mein un libraries
// mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai
// aur galti se hummari bannai hui fields uss library ki original fields ko
//  change kar deta hai
 */
// let u1 = Symbol("Aryan");
// let u2 = Symbol("Rathore"); // These both are diffrent but these seen like same 

// let num = 9007199254740991n // This is an Bigint number

// typeof
//typeof null ---> object
//typeof NaN ---> number
//typeof undefined ---> undefined
//typeof 12 ---> number
//typeof "" ---> string
//typeof true/false ---> boolean

// typr coercion (== vs ===)
// typr coercion --> concept jisme aapka ek type automatically convert hojayegga 

// "5" + 1 --> 51 (+ sign do two work first is adding and second is concatination)
// "5" - 1 --> 4  (- sign do only one work is substracting )

// Truthy and falsy values
// 0, false, "", null, undefined, NaN, document.all --> falsy
// If you want to check truthey and falsy then add !! before the value [Short Trick]


// Practise question
// Predicvt the result: true + false, null + 1, 5 + "5", !!undefined 
// result --> 1, 1, 55, false