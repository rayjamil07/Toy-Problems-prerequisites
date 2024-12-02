function nhifDeductions(salary,){
//NHIF deductions
   
 //input for the salary to determine the deductions
  if ( salary >= 40000 && salary <= 44999){
    return console.log('deductions:1000');
  } else if ( salary >= 45000 && salary <= 49999){
    return console.log('deductions:1100');
  } else if ( salary >= 50000 && salary <= 59999){
    return console.log('deductions:1200');
  } else if ( salary >= 60000 && salary <= 69999){
    return console.log('deductions:1300');
  } else if ( salary >= 70000 && salary <= 79999){
    return console.log('deductions:1400');
  } else if ( salary >= 80000 && salary <= 89999){
    return console.log('deductions:1500');
  } else if( salary >= 90000 && salary <= 99999){
    return console.log('deductions:1600');
  } else if( salary >= 10000){
    return console.log('deductions:1700');
  }
  
//PAYE(tax calculations)
  function PAYE(salary){

  }
  
  if ( salary = 24000){
    paye = (salary)*0.1;
  } else if ( salary >= 24001 && salary <= 32333 ){
    paye = (salary)*0.25;
  } else if ( salary >= 32334 && salary <= 500000 ){
    paye = (salary)*0.3;
  } else if ( salary > 800000 ){
    paye = (salary)*0.35;
  }
  return 'paye';

  //calculating nssf deductions
 function nssfDeductions(){
    let nssfDeductions = (salary)*0.06;
 }


 function netSalary(amount){
    const netSalary = grossSalary - PAYE - NHIF - NSSF;
    return 'netSalary';
}
}





     

    





