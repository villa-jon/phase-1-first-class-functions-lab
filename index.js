// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
    
}

function returnLastTwoDrivers(drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]


const createFareMultiplier = function(numberOfTickets) {
    return function(fare) {
        return numberOfTickets * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(selectingDrivers, returnFirstTwoDrivers ) {
    return returnFirstTwoDrivers(selectingDrivers)
}