/* ai file a , dekhano hoyece kivabe akti array er vitore, amra loop chaliye
 array er prottekta element er upor bivinno operaton korte pari .. jemon

 ***  array er element gulo print kora, 
 **** element gulor jog kora ,gun kora , 
 **** element gulo theke even , odd ber kora
 **** element gulor moddo theke boro othoba choto element ber kora 
 **** conditon sapeekkhe loop theke kichu element niye ,new akti loop er moddhe rakha...
 
*/


//3.element gulor gun kora ( for ba while any loop )

let num =[10,20,30,40,50,60,5,10];
var mul =1;
let i=0;
while(i<num.length)
{
    mul = mul*num[i];
    console.log("Every itearaton mul = ",mul);
    i++;
}
console.log("Total mul ",mul);

console.log("================================");
console.log("======== another way (do while loop ) ==========");
console.log("=================================");

let num2 =[100,210,350,40,50,60,5,10];

let a=0;
var mul =1;
do{
    mul = mul+num2[a];
    console.log("Every itearaton mul = ",mul);
    a++;
}while(a<num2.length);
console.log("Total mul ",mul);



console.log("================================");
console.log("======== another way (for loop ) ==========");
console.log("=================================");


let num3 =[185,25,32,60,50,650,5,10];
let b =0;
var mul =1;
for(b; b<num3.length; b++){
    mul +=num3[b];
    console.log("Every itearaton mul = ",mul);
}
console.log("Total mul ",mul);