
/*
    1.function ti, 3ti interger value , perameters hibe nebe..
    2.er por, 3ti inter jog korbe, then tader avg return korbe.

*/

function make_avg(firstNumber,secondNumber,thirdNumber){

    let sum = firstNumber+ secondNumber+thirdNumber;
    let avg = sum/3; // this will make average of three number 
    
    // return avg;  // 6.666666666666667
 // ekhan jodi chai point er por 2ta number thakbe, tokhon ki korbo? just toFixed()
    return avg.toFixed(2);
}

const average = make_avg(5,5,10);
console.log(average);