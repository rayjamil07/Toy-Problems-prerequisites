
function carSpeed(Speed){
//putting a propmt that asks for the speed of the car
    let speed = prompt('Enter the speed of the car here')
    speed = Number(speed);
    const speedLimit = 70;
    if( speed < speedLimit ){
        return 'Okay';
    } else {
//calculating the demerit points
        const demeritPoints = Math.floor((speed - speedLimit)) / kmPerDemeritPoint;
        console.log('demeritPoints: '+ demeritPoints);
    }
}
    

    
   
