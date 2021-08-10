// var [identifier] : [type-annotation] = value;
// var [identifier] : [type-annotation];
// var [identifier] = value;
// var[ident];
/** 
let b: boolean = false; // variable boolean
console.log (b);

let c: number = 10; //variable number
console.log(c);

let d: number=0o123;
console.log(d);

let firstname: string = "Joebidden"; // strings
console.log(firstname);

let aa: string[] = ["TS","JS"]; //declaring string in typescript

let ab: Array<string> = ["TS","JS"]; //Declaring arrays in typescript

let ac: [number, string]; //tupel

//Declaring enum in typescript
//enums in typescript allows to define a set of named constants
//constants - variables whose values can't be changed

const ad = 10;
enum fruit
{
    apple,
    banana,
    mango,
    orange
}
let fruitname: string = fruit[2];
console.log(fruitname);

let ag: any;// used when you do not know the datatype of an element. when dealing with dynamic values and 
            //you do not want to encounter compile time errors 
            //allows you to opt in/out of type checking during compilation
ag = 10;
ag = "Joebidden";

//Object type - represents a non-primitive type in typescript
//means can be any type which is not a number,string,boolean,symbol,null or unidentified

let ah: Object; //declaring an object types in typescript

function myfunc()
{
    for(var i=1; i<=2; i++){
        console.log("Welcome to Edureka");
    }
    console.log("Final value of i is: "+i);
}
myfunc();

//Type Assertions
//let myvariable: string = "Edureka"
//myvariable.//typescript will help with variable types

//let myvariable;

//let myvariable2 : number = (<string>myvariable).//typescript will assist with varaible types
//Making use of us keyboard
//let myvariable2 :number = (myvariable as string).// tyescript will assist with variable types

//FUNCTIONS IN TYPESCRIPT
//Functions-building blocks of a program- allows you to build differently layers of your program that deal with abstraction,information hiding etc
//Functions - describes how to do tasks
//Typescript adds some new capabilities to standard js functions to make them easier to work with
//In Typescript you can create fuctions both with the name or as anonymous functions just like js
/*let z=3;
function product(x,y) // specifying the types
{
    return x*y*z;

}
console.log(product(3,5));


//anonymous
let w = function (x,y)
{
    return x*y;
}
console.log(w(4,6));

//ARROW Function
let ex = (a) =>console.log(a); 
**/

//Typescript CLASSES
// class in js can include constructors,properties,and 

class myClass
{
    j: number; // property of myClass
    constructor(k: number)
    {
        this.j = k;
    }
    value(){
        return("The number is "+this.j);
    }
}
//creating an object of this class
let myobj = new myClass(6);
console.log(myobj.value());
