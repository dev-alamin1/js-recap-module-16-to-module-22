/*
    1.function name hobe odd_even
    2. function ti 1Ti integer parameter receive korbe
    3. inter value ti odd naki even function ti , eti nirnoy korte parbe
    5. 2vabe create korte hobe 
                1. parameter + return thakbe
                2. paremeter + return thabena 
*/

// 1. parameter + return 

function odd_even(givenInteger){
    if(givenInteger % 2 == 0)
    {
        return "Even Number";
    }else{
        return "Odd Number ";
    }
}

let oddOrEven = odd_even(3);

console.log(oddOrEven);

// 2. parameter + no return


// function odd_even(givenInteger){
//     if(givenInteger % 2 == 0)
//     {
//         console.log("Even Number");
//     }else{
//         console.log("Odd Number");
//     }
// }

// odd_even(6);
