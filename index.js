// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64

// let exponent = function(base, power){
//     if (power === 0){
//         return 1;
//     }else if(power < 0){
//         return exponent(base, power+1)/base;
//     }else{
//         return base * exponent(base, power-1);
//     }
// };

//  console.log(exponent(8, 2));

// 2. Write functions min and max that will find min and max number in array using apply


// function getMaxNumInArray(arr) {
//     return Math.max.apply(null, arr);
// }

// function getMinNumInArray(arr) {
//     return Math.min.apply(null, arr);
// }

// let arr = [10, 1, 85, 16, 4];

// console.log(getMaxNumInArray(arr));
// console.log(getMinNumInArray(arr));

// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, branch and color. 
//    Please make examples for three different cars

// function displayCarDetails(ownerName) {
//    console.log(
//         `${ownerName} has a ${this.color} ${this.branch} car, registration number of the car: ${this.registrationNumber}`
//    );
// }
//     const car1 = { registrationNumber: "KA3452OP", branch: "KIA", color: "red"};
//     const car2 = { registrationNumber: "AI9874MK", branch: "BMW", color: "white"};
//     const car3 = { registrationNumber: "AA5421EA", branch: "FORD", color: "black"};
    
    
//     displayCarDetails.call(car1, "John");
//     displayCarDetails.call(car2, "Nick");
//     displayCarDetails.call(car3, "Olga");

// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
 
// function greet (person) {
//     if (person.name ==  'amy' ) {
//       return 'hey amy'
//     } else {
//       return 'hey arnold'
//     }
// }
//   const amy = {name: 'amy'}
//   console.log(greet(amy))

// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn’t do what we expect - fix that(find two solutions)


// for (var i = 0; i < 4; i++) {
//   setTimeout(() => console.log(i), 0)
// }
  
//decision_1

// for (let i = 0; i < 4; i++) {
//     setTimeout(() => console.log(i), 0)
// }

//decision_2

// for (var i = 0; i < 4; i++) {
//     setTimeout(function(i) {
//       return function() {
//         console.log(i);
//       }
//     }(i), 0);
// }