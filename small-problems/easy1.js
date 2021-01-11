function evenOrOdd(number) {
    if (number % 2 === 0) {
        return false;
    }
    else {
        return true;
    }
}

console.log(evenOrOdd(0))

function logOdds1To100() {
    for (let x = 1; x < 100;x++) {
        if (evenOrOdd(x) === true) {
            console.log(x)
            
        }
        
    }
}
logOdds1To100()

function logEvens1To100() {
    for (let x = 1; x < 100;x++) {
        if (evenOrOdd(x) === false) {
            console.log(x)
            
        }
        
    }
}
logEvens1To100()

let rlSync = require('readline-sync');
function findArea(){
    let areaFt = null
    let areaM = null
    let length = rlSync.questionFloat("Enter length\n")
    let width = rlSync.questionFloat("Enter width\n")
    let inMeters = rlSync.keyInYN("Is that in meters?")
    let inFeet = rlSync.keyInYN("Is that in feet?")
    if (inMeters == true) {
        areaM = length * width
        areaFt = areaM * 10.7639
    }
    else if (inFeet == true) {
     areaFt = length * width
     areaM = areaFt / 10.7639
    }
    else if (inFeet == false && inMeters == false) {
        console.log("must be in feet or meters")
        return
    }
    console.log(`The area is ${areaM}M or ${areaFt}Ft`)
}
findArea()

