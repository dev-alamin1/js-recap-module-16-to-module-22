/*
        arrow function es6 version theke use kora hoy. 
        normal function r arrow function er kaj ekoi holeo,
        "this" keyword soho aro kichu jhamela ache .. but segulo bujhle kono jhamela hobe na..


*/

// 1. normal function decleration 

    function showOff()
    {
        console.log("I am Al-amin");
    }

    showOff();

// 2. arrowFunction 

    let showOff2 = ()=> console.log('I am Alamin');
    showOff2();

    // arrow function a , ak line er return value hole, sekhane return likhte hobe na

// 3. arrowfunction 

    let add = (a,b)=> a+b; // a+b er value return kora hoice but retun likhte hoyni
    console.log(add(5,1));

    let add2 = (a,b)=> console.log(a+b);
    add2(10,20);