
// ইঞ্চি থেকে ফিটে রুপান্তর করতে গেলে , ইঞ্চিকে ১২ দ্বারা ভাগ করতে হয়। 
// ফিট থেকে ইঞ্চিতে রুপান্তর করতে গেলে , ফিটকে ১২ দ্বারা গুন করতে হয়। 

/*
	এখানে ফাংশনটি , ২ভাবে ব্যবহার করা জাবে। এই ক্ষেত্রে প্যারামিটাররে উল্লেখ করে দিতে হবে ,
	আপনি কি থেকে কি রুপান্তর করতে চান। 
	প্রথমে দিতে হবে ভ্যালু যেটা থাকবে সংখ্যা দিয়ে, ২য় দিতে হবে কি থেকে রুপান্তর করতে চাচ্ছেন আর শেষে দিতে হবে কিসে রুপান্তর হবে। 
*/



function converter(value,unit,toConvert){
    
    if(unit === "inch" && toConvert ==="feet"){
       var   measurement = value /12 ;
    }else if(unit === "feet" &&  toConvert === "inch" ){
        var measurement = value*12;
    }

    return measurement.toFixed(3); // পুয়েন্টের পরে ৩ ঘর রাখার জন্য 
}

var measurement = converter(20,"inch","feet");
console.log(measurement); 