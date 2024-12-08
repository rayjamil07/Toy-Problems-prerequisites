
function carSpeed(Speed){
//putting a propmt that asks for the speed of the car

    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    if( Speed < speedLimit ){
        return 'Okay';
    } else {
//calculating the demerit points
        const demeritPoints = Math.floor((Speed - speedLimit)) / kmPerDemeritPoint;
       if(demeritPoints > 12){
       return console.log('License suspended');
       } else {
        return console.log(demeritPoints);
       }
    } 
}
    console.log(carSpeed(70));

    
   
