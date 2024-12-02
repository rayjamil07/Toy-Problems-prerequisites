//writing a function with our constants, the things that do not change 
function netSalary(amount){
    const PAYE = (grossSalary)*0.03;
    const NHIF = (grossSalary)*0.015;
    const NSSF = (grossSalary)*0.6;
    
    const netSalary = grossSalary - PAYE - NHIF - NSSF;
    return 'netSalary';
}



