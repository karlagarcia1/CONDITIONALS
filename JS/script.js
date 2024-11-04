//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback: - You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years, he needs to turn 18.

 //Enter your age: 30 - You are old enough to drive.

 //Enter your age:15 - You are left with 3 years to drive

 let age = prompt("Enter your age:")
   console.log("Your age: " + age)

if (age >= 18) {
    console.log("You are old enough to drive")
} else {
    console.log("You are left with " + (18 - age) + " years to drive")
}



//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

//Enter your age: 30
//You are 5 years older than me

let currentAge = 19; 
let enteredAge = prompt("Enter your age:");
console.log("Your age: " + enteredAge);

if (currentAge > enteredAge) {
    console.log("I am " + (currentAge - enteredAge) + "years older than you");
} else if (currentAge < enteredAge) {
    console.log("You are " + (enteredAge - currentAge) + "years older than me");
} else {
    console.log("We have the same age");
}

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
 //usingif else
 //ternary operator


 //Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
 //September,October or November,the season is Autumn.
 //December,Januaryor February, the season is Winter.
//March,April or May, the season is Spring
 //June,July orAugust, the season is Summer
 
let isRaining = true 
if (isRaining) {
    console.log('you need a rain coat')
 } else {
    console.log('u dont need a coat')

 }


let = weather = "sunny"
if (weather === "rainy") {
  console.log ("you need a coat")
} else if (weather === "cloudy"){
  console.log ("it might be cold, you need a jacket")
} else if (weather === "sunny") {
    console.log ("go out freely")
}else {
  console.log("no need for rain coat")
}
  
let datUserInput = prompt ("what day is today?")
  
let day = dayUserInput.toLowerCase()

switch(day){
  case "monday":
  console.log("today is monday")
  break
  
  case "tuesday":
  console.log ("today is tuesday")
  break
  
  case "wednesday":
  console.log ("today is wednesdsy")
  break
  
  case "thursday":
  console.log ("today is thursday")
  break
  
  case "friday":
  console.log ("today is friday")
  break
  
  case "saturday":
  console.log ("today is saturday")
  break
  
  case "sunday":
  console.log ("today is sunday")
  break
  
  default:
  console.log("it is not a week day")
  
}

// 5.- Write a code which can give grades to students according to their scores:
 //80-100,A
 //70-89,B
 //60-69,C
 //50-59,D
 //0-49,F

 let examScore = prompt('Enter your exam score:');

if (examScore >= 90 && examScore <= 100) {
    console.log('Your grade is A');

} else if (examScore >= 70 && examScore <= 89) {
    console.log('Your grade is B');

} else if (examScore >= 60 && examScore <= 69) {
    console.log('Your grade is C');

} else if (examScore >= 50 && examScore <= 59) {
    console.log('Your grade is D');

} else if (examScore >= 0 && examScore <= 49) {
    console.log('Your grade is F');
    
} else {
    console.log('Your exam score is not valid');
}
