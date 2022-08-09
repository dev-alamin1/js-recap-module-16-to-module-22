/*
        Problem ti khuboi simple.
        1. function ti , parameter hisebe age grohon korbe
        2. dekhte hbe age er value, jodi 2 dara vag korar por 0 hoy, tahole
        age = even , ar jodi 0 na hoy tahole age = odd 

        3. jodi age = even hoy, then return korebe true, na hole false return korbe

*/

function checkAgeOddOrEven(age){
        if(age % 2 == 0)
        {
            return true
        }
        else{
            return false;
        }
}

let age = 11;
let ageStatus = checkAgeOddOrEven(age);
console.log(ageStatus)