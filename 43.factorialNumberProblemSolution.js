// 5! ( five factorial), it means mutiplication of 1 to 5;
// 10!( 10 factorial), it means mutiplication of 1 to 10;

function facTNum(givenNumber){
	
    var factorialNum = 1;
    // লুপ থেকে গুনের ভ্যালু নিয়ে কাজ করতে গেলে তার মান ১ সেট করতে হয়। 
    
    for(var i =1; i<=givenNumber; i++){
        
        factorialNum *= i;
        // গুনের এসাইনমেন্ট অপারেটর ব্যবহার করা হয়েছে। চাইলে , 
        // factorialNum = factorialNum + i ;  ব্যবহার করা যেত। 
    }

    return "Factorial number is "+factorialNum ;
}

var factorialNum = facTNum(5);
console.log(factorialNum);

