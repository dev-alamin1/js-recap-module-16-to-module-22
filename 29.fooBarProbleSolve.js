/*
    2ta function thakbe

    1.foo();
    2.bar();

    2ta function er ak output hobe = foo bar 
*/

function foo(){
    console.log("Foo");
    bar(); // call bar funcion here, it will execute after console log..
}

function bar()
{
    console.log("Bar")
}

foo();