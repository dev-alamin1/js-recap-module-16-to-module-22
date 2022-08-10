/*
    Simple akta problem..
    1.function er parameter hisebe hour nite hobe.
    2. er por, sei hour ke, minute a convert korte hoe..
        amra jani, 1hour = 60 minute, 
                   3 hour = 3*60 minute
                          = 180 minute
    
    3. er por , minute k return kora hoyece
*/
function hoursToMinute(hour)
{
   let minute = hour*60;
    return minute;
}

let hour = 2;
let minute = hoursToMinute(hour);
console.log(minute);