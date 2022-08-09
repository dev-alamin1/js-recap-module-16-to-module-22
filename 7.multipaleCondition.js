// grading system

function gradingSystem(marks){

    if(marks>=80 && marks<100){
        console.log("You have got A+");
    }
    else if(marks>=70 && marks<80){
        console.log("You have got A grade")
    }
    else if(marks>=60 && marks<70){
        console.log("You have got A- grade")
    }
    else if(marks>=50 && marks<60){
        console.log("You have got B grade")
    }
    else if(marks>=40 && marks<50){
        console.log("You have got C grade")
    }
    else if(marks>=33 && marks<40){
        console.log("You have got D grade")
    }
    else if(marks>=100){
        console.log("please input marks between 1 to 99");
    }else{
        console.log("Fail");
    }
}

gradingSystem(100);


