// Code your solution in this file!


const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


let [driver1,driver2,driver3,driver4]= drivers

function returnFirstTwoDrivers(){
    return [driver1,driver2]
}
function returnLastTwoDrivers(){
    return [driver3,driver4]
}



let selectingDrivers=[returnFirstTwoDrivers, returnLastTwoDrivers];

let createFareMultiplier=(multiple) =>{
    return (fare=4)=>{
        return fare*multiple
    }
    
}

const fareDoubler=  createFareMultiplier(2)

const fareTripler=  createFareMultiplier(3)



const selectDifferentDrivers=(drivers, callback) => {
    return callback(drivers);
}