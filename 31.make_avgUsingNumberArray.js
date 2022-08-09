/*
    1. function er nam hobe make_avg()
    2.ai funtion akta array nebe parameter hisebe. jei array te sob number thakbe integer and parameter hisebe array er size ba length o dite hobe.

    3. er por, function ti array er element gulor average return korbe
    
*/

function make_avg(integerArray,arrayLength)
{
     let sum =0;

        for(let i=0; i<arrayLength; i++)
        {
                sum += integerArray[i];
        }
     let average = sum/arrayLength;
     
     return average.toFixed(3);
}

const integerArray = [5,3,9,7,8,3,4,6,9,5,2];
const arrayLength = integerArray.length;

let arrayAvg = make_avg(integerArray,arrayLength);
console.log(arrayAvg);