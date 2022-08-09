
// grading system using switch case

function gradingSystem(score)
{
        switch(true)
        {
            case(score>=100):
                console.log("Please input score from 1 to 99");
                break;

            case(score>=80 && score<100):
                console.log("You have got A+ ");
                break;

            case(score>=70 && score<80):
                console.log("You have got A grade");
                break;

            case(score>=60 && score<70):
                console.log("You have got A- grade ");
                break;

            case(score>=50 && score<60):
                console.log("You have got B grade ");
                break;

            
            case(score>=40 && score<50):
                console.log("You have got C grade ");
                break;

            case(score>=33 && score<40):
                console.log("You have got D grade ");
                break;

            case(score<0 || score<=0):
                console.log("Zero or Negative score not allow");
                break;

            default:
                console.log("You got failed");
        }
}

gradingSystem(0);