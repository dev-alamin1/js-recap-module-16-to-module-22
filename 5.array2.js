//  add or remove array element using push ,pop, shift, unshift

const num =[3,5,6,32,1,6,8];
console.log(num);
// add element in last 

num.push(20)
num.push(20)
num.push(50)
num.push(60)
console.log(num);

// array pop

num.pop()

console.log(num)

// unshift

num.unshift("anik");
num.unshift("ahmad");

console.log(num)

num.shift("ahmad");

console.log(num)

// indexOf

const num2 =[3,5,6,32,1,6,8];

if(num2.indexOf(3) != -1){
    console.log(3,"existed on the arry")
}

