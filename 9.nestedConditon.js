// find the smallest number 
// now write a program how to find the smallest number ( use nested if else )

function findSmallestNumber (firstNumber,secondNumber,lastNumber)
{
        let smallestNumber;
        if(firstNumber < secondNumber){
            if(firstNumber < lastNumber)
            {
                return smallestNumber = firstNumber;
            }else{
                return smallestNumber = lastNumber
            }
        }else{
             if(secondNumber < lastNumber){
                return smallestNumber = secondNumber;
             }else{
                return smallestNumber = lastNumber;
             }
        }
}

let firstNumber = 5;
let secondNumber = 10;
let thirdNumber = 4;

const smallestNumber = findSmallestNumber(firstNumber,secondNumber,thirdNumber);
console.log(smallestNumber," is the smallest number ");