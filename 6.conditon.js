var a =5;
var b =6;
var c=10;

(a>b)? console.log("a is large"):console.log("b is large");

// if condion

if(a>b){
   
    console.log(a)
}else{
   
    console.log(b);
}


if(a >b){
    if(a>c){
        console.log("A is large");
    }else{
        console.log("C is large");
    }
}else if(b>c){
    console.log("B is large");
}else{
    console.log("C is large");
}