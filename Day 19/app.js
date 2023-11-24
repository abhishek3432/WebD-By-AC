//v1
//about function definition and declaration
function aiyen()
{
    console.log("aiyen!!");
}

function isadult()
{
    let age=14;     
    if(age>=19)
        console.log("yes");
    else
        console.log("no");    
}

//function call
aiyen();
isadult();

//v2
//prqs
function printPoem()
{
    console.log("fdsfdsfdsfa\nsfsfdsfdsf\kjljklkj");
}
printPoem();

//v3
//pr qs
function rollDice()
{
    let dice1=Math.floor((Math.random()*6)+1), dice2=Math.floor((Math.random()*6))+1, dice3=Math.ceil((Math.random()*6));
    console.log(`rolling dice1 and number comes is ${dice1}`);
    console.log(`rolling dice2 and number comes is ${dice2}`);
    console.log(`rolling dice3 and number comes is ${dice3}`);
}

rollDice();


//v4
//function with arguments
function printInfo(name, age)
{
    console.log(`${name}'s age is ${age}`);
}

printInfo("abhishek", 19);   
printInfo("tiwari");

//v5
//pr qs
function findAverage(a, b, c)
{
    let aver=(a+b+c)/3;
      console.log(aver);
}

findAverage(2,3,2);

//v6
//pr qs

//v7
//return keyword
function findAverage(a, b, c)
{

    let aver=(a+b+c)/3;
    return aver;
}

console.log(findAverage(8,10,9));
//little trick to find avg of 5 no. using 3 arg func
let ans= findAverage(findAverage(8,10,9), 55, 33);
console.log(ans);

//v8
//pr qs

//v9
//pr qs

//v10
//funtion scope
let sum=2;//global scope

function su(a, d)
{
    let sum=a+d;//funtion scope
    console.log(sum);//funtion sum used
}

su(2,3);
console.log(sum);//global sum variable is used

//v11
//block scope works on let, const BUT not on var
{
    var a=1;//block scope don't work
    // let b=2;//not accessible because block scope variable
    // const v=5;//not accessible because block scope variable
}

console.log(a);
// console.log(b);//block scope
// console.log(c);//block scope

let age=2;
if(age>=10)
{
    let str="adult";//block scope
}
// console.log(str);//not accessible because block scope variable

//v12
//lexical scope 
function outerfunc()
{
    let x=4;//lexical scope
    let y=6;//lexical scope
    //hoisting in js allow function to access variable befor definition and declaration
    function inner()//function scope so can't access oustside outerfunc()
    {
        console.log(x);//lexical scope
        console.log(x);//lexical scope
    }

    inner()
}

//v13
//pr qs
//output will be hello namaste namaste

//v14
//function expression 
let add=function(a, b){
    return a+b;
}
console.log(add(2, 4));


//v15
//higher order function
function multiplesuwagat(suwagat, times)
{
    for(let i=1; i<=times; i++)
    {
        suwagat();
    }
}
let suwagat=function(){
    console.log("apka suwagat hai");
}

multiplesuwagat(suwagat, 5);

//v16
//function factory
function oddOrEven(request)
{
    if(request=="even")
    {
        return function(n){
            console.log((n%2==0));
        }
    }
    else if(request=="odd")
        {   
            return function(n){
            console.log(!(n%2==0));
        }
        }
        else
        {
            console.log("wrong request");
        }
}

let request= "odd";//even;
oddOrEven(request);

//v17
//methods
const calculator={
    num: 55,
    add: function(a,b){//one way
        return a+b;
    },
    sub(a,b){//shorthand of above
        return a-b;
    },
    mul: function(a,b){
        return a*b;
    }
}

console.log(calculator.num);
console.log(calculator.add(3,4));
console.log(calculator.sub(2, 3));
console.log(calculator.mul(3, 3));
