function payee(Salary){
    let basicSalary = 0
    if(salary>24000){
        return salary*0.1
    } else if(salary<24000){
        return salary*0.25
    }
}
let salary = 75000;
console.log(payee(25000))