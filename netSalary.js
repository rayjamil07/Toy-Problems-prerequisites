//calculating the payee
const paye = function (basicSalary){
   let salary;
   if (basicSalary <= 24000){
     return basicSalary * 0.1; 
     } else if (basicSalary > 24000 && basicSalary <= 32333) { return 2400 + (basicSalary * 0.25);
     } else if (basicSalary > 32333 && basicSalary <= 500000) { return 2400 + 2083 + (basicSalary * 0.3); 
     } else if (basicSalary > 500000 && basicSalary <= 800000) { return 2400 + 2083 + (basicSalary * 0.3) + (basicSalary * 0.325); 
     } else { return 2400 + 2083 + 97499.675 + (basicSalary * 0.35); }
}

//function for calculating nssf
const nssf = function (basicSalary){
    let pensionablePay = 0.6;
    return Math.min(basicSalary, 36000) * pensionablePay;
    
} 

// // //function for calculating nhif
const nhif = function (basicSalary){
  
    if(basicSalary<=5999){
      return 150;
    } else if( basicSalary > 6000 && basicSalary < 7999){
      return 300
    } else if( basicSalary > 8000 && basicSalary < 11999){
      return 400
    } else if( basicSalary > 12000 && basicSalary < 14999){
      return 500
    } else if( basicSalary > 15000 && basicSalary < 19999){
      return 600 
    } else if( basicSalary > 20000 && basicSalary < 24999){
      return 750
    } else if( basicSalary > 25000 && basicSalary < 29999){
      return 850
    } else if( basicSalary > 30000 && basicSalary < 34999){
      return 900
    } else if( basicSalary > 35000 && basicSalary < 39999){
      return 950
    } else if( basicSalary > 40000 && basicSalary < 44999){
      return 1000
    } else if( basicSalary > 45000 && basicSalary < 49999){
      return 1100
    } else if( basicSalary > 50000 && basicSalary < 59999){
      return 1200
    } else if( basicSalary > 60000 && basicSalary < 69999){
      return 1300
    } else if( basicSalary > 70000 && basicSalary < 79999){
      return 1400
    } else if( basicSalary > 80000 && basicSalary < 89999){
      return 1500
    } else if( basicSalary > 90000 && basicSalary < 99999){
      return 1600
    } else {
      return 1700
    }

  }


function netSalary(basicSalary,benefits){
  
   let grossSalary = basicSalary + benefits;
   let netSalary = grossSalary - (nhif - paye - nssf);
   return { 
    'payee': paye(basicSalary),
    'NHIF deductions': nhif(basicSalary),
    'NSSF deductions': nssf(basicSalary),
    'Gross salary': grossSalary,
    'Net salary': grossSalary - (nhif(basicSalary) + paye(basicSalary) + nssf(basicSalary)),
   }
   
} 
 console.log(netSalary(125000,15000))



     

    





