// TASK 1 

// function formatFullName(firstName, lastName) {
//     return lastName + ", " + firstName;
// }


function formatFullName (firstName,lastName) {
   if (!firstName || !lastName) {
   
      return "Invalid.Enter Name.";
   } 
      firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
   lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
   return lastName + ", " + firstName;
}

// let result = formatFullName("Mecca", "Smith");
// console.log(result);

//  result = formatFullName("mecca", "smith");
// console.log(result);

//  result = formatFullName ("","smith")
// console.log(result);

// TASK 2

function calculateTotalCost (price, quantity, taxRate) {
 if (isNumber(price) && isNumber(quantity) && isNumber(taxRate)) {
 const totalCost = (price * quantity) * (1 + Number(taxRate));
 return totalCost;
 }
 return "Invalid input."
}

function isNumber(input) {
if (isNaN(input)) {
   return false;
} else {
   return true;
}
}

// Task 3

function checkEligibility (age,isEmployed) {
   if (age <= 18) {
      return "You are not eligible!";
   }
   if (isEmployed == true) {
      return "You are eligible!";
   }else {
      return "You are conditionally eligible.";
   }
   
   }
// console.log(checkEligibility(16,false))
// console.log(checkEligibility(42,false))
// console.log(checkEligibility(18,true))
// console.log(checkEligibility(42,true))
