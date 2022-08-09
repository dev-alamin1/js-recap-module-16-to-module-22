/*
    Loop control er jonno continue r break , ai 2Ti use kora hoy.
    break = loop ghore off kore debe
    continue = loop er sei tatkhonik elementi skip kore, next element a jabe
*/

// break  ... when array value is =15, then loop will be stopeed

const seriesOfNumber = [1,8,6,9,3,2,15,12];

let i=0;
while(i<seriesOfNumber.length){
    
    // condtion checking 
    if(seriesOfNumber[i] == 15){
        break;
    }

    // noraml elemnet console log

    console.log(seriesOfNumber[i]);
    i++;
}

console.log("================================");

// revese way print 

const seriesOfNumber2 = [1,8,6,9,3,2,15,12];

// first vabte hobe, array theke jehetu reverse way te print korbo, 
//tahole array er last element k select korbo kivabe?

// soltion : array er length theke -1 korte hbe.. r setai hobe a er value;

let a = seriesOfNumber.length -1; // that will be 7

while(a>=0)
{
    if(seriesOfNumber[a] == 9)
    {
        break;
    }

    console.log(seriesOfNumber[a] );
    a--;
}


console.log("================================");
console.log("======== another way ==========");
console.log("=================================");

console.log("Array skip reverse way ");

const seriesOfNumber3 = [1,8,6,9,3,2,15,12];

//var j= seriesOfNumber3-1;  jehetu array er last theke suru korbo , tai eta kora

for(var j= seriesOfNumber3.length-1; j>=0;j-- )
{
        let digit = seriesOfNumber3[j];

        if(digit == 6){
            console.log("Six has been Skiepd");
            continue;
        }

        console.log(digit);
}


