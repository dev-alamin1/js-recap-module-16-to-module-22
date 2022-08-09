/*
	রিভার্স ভাবে , ফ্যাক্টরিয়াল নাম্বার নির্নয় করতে গেলে , একদম শেষ থেকে , ১ পর্যন্ত গুন করে আসতে হবে।
	তাই , লুপের ক্ষেত্রে i এর ভ্যালু হিসেবে, একদম শেষ সংখ্যাটি দিতে হয়। 
	এর পর পর i এর ভ্যালু ১ করে কমিয়ে নিয়ে , শেষ পর্যায়ে ১ এ নিয়ে  আসা হয়। 
*/

function factorial(givenInputNumber){
	
    let i = givenInputNumber;
    // আই এর ভ্যালু হিসেবে একদম শেষ সংখ্যাটি নেওয়া হলো
    
    let factorialNumber = 1;
    // লুপ থেকে গুনের ফলাফল এর জন্য ভ্যারিয়েবল এর মান ১ ধরতে হয়। 
    
    while(i>=1){
        
        factorialNumber *= i; // প্রথম বার আই এর মান ছিল ১০, factorialNumber এর ভ্যালু ছিল ১  তাই ( ১০*১ =১০)
        i--;
    }

    return "Factorial Number is ",factorialNumber;
}

let givenInputNumber = 10;
let factNumber = factorial(givenInputNumber);

console.log('Factorial Number => ',factNumber);