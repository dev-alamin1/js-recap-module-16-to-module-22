/* ai file a , dekhano hoyece kivabe akti loop er vitore, amra loop chaliye
 loop er prottekta element er upor bivinno operaton korte pari .. jemon
 *** loop er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/


//6.Array theke odd number gulo k akta array te rakhbo r even gulo k bachai kore onno array te rakhbo( for ba while any loop )

let numSeries =[185,25,32,60,50,650,5,10];

let evenNumberArray = [];
let oddNumberArray =  [];

for(var b=1; b<numSeries.length; b++){

      let num = numSeries[b]; // alada kore element ber kore nilam , readable korte
    // cheack korbo, even naki odd.. even hole even array te rakhbo.. na hole odd array te

        if(num % 2 == 0){
            evenNumberArray.push(num);
        }else{
            oddNumberArray.push(num);
        }
}

console.log(`Main array is = `+numSeries+" \n and Even number is = "+evenNumberArray+" \n and Odd Number is = "+oddNumberArray);