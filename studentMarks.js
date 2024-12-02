
function studentMarks(marks){


//creating a variable tha checks whether the number is valid
if(!marks || marks < 0 || marks > 100){
   return console.log('invalid input please input a number between 0 and 100');
} else {
   //getting the grade based on the marks
   let grade;
   if(marks > 79){
      grade = 'A';
   } else if (60 >marks< 79){
      grade = 'B';
   } else if (49 >marks< 59){
      grade = 'C';
   } else if (49 >marks< 40){
      grade = 'D';
   } else {
      grade = 'E';
   }
   return 'grade';
}
}

console.log(studentMarks)