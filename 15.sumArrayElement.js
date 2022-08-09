/* ai file a , dekhano hoyece kivabe akti loop er vitore, amra loop chaliye
 loop er prottekta element er upor bivinno operaton korte pari .. jemon
 *** loop er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/


//2.element gulor jog kora ,gun kora ( for ba while any loop )

let num =[10,20,30,40,50,60,5,10];
var sum =0;
let i=0;
while(i<num.length)
{
    sum = sum+num[i];
    console.log("Every itearaton sum = ",sum);
    i++;
}
console.log("Total sum ",sum);

console.log("================================");
console.log("======== another way (do while loop ) ==========");
console.log("=================================");

let num2 =[100,210,350,40,50,60,5,10];

let a=0;
var sum =0;
do{
    sum = sum+num2[a];
    console.log("Every itearaton sum = ",sum);
    a++;
}while(a<num2.length);
console.log("Total sum ",sum);



console.log("================================");
console.log("======== another way (for loop ) ==========");
console.log("=================================");


let num3 =[185,25,32,60,50,650,5,10];
let b =0;
var sum =0;
for(b; b<num3.length; b++){
    sum +=num3[b];
    console.log("Every itearaton sum = ",sum);
}
console.log("Total sum ",sum);