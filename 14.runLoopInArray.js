/* ai file a , dekhano hoyece kivabe akti loop er vitore, amra loop chaliye
 loop er prottekta element er upor bivinno operaton korte pari .. jemon
 *** loop er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/

//1. loop theke number gulo print kore dekhabo ( for ba while any loop )
let num =[10,20,30,40,50,60,5,10]
let i=0;
while(i<num.length)
{
    console.log(num[i]);
    i++;
}

console.log("================================");
console.log("======== another way (do while loop ) ==========");
console.log("=================================");

let num2 =[10,20,30,40,50,60,5,10];

let a=0;

do{
    console.log(num2[a]);
    a++;
}while(a<num2.length);


console.log("================================");
console.log("======== another way (for loop ) ==========");
console.log("=================================");


let num3 =[10,20,30,40,50,60,5,10];
let b =0;
for(b; b<num3.length; b++){
    console.log(num3[b]);
}