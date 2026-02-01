// repeat karne ko loop khate hai
// 1 1 1 1 1 1 1 1 1
// 1 2 3 4 5 6 7 8 9


// kha se jaana hai-->  kha tak jaana hai --> kaise jana hai
// for
//  for (start; end; change) {
     
//  }

// Example of for loop
//  for (i=1; i<11; i++){
//     //code
//     console.log(i); 
//  }

// kaha se jaana hai --> kan rukna hai --> kaise jaana hai
// while
// start
// while(end){
//     // code
//     chnage
// }

// Example of while loop
// let i = 1;
// while(i<11){
//     console.log(i);
//     i++;   
// }

// do-while loop
// start
// do{
//     //code
//     change
// }
// while(end);

// break(when the statement will be true then it comes out complete code)
// for(i=1;i<200;i++){
//     if(i==30){
//         break;
//     }
//     console.log(i);   
// }

//continue(when the statement will be true then it skip the current exicuted statement and rather then code will be run)
// for(i=1;i<50;i++){
//     if(i==30){
//         continue;
//     }
//     console.log(i);  
// }

let count = 0;
for(i=1; i<101; i++){
    if(i%2!=0){
        console.log(i);
        count = count + 1;
        if(count == 5){
            break;
        }
        
    }
}