// if, else, else-if
// switch case
// early return pattern

//  *********early return pattern****************

// function getVal(val) {
//     if(val < 25) return "D";
//     else if (val < 50) return "C";
//     else if (val < 75) return "B";
//     else return "A";
// }
// console.log(getVal(76));

// Exampleof -->  *********early return pattern****************
// function getGrade(score) {
//     if(score >= 90 && score <= 100) return "A+";
//     else if (score >= 80 && score <= 89) return "A";
//     else if (score >= 70 && score <= 79) return "B";
//     else if (score >= 60 && score <= 69) return "C";
//     else if (score >=33 && score <= 59) return "D";
//     else if (score >=0 && score <= 32) return "Fail";
//     else return "Inavlid marks";
// }
// console.log(getGrade(76));

// Rock-paper-scissors logic

// function rps(user, computer) {
//     if(user === computer) return "draw";

//     if(user === "rock" && computer === "scissor") return "user";
//     if(user === "scissor" && computer === "paper") return "user";
//     if(user === "paper" && computer === "rock") return "user";

//     return "computer";
// }
// console.log(rps("scissor","rock"))